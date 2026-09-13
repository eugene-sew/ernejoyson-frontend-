import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Activity,
  PhoneCall,
  Zap,
} from 'lucide-react'

export const SolutionsPage: React.FC = () => {
  const [selectedFarmSize, setSelectedFarmSize] = useState<'small' | 'medium' | 'commercial'>('medium')

  const farmSolutions = [
    {
      id: 'poultry',
      title: 'Commercial Broiler & Layer Production',
      badge: 'Most Popular',
      icon: Layers,
      description:
        'Complete nutritional, hardware, and health setups from day-old chick arrival through peak lay and marketing.',
      problemsSolved: [
        'High early chick mortality during first 14 days of brooding',
        'Uneven flock weights caused by inadequate feeding access',
        'Egg production drop during heat stress and rainy season',
        'Water contamination from open, poorly designed drinkers',
      ],
      recommendedProducts: [
        { name: 'Chick Tray & 1.5kg Feeders', ref: '8066 / 8075', slug: 'feeders' },
        { name: 'Manual Drinker 5L / 11L', ref: '8046 / 8040', slug: 'drinkers' },
        { name: 'Joy Amino & Multivitamin Pwd', ref: '7974 / 7976', slug: 'vitamins' },
        { name: 'Egg Booster 100g / 1kg', ref: '8055', slug: 'feed-additives' },
      ],
      ctaText: 'View Poultry Equipment & Health Packs',
      ctaLink: '/shop?category=feeders',
    },
    {
      id: 'disease-control',
      title: 'Veterinary Biosecurity & Disease Management',
      badge: 'Veterinary Grade',
      icon: HeartPulse,
      description:
        'Proven therapeutic protocols to prevent outbreaks of Coccidiosis, Gumboro, Newcastle, Coryza, and parasitic infestations.',
      problemsSolved: [
        'Bloody droppings and rapid dehydration from coccidia',
        'Chronic respiratory rattling, coughing, and swollen eyes',
        'Intestinal worm burdens stunting flock feed conversion',
        'Cross-contamination between pens and outside farm visitors',
      ],
      recommendedProducts: [
        { name: 'Ernzuril 2.5% & Erncox 20%', ref: '7980 / 7994', slug: 'anti-parasitics' },
        { name: 'Doxy Tylo & Bolai Enro 20%', ref: '8063 / 8101', slug: 'antibiotics' },
        { name: 'Ern-Leva & Albermectin Dewormer', ref: '7995 / 7972', slug: 'anti-parasitics' },
        { name: 'Biocide & Patholyte Disinfectants', ref: '7965 / 8069', slug: 'disinfectants' },
      ],
      ctaText: 'Explore Veterinary Pharmaceuticals',
      ctaLink: '/shop?category=antibiotics',
    },
    {
      id: 'livestock-ruminants',
      title: 'Ruminant & Swine Health Systems',
      badge: 'Cattle, Sheep, Goats & Pigs',
      icon: Activity,
      description:
        'Targeted anthelmintics, iron injections, mineral blocks, and ectoparasite dips for thriving livestock herds.',
      problemsSolved: [
        'Anemia and slow growth in newly farrowed piglets',
        'Tick burdens and fly strikes causing tick-borne fevers',
        'Internal roundworms and liver fluke in grazing ruminants',
        'Mineral deficiencies and seasonal weight loss',
      ],
      recommendedProducts: [
        { name: 'Bolai Iron Dextran 10% + B12', ref: '7935', slug: 'injectables' },
        { name: 'Joyvet Mineral Blocks', ref: '8038', slug: 'feed-additives' },
        { name: 'Bolai Cypermethrin & Amitraz Dip', ref: '7969 / 8106', slug: 'anti-parasitics' },
        { name: 'Pig Nipple Drinkers & Heavy Syringes', ref: '7914 / 7919', slug: 'equipment' },
      ],
      ctaText: 'Browse Livestock & Swine Supplies',
      ctaLink: '/shop?category=injectables',
    },
    {
      id: 'infrastructure-automation',
      title: 'Farm Processing & Hardware Mechanization',
      badge: 'Farm Efficiency',
      icon: Zap,
      description:
        'Heavy-duty machinery designed to reduce labor costs, eliminate feed wastage, and streamline post-harvest processing.',
      problemsSolved: [
        'High labor expense and feather damage in manual bird slaughter',
        'Feather picking and cannibalism in growing pullets',
        'Inconsistent heating causing chilling in day-old chicks',
        'High mortality during bird transport to Kumasi & Accra markets',
      ],
      recommendedProducts: [
        { name: 'Motorized Plucking Machine', ref: 'Commercial', slug: 'equipment' },
        { name: 'Debeaking Machine with Counter', ref: '8041', slug: 'equipment' },
        { name: 'Gas Brooders 1500cc / 2500cc', ref: '8027', slug: 'equipment' },
        { name: 'Heavy-Duty Transport Crates', ref: '8079 / 8082', slug: 'equipment' },
      ],
      ctaText: 'View Farm Machinery & Crates',
      ctaLink: '/shop?category=equipment',
    },
  ]

  const farmSizePacks = {
    small: {
      title: 'Starter Flock (100 - 500 Birds)',
      description: 'Ideal for backyard farmers and new poultry enterprises scaling up in Ghana.',
      feeders: '6x Chick Trays (8066) + 8x Feeder 6kg (8043)',
      drinkers: '6x Manual Drinker 3L (8042) + 6x Manual Drinker 6L (8028)',
      health: 'Joy Amino 100g + Ernzuril 2.5% + Ern-Leva Dewormer 100g',
      biosecurity: 'Patholyte Disinfectant 2L for footbaths & pen spraying',
    },
    medium: {
      title: 'Semi-Commercial Flock (500 - 2,000 Birds)',
      description: 'Optimal balance of automated feeding, disease prophylaxis, and growth acceleration.',
      feeders: '20x Feeder 9kg/12kg (8031/8032) + 12x Maxi Chicks Feeders',
      drinkers: '16x Automatic Bell Drinkers (8020) + 10x Manual Drinker 11L',
      health: 'Joy Supa Combo 1kg + Erncox 20% 1kg + Mucolite Plus + Egg Booster 1kg',
      biosecurity: 'Biocide 1kg + Gas Brooder 1500cc (8027)',
    },
    commercial: {
      title: 'Full Commercial Farm (2,000 - 10,000+ Birds)',
      description: 'Engineered for maximum feed conversion, minimal labor, and strict biosecurity containment.',
      feeders: '50+ Compacta 22L (8037) / Feeder 12kg (8038) with Anti-Spill Grids',
      drinkers: 'Automated Bell Drinker Network with Pressure Regulators & Valves',
      health: 'Direct Bulk B2B Clinic Pack (Bolai Enro 20%, Doxy Tylo 1kg, Joy Amino 1kg)',
      biosecurity: 'Electric Debeaker (8041) + Plucking Machine + Transport Crates (8079)',
    },
  }

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#DCFCE7] border border-white/10">
            <Sparkles className="h-3.5 w-3.5 text-[#22C55E]" />
            <span>Integrated Farm Operations</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Integrated Farm Solutions for Ghanaian Poultry & Livestock
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            Successful farming in Ghana requires more than buying random products. ERNEJOYSON matches genuine veterinary pharmaceuticals, tailored feeding lines, and practical husbandry protocols to your specific flock or herd size.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/technical-support"
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-xs sm:text-sm font-black text-[#0A2614] hover:bg-[#4ADE80] transition-colors shadow-sm"
            >
              <span>Get Free Vaccination Schedule</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
            >
              <span>Browse 100+ Catalog Products</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Interactive Farm Size Setup Configurator */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Farm Configuration Tool
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Calculate Equipment & Health Packs for Your Flock
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Select your flock scale below to see the exact recommended feeder ratios, drinker setups, and essential medications.
          </p>
        </div>

        {/* Size Selection Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedFarmSize('small')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              selectedFarmSize === 'small'
                ? 'border-[#166534] bg-[#DCFCE7]/30 ring-2 ring-[#166534]'
                : 'border-[#EAE6DC] bg-[#FAF9F5] hover:bg-white'
            }`}
          >
            <span className="text-xs font-mono font-black text-[#166534] block">100 - 500 Birds</span>
            <span className="font-display text-base font-extrabold text-[#14532D] mt-1 block">
              Starter / Backyard
            </span>
          </button>

          <button
            onClick={() => setSelectedFarmSize('medium')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              selectedFarmSize === 'medium'
                ? 'border-[#166534] bg-[#DCFCE7]/30 ring-2 ring-[#166534]'
                : 'border-[#EAE6DC] bg-[#FAF9F5] hover:bg-white'
            }`}
          >
            <span className="text-xs font-mono font-black text-[#166534] block">500 - 2,000 Birds</span>
            <span className="font-display text-base font-extrabold text-[#14532D] mt-1 block">
              Semi-Commercial
            </span>
          </button>

          <button
            onClick={() => setSelectedFarmSize('commercial')}
            className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
              selectedFarmSize === 'commercial'
                ? 'border-[#166534] bg-[#DCFCE7]/30 ring-2 ring-[#166534]'
                : 'border-[#EAE6DC] bg-[#FAF9F5] hover:bg-white'
            }`}
          >
            <span className="text-xs font-mono font-black text-[#166534] block">2,000 - 10,000+ Birds</span>
            <span className="font-display text-base font-extrabold text-[#14532D] mt-1 block">
              Full Commercial
            </span>
          </button>
        </div>

        {/* Dynamic Pack Breakdown Card */}
        <div className="rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE6DC] pb-4">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-black text-[#14532D]">
                {farmSizePacks[selectedFarmSize].title}
              </h3>
              <p className="text-xs text-[#14532D]/70 font-medium">
                {farmSizePacks[selectedFarmSize].description}
              </p>
            </div>
            <Link
              to="/b2b"
              className="shrink-0 text-xs font-bold text-[#166534] hover:underline"
            >
              Request Custom Package Quote &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] space-y-1">
              <span className="font-bold text-[#166534] uppercase text-[11px] tracking-wider block">
                Recommended Feeders
              </span>
              <p className="font-medium text-[#14532D]">
                {farmSizePacks[selectedFarmSize].feeders}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] space-y-1">
              <span className="font-bold text-[#166534] uppercase text-[11px] tracking-wider block">
                Recommended Drinkers
              </span>
              <p className="font-medium text-[#14532D]">
                {farmSizePacks[selectedFarmSize].drinkers}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] space-y-1">
              <span className="font-bold text-[#166534] uppercase text-[11px] tracking-wider block">
                Target Health & Medication Kit
              </span>
              <p className="font-medium text-[#14532D]">
                {farmSizePacks[selectedFarmSize].health}
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] space-y-1">
              <span className="font-bold text-[#166534] uppercase text-[11px] tracking-wider block">
                Biosecurity & Brooding
              </span>
              <p className="font-medium text-[#14532D]">
                {farmSizePacks[selectedFarmSize].biosecurity}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep Dive Solutions Cards */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Tailored Sectors
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Specialized Enterprise Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {farmSolutions.map((sol) => {
            const Icon = sol.icon
            return (
              <div
                key={sol.id}
                className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#166534]/30 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
                      <Icon className="h-6 w-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#166534] bg-[#FAF9F5] px-3 py-1 rounded-full border border-[#EAE6DC]">
                      {sol.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-black text-[#14532D]">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1 leading-relaxed">
                      {sol.description}
                    </p>
                  </div>

                  {/* Common Farm Bottlenecks Solved */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider">
                      Common Bottlenecks We Eliminate:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#14532D]/85">
                      {sol.problemsSolved.map((prob, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#166534] shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlighted Catalog Hardware & Drugs */}
                  <div className="rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] space-y-2">
                    <span className="text-[11px] font-bold text-[#166534] uppercase tracking-wider block">
                      Core Stocked Items Used in this Solution:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.recommendedProducts.map((p, i) => (
                        <Link
                          key={i}
                          to={`/shop?category=${p.slug}`}
                          className="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-[#14532D] border border-[#EAE6DC] hover:border-[#166534] transition-colors"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to={sol.ctaLink}
                  className="flex items-center justify-between rounded-full bg-[#FAF9F5] hover:bg-[#166534] text-[#14532D] hover:text-white px-5 py-3 text-xs sm:text-sm font-black border border-[#EAE6DC] transition-all group"
                >
                  <span>{sol.ctaText}</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Contact Technical Field Team Banner */}
      <div className="rounded-3xl bg-[#166534] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-2 max-w-2xl text-center md:text-left">
          <h3 className="font-display text-2xl font-black">
            Need an On-Farm Assessment or Technical Setup?
          </h3>
          <p className="text-xs sm:text-sm text-[#DCFCE7]/90 font-medium">
            Our veterinary field representatives visit poultry and livestock facilities across Greater Accra, Central, Eastern, and Ashanti regions to inspect pens, review dosing, and verify drinker lines.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+233244000000"
            className="flex items-center gap-2 rounded-full bg-white text-[#166534] px-6 py-3 text-xs sm:text-sm font-black hover:bg-[#DCFCE7] transition-colors shadow-sm"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call Field Vet Line</span>
          </a>
        </div>
      </div>
    </div>
  )
}
