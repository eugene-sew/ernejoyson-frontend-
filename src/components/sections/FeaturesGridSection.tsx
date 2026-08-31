import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react'

export function FeaturesGridSection() {
  const categories = [
    {
      id: 'poultry',
      name: 'Poultry Equipment',
      description: 'Feeders, cages, drinkers & more',
      badge: 'Top Category',
      span: 'lg:col-span-7',
      minHeight: 'min-h-[380px] sm:min-h-[420px]',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=85',
      href: '#products',
    },
    {
      id: 'machinery',
      name: 'Farm Machinery',
      description: 'Tractors, pumps, machinery & more',
      badge: null,
      span: 'lg:col-span-5',
      minHeight: 'min-h-[380px] sm:min-h-[420px]',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000&q=85',
      href: '#products',
    },
    {
      id: 'implements',
      name: 'Agricultural Implements',
      description: 'Tools & equipment for the field',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=85',
      href: '#products',
    },
    {
      id: 'animal-health',
      name: 'Animal Health',
      description: 'Veterinary products & care',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=85',
      href: '#products',
    },
    {
      id: 'irrigation',
      name: 'Irrigation & Water',
      description: 'Pumps, tanks, irrigation & more',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=800&q=85',
      href: '#products',
    },
    {
      id: 'supplies',
      name: 'Farm & Feed Supplies',
      description: 'Essential farm supplies & inputs',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=85',
      href: '#products',
    },
  ]

  return (
    <section id="categories" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header with Eyebrow, Title and View All Products Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5ED] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0A2B1D] border border-[#EAE4D6] shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#8BD333] fill-current" />
              EXPLORE OUR RANGE
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.1]">
            Everything You Need for <br className="hidden sm:inline" />
            Better Farming.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#0A2B1D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            From poultry equipment to agricultural machinery, find reliable products for every stage of your operation.
          </p>
        </div>

        {/* Top Right Action Button */}
        <div className="shrink-0">
          <a
            href="#products"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A2B1D] px-7 py-3 text-sm font-extrabold text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 shadow-sm"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Category Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
        {categories.map((cat) => (
          <a
            key={cat.id}
            href={cat.href}
            className={`group relative rounded-[32px] sm:rounded-[36px] overflow-hidden ${cat.span} ${cat.minHeight} flex flex-col justify-between p-6 sm:p-8 shadow-md border border-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer`}
          >
            {/* Real Product Background Photography */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#082318]/95 via-[#082318]/45 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Top Row: Optional Badge & Interactive Arrow Circle */}
            <div className="relative z-10 flex items-center justify-between w-full">
              {cat.badge ? (
                <span className="inline-flex items-center rounded-full bg-[#8BD333] px-3.5 py-1 text-xs font-black text-[#0A2B1D] shadow-md">
                  {cat.badge}
                </span>
              ) : (
                <div />
              )}

              {/* Circle Action Button */}
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg transition-all duration-300 group-hover:bg-[#8BD333] group-hover:text-[#0A2B1D] group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
              </div>
            </div>

            {/* Bottom Content Row: Title, Description, and Link Text */}
            <div className="relative z-10 space-y-2 pt-12">
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {cat.name}
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                {cat.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#8BD333] transition-transform duration-200 group-hover:translate-x-1">
                <span>Explore</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
