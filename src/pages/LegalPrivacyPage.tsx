import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  FileText,
  Cookie,
  AlertTriangle,
  Scale,
  Lock,
  PhoneCall,
  Mail,
  SlidersHorizontal
} from 'lucide-react'

type TabType = 'privacy' | 'terms' | 'cookies' | 'compliance'

export function LegalPrivacyPage() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<TabType>('privacy')

  // Auto-switch tab based on URL path or hash
  useEffect(() => {
    const path = location.pathname.toLowerCase()
    const hash = location.hash.toLowerCase()

    if (path.includes('terms') || hash.includes('terms')) {
      setActiveTab('terms')
    } else if (path.includes('cookie') || hash.includes('cookie')) {
      setActiveTab('cookies')
    } else if (path.includes('compliance') || hash.includes('compliance')) {
      setActiveTab('compliance')
    } else {
      setActiveTab('privacy')
    }
  }, [location])

  const openCookiePreferences = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'))
  }

  return (
    <div className="pt-24 pb-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header Banner */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#86efac] text-xs font-bold uppercase tracking-wider">
            <Scale className="h-3.5 w-3.5" />
            <span>Official Legal & Regulatory Framework</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
            Privacy, Commercial Terms &amp; Regulatory Governance
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            ERNEJOYSON Company Limited operates under strict compliance with Ghanaian commercial laws, the Data Protection Act (Act 843), EPA agrochemical regulations, and transparent farmer supply agreements.
          </p>

          <div className="pt-1 flex items-center gap-4 text-xs text-[#DCFCE7]/70 font-mono">
            <span>Last Reviewed: October 2026</span>
            <span>•</span>
            <span>Jurisdiction: Republic of Ghana</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#EAE6DC]">
        {[
          { id: 'privacy', label: 'Privacy Policy', icon: Lock },
          { id: 'terms', label: 'Terms of Supply & Orders', icon: FileText },
          { id: 'cookies', label: 'Cookie & Data Storage', icon: Cookie },
          { id: 'compliance', label: 'EPA & Chemical Safety', icon: AlertTriangle },
        ].map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-[#166534] text-white shadow-sm'
                  : 'bg-white text-[#14532D] hover:bg-[#FAF9F5] border border-[#EAE6DC]'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-[#86efac]' : 'text-[#166534]'}`} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>

      {/* Main Content Sections */}
      <div className="bg-white rounded-3xl border border-[#EAE6DC] p-6 sm:p-10 shadow-xs space-y-10 text-sm leading-relaxed text-[#14532D]/90">
        {/* TAB 1: PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
                Data Protection Act, 2012 (Act 843)
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D] mt-1">
                Privacy &amp; Data Protection Policy
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Data Controller: ERNEJOYSON Company Limited (Kasoa &amp; Kumasi Hubs, Ghana)
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                1. Information We Collect
              </h3>
              <p>
                When you use the ERNEJOYSON online shop, request B2B wholesale quotations, or order farm inputs for depot dispatch, we collect only the information necessary to fulfill your agricultural commercial orders:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li>
                  <strong>Contact Identification:</strong> Full name, farm enterprise or cooperative name, mobile phone number, and email address.
                </li>
                <li>
                  <strong>Logistics &amp; Delivery Destination:</strong> Regional location (e.g. Kumasi, Kasoa, Sunyani, Goaso, Swedru, Nsawam, Techiman), physical landmark address, Ghana Post GPS digital address, and cargo driver notes.
                </li>
                <li>
                  <strong>Transaction References:</strong> Paystack transaction reference codes, payment status (PAID/PENDING), chosen channel (MTN MoMo, Telecel Cash, AT Money, or Bank Card), and purchased product line items. <em>We do not store your raw Mobile Money PINs or credit card CVVs on our servers.</em>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                2. How Your Data Is Used
              </h3>
              <p>Your personal and farm details are processed strictly for legitimate agricultural trade purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li>Fulfilling orders and issuing official regional consignment waybills.</li>
                <li>Conducting voice-call verification with customers prior to long-haul truck dispatch.</li>
                <li>Providing veterinary and agronomic follow-up advisory on proper product usage.</li>
                <li>Maintaining customer purchase histories for commercial volume discounts.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                3. No Third-Party Selling
              </h3>
              <p>
                ERNEJOYSON Company Limited does not sell, rent, or lease farmer or distributor contact lists to third-party marketing companies. Data is shared exclusively with certified transport carriers (e.g., VIP Express Cargo, commercial freight drivers) solely to complete physical package handovers at designated regional terminals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                4. Data Security &amp; Retention
              </h3>
              <p>
                All web traffic, customer records, and transaction payloads are transmitted over 256-bit TLS encryption. Access to our internal administration portal is restricted by multi-layered JSON Web Token (JWT) credentials and role-based permissions.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: TERMS OF SUPPLY */}
        {activeTab === 'terms' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
                Commercial Operations &amp; Fulfillment
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D] mt-1">
                Terms of Commercial Supply &amp; Waybill Dispatch
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Standard terms applicable to retail purchases, wholesale orders, and depot collections.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                1. Order Placement &amp; Pricing
              </h3>
              <p>
                All prices listed in our catalog are in Ghana Cedis (GH₵). While we strive for immediate stock accuracy across our 100+ inventory catalog, agricultural product prices may periodically adjust based on international import freight and currency shifts. Confirmed and paid orders are price-locked.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                2. Regional Depot Fulfillment &amp; Waybills
              </h3>
              <p>
                ERNEJOYSON operates a consolidated distribution network across Ghana. Orders may be fulfilled via:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-neutral-700">
                <li>
                  <strong>Direct Depot Pickup:</strong> Self-collection at our Kumasi Central Depot, Kasoa HQ, Sunyani, Techiman, Goaso, or Swedru branches during operational hours (Mon – Sat: 7:30 AM – 6:00 PM GMT).
                </li>
                <li>
                  <strong>Waybill Consignment:</strong> Goods dispatched via authorized long-haul freight carriers. The official waybill number (e.g., WB-XXXX) is provided to the customer via SMS/call to facilitate terminal collection.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                3. Customer Inspection at Handover
              </h3>
              <p>
                Due to the sensitive nature of veterinary pharmaceuticals, live vaccines, and agrochemicals, customers are required to inspect package seals, expiry dates, and bottle integrity upon collection before signing the carrier manifest.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                4. Payment Processing
              </h3>
              <p>
                Online orders are processed securely on the platform using the Paystack Ghana gateway. Contact phone numbers and email addresses displayed on the platform are provided strictly for technical consultations and logistics coordination.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: COOKIES & STORAGE */}
        {activeTab === 'cookies' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
                Storage Governance
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D] mt-1">
                Cookie &amp; Local Storage Policy
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                How we store preferences, shopping cart data, and session integrity on your device.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                1. What Are Cookies &amp; Local Storage?
              </h3>
              <p>
                Cookies and browser local storage are small text fragments stored on your device that enable our web application to recognize your session, remember your selected products, and preserve your preferred distribution hub.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                2. Categories of Storage We Use
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#14532D]">Essential Storage</h4>
                    <span className="text-[10px] font-mono bg-[#166534] text-white px-2 py-0.5 rounded-full font-bold">
                      Always Active
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Maintains your shopping cart items across page changes, preserves active order state, verifies secure Paystack checkout callbacks, and ensures admin login sessions remain authenticated.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#14532D]">Performance &amp; Analytics</h4>
                    <span className="text-[10px] font-mono bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded-full font-bold">
                      Optional
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">
                    Captures anonymous load times, network latency across Ghana telecom providers, and search performance to help our engineering team optimize speed.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#DCFCE7]/40 border border-[#86EFAC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#14532D] text-sm">Manage Your Cookie Preferences</h4>
                <p className="text-xs text-[#14532D]/75 mt-0.5">
                  You can modify or withdraw non-essential storage consent at any moment.
                </p>
              </div>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white font-bold text-xs transition-colors shrink-0 shadow-sm cursor-pointer"
              >
                <SlidersHorizontal className="h-4 w-4 text-[#86efac]" />
                <span>Adjust Cookie Settings</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: EPA & CHEMICAL COMPLIANCE */}
        {activeTab === 'compliance' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-amber-800">
                Safety &amp; Regulatory Standards
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D] mt-1">
                EPA Ghana &amp; Veterinary Agrochemical Safety
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                Compliance with Environmental Protection Agency Act (Act 490) and FDA Ghana regulations.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 space-y-1">
                <strong className="block font-bold">Mandatory Farmer Advisory:</strong>
                <span>
                  All agrochemicals (insecticides, fungicides, herbicides) and veterinary antibiotics sold by ERNEJOYSON Company Limited must be handled strictly according to manufacturer label specifications. Always wear personal protective equipment (goggles, respirator masks, chemical gloves, and gumboots) during spray preparation.
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                1. Dilution &amp; Dosage Strictness
              </h3>
              <p>
                Over-dilution causes ineffective pest/disease resistance, while under-dilution risks crop scorching and poultry toxicity. Utilize our free online water-tank dosage calculator or consult our resident agronomists at Kasoa or Kumasi desks before spraying unfamiliar compounds.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                2. Pre-Harvest Intervals (PHI) &amp; Withdrawal Periods
              </h3>
              <p>
                Commercial vegetable, cocoa, and fruit farmers must observe mandatory Pre-Harvest Intervals (PHI) between the final chemical spray and crop harvest. Similarly, poultry and livestock producers must observe medication withdrawal periods before slaughtering or marketing eggs/meat.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-[#14532D]">
                3. Disposal of Chemical Containers
              </h3>
              <p>
                In compliance with EPA Ghana environmental guidelines, empty chemical containers must be triple-rinsed, punctured at the bottom to prevent reuse as drinking containers, and disposed of at certified agricultural waste points.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Direct Contact Card for Legal Inquiries */}
      <div className="rounded-3xl bg-[#FAF9F5] border border-[#EAE6DC] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display font-extrabold text-[#14532D] text-lg">
            Questions Regarding Our Legal Terms or Data Handling?
          </h3>
          <p className="text-xs text-[#14532D]/75">
            Contact our corporate compliance and customer operations desk in Kasoa or Kumasi.
          </p>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <a
            href="mailto:legal@ernejoyson.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-white/80 border border-[#EAE6DC] text-xs font-bold text-[#14532D] transition-colors shadow-xs"
          >
            <Mail className="h-4 w-4 text-[#166534]" />
            <span>legal@ernejoyson.com</span>
          </a>
          <a
            href="tel:0596709226"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white text-xs font-bold transition-colors shadow-sm"
          >
            <PhoneCall className="h-4 w-4 text-[#86efac]" />
            <span>059 670 9226</span>
          </a>
        </div>
      </div>
    </div>
  )
}
