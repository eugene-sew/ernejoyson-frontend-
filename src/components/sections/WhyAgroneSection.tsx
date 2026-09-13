import { useState } from 'react'
import { Play, ArrowRight, ChevronLeft, ChevronRight, Video, CheckCircle2 } from 'lucide-react'

export function WhyAgroneSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0)
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const accordions = [
    {
      id: 0,
      title: '01 — Quality You Can Trust',
      description:
        'We focus on providing quality veterinary products and livestock equipment that farmers can rely on in their day-to-day operations.',
      tag: '01',
      mediaTitle: 'Certified veterinary formulations and durable equipment.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1800&q=90',
    },
    {
      id: 1,
      title: '02 — Products for Real Farm Needs',
      description:
        'From animal health products to feeding, drinking, hatchery and processing equipment, our range is built around the practical needs of poultry and livestock producers.',
      tag: '02',
      mediaTitle: 'Practical poultry & livestock tools designed for daily farm life.',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=90',
    },
    {
      id: 2,
      title: '03 — Expertise Beyond the Sale',
      description:
        'Choosing the right product matters. Our technical team provides practical guidance to help customers understand and use products for their intended purpose.',
      tag: '03',
      mediaTitle: 'Guidance on dosage, administration, and equipment maintenance.',
      image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=1800&q=90',
    },
    {
      id: 3,
      title: '04 — Growing With Farmers',
      description:
        'Whether you are starting, expanding or managing an established operation, ERNEJOYSON is positioned to support your farm as its needs evolve.',
      tag: '04',
      mediaTitle: 'Supporting commercial scaling across all regions of Ghana.',
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=600&q=80',
      videoBg: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=1800&q=90',
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
    <section id="why-ernejoyson" className="px-3 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-8 sm:space-y-12">
      {/* Header with Eyebrow, Title and Supporting Copy */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-2 sm:px-0">
        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
          More Than a Supplier. <br className="hidden sm:inline" />
          A Partner in Better Farming.
        </h2>

        {/* Supporting copy */}
        <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed font-medium max-w-2xl mx-auto">
          We combine quality veterinary products, practical livestock equipment and technical knowledge to help farmers make better decisions and run more productive operations.
        </p>
      </div>

      {/* Main Container: Fluid on Mobile, Cream Card on Tablet/Desktop */}
      <div className="rounded-none sm:rounded-[48px] bg-transparent sm:bg-[#FAF9F5] sm:border sm:border-[#EAE6DC] p-0 sm:p-10 lg:p-12 space-y-6 sm:space-y-10 shadow-none sm:shadow-sm">
        {/* Top Feature Rows */}
        <div className="space-y-2.5 sm:space-y-3">
          {accordions.map((item) => {
            const isOpen = openAccordion === item.id

            if (isOpen) {
              return (
                <div
                  key={item.id}
                  onClick={() => handleAccordionClick(item.id)}
                  className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-7 shadow-sm border border-black/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 transition-all duration-200 cursor-pointer ring-1.5 ring-[#166534]/20"
                >
                  <div className="flex-1 space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-[#166534] shrink-0" />
                      <h3 className="font-display text-base sm:text-xl font-bold text-[#14532D]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#14532D]/80 max-w-xl leading-relaxed font-medium pl-6 sm:pl-7">
                      {item.description}
                    </p>
                  </div>

                  {/* Thumbnail */}
                  <div className="h-20 w-32 sm:h-24 sm:w-44 shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF9F5] shadow-sm">
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
                className="rounded-xl sm:rounded-2xl bg-white px-4 sm:px-7 py-4 sm:py-5 shadow-sm border border-black/5 flex items-center justify-between transition-all duration-200 hover:bg-white/90 cursor-pointer"
              >
                <h3 className="font-display text-sm sm:text-base font-bold text-[#14532D]">
                  {item.title}
                </h3>
                <span className="font-display text-xs sm:text-sm font-bold text-[#166534]">
                  {item.tag}
                </span>
              </div>
            )
          })}
        </div>

        {/* Bottom Featured Media Section with Video Carousel Tag */}
        <div className="space-y-3 sm:space-y-4">
          {/* Header Bar for Featured Media Tag + Carousel Navigation */}
          <div className="flex items-center justify-between px-1 sm:px-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#14532D] px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold text-[#DCFCE7] shadow-sm">
                <Video className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Featured Field Demonstrations
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#14532D]/70 hidden sm:inline">
                • {activeMediaIndex + 1} of {accordions.length} Farm Showcases
              </span>
            </div>

            {/* Media Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevMedia}
                aria-label="Previous showcase"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border border-[#14532D]/20 text-[#14532D] shadow-sm hover:bg-[#166534] hover:text-white transition-all cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={nextMedia}
                aria-label="Next showcase"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white border border-[#14532D]/20 text-[#14532D] shadow-sm hover:bg-[#166534] hover:text-white transition-all cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Large Video Display Stage */}
          <div className="relative min-h-[360px] sm:min-h-[460px] w-full rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-md">
            {/* Background Livestock and Poultry Farming Footage */}
            <img
              src={accordions[activeMediaIndex].videoBg}
              alt={accordions[activeMediaIndex].mediaTitle}
              className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E3B20]/90 via-[#0E3B20]/40 to-transparent" />

            {/* Bottom-Left Floating Custom Notched SVG Card with Docked Play Button */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[480px] z-10">
              <div className="relative p-5 sm:p-7 sm:pb-8 flex flex-col justify-between min-h-[190px] sm:min-h-[220px] filter drop-shadow-2xl">
                {/* Custom Notched Card SVG Background */}
                <svg
                  viewBox="0 0 776 361"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M604.811 0.000381001C632.425 -0.103903 654.895 22.1972 655 49.8112L655.179 97.2064C655.262 119.298 673.238 137.138 695.329 137.055L724.854 136.944C752.468 136.839 774.938 159.14 775.042 186.754L775.499 307.74C775.603 335.354 753.302 357.824 725.688 357.928L51.1647 360.476C23.5507 360.58 1.08044 338.279 0.976155 310.665L0.000385292 52.2848C-0.103899 24.6708 22.1972 2.20062 49.8112 2.09633L604.811 0.000381001Z"
                    fill="white"
                  />
                </svg>

                {/* Docked Green Play Button in Notch */}
                <button
                  type="button"
                  aria-label="Play Demonstration Video"
                  className="absolute top-3 -right-[5px] sm:top-4 sm:-right-[5px] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#166534] text-white shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer z-20"
                >
                  <Play className="h-5 w-5 fill-current ml-0.5" />
                </button>

                {/* Content Inside Notched Card */}
                <div className="relative z-10 pr-10 sm:pr-14 space-y-1 sm:space-y-1.5 pt-1">
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#166534] block">
                    PRACTICAL DEMONSTRATION
                  </span>

                  <h3 className="font-display text-sm sm:text-lg lg:text-xl font-extrabold text-[#14532D] leading-snug">
                    {accordions[activeMediaIndex].mediaTitle}
                  </h3>
                </div>

                {/* Bottom Actions: EXPLORE SOLUTIONS pill + Circle Arrow */}
                <div className="relative z-10 mt-3 sm:mt-4 flex items-center gap-2 sm:gap-2.5 pt-1">
                  <a
                    href="#categories"
                    className="inline-flex items-center justify-center rounded-full border border-[#14532D] px-5 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#14532D] transition-all hover:bg-[#166534] hover:text-white active:scale-95"
                  >
                    EXPLORE PRODUCTS
                  </a>

                  <a
                    href="#categories"
                    aria-label="Explore products"
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#14532D] text-[#DCFCE7] transition-all hover:bg-[#166534] active:scale-95"
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
