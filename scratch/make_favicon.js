/**
 * Converts a PNG file into a valid .ico file by embedding the PNG data
 * directly inside the ICO container. Modern browsers (Chrome, Firefox, Edge,
 * Safari) all support this format since Windows Vista / ICO spec revision.
 *
 * ICO layout:
 *   [6-byte header] [16-byte directory entry] [PNG bytes]
 */
const fs = require('fs');
const path = require('path');

function pngToIco(inputPng, outputIco) {
  const pngData = fs.readFileSync(inputPng);

  // ---- ICO Header (6 bytes) ----
  // Reserved: 2 bytes = 0
  // Type:     2 bytes = 1 (ICO)
  // Count:    2 bytes = 1 (one image)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);  // reserved
  header.writeUInt16LE(1, 2);  // type = ICO
  header.writeUInt16LE(1, 4);  // count = 1

  // ---- Directory Entry (16 bytes) ----
  // Width  (1 byte):  0 = 256px
  // Height (1 byte):  0 = 256px
  // ColorCount (1 byte): 0 = no palette
  // Reserved   (1 byte): 0
  // Planes     (2 bytes LE): 1
  // BitCount   (2 bytes LE): 32 (RGBA)
  // SizeInBytes(4 bytes LE): PNG data size
  // FileOffset (4 bytes LE): 6 (header) + 16 (dir entry) = 22
  const dirEntry = Buffer.alloc(16);
  dirEntry[0] = 0;              // width  (0 = 256)
  dirEntry[1] = 0;              // height (0 = 256)
  dirEntry[2] = 0;              // color count
  dirEntry[3] = 0;              // reserved
  dirEntry.writeUInt16LE(1, 4); // planes
  dirEntry.writeUInt16LE(32, 6);// bit count
  dirEntry.writeUInt32LE(pngData.length, 8);  // size of PNG data
  dirEntry.writeUInt32LE(22, 12);             // offset to PNG data (6+16)

  const icoBuffer = Buffer.concat([header, dirEntry, pngData]);
  fs.writeFileSync(outputIco, icoBuffer);

  console.log(`Created ${path.basename(outputIco)} (${icoBuffer.length} bytes) from ${path.basename(inputPng)}`);
}

// Convert logo-6_transparent.png -> favicon.ico (in app/)
pngToIco(
  'public/logo-6_transparent.png',
  'app/favicon.ico'
);

// Also write a copy as icon.png for Next.js metadata
fs.copyFileSync('public/logo-6_transparent.png', 'app/icon.png');
console.log('Copied logo-6_transparent.png -> app/icon.png');

console.log('Done.');
