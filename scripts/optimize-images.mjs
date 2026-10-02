// Zet JPG's in public/images om naar WebP van maximaal 200 KB.
// Gebruik: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("public/images");
const MAX = 200 * 1024;

for (const f of await readdir(dir)) {
  if (!/\.jpe?g$/i.test(f)) continue;
  const src = path.join(dir, f);
  const out = path.join(dir, f.replace(/\.jpe?g$/i, ".webp"));
  const { width } = await sharp(src).metadata();
  let w = width;
  let buf;
  let q = 72;
  while (true) {
    for (q = 72; q >= 55; q -= 5) {
      buf = await sharp(src).resize({ width: w }).webp({ quality: q }).toBuffer();
      if (buf.length <= MAX) break;
    }
    if (buf.length <= MAX || w < 600) break;
    w = Math.round(w * 0.85);
  }
  await writeFile(out, buf);
  const meta = await sharp(buf).metadata();
  const before = (await stat(src)).size;
  console.log(`${f}: ${(before / 1024) | 0} KB -> ${(buf.length / 1024) | 0} KB (q${q}) ${meta.width}x${meta.height}${w !== width ? `  VERKLEIND van ${width}` : ""}`);
}
