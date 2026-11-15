const UPLOAD = /^(https?:\/\/[^/]+\/media\/.+)\.webp$/i

/**
 * Card-size image for a product.
 * - Bundled `/products/X.jpg|png` photos: 480px WebP at `/products/sm/X.webp`, made by
 *   `scripts/optimize-images.mjs` (runs on every `npm run build`).
 * - Admin uploads (`…/media/…/X.webp`): the API makes `X_sm.webp` (480px) on first request.
 * Anything else passes through unchanged.
 */
export function thumb(src: string) {
  if (src.startsWith('/products/')) return src.replace(/^\/products\/([^/]+)\.(jpe?g|png)$/i, '/products/sm/$1.webp')
  if (UPLOAD.test(src) && !src.endsWith('_sm.webp')) return src.replace(UPLOAD, '$1_sm.webp')
  return src
}
