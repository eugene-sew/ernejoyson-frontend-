import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShieldCheck,
  Award,
  Truck,
  HeartPulse,
  ArrowRight,
  MapPin,
  Building2,
  Users,
  Target,
  Compass,
  CheckCircle2,
  Phone,
  HelpCircle,
  ChevronDown,
  Globe2,
  BadgeCheck,
  Stethoscope,
  Wrench,
  Sparkles,
} from 'lucide-react'

export const AboutPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const coreValues = [
    {
      title: 'Quality',
      desc: 'We source exclusively from reputable, ISO-certified manufacturers in Asia and Europe, ensuring every drug and piece of equipment delivers laboratory-verified potency and durability.',
      icon: ShieldCheck,
    },
    {
      title: 'Integrity',
      desc: 'Honest pricing, transparent product specifications, and an uncompromising commitment to eliminating counterfeit, adulterated, or expired products from Ghana’s market.',
      icon: BadgeCheck,
    },
    {
      title: 'Professionalism',
      desc: 'Trained veterinary executives and technical sales officers who provide responsible, medically sound dosage guidance and farm equipment consultation.',
      icon: Award,
    },
    {
      title: 'Customer Focus',
      desc: 'Putting farmers, agro-dealers, and commercial producers at the center of our logistics with responsive branch support and rapid nationwide waybill dispatch.',
      icon: Users,
    },
    {
      title: 'Innovation',
      desc: 'Continuously introducing modern automated poultry systems, precision brooding solutions, and advanced nutritional feed boosters to boost farm profitability.',
      icon: Sparkles,
    },
    {
      title: 'Teamwork',
      desc: 'A cohesive network of veterinary specialists, warehouse staff, drivers, and sales executives working in harmony across all our branches.',
      icon: HeartPulse,
    },
  ]

  const leadershipTeam = [
    {
      category: 'Board & Executive Leadership',
      members: [
        {
          name: 'Ernest Boapeah',
          role: 'Director & Founder',
          dept: 'Executive Directorate',
          highlight: 'Visionary leadership spearheading direct international sourcing, global manufacturer partnerships, and corporate strategy for Ghana & West Africa.',
        },
        {
          name: 'Richard Kwabena Nkum',
          role: 'Managing Director',
          dept: 'Corporate Operations',
          highlight: 'Oversees day-to-day enterprise operations, commercial expansion, nationwide branch logistics, and organizational performance.',
        },
        {
          name: 'Joseph Tosure',
          role: 'Chief Finance Officer & Board Member',
          dept: 'Financial Governance',
          highlight: 'Directs financial strategy, capital allocation, audit controls, and international trade compliance.',
        },
        {
          name: 'Dr. Sherry Ama Mawuko Johnson',
          role: 'Board Member',
          dept: 'Advisory Board',
          highlight: 'Provides high-level veterinary science governance, regulatory compliance advice, and animal welfare oversight.',
        },
      ],
    },
    {
      category: 'Branch & Regional Sales Management',
      members: [
        {
          name: 'Witty Biamah Ohemeng (Mrs)',
          role: 'Sales Manager',
          dept: 'Kasoa Central Branch (Head Office)',
          highlight: 'Leads sales operations, wholesale client relationships, and farmer counter services at the national headquarters in Kasoa.',
        },
        {
          name: 'Ms. Jennifer Asante',
          role: 'Sales Manager',
          dept: 'Kumasi Regional Branch',
          highlight: 'Coordinates distribution and wholesale accounts across the Ashanti Region and gateway supply corridors to Northern Ghana.',
        },
        {
          name: 'Zakaria Mohammed',
          role: 'Veterinary Sales Executive',
          dept: 'Agona Swedru Branch',
          highlight: 'Delivers technical advisory and veterinary pharmaceutical sales to Central Region farmers and commercial poultry cooperatives.',
        },
        {
          name: 'Yakubu Abdul-Hanan',
          role: 'Veterinary Sales Executive',
          dept: 'Nsawam Branch',
          highlight: 'Manages farmer accounts, technical dosing advisory, and equipment supply across the Eastern Region and Ga West farming clusters.',
        },
        {
          name: 'Abinga Christopher Kwadwo',
          role: 'Technical Sales Executive',
          dept: 'Kasoa Branch',
          highlight: 'Specializes in equipment installation, flock brooding setups, debeaker maintenance, and automated drinking systems.',
        },
        {
          name: 'Millicent Gyanewaa Ofosu',
          role: 'Digital Sales Manager',
          dept: 'Digital Commerce & Customer Care',
          highlight: 'Manages digital orders, phone and WhatsApp sales desk inquiries, and nationwide farmer customer support.',
        },
      ],
    },
    {
      category: 'Finance, Accounts & Fleet Logistics',
      members: [
        {
          name: 'Benjamin Siaw',
          role: 'Accounts Officer',
          dept: 'Treasury & Accounts',
          highlight: 'Manages branch reconciliations, invoicing, payment verification, and farmer account ledgers.',
        },
        {
          name: 'Francis Otoo',
          role: 'Chief Driver & Fleet Supervisor',
          dept: 'Nationwide Fleet & Waybill Logistics',
          highlight: 'Supervises inter-branch transfers and daily regional waybill dispatch to bus terminals and farm gates across all 16 regions.',
        },
      ],
    },
  ]

  const equipmentCategories = [
    {
      title: 'Feeding & Drinking Systems',
      desc: 'Chick feeding trays, 1.5kg–12kg manual tube feeders, automatic bell drinkers, and high-flow nipple drinker lines.',
      tag: 'Brooding & Rearing',
    },
    {
      title: 'Slaughtering Equipment',
      desc: 'Commercial motorized poultry plucker machines, scalding tanks, and hygienic processing accessories for processors.',
      tag: 'Post-Harvest Processing',
    },
    {
      title: 'Transport Cages & Crates',
      desc: 'Heavy-duty, virgin HDPE poultry transport crates designed for excellent ventilation and reduced transit stress.',
      tag: 'Logistics & Safety',
    },
    {
      title: 'Feed Processing Machines',
      desc: 'Robust commercial hammer mills, vertical mixers, and pelleting units built for on-farm feed compounding.',
      tag: 'Feed Mill Solutions',
    },
    {
      title: 'Incubators & Hatchery Equipment',
      desc: 'Precision temperature and humidity-controlled egg incubators, setter trays, and brooding heat lamps.',
      tag: 'Hatchery Technology',
    },
  ]

  const pharmaCategories = [
    {
      title: 'Nutritional Supplements & Amino Acids',
      desc: 'Joy Amino, Joyvet AD3E, Multivitamin water-soluble powders, Egg Boosters, and electrolytes to maximize egg production and growth.',
    },
    {
      title: 'Therapeutic Antibiotics',
      desc: 'Doxycycline, Tylosin, Emtrisul, and Enrofloxacin for rapid control of CRD, infectious coryza, fowl cholera, and colibacillosis.',
    },
    {
      title: 'Anti-Parasitics & External Care',
      desc: 'Topical sprays, wound antiseptics, and fipronil formulations to eliminate mites, lice, and skin parasites.',
    },
    {
      title: 'Anthelmintics & Dewormers',
      desc: 'Broad-spectrum dewormers (Ern-Leva, Albermectin) to eliminate roundworms, tapeworms, and cecal worms.',
    },
    {
      title: 'Preventive & Performance Enhancers',
      desc: 'Coccidiostats (Ernzuril 2.5%, Erncox 20%), gut-health acidifiers, and biosecurity disinfectants (Biocide, Patholyte).',
    },
  ]

  const whyChooseReasons = [
    {
      title: 'Ghanaian-Owned Enterprise',
      desc: 'Rooted in Ghana with deep operational understanding of local farming realities, tropical climatic stresses, and regional disease pressures.',
    },
    {
      title: 'Direct Sourcing from Asia & Europe',
      desc: 'We import directly from vetted, reputable manufacturers, cutting out intermediaries to guarantee 100% genuine potency at fair wholesale pricing.',
    },
    {
      title: 'Structured 4-Branch Network',
      desc: 'Physical presence in Kasoa (HQ), Kumasi, Swedru, and Nsawam ensures fast, reliable access without long transit delays.',
    },
    {
      title: 'Nationwide 16-Region Waybills',
      desc: 'Our fleet and courier logistics deliver equipment and pharmaceuticals right to your nearest regional station or farm gate.',
    },
    {
      title: 'Complete Dual Portfolio',
      desc: 'A single, dependable partner providing both heavy-duty poultry/livestock equipment and certified veterinary pharmaceuticals.',
    },
    {
      title: 'Quality & Real Affordability',
      desc: 'Dedicated to lowering farmer input costs through competitive bulk margins and transparent direct pricing in Ghana Cedis.',
    },
    {
      title: 'Technical Veterinary Guidance',
      desc: 'Not just box movers — our licensed veterinary sales officers provide responsible dosage calculation, pen biosecurity, and vaccination guidance.',
    },
  ]

  const faqs = [
    {
      q: 'Where can I buy poultry equipment in Ghana?',
      a: 'ERNEJOYSON COMPANY LIMITED supplies poultry and livestock equipment through its branch network in Kasoa (Head Office), Kumasi, Swedru, and Nsawam, with nationwide distribution and daily waybills across all 16 regions of Ghana.',
    },
    {
      q: 'What poultry equipment does Ernejoyson supply?',
      a: 'Our poultry and livestock equipment range includes feeding and drinking systems (manual and automatic), slaughtering equipment and plucking machines, heavy-duty transport cages, feed processing machines, and precision incubators and hatchery equipment.',
    },
    {
      q: 'Where can I get poultry drugs in Ghana?',
      a: 'Ernejoyson supplies certified veterinary pharmaceuticals and animal health products, including nutritional supplements, therapeutic antibiotics, anti-parasitics, anthelmintics (dewormers), and preventive and performance-enhancing coccidiostats.',
    },
    {
      q: 'Does Ernejoyson supply livestock equipment?',
      a: 'Yes. Beyond poultry, Ernejoyson provides livestock handling equipment, feeders, drinkers, veterinary injectables, dewormers, and wound-treatment formulations for sheep, goats, cattle, and swine producers.',
    },
    {
      q: 'Where are Ernejoyson branches located in Ghana?',
      a: 'Ernejoyson operates 4 established branches: Kasoa (National Head Office & Central Warehouse), Kumasi (Ashanti Region & Northern Gateway), Agona Swedru (Central Region Hub), and Nsawam (Eastern Region & Greater Accra Corridor). Contact us at 059 670 9226 or 024 160 4926.',
    },
  ]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] via-[#0E3B20] to-[#0A2614] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-[#DCFCE7] border border-white/15 backdrop-blur-xs">
            <Building2 className="h-3.5 w-3.5 text-[#22C55E]" />
            <span>ERNEJOYSON COMPANY LIMITED • Corporate Profile</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-black tracking-tight leading-[1.1]">
            Ghana’s Trusted Partner in Veterinary Pharmaceuticals &amp; Poultry Equipment
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#DCFCE7]/90 font-medium leading-relaxed max-w-3xl">
            Ernejoyson Company Limited is a Ghanaian-owned veterinary pharmaceutical and poultry and livestock equipment importation and distribution enterprise. We import directly from reputable manufacturers in Asia and Europe and distribute nationwide through our structured branch network.
          </p>

          {/* Key Trust Badges */}
          <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-white/95">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/15">
              <Globe2 className="h-4 w-4 text-[#22C55E]" />
              <span>Asia &amp; Europe Direct Sourcing</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/15">
              <MapPin className="h-4 w-4 text-[#22C55E]" />
              <span>4 Established Ghana Branches</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 border border-white/15">
              <Truck className="h-4 w-4 text-[#22C55E]" />
              <span>16-Region Nationwide Waybill</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-7 py-3.5 text-sm font-extrabold text-[#0A2614] hover:bg-[#4ADE80] transition-colors shadow-md"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>View Branch Network</span>
            </Link>
            <a
              href="tel:0596709226"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>059 670 9226 / 024 160 4926</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Vision, Mission & Purpose */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="rounded-3xl bg-white border border-[#EAE6DC] p-8 sm:p-10 shadow-xs space-y-4 hover:border-[#166534]/30 transition-all">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
              <Target className="h-6 w-6 stroke-[2.2]" />
            </span>
            <div>
              <span className="text-xs font-extrabold text-[#166534] uppercase tracking-wider">
                Corporate Vision
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                Where We Are Heading
              </h2>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-[#14532D] leading-relaxed italic border-l-4 border-[#22C55E] pl-4 py-1">
            “To become the most trusted and accessible veterinary pharmaceutical and livestock equipment distributor in Ghana and West Africa.”
          </p>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
            We are investing in regional cold-chain distribution, technical field advisory, and high-standard international sourcing partnerships so every commercial farm and smallholder producer can thrive.
          </p>
        </div>

        {/* Mission Card */}
        <div className="rounded-3xl bg-white border border-[#EAE6DC] p-8 sm:p-10 shadow-xs space-y-4 hover:border-[#166534]/30 transition-all">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
              <Compass className="h-6 w-6 stroke-[2.2]" />
            </span>
            <div>
              <span className="text-xs font-extrabold text-[#166534] uppercase tracking-wider">
                Corporate Mission
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                Our Daily Mandate
              </h2>
            </div>
          </div>
          <p className="text-base sm:text-lg font-bold text-[#14532D] leading-relaxed italic border-l-4 border-[#166534] pl-4 py-1">
            “To provide quality and affordable veterinary drugs and farm equipment that enhance productivity and improve animal health.”
          </p>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
            Our role is to eliminate counterfeit compromises and supply chain shortages by delivering genuine pharmaceutical potency and industrial equipment durability directly to farm gates.
          </p>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Our Guiding Pillars
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Core Values That Define ERNEJOYSON
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Quality • Integrity • Professionalism • Customer Focus • Innovation • Teamwork
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-xs space-y-3 hover:border-[#166534]/40 hover:shadow-md transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
                  <Icon className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="font-display text-lg font-black text-[#14532D]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
                  {val.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Equipment & Pharmaceutical Portfolio Overview */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-8 sm:p-12 shadow-xs space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Comprehensive Product Portfolios
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#14532D]">
            Poultry Equipment, Livestock Solutions &amp; Veterinary Pharmaceuticals
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
            Successful poultry and livestock farming in Ghana requires more than birds, feed, and housing. Farmers need dependable equipment, verified medication, and seamless access to farm supplies at all production stages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Column 1: Equipment */}
          <div className="rounded-2xl bg-[#FAF9F5] p-6 sm:p-8 border border-[#EAE6DC] space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#166534] text-white">
                <Wrench className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-black text-[#14532D]">
                  Poultry &amp; Livestock Equipment
                </h3>
                <p className="text-xs text-[#14532D]/70 font-semibold">
                  Essential, heavy-duty machinery &amp; rearing hardware
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
              Ernejoyson supplies essential poultry equipment in Ghana to improve day-to-day farm management, reduce manual labour, and support efficient feeding, watering, and processing.
            </p>

            <div className="space-y-3">
              {equipmentCategories.map((eq, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-4 border border-[#EAE6DC] space-y-1 hover:border-[#166534]/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-sm font-extrabold text-[#14532D]">
                      {eq.title}
                    </h4>
                    <span className="text-[10px] font-black uppercase text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-md shrink-0">
                      {eq.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#14532D]/75 font-medium leading-relaxed">
                    {eq.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/shop?category=feeders"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#166534] hover:text-[#14532D] transition-colors"
            >
              <span>View All Equipment in Shop</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Column 2: Veterinary Pharmaceuticals */}
          <div className="rounded-2xl bg-[#FAF9F5] p-6 sm:p-8 border border-[#EAE6DC] space-y-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#14532D] text-white">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-black text-[#14532D]">
                  Veterinary Drugs &amp; Animal Health
                </h3>
                <p className="text-xs text-[#14532D]/70 font-semibold">
                  Laboratory-certified therapeutics, vitamins &amp; vaccines
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
              Farmers looking for affordable poultry drugs in Ghana can access our extensive range of veterinary products, backed by practical veterinary product information and dosage guidance.
            </p>

            <div className="space-y-3">
              {pharmaCategories.map((ph, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-4 border border-[#EAE6DC] space-y-1 hover:border-[#166534]/30 transition-all"
                >
                  <h4 className="font-display text-sm font-extrabold text-[#14532D]">
                    {ph.title}
                  </h4>
                  <p className="text-xs text-[#14532D]/75 font-medium leading-relaxed">
                    {ph.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/shop?category=antibiotics"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#166534] hover:text-[#14532D] transition-colors"
            >
              <span>Browse Veterinary Pharmaceuticals</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. Why Choose ERNEJOYSON */}
      <div className="rounded-3xl bg-[#FAF9F5] border border-[#EAE6DC] p-8 sm:p-12 shadow-xs space-y-8">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Competitive Advantages
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#14532D]">
            Why Farmers &amp; Agro-Vets Choose ERNEJOYSON
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
            Our approach is built around quality, integrity, professionalism, customer focus, and innovation to ensure dependable farm productivity across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseReasons.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 border border-[#EAE6DC] shadow-xs space-y-2 hover:border-[#166534]/30 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534] font-black text-xs shrink-0">
                  {index + 1}
                </span>
                <h3 className="font-display text-base font-extrabold text-[#14532D]">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed pl-9">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Management & Team Directory */}
      <div className="space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3.5 py-1 text-xs font-extrabold text-[#166534]">
            <Users className="h-3.5 w-3.5" />
            <span>Corporate Governance &amp; Operations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#14532D]">
            Management &amp; Leadership Team
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
            Meet the experienced directors, veterinarians, accountants, and branch sales executives driving ERNEJOYSON COMPANY LIMITED forward across Ghana.
          </p>
        </div>

        <div className="space-y-10">
          {leadershipTeam.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-[#EAE6DC] pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                <h3 className="font-display text-lg sm:text-xl font-black text-[#14532D]">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.members.map((person, pIdx) => (
                  <div
                    key={pIdx}
                    className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-xs space-y-3 hover:border-[#166534]/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-display text-lg font-black text-[#14532D]">
                            {person.name}
                          </h4>
                          <p className="text-xs font-bold text-[#166534]">
                            {person.role}
                          </p>
                        </div>
                        <span className="text-[10px] font-black uppercase text-[#14532D]/60 bg-[#FAF9F5] border border-[#EAE6DC] px-2 py-0.5 rounded-md shrink-0">
                          {person.dept.split(' ')[0]}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#14532D]/60">
                        {person.dept}
                      </p>
                      <p className="text-xs text-[#14532D]/80 font-medium leading-relaxed pt-1">
                        {person.highlight}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#EAE6DC]/60 flex items-center justify-between text-[11px] font-bold text-[#166534]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#22C55E]" />
                        <span>ERNEJOYSON Team</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Branch Footprint Overview */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-xl border border-white/10 space-y-8">
        <div className="max-w-3xl space-y-2 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#22C55E]">
            Nationwide Presence
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white">
            Our Established Branch Network
          </h2>
          <p className="text-xs sm:text-sm text-[#DCFCE7]/85 font-medium leading-relaxed">
            Ernejoyson serves customers through physical branches positioned along Ghana’s key farming belts, backed by daily regional waybill dispatch to all 16 regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/15 space-y-2">
            <span className="text-xs font-black uppercase text-[#22C55E] bg-white/10 px-2.5 py-0.5 rounded-md inline-block">
              National Head Office
            </span>
            <h3 className="font-display text-xl font-bold text-white">Kasoa</h3>
            <p className="text-xs text-[#DCFCE7]/80 font-medium">
              Central warehouse, administrative directorate, and high-volume wholesale distribution hub.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/15 space-y-2">
            <span className="text-xs font-black uppercase text-[#22C55E] bg-white/10 px-2.5 py-0.5 rounded-md inline-block">
              Regional Branch
            </span>
            <h3 className="font-display text-xl font-bold text-white">Kumasi</h3>
            <p className="text-xs text-[#DCFCE7]/80 font-medium">
              Serving the Ashanti Region commercial poultry belt and northern distribution corridor.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/15 space-y-2">
            <span className="text-xs font-black uppercase text-[#22C55E] bg-white/10 px-2.5 py-0.5 rounded-md inline-block">
              Regional Branch
            </span>
            <h3 className="font-display text-xl font-bold text-white">Swedru</h3>
            <p className="text-xs text-[#DCFCE7]/80 font-medium">
              Central Region agricultural hub delivering specialized veterinary advice and equipment.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/15 space-y-2">
            <span className="text-xs font-black uppercase text-[#22C55E] bg-white/10 px-2.5 py-0.5 rounded-md inline-block">
              Regional Branch
            </span>
            <h3 className="font-display text-xl font-bold text-white">Nsawam</h3>
            <p className="text-xs text-[#DCFCE7]/80 font-medium">
              Eastern Region supply depot bridging Greater Accra, Akuapem, and Suhum poultry clusters.
            </p>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between flex-wrap gap-4 border-t border-white/15 relative z-10">
          <p className="text-xs sm:text-sm text-[#DCFCE7]/85 font-medium">
            Looking for location addresses, direct branch phone lines, or GPS directions?
          </p>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-2.5 text-xs sm:text-sm font-black text-[#0A2614] hover:bg-[#4ADE80] transition-colors"
          >
            <span>View All Branch Details</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>

      {/* 8. Corporate FAQ Accordion */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-8 sm:p-12 shadow-xs space-y-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-extrabold text-[#166534]">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Corporate FAQ</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Common questions about ERNEJOYSON COMPANY LIMITED’s operations, products, and branch network in Ghana.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i
            return (
              <div
                key={i}
                className="rounded-2xl border border-[#EAE6DC] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 bg-[#FAF9F5] hover:bg-[#F4F1EA] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="font-display text-sm sm:text-base font-extrabold text-[#14532D]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#166534] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-[#EAE6DC] text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* 9. Contact & Call to Action Banner */}
      <div className="rounded-3xl bg-[#166534] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="text-xs font-black uppercase tracking-wider text-[#DCFCE7] bg-white/10 px-3 py-1 rounded-full inline-block">
            Connect With ERNEJOYSON
          </span>
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black">
            Looking for Quality Poultry Equipment or Animal Health Products?
          </h3>
          <p className="text-xs sm:text-sm text-[#DCFCE7]/90 font-medium leading-relaxed">
            Connect with ERNEJOYSON COMPANY LIMITED today for direct wholesale quotes, commercial farm equipment, and professional veterinary guidance across Ghana.
          </p>
          <div className="pt-1 text-xs sm:text-sm font-extrabold text-white flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span>Direct Lines: 059 670 9226 / 024 160 4926</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="https://wa.me/233596709226?text=Hello%20ERNEJOYSON!%20I%20am%20interested%20in%20your%20poultry%20equipment%20and%20veterinary%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center rounded-full bg-[#22C55E] text-[#0A2614] px-8 py-3.5 text-xs sm:text-sm font-black hover:bg-[#4ADE80] transition-colors shadow-sm"
          >
            <span>WhatsApp Our Sales Desk</span>
          </a>
          <Link
            to="/shop"
            className="w-full sm:w-auto text-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3.5 text-xs sm:text-sm font-bold transition-colors"
          >
            <span>Browse Full Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
