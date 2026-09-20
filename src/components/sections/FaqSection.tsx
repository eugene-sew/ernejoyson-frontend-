import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Truck,
  Building2,
  PackageCheck
} from 'lucide-react'

interface FaqItem {
  id: string
  question: string
  answer: string
  tag: string
  icon: typeof PackageCheck
}

const faqs: FaqItem[] = [
  {
    id: 'where-to-buy',
    question: 'Where can I buy poultry equipment in Ghana?',
    answer:
      'Ernejoyson Company Limited supplies poultry and livestock equipment through our physical branches in Kasoa (Head Office), Kumasi, Swedru, and Nsawam. We also provide daily nationwide waybill distribution, shipping equipment safely to farmers across all 16 regions of Ghana.',
    tag: 'Distribution',
    icon: Truck,
  },
  {
    id: 'equipment-types',
    question: 'What poultry equipment does Ernejoyson supply?',
    answer:
      'Our poultry and livestock inventory includes automated and manual feeding & drinking systems (bell drinkers, nipple drinkers, linear feeders), poultry slaughtering and defeathering equipment, durable transport crates & egg trays, feed processing machinery (crushers, hammer mills, mixers, pelletizers), and commercial egg incubators & hatchery gear.',
    tag: 'Equipment',
    icon: PackageCheck,
  },
  {
    id: 'poultry-drugs',
    question: 'Where can I get certified poultry drugs in Ghana?',
    answer:
      'Ernejoyson supplies approved veterinary pharmaceuticals and animal health products. Our portfolio includes nutritional vitamin supplements, broad-spectrum therapeutic antibiotics, anti-parasitics, anthelmintics (dewormers), electrolytes, and preventive biosecurity disinfectants sourced from trusted global manufacturers.',
    tag: 'Veterinary Drugs',
    icon: ShieldCheck,
  },
  {
    id: 'livestock-equipment',
    question: 'Does Ernejoyson supply livestock equipment beyond poultry?',
    answer:
      'Yes. In addition to poultry systems, Ernejoyson supplies livestock handling gear, heavy-duty drinking troughs, ear tagging tools, castration kits, veterinary syringes, and healthcare formulations for cattle, piggery, sheep, goat, and rabbit farming operations.',
    tag: 'Livestock',
    icon: HelpCircle,
  },
  {
    id: 'branch-locations',
    question: 'Where are Ernejoyson branches located?',
    answer:
      'Ernejoyson currently operates four primary hubs:\n• Kasoa (Head Office & central warehouse, Greater Accra/Central border)\n• Kumasi (serving Ashanti, Bono, and the Northern corridor)\n• Agona Swedru (serving Central Region farming communities)\n• Nsawam (serving key poultry corridors in the Eastern Region)\nWalk-ins, on-site technical consultations, and same-day dispatch are available at all locations.',
    tag: 'Branches',
    icon: Building2,
  },
  {
    id: 'nationwide-delivery',
    question: 'How do deliveries and order fulfillment work across Ghana?',
    answer:
      'You can place an order directly through our website catalog, by phone, or at any branch. For customers outside our branch cities, we package items securely and dispatch via registered regional transport stations (GPRTU, VIP, OA, etc.) with waybill tracking numbers sent directly to your phone for convenient pick-up.',
    tag: 'Delivery',
    icon: Truck,
  },
]

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('where-to-buy')

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full">
      <div className="rounded-3xl bg-[#FAF9F5] border border-[#EAE6DC] p-6 sm:p-10 lg:p-14 shadow-sm">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#EAE6DC]">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-3.5 py-1 text-xs font-bold text-[#166534]">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14532D] leading-[1.15]">
              Everything You Need to Know About Ernejoyson.
            </h2>
            
            <p className="text-sm sm:text-base text-[#14532D]/75 font-medium leading-relaxed">
              Find quick answers regarding our poultry equipment, certified veterinary pharmaceuticals, branch locations, and nationwide delivery across Ghana.
            </p>
          </div>

          {/* Quick Help Card */}
          <div className="bg-white rounded-2xl p-5 border border-[#EAE6DC] shadow-xs flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[280px]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534] shrink-0">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#14532D]/60 uppercase tracking-wider">Have specific questions?</p>
                <p className="text-sm font-black text-[#14532D]">059 670 9226 / 024 160 4926</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold text-[#166534] hover:text-[#14532D] hover:underline pt-1"
            >
              <span>Learn more about our company profile</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Accordion List */}
        <div className="mt-8 divide-y divide-[#EAE6DC]">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id
            const Icon = faq.icon

            return (
              <div
                key={faq.id}
                className="transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 sm:py-6 flex items-start sm:items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 pr-2">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#EAE6DC]/60 text-xs font-bold text-[#166534] group-hover:bg-[#DCFCE7] transition-colors">
                      0{index + 1}
                    </span>
                    <div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#166534]/80 mb-0.5">
                        <Icon className="h-3 w-3 text-[#166534]" />
                        <span>{faq.tag}</span>
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? 'text-[#166534]' : 'text-neutral-900 group-hover:text-[#166534]'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 ${
                    isOpen
                      ? 'border-[#166534] bg-[#166534] text-white rotate-180'
                      : 'border-[#D1D5DB] bg-white text-neutral-600 group-hover:border-[#166534] group-hover:text-[#166534]'
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Answer container */}
                <div
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-10 sm:pl-12 pr-4 sm:pr-10 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal whitespace-pre-line border-l-2 border-[#166534]/30 ml-3.5 sm:ml-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Support Prompt */}
        <div className="mt-10 pt-8 border-t border-[#EAE6DC] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/70 rounded-2xl p-5 sm:p-6 border border-[#EAE6DC]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="h-10 w-10 rounded-full bg-[#166534] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#14532D]">Need tailored advice for your farm or commercial project?</p>
              <p className="text-xs text-neutral-600">Our veterinary and technical teams can help you choose the exact equipment and medication schedules.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/b2b"
              className="rounded-full bg-[#166534] px-5 py-2.5 text-xs font-extrabold text-white hover:bg-[#14532D] transition-colors shadow-xs"
            >
              Request Bulk Quote
            </Link>
            <Link
              to="/locations"
              className="rounded-full border border-[#D1D5DB] bg-white px-4 py-2.5 text-xs font-extrabold text-[#14532D] hover:bg-neutral-50 transition-colors"
            >
              Find a Branch
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
