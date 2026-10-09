import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, Share2 } from 'lucide-react'
import { api, type ShopArticle } from '@/services/api'
import { Markdown } from '@/lib/markdown'
import { farmConsultationImg } from '@/assets'

const date = (iso: string) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

/** Card used on the homepage and the Knowledge page. */
export function ArticleCard({ article }: { article: ShopArticle }) {
  return (
    <article className="group relative flex flex-col justify-between rounded-[32px] bg-white p-5 shadow-sm border border-[#EAE6DC] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-60 w-full overflow-hidden rounded-[24px] bg-[#FAF9F5]">
        <img src={article.cover_image || farmConsultationImg} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute top-3 left-3 rounded-full bg-[#14532D]/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-sm">
          {article.categoryLabel}
        </div>
        <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#166534] text-white shadow-md transition-transform duration-200 group-hover:scale-110">
          <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.2]" />
        </div>
      </div>
      <div className="pt-4 pb-2 space-y-2 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold text-[#166534] uppercase tracking-wide">
            {date(article.published_at)} · {article.readingMinutes} min read
          </span>
          <h3 className="font-display text-lg font-extrabold text-[#14532D] group-hover:text-[#166534] transition-colors leading-snug pt-1">
            <Link to={`/knowledge/${article.slug}`} className="after:absolute after:inset-0 after:rounded-[inherit]">{article.title}</Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#14532D]/75 leading-relaxed font-medium pt-2 line-clamp-3">{article.summary}</p>
        </div>
        <div className="pt-4 border-t border-[#EAE6DC]/60 mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166534]">
          <span>Read the guide</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </article>
  )
}

export function ArticlePage() {
  const { slug = '' } = useParams()
  const [article, setArticle] = useState<ShopArticle | null>(null)
  const [more, setMore] = useState<ShopArticle[]>([])
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setArticle(null)
    setError('')
    api.content.article(slug).then(
      (r) => {
        setArticle(r.article)
        document.title = `${r.article.title} · ERNEJOYSON`
      },
      (e) => setError(e instanceof Error ? e.message : 'Could not load this article'),
    )
    api.content.articles({ limit: 4 }).then((r) => setMore(r.articles.filter((a) => a.slug !== slug).slice(0, 3)), () => undefined)
  }, [slug])

  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title: article?.title, url })
      else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch { /* cancelled */ }
  }

  return (
    <div className="pt-24 pb-20 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/knowledge" className="mb-8 inline-flex items-center gap-1.5 text-xs font-bold text-[#14532D]/70 hover:text-[#14532D]">
        <ArrowLeft className="h-3.5 w-3.5" /> Farm Knowledge
      </Link>

      {error ? (
        <div className="mx-auto max-w-xl rounded-3xl border border-[#EAE6DC] bg-white p-10 text-center">
          <BookOpen className="mx-auto h-8 w-8 text-[#166534]/50" />
          <p className="mt-3 font-display text-lg font-black text-[#14532D]">This article isn't available</p>
          <p className="mt-1 text-sm text-neutral-500">It may have been moved or taken down.</p>
          <Link to="/knowledge" className="mt-5 inline-flex rounded-full bg-[#166534] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#14532D]">Browse all guides</Link>
        </div>
      ) : !article ? (
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="h-10 w-3/4 animate-pulse rounded-xl bg-[#F4F1EA]" />
          <div className="aspect-[16/9] animate-pulse rounded-3xl bg-[#F4F1EA]" />
          <div className="h-40 animate-pulse rounded-xl bg-[#F4F1EA]" />
        </div>
      ) : (
        <>
          <article className="mx-auto max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#166534]">{article.categoryLabel}</p>
            <h1 className="mt-3 font-display text-3xl sm:text-5xl font-black leading-[1.08] tracking-tight text-[#14532D]">{article.title}</h1>
            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-[#14532D]/75">{article.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-[#14532D]/60">
              <span>{date(article.published_at)}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{article.readingMinutes} min read</span>
              {article.author && <span>By {article.author}</span>}
              <button type="button" onClick={share} className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[#EAE6DC] bg-white px-3.5 py-1.5 text-[#14532D] hover:bg-[#F4F1EA] cursor-pointer">
                <Share2 className="h-3.5 w-3.5" />{copied ? 'Link copied' : 'Share'}
              </button>
            </div>
            {article.cover_image && (
              <img src={article.cover_image} alt="" className="mt-8 aspect-[16/9] w-full rounded-[28px] object-cover shadow-sm" />
            )}
            <Markdown source={article.body ?? ''} className="article-body mt-10 text-base sm:text-[17px] text-[#14532D]/90" />
            <div className="mt-12 rounded-3xl bg-[#14532D] p-6 sm:p-8 text-white sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="font-display text-lg font-black">Need the right product for this?</p>
                <p className="mt-1 text-sm text-white/75">Talk to our vets on 059 670 9226, or browse the shop.</p>
              </div>
              <Link to="/shop" className="mt-4 inline-flex rounded-full bg-[#22C55E] px-6 py-3 text-sm font-extrabold text-[#0E3B20] hover:bg-[#DCFCE7] sm:mt-0">Browse products</Link>
            </div>
          </article>

          {more.length > 0 && (
            <section className="mt-20 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">More farm guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {more.map((a) => <ArticleCard key={a.id} article={a} />)}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  )
}
