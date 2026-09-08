import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react'

export function FeaturesGridSection() {
  const categories = [
    {
      id: 'vet-pharma',
      name: 'Veterinary Pharmaceuticals',
      description: 'Antibiotics, therapeutics, injectables & disease control',
      badge: 'Core Supply',
      span: 'lg:col-span-6',
      minHeight: 'min-h-[340px] sm:min-h-[380px]',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=85',
      href: '#featured-products',
    },
    {
      id: 'anti-parasitics',
      name: 'Anti-Parasitics & Anthelmintics',
      description: 'Dewormers, ectoparasiticides & external pest control',
      badge: null,
      span: 'lg:col-span-6',
      minHeight: 'min-h-[340px] sm:min-h-[380px]',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=85',
      href: '#featured-products',
    },
    {
      id: 'supplements',
      name: 'Nutritional Supplements',
      description: 'Vitamins, minerals, amino acids & growth promoters',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=85',
      href: '#featured-products',
    },
    {
      id: 'feeding-drinking',
      name: 'Feeding & Drinking Systems',
      description: 'Automated bell drinkers, nipple lines & feed pans',
      badge: 'Essential',
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=85',
      href: '#featured-products',
    },
    {
      id: 'incubators',
      name: 'Incubators & Hatchery Equipment',
      description: 'Egg setters, hatchers, egg turners & climate controls',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=85',
      href: '#featured-products',
    },
    {
      id: 'feed-processing',
      name: 'Feed Processing Machines',
      description: 'Hammer mills, mixers, pelletizers & crushers',
      badge: null,
      span: 'lg:col-span-3 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85',
      href: '#featured-products',
    },
    {
      id: 'slaughtering',
      name: 'Slaughtering Equipment',
      description: 'Scalders, defeathering pluckers, cones & processing racks',
      badge: null,
      span: 'lg:col-span-6 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1000&q=85',
      href: '#featured-products',
    },
    {
      id: 'transport-cages',
      name: 'Transport Cages',
      description: 'Durable plastic poultry transport crates & live bird coops',
      badge: null,
      span: 'lg:col-span-6 sm:col-span-6',
      minHeight: 'min-h-[300px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85',
      href: '#featured-products',
    },
  ]

  return (
    <section id="categories" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header with Eyebrow, Title and Action */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#166534]">
              <Sparkles className="h-3.5 w-3.5 fill-current" />
              OUR PRODUCT RANGE
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            Everything You Need to Support <br className="hidden sm:inline" />
            Better Livestock Production.
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            Explore our range of veterinary products and livestock equipment, selected to support animal health, farm productivity and efficient day-to-day operations.
          </p>
        </div>

        {/* Top Right Action Button */}
        <div className="shrink-0">
          <a
            href="#featured-products"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-7 py-3 text-sm font-extrabold text-[#166534] transition-all hover:bg-[#166534] hover:text-white active:scale-95 shadow-sm"
          >
            <span>Browse Products</span>
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
            {/* Real Product Photography */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark Soft Forest Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B20]/95 via-[#0E3B20]/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Top Row: Optional Badge & Interactive Arrow Circle */}
            <div className="relative z-10 flex items-center justify-between w-full">
              {cat.badge ? (
                <span className="inline-flex items-center rounded-full bg-[#166534] px-3.5 py-1 text-xs font-black text-white shadow-md border border-white/20">
                  {cat.badge}
                </span>
              ) : (
                <div />
              )}

              {/* Circle Action Button */}
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
              </div>
            </div>

            {/* Bottom Content Row: Title, Description, and Link Text */}
            <div className="relative z-10 space-y-1.5 pt-12">
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {cat.name}
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
                {cat.description}
              </p>

              <div className="pt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DCFCE7] transition-transform duration-200 group-hover:translate-x-1">
                <span>Explore Category</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
