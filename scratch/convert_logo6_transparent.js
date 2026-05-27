const fs = require('fs');
const zlib = require('zlib');

// CRC-32 Implementation
function makeCrcTable() {
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    crcTable[n] = c;
  }
  return crcTable;
}

const crcTable = makeCrcTable();

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function processLogo(inputPath, outputPath, padding = 40) {
  const buf = fs.readFileSync(inputPath);
  let pos = 8;
  let idatBuffers = [];
  let width, height, bitDepth, colorType;

  while (pos < buf.length) {
    const length = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.slice(pos + 8, pos + 8 + length);
    pos += 12 + length;

    if (type === 'IHDR') {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
    } else if (type === 'IDAT') {
      idatBuffers.push(data);
    }
  }

  if (colorType !== 2 || bitDepth !== 8) {
    throw new Error('Only 8-bit RGB PNG is supported. ColorType: ' + colorType);
  }

  console.log(`Decoding ${width}x${height} RGB PNG...`);
  const compressed = Buffer.concat(idatBuffers);
  const decompressed = zlib.inflateSync(compressed);

  const stride = width * 3;
  const rawPixels = Buffer.alloc(width * height * 3);

  function getRaw(x, y) {
    if (x < 0 || y < 0) return 0;
    return rawPixels[y * stride + x];
  }

  // Unfilter scanlines (handle all filter types)
  for (let y = 0; y < height; y++) {
    const scanlineStart = y * (stride + 1);
    const filterType = decompressed[scanlineStart];
    for (let x = 0; x < stride; x++) {
      const filtVal = decompressed[scanlineStart + 1 + x];
      let rawVal = 0;

      if (filterType === 0) {
        rawVal = filtVal;
      } else if (filterType === 1) {
        rawVal = filtVal + getRaw(x - 3, y);
      } else if (filterType === 2) {
        rawVal = filtVal + getRaw(x, y - 1);
      } else if (filterType === 3) {
        rawVal = filtVal + Math.floor((getRaw(x - 3, y) + getRaw(x, y - 1)) / 2);
      } else if (filterType === 4) {
        const a = getRaw(x - 3, y);
        const b = getRaw(x, y - 1);
        const c = getRaw(x - 3, y - 1);
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        let pr = 0;
        if (pa <= pb && pa <= pc) pr = a;
        else if (pb <= pc) pr = b;
        else pr = c;
        rawVal = filtVal + pr;
      }

      rawPixels[y * stride + x] = rawVal & 255;
    }
  }

  // Sample background color from corners (average of all 4 corners)
  function getBgColor() {
    const corners = [
      [rawPixels[0], rawPixels[1], rawPixels[2]],
      [rawPixels[(width-1)*3], rawPixels[(width-1)*3+1], rawPixels[(width-1)*3+2]],
      [rawPixels[(height-1)*width*3], rawPixels[(height-1)*width*3+1], rawPixels[(height-1)*width*3+2]],
      [rawPixels[((height-1)*width + width-1)*3], rawPixels[((height-1)*width + width-1)*3+1], rawPixels[((height-1)*width + width-1)*3+2]],
    ];
    const avg = corners.reduce((acc, c) => [acc[0]+c[0], acc[1]+c[1], acc[2]+c[2]], [0,0,0]);
    return avg.map(v => Math.round(v / corners.length));
  }

  const bgColor = getBgColor();
  console.log('Detected background color:', bgColor, '#' + bgColor.map(v => v.toString(16).padStart(2,'0')).join(''));

  console.log('Processing colors (removing background, preserving logo colors)...');

  const rgbaBuffer = Buffer.alloc(width * height * 4);
  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const r = rawPixels[y * stride + x * 3];
      const g = rawPixels[y * stride + x * 3 + 1];
      const b = rawPixels[y * stride + x * 3 + 2];

      // Distance from background color
      const distToBg = Math.sqrt((r - bgColor[0]) ** 2 + (g - bgColor[1]) ** 2 + (b - bgColor[2]) ** 2);

      let alpha = 0;
      if (distToBg < 12) {
        // Very close to background — fully transparent
        alpha = 0;
      } else {
        // Keep original color with alpha based on distance from background
        alpha = Math.min(255, Math.round((distToBg / 50) * 255));
        if (alpha > 240) alpha = 255;
        if (alpha < 10) alpha = 0;
      }

      const offset = (y * width + x) * 4;
      rgbaBuffer[offset]     = r; // Keep original Red
      rgbaBuffer[offset + 1] = g; // Keep original Green
      rgbaBuffer[offset + 2] = b; // Keep original Blue
      rgbaBuffer[offset + 3] = alpha;

      // Track bounding box of visible content
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log('Content Bounding Box:', { minX, maxX, minY, maxY });

  if (maxX < minX || maxY < minY) {
    console.log('No content found in PNG!');
    return;
  }

  // Add padding
  minX = Math.max(0, minX - padding);
  maxX = Math.min(width - 1, maxX + padding);
  minY = Math.max(0, minY - padding);
  maxY = Math.min(height - 1, maxY + padding);

  const newW = maxX - minX + 1;
  const newH = maxY - minY + 1;
  console.log(`Cropped size with padding: ${newW}x${newH}`);

  const outStride = newW * 4;
  const outDecompressed = Buffer.alloc(newH * (outStride + 1));

  for (let y = 0; y < newH; y++) {
    const srcY = y + minY;
    const outScanlineStart = y * (outStride + 1);
    outDecompressed[outScanlineStart] = 0; // Filter type 0

    for (let x = 0; x < newW; x++) {
      const srcX = x + minX;
      const srcOffset = (srcY * width + srcX) * 4;
      const outOffset = outScanlineStart + 1 + x * 4;

      outDecompressed[outOffset]     = rgbaBuffer[srcOffset];
      outDecompressed[outOffset + 1] = rgbaBuffer[srcOffset + 1];
      outDecompressed[outOffset + 2] = rgbaBuffer[srcOffset + 2];
      outDecompressed[outOffset + 3] = rgbaBuffer[srcOffset + 3];
    }
  }

  console.log('Compressing output data...');
  const outCompressed = zlib.deflateSync(outDecompressed);

  // Write PNG
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(newW, 0);
  ihdrData.writeUInt32BE(newH, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;

  const outPng = Buffer.concat([
    signature,
    makeChunk('IHDR', ihdrData),
    makeChunk('IDAT', outCompressed),
    makeChunk('IEND', Buffer.alloc(0))
  ]);

  fs.writeFileSync(outputPath, outPng);
  console.log(`Saved transparent cropped PNG to ${outputPath}`);
}

try {
  processLogo('public/logo-6.png', 'public/logo-6_transparent.png', 40);
} catch (err) {
  console.error('Error:', err);
}
