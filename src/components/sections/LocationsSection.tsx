import { MapPin, Building2, PhoneCall } from 'lucide-react'

export function LocationsSection() {
  const locations = [
    {
      id: 'kasoa',
      city: 'Kasoa',
      role: 'Head Office',
      description: 'Central distribution hub, main inventory, and administrative offices.',
      isHq: true,
      belt: 'Greater Accra / Central Belt',
    },
    {
      id: 'kumasi',
      city: 'Kumasi',
      role: 'Middle & Northern Belt Hub',
      description: 'Serving poultry and livestock operations across Ashanti, Bono, and the northern regions.',
      isHq: false,
      belt: 'Ashanti & Northern Regions',
    },
    {
      id: 'swedru',
      city: 'Swedru',
      role: 'Regional Operations',
      description: 'Supporting commercial farms, feed supplies, and veterinary distribution in the Central Region.',
      isHq: false,
      belt: 'Central Region',
    },
    {
      id: 'nsawam',
      city: 'Nsawam',
      role: 'Regional Operations',
      description: 'Serving key poultry corridors and livestock enterprises in the Eastern Region.',
      isHq: false,
      belt: 'Eastern Region',
    },
  ]

  return (
    <section id="locations" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            Closer to Farmers <br className="hidden sm:inline" />
            Across Ghana.
          </h2>

          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            With operations across multiple locations in Ghana, ERNEJOYSON is building a distribution network that makes veterinary products and livestock equipment more accessible to farmers and agribusinesses.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <a
            href="#b2b-quote"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-7 py-3.5 text-sm font-extrabold text-[#166534] transition-all hover:bg-[#166534] hover:text-white active:scale-95 shadow-sm"
          >
            <span>Contact a Regional Hub</span>
            <PhoneCall className="h-4 w-4 stroke-[2.2]" />
          </a>
        </div>
      </div>

      {/* Locations 4-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className={`rounded-[32px] p-6 sm:p-7 shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${
              loc.isHq
                ? 'bg-gradient-to-b from-white to-[#F0FDF4] border-[#86EFAC] ring-1 ring-[#166534]/10'
                : 'bg-white border-[#EAE6DC]'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                    loc.isHq ? 'bg-[#166534] text-white' : 'bg-[#DCFCE7] text-[#166534]'
                  }`}
                >
                  <MapPin className="h-5 w-5 stroke-[2.2]" />
                </div>

                {loc.isHq && (
                  <span className="rounded-full bg-[#166534] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                    Head Office
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-2xl font-extrabold text-[#14532D]">
                  {loc.city}
                </h3>
                <p className="text-xs font-bold text-[#166534] uppercase tracking-wide mt-1">
                  {loc.role}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#14532D]/75 leading-relaxed font-medium">
                {loc.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#EAE6DC]/60 flex items-center justify-between text-xs font-semibold text-[#14532D]/70">
              <span>{loc.belt}</span>
              <Building2 className="h-4 w-4 text-[#166534]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
