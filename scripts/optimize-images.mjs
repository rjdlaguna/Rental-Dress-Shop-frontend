/**
 * Image optimization script for SEO and performance.
 * Resizes and compresses images in public/img before build.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMG_DIR = path.join(__dirname, '..', 'public', 'img')

// Hero/full-width images (header, about) - max 1920px
const LARGE_MAX = 1920
// Gallery/feature images - max 800px (enough for 2x retina at 400px display)
const GALLERY_MAX = 800

const LARGE_IMAGES = ['header.png', 'about.png', 'barong.png', 'student-uniform.png']

async function optimizeImage(filename) {
  const filepath = path.join(IMG_DIR, filename)
  if (!fs.existsSync(filepath)) return

  const maxWidth = LARGE_IMAGES.includes(filename) ? LARGE_MAX : GALLERY_MAX

  const buffer = await sharp(filepath)
    .resize(maxWidth, null, { withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer()

  const before = fs.statSync(filepath).size
  fs.writeFileSync(filepath, buffer)
  const after = buffer.length
  const saved = ((1 - after / before) * 100).toFixed(1)
  console.log(`  ${filename}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (${saved}% smaller)`)
}

async function main() {
  const files = fs.readdirSync(IMG_DIR).filter((f) => f.endsWith('.png'))
  console.log(`Optimizing ${files.length} images in public/img...`)

  for (const file of files) {
    try {
      await optimizeImage(file)
    } catch (err) {
      console.error(`  Error: ${file}`, err.message)
    }
  }
  console.log('Done.')
}

main()
