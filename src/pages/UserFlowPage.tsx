import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Truck,
  MessageSquare,
  ShieldCheck,
  CreditCard,
  Building2,
  Clock,
  Sparkles,
  Smartphone,
  ChevronRight,
  ExternalLink,
  Layers,
} from 'lucide-react'

interface FlowStep {
  number: string
  title: string
  subtitle: string
  actor: 'Farmer / Buyer' | 'ERNEJOYSON Dispatch' | 'Collaborative'
  timeEstimate: string
  description: string
  keyFeatures: string[]
  previewType: 'catalog' | 'cart' | 'whatsapp' | 'vet' | 'delivery'
}

export function UserFlowPage() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const steps: FlowStep[] = [
    {
      number: '01',
      title: 'Browse & Select Products',
      subtitle: 'Transparent Catalog with Direct Wholesale Pricing',
      actor: 'Farmer / Buyer',
      timeEstimate: '1 – 3 mins',
      description:
        'The farmer or farm manager explores the catalog of 100+ genuine veterinary products and poultry equipment. Filter by flock scale, drug category, or search directly by active ingredient.',
      keyFeatures: [
        'Direct Ghanaian Cedis (GHS) wholesale pricing displayed upfront',
        'Carton discounts & bulk threshold notes clearly indicated',
        'Real-time regional hub stock indicators (Kasoa, Kumasi, Swedru, Nsawam)',
        'Zero registration barrier — immediate access without account sign-up',
      ],
      previewType: 'catalog',
    },
    {
      number: '02',
      title: 'Configure Quantities & Review Cart',
      subtitle: 'Non-Blocking Cart with Real-Time Subtotal',
      actor: 'Farmer / Buyer',
      timeEstimate: '30 seconds',
      description:
        'Products are added silently with instant inline feedback so browsing is never interrupted. The slide-over cart drawer allows adjusting bird-scale quantities and reviewing estimated subtotals.',
      keyFeatures: [
        'Silent cart additions keep the farmer focused on their product list',
        'Automatic line-item subtotals calculated in GHS',
        'Identification of priced items vs large machinery requiring custom installation quotes',
        'Quick access from any page via the persistent header badge',
      ],
      previewType: 'cart',
    },
    {
      number: '03',
      title: 'One-Tap WhatsApp or B2B RFQ Dispatch',
      subtitle: 'Instant Itemized Transmission Without Forms',
      actor: 'Farmer / Buyer',
      timeEstimate: 'Instant (< 10s)',
      description:
        'With a single tap, the cart compiles an itemized order summary and opens WhatsApp directly with ERNEJOYSON sales. For commercial farms, a structured Proforma RFQ is submitted.',
      keyFeatures: [
        'Auto-compiled WhatsApp message with product names, quantities, and GHS total',
        'Direct channel to regional dispatchers and veterinary specialists',
        'Dual-track: Fast retail WhatsApp checkout or Formal B2B Proforma Invoice',
        'No credit card form drop-offs or forgotten passwords',
      ],
      previewType: 'whatsapp',
    },
    {
      number: '04',
      title: 'Veterinary Verification & Payment',
      subtitle: 'Technical Dose Confirmation & Mobile Money',
      actor: 'Collaborative',
      timeEstimate: '5 – 15 mins',
      description:
        'An ERNEJOYSON veterinary officer confirms product compatibility with the farmer flock age and water volume. Payment is confirmed via Ghanaian Mobile Money (MTN MoMo, Telecel) or Bank Transfer.',
      keyFeatures: [
        'Free technical dosage & application check before any medicine is shipped',
        'Convenient payment via MTN MoMo, Telecel Cash, or corporate bank transfer',
        'Official digital invoice & waybill receipt generated instantly',
        'Verification of closest fulfillment hub for fastest delivery',
      ],
      previewType: 'vet',
    },
    {
      number: '05',
      title: 'Same-Day Dispatch & Direct Farm Delivery',
      subtitle: 'Nationwide Waybills from 4 Regional Hubs',
      actor: 'ERNEJOYSON Dispatch',
      timeEstimate: 'Same-Day / Next-Day',
      description:
        'The order is picked and dispatched from the closest regional hub (Kasoa, Kumasi, Swedru, or Nsawam). Orders are loaded onto scheduled farm delivery trucks or commercial transit waybills across all 16 regions.',
      keyFeatures: [
        'Dispatched from the closest hub to reduce transport fees and transit stress on birds',
        'Driver contact and transit waybill number sent directly via WhatsApp',
        'Scheduled farm drop-offs for bulk equipment and large commercial deliveries',
        'Post-delivery technical follow-up by the veterinary support team',
      ],
      previewType: 'delivery',
    },
  ]

  const activeStep = steps[activeStepIndex]

  return (
    <div className="pt-24 pb-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-radial from-[#14532D] via-[#0E3B20] to-[#0A2614] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#DCFCE7] border border-white/10">
            <Sparkles className="h-3.5 w-3.5 text-[#22C55E]" />
            <span>Architecture & Experience Design</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            The ERNEJOYSON One Ordering Flow
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed max-w-2xl">
            Designed specifically for Ghanaian farmers, agro-vets, and commercial poultry managers.
            Zero login barriers, direct GHS wholesale pricing, technical veterinary validation, and fast regional dispatch from our 4 hubs.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-white/90">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
              <Clock className="h-3.5 w-3.5 text-[#22C55E]" />
              Order in &lt; 2 Minutes
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
              <Smartphone className="h-3.5 w-3.5 text-[#22C55E]" />
              WhatsApp & Mobile Money Native
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/10">
              <ShieldCheck className="h-3.5 w-3.5 text-[#22C55E]" />
              Verified by Technical Vets
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Flow Walkthrough */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#EAE6DC] pb-5">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
              STEP-BY-STEP ORDERING PIPELINE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D] mt-1">
              From Browse to Farm Delivery
            </h2>
          </div>
          <span className="text-xs font-semibold text-[#14532D]/70">
            Click any step to inspect the customer and back-office experience
          </span>
        </div>

        {/* Horizontal Step Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-[#14532D] text-white border-[#14532D] shadow-md scale-[1.02]'
                    : 'bg-white text-[#14532D] border-[#EAE6DC] hover:border-[#166534]/40 hover:bg-[#FAF9F5]'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-black mb-2">
                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center font-display text-xs ${
                      isActive ? 'bg-[#22C55E] text-[#0A2614]' : 'bg-[#FAF9F5] text-[#166534]'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider ${isActive ? 'text-[#DCFCE7]' : 'text-[#14532D]/50'}`}>
                    {step.timeEstimate}
                  </span>
                </div>
                <h3 className="font-display text-xs sm:text-sm font-bold line-clamp-1 leading-snug">
                  {step.title}
                </h3>
              </button>
            )
          })}
        </div>

        {/* Active Step Detailed Stage Card */}
        <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl font-black text-[#166534]">
                  Stage {activeStep.number}
                </span>
                <span className="rounded-full bg-[#DCFCE7] text-[#14532D] px-2.5 py-0.5 text-xs font-bold">
                  {activeStep.actor}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#14532D]">
                {activeStep.title}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#166534]">
                {activeStep.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#14532D]/80 leading-relaxed font-medium">
              {activeStep.description}
            </p>

            {/* Key Capabilities Bullet Points */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-[#14532D]/70 block">
                Key Experience Benefits:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#14532D]/90 font-medium">
                {activeStep.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#166534] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step Navigation Controls */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#FAF9F5]">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 rounded-full border border-[#EAE6DC] text-xs font-bold text-[#14532D] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#FAF9F5]"
              >
                &larr; Previous Stage
              </button>

              <button
                disabled={activeStepIndex === steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                className="px-5 py-2 rounded-full bg-[#166534] text-white text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#14532D] flex items-center gap-1.5"
              >
                <span>Next Stage</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Right Live Flow Visualizer Preview */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] p-6 sm:p-8 space-y-4 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">
                  Flow Simulation Preview
                </span>
                <span className="text-[11px] font-medium text-[#14532D]/60">
                  Step {activeStepIndex + 1} of 5
                </span>
              </div>

              {activeStep.previewType === 'catalog' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] shadow-xs flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=150&q=80"
                      alt="Product item"
                      className="h-14 w-14 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-bold text-[#166534] uppercase">Veterinary Pharmaceuticals</p>
                      <h4 className="font-display text-sm font-extrabold text-[#14532D] truncate">
                        Ernzuril 2.5% Toltrazuril 1L
                      </h4>
                      <p className="font-display text-sm font-black text-[#14532D]">GHS 380.00</p>
                    </div>
                    <span className="rounded-full bg-[#DCFCE7] text-[#14532D] text-[10px] font-black px-2 py-1">
                      In Stock
                    </span>
                  </div>
                  <div className="rounded-xl bg-white p-3 border border-[#EAE6DC] text-xs text-[#14532D]/80 flex items-center justify-between">
                    <span>Hubs Ready for Dispatch:</span>
                    <span className="font-bold text-[#166534]">Kasoa, Kumasi, Swedru, Nsawam</span>
                  </div>
                </div>
              )}

              {activeStep.previewType === 'cart' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] shadow-xs space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#14532D]">Ernzuril 2.5% 1L (x2)</span>
                      <span className="font-display font-black text-[#14532D]">GHS 760.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-[#14532D]">Automatic Bell Drinker (x5)</span>
                      <span className="font-display font-black text-[#14532D]">GHS 400.00</span>
                    </div>
                    <div className="pt-2 border-t border-[#FAF9F5] flex justify-between items-center">
                      <span className="text-xs font-bold text-[#14532D]">Estimated Subtotal:</span>
                      <span className="font-display text-base font-black text-[#166534]">GHS 1,160.00</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#14532D]/70 text-center font-medium">
                    Silent add-to-cart preserves browse context without jarring popups.
                  </p>
                </div>
              )}

              {activeStep.previewType === 'whatsapp' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-[#DCFCE7]/60 p-4 border border-[#86EFAC] text-xs space-y-2 font-mono text-[#14532D]">
                    <p className="font-bold font-sans text-xs text-[#166534] flex items-center gap-1.5">
                      <MessageSquare className="h-4 w-4" /> Pre-filled WhatsApp Payload:
                    </p>
                    <p>Hello ERNEJOYSON! I would like to place an order:</p>
                    <p className="bg-white/80 p-2 rounded-md leading-relaxed text-[11px]">
                      • 2x Ernzuril 2.5% (Ref: #7980) - GHS 760.00<br />
                      • 5x Automatic Bell Drinker (Ref: #8020) - GHS 400.00<br />
                      Total Estimated: GHS 1,160.00
                    </p>
                    <p className="text-[11px]">Farm Location: Kasoa / Swedru Belt</p>
                  </div>
                </div>
              )}

              {activeStep.previewType === 'vet' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] shadow-xs space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#166534] font-bold">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Veterinary Dose Verification Check</span>
                    </div>
                    <p className="text-[#14532D]/80">
                      Vet Officer checks target flock (e.g. 1,500 broilers, 3 weeks old) to confirm proper dilution rate (1ml/L) before shipping.
                    </p>
                    <div className="pt-2 border-t border-[#FAF9F5] flex items-center justify-between font-semibold">
                      <span className="flex items-center gap-1.5 text-[#14532D]">
                        <CreditCard className="h-3.5 w-3.5 text-[#166534]" />
                        MTN MoMo / Telecel Cash
                      </span>
                      <span className="text-[#166534] font-black">Ready for Confirmation</span>
                    </div>
                  </div>
                </div>
              )}

              {activeStep.previewType === 'delivery' && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-white p-4 border border-[#EAE6DC] shadow-xs space-y-2.5 text-xs">
                    <div className="flex items-center gap-2 text-[#166534] font-bold">
                      <Truck className="h-4 w-4" />
                      <span>Direct Hub Dispatch & Farm Waybill</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#EAE6DC]">
                        <p className="text-[#14532D]/60 font-semibold">Origin Hub:</p>
                        <p className="font-bold text-[#14532D]">Kumasi / Kasoa</p>
                      </div>
                      <div className="p-2 rounded-lg bg-[#FAF9F5] border border-[#EAE6DC]">
                        <p className="text-[#14532D]/60 font-semibold">Destination:</p>
                        <p className="font-bold text-[#14532D]">Direct Farm Gate</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#166534] font-bold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Same-Day Waybill Number Issued via WhatsApp
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 text-center">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-black text-[#166534] hover:underline"
                >
                  <span>Experience this live in the shop</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Flow Architecture Blueprint Diagram */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
            SYSTEM ARCHITECTURE
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D] mt-1">
            Dual-Track Ordering Architecture
          </h3>
          <p className="text-xs sm:text-sm text-[#14532D]/70 font-medium mt-1">
            How ERNEJOYSON handles individual farmers and commercial agribusiness accounts with zero friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Track A: Retail / Direct Farmer */}
          <div className="rounded-2xl bg-[#FAF9F5] p-6 border border-[#EAE6DC] space-y-4">
            <div className="flex items-center gap-2 text-sm font-black text-[#166534]">
              <Smartphone className="h-5 w-5" />
              <h4>Track A: Quick Farmer Ordering (B2C)</h4>
            </div>

            <ol className="space-y-3 text-xs text-[#14532D]/85 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Select veterinary bottles, feeders, drinkers, or vitamins in catalog.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Click &quot;Confirm Order via WhatsApp&quot; from the Cart Drawer.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Specialist verifies flock dosage & confirms payment via Mobile Money.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Same-day dispatch from Kasoa, Kumasi, Swedru, or Nsawam.</span>
              </li>
            </ol>
          </div>

          {/* Track B: Commercial Agribusiness / Agro-Vet Dealership */}
          <div className="rounded-2xl bg-[#FAF9F5] p-6 border border-[#EAE6DC] space-y-4">
            <div className="flex items-center gap-2 text-sm font-black text-[#166534]">
              <Building2 className="h-5 w-5" />
              <h4>Track B: Commercial & Agro-Vet Wholesale (B2B)</h4>
            </div>

            <ol className="space-y-3 text-xs text-[#14532D]/85 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                <span>Configure bulk requirements (carton-level drugs, automated machinery lines).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                <span>Submit structured RFQ via the B2B portal with flock scale details.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                <span>Formal Proforma Invoice generated with corporate credit terms or bulk tiers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-[#DCFCE7] text-[#166534] font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                <span>Dedicated truck waybill with scheduled direct farm gate delivery.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* 4. Comparison Table: Why the One Ordering Flow Wins */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#166534]">
            USER EXPERIENCE BENCHMARK
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D] mt-1">
            Why ERNEJOYSON One Ordering Flow is Better
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left">
            <thead>
              <tr className="border-b border-[#EAE6DC] text-[#14532D]/60 uppercase text-[11px] font-black">
                <th className="pb-3">Experience Factor</th>
                <th className="pb-3 text-red-700">Traditional Ag Marketplace</th>
                <th className="pb-3 text-[#166534]">ERNEJOYSON One Flow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#FAF9F5] font-medium text-[#14532D]">
              <tr>
                <td className="py-3 font-bold">Account Registration</td>
                <td className="py-3 text-red-600">Mandatory passwords & accounts (high drop-off)</td>
                <td className="py-3 text-[#166534] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Zero signup required — instant access
                </td>
              </tr>
              <tr>
                <td className="py-3 font-bold">Veterinary Validation</td>
                <td className="py-3 text-red-600">None — blind ordering risking flock toxicity</td>
                <td className="py-3 text-[#166534] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Technical vet dose checks before dispatch
                </td>
              </tr>
              <tr>
                <td className="py-3 font-bold">Pricing Transparency</td>
                <td className="py-3 text-red-600">Hidden markups, USD currencies, unexpected fees</td>
                <td className="py-3 text-[#166534] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Direct GHS wholesale pricing with carton tiers
                </td>
              </tr>
              <tr>
                <td className="py-3 font-bold">Checkout Method</td>
                <td className="py-3 text-red-600">Complex multi-page credit card forms</td>
                <td className="py-3 text-[#166534] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> 1-Tap WhatsApp & Ghana Mobile Money native
                </td>
              </tr>
              <tr>
                <td className="py-3 font-bold">Regional Fulfillment</td>
                <td className="py-3 text-red-600">Single overseas port or slow drop-shipping</td>
                <td className="py-3 text-[#166534] font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" /> Same-day waybill from 4 physical Ghana hubs
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Live Call-to-Action */}
      <div className="rounded-3xl bg-gradient-to-r from-[#14532D] via-[#0E3B20] to-[#14532D] p-8 sm:p-12 text-white text-center shadow-xl space-y-6">
        <h3 className="font-display text-2xl sm:text-4xl font-black">
          Ready to Experience the One Ordering Flow?
        </h3>
        <p className="text-xs sm:text-base text-[#DCFCE7]/85 max-w-xl mx-auto font-medium">
          Browse 100+ items, configure your farm needs, and receive genuine veterinary products delivered directly to your gate.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-8 py-4 text-sm font-extrabold text-[#0E3B20] shadow-xl hover:bg-[#DCFCE7] transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingBag className="h-4.5 w-4.5" />
            <span>Start Shopping Catalog</span>
          </Link>

          <Link
            to="/b2b"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 text-sm font-bold text-white transition-all"
          >
            <Layers className="h-4.5 w-4.5" />
            <span>Commercial B2B Portal</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
