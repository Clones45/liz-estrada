const fs = require('fs');
const zlib = require('zlib');

function inspectColors(inputPath) {
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

  const compressed = Buffer.concat(idatBuffers);
  const decompressed = zlib.inflateSync(compressed);
  const stride = width * 3;
  const rawPixels = Buffer.alloc(width * height * 3);

  function getRaw(x, y) {
    if (x < 0 || y < 0) return 0;
    return rawPixels[y * stride + x];
  }

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

  // Count colors in the middle area of the image (y from 800 to 1200, x from 400 to 1600)
  const counts = {};
  for (let y = 800; y < 1200; y++) {
    for (let x = 400; x < 1600; x++) {
      const r = rawPixels[y * stride + x * 3];
      const g = rawPixels[y * stride + x * 3 + 1];
      const b = rawPixels[y * stride + x * 3 + 2];
      if (r < 240 || g < 240 || b < 240) {
        const hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        counts[hex] = (counts[hex] || 0) + 1;
      }
    }
  }

  const sorted = Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 15);
  console.log('Top colors in logo-4:', sorted);
}

inspectColors('public/logo-4.png');
