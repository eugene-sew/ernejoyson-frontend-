import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import {
  veterinaryProductsImg,
  poultryEquipmentImg,
  poultryCratesImg,
  poultryPluckerImg,
} from '@/assets'

export function FeaturesGridSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'pharma' | 'equipment' | 'machinery'>('all')

  const filterTabs = [
    { id: 'all', label: 'All Products' },
    { id: 'pharma', label: 'Veterinary Pharma' },
    { id: 'equipment', label: 'Feeders & Drinkers' },
    { id: 'machinery', label: 'Machinery & Crates' },
  ] as const

  const categories = [
    {
      id: 'vet-pharma',
      name: 'Veterinary Pharmaceuticals',
      description: 'Antibiotics, therapeutics, injectables & disease control',
      badge: 'Core Supply',
      span: 'lg:col-span-7 sm:col-span-12',
      minHeight: 'min-h-[260px] sm:min-h-[400px]',
      image: veterinaryProductsImg,
      href: '/shop?category=antibiotics',
      filter: 'pharma',
    },
    {
      id: 'feeding-drinking',
      name: 'Feeding & Drinking Systems',
      description: 'Automated bell drinkers, nipple lines & anti-waste hoppers',
      badge: 'Automated',
      span: 'lg:col-span-5 sm:col-span-12',
      minHeight: 'min-h-[260px] sm:min-h-[400px]',
      image: poultryEquipmentImg,
      href: '/shop?category=feeders',
      filter: 'equipment',
    },
    {
      id: 'supplements',
      name: 'Nutritional Supplements',
      description: 'Vitamins, amino acids, electrolytes & egg boosters',
      badge: 'Nutrition',
      span: 'lg:col-span-4 sm:col-span-6',
      minHeight: 'min-h-[230px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=800&q=85',
      href: '/shop?category=vitamins',
      filter: 'pharma',
    },
    {
      id: 'slaughtering',
      name: 'Slaughtering & Defeathering',
      description: 'Commercial pluckers, scalding tanks & processing racks',
      badge: 'Industrial',
      span: 'lg:col-span-4 sm:col-span-6',
      minHeight: 'min-h-[230px] sm:min-h-[340px]',
      image: poultryPluckerImg,
      href: '/shop?category=equipment',
      filter: 'machinery',
    },
    {
      id: 'transport-cages',
      name: 'Transport Crates & Coops',
      description: 'Heavy-duty virgin HDPE live bird transport crates',
      badge: 'Logistics',
      span: 'lg:col-span-4 sm:col-span-12',
      minHeight: 'min-h-[230px] sm:min-h-[340px]',
      image: poultryCratesImg,
      href: '/shop?category=equipment',
      filter: 'machinery',
    },
    {
      id: 'anti-parasitics',
      name: 'Anti-Parasitics & Dewormers',
      description: 'Dewormers, ectoparasiticides & external pest control',
      badge: null,
      span: 'lg:col-span-6 sm:col-span-6',
      minHeight: 'min-h-[230px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1000&q=85',
      href: '/shop?category=anti-parasitics',
      filter: 'pharma',
    },
    {
      id: 'feed-processing',
      name: 'Feed Processing Machinery',
      description: 'Hammer mills, mixers, pelletizers & grain crushers',
      badge: null,
      span: 'lg:col-span-6 sm:col-span-6',
      minHeight: 'min-h-[230px] sm:min-h-[340px]',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=85',
      href: '/shop?category=equipment',
      filter: 'machinery',
    },
  ]

  const visibleCategories =
    activeTab === 'all'
      ? categories
      : categories.filter((cat) => cat.filter === activeTab)

  return (
    <section id="categories" className="px-2.5 sm:px-8 lg:px-12 py-10 sm:py-20 max-w-[1380px] mx-auto w-full space-y-8 sm:space-y-12">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-1 sm:px-0">
        <div className="space-y-3 max-w-3xl">
          <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.15]">
            Everything You Need to Support <br className="hidden sm:inline" />
            Better Livestock Production.
          </h2>

          <p className="text-xs sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium">
            Explore our range of veterinary products and livestock equipment, selected to support animal health, farm productivity and day-to-day operations.
          </p>

          {/* Clean Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-2">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#166534] text-white shadow-xs'
                      : 'bg-[#FAF9F5] text-[#14532D]/80 border border-[#EAE6DC] hover:bg-[#F4F1EA]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="shrink-0">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-6 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-extrabold text-[#166534] transition-all hover:bg-[#166534] hover:text-white active:scale-95 shadow-xs"
          >
            <span>Browse Products</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* ── Asymmetric Bento Grid with Original Clean Natural Photo Treatment ── */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6">
        {visibleCategories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.href}
            className={`group relative rounded-2xl sm:rounded-[36px] overflow-hidden ${cat.span} ${cat.minHeight} flex flex-col justify-between p-4 sm:p-8 shadow-sm sm:shadow-md border border-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer`}
          >
            {/* Authentic Photography */}
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Reverted Original Natural Soft Forest Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B20]/95 via-[#0E3B20]/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

            {/* Top Row: Clean Badge & Interactive Arrow Circle */}
            <div className="relative z-10 flex items-center justify-between w-full">
              {cat.badge ? (
                <span className="inline-flex items-center rounded-full bg-[#166534] px-2.5 sm:px-3.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-black text-white shadow-md border border-white/20">
                  {cat.badge}
                </span>
              ) : (
                <div />
              )}

              <div className="flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white group-hover:scale-110 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 stroke-[2.5]" />
              </div>
            </div>

            {/* Bottom Content Row: Title, Short Description, and Link Text */}
            <div className="relative z-10 space-y-1 sm:space-y-1.5 pt-6 sm:pt-12">
              <h3 className="font-display text-base sm:text-xl lg:text-2xl font-extrabold text-white tracking-tight leading-snug">
                {cat.name}
              </h3>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-medium">
                {cat.description}
              </p>

              <div className="pt-1.5 sm:pt-2 flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#DCFCE7] transition-transform duration-200 group-hover:translate-x-1">
                <span>Explore Category</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

