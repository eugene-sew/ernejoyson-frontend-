import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calculator,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Thermometer,
  Layers,
  HeartPulse,
} from 'lucide-react'

export const KnowledgePage: React.FC = () => {
  // Quick Dosage Calculator State
  const [selectedDrug, setSelectedDrug] = useState('joy-amino')
  const [tankLiters, setTankLiters] = useState(100)

  const drugFormulas: Record<
    string,
    { name: string; ratePerLiter: string; calculate: (liters: number) => string; duration: string; purpose: string; ref: string }
  > = {
    'joy-amino': {
      name: 'Joy Amino (Amino Acids + Vitamins)',
      ratePerLiter: '1g per 4 – 5 Litres of drinking water',
      calculate: (l) => `${(l / 4.5).toFixed(1)} grams`,
      duration: '3 – 5 consecutive days',
      purpose: 'Anti-stress after vaccine, rapid chick growth, and appetite stimulation.',
      ref: '7974',
    },
    'ernzuril': {
      name: 'Ernzuril 2.5% Oral Solution (Toltrazuril)',
      ratePerLiter: '1ml per 1 Litre of drinking water (25ppm)',
      calculate: (l) => `${l.toFixed(0)} ml`,
      duration: '48 consecutive hours (2 full days)',
      purpose: 'Rapid curative knockout of all intestinal and cecal coccidiosis stages.',
      ref: '7980',
    },
    'erncox': {
      name: 'Erncox 20% Water Soluble Powder',
      ratePerLiter: '1g per 2 Litres of drinking water',
      calculate: (l) => `${(l / 2).toFixed(1)} grams`,
      duration: '3 – 5 consecutive days',
      purpose: 'Coccidiosis control and secondary enteritis prevention.',
      ref: '7994',
    },
    'bolai-enro': {
      name: 'Bolai Enro 20% Oral Solution (Enrofloxacin)',
      ratePerLiter: '0.5ml per 1 Litre of drinking water',
      calculate: (l) => `${(l * 0.5).toFixed(1)} ml`,
      duration: '3 – 5 consecutive days',
      purpose: 'Broad-spectrum therapy for severe CRD (Mycoplasma), E. coli, and Coryza.',
      ref: '8101',
    },
    'doxy-tylo': {
      name: 'Doxy Tylo Water Soluble Powder',
      ratePerLiter: '1g per 2 Litres of drinking water',
      calculate: (l) => `${(l / 2).toFixed(1)} grams`,
      duration: '4 – 5 consecutive days',
      purpose: 'Combined treatment of chronic respiratory disease and swollen head syndrome.',
      ref: '8063',
    },
    'egg-booster': {
      name: 'Egg Booster WSP / Pwd',
      ratePerLiter: '1g per 4 Litres of drinking water',
      calculate: (l) => `${(l / 4).toFixed(1)} grams`,
      duration: '5 – 7 days during drop in lay or heat stress',
      purpose: 'Enhance ovarian activity, eggshell thickness, and egg size.',
      ref: '8055',
    },
  }

  const selectedFormula = drugFormulas[selectedDrug]

  const articles = [
    {
      title: 'Managing Coccidiosis in Ghana: Prevention vs. Crisis Treatment',
      category: 'Disease Management',
      icon: HeartPulse,
      readTime: '4 min read',
      excerpt:
        'Coccidiosis remains one of the greatest profit killers for broiler and layer growers in Ghana. Learn how to distinguish between intestinal and cecal coccidiosis, and why Toltrazuril (Ernzuril 2.5%) acts faster than traditional sulfa drugs.',
      keyTakeaways: [
        'Wet litter under leaking drinkers is the #1 incubator for oocysts.',
        'Early signs include ruffled feathers, huddling, and pale combs before blood appears.',
        'Administer Ernzuril 2.5% for exactly 48 hours without interruptions.',
      ],
      slug: 'coccidiosis-management',
      relatedCategory: 'anti-parasitics',
    },
    {
      title: 'Day-Old Chick Brooding: Heat, Light, and Water Management',
      category: 'Farm Husbandry',
      icon: Thermometer,
      readTime: '5 min read',
      excerpt:
        'The first 14 days dictate the entire 6-week performance of a broiler flock and the lifetime lay rate of pullets. Master thermometer placement, gas brooder calibration, and chick crop fullness testing.',
      keyTakeaways: [
        'Target 32°C – 35°C in the brooding ring on Day 1; decrease by 2.5°C weekly.',
        'Use chick feeding trays (8066) to ensure 100% of chicks access feed within 2 hours.',
        'Always provide rehydration electrolytes and Joy Amino before offering starter mash.',
      ],
      slug: 'brooding-guide',
      relatedCategory: 'equipment',
    },
    {
      title: 'Combating Heat Stress in Poultry Houses During the Dry Season',
      category: 'Flock Nutrition',
      icon: Layers,
      readTime: '3 min read',
      excerpt:
        'When ambient temperatures exceed 30°C across coastal and northern Ghana, birds pant and suffer respiratory alkalosis. Discover the correct usage of Vitamin C soluble powder and nocturnal feeding strategies.',
      keyTakeaways: [
        'Add Vitamin C soluble powder (8014) to morning water tanks before peak heat hits.',
        'Flush water lines at 1:00 PM to ensure drinking water is cool and palatable.',
        'Avoid disturbing or vaccinating birds during the midday peak heat hours.',
      ],
      slug: 'heat-stress-management',
      relatedCategory: 'feed-additives',
    },
    {
      title: 'Biosecurity Protocols: Keeping Your Farm Disease-Free',
      category: 'Biosecurity',
      icon: ShieldCheck,
      readTime: '4 min read',
      excerpt:
        'Farm perimeter fencing, dedicated footwear, and reliable disinfectant footbaths prevent 90% of infectious farm outbreaks. How to rotate between Biocide and Patholyte disinfectants.',
      keyTakeaways: [
        'Change footbath solution every 48 hours; dirty baths harbor live pathogens.',
        'Never allow foreign egg crates or unsterilized bird cages into pen areas.',
        'Enforce a strict 14-day downtime and deep disinfection between flock cycles.',
      ],
      slug: 'biosecurity-protocols',
      relatedCategory: 'disinfectants',
    },
  ]

  const faqs = [
    {
      q: 'Can I mix vitamins and antibiotics in the same water tank?',
      a: 'As a rule, avoid mixing different concentrated pharmaceuticals in the same tank unless specifically formulated together (e.g. Joy Supa Combo or Emtrisul). Pure antibiotics should be given in morning fresh water, followed by vitamins (like Joy Amino) in the late afternoon or following the treatment course.',
    },
    {
      q: 'Why should I avoid chlorinated tap water for live vaccines?',
      a: 'Chlorine kills the live virus strains in Newcastle (Lasota / Hitchner B1) and Gumboro (IBD) vaccines, rendering the vaccination useless. Use borehole, deep well, or rain water, and always mix with skimmed milk powder (2g per liter) to neutralize any trace chlorine and protect virus viability.',
    },
    {
      q: 'What is the standard egg withdrawal period after treating with antibiotics?',
      a: 'For commercial laying hens, withdrawal periods vary by active ingredient. For Tylosin and Enrofloxacin, eggs should typically not be consumed or sold for table use during treatment and for 3 to 7 days post-treatment. Consult our veterinary pharmacist for specific residue guidance.',
    },
    {
      q: 'How many feeders and drinkers do I need per 100 birds?',
      a: 'For adult broilers and layers, you need approximately three to four 6kg/9kg tube feeders (e.g. Ref: #8043 or #8031) and three manual 6L drinkers (or one automated bell drinker Ref: #8020) per 100 birds to prevent crowding and uneven flock growth.',
    },
  ]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Practical Veterinary Guides & Dosage Calculators
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            Better farming starts with better knowledge. Access proven medication protocols, water tank dosage calculators, and practical husbandry articles written specifically for Ghanaian climatic conditions.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="#dosage-calculator"
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-xs sm:text-sm font-black text-[#0A2614] hover:bg-[#4ADE80] transition-colors shadow-sm"
            >
              <Calculator className="h-4 w-4" />
              <span>Interactive Dosage Calculator</span>
            </a>
            <Link
              to="/technical-support"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
            >
              <span>Download Vaccination Chart</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Interactive Water Tank Dosage Calculator */}
      <div id="dosage-calculator" className="scroll-mt-28 rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-8">
        <div className="max-w-2xl space-y-1">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#166534]">
            <Calculator className="h-4 w-4" />
            <span>Farm Math Made Easy</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Water Tank Medication & Vitamin Calculator
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Select a core veterinary medicine and enter your farm's water tank volume to instantly calculate the precise dosage in grams or milliliters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#14532D]">
                Select Veterinary Product:
              </label>
              <select
                value={selectedDrug}
                onChange={(e) => setSelectedDrug(e.target.value)}
                className="w-full h-12 px-4 rounded-2xl border border-[#EAE6DC] bg-[#FAF9F5] text-xs sm:text-sm font-bold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none cursor-pointer"
              >
                <option value="joy-amino">Joy Amino (Vitamins + Amino Acids)</option>
                <option value="ernzuril">Ernzuril 2.5% Toltrazuril (Cocci Cure)</option>
                <option value="erncox">Erncox 20% Powder (Cocci Preventive)</option>
                <option value="bolai-enro">Bolai Enro 20% (Enrofloxacin CRD Cure)</option>
                <option value="doxy-tylo">Doxy Tylo (Respiratory Complex)</option>
                <option value="egg-booster">Egg Booster WSP (Lay Rate Accelerator)</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#14532D]">
                <span>Water Tank Capacity:</span>
                <span className="font-display text-sm font-black text-[#166534]">
                  {tankLiters} Litres
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="1000"
                step="10"
                value={tankLiters}
                onChange={(e) => setTankLiters(Number(e.target.value))}
                className="w-full accent-[#166534] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-sans font-medium text-[#14532D]/50">
                <span>20L (Small tank)</span>
                <span>200L (Standard drum)</span>
                <span>500L (Polytank)</span>
                <span>1,000L (Commercial)</span>
              </div>
            </div>

            {/* Quick volume buttons */}
            <div className="flex items-center gap-2 flex-wrap pt-1">
              {[50, 100, 200, 500, 1000].map((liters) => (
                <button
                  key={liters}
                  onClick={() => setTankLiters(liters)}
                  className={`rounded-full px-3 py-1 text-xs font-display font-bold transition-all cursor-pointer ${
                    tankLiters === liters
                      ? 'bg-[#166534] text-white shadow-xs'
                      : 'bg-[#FAF9F5] text-[#14532D] hover:bg-[#F4F1EA] border border-[#EAE6DC]'
                  }`}
                >
                  {liters}L
                </button>
              ))}
            </div>
          </div>

          {/* Results Display Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-radial from-[#14532D] to-[#0E3B20] p-6 sm:p-8 text-white shadow-lg space-y-6">
              <div className="border-b border-white/15 pb-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#22C55E]">
                  Recommended Mixing Ratio
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black mt-1">
                  {selectedFormula.name}
                </h3>
                <p className="text-xs text-[#DCFCE7]/75 font-medium mt-0.5">
                  Standard Rate: {selectedFormula.ratePerLiter}
                </p>
              </div>

              {/* Huge Output Value */}
              <div className="rounded-2xl bg-white/10 p-5 border border-white/15 space-y-1 text-center">
                <span className="text-xs uppercase font-bold text-[#DCFCE7]/80">
                  Amount to Dissolve into {tankLiters}L of Clean Water:
                </span>
                <p className="font-display text-3xl sm:text-4xl font-black text-[#22C55E]">
                  {selectedFormula.calculate(tankLiters)}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#DCFCE7]/90">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span><strong>Treatment Course:</strong> {selectedFormula.duration}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#22C55E] shrink-0 mt-0.5" />
                  <span><strong>Clinical Purpose:</strong> {selectedFormula.purpose}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15 flex items-center justify-between">
                <Link
                  to={`/shop?q=${selectedFormula.ref}`}
                  className="inline-flex items-center gap-2 text-xs font-black text-[#22C55E] hover:underline"
                >
                  <span>Order this medicine in shop (Ref: #{selectedFormula.ref})</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Deep-Dive Farm Guides */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Veterinary Field Knowledge
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Best Practice Articles for Ghanaian Farmers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((art, idx) => {
            const Icon = art.icon
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#166534]/30 hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#166534]">
                        <Icon className="h-4 w-4 stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7]/60 px-2.5 py-1 rounded-full">
                        {art.category}
                      </span>
                    </div>
                    <span className="text-xs text-[#14532D]/60 font-medium">
                      {art.readTime}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl font-black text-[#14532D]">
                      {art.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#14532D]/80 block">
                      Core Field Rules:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#14532D]/85">
                      {art.keyTakeaways.map((rule, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#166534] shrink-0 mt-0.5" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={`/shop?category=${art.relatedCategory}`}
                  className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#166534] hover:text-[#14532D] pt-2 border-t border-[#FAF9F5]"
                >
                  <span>Browse related veterinary products</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* 4. Veterinary Medication FAQs */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-6">
        <div className="max-w-2xl space-y-1">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#166534]">
            <HelpCircle className="h-4 w-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Frequently Asked Veterinary & Product Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#FAF9F5] p-5 border border-[#EAE6DC] space-y-2"
            >
              <h4 className="font-display text-sm font-bold text-[#14532D]">
                {faq.q}
              </h4>
              <p className="text-xs text-[#14532D]/80 leading-relaxed font-medium">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
