import React from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Building2,
  Award,
  Truck,
  HeartPulse,
  ArrowRight,
  MapPin,
} from 'lucide-react'

export const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: '100% Genuine Potency',
      description:
        'We import directly from certified overseas veterinary manufacturers. No diluted batches, no expired relabeling, and no compromise on drug efficacy.',
      icon: ShieldCheck,
    },
    {
      title: 'Practical Technical Support',
      description:
        'Selling a bottle of medicine is only half the job. Our veterinary technicians guide farmers on exact water dilution, pen biosecurity, and flock vaccination timing.',
      icon: HeartPulse,
    },
    {
      title: 'Reliable Equipment Durability',
      description:
        'Our feeders, automatic bell drinkers, and transport crates are built from virgin, UV-resistant plastics and galvanized alloys made to survive aggressive farm conditions.',
      icon: Award,
    },
    {
      title: 'Nationwide Accessibility',
      description:
        'From our Kasoa central warehouse and regional branches in Kumasi, Swedru, and Nsawam, we deliver directly to farm gates in every region of Ghana.',
      icon: Truck,
    },
  ]

  const milestones = [
    {
      year: 'Direct Importation',
      title: 'Establishing Certified Overseas Supply Lines',
      text: 'Began importing direct pharmaceutical and equipment lines to provide Ghanaian farmers with honest pricing and laboratory-verified active ingredients.',
    },
    {
      year: 'Hub Expansion',
      title: 'Four Dedicated Strategic Depots',
      text: 'Expanded physical operations to Kasoa (Central HQ), Kumasi (Middle & Northern Gateway), Agona Swedru, and Nsawam to eliminate stockouts for farmers.',
    },
    {
      year: 'Cold-Chain & Biologicals',
      title: 'Temperature-Controlled Storage Infrastructure',
      text: 'Invested in cold-chain vaccine storage at all branches to guarantee 100% live-virus viability for Newcastle and Gumboro vaccines.',
    },
    {
      year: 'Farmer First',
      title: 'Technical Advisory & Nationwide Waybills',
      text: 'Supporting over 2,500+ commercial poultry farms, rural livestock keepers, and agro-vet retailers across all 16 regions of Ghana daily.',
    },
  ]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#DCFCE7] border border-white/10">
            <Building2 className="h-3.5 w-3.5 text-[#22C55E]" />
            <span>About ERNEJOYSON Limited</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            A Trusted Partner in Better Animal Health & Farm Equipment in Ghana
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            ERNEJOYSON is a Ghanaian-owned veterinary pharmaceutical and poultry/livestock equipment importation and distribution company. We combine direct manufacturer sourcing with dedicated technical farmer support to make commercial farming more productive and profitable.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#22C55E]" />
              <span>Headquartered in Kasoa • Kumasi • Swedru • Nsawam</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              <span>Certified Veterinary Lines</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Core Mission & Philosophy */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Our Foundation
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Why ERNEJOYSON Was Built
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
            Livestock and poultry farming in Ghana is demanding. When a disease outbreak hits or day-old chick mortality begins climbing, farmers cannot afford counterfeit drugs, incorrect dosage advice, or fragile equipment that breaks within months.
          </p>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
            ERNEJOYSON was established to solve this reality. By importing directly from certified global manufacturers and maintaining our own distribution depots in Kasoa, Kumasi, Swedru, and Nsawam, we guarantee genuine potency, consistent availability, and real GHC market prices.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#166534] text-white px-6 py-3 text-xs sm:text-sm font-black hover:bg-[#14532D] transition-colors shadow-sm"
            >
              <span>Explore Our 100+ Catalog Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl bg-[#FAF9F5] p-6 border border-[#EAE6DC] space-y-4">
          <h3 className="font-display text-lg font-black text-[#14532D]">
            The 3 Pillars of ERNEJOYSON
          </h3>
          <div className="space-y-3">
            <div className="rounded-xl bg-white p-3.5 border border-[#EAE6DC] space-y-1">
              <span className="text-xs font-extrabold text-[#166534] uppercase tracking-wide">
                1. Veterinary Pharmaceuticals
              </span>
              <p className="text-xs text-[#14532D]/75 font-medium">
                Antibiotics, vitamins, coccidiostats, dewormers, and vaccines with certified chemical purity.
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 border border-[#EAE6DC] space-y-1">
              <span className="text-xs font-extrabold text-[#166534] uppercase tracking-wide">
                2. Livestock & Poultry Equipment
              </span>
              <p className="text-xs text-[#14532D]/75 font-medium">
                Durable feeders, automatic drinkers, debeaking machines, gas brooders, and transport crates.
              </p>
            </div>

            <div className="rounded-xl bg-white p-3.5 border border-[#EAE6DC] space-y-1">
              <span className="text-xs font-extrabold text-[#166534] uppercase tracking-wide">
                3. Technical Farmer Support
              </span>
              <p className="text-xs text-[#14532D]/75 font-medium">
                Free vaccination calendars, disease diagnosis consultation, and accurate water tank dilution calculators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Core Values Grid */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Our Principles
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-xs space-y-4 hover:border-[#166534]/30 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="font-display text-lg font-black text-[#14532D]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Journey & Milestones */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Our Evolution
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Built by Farmers, for Farmers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#FAF9F5] p-5 border border-[#EAE6DC] space-y-2 relative"
            >
              <span className="text-xs font-mono font-black text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full inline-block">
                {m.year}
              </span>
              <h4 className="font-display text-base font-bold text-[#14532D]">
                {m.title}
              </h4>
              <p className="text-xs text-[#14532D]/75 font-medium leading-relaxed">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Direct Connect Banner */}
      <div className="rounded-3xl bg-[#166534] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <h3 className="font-display text-2xl sm:text-3xl font-black">
            Visit Our Warehouses or Chat With Our Team
          </h3>
          <p className="text-xs sm:text-sm text-[#DCFCE7]/90 font-medium">
            Walk into any of our 4 locations in Kasoa, Kumasi, Swedru, or Nsawam, or connect with our sales team for fast farm delivery across Ghana.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
          <Link
            to="/locations"
            className="rounded-full bg-white text-[#166534] px-6 py-3 text-xs sm:text-sm font-black hover:bg-[#DCFCE7] transition-colors shadow-sm"
          >
            <span>View All 4 Branches</span>
          </Link>
          <Link
            to="/technical-support"
            className="rounded-full bg-[#14532D] text-white px-6 py-3 text-xs sm:text-sm font-bold hover:bg-[#0A2614] border border-white/20 transition-colors"
          >
            <span>Get Vaccination Chart</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
