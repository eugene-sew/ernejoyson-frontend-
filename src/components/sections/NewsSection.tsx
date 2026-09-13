import { ArrowUpRight, BookOpen } from 'lucide-react'

export function NewsSection() {
  const articles = [
    {
      id: 1,
      title: 'Deworming & Parasite Control Protocols for Poultry and Small Ruminants',
      date: 'Field Guide',
      category: 'Animal Health',
      summary: 'Understanding treatment timing, active ingredients, and administration best practices.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Maintaining Automated Nipple Drinking Lines to Prevent Water Stagnation',
      date: 'Technical Manual',
      category: 'Farm Equipment',
      summary: 'Practical disinfection, pressure regulation, and leak prevention for commercial poultry houses.',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Biosecurity Essentials: Reducing Disease Transmission on Expanding Farms',
      date: 'Operations Case',
      category: 'Farm Management',
      summary: 'Footbath management, visitor protocols, and quarantine setups for Ghanaian livestock farms.',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    },
  ]

  return (
    <section id="knowledge" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            Better Farming Starts <br className="hidden sm:inline" />
            With Better Information.
          </h2>

          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            Practical insights on animal health, poultry production, livestock management, equipment and farm operations.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <a
            href="#knowledge"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-7 py-3 text-sm font-extrabold text-[#166534] transition-all hover:bg-[#166534] hover:text-white active:scale-95 shadow-sm"
          >
            <span>Explore Farm Knowledge</span>
            <BookOpen className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="group flex flex-col justify-between rounded-[32px] bg-white p-5 shadow-sm border border-[#EAE6DC] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
          >
            {/* Image Thumbnail with Overlay Category Badge */}
            <div className="relative h-60 w-full overflow-hidden rounded-[24px] bg-[#FAF9F5]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-[#14532D]/90 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white shadow-sm">
                {article.category}
              </div>
              <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#166534] text-white shadow-md transition-transform duration-200 group-hover:scale-110">
                <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.2]" />
              </div>
            </div>

            {/* Content */}
            <div className="pt-4 pb-2 space-y-2 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#166534] uppercase tracking-wide">
                  {article.date}
                </span>
                <h3 className="font-display text-lg font-extrabold text-[#14532D] group-hover:text-[#166534] transition-colors leading-snug pt-1">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#14532D]/75 leading-relaxed font-medium pt-2">
                  {article.summary}
                </p>
              </div>

              {/* Read Link */}
              <div className="pt-4 border-t border-[#EAE6DC]/60 mt-4">
                <a
                  href="#knowledge"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166534] hover:text-[#14532D] transition-colors"
                >
                  <span>Read Practical Guide</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
