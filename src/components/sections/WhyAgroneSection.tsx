import { useState } from 'react'
import { Play, ArrowRight, ChevronLeft, ChevronRight, Video } from 'lucide-react'

export function WhyAgroneSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const accordions = [
    {
      id: 0,
      title: 'All Scenario Adaptability',
      description: 'Fully automatic and manual operation orchard mode variable rate application',
      tag: '01',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 1,
      title: 'Heavy Payload',
      description: 'Up to 50kg spraying payload and 75L spreading capacity for high daily field coverage.',
      tag: '02',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Four Sprinkler Kit',
      description: 'Equipped with four centrifugal atomizing sprinklers providing wide-swath uniform coverage.',
      tag: '03',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'High Flow Rate',
      description: 'Magnetic drive impeller pump delivering up to 24L/min flow rate for maximum spraying efficiency.',
      tag: '04',
      image: 'https://images.unsplash.com/photo-1564689511699-231174cb2e0a?auto=format&fit=crop&w=600&q=80',
    },
  ]

  const mediaItems = [
    {
      id: 1,
      title: 'Spreader & spiral channel spinning disk significantly',
      badge: 'Featured Video 01',
      videoBg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90',
      droneOverlay: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: '3D Terrain contour following in complex mountain orchards',
      badge: 'Featured Video 02',
      videoBg: 'https://images.unsplash.com/photo-1564689511699-231174cb2e0a?auto=format&fit=crop&w=1800&q=90',
      droneOverlay: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Autonomous fleet synchronisation for large-scale broadacre seeding',
      badge: 'Featured Video 03',
      videoBg: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1800&q=90',
      droneOverlay: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80',
    },
  ]

  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const prevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  return (
    <section id="services" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1380px] mx-auto w-full">
      {/* Title */}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] text-center mb-8 sm:mb-12">
        Why Agrone?
      </h2>

      {/* Main Cream Card Container */}
      <div className="rounded-[40px] sm:rounded-[52px] bg-[#FAF5ED] border border-[#EAE4D6] p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10 shadow-lg">
        {/* Top Feature Rows (White Cards) */}
        <div className="space-y-2.5">
          {accordions.map((item) => {
            const isOpen = openAccordion === item.id

            if (isOpen) {
              return (
                <div
                  key={item.id}
                  onClick={() => setOpenAccordion(null)}
                  className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-sm border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-200 cursor-pointer"
                >
                  <div className="flex-1 space-y-1.5">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0A2B1D]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0A2B1D]/70 max-w-lg leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <span className="font-display text-xs font-bold text-[#0A2B1D]">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  {/* Right Crop Field Thumbnail */}
                  <div className="h-20 w-32 sm:h-24 sm:w-44 shrink-0 rounded-2xl overflow-hidden bg-[#F4F1E8] shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              )
            }

            return (
              <div
                key={item.id}
                onClick={() => setOpenAccordion(item.id)}
                className="rounded-2xl bg-white px-5 sm:px-6 py-4 sm:py-5 shadow-sm border border-black/5 flex items-center justify-between transition-all duration-200 hover:bg-white/95 cursor-pointer"
              >
                <h3 className="font-display text-sm sm:text-base font-bold text-[#0A2B1D]">
                  {item.title}
                </h3>
                <span className="font-display text-xs font-bold text-[#0A2B1D]/70">
                  {item.tag}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom Featured Media Section with Video Carousel Tag */}
        <div className="space-y-4">
          {/* Header Bar for Featured Media Tag + Carousel Navigation */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A2B1D] px-3.5 py-1 text-xs font-bold text-[#8BD333] shadow-sm">
                <Video className="h-3.5 w-3.5" />
                Featured Media
              </span>
              <span className="text-xs font-semibold text-[#0A2B1D]/60 hidden sm:inline">
                • {activeMediaIndex + 1} of {mediaItems.length} Demonstration Videos
              </span>
            </div>

            {/* Media Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevMedia}
                aria-label="Previous video"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#0A2B1D]/20 text-[#0A2B1D] shadow-sm hover:bg-[#0A2B1D] hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextMedia}
                aria-label="Next video"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-[#0A2B1D]/20 text-[#0A2B1D] shadow-sm hover:bg-[#0A2B1D] hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Large Video Display Stage */}
          <div className="relative min-h-[380px] sm:min-h-[460px] w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-md">
            {/* Background Aerial Green Rows & Forest Edge */}
            <img
              src={mediaItems[activeMediaIndex].videoBg}
              alt="Agricultural Drone Flight Operation"
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B1D]/60 via-transparent to-transparent" />

            {/* Top-Down Drone Graphic in Mid-Air with Spray Concentric Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4">
              {/* Concentric green radar spray rings */}
              <div className="relative flex items-center justify-center">
                <div className="absolute h-52 w-52 sm:h-72 sm:w-72 rounded-full border-2 border-[#8BD333]/40 animate-ping opacity-25" />
                <div className="absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-white/30" />
                <div className="absolute h-40 w-40 sm:h-56 sm:w-56 rounded-full border border-[#8BD333]/50" />

                {/* Overhead Quad-Prop Drone Graphic */}
                <div className="relative z-10 w-48 sm:w-64 opacity-90 drop-shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80"
                    alt="Drone In Flight"
                    className="w-full h-auto object-contain rotate-12"
                  />
                </div>
              </div>
            </div>

            {/* Bottom-Left Floating White Notched Card with Lime Play Button */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-10">
              <div className="relative rounded-[28px] sm:rounded-[32px] bg-white p-5 sm:p-6 shadow-2xl border border-white/80 transition-all duration-300">
                {/* Protruding Lime Green Play Button */}
                <button
                  type="button"
                  aria-label="Play Featured Video"
                  className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#8BD333] text-[#0A2B1D] shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
                >
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </button>

                {/* Headline / Copy */}
                <h3 className="font-display text-sm sm:text-base font-bold text-[#0A2B1D] leading-snug pr-6">
                  {mediaItems[activeMediaIndex].title}
                </h3>

                {/* Bottom Actions: VIEW MORE pill + Circle Arrow */}
                <div className="mt-4 flex items-center gap-2 pt-1">
                  <a
                    href="#capabilities"
                    className="inline-flex items-center justify-center rounded-full border border-[#0A2B1D] px-4 sm:px-5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95"
                  >
                    VIEW MORE
                  </a>

                  <a
                    href="#capabilities"
                    aria-label="View capability details"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2B1D] text-[#8BD333] transition-all hover:bg-[#154631] active:scale-95"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
