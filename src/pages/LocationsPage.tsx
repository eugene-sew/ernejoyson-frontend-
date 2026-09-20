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
  UserCheck,
  PackageCheck,
} from 'lucide-react'

// ─── Staff Photo Imports ──────────────────────────────────────────────────────
import photoWitty from '@/assets/staff/Mrs. Witty Biamah Ohemeng.jpeg'
import photoJennifer from '@/assets/staff/Jennifer.jpeg'
import photoMohammed from '@/assets/staff/Mohammed.jpeg'
import photoYakubu from '@/assets/staff/Yakubu.jpeg'
import photoFrancis from '@/assets/staff/Francis.jpeg'

export const LocationsPage: React.FC = () => {
  const branches = [
    {
      id: 'kasoa-hq',
      name: 'Kasoa (Head Office & Central Warehouse)',
      badge: 'Head Office & Central Depot',
      isHq: true,
      manager: {
        name: 'Mrs. Witty Biamah Ohemeng',
        role: 'Sales Manager, Kasoa Branch',
        photo: photoWitty,
      },
      technicalLead: 'Abinga Christopher Kwadwo (Technical Sales Executive)',
      address: 'Kasoa, Central Region / Greater Accra Border, Ghana',
      landmark: 'Main Commercial Import & Distribution Depot',
      phone: '059 670 9226',
      altPhone: '024 160 4926',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 7:30 AM – 6:00 PM (Closed Sundays)',
      keyFeatures: [
        'Central import warehouse clearance for direct shipments from Asia & Europe',
        'Complete inventory of poultry equipment, incubators & feed processing machinery',
        'Full stock of veterinary pharmaceuticals, vaccines, antibiotics & vitamins',
        'Central logistics loading dock & nationwide waybill dispatch hub',
      ],
      description:
        'Our corporate headquarters and primary bonded distribution depot. All international consignments arrive here before scheduled regional allocation across our branch network.',
    },
    {
      id: 'kumasi',
      name: 'Kumasi Branch (Middle & Northern Belt Hub)',
      badge: 'Ashanti & Northern Corridor Hub',
      isHq: false,
      manager: {
        name: 'Ms. Jennifer Asante',
        role: 'Sales Manager, Kumasi',
        photo: photoJennifer,
      },
      address: 'Kumasi, Ashanti Region, Ghana',
      landmark: 'Central Commercial Hub for Ashanti & Transit Station to Northern Regions',
      phone: '024 160 4926',
      altPhone: '059 670 9226',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:30 PM (Closed Sundays)',
      keyFeatures: [
        'Primary supplier for Ghana’s commercial poultry and egg clusters in Ashanti',
        'Daily express waybill freight to Bono, Ahafo, Tamale, Bolgatanga, and Wa',
        'Wholesale master-carton distribution point for regional agro-dealers',
        'Full inventory of automated bell drinkers, linear feeders, and poultry drugs',
      ],
      description:
        'Strategically serving the heavy poultry belt of Ashanti and acting as our northern gateway for fast, reliable farm supplies into northern Ghana.',
    },
    {
      id: 'swedru',
      name: 'Agona Swedru Branch',
      badge: 'Central Regional Hub',
      isHq: false,
      manager: {
        name: 'Zakaria Mohammed',
        role: 'Veterinary Sales Executive, Swedru',
        photo: photoMohammed,
      },
      address: 'Agona Swedru, Central Region, Ghana',
      landmark: 'Central Commercial Market Corridor',
      phone: '059 670 9226',
      altPhone: '024 160 4926',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:00 PM (Closed Sundays)',
      keyFeatures: [
        'Dedicated counter for Central Region poultry, piggery & livestock farmers',
        'Walk-in retail and wholesale bulk supply for local agro-dealers',
        'Rapid restocking for farms in Winneba, Breman Asikuma, and surrounding districts',
        'Ready stock of dewormers, therapeutic antibiotics, and vitamin supplements',
      ],
      description:
        'Bringing quality and affordable veterinary medicines and durable poultry equipment directly into one of Ghana’s most active mixed-farming farming corridors.',
    },
    {
      id: 'nsawam',
      name: 'Nsawam Branch',
      badge: 'Eastern Region Hub',
      isHq: false,
      manager: {
        name: 'Yakubu Abdul-Hanan',
        role: 'Veterinary Sales Executive, Nsawam',
        photo: photoYakubu,
      },
      address: 'Nsawam, Eastern Region, Ghana',
      landmark: 'Accra-Nsawam-Kumasi Highway Commercial Corridor',
      phone: '024 160 4926',
      altPhone: '059 670 9226',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:00 PM (Closed Sundays)',
      keyFeatures: [
        'Serving dense poultry clusters across the Eastern Region and peri-urban Accra',
        'Brooding equipment, drinkers, feeders, and day-old care products',
        'Disinfectants, biosecurity sanitizers, and performance boosters in steady supply',
        'Convenient vehicle drive-in pickup point along the national transit corridor',
      ],
      description:
        'Positioned along Ghana’s key agricultural highway corridor to guarantee poultry and livestock enterprises swift access to essential health products and equipment.',
    },
  ]

  const nationwideDestinations = [
    { region: 'Greater Accra', hubs: 'Accra Central, Tema, Amasaman, Dodowa, Ada' },
    { region: 'Ashanti Region', hubs: 'Kumasi, Obuasi, Ejura, Mampong, Offinso' },
    { region: 'Central Region', hubs: 'Kasoa, Swedru, Cape Coast, Winneba, Mankessim' },
    { region: 'Eastern Region', hubs: 'Nsawam, Koforidua, Asamankese, Nkawkaw, Suhum' },
    { region: 'Bono & Bono East', hubs: 'Sunyani, Techiman, Dormaa Ahenkro, Berekum' },
    { region: 'Ahafo Region', hubs: 'Goaso, Mim, Kenyasi, Bechem' },
    { region: 'Western & Western North', hubs: 'Takoradi, Tarkwa, Sefwi Wiawso, Enchi' },
    { region: 'Volta & Oti', hubs: 'Ho, Hohoe, Aflao, Dambai, Nkwanta' },
    { region: 'Northern & North East', hubs: 'Tamale, Yendi, Nalerigu, Walewale' },
    { region: 'Upper East & Upper West', hubs: 'Bolgatanga, Bawku, Navrongo, Wa, Lawra' },
    { region: 'Savannah Region', hubs: 'Damongo, Bole, Salaga' },
  ]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[#DCFCE7] border border-white/15">
            <Building2 className="h-3.5 w-3.5" />
            <span>ESTABLISHED BRANCH NETWORK • GHANA</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Our Branches &amp; Nationwide Distribution Network
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            Ernejoyson Company Limited operates through established branches in Kasoa (Head Office), Kumasi, Swedru, and Nsawam, combined with structured nationwide daily distribution to bring quality poultry equipment and veterinary pharmaceuticals closer to farmers across Ghana.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <Building2 className="h-4 w-4 text-[#22C55E]" />
              <span>4 Operating Locations (Kasoa, Kumasi, Swedru, Nsawam)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <Truck className="h-4 w-4 text-[#22C55E]" />
              <span>Daily Waybill Dispatch to All 16 Regions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <PhoneCall className="h-4 w-4 text-[#22C55E]" />
              <span>Official Inquiries: 059 670 9226 / 024 160 4926</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Branch Cards Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
              Physical Branch Network
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
              Visit or Contact Our Strategic Centers
            </h2>
            <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
              Each branch is staffed with dedicated sales and veterinary professionals ready to assist with product selection, dosing guidance, and equipment orders.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-[#14532D] bg-[#FAF9F5] px-4 py-2 rounded-full border border-[#EAE6DC]">
            <Clock className="h-4 w-4 text-[#166534]" />
            <span>Mon – Sat Operating Hours</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <div
              key={b.id}
              className={`rounded-3xl p-6 sm:p-8 border flex flex-col justify-between space-y-6 transition-all ${
                b.isHq
                  ? 'bg-white border-[#166534]/40 ring-2 ring-[#166534]/15 shadow-md'
                  : 'bg-white border-[#EAE6DC] hover:border-[#166534]/30 hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                {/* Badge & Title */}
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

                {/* Branch Leadership Card */}
                <div className="flex items-center gap-3 rounded-2xl bg-[#FAF9F5] p-3.5 border border-[#EAE6DC]">
                  <img
                    src={b.manager.photo}
                    alt={b.manager.name}
                    className="h-12 w-12 rounded-xl object-cover border border-black/10 shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534] flex items-center gap-1">
                      <UserCheck className="h-3 w-3" />
                      Branch Representative
                    </span>
                    <h4 className="text-xs sm:text-sm font-black text-[#14532D]">
                      {b.manager.name}
                    </h4>
                    <p className="text-[11px] text-neutral-600 font-medium">
                      {b.manager.role}
                    </p>
                  </div>
                </div>

                {/* Contact & Location Details */}
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

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[#14532D]">
                    <div className="flex items-center gap-1.5">
                      <PhoneCall className="h-4 w-4 text-[#166534] shrink-0" />
                      <a
                        href={`tel:${b.phone.replace(/\s+/g, '')}`}
                        className="font-mono font-bold hover:text-[#166534] hover:underline"
                      >
                        {b.phone}
                      </a>
                    </div>
                    {b.altPhone && (
                      <div className="flex items-center gap-1.5 text-neutral-500">
                        <span>/</span>
                        <a
                          href={`tel:${b.altPhone.replace(/\s+/g, '')}`}
                          className="font-mono font-bold text-[#14532D] hover:text-[#166534] hover:underline"
                        >
                          {b.altPhone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Key Branch Capabilities */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#14532D]/70 block">
                    Branch Scope &amp; Supplies:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#14532D]/85">
                    {b.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-[#166534] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${b.phone.replace(/\s+/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white py-2.5 px-4 text-xs font-bold transition-all shadow-xs"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Call {b.name.split(' ')[0]} Desk ({b.phone})</span>
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

      {/* 3. Central Fleet Logistics & Inter-Regional Waybill Service */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EAE6DC]">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-3 py-1 rounded-full">
              <Truck className="h-3.5 w-3.5" />
              <span>NATIONWIDE WAYBILL DISTRIBUTION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
              Daily Dispatch to Farmers in All 16 Regions of Ghana
            </h2>
            <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
              If your farm is outside our four branch cities, Ernejoyson arranges fast, safe dispatch via registered regional freight parcel stations (GPRTU, VIP, OA, 2M Express, and certified commercial transport hubs). Orders are packaged securely with tracking numbers shared directly to your phone.
            </p>
          </div>

          {/* Fleet Supervisor Card */}
          <div className="flex items-center gap-3.5 rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] shrink-0 min-w-[280px]">
            <img
              src={photoFrancis}
              alt="Francis Otoo – Chief Driver & Fleet Supervisor"
              className="h-14 w-14 rounded-2xl object-cover border border-black/10 shrink-0"
            />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534] block">
                Fleet &amp; Dispatch Supervisor
              </span>
              <h4 className="text-sm font-black text-[#14532D]">Francis Otoo</h4>
              <p className="text-xs text-neutral-600 font-medium">Chief Driver &amp; Fleet Logistics</p>
              <span className="text-[11px] font-bold text-[#166534] mt-0.5 inline-block">
                059 670 9226 / 024 160 4926
              </span>
            </div>
          </div>
        </div>

        {/* 16 Regions Coverage Hubs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#14532D]">
              Key Regional Delivery Corridors &amp; Waybill Stations
            </h3>
            <span className="text-[11px] font-medium text-neutral-500">Same-day dispatch on early orders</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
            {nationwideDestinations.map((dest, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] space-y-1.5 hover:border-[#166534]/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[#166534]">
                  <PackageCheck className="h-3.5 w-3.5" />
                  <h4 className="font-display text-xs font-bold text-[#14532D]">
                    {dest.region}
                  </h4>
                </div>
                <p className="text-[11px] text-[#14532D]/70 font-medium leading-relaxed">
                  {dest.hubs}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sensitive Biologicals & Cold-Chain Notice */}
        <div className="rounded-2xl bg-[#DCFCE7]/40 border border-[#DCFCE7] p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-sm font-black text-[#14532D] flex items-center gap-2 justify-center sm:justify-start">
              <ShieldCheck className="h-4 w-4 text-[#166534]" />
              <span>Certified Cold-Chain Handling for Biologicals &amp; Vaccines</span>
            </h4>
            <p className="text-xs text-[#14532D]/80 font-medium">
              Temperature-sensitive animal vaccines and pharmaceutical liquids are packaged in insulated coolers with temperature packs to preserve potency during transit.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:0596709226"
              className="inline-flex items-center gap-2 rounded-full border border-[#166534] text-[#166534] px-4 py-2.5 text-xs font-bold hover:bg-[#166534]/10 transition-colors"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Waybill Inquiries</span>
            </a>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#166534] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#14532D] transition-colors shadow-sm"
            >
              <span>Order for Delivery</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
