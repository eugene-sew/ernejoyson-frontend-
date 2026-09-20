import React, { useState } from 'react'
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
  Phone,
  CheckCircle2,
} from 'lucide-react'
import { GhanaMap, type BranchPin } from '@/components/common/GhanaMap'

// ─── Staff Photo Imports ──────────────────────────────────────────────────────
import photoWitty from '@/assets/staff/Mrs. Witty Biamah Ohemeng.jpeg'
import photoJennifer from '@/assets/staff/Jennifer.jpeg'
import photoMohammed from '@/assets/staff/Mohammed.jpeg'
import photoYakubu from '@/assets/staff/Yakubu.jpeg'
import photoFrancis from '@/assets/staff/Francis.jpeg'

export interface BranchData {
  id: string
  name: string
  shortName: string
  badge: string
  isHq: boolean
  manager: {
    name: string
    role: string
    photo: string
  }
  technicalLead?: string
  address: string
  landmark: string
  phone: string
  altPhone?: string
  email: string
  hours: string
  keySupplies: string[]
  shortDesc: string
  lng: number
  lat: number
}

export const LocationsPage: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<string>('kasoa-hq')

  const branches: BranchData[] = [
    {
      id: 'kasoa-hq',
      name: 'Kasoa Branch (Head Office & Central Warehouse)',
      shortName: 'Kasoa',
      badge: 'Headquarters & Central Depot',
      isHq: true,
      manager: {
        name: 'Mrs. Witty Biamah Ohemeng',
        role: 'Sales Manager, Kasoa Branch',
        photo: photoWitty,
      },
      technicalLead: 'Abinga Christopher Kwadwo (Technical Sales)',
      address: 'Kasoa, Central Region / Greater Accra Border, Ghana',
      landmark: 'Main Commercial Import & Distribution Depot',
      phone: '059 670 9226',
      altPhone: '024 160 4926',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 7:30 AM – 6:00 PM',
      keySupplies: [
        'Full stock of veterinary drugs & vaccines',
        'Automatic bell & nipple drinking lines',
        'Commercial incubators & feed processing mills',
        'Bulk nationwide waybill loading dock',
      ],
      shortDesc:
        'Our corporate headquarters and primary bonded warehouse receiving all direct overseas shipments.',
      lng: -0.4200,
      lat: 5.5345,
    },
    {
      id: 'kumasi',
      name: 'Kumasi Branch (Middle & Northern Belt Hub)',
      shortName: 'Kumasi',
      badge: 'Ashanti & Northern Hub',
      isHq: false,
      manager: {
        name: 'Ms. Jennifer Asante',
        role: 'Sales Manager, Kumasi',
        photo: photoJennifer,
      },
      address: 'Kumasi, Ashanti Region, Ghana',
      landmark: 'Central Commercial Area & Northern Transit Gateway',
      phone: '024 160 4926',
      altPhone: '059 670 9226',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:30 PM',
      keySupplies: [
        'Poultry feeders, drinkers & layer cages',
        'Vitamins, dewormers & therapeutic antibiotics',
        'Daily express waybill to Tamale, Bolga & Wa',
        'Wholesale master-carton dealership supply',
      ],
      shortDesc:
        'Serving Ghana’s primary egg and poultry cluster in Ashanti and transit hub for northern regions.',
      lng: -1.6244,
      lat: 6.6885,
    },
    {
      id: 'swedru',
      name: 'Agona Swedru Branch',
      shortName: 'Swedru',
      badge: 'Central Region Hub',
      isHq: false,
      manager: {
        name: 'Zakaria Mohammed',
        role: 'Veterinary Sales Executive, Swedru',
        photo: photoMohammed,
      },
      address: 'Agona Swedru, Central Region, Ghana',
      landmark: 'Central Commercial Market Area',
      phone: '059 670 9226',
      altPhone: '024 160 4926',
      email: 'sales@ernejoyson.com',
      hours: 'Mon – Sat: 8:00 AM – 5:00 PM',
      keySupplies: [
        'Central Region poultry & piggery medications',
        'Chick drinkers, tube feeders & transport crates',
        'Direct walk-in counter for local farmers',
        'Emergency flock healthcare guidance',
      ],
      shortDesc:
        'Providing direct access to genuine animal health supplies and durable equipment for Central Region farms.',
      lng: -0.6998,
      lat: 5.5342,
    },
    {
      id: 'nsawam',
      name: 'Nsawam Branch',
      shortName: 'Nsawam',
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
      hours: 'Mon – Sat: 8:00 AM – 5:00 PM',
      keySupplies: [
        'Eastern Region poultry cluster farm supplies',
        'Day-old chick care & brooding equipment',
        'Disinfectants & biosecurity farm sanitizers',
        'Rapid vehicle drive-in pickup along highway',
      ],
      shortDesc:
        'Convenient restock point for commercial poultry operations along the Accra–Eastern transit corridor.',
      lng: -0.3503,
      lat: 5.8089,
    },
  ]

  const branchPins: BranchPin[] = branches.map((b) => ({
    id: b.id,
    name: b.name,
    shortName: b.shortName,
    role: b.badge,
    manager: b.manager.name,
    managerPhoto: b.manager.photo,
    managerRole: b.manager.role,
    phone: b.phone,
    lng: b.lng,
    lat: b.lat,
    isHq: b.isHq,
    address: b.address,
  }))

  const selectedBranch =
    branches.find((b) => b.id === selectedBranchId) || branches[0]

  const nationwideDestinations = [
    { region: 'Greater Accra', hubs: 'Accra Central, Tema, Amasaman, Dodowa' },
    { region: 'Ashanti Region', hubs: 'Kumasi, Obuasi, Ejura, Mampong' },
    { region: 'Central Region', hubs: 'Kasoa, Swedru, Cape Coast, Winneba' },
    { region: 'Eastern Region', hubs: 'Nsawam, Koforidua, Asamankese, Nkawkaw' },
    { region: 'Bono & Bono East', hubs: 'Sunyani, Techiman, Dormaa Ahenkro' },
    { region: 'Ahafo Region', hubs: 'Goaso, Mim, Kenyasi' },
    { region: 'Western & Western North', hubs: 'Takoradi, Tarkwa, Sefwi Wiawso' },
    { region: 'Volta & Oti', hubs: 'Ho, Hohoe, Aflao, Dambai' },
    { region: 'Northern, Upper East & West', hubs: 'Tamale, Bolgatanga, Wa, Bawku' },
  ]

  const scrollToBranch = (id: string) => {
    setSelectedBranchId(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div className="pt-20 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      
      {/* ─── 1. Clean, Modern Header (No Green Hero) ─── */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#14532D]/60 uppercase tracking-wider">
          <Link to="/" className="hover:text-[#166534]">Home</Link>
          <span>/</span>
          <span className="text-[#166534]">Branches &amp; Locations</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE6DC]">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#166534]/10 px-3.5 py-1 text-xs font-bold text-[#166534]">
              <Building2 className="h-3.5 w-3.5" />
              <span>4 PHYSICAL BRANCHES • NATIONWIDE FREIGHT</span>
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14532D] tracking-tight leading-[1.1]">
              Find Your Nearest Branch in Ghana
            </h1>
            <p className="text-sm sm:text-base text-[#14532D]/75 font-medium max-w-2xl">
              Talk directly with our branch sales managers, visit our walk-in depots, or arrange same-day waybill delivery to your local station.
            </p>
          </div>

          {/* Quick Direct Hotline */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:0596709226"
              className="inline-flex items-center gap-2 rounded-full bg-[#166534] text-white px-5 py-3 text-sm font-black hover:bg-[#14532D] transition-colors shadow-sm cursor-pointer"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Hotline: 059 670 9226</span>
            </a>
          </div>
        </div>

        {/* Quick Filter Branch Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <span className="text-xs font-bold text-[#14532D]/60 uppercase tracking-wider mr-1 shrink-0">
            Select Hub:
          </span>
          {branches.map((b) => {
            const isSelected = selectedBranchId === b.id
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => scrollToBranch(b.id)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#14532D] text-white shadow-sm'
                    : 'bg-white border border-[#EAE6DC] text-[#14532D] hover:bg-[#FAF9F5]'
                }`}
              >
                {b.shortName} {b.isHq ? '(HQ Depot)' : ''}
              </button>
            )
          })}
        </div>
      </div>

      {/* ─── 2. Interactive Ghana Map & Spotlight Split View ─── */}
      <div id="map-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map Component (mapcn) */}
        <div className="lg:col-span-6 xl:col-span-5">
          <GhanaMap
            branches={branchPins}
            activeBranchId={selectedBranchId}
            onSelectBranch={(id) => setSelectedBranchId(id)}
          />
        </div>

        {/* Right Column: Selected Branch Spotlight Card */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between gap-3 border-b border-[#EAE6DC] pb-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {selectedBranch.badge}
                </span>
                <h3 className="font-display text-2xl font-black text-[#14532D]">
                  {selectedBranch.name}
                </h3>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
            </div>

            {/* Representative Spotlight Box */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#FAF9F5] p-4 sm:p-5 rounded-2xl border border-[#EAE6DC]">
              <img
                src={selectedBranch.manager.photo}
                alt={selectedBranch.manager.name}
                className="h-20 w-20 rounded-2xl object-cover border-2 border-white shadow-sm shrink-0"
              />
              <div className="space-y-1 flex-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534] block">
                  Branch Representative to Contact:
                </span>
                <h4 className="text-base sm:text-lg font-black text-[#14532D]">
                  {selectedBranch.manager.name}
                </h4>
                <p className="text-xs text-neutral-600 font-medium">
                  {selectedBranch.manager.role}
                </p>
                {selectedBranch.technicalLead && (
                  <p className="text-[11px] text-[#166534] font-semibold">
                    Technical Support: {selectedBranch.technicalLead}
                  </p>
                )}
              </div>

              {/* Big Direct Call Button */}
              <a
                href={`tel:${selectedBranch.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#166534] text-white px-5 py-3 text-xs sm:text-sm font-black hover:bg-[#14532D] shadow-sm transition-transform active:scale-95 shrink-0 cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                <span>Call {selectedBranch.manager.name.split(' ')[0]}</span>
              </a>
            </div>

            {/* Location Address & Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EAE6DC] space-y-1">
                <span className="font-bold text-[#14532D] block">Address &amp; Landmark:</span>
                <p className="text-neutral-700">{selectedBranch.address}</p>
                <p className="text-[11px] text-[#166534] font-medium">{selectedBranch.landmark}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#EAE6DC] space-y-1">
                <span className="font-bold text-[#14532D] block">Working Hours:</span>
                <p className="text-neutral-700 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-[#166534]" />
                  <span>{selectedBranch.hours}</span>
                </p>
                <p className="text-[11px] text-neutral-500">Walk-ins &amp; trucks welcome</p>
              </div>
            </div>

            {/* Key Supplies in Stock */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#14532D] block">
                Readily Available At This Hub:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedBranch.keySupplies.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#EAE6DC] text-neutral-800"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#166534] shrink-0" />
                    <span className="font-medium text-[11px] sm:text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${selectedBranch.phone.replace(/\s+/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#166534] text-white py-3 px-5 text-xs sm:text-sm font-black hover:bg-[#14532D] shadow-sm transition-colors cursor-pointer"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call Branch ({selectedBranch.phone})</span>
              </a>

              {selectedBranch.altPhone && (
                <a
                  href={`tel:${selectedBranch.altPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#166534] text-[#166534] py-3 px-4 text-xs font-bold hover:bg-[#166534]/10 transition-colors cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Alt: {selectedBranch.altPhone}</span>
                </a>
              )}

              <a
                href={`mailto:${selectedBranch.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAF9F5] border border-[#EAE6DC] text-[#14532D] py-3 px-4 text-xs font-bold hover:bg-[#F4F1EA] transition-colors cursor-pointer"
                title="Email branch"
              >
                <Mail className="h-4 w-4 text-[#166534]" />
                <span className="hidden sm:inline">Email Branch</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── 3. Clean Visual Cards for All 4 Branches (Farmer-Friendly) ─── */}
      <div className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
              Direct Contact Directory
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
              All 4 Branch Operating Desks
            </h2>
            <p className="text-xs sm:text-sm text-[#14532D]/70 font-medium">
              Tap any manager's phone button to dial them directly on your phone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branches.map((b) => (
            <div
              key={b.id}
              id={b.id}
              className={`rounded-3xl p-6 sm:p-7 border bg-white flex flex-col justify-between space-y-5 transition-all ${
                selectedBranchId === b.id
                  ? 'border-[#166534] ring-2 ring-[#166534]/20 shadow-md'
                  : 'border-[#EAE6DC] hover:border-[#166534]/30 shadow-xs'
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {b.badge}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                      {b.name}
                    </h3>
                  </div>
                  <div className="h-9 w-9 rounded-xl bg-[#FAF9F5] text-[#166534] border border-[#EAE6DC] flex items-center justify-center shrink-0">
                    <MapPin className="h-4.5 w-4.5" />
                  </div>
                </div>

                {/* Staff Contact Card */}
                <div className="flex items-center gap-3.5 bg-[#FAF9F5] p-3.5 rounded-2xl border border-[#EAE6DC]">
                  <img
                    src={b.manager.photo}
                    alt={b.manager.name}
                    className="h-14 w-14 rounded-xl object-cover border border-black/10 shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534]">
                      Branch Manager:
                    </span>
                    <h4 className="text-sm font-black text-[#14532D] leading-tight">
                      {b.manager.name}
                    </h4>
                    <p className="text-[11px] text-neutral-600 font-medium">
                      {b.manager.role}
                    </p>
                  </div>
                </div>

                {/* Landmark & Hours */}
                <div className="space-y-1.5 text-xs text-neutral-700 bg-white p-3 rounded-xl border border-[#EAE6DC]">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#166534] shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> {b.address} ({b.landmark})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[#166534] shrink-0" />
                    <span><strong>Hours:</strong> {b.hours}</span>
                  </div>
                </div>

                {/* Visual Chips for Products Available */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-[#14532D]/70 uppercase tracking-wider">
                    In Stock:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {b.keySupplies.map((item, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#FAF9F5] border border-[#EAE6DC] text-neutral-800 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="h-3 w-3 text-[#166534]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${b.phone.replace(/\s+/g, '')}`}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white py-3 px-4 text-xs sm:text-sm font-black transition-all shadow-xs active:scale-[0.99] cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Call {b.shortName}: {b.phone}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedBranchId(b.id)
                    const mapEl = document.getElementById('map-section')
                    if (mapEl) {
                      mapEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-full text-xs font-bold text-[#166534] bg-[#FAF9F5] hover:bg-[#F4F1EA] border border-[#EAE6DC] transition-colors cursor-pointer"
                  title="Locate on Map"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">On Map</span>
                </button>

                <a
                  href={`mailto:${b.email}`}
                  className="h-11 w-11 flex items-center justify-center rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] transition-colors shrink-0 cursor-pointer"
                  title="Send email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── 4. Nationwide Delivery & Fleet Supervisor Section ─── */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EAE6DC]">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-3 py-1 rounded-full">
              <Truck className="h-3.5 w-3.5" />
              <span>NATIONWIDE WAYBILL FREIGHT</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
              Outside Our 4 Cities? We Deliver Directly to You.
            </h2>
            <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
              We arrange daily waybill dispatch via trusted regional freight stations (VIP, GPRTU, OA, 2M Express) to all 16 regions in Ghana. Waybill tracking numbers are sent directly to your phone.
            </p>
          </div>

          {/* Francis Otoo - Fleet Supervisor Card */}
          <div className="flex items-center gap-3.5 rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] shrink-0">
            <img
              src={photoFrancis}
              alt="Francis Otoo – Chief Driver & Fleet Supervisor"
              className="h-16 w-16 rounded-2xl object-cover border border-black/10 shrink-0"
            />
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534] block">
                Fleet &amp; Dispatch Supervisor
              </span>
              <h4 className="text-sm font-black text-[#14532D]">Francis Otoo</h4>
              <p className="text-xs text-neutral-600 font-medium">Chief Driver &amp; Logistics Lead</p>
              <a
                href="tel:0596709226"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#166534] hover:underline mt-1"
              >
                <PhoneCall className="h-3 w-3" />
                <span>059 670 9226 / 024 160 4926</span>
              </a>
            </div>
          </div>
        </div>

        {/* 16 Regions Delivery Corridors Grid */}
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#14532D] block">
            Sample Delivery Corridors Across Ghana:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {nationwideDestinations.map((dest, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] space-y-1 hover:border-[#166534]/30 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-[#166534]">
                  <Truck className="h-3.5 w-3.5" />
                  <h4 className="font-display font-bold text-xs text-[#14532D]">{dest.region}</h4>
                </div>
                <p className="text-[11px] text-neutral-600 font-medium">{dest.hubs}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cold Chain Notice & Shop Button */}
        <div className="rounded-2xl bg-[#DCFCE7]/40 border border-[#DCFCE7] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="font-display text-sm font-black text-[#14532D] flex items-center gap-1.5 justify-center sm:justify-start">
              <ShieldCheck className="h-4 w-4 text-[#166534]" />
              <span>Sensitive Animal Vaccines Shipped in Temperature Coolers</span>
            </h4>
            <p className="text-xs text-[#14532D]/75 font-medium">
              Packed with frozen gel blocks so medication potency remains guaranteed upon arrival at your station.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[#166534] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#14532D] transition-colors shadow-sm shrink-0"
          >
            <span>Browse Products to Order</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

    </div>
  )
}
