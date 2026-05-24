const fs = require('fs');
const zlib = require('zlib');

function readPng(filePath) {
  const buf = fs.readFileSync(filePath);
  let pos = 8; // skip signature
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

  console.log({ width, height, bitDepth, colorType });
  const compressed = Buffer.concat(idatBuffers);
  const decompressed = zlib.inflateSync(compressed);
  
  // Read first few pixels (scanline 0)
  // Scanline format: [filterType (1 byte), pixel0_r, pixel0_g, pixel0_b, pixel1_r, ...]
  const filterType = decompressed[0];
  const r = decompressed[1];
  const g = decompressed[2];
  const b = decompressed[3];
  console.log('Filter Type:', filterType);
  console.log('Top-Left Pixel RGB:', { r, g, b }, '#' + r.toString(16).padStart(2,'0') + g.toString(16).padStart(2,'0') + b.toString(16).padStart(2,'0'));
}

readPng('public/logo1.png');
