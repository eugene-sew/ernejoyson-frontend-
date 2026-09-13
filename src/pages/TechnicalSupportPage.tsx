import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  Printer,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  HeartPulse,
  PhoneCall,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'

export const TechnicalSupportPage: React.FC = () => {
  const [flockType, setFlockType] = useState<'layers' | 'broilers'>('layers')

  const vaccinationSchedule = {
    layers: [
      {
        day: 'Day 1',
        age: 'Day-Old Arrival',
        disease: "Marek's Disease + Anti-Stress",
        method: 'Hatchery Sub-Q / Drinking Water',
        recommendedProduct: 'Joy Amino 100g + Glucose / Electrolytes',
        productRef: '7974',
        purpose: 'Rehydrate chicks after transit; kickstart gut flora and early immune response.',
        importance: 'Critical',
      },
      {
        day: 'Day 2 – 5',
        age: 'Early Brooding',
        disease: 'Early Chick Mortality & Bacterial Enteritis',
        method: 'Drinking Water',
        recommendedProduct: 'Emtrisul 100g or Doxy Tylo 100g + Joyvet AD3E',
        productRef: '8064 / 8063',
        purpose: 'Prevent salmonella, E. coli, and omphalitis (yolk sac infection) during brooding.',
        importance: 'High',
      },
      {
        day: 'Day 7 – 8',
        age: 'Week 1',
        disease: 'Newcastle Disease (1st Dose - Hitchner B1 / ND Clone)',
        method: 'Eye Drop or Clean Non-Chlorinated Water',
        recommendedProduct: 'Joyvet Multivitamin Pwd (post-vaccine stress relief)',
        productRef: '7976',
        purpose: 'First primary immunization against Newcastle virus.',
        importance: 'Critical',
      },
      {
        day: 'Day 10 – 12',
        age: 'Week 2',
        disease: 'Infectious Bursal Disease (Gumboro - 1st Dose / Intermediate Strain)',
        method: 'Drinking Water (skimmilk powder stabilizer)',
        recommendedProduct: 'Joyvet Vitamin AD3E pwd 100g',
        productRef: '8011',
        purpose: 'Protect the bursa of Fabricius from immunosuppression.',
        importance: 'Critical',
      },
      {
        day: 'Day 14 – 16',
        age: 'Week 2',
        disease: 'Coccidiosis Prevention (1st Prophylactic Window)',
        method: 'Drinking Water for 48 Hours',
        recommendedProduct: 'Ernzuril 2.5% 100ml or Erncox 20% 100g',
        productRef: '7980 / 7994',
        purpose: 'Knock out Eimeria tenella & necatrix oocysts before bloody droppings appear.',
        importance: 'High',
      },
      {
        day: 'Day 18 – 20',
        age: 'Week 3',
        disease: 'Newcastle Booster (ND Lasota)',
        method: 'Drinking Water',
        recommendedProduct: 'Joy Amino 100g (anti-stress before and after)',
        productRef: '7974',
        purpose: 'Consolidate mucosal and circulatory Newcastle immunity.',
        importance: 'Critical',
      },
      {
        day: 'Day 24 – 26',
        age: 'Week 4',
        disease: 'Gumboro Booster (IBD 2nd Dose)',
        method: 'Drinking Water',
        recommendedProduct: 'Livertonic Oral Solution 1L',
        productRef: '7987',
        purpose: 'Solidify lifetime humoral immunity before bursal involution.',
        importance: 'Critical',
      },
      {
        day: 'Day 30 – 35',
        age: 'Week 5',
        disease: 'Internal Parasite Cleanse (Deworming 1st Round)',
        method: 'Drinking Water or Feed',
        recommendedProduct: 'Ern-Leva 100g or Joyvet Albermectin pwd 100g',
        productRef: '7995 / 7972',
        purpose: 'Expel roundworms (Ascaridia galli) and cecal worms to maximize feed conversion.',
        importance: 'High',
      },
      {
        day: 'Day 42 – 49',
        age: 'Week 6 – 7',
        disease: 'Fowl Pox Vaccination + Debeaking Procedure',
        method: 'Wing Web Stab (Fowl Pox) / Debeaker (8041)',
        recommendedProduct: 'Vitamin K Soluble + Vitamin C pwd 100g',
        productRef: '8014',
        purpose: 'Prevent cutaneous dry pox; stop cannibalism and feather pecking with cauterization.',
        importance: 'High',
      },
      {
        day: 'Day 56 – 63',
        age: 'Week 8 – 9',
        disease: 'Infectious Coryza (1st Injection)',
        method: 'Subcutaneous or Intramuscular Injection',
        recommendedProduct: 'Bolai Penstrep 100ml / Continuous Syringe',
        productRef: '7929',
        purpose: 'Protect against Avibacterium paragallinarum (facial swelling and foul odor).',
        importance: 'High',
      },
      {
        day: 'Week 14 – 16',
        age: 'Point of Lay Prep',
        disease: 'Pre-Lay Booster & Mineral Bone Fortification',
        method: 'Feed & Water Routine',
        recommendedProduct: 'Egg Booster 1kg + More Eggs 1kg + Joyvet Mineral Block',
        productRef: '8055 / 8013 / 8038',
        purpose: 'Calcium-phosphorus equilibrium, oviduct development, and strong eggshell matrix.',
        importance: 'High',
      },
      {
        day: 'Every 6 Weeks',
        age: 'Throughout Lay',
        disease: 'Routine Deworming & Newcastle/IB In-Lay Boosters',
        method: 'Water / Feed Rotation',
        recommendedProduct: 'Ern-Leva kg / Albermectin kg + Joy Supa Combo kg',
        productRef: '7983 / 8105',
        purpose: 'Sustain peak lay percentage (85%+), prevent egg drop syndrome, and control worms.',
        importance: 'High',
      },
    ],
    broilers: [
      {
        day: 'Day 1',
        age: 'Day-Old Arrival',
        disease: "Marek's Disease + Anti-Stress Rehydration",
        method: 'Hatchery Sub-Q / Drinking Water',
        recommendedProduct: 'Joy Amino 100g + Glucose / Electrolytes',
        productRef: '7974',
        purpose: 'Immediate rehydration after transit; activate rapid yolk absorption and early appetite.',
        importance: 'Critical',
      },
      {
        day: 'Day 2 – 5',
        age: 'Early Brooding',
        disease: 'Early Mortality & Omphalitis Shield',
        method: 'Drinking Water',
        recommendedProduct: 'Emtrisul 100g or Doxy Tylo 100g + Joyvet AD3E',
        productRef: '8064 / 8063',
        purpose: 'Keep day-old mortality under 1% by suppressing hatchery-borne bacteria.',
        importance: 'High',
      },
      {
        day: 'Day 7 – 8',
        age: 'Week 1',
        disease: 'Newcastle Disease (ND Hitchner B1)',
        method: 'Eye Drop or Clean Water',
        recommendedProduct: 'Joyvet Multivitamin Pwd 100g',
        productRef: '7976',
        purpose: 'Primary Newcastle protection.',
        importance: 'Critical',
      },
      {
        day: 'Day 11 – 13',
        age: 'Week 2',
        disease: 'Gumboro Disease (IBD Intermediate)',
        method: 'Drinking Water',
        recommendedProduct: 'Joy Amino 100g',
        productRef: '7974',
        purpose: 'Prevent Gumboro bursal destruction and secondary respiratory outbreaks.',
        importance: 'Critical',
      },
      {
        day: 'Day 16 – 18',
        age: 'Week 3',
        disease: 'Newcastle Booster (ND Lasota)',
        method: 'Drinking Water',
        recommendedProduct: 'Joyvet Vitamin AD3E pwd 100g',
        productRef: '8011',
        purpose: 'Secondary booster protection lasting through broiler market slaughter age.',
        importance: 'Critical',
      },
      {
        day: 'Day 20 – 22',
        age: 'Week 3 – 4',
        disease: 'Coccidiosis Treatment & Weight Acceleration',
        method: 'Drinking Water for 48 Hours',
        recommendedProduct: 'Ernzuril 2.5% 100ml or Cocci Killer 1L',
        productRef: '7980 / 7990',
        purpose: 'Maintain healthy intestinal villi during peak feed intake to drive FCR under 1.6.',
        importance: 'High',
      },
      {
        day: 'Day 25 – 28',
        age: 'Week 4',
        disease: 'Gumboro 2nd Dose (If in High Challenge Area)',
        method: 'Drinking Water',
        recommendedProduct: 'Livertonic Oral Solution 1L + Probiotics 1kg',
        productRef: '7987 / 8009',
        purpose: 'Detoxify liver and maintain gut microflora during rapid muscle deposition.',
        importance: 'High',
      },
      {
        day: 'Day 30 – Finish',
        age: 'Week 5 – 7 (Finishing)',
        disease: 'Growth Booster & Heat Stress Management',
        method: 'Drinking Water / Feed',
        recommendedProduct: 'Growth Promoter 1kg / 2kg + Vitamin C Soluble Pwd',
        productRef: '8005 / 8007 / 8013',
        purpose: 'Reach 2.2kg - 2.8kg live market weight with solid breast meat and zero carcass blemishes.',
        importance: 'High',
      },
    ],
  }

  const currentSchedule = vaccinationSchedule[flockType]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Poultry Vaccination Schedule & Technical Farmer Support
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            Protecting your flock against Newcastle, Gumboro, and Coccidiosis starts with the right timing and genuine pharmaceutical potency. Use our verified Ghana schedule below and talk to our technical vets whenever you need guidance.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="#vaccination-chart"
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-xs sm:text-sm font-black text-[#0A2614] hover:bg-[#4ADE80] transition-colors shadow-sm"
            >
              <Calendar className="h-4 w-4" />
              <span>View Interactive Vaccination Chart</span>
            </a>
            <a
              href="https://wa.me/233244000000?text=Hello%20ERNEJOYSON%20Veterinary%20Support!%20I%20need%20help%20with%20a%20vaccination%20and%20medication%20question%20for%20my%20flock."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Veterinary Hotline</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Interactive Vaccination Chart Component */}
      <div id="vaccination-chart" className="scroll-mt-28 space-y-6">
        <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAE6DC] pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
                  <FileText className="h-4 w-4" />
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                  Standard Ghana Poultry Medication & Vaccination Schedule
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1">
                Calibrated for Ghana climatic conditions, brooding heat, and local disease pressure.
              </p>
            </div>

            {/* Flock Type Switcher + Print Button */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center rounded-full bg-[#FAF9F5] p-1 border border-[#EAE6DC]">
                <button
                  onClick={() => setFlockType('layers')}
                  className={`rounded-full px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                    flockType === 'layers'
                      ? 'bg-[#166534] text-white shadow-xs'
                      : 'text-[#14532D] hover:text-[#166534]'
                  }`}
                >
                  Commercial Layers & Pullets
                </button>
                <button
                  onClick={() => setFlockType('broilers')}
                  className={`rounded-full px-4 py-2 text-xs font-black transition-all cursor-pointer ${
                    flockType === 'broilers'
                      ? 'bg-[#166534] text-white shadow-xs'
                      : 'text-[#14532D] hover:text-[#166534]'
                  }`}
                >
                  Commercial Broilers
                </button>
              </div>

              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] px-4 py-2 text-xs font-bold transition-colors cursor-pointer"
                title="Print chart for farm noticeboard"
              >
                <Printer className="h-4 w-4 text-[#166534]" />
                <span>Print Schedule</span>
              </button>
            </div>
          </div>

          {/* Alert Callout on Vaccine Administration */}
          <div className="rounded-2xl bg-[#FEF3C7]/60 border border-amber-200/80 p-4 text-xs text-amber-950 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-0.5 font-medium">
              <strong className="font-extrabold text-amber-900 block">
                Crucial Veterinary Rule on Live Vaccines:
              </strong>
              <span>
                Always withdraw chlorinated tap water 24 hours prior to vaccine administration. Mix live vaccines (Newcastle & Gumboro) in clean borehole/well water with skim milk powder stabilizer. Administer vaccines early morning before 8:00 AM.
              </span>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#EAE6DC] bg-[#FAF9F5] text-[11px] font-black uppercase tracking-wider text-[#14532D]/70">
                  <th className="py-3.5 px-4 rounded-l-xl">Timeline</th>
                  <th className="py-3.5 px-4">Disease / Target</th>
                  <th className="py-3.5 px-4">Method</th>
                  <th className="py-3.5 px-4">Recommended Product (ERNEJOYSON)</th>
                  <th className="py-3.5 px-4 rounded-r-xl">Objective & Field Advice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FAF9F5]">
                {currentSchedule.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#DCFCE7]/20 transition-colors group"
                  >
                    <td className="py-4 px-4 font-mono font-bold text-[#14532D] whitespace-nowrap">
                      <span className="block text-xs font-black text-[#166534]">
                        {row.day}
                      </span>
                      <span className="text-[11px] text-[#14532D]/60 font-sans">
                        {row.age}
                      </span>
                    </td>

                    <td className="py-4 px-4 font-extrabold text-[#14532D]">
                      <span>{row.disease}</span>
                      {row.importance === 'Critical' && (
                        <span className="ml-2 inline-block rounded-full bg-red-100 text-red-800 text-[10px] font-black px-2 py-0.2">
                          Mandatory
                        </span>
                      )}
                    </td>

                    <td className="py-4 px-4 text-[#14532D]/80 font-medium whitespace-nowrap">
                      {row.method}
                    </td>

                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <span className="font-bold text-[#166534] block">
                          {row.recommendedProduct}
                        </span>
                        {row.productRef && (
                          <Link
                            to={`/shop?q=${row.productRef.split('/')[0].trim()}`}
                            className="inline-flex items-center gap-1 text-[10px] font-display font-bold bg-[#DCFCE7] text-[#14532D] px-2 py-0.5 rounded hover:bg-[#166534] hover:text-white transition-colors"
                          >
                            <span>View in Shop</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        )}
                      </div>
                    </td>

                    <td className="py-4 px-4 text-xs text-[#14532D]/80 font-medium max-w-xs sm:max-w-sm">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Schedule Footer Action */}
          <div className="pt-4 border-t border-[#EAE6DC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#14532D]">
              <ShieldCheck className="h-4 w-4 text-[#166534]" />
              <span>All mentioned pharmaceuticals and vitamins are in stock at Kasoa, Kumasi, Swedru & Nsawam.</span>
            </div>

            <Link
              to="/shop?category=antibiotics"
              className="inline-flex items-center gap-2 rounded-full bg-[#166534] text-white px-5 py-2.5 text-xs font-bold hover:bg-[#14532D] transition-colors shadow-sm shrink-0"
            >
              <span>Order Schedule Medications in Shop</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Three Pillars of Technical Support */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Professional Advisory Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            How Our Technical Team Supports Your Farm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-xs space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
              <HeartPulse className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h3 className="font-display text-lg font-black text-[#14532D]">
              Disease Diagnosis & Post-Mortem Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
              When mortalities spike or feed intake drops, don't guess which antibiotic to use. Send photos or bring bird post-mortem samples to our Kasoa or Kumasi desks for targeted diagnostic guidance.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-xs space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
              <Calendar className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h3 className="font-display text-lg font-black text-[#14532D]">
              Custom Medication & Vaccination Calendar
            </h3>
            <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
              We design specialized schedules for day-old chick brooding cycles, guinea fowl rearing, turkey breeding, and commercial pig farms with exact dilution formulas for your water tanks.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 shadow-xs space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534]">
              <PhoneCall className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h3 className="font-display text-lg font-black text-[#14532D]">
              Direct Phone & WhatsApp Support Line
            </h3>
            <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
              Need urgent dosage conversion for Joy Amino or Ernzuril in a 200-litre tank? Reach our seasoned veterinary technicians Monday through Saturday, 7:30 AM to 6:00 PM GMT.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Contact & Consultation Request Card */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-12 text-white shadow-xl border border-white/10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-black uppercase tracking-wider text-[#22C55E]">
            Connect with an ERNEJOYSON Vet
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black">
            Have a Sick Flock or Need Dosage Guidance?
          </h2>
          <p className="text-xs sm:text-sm text-[#DCFCE7]/85 font-medium">
            Contact our technical team directly. We support commercial poultry operators, smallholder farmers, and agro-dealers across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          <a
            href="https://wa.me/233244000000?text=Hello%20ERNEJOYSON%20Veterinary%20Support!%20I%20have%20an%20urgent%20flock%20health%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 p-4 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-[#0A2614] shrink-0 font-bold">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">WhatsApp Technical Line</p>
              <p className="text-[11px] text-[#DCFCE7]/80">+233 24 400 0000</p>
            </div>
          </a>

          <a
            href="tel:+233244000000"
            className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 p-4 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#166534] shrink-0 font-bold">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Direct Phone Call</p>
              <p className="text-[11px] text-[#DCFCE7]/80">Mon – Sat: 7:30 AM – 6:00 PM</p>
            </div>
          </a>

          <Link
            to="/locations"
            className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 p-4 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shrink-0 font-bold">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Visit Our Diagnostic Desks</p>
              <p className="text-[11px] text-[#DCFCE7]/80">Kasoa HQ • Kumasi • Swedru • Nsawam</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
