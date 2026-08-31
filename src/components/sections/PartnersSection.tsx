import { Sprout, Globe, Wheat, Trees, Sun, ShieldCheck } from 'lucide-react'

export function PartnersSection() {
  const partners = [
    {
      name: 'TerraCrest Agri',
      icon: Sprout,
      category: 'Crop Enterprise',
    },
    {
      name: 'AeroHarvest Global',
      icon: Globe,
      category: 'Fleet Operations',
    },
    {
      name: 'BioFlora Farms',
      icon: Wheat,
      category: 'Organic Orchards',
    },
    {
      name: 'Verdant Valley Co.',
      icon: Trees,
      category: 'Commercial Vineyards',
    },
    {
      name: 'SolTerra Grain',
      icon: Sun,
      category: 'Broadacre Ag',
    },
    {
      name: 'AgriCore Systems',
      icon: ShieldCheck,
      category: 'Precision Research',
    },
  ]

  return (
    <section id="partners" className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14 max-w-[1380px] mx-auto w-full">
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
        {/* Subtitle / Trust Label */}
        <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#0A2B1D]/55">
          Trusted by 250+ Commercial Farms & Agri Enterprises Worldwide
        </p>

        {/* Scrollable Single Row on Mobile & Tablet, Centered on Desktop */}
        <div className="w-full flex items-center justify-start lg:justify-center gap-6 sm:gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth py-2 px-2 sm:px-0">
          {partners.map((partner) => {
            const Icon = partner.icon
            return (
              <div
                key={partner.name}
                className="group flex flex-col items-center justify-center gap-2 p-3.5 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-black/[0.02] shrink-0"
              >
                <div className="flex items-center gap-2.5 grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A2B1D]/5 text-[#0A2B1D]">
                    <Icon className="h-4.5 w-4.5 stroke-[2.2]" />
                  </div>
                  <span className="font-display text-sm sm:text-base font-bold tracking-tight text-[#0A2B1D] whitespace-nowrap">
                    {partner.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
