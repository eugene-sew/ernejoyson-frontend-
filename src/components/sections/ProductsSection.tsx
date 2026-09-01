import { Sparkles, ArrowRight, ArrowUpRight, CheckCircle2, Sprout, TrendingUp, Building } from 'lucide-react'

export function ProductsSection() {

  const solutions = [
    {
      id: 1,
      number: '01',
      title: 'Start Your Farm',
      subtitle: 'Everything you need to get up and running.',
      description:
        'Get practical guidance on equipment, farm infrastructure, supplies, and setup requirements for your new agricultural operation.',
      actionText: 'Start Planning',
      href: '#contact',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 2,
      number: '02',
      title: 'Upgrade Your Operation',
      subtitle: 'Make your existing farm work harder.',
      description:
        'Improve efficiency, capacity, and productivity with the right equipment and upgrades for your current operation.',
      actionText: 'Explore Upgrades',
      href: '#capabilities',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=85',
    },
    {
      id: 3,
      number: '03',
      title: 'Scale Your Business',
      subtitle: 'Built for farms ready to grow.',
      description:
        'From bulk equipment sourcing to complete farm infrastructure, we help growing agribusinesses move to the next level.',
      actionText: 'Scale With Us',
      href: '#contact',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=85',
    },
  ]

  return (
    <section id="solutions" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1380px] mx-auto w-full space-y-12 sm:space-y-16">
      {/* Header with Eyebrow, Title and Supporting Copy */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3.5 max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF5ED] px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-[#0A2B1D] border border-[#EAE4D6] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#8BD333] fill-current" />
            BUILT FOR YOUR FARM
          </div>

          {/* Heading */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.1]">
            From Your First Farm to <br className="hidden sm:inline" />
            Your Next Expansion.
          </h2>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-[#0A2B1D]/80 leading-relaxed font-medium max-w-2xl pt-1">
            Whether you're starting from the ground up, improving an existing operation, or scaling for commercial production, we bring the equipment, expertise, and support together.
          </p>
        </div>

        {/* Top Right Action Button */}
        <div className="shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A2B1D] px-7 py-3 text-sm font-extrabold text-[#0A2B1D] transition-all hover:bg-[#0A2B1D] hover:text-white active:scale-95 shadow-sm"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Three Large Solution Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-7 items-stretch">
        {solutions.map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-[36px] bg-white p-5 sm:p-6 shadow-md border border-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
            >
              {/* Top Farm Image Stage */}
              <div className="relative h-56 sm:h-64 w-full rounded-[28px] overflow-hidden bg-[#FAF5ED] shadow-sm mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating Top Badge with Step Number */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1 text-xs font-black text-[#0A2B1D] shadow-md border border-white/40">
                  <Icon className="h-3.5 w-3.5 text-[#8BD333]" />
                  <span>STAGE {item.number}</span>
                </div>
              </div>

              {/* Bottom Card Content with Custom Notched SVG Container */}
              <div className="relative flex-1 flex flex-col justify-between p-4 sm:p-5 pt-2">
                {/* SVG Backdrop Shape */}
                <svg
                  viewBox="0 0 775 361"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M724.335 0.000417731C751.949 -0.103866 774.419 22.1972 774.523 49.8112L774.939 159.999C775.044 187.613 752.743 210.083 725.128 210.187L681.81 210.351C659.719 210.434 641.878 228.411 641.962 250.502L642.182 308.695C642.286 336.309 619.985 358.779 592.371 358.883L51.1646 360.927C23.5505 361.031 1.08044 338.73 0.976155 311.116L0.000385292 52.7362C-0.103899 25.1222 22.1972 2.65203 49.8112 2.54775L724.335 0.000417731Z"
                    fill="#FAF5ED"
                  />
                </svg>

                {/* Text Content */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm font-black text-[#8BD333]">
                      {item.number} —
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#0A2B1D] tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#0A2B1D]/90">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#0A2B1D]/70 leading-relaxed font-medium pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Interactive Link & Circle Button */}
                <div className="relative z-10 mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#0A2B1D] transition-colors group-hover:text-[#8BD333]"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  {/* Docked Action Button */}
                  <a
                    href={item.href}
                    aria-label={item.actionText}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF5ED] text-[#0A2B1D] border border-black/5 shadow-sm transition-all duration-300 group-hover:bg-[#8BD333] group-hover:text-white group-hover:scale-110 group-hover:rotate-45"
                  >
                    <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Small CTA Banner Underneath */}
      <div className="rounded-[32px] sm:rounded-[40px] bg-[#0A2B1D] p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#8BD333] text-xs font-extrabold uppercase tracking-widest">
            <CheckCircle2 className="h-4 w-4" />
            <span>FARM CONSULTATION & SOURCING</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            Not sure what your farm needs?
          </h3>
          <p className="text-xs sm:text-sm text-white/80 max-w-xl font-medium leading-relaxed">
            Tell us about your operation and we'll help you identify the right products, infrastructure, and solutions.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0 w-full md:w-auto">
          <a
            href="#contact"
            className="flex md:inline-flex items-center justify-center gap-2 rounded-full bg-[#8BD333] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all hover:bg-[#9BE139] hover:scale-[1.02] active:scale-95 text-center"
          >
            <span>Get a Farm Recommendation</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  )
}
