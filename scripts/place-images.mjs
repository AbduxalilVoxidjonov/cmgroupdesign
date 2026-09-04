#!/usr/bin/env node
/**
 * Yuklab olingan rasmlarni saytning slotlariga joylashtiradi:
 * kerakli nisbatda kesadi, oʻlchamini kichraytiradi, siqadi va
 * `public/images/` ga toʻgʻri nom bilan yozadi.
 *
 * Ishlatish:
 *   node scripts/place-images.mjs <manba-fayl> <slot> [<manba> <slot> ...]
 *   node scripts/place-images.mjs --list          # slotlar roʻyxati
 *   node scripts/place-images.mjs --scan <papka>  # papkadagi rasmlarni koʻrsatadi
 *
 * Misol:
 *   node scripts/place-images.mjs ~/Downloads/photo-1.jpg hero-home
 */
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import process from 'node:process';
import sharp from 'sharp';
import { slots } from './slots.mjs';

const OUT_DIR = resolve(process.cwd(), 'public/images');
/**
 * Yoʻlni hal qiladi. `~/Downloads` kabi yoʻllar bu muhitda
 * `$HOME/mnt/Downloads` sifatida ulanadi, shuning uchun ikkala variant ham
 * tekshiriladi.
 */
function resolveSource(input) {
  const home = process.env.HOME ?? '';
  const candidates = [];
  if (input.startsWith('~/')) {
    const rest = input.slice(2);
    candidates.push(join(home, 'mnt', rest), join(home, rest));
  } else if (input.startsWith('/Users/')) {
    const rest = input.split('/').slice(3).join('/');
    candidates.push(join(home, 'mnt', rest), input);
  } else if (home && input.startsWith(`${home}/`)) {
    // bash `~` ni oldindan yoygan boʻlishi mumkin
    const rest = input.slice(home.length + 1);
    candidates.push(input, join(home, 'mnt', rest));
  } else {
    candidates.push(resolve(input));
  }
  for (const c of candidates) if (existsSync(c)) return c;
  return candidates[0];
}

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function list() {
  console.log('Mavjud slotlar:\n');
  for (const [name, s] of Object.entries(slots)) {
    console.log(`  ${name.padEnd(18)} ${String(s.w).padStart(4)}×${String(s.h).padEnd(4)}  ${s.kind}`);
  }
}

function scan(dir) {
  const root = resolveSource(dir);
  if (!existsSync(root)) {
    console.error(`Papka topilmadi: ${root}`);
    process.exit(1);
  }
  const files = readdirSync(root)
    .filter((f) => PHOTO_EXT.has(extname(f).toLowerCase()))
    .map((f) => {
      const full = join(root, f);
      return { full, size: statSync(full).size, mtime: statSync(full).mtimeMs };
    })
    .sort((a, b) => b.mtime - a.mtime);

  if (files.length === 0) {
    console.log(`${root} ichida rasm topilmadi.`);
    return;
  }
  console.log(`${root} (eng yangisi birinchi):\n`);
  for (const f of files) {
    console.log(`  ${(f.size / 1024 / 1024).toFixed(2)} MB  ${basename(f.full)}`);
  }
}

async function place(source, slotName) {
  const slot = slots[slotName];
  if (!slot) throw new Error(`Nomaʼlum slot: ${slotName} (roʻyxat: --list)`);

  const src = resolveSource(source);
  if (!existsSync(src)) throw new Error(`Fayl topilmadi: ${src}`);

  mkdirSync(OUT_DIR, { recursive: true });
  const out = join(OUT_DIR, `${slotName}.webp`);

  const pipeline = sharp(src)
    .rotate()
    .resize(slot.w, slot.h, { fit: 'cover', position: 'attention', withoutEnlargement: false });

  const image = pipeline.webp({ quality: 80, effort: 5 });

  const info = await image.toFile(out);
  const kb = (info.size / 1024).toFixed(0);
  console.log(`✓ ${basename(src)}  →  public/images/${basename(out)}  (${info.width}×${info.height}, ${kb} KB)`);
}

const args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help') {
  console.log('node scripts/place-images.mjs <manba> <slot> [...]  |  --list  |  --scan <papka>');
  process.exit(0);
}
if (args[0] === '--list') {
  list();
  process.exit(0);
}
if (args[0] === '--scan') {
  scan(args[1] ?? '~/Downloads');
  process.exit(0);
}
if (args.length % 2 !== 0) {
  console.error('Argumentlar juft boʻlishi kerak: <manba> <slot>');
  process.exit(1);
}
for (let i = 0; i < args.length; i += 2) {
  await place(args[i], args[i + 1]);
}
