// Shrinks storefront images in place and writes card thumbnails. Safe to re-run: files already
// within their size budget are left alone (no repeated JPEG re-encoding).
//
//   npm run images
//
// public/products/X.jpg|png  -> max 1200px, mozjpeg (filename kept: the API DB and carts point at it)
//                            -> public/products/sm/X.webp, 480px wide, used by product cards (src/lib/img.ts)
// src/assets/**              -> max size per rule below, same format and filename
import sharp from 'sharp'
import { readdir, stat, mkdir, writeFile, readFile } from 'node:fs/promises'
import { join, extname, basename, dirname, relative } from 'node:path'

const ROOT = join(import.meta.dirname, '..')
const RASTER = /\.(jpe?g|png)$/i

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) yield* walk(p)
    else if (RASTER.test(e.name)) yield p
  }
}

let before = 0
let after = 0

/** Resize to fit `max` px (long edge) and re-encode in its own format, only if over `max` or `budgetKB`. */
async function shrink(file, max, budgetKB) {
  const input = await readFile(file)
  const { width, height } = await sharp(input).metadata()
  if (Math.max(width, height) <= max && input.length <= budgetKB * 1024) return
  const img = sharp(input).rotate().resize({ width: max, height: max, fit: 'inside', withoutEnlargement: true })
  const out = /\.png$/i.test(file)
    ? await img.png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 }).toBuffer()
    : await img.jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer()
  if (out.length >= input.length) return
  await writeFile(file, out)
  before += input.length
  after += out.length
  console.log(`${relative(ROOT, file)}  ${Math.round(input.length / 1024)}KB -> ${Math.round(out.length / 1024)}KB`)
}

async function thumb(file) {
  const out = join(dirname(file), 'sm', `${basename(file, extname(file))}.webp`)
  const [src, dst] = await Promise.all([stat(file), stat(out).catch(() => null)])
  if (dst && dst.mtimeMs >= src.mtimeMs) return
  await mkdir(dirname(out), { recursive: true })
  await sharp(file).rotate().resize({ width: 480, height: 480, fit: 'inside', withoutEnlargement: true }).webp({ quality: 72 }).toFile(out)
}

// Product photos: shown at most ~600px wide on the product page.
// PNG product photos are also written as JPEG next to them (photos compress badly as PNG).
for await (const f of walk(join(ROOT, 'public/products'))) {
  if (f.includes('/sm/')) continue
  if (/\.png$/i.test(f)) {
    const jpg = f.replace(/\.png$/i, '.jpg')
    if (!(await stat(jpg).catch(() => null))) {
      await sharp(f).rotate().flatten({ background: '#ffffff' }).resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 78, mozjpeg: true, progressive: true }).toFile(jpg)
      console.log(`${relative(ROOT, jpg)}  (JPEG copy of PNG photo)`)
    }
  }
  await shrink(f, 1200, 300)
  await thumb(f)
}

// Bundled site images. Rendered sizes: logos <=64px tall, staff/manager photos <=400px, section art <=1400px.
const RULES = [
  [/logo-(icon|watermark)\.png$/, 256, 40],
  [/\/staff\//, 640, 120],
  [/hero_mobile\.jpg$/, 1100, 250],
  [/./, 1600, 300],
]
for await (const f of walk(join(ROOT, 'src/assets'))) {
  const [, max, budget] = RULES.find(([re]) => re.test(f))
  await shrink(f, max, budget)
}
await shrink(join(ROOT, 'public/ErneJPrev.jpeg'), 1200, 200) // link-preview image

if (before) console.log(`\nsaved ${Math.round((before - after) / 1024 / 1024)}MB (${Math.round(before / 1024 / 1024)}MB -> ${Math.round(after / 1024 / 1024)}MB)`)
