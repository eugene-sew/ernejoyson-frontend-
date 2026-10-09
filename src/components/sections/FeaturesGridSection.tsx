import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Droplets,
  HeartPulse,
  Truck,
  Cpu,
  PhoneCall,
  Calendar,
  BadgeCheck,
  Zap,
  Package,
} from 'lucide-react'
import {
  veterinaryProductsImg,
  poultryEquipmentImg,
  poultryCratesImg,
  poultryPluckerImg,
} from '@/assets'

export function FeaturesGridSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'pharma' | 'equipment' | 'nutrition' | 'processing'>('all')

  const filterTabs = [
    { id: 'all', label: 'All Solutions (107+)' },
    { id: 'pharma', label: 'Veterinary Pharma', categorySlug: 'antibiotics' },
    { id: 'equipment', label: 'Feeders & Drinkers', categorySlug: 'feeders' },
    { id: 'nutrition', label: 'Vitamins & Boosters', categorySlug: 'vitamins' },
    { id: 'processing', label: 'Machinery & Crates', categorySlug: 'equipment' },
  ] as const

  return (
    <section id="categories" className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1440px] mx-auto w-full space-y-12">
      {/* ─── 1. Header with Eyebrow, Gradient Headline, Tabs & Action ─── */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#EAE6DC] pb-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#166534]/10 border border-[#166534]/20 text-[#166534] text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Curated Agricultural Inventory • Ghana Distribution</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#14532D] leading-[1.08]">
            Everything You Need to Support <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#14532D] via-[#166534] to-[#22C55E] bg-clip-text text-transparent">
              Better Livestock Production.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium">
            From certified veterinary therapeutics and cold-chain vaccines to industrial processing machinery and durable housing gear — calibrated specifically for Ghanaian tropical farm environments.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap pt-2">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#166534] text-white shadow-sm scale-105'
                      : 'bg-[#FAF9F5] text-[#14532D]/75 border border-[#EAE6DC] hover:bg-[#F4F1EA] hover:text-[#14532D]'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Top Right Action Button */}
        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] px-7 py-3.5 text-xs sm:text-sm font-black text-white transition-all hover:scale-[1.02] active:scale-95 shadow-md"
          >
            <span>Explore All 107+ Products</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
          <a
            href="#vaccination-chart"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#FAF9F5] border border-[#EAE6DC] px-6 py-3.5 text-xs sm:text-sm font-extrabold text-[#14532D] transition-colors shadow-xs"
          >
            <Calendar className="h-4 w-4 text-[#166534]" />
            <span>Vaccination Schedule</span>
          </a>
        </div>
      </div>

      {/* ─── 2. Asymmetric Bento Grid (Rich Visual Diversity) ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

        {/* ── CARD 1: Flagship Spotlight — Veterinary Pharmaceuticals (Col-span 8) ── */}
        <div
          className={`lg:col-span-8 rounded-[36px] bg-gradient-to-br from-[#0F381E] via-[#14532D] to-[#0A2614] text-white p-7 sm:p-10 relative overflow-hidden shadow-xl border border-[#22C55E]/20 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:border-[#22C55E]/40 ${
            activeTab !== 'all' && activeTab !== 'pharma' ? 'opacity-60 grayscale-[20%]' : ''
          }`}
        >
          {/* Background Ambient Glow & Authentic Image Accent */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#22C55E]/15 rounded-full blur-3xl pointer-events-none" />
          <img
            src={veterinaryProductsImg}
            alt="Veterinary Pharmaceuticals"
            className="absolute right-0 top-0 h-full w-full lg:w-3/5 object-cover object-right opacity-30 lg:opacity-40 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F381E] via-[#0F381E]/90 to-transparent pointer-events-none" />

          {/* Top Row: Pill Badges & Interactive Link Button */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 px-3.5 py-1 text-xs font-black text-[#86efac] tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Core Supply & Medical Distribution
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-bold text-white/90 border border-white/15">
                <BadgeCheck className="w-3.5 h-3.5 text-[#22C55E]" />
                38+ Formulations In Stock
              </span>
            </div>

            <Link
              to="/shop?category=antibiotics"
              aria-label="View Veterinary Pharmaceuticals"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-[#22C55E] group-hover:text-[#0A2614] group-hover:scale-110 group-hover:rotate-45 shrink-0 cursor-pointer"
            >
              <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
            </Link>
          </div>

          {/* Middle Content */}
          <div className="relative z-10 space-y-4 max-w-xl my-8">
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight leading-[1.12]">
              Veterinary Pharmaceuticals & Disease Control
            </h3>
            <p className="text-xs sm:text-sm text-[#DCFCE7]/90 leading-relaxed font-medium">
              Direct-import antibiotics, broad-spectrum therapeutics, coccidiostats, dewormers and injectable vitamins with lab-tested pharmaceutical potency. Calibrated for commercial layers, fast-growing broilers, swine, and ruminants.
            </p>

            {/* Micro Product Showcase Pills (Real inventory items) */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <Link
                to="/shop?category=anti-parasitics"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white transition-all backdrop-blur-sm shadow-sm"
              >
                <span className="text-base">💊</span>
                <span>Ernzuril 2.5% (Toltrazuril)</span>
              </Link>
              <Link
                to="/shop?category=vitamins"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white transition-all backdrop-blur-sm shadow-sm"
              >
                <span className="text-base">⚡</span>
                <span>Joy Amino 100g (Anti-Stress)</span>
              </Link>
              <Link
                to="/shop?category=antibiotics"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white transition-all backdrop-blur-sm shadow-sm"
              >
                <span className="text-base">🔬</span>
                <span>Bolai Enro 20% (CRD Knockout)</span>
              </Link>
              <Link
                to="/shop?category=disinfectants"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 px-3 py-2 text-xs font-bold text-white transition-all backdrop-blur-sm shadow-sm"
              >
                <span className="text-base">🛡️</span>
                <span>Patholyte & Biocide</span>
              </Link>
            </div>
          </div>

          {/* Bottom Trust Row */}
          <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#DCFCE7]/80">
            <div className="flex items-center gap-2 font-bold">
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              <span>Cold-chain tracked & genuine GMP manufacturer sealed</span>
            </div>
            <Link
              to="/shop?category=antibiotics"
              className="inline-flex items-center gap-1.5 font-black text-white hover:text-[#86efac] transition-colors"
            >
              <span>Explore Veterinary Range</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* ── CARD 2: Feeding & Drinking Lines (Col-span 4) ── */}
        <Link
          to="/shop?category=feeders"
          className={`lg:col-span-4 rounded-[36px] bg-[#FAF9F5] border border-[#EAE6DC] p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#166534]/30 relative overflow-hidden ${
            activeTab !== 'all' && activeTab !== 'equipment' ? 'opacity-60 grayscale-[20%]' : ''
          }`}
        >
          {/* Top Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] text-xs font-black uppercase tracking-wider border border-[#86EFAC]">
                <Droplets className="w-3.5 h-3.5 text-[#166534]" />
                Automated Systems
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#EAE6DC] text-[#14532D] shadow-xs transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white group-hover:rotate-45">
                <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D] tracking-tight">
                Feeding & Drinking Systems
              </h3>
              <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1 leading-relaxed">
                Plasson bell drinkers, chick starter trays, and 1.5kg–9kg anti-waste hoppers designed to eliminate water leaks and feed scratch-out.
              </p>
            </div>
          </div>

          {/* Real Equipment Image Display */}
          <div className="my-5 rounded-2xl overflow-hidden border border-[#EAE6DC] shadow-inner relative h-44 bg-white">
            <img
              src={poultryEquipmentImg}
              alt="Poultry Feeding and Drinking Equipment"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                Plasson Bell Drinkers • #8020
              </span>
              <span className="text-[#86efac]">In Stock</span>
            </div>
          </div>

          {/* Efficiency Metric Pill */}
          <div className="pt-2 border-t border-[#EAE6DC] flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#166534]">
              <Zap className="h-3.5 w-3.5" />
              <span>Cuts water spillage by up to 40%</span>
            </div>
            <span className="font-extrabold text-[#14532D] group-hover:translate-x-1 transition-transform">
              View Feeders →
            </span>
          </div>
        </Link>

        {/* ── CARD 3: Precision Nutrition & Egg Boosters (Col-span 4) ── */}
        <Link
          to="/shop?category=vitamins"
          className={`lg:col-span-4 rounded-[36px] bg-gradient-to-br from-[#166534] to-[#14532D] text-white p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/10 relative overflow-hidden ${
            activeTab !== 'all' && activeTab !== 'nutrition' ? 'opacity-60 grayscale-[20%]' : ''
          }`}
        >
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#22C55E]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/20 text-[#86efac] text-xs font-black uppercase tracking-wider border border-[#22C55E]/30">
                <HeartPulse className="w-3.5 h-3.5 text-[#22C55E]" />
                Flock Nutrition
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 shadow-xs transition-all duration-300 group-hover:bg-[#22C55E] group-hover:text-[#0A2614] group-hover:rotate-45">
                <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                Vitamins, Amino Acids & Boosters
              </h3>
              <p className="text-xs sm:text-sm text-[#DCFCE7]/85 font-medium mt-1 leading-relaxed">
                Broiler rapid-growth complexes, Vitamin C heat stress powders, and Egg Booster formulations designed for prolonged peak lay rate.
              </p>
            </div>
          </div>

          {/* High Value Feature Cards List */}
          <div className="my-6 space-y-2.5 relative z-10">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/15 flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-white">Egg Booster WSP</p>
                <p className="text-[11px] text-[#DCFCE7]/75">Enhances ovarian activity & eggshell strength</p>
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-[#22C55E]/30 text-[#86efac]">
                Lay Peak
              </span>
            </div>

            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-3 border border-white/15 flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-white">Joy Amino Acid Formula</p>
                <p className="text-[11px] text-[#DCFCE7]/75">Post-vaccine anti-stress & rapid chick growth</p>
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-[#22C55E]/30 text-[#86efac]">
                Recovery
              </span>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#DCFCE7] relative z-10">
            <span className="font-bold">Broiler & Layer protocols</span>
            <span className="font-extrabold text-white group-hover:translate-x-1 transition-transform">
              Browse Supplements →
            </span>
          </div>
        </Link>

        {/* ── CARD 4: Processing Machinery & Defeatherers (Col-span 4) ── */}
        <Link
          to="/shop?category=equipment"
          className={`lg:col-span-4 rounded-[36px] bg-[#0A2614] border border-[#22C55E]/20 text-white p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#22C55E]/40 relative overflow-hidden ${
            activeTab !== 'all' && activeTab !== 'processing' ? 'opacity-60 grayscale-[20%]' : ''
          }`}
        >
          {/* Background image accent */}
          <img
            src={poultryPluckerImg}
            alt="Poultry Processing Machinery"
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2614] via-[#0A2614]/85 to-transparent pointer-events-none" />

          {/* Top Header */}
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22C55E]/20 text-[#86efac] text-xs font-black uppercase tracking-wider border border-[#22C55E]/30">
                <Cpu className="w-3.5 h-3.5 text-[#22C55E]" />
                Processing Machinery
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white border border-white/20 shadow-xs transition-all duration-300 group-hover:bg-[#22C55E] group-hover:text-[#0A2614] group-hover:rotate-45">
                <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                Feed Mills & Slaughtering Gear
              </h3>
              <p className="text-xs sm:text-sm text-[#DCFCE7]/85 font-medium mt-1 leading-relaxed">
                Commercial defeathering pluckers, scalding tanks, hammer mills, and feed mixers with copper-wound motors built for Ghanaian power conditions.
              </p>
            </div>
          </div>

          {/* Highlight stat */}
          <div className="my-6 relative z-10 rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white/90">Slaughtering Plucker Speed</span>
              <span className="text-xs font-black text-[#86efac]">300 Birds/Hour</span>
            </div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#22C55E] h-full w-4/5 rounded-full" />
            </div>
            <p className="text-[11px] text-white/70 pt-1">
              Pure rubber plucker fingers minimize carcass tearing and skin bruising.
            </p>
          </div>

          {/* Bottom */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#DCFCE7] relative z-10">
            <span className="font-bold">Heavy-duty commercial build</span>
            <span className="font-extrabold text-white group-hover:translate-x-1 transition-transform">
              View Machinery →
            </span>
          </div>
        </Link>

        {/* ── CARD 5: Live Bird Transport Cages & Biosecurity (Col-span 4) ── */}
        <Link
          to="/shop?category=equipment"
          className={`lg:col-span-4 rounded-[36px] bg-white border border-[#EAE6DC] p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#166534]/30 relative overflow-hidden ${
            activeTab !== 'all' && activeTab !== 'processing' ? 'opacity-60 grayscale-[20%]' : ''
          }`}
        >
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#166534] text-xs font-black uppercase tracking-wider border border-[#86EFAC]">
                <Truck className="w-3.5 h-3.5 text-[#166534]" />
                Farm-to-Market Transit
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] border border-[#EAE6DC] text-[#14532D] shadow-xs transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white group-hover:rotate-45">
                <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D] tracking-tight">
                Live Bird Transport Crates
              </h3>
              <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1 leading-relaxed">
                Heavy-duty virgin HDPE coops engineered for tropical ventilation, anti-slip footing, zero wing fractures, and multi-tier truck stacking.
              </p>
            </div>
          </div>

          {/* Real Crates Image Display */}
          <div className="my-5 rounded-2xl overflow-hidden border border-[#EAE6DC] shadow-inner relative h-44 bg-[#FAF9F5]">
            <img
              src={poultryCratesImg}
              alt="Poultry Transport Crates"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-bold">
              <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                12–15 Bird Capacity • Heavy Gauge HDPE
              </span>
              <span className="text-[#86efac]">In Stock</span>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-2 border-t border-[#EAE6DC] flex items-center justify-between text-xs">
            <span className="font-bold text-[#166534]">Drop-resistant & easily sanitized</span>
            <span className="font-extrabold text-[#14532D] group-hover:translate-x-1 transition-transform">
              View Crates →
            </span>
          </div>
        </Link>
      </div>

      {/* ─── 3. Full-Width Bento Footer Advantage Bar ─── */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-6 sm:p-8 text-white border border-white/10 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#22C55E]/20 text-[#86efac] border border-[#22C55E]/40 shrink-0">
            <Package className="h-6 w-6 stroke-[2.2]" />
          </div>
          <div>
            <h4 className="font-display text-base sm:text-lg font-black text-white">
              Planning a Brooder Expansion or Need Commercial Volumes?
            </h4>
            <p className="text-xs sm:text-sm text-[#DCFCE7]/80 font-medium">
              We supply agro-dealers, commercial hatcheries, and medium-to-large farms with scheduled dispatch across 4 regional branches.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            to="/b2b"
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-xs sm:text-sm font-black text-[#0A2614] hover:bg-[#4ADE80] transition-colors shadow-sm"
          >
            <span>Request B2B Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:0596709226"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            <span>059 670 9226</span>
          </a>
        </div>
      </div>
    </section>
  )
}

