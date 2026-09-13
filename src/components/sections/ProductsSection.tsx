import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2, HeartPulse, Layers, TrendingUp } from 'lucide-react'

export function ProductsSection() {
  const solutions = [
    {
      id: 1,
      number: '01',
      title: 'Animal Health',
      subtitle: 'Comprehensive therapeutic and preventative care.',
      description:
        'Support healthier livestock with veterinary products, therapeutic solutions, anti-parasitics and nutritional supplements.',
      actionText: 'Browse Health Products',
      href: '/shop?category=antibiotics',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      number: '02',
      title: 'Poultry Production',
      subtitle: 'Complete housing, feeding, and brooding systems.',
      description:
        'Equip your poultry operation with feeding, drinking, hatchery and other essential equipment.',
      actionText: 'Explore Poultry Gear',
      href: '/shop?category=feeders',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      number: '03',
      title: 'Farm Expansion',
      subtitle: 'Scaling capacity with commercial infrastructure.',
      description:
        'Planning your next stage of growth? Speak with our team about equipment, products and bulk supply requirements.',
      actionText: 'Plan Expansion',
      href: '/solutions',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=85',
    },
  ]

  return (
    <section id="farm-solutions" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-12 sm:space-y-14">
      {/* Header with Eyebrow, Title and Supporting Copy */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            From Animal Health to <br className="hidden sm:inline" />
            Farm Equipment.
          </h2>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed font-medium max-w-2xl pt-1">
            Your farm depends on more than a single product. We bring together veterinary products, livestock equipment and practical support to help you address the needs of your operation.
          </p>
        </div>

        {/* Top Right Action Button */}
        <div className="shrink-0">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-7 py-3 text-sm font-extrabold text-[#166534] transition-all hover:bg-[#166534] hover:text-white active:scale-95 shadow-sm"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* Three Solution Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch">
        {solutions.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-[36px] bg-white p-5 sm:p-6 shadow-md border border-[#EAE6DC] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Top Farm Image Stage */}
              <div className="relative h-56 sm:h-64 w-full rounded-[28px] overflow-hidden bg-[#FAF9F5] shadow-sm mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating Top Badge with Step Number */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-black text-[#14532D] shadow-md border border-white/40">
                  <Icon className="h-3.5 w-3.5 text-[#166534]" />
                  <span>PILLAR {item.number}</span>
                </div>
              </div>

              {/* Bottom Card Content with Custom Notched SVG Backdrop Container */}
              <div className="relative flex-1 flex flex-col justify-between p-4 sm:p-5 pt-2">
                {/* SVG Backdrop Shape */}
                <svg
                  viewBox="0 0 775 361"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-25 transition-opacity duration-300 group-hover:opacity-45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M724.335 0.000417731C751.949 -0.103866 774.419 22.1972 774.523 49.8112L774.939 159.999C775.044 187.613 752.743 210.083 725.128 210.187L681.81 210.351C659.719 210.434 641.878 228.411 641.962 250.502L642.182 308.695C642.286 336.309 619.985 358.779 592.371 358.883L51.1646 360.927C23.5505 361.031 1.08044 338.73 0.976155 311.116L0.000385292 52.7362C-0.103899 25.1222 22.1972 2.65203 49.8112 2.54775L724.335 0.000417731Z"
                    fill="#F4F1EA"
                  />
                </svg>

                {/* Text Content */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-black text-[#166534]">
                      {item.number} —
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#14532D] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#14532D]/90">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#14532D]/75 leading-relaxed font-medium pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Interactive Link & Circle Button */}
                <div className="relative z-10 mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#14532D] transition-colors group-hover:text-[#166534]"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* Docked Action Button */}
                  <Link
                    to={item.href}
                    aria-label={item.actionText}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] text-[#14532D] border border-black/5 shadow-sm transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white group-hover:scale-110 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Consultation Banner Underneath */}
      <div className="rounded-[32px] sm:rounded-[40px] bg-[#14532D] p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#DCFCE7] text-xs font-extrabold uppercase tracking-widest">
            <CheckCircle2 className="h-4 w-4" />
            <span>FARM GUIDANCE & PRODUCT SOURCING</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Not sure what your farm needs?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl font-medium leading-relaxed">
            Tell us about your livestock setup and our team can help you identify veterinary products, equipment, and feeding systems suited to your operation.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 w-full md:w-auto">
          <Link
            to="/technical-support"
            className="flex md:inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-7 py-3.5 text-sm font-extrabold text-[#0E3B20] shadow-lg transition-all hover:bg-[#DCFCE7] hover:scale-[1.02] active:scale-95 text-center"
          >
            <span>Get Product Guidance</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  )
}
