/* Генератор иконок: PNG-энкодер на Node stdlib (zlib), без зависимостей.
   Дизайн: скруглённый индиго-квадрат + золотое кольцо + точка. */
"use strict";
const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

/* ---------- PNG ---------- */
const crcTable = (() => {
  const t = new Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c >>> 0;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crc]);
}
function encodePNG(w, h, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0; // 8-bit RGBA
  const raw = Buffer.alloc(h * (w * 4 + 1));
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0; // filter: none
    rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
  }
  const idat = zlib.deflateSync(raw);
  return Buffer.concat([sig, chunk("IHDR", ihdr), chunk("IDAT", idat), chunk("IEND", Buffer.alloc(0))]);
}

/* ---------- отрисовка ---------- */
function smooth(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}
function draw(size, maskable = false) {
  const buf = Buffer.alloc(size * size * 4);
  const cx = (size - 1) / 2, cy = (size - 1) / 2, half = size / 2;
  const radius = size * 0.22;
  const R = size * 0.30, T = size * 0.055, dotR = size * 0.10;
  const gold = [212, 175, 55], goldSoft = [232, 197, 107];
  const bgTop = [0x24, 0x26, 0x61], bgBot = [0x15, 0x16, 0x32];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const px = x + 0.5, py = y + 0.5;
      // скруглённый квадрат (для maskable — сплошной фон без прозрачных углов)
      const dx = Math.max(Math.abs(px - cx) - (half - radius), 0);
      const dy = Math.max(Math.abs(py - cy) - (half - radius), 0);
      const base = maskable ? 1 : (1 - smooth(radius - 1.5, radius + 1.5, Math.hypot(dx, dy)));
      // градиент фона
      const t = py / size;
      let r = bgTop[0] + (bgBot[0] - bgTop[0]) * t;
      let g = bgTop[1] + (bgBot[1] - bgTop[1]) * t;
      let b = bgTop[2] + (bgBot[2] - bgTop[2]) * t;
      // золотое кольцо
      const dist = Math.hypot(px - cx, py - cy);
      const ring = 1 - smooth(T, T + 2, Math.abs(dist - R));
      r += (gold[0] - r) * ring; g += (gold[1] - g) * ring; b += (gold[2] - b) * ring;
      // золотая точка в центре
      const dot = 1 - smooth(dotR, dotR + 2, dist);
      r += (goldSoft[0] - r) * dot; g += (goldSoft[1] - g) * dot; b += (goldSoft[2] - b) * dot;

      const o = (y * size + x) * 4;
      buf[o] = Math.round(r); buf[o + 1] = Math.round(g); buf[o + 2] = Math.round(b);
      buf[o + 3] = Math.round(base * 255);
    }
  }
  return buf;
}

const outDir = path.join(__dirname, "..", "icons");
fs.mkdirSync(outDir, { recursive: true });
const targets = [
  { name: "icon-512.png", s: 512 },
  { name: "icon-192.png", s: 192 },
  { name: "apple-touch-icon.png", s: 180 },
  { name: "icon-maskable-512.png", s: 512, maskable: true },
  { name: "icon-maskable-192.png", s: 192, maskable: true }
];
for (const { name, s, maskable } of targets) {
  fs.writeFileSync(path.join(outDir, name), encodePNG(s, s, draw(s, maskable)));
  console.log("wrote", name, s + "x" + s);
}
