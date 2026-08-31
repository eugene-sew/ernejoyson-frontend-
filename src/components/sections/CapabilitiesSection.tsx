import { useState } from 'react'
import { Sparkles, ArrowLeft, ArrowRight, Asterisk, Drone } from 'lucide-react'

export function CapabilitiesSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const capabilities = [
    {
      id: 1,
      title: 'Heavy Payload',
      image: 'https://images.unsplash.com/photo-1564689511699-231174cb2e0a?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      title: 'Smooth Spreading',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      title: 'Four Sprinkler Kit',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=85',
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % capabilities.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + capabilities.length) % capabilities.length)
  }

  return (
    <section id="capabilities" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-20 max-w-[1380px] mx-auto w-full space-y-12 sm:space-y-16">
      {/* Top Header Row with Badge, Title and Explore Button */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          {/* Top Line: Badge + "Elevates" */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5ED] p-1.5 pr-2.5 border border-[#EAE4D6] shadow-sm">
              <Sparkles className="h-4 w-4 text-[#0A2B1D] ml-1 fill-current" />
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0A2B1D] text-[#8BD333]">
                <Drone className="h-4 w-4 stroke-[2.5]" />
              </div>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.08]">
              Elevates
            </h2>
          </div>

          {/* Bottom Line: "drone agricultural [Asterisk Badge] operations new heights" */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.12]">
            drone agricultural{' '}
            <span className="inline-flex items-center justify-center rounded-full bg-[#FAF5ED] border border-[#EAE4D6] h-10 w-10 sm:h-12 sm:w-12 align-middle mx-1 shadow-sm">
              <Asterisk className="h-6 w-6 sm:h-7 sm:w-7 text-[#8BD333] stroke-[2.5]" />
            </span>
            <br />
            operations new heights
          </h2>
        </div>

        {/* Top Right: Explore Drones Pill Button */}
        <div className="shrink-0 pt-2 lg:pt-3">
          <a
            href="#products"
            className="inline-flex items-center justify-center rounded-full border border-[#0A2B1D] px-7 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 shadow-sm"
          >
            EXPLORE DRONES
          </a>
        </div>
      </div>

      {/* Main Content Row: Left Telemetry Text + Right 3 Rounded Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column: Description & Circle Arrow Controls */}
        <div className="lg:col-span-3 space-y-6 pt-2">
          <p className="text-xs sm:text-sm text-[#0A2B1D]/75 leading-relaxed">
            DJI RC Plus has a 7-inch high brightness screen and an 8-core processor for smooth operations. Intelligent route planning minimizes distances flown with a full tank.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A2B1D] bg-transparent text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 cursor-pointer shadow-sm"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0A2B1D] bg-transparent text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 cursor-pointer shadow-sm"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Column: 3 Vertical Rounded Image Cards */}
        <div className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6">
            {capabilities.map((item, index) => (
              <div key={item.id} className="group flex flex-col">
                {/* Rounded Image Stage */}
                <div
                  className={`relative h-[340px] sm:h-[380px] w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-[#FAF5ED] border border-[#EAE4D6] shadow-sm transition-all duration-300 hover:shadow-xl ${
                    activeSlide === index ? 'ring-2 ring-[#8BD333]' : ''
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Caption Title Below Image */}
                <h3 className="font-display text-sm sm:text-base font-bold text-[#0A2B1D] mt-3.5 tracking-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
