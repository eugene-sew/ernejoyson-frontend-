import { useState } from 'react'
import { Play, ArrowRight, ChevronLeft, ChevronRight, Video, Sparkles, CheckCircle2 } from 'lucide-react'

export function WhyAgroneSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const accordions = [
    {
      id: 0,
      title: '01 — We Understand Your Farm',
      description:
        'Every farm is different. We help you find equipment and solutions that fit your operation, scale, and goals.',
      tag: '01',
      mediaTitle: 'Solutions designed around the way you farm.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90',
    },
    {
      id: 1,
      title: '02 — We Source for Quality',
      description:
        'We source dependable agricultural equipment and supplies selected for real-world farming conditions.',
      tag: '02',
      mediaTitle: 'Equipment made to work as hard as you do.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1800&q=90',
    },
    {
      id: 2,
      title: '03 — We Help You Make Better Decisions',
      description:
        'Need help choosing, setting up, or upgrading your operation? Our agricultural knowledge goes beyond simply selling you a product.',
      tag: '03',
      mediaTitle: 'The right advice can make all the difference.',
      image: 'https://images.unsplash.com/photo-1564689511699-231174cb2e0a?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1564689511699-231174cb2e0a?auto=format&fit=crop&w=1800&q=90',
    },
    {
      id: 3,
      title: '04 — We Grow With Your Business',
      description:
        'Whether you need one piece of equipment or a complete farm setup, we bring products, guidance, and practical support together.',
      tag: '04',
      mediaTitle: 'From your first purchase to your next expansion.',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1800&q=90',
    },
  ]

  const handleAccordionClick = (id: number) => {
    if (openAccordion === id) {
      setOpenAccordion(null)
    } else {
      setOpenAccordion(id)
      setActiveMediaIndex(id)
    }
  }

  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % accordions.length)
  }

  const prevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + accordions.length) % accordions.length)
  }

  return (
    <section id="services" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header with Eyebrow, Title and Supporting Copy */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5ED] px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0A2B1D] border border-[#EAE4D6] shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-[#8BD333] fill-current" />
          WHY ERNEJOYSON?
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.1]">
          Why Farmers Choose ERNEJOYSON.
        </h2>

        {/* Supporting copy */}
        <p className="text-base sm:text-lg text-[#0A2B1D]/80 leading-relaxed font-semibold">
          Reliable products. Practical expertise. Solutions built for growth.
        </p>
      </div>

      {/* Main Cream Card Container */}
      <div className="rounded-[40px] sm:rounded-[52px] bg-[#FAF5ED] border border-[#EAE4D6] p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10 shadow-lg">
        {/* Top Feature Rows (White Cards) */}
        <div className="space-y-3">
          {accordions.map((item) => {
            const isOpen = openAccordion === item.id

            if (isOpen) {
              return (
                <div
                  key={item.id}
                  onClick={() => handleAccordionClick(item.id)}
                  className="rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 transition-all duration-200 cursor-pointer ring-1 ring-[#0A2B1D]/10"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#8BD333] shrink-0" />
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A2B1D]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-[#0A2B1D]/80 max-w-xl leading-relaxed font-medium pl-7">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Crop Field Thumbnail */}
                  <div className="h-24 w-36 sm:h-28 sm:w-48 shrink-0 rounded-2xl overflow-hidden bg-[#F4F1E8] shadow-sm">
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
                onClick={() => handleAccordionClick(item.id)}
                className="rounded-2xl bg-white px-6 sm:px-7 py-5 sm:py-6 shadow-sm border border-black/5 flex items-center justify-between transition-all duration-200 hover:bg-white/95 cursor-pointer"
              >
                <h3 className="font-display text-base sm:text-lg font-bold text-[#0A2B1D]">
                  {item.title}
                </h3>
                <span className="font-display text-sm font-bold text-[#0A2B1D]/60">
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A2B1D] px-4 py-1.5 text-xs font-bold text-[#8BD333] shadow-sm">
                <Video className="h-4 w-4" />
                Featured Media
              </span>
              <span className="text-sm font-semibold text-[#0A2B1D]/70 hidden sm:inline">
                • {activeMediaIndex + 1} of {accordions.length} Field Demonstrations
              </span>
            </div>

            {/* Media Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevMedia}
                aria-label="Previous video"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#0A2B1D]/20 text-[#0A2B1D] shadow-sm hover:bg-[#0A2B1D] hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextMedia}
                aria-label="Next video"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-[#0A2B1D]/20 text-[#0A2B1D] shadow-sm hover:bg-[#0A2B1D] hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Large Video Display Stage */}
          <div className="relative min-h-[380px] sm:min-h-[460px] w-full rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-md">
            {/* Background Aerial Green Rows & Field Operations */}
            <img
              src={accordions[activeMediaIndex].videoBg}
              alt={accordions[activeMediaIndex].mediaTitle}
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B1D]/80 via-[#0A2B1D]/30 to-transparent" />

            {/* Bottom-Left Floating White Notched Card with Lime Play Button */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-lg z-10">
              <div className="relative rounded-[28px] sm:rounded-[32px] bg-white p-6 sm:p-7 shadow-2xl border border-white/80 transition-all duration-300">
                {/* Protruding Lime Green Play Button */}
                <button
                  type="button"
                  aria-label="Play Featured Video"
                  className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#8BD333] text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
                >
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </button>

                {/* Subtitle tag */}
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8BD333] block mb-1">
                  CASE STUDY & SHOWCASE
                </span>

                {/* Headline / Copy */}
                <h3 className="font-display text-base sm:text-xl font-extrabold text-[#0A2B1D] leading-snug pr-8">
                  {accordions[activeMediaIndex].mediaTitle}
                </h3>

                {/* Bottom Actions: VIEW MORE pill + Circle Arrow */}
                <div className="mt-4 flex items-center gap-2.5 pt-1">
                  <a
                    href="#capabilities"
                    className="inline-flex items-center justify-center rounded-full border border-[#0A2B1D] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95"
                  >
                    VIEW MORE
                  </a>

                  <a
                    href="#capabilities"
                    aria-label="View capability details"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A2B1D] text-[#8BD333] transition-all hover:bg-[#154631] active:scale-95"
                  >
                    <ArrowRight className="h-4.5 w-4.5" />
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
