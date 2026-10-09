// Vercel function: link previews for shared product and article URLs.
//
// The shop is a client-side app, so WhatsApp/Facebook/X/Slack crawlers (which don't run JS) only ever saw the
// homepage tags. vercel.json rewrites /shop/:id and /knowledge/:slug here (the URL in the address bar never
// changes). We return the normal index.html with that page's title, description and image filled in, so
// people get the usual app, which then renders the product or article as before.

export const config = { runtime: 'edge' }

const API = (process.env.API_URL || process.env.VITE_API_URL || '').replace(/\/+$/, '')

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const clip = (s, n) => {
  const t = String(s ?? '').replace(/\s+/g, ' ').trim()
  return t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t
}

async function getJson(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(2500), headers: { Accept: 'application/json' } })
  return res.ok ? res.json() : null
}

/** {title, description, image, type} for the shared page, or null to keep the default tags. */
async function lookup(kind, key, origin) {
  const abs = (src) => (!src ? '' : /^https?:\/\//i.test(src) ? src : origin + (src.startsWith('/') ? src : `/${src}`))
  if (kind === 'product') {
    const data = await getJson(`${API}/api/products/${encodeURIComponent(key)}`)
    const p = data?.product
    if (!p) return null
    const price = p.price != null ? p.price_display : 'Price on request'
    const bits = [price, p.in_stock ? 'In stock' : 'Available to order', p.spec].filter(Boolean).join(' · ')
    return {
      title: `${p.name} | ERNEJOYSON`,
      description: clip(`${bits}. ${p.description || `${p.category} from ERNEJOYSON, delivered across Ghana.`}`, 200),
      image: abs(p.image),
      type: 'product',
    }
  }
  if (kind === 'article') {
    const data = await getJson(`${API}/api/content/articles/${encodeURIComponent(key)}`)
    const a = data?.article
    if (!a) return null
    return { title: `${a.title} | ERNEJOYSON`, description: clip(a.summary, 200), image: abs(a.cover_image), type: 'article' }
  }
  return null
}

function inject(html, meta, url) {
  // \s+ also spans the line breaks some tags have between name and content.
  const set = (attr, name, value) => (h) =>
    h.replace(new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`, 'i'), (_, a, b) => a + esc(value) + b)
  const steps = [
    (h) => h.replace(/<title>[^<]*<\/title>/i, `<title>${esc(meta.title)}</title>`),
    set('name', 'description', meta.description),
    set('property', 'og:type', meta.type),
    set('property', 'og:url', url),
    set('property', 'og:title', meta.title),
    set('property', 'og:description', meta.description),
    set('name', 'twitter:url', url),
    set('name', 'twitter:title', meta.title),
    set('name', 'twitter:description', meta.description),
  ]
  if (meta.image) {
    steps.push(set('property', 'og:image', meta.image), set('property', 'og:image:secure_url', meta.image),
      set('name', 'twitter:image', meta.image), set('property', 'og:image:alt', meta.title), set('name', 'twitter:image:alt', meta.title),
      // the default image's type/size no longer apply
      (h) => h.replace(/\s*<meta\s+property="og:image:(type|width|height)"[^>]*>/gi, ''))
  }
  steps.push((h) => h.replace('</head>', `    <link rel="canonical" href="${esc(url)}" />\n  </head>`))
  return steps.reduce((h, f) => f(h), html)
}

export async function GET(request) {
  const reqUrl = new URL(request.url)
  const origin = reqUrl.origin
  const kind = reqUrl.searchParams.get('kind')
  const key = reqUrl.searchParams.get('key') || ''
  const publicPath = kind === 'product' ? `/shop/${key}` : `/knowledge/${key}`

  const shell = await fetch(`${origin}/`) // the app shell (static index.html)
  let html = await shell.text()
  let found = false
  try {
    const meta = API && key ? await lookup(kind, key, origin) : null
    if (meta) {
      html = inject(html, meta, origin + publicPath)
      found = true
    }
  } catch {
    // API slow or down: serve the plain app; the page still works, the preview is just generic.
  }
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': found ? 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400' : 'public, max-age=0, s-maxage=60',
    },
  })
}
