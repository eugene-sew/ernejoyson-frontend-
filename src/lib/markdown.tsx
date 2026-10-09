import type { ReactNode } from 'react'

/**
 * Tiny Markdown → React renderer for Knowledge articles. Builds elements (never raw HTML),
 * so article text can't inject scripts. Supports: ## / ### headings, paragraphs, - and 1. lists,
 * > quotes, **bold**, *italic*, [links](https://…). Same file lives in admin/src/lib/markdown.tsx (preview).
 */
const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)\s]+\))/g

function inline(text: string, key: string): ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, i) => {
    const k = `${key}-${i}`
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={k}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={k}>{part.slice(1, -1)}</em>
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (link) {
      const href = link[2]
      if (!/^(https?:\/\/|\/|mailto:|tel:)/i.test(href)) return link[1] // drop javascript: and friends
      const external = /^https?:\/\//i.test(href)
      return <a key={k} href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{link[1]}</a>
    }
    return part
  })
}

export function Markdown({ source, className }: { source: string; className?: string }) {
  const blocks: ReactNode[] = []
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  let i = 0
  while (i < lines.length) {
    const line = lines[i]
    const key = `b${i}`
    if (!line.trim()) { i++; continue }
    if (line.startsWith('### ')) { blocks.push(<h3 key={key}>{inline(line.slice(4), key)}</h3>); i++; continue }
    if (line.startsWith('## ') || line.startsWith('# ')) { blocks.push(<h2 key={key}>{inline(line.replace(/^#+ /, ''), key)}</h2>); i++; continue }
    const list = line.match(/^\s*([-*]|\d+\.)\s+/)
    if (list) {
      const ordered = /\d/.test(list[1])
      const items: ReactNode[] = []
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(<li key={`${key}-${items.length}`}>{inline(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ''), `${key}-${items.length}`)}</li>)
        i++
      }
      blocks.push(ordered ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>)
      continue
    }
    if (line.startsWith('>')) {
      const quote: string[] = []
      while (i < lines.length && lines[i].startsWith('>')) quote.push(lines[i++].replace(/^>\s?/, ''))
      blocks.push(<blockquote key={key}>{inline(quote.join(' '), key)}</blockquote>)
      continue
    }
    const para: string[] = []
    while (i < lines.length && lines[i].trim() && !/^(#{1,3} |>|\s*([-*]|\d+\.)\s+)/.test(lines[i])) para.push(lines[i++])
    blocks.push(<p key={key}>{inline(para.join(' '), key)}</p>)
  }
  return <div className={className}>{blocks}</div>
}
