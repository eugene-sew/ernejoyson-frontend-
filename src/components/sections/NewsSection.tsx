import { ArrowUpRight } from 'lucide-react'

export function NewsSection() {
  const articles = [
    {
      id: 1,
      title: 'How modern drones revolutionize large scale farm management',
      date: 'May 12, 2026',
      category: 'Innovation',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'The future of precision farming and IoT crop health monitoring',
      date: 'Apr 28, 2026',
      category: 'Field Case',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Agras T50: Field test results across 10,000 hectares',
      date: 'Apr 15, 2026',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="news" className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto w-full space-y-8">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A2B1D]">
            News & Articles
          </h2>
          <p className="text-xs sm:text-sm text-[#0A2B1D]/70">
            Insights, real-world case studies, and engineering breakthroughs in smart farming.
          </p>
        </div>

        <a
          href="#news"
          className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#0A2B1D] hover:text-[#154631] underline decoration-[#8BD333] decoration-2 underline-offset-4"
        >
          View All News <ArrowUpRight className="h-3.5 w-3.5 text-[#8BD333]" />
        </a>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col justify-between rounded-[32px] bg-white p-4 shadow-sm border border-[#EAE4D6] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#8BD333]/50"
          >
            {/* Image Thumbnail with Overlay Circle Button */}
            <div className="relative h-56 w-full overflow-hidden rounded-[24px] bg-slate-900">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-[#0A2B1D]/80 backdrop-blur-md px-3 py-0.5 text-[10px] font-bold text-white">
                {article.category}
              </div>
              <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#8BD333] text-[#0A2B1D] shadow-md transition-transform duration-200 group-hover:scale-110">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Content info */}
            <div className="pt-4 pb-2 space-y-3">
              <span className="text-[11px] font-medium text-[#0A2B1D]/60">
                {article.date}
              </span>
              <h3 className="font-display text-base font-bold text-[#0A2B1D] group-hover:text-[#154631] transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>
            </div>

            {/* Read More Pill Link */}
            <div className="pt-2 border-t border-[#0A2B1D]/5">
              <a
                href="#read"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5ED] px-4 py-1.5 text-xs font-bold text-[#0A2B1D] transition-colors hover:bg-[#8BD333]"
              >
                Read Article
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
