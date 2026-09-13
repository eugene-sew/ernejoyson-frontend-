import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Building2,
  PackageCheck,
  Truck,
  CheckCircle2,
  FileSpreadsheet,
  ArrowRight,
  Send,
  MessageSquare,
  PhoneCall,
  Check,
} from 'lucide-react'

export const B2bPage: React.FC = () => {
  const [farmType, setFarmType] = useState('Commercial Poultry Farm')
  const [selectedProductCategory, setSelectedProductCategory] = useState('feeders')
  const [quantityTarget, setQuantityTarget] = useState('Carton / Pallet (30+ units)')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [farmLocation, setFarmLocation] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmitRfq = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setContactName('')
      setContactPhone('')
      setFarmLocation('')
      setAdditionalNotes('')
    }, 4000)
  }

  const wholesaleTiers = [
    {
      title: 'Commercial Farm Tier (30+ Units)',
      badge: 'Immediate Bulk Savings',
      discount: 'Volume Discounts Applied',
      description:
        'For poultry producers managing 1,000 to 10,000 birds needing feeders, drinkers, and routine antibiotic/vitamin replenishment.',
      benefits: [
        'Special 30+ unit price (e.g. De-bird 2kg at GHS 60.00 vs GHS 65.00)',
        'Free scheduled delivery to farm gate across Greater Accra & Central',
        'Direct consultation with an ERNEJOYSON technical veterinary officer',
        'Consignment priority during peak festive stocking seasons',
      ],
    },
    {
      title: 'Agro-Vet Dealer & Retailer Partner',
      badge: 'Distribution Partnership',
      discount: 'Wholesale Distributor Rates',
      description:
        'For licensed agro-veterinary shops, pharmacy dispensaries, and input retailers across Ghana looking for reliable imported lines.',
      benefits: [
        'Carton and master-case wholesale distributor pricing',
        'Official point-of-sale branding materials & marketing brochures',
        'Full manufacturer Certificates of Analysis (COA) for all drugs',
        'Consistent stock replenishment from our 4 central & regional hubs',
      ],
    },
    {
      title: 'Enterprise Turnkey Project Supply',
      badge: 'Infrastructure & Mechanization',
      discount: 'Custom Proforma Invoice',
      description:
        'For newly establishing or expanding farm facilities requiring automated drinking lines, debeakers, plucking machines, and gas brooders.',
      benefits: [
        'Site inspection and equipment dimensioning assistance',
        'Pre-assembly and pressure testing of automatic drinking systems',
        'Hands-on technical staff training on machinery operation',
        'Spare parts availability (heating elements, blades, valves)',
      ],
    },
  ]

  const bulkStockHighlights = [
    { name: 'Chick Tray (Ref: #8066)', pack: 'Carton of 50 pcs', category: 'Feeders' },
    { name: 'Feeder 6kg (Ref: #8043)', pack: 'Bundle of 20 pcs', category: 'Feeders' },
    { name: 'Manual Drinker 11L (Ref: #8040)', pack: 'Master Pack 10 pcs', category: 'Drinkers' },
    { name: 'Automatic Bell Drinkers (Ref: #8020)', pack: 'Crate of 10 pcs', category: 'Drinkers' },
    { name: 'Joy Amino 1kg (Ref: #7982)', pack: 'Box of 12 pcs', category: 'Vitamins' },
    { name: 'Erncox 20% 1kg (Ref: #7998)', pack: 'Case of 10 pcs', category: 'Anti-Parasitics' },
    { name: 'Doxy Tylo 1kg (Ref: #7985)', pack: 'Case of 10 pcs', category: 'Antibiotics' },
    { name: 'Transport Crate Large (Ref: #8079)', pack: 'Stack of 10 / 20 pcs', category: 'Equipment' },
  ]

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* 1. Hero Header */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#DCFCE7] border border-white/10">
            <Building2 className="h-3.5 w-3.5 text-[#22C55E]" />
            <span>Commercial & Wholesale Division</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Direct Import B2B Supply for Commercial Farms & Agro-Vets
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            Eliminate middleman markups and expired stocks. As a direct Ghanaian importer, ERNEJOYSON provides carton-level pricing, consistent year-round supply, and scheduled regional delivery for commercial poultry operations and certified retail partners.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-white/90">
            <div className="flex items-center gap-2">
              <PackageCheck className="h-4 w-4 text-[#22C55E]" />
              <span>Full Master Carton & Pallet Sourcing</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-[#22C55E]" />
              <span>Direct Bulk Farm Gate Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="h-4 w-4 text-[#22C55E]" />
              <span>Formal VAT / Proforma Invoices Issued</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. B2B Wholesale Tiers */}
      <div className="space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Commercial Programs
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Tailored Wholesale & Enterprise Terms
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {wholesaleTiers.map((tier, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#166534]/30 hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#14532D]/70">
                    {tier.discount}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-black text-[#14532D]">
                    {tier.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#FAF9F5]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]/70 block">
                    Key Wholesale Advantages:
                  </span>
                  <ul className="space-y-2 text-xs text-[#14532D]/85">
                    {tier.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#166534] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#rfq-form"
                className="flex items-center justify-center gap-2 rounded-full bg-[#FAF9F5] hover:bg-[#166534] text-[#14532D] hover:text-white py-3 px-4 text-xs font-bold border border-[#EAE6DC] transition-all"
              >
                <span>Request {tier.title.split(' ')[0]} Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Fast Moving Bulk Pack Items Matrix */}
      <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE6DC] pb-4">
          <div>
            <h3 className="font-display text-xl font-black text-[#14532D]">
              Popular Commercial & Master Carton Lines
            </h3>
            <p className="text-xs text-[#14532D]/70 font-medium">
              High-demand products with standard packaging configurations ready for volume ordering
            </p>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold text-[#166534] hover:underline"
          >
            Explore all 100+ items &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bulkStockHighlights.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-[#FAF9F5] p-4 border border-[#EAE6DC] space-y-1.5"
            >
              <span className="text-[10px] font-bold text-[#166534] uppercase tracking-wider block">
                {item.category}
              </span>
              <h4 className="font-display text-sm font-bold text-[#14532D]">
                {item.name}
              </h4>
              <p className="text-xs text-[#14532D]/70 font-medium">
                Standard Packaging: <strong>{item.pack}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Structured B2B Request for Quote (RFQ) Form */}
      <div id="rfq-form" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-[#166534]">
            Official Procurement Desk
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Request a Formal B2B Proforma Invoice
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium leading-relaxed">
            Fill out the request form with your farm volume requirements. Our corporate accounts team will prepare an itemized proforma invoice including quantity discounts and estimated transit timeline within 2 business hours.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-[#EAE6DC] text-xs font-semibold text-[#14532D]">
              <PhoneCall className="h-5 w-5 text-[#166534] shrink-0" />
              <div>
                <span>Corporate Sales Hotline:</span>
                <a href="tel:+233244000000" className="block font-mono font-bold text-[#166534] text-sm">
                  +233 24 400 0000
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-[#EAE6DC] text-xs font-semibold text-[#14532D]">
              <MessageSquare className="h-5 w-5 text-[#166534] shrink-0" />
              <div>
                <span>Fast WhatsApp B2B Support:</span>
                <a
                  href="https://wa.me/233244000000?text=Hello%20ERNEJOYSON%20Corporate%20Sales!%20I%20would%20like%20to%20request%20a%20commercial%20B2B%20quotation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-bold text-[#166534] hover:underline"
                >
                  Chat with Wholesale Rep &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-md">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
                  <Check className="h-8 w-8 stroke-[2.5]" />
                </div>
                <h3 className="font-display text-2xl font-black text-[#14532D]">
                  RFQ Successfully Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#14532D]/75 max-w-md mx-auto font-medium">
                  Thank you, <strong>{contactName || 'Valued Farmer'}</strong>. Our B2B sales desk is reviewing your requirements and will contact you via phone or WhatsApp with your formal quotation shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitRfq} className="space-y-4">
                <h3 className="font-display text-lg font-black text-[#14532D] border-b border-[#EAE6DC] pb-3">
                  Enterprise Quotation Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#14532D]">
                      Full Name / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Kwesi Mensah"
                      className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#14532D]">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="e.g. 024 400 0000"
                      className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#14532D]">
                      Operation Type
                    </label>
                    <select
                      value={farmType}
                      onChange={(e) => setFarmType(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-bold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none bg-white"
                    >
                      <option value="Commercial Poultry Farm">Commercial Poultry Farm</option>
                      <option value="Agro-Veterinary Retailer">Agro-Veterinary Retailer</option>
                      <option value="Feed Mill / Livestock Project">Feed Mill / Livestock Project</option>
                      <option value="Institutional Buyer">Institutional Buyer</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#14532D]">
                      Farm / Shop Location (Town & Region) *
                    </label>
                    <input
                      type="text"
                      required
                      value={farmLocation}
                      onChange={(e) => setFarmLocation(e.target.value)}
                      placeholder="e.g. Dormaa Ahenkro, Bono Region"
                      className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#14532D]">
                      Primary Product Category of Interest
                    </label>
                    <select
                      value={selectedProductCategory}
                      onChange={(e) => setSelectedProductCategory(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-bold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none bg-white"
                    >
                      <option value="feeders">Feeders (Chick trays, 6kg, 12kg, Compacta)</option>
                      <option value="drinkers">Drinkers (Manual 5L/11L, Automatic Bell)</option>
                      <option value="antibiotics">Veterinary Antibiotics & Therapeutics</option>
                      <option value="vitamins">Vitamins, Amino Acids & Boosters</option>
                      <option value="equipment">Machinery (Debeakers, Brooders, Pluckers)</option>
                      <option value="all">Mixed Full Farm Package</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#14532D]">
                      Target Order Volume
                    </label>
                    <select
                      value={quantityTarget}
                      onChange={(e) => setQuantityTarget(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-bold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none bg-white"
                    >
                      <option value="Carton / Pallet (30+ units)">Carton / Bulk (30+ units)</option>
                      <option value="Master Case Wholesale">Master Case Wholesale (100+ units)</option>
                      <option value="Full Container / Turnkey Project">Full Container / Turnkey Farm Project</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#14532D]">
                    Item List & Specific Inquiries
                  </label>
                  <textarea
                    rows={3}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="List specific product reference codes (e.g. #8066, #8020, #7982) and approximate quantities needed..."
                    className="w-full p-3.5 rounded-xl border border-[#EAE6DC] text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white py-3 px-6 text-xs sm:text-sm font-black transition-all shadow-md active:scale-[0.99] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit RFQ to Commercial Sales Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
