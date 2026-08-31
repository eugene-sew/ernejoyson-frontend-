import { useState } from 'react'
import { Sparkles, ArrowLeft, ArrowRight, ArrowUpRight, Tractor } from 'lucide-react'

export function CapabilitiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const capabilities = [
    {
      id: 1,
      title: 'Shop Products',
      description: 'Browse agricultural equipment, machinery, farm supplies, and animal health products.',
      actionText: 'Explore Products',
      href: '#products',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      title: 'Build Your Farm',
      description: 'Planning a new farm or expanding an existing one? Get equipment recommendations tailored to your operation.',
      actionText: 'Plan Your Farm',
      href: '#capabilities',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      title: 'Get Expert Advice',
      description: 'Not sure what you need? Speak with our team for practical guidance based on your farm and goals.',
      actionText: 'Talk to an Expert',
      href: '#contact',
      image: 'https://images.unsplash.com/photo-1564689511699-231174cb2e0a?auto=format&fit=crop&w=800&q=85',
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % capabilities.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length)
  }

  return (
    <section id="capabilities" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1380px] mx-auto w-full space-y-12 sm:space-y-16">
      {/* Top Header Row with Badge, Title and Explore Button */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          {/* Top Line: Badge + Section Title */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5ED] p-1.5 pr-3 border border-[#EAE4D6] shadow-sm">
              <Sparkles className="h-4.5 w-4.5 text-[#0A2B1D] ml-1 fill-current" />
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2B1D] text-[#8BD333]">
                <Tractor className="h-4.5 w-4.5 stroke-[2.5]" />
              </div>
            </div>

            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0A2B1D]/60">
              Complete Farm Solutions
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.12]">
            Whatever You’re Farming, <br />
            We’ve Got a Solution.
          </h2>
        </div>

        {/* Top Right: Explore Solutions Pill Button */}
        <div className="shrink-0 pt-2 lg:pt-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full border border-[#0A2B1D] px-8 py-3.5 text-sm font-extrabold uppercase tracking-wider text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 shadow-sm"
          >
            EXPLORE SOLUTIONS
          </a>
        </div>
      </div>

      {/* Main Content Row: Left Description + Right 3 Rounded Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Description & Circle Arrow Controls */}
        <div className="lg:col-span-3 space-y-6 pt-2">
          <p className="text-sm sm:text-base text-[#0A2B1D]/80 leading-relaxed font-medium">
            Whether you're looking for a single piece of equipment, sourcing products in bulk, or planning an entire farm, Enerjoyson connects you with the products and expertise you need.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={prevSlide}
              aria-label="Previous card"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A2B1D] bg-transparent text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="h-5 w-5 stroke-[2.2]" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next card"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0A2B1D] bg-transparent text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 cursor-pointer shadow-sm"
            >
              <ArrowRight className="h-5 w-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Right Column: 3 Vertical Rounded Image Cards */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {capabilities.map((item, index) => (
              <div key={item.id} className="group flex flex-col justify-between">
                {/* Rounded Image Stage */}
                <div
                  className={`relative h-[300px] sm:h-[340px] w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#FAF5ED] border border-[#EAE4D6] shadow-sm transition-all duration-300 hover:shadow-xl ${
                    activeSlide === index ? 'ring-2 ring-[#8BD333]' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content Below Image */}
                <div className="pt-4 space-y-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A2B1D] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0A2B1D]/75 leading-relaxed font-medium line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A2B1D] transition-colors group-hover:text-[#8BD333]"
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
