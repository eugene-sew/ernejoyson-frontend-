import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CircleArrowButton } from '@/components/ui/CircleArrowButton'

export function ProductsSection() {
  const [scrollIndex, setScrollIndex] = useState(0)

  const products = [
    {
      id: 1,
      badge: 'New',
      title: 'DJI Agras T50',
      specs: '50kg Spraying • 75L Spreading',
      price: '$19,990',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80',
      hasLimeButton: false,
    },
    {
      id: 2,
      badge: 'Hot',
      title: 'DJI Mavic 3M',
      specs: 'Multispectral 4 × 5MP Sensors',
      price: '$4,420',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80',
      hasLimeButton: true,
    },
    {
      id: 3,
      badge: 'Popular',
      title: 'Generator D12000i',
      specs: '9-Minute Fast Charging EFI Station',
      price: '$3,200',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
      hasLimeButton: false,
    },
    {
      id: 4,
      badge: 'Accessory',
      title: 'Spreading System T50',
      specs: 'Spiral Channel Fast Granule Dispense',
      price: '$1,850',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80',
      hasLimeButton: false,
    },
  ]

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(products.length - 1, prev + 1))
  }

  return (
    <section id="products" className="px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto w-full space-y-8 sm:space-y-10">
      {/* Header with Title and Slider Buttons */}
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A2B1D]">
            Explore Our Products
          </h2>
          <p className="text-sm sm:text-base text-[#0A2B1D]/75 font-medium">
            Professional fleet of agricultural drones, generators, and precision payload systems.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            disabled={scrollIndex === 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A2B1D]/20 bg-white text-[#0A2B1D] shadow-sm transition-all hover:bg-[#0A2B1D] hover:text-white disabled:opacity-40 cursor-pointer"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={scrollIndex === products.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A2B1D]/20 bg-white text-[#0A2B1D] shadow-sm transition-all hover:bg-[#0A2B1D] hover:text-white disabled:opacity-40 cursor-pointer"
            aria-label="Next products"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col justify-between rounded-[32px] bg-white p-6 shadow-sm border border-[#EAE4D6] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#8BD333]/50"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-3">
              <span className="rounded-full bg-[#FFEED6] px-3.5 py-1 text-xs font-bold text-[#D97706]">
                {product.badge}
              </span>
              <span className="text-sm font-extrabold text-[#0A2B1D]/80">
                {product.price}
              </span>
            </div>

            {/* Product Image Stage */}
            <div className="relative my-4 flex h-44 w-full items-center justify-center rounded-2xl bg-[#FAF5ED] p-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              {product.hasLimeButton && (
                <div className="absolute bottom-2 left-2 rounded-full bg-[#8BD333] px-2.5 py-1 text-[10px] font-bold text-[#0A2B1D]">
                  Best Match
                </div>
              )}
            </div>

            {/* Product Info & Action */}
            <div className="flex items-end justify-between pt-2">
              <div className="space-y-1.5 pr-2">
                <h3 className="font-display text-base sm:text-lg font-bold text-[#0A2B1D]">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0A2B1D]/75 line-clamp-1 font-medium">
                  {product.specs}
                </p>
              </div>

              <CircleArrowButton variant="dark" size="sm" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
