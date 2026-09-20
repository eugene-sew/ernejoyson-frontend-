import React from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  PhoneCall,
  Clock,
  Truck,
  ShieldCheck,
  Mail,
  ArrowRight,
  Building2,
} from 'lucide-react'

export const LocationsPage: React.FC = () => {
  const branches = [
    {
      id: 'kasoa-hq',
      name: 'Kasoa (Headquarters & Central Depot)',
      badge: 'Central Import Warehouse',
      isHq: true,
      address: 'Winneba - Kasoa Highway, Central Region, Ghana',
      landmark: 'Near Kasoa Old Barrier / Main Wholesale Hub',
      phone: '+233 24 400 0000',
      whatsapp: '233244000000',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 7:30 AM – 6:00 PM (Closed Sundays)',
      keyFeatures: [
        'Full inventory of all 100+ pharmaceuticals & machinery',
        'Cold-chain temperature-controlled biological storage',
        'Bulk truck dispatch & commercial farm fleet loading',
        'Senior Veterinary Pharmacist on-site daily',
      ],
      description:
        'Our flagship distribution center and central import clearance facility. All direct overseas shipments arrive here before allocation to regional branches.',
    },
    {
      id: 'kumasi',
      name: 'Kumasi Branch (Middle & Northern Hub)',
      badge: 'Ashanti & Northern Belt Hub',
      isHq: false,
      address: 'Suame Commercial Corridor / Near Kejetia, Kumasi, Ashanti Region',
      landmark: 'Directly accessible for Suame & Adum transit trucks',
      phone: '+233 24 400 0001',
      whatsapp: '233244000000',
      email: 'kumasi@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:30 PM (Closed Sundays)',
      keyFeatures: [
        'Same-day supply for Ashanti, Bono, and Ahafo poultry clusters',
        'Daily express waybills to Tamale, Bolgatanga, and Wa',
        'Wholesale collection point for northern agro-dealers',
        'Full stock of feeders, drinkers, and vaccines',
      ],
      description:
        'Our vital strategic hub serving Ghana’s intensive egg production belt in Ashanti and gateway for freight into the northern regions.',
    },
    {
      id: 'swedru',
      name: 'Agona Swedru Branch',
      badge: 'Central Regional Hub',
      isHq: false,
      address: 'Main Commercial Street, Agona Swedru, Central Region, Ghana',
      landmark: 'Close to Central Market & Commercial Transport Station',
      phone: '+233 24 400 0002',
      whatsapp: '233244000000',
      email: 'swedru@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:00 PM (Closed Sundays)',
      keyFeatures: [
        'Dedicated to Central Region poultry and livestock farmers',
        'Retail and semi-wholesale walk-in counter',
        'Quick access for Breman Asikuma, Winneba, and surrounding farms',
        'Dewormers, vitamins, and drinkers in steady stock',
      ],
      description:
        'Bringing certified animal health products and durable feeders directly into one of Ghana’s most productive mixed-farming districts.',
    },
    {
      id: 'nsawam',
      name: 'Nsawam Branch',
      badge: 'Eastern Region Hub',
      isHq: false,
      address: 'Nsawam Commercial Junction, Eastern Region, Ghana',
      landmark: 'Main Accra-Kumasi Highway corridor',
      phone: '+233 24 400 0003',
      whatsapp: '233244000000',
      email: 'nsawam@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:00 PM (Closed Sundays)',
      keyFeatures: [
        'Serving Eastern Region poultry clusters & peri-urban Accra farms',
        'Day-old chick brooding equipment pickup point',
        'Stock of disinfectants, egg boosters, and debeakers',
        'Flexible order pickup for passing commercial farm vehicles',
      ],
      description:
        'Positioned along the national transit corridor to provide rapid restocks for commercial operations between Accra and Eastern Ghana.',
    },
  ]

  const nationwideDestinations = [
    { region: 'Greater Accra', hubs: 'Accra Central, Tema, Amasaman, Dodowa' },
    { region: 'Ashanti Region', hubs: 'Kumasi, Obuasi, Ejura, Mampong' },
    { region: 'Central Region', hubs: 'Kasoa, Cape Coast, Swedru, Winneba, Mankessim' },
    { region: 'Eastern Region', hubs: 'Nsawam, Koforidua, Asamankese, Nkawkaw' },
    { region: 'Bono & Ahafo', hubs: 'Sunyani, Techiman, Dormaa Ahenkro, Goaso' },
    { region: 'Western & Western North', hubs: 'Takoradi, Tarkwa, Sefwi Wiawso' },
    { region: 'Volta & Oti', hubs: 'Ho, Hohoe, Aflao, Dambai' },
    { region: 'Northern, Upper East & West', hubs: 'Tamale, Yendi, Bolgatanga, Bawku, Wa' },
  ]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Our Distribution Hubs Across Ghana
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            With our primary bonded warehouse in Kasoa and active regional hubs in Kumasi, Agona Swedru, and Nsawam, ERNEJOYSON brings genuine veterinary pharmaceuticals and heavy-duty livestock equipment closer to your farm gate.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#22C55E]" />
              <span>4 Strategic Physical Hubs</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-[#22C55E]" />
              <span>Daily Freight Waybills to All 16 Regions</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Branch Cards Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Physical Branches
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Visit or Collect From Our Centers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <div
              key={b.id}
              className={`rounded-3xl p-6 sm:p-8 border shadow-xs flex flex-col justify-between space-y-6 transition-all ${
                b.isHq
                  ? 'bg-white border-[#166534]/40 ring-2 ring-[#166534]/15 shadow-md'
                  : 'bg-white border-[#EAE6DC] hover:border-[#166534]/30 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                      {b.badge}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                      {b.name}
                    </h3>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FAF9F5] text-[#166534] border border-[#EAE6DC] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
                  {b.description}
                </p>

                {/* Info rows */}
                <div className="space-y-2.5 rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] text-xs">
                  <div className="flex items-start gap-2.5 text-[#14532D]">
                    <MapPin className="h-4 w-4 text-[#166534] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">{b.address}</span>
                      <span className="block text-[11px] text-[#14532D]/60 mt-0.5">
                        Landmark: {b.landmark}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-[#14532D]">
                    <Clock className="h-4 w-4 text-[#166534] shrink-0" />
                    <span className="font-semibold">{b.hours}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-[#14532D]">
                    <PhoneCall className="h-4 w-4 text-[#166534] shrink-0" />
                    <a
                      href={`tel:${b.phone}`}
                      className="font-mono font-bold hover:text-[#166534] hover:underline"
                    >
                      {b.phone}
                    </a>
                  </div>
                </div>

                {/* Key Branch Capabilities */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#14532D]/70 block">
                    Branch Capabilities & Inventory:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#14532D]/85">
                    {b.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#166534] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${b.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white py-2.5 px-4 text-xs font-bold transition-all shadow-xs"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call {b.name.split(' ')[0]} Desk</span>
                </a>

                <a
                  href={`mailto:${b.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] transition-colors shrink-0"
                  title="Send Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Nationwide Shipping & Waybills to All 16 Regions */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#166534]">
            <Truck className="h-4 w-4" />
            <span>Outside Our 4 Cities?</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Daily Waybill Freight to Every Corner of Ghana
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Over 60% of our commercial orders are dispatched via trusted inter-city freight handlers (VIP, OA, STC, 2M Express, Metro Mass, and private cargo vans). Place your order by 12:00 PM GMT for same-day dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {nationwideDestinations.map((dest, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] space-y-1.5"
            >
              <h4 className="font-display text-sm font-bold text-[#14532D]">
                {dest.region}
              </h4>
              <p className="text-xs text-[#14532D]/70 font-medium leading-relaxed">
                {dest.hubs}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-[#DCFCE7]/40 border border-[#DCFCE7] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-sm font-black text-[#14532D]">
              Secure Cold-Chain for Sensitive Biologicals & Vaccines
            </h4>
            <p className="text-xs text-[#14532D]/80 font-medium">
              Live vaccines and temperature-sensitive liquids are packed in insulated styrofoam coolers with frozen gel packs for inter-regional transit.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[#166534] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#14532D] transition-colors shadow-sm shrink-0"
          >
            <span>Order with Delivery</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
