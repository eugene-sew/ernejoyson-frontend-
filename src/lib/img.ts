/**
 * Card-size image for a product. Bundled `/products/X.jpg|png` photos have a 480px WebP made by
 * `npm run images` (scripts/optimize-images.mjs) at `/products/sm/X.webp`; other URLs (API uploads,
 * which are already resized WebP) pass through unchanged.
 */
export const thumb = (src: string) => src.replace(/^\/products\/([^/]+)\.(jpe?g|png)$/i, '/products/sm/$1.webp')
