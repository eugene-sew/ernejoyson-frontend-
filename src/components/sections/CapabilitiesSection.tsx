import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Pill, Layers, Headphones } from 'lucide-react'

export function CapabilitiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const quickActions = [
    {
      id: 1,
      title: 'Veterinary Products',
      description:
        'Veterinary pharmaceuticals, therapeutic products, anti-parasitics, anthelmintics and nutritional support for animal health.',
      actionText: 'Browse Veterinary Products',
      href: '/shop?category=antibiotics',
      icon: Pill,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      title: 'Poultry & Livestock Equipment',
      description:
        'Feeding, drinking, housing, transport, hatchery and farm equipment designed to support efficient livestock production.',
      actionText: 'Explore Equipment',
      href: '/shop?category=feeders',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      title: 'Need Help Choosing?',
      description:
        'Tell us about your farm and our team can help you identify products and equipment suited to your operation.',
      actionText: 'Talk to an Expert',
      href: '/technical-support',
      icon: Headphones,
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=85',
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % quickActions.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + quickActions.length) % quickActions.length)
  }

  return (
    <section id="quick-actions" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-14">
      {/* Top Header Row with Eyebrow, Title and Action */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="space-y-3 max-w-3xl">

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.12]">
            Find the Right Products <br className="hidden sm:inline" />
            for Your Farm.
          </h2>
        </div>

        {/* Top Right: Explore Solutions Action */}
        <div className="shrink-0 pt-2 lg:pt-3">
          <a
            href="#categories"
            className="inline-flex items-center justify-center rounded-full border border-[#166534] px-7 py-3 text-sm font-extrabold text-[#166534] transition-all hover:bg-[#166534] hover:text-white active:scale-95 shadow-sm"
          >
            EXPLORE ALL PRODUCTS
          </a>
        </div>
      </div>

      {/* Main Content Row: Left Supporting Statement + Right 3 Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Supporting Copy & Navigation Controls */}
        <div className="lg:col-span-3 space-y-6 pt-2">
          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed font-medium">
            Whether you are stocking up on veterinary products, setting up a poultry operation, or expanding your livestock business, find the products and support you need in one place.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={prevSlide}
              aria-label="Previous card"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#14532D]/30 bg-white text-[#14532D] transition-all hover:bg-[#166534] hover:text-white active:scale-95 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="h-4.5 w-4.5 stroke-[2.2]" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next card"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#14532D]/30 bg-white text-[#14532D] transition-all hover:bg-[#166534] hover:text-white active:scale-95 cursor-pointer shadow-sm"
            >
              <ArrowRight className="h-4.5 w-4.5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Right Column: 3 Quick Action Image Cards */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {quickActions.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={item.id} className="group flex flex-col justify-between">
                  {/* Rounded Image Stage */}
                  <div
                    className={`relative h-[280px] sm:h-[320px] w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#F4F1EA] border border-[#EAE6DC] shadow-sm transition-all duration-300 hover:shadow-xl ${
                      activeSlide === index ? 'ring-2 ring-[#22C55E]' : ''
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Icon Badge */}
                    <div className="absolute top-3.5 left-3.5 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-[#166534] shadow-md border border-white/50">
                      <Icon className="h-5 w-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Content Below Image */}
                  <div className="pt-4 space-y-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#14532D] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#14532D]/75 leading-relaxed font-medium line-clamp-3">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={item.href}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#166534] transition-colors group-hover:text-[#14532D]"
                      >
                        <span>{item.actionText}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
