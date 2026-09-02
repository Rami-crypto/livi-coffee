const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Create a minimal valid PNG with emerald background and golden coffee emblem
function createPNG(width, height) {
  // Color definitions (RGBA)
  // Background: #071f18 (Emerald)
  // Gold: #dfb75c
  // Light Gold: #f5e0a0
  
  const buffer = Buffer.alloc(width * height * 4);
  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.44;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Deep Emerald Base
      let r = 7, g = 31, b = 24, a = 255;

      // Golden outer circular border
      if (dist >= radius - 4 && dist <= radius) {
        r = 223; g = 183; b = 92; a = 255;
      } else if (dist < radius - 4) {
        // Inner gradient
        const grad = 1 - (dist / radius) * 0.4;
        r = Math.floor(13 * grad);
        g = Math.floor(56 * grad);
        b = Math.floor(43 * grad);

        // Dripper V-Shape Cup Art in Center
        // Cup top line: cy - 0.28*h to cy + 0.22*h
        const topY = cy - 0.22 * height;
        const botY = cy + 0.18 * height;
        const topW = 0.35 * width;
        const botW = 0.08 * width;

        if (y >= topY && y <= botY) {
          const t = (y - topY) / (botY - topY);
          const currentW = topW * (1 - t) + botW * t;
          if (Math.abs(dx) <= currentW) {
            // Gold fill for cup
            r = 212; g = 175; b = 55;
            // Shading
            if (Math.abs(dx) < 3 || Math.abs(dx) > currentW - 3) {
              r = 245; g = 224; b = 160;
            }
          }
        }

        // Saucer base
        if (y > botY && y <= botY + 0.06 * height && Math.abs(dx) <= 0.22 * width) {
          r = 223; g = 183; b = 92;
        }

        // Handle
        const handleX = cx + 0.25 * width;
        const handleY = cy - 0.02 * height;
        const hDist = Math.sqrt((x - handleX) * (x - handleX) + (y - handleY) * (y - handleY));
        if (hDist >= 0.08 * width && hDist <= 0.12 * width && x > cx + 0.18 * width) {
          r = 223; g = 183; b = 92;
        }
      }

      buffer[idx] = r;
      buffer[idx + 1] = g;
      buffer[idx + 2] = b;
      buffer[idx + 3] = a;
    }
  }

  // Build PNG chunks
  // Signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdr);

  // IDAT chunk (scanlines with filter byte 0)
  const scanlines = Buffer.alloc(height * (width * 4 + 1));
  let scanIdx = 0;
  for (let y = 0; y < height; y++) {
    scanlines[scanIdx++] = 0; // No filter
    for (let x = 0; x < width * 4; x++) {
      scanlines[scanIdx++] = buffer[y * width * 4 + x];
    }
  }

  const compressedData = zlib.deflateSync(scanlines);
  const idatChunk = createChunk('IDAT', compressedData);

  // IEND chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const crc = crc32(chunk.subarray(4, 8 + len));
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

// CRC32 implementation
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    const byte = buf[i];
    crc ^= byte;
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

fs.writeFileSync(path.join(assetsDir, 'icon-192.png'), createPNG(192, 192));
fs.writeFileSync(path.join(assetsDir, 'icon-512.png'), createPNG(512, 512));
fs.writeFileSync(path.join(assetsDir, 'apple-touch-icon.png'), createPNG(180, 180));

console.log('Successfully generated iOS & PWA icons!');
