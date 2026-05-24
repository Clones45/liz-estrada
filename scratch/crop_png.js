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

function cropPng(inputPath, outputPath, padding = 20) {
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
    } else if (type === 'IEND') {
      break;
    }
  }

  if (colorType !== 6 || bitDepth !== 8) {
    throw new Error('Only 8-bit RGBA PNG is supported by this cropper. ColorType: ' + colorType);
  }

  console.log(`Decompressing ${width}x${height} RGBA PNG...`);
  const compressed = Buffer.concat(idatBuffers);
  const decompressed = zlib.inflateSync(compressed);

  const stride = width * 4;
  let minX = width, maxX = 0, minY = height, maxY = 0;

  // Scan for bounding box of non-transparent pixels (alpha > 0)
  for (let y = 0; y < height; y++) {
    const scanlineStart = y * (stride + 1);
    const filterType = decompressed[scanlineStart];
    if (filterType !== 0) {
      throw new Error('Filter type is not 0. Make sure the input PNG was written with filter type 0.');
    }

    for (let x = 0; x < width; x++) {
      const alpha = decompressed[scanlineStart + 1 + x * 4 + 3];
      if (alpha > 5) { // Threshold for visibility
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
    const srcScanlineStart = srcY * (stride + 1);
    const outScanlineStart = y * (outStride + 1);

    outDecompressed[outScanlineStart] = 0; // Filter type 0 (None)

    for (let x = 0; x < newW; x++) {
      const srcX = x + minX;
      const srcOffset = srcScanlineStart + 1 + srcX * 4;
      const outOffset = outScanlineStart + 1 + x * 4;

      outDecompressed[outOffset] = decompressed[srcOffset];
      outDecompressed[outOffset + 1] = decompressed[srcOffset + 1];
      outDecompressed[outOffset + 2] = decompressed[srcOffset + 2];
      outDecompressed[outOffset + 3] = decompressed[srcOffset + 3];
    }
  }

  console.log('Compressing output data...');
  const outCompressed = zlib.deflateSync(outDecompressed);

  // Write PNG signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // Write IHDR Chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(newW, 0);
  ihdrData.writeUInt32BE(newH, 4);
  ihdrData[8] = 8;  // bit depth
  ihdrData[9] = 6;  // color type: 6 (RGBA)
  ihdrData[10] = 0; // compression method
  ihdrData[11] = 0; // filter method
  ihdrData[12] = 0; // interlace method
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Write IDAT Chunk
  const idatChunk = makeChunk('IDAT', outCompressed);

  // Write IEND Chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  const outPng = Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
  fs.writeFileSync(outputPath, outPng);
  console.log(`Saved cropped transparent PNG to ${outputPath}`);
}

cropPng('public/logo-2_transparent.png', 'public/logo-2_transparent.png', 40);
