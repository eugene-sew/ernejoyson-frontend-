import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall, CheckCircle2, Building, Package, RefreshCw, FileCheck, Layers, Send, Download } from 'lucide-react'
import vaccinationChartPdf from '@/assets/ERNEJOYSON VACCINATION CHART.pdf'

export function B2bSection() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    phone: '',
    location: '',
    interest: 'Veterinary Pharmaceuticals',
  })

  const features = [
    { name: 'Bulk Orders', desc: 'Volume pricing on core pharmaceuticals and farm supplies', icon: Package },
    { name: 'Commercial Farm Supply', desc: 'Continuous supply agreements for layer and broiler operations', icon: Building },
    { name: 'Wholesale Enquiries', desc: 'Partnership supply terms for agro-vets and regional retailers', icon: Layers },
    { name: 'Product Sourcing', desc: 'Importation and sourcing of specialized machinery and equipment', icon: FileCheck },
    { name: 'Quote Requests', desc: 'Transparent quotations tailored to your flock or herd scale', icon: Send },
    { name: 'Repeat Orders', desc: 'Reliable scheduled dispatches to prevent farm stockouts', icon: RefreshCw },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setQuoteSubmitted(true)
    setTimeout(() => setQuoteSubmitted(false), 4000)
  }

  return (
    <section id="b2b" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-12 sm:space-y-14">
      {/* Dark Forest Green Container */}
      <div className="rounded-[36px] sm:rounded-[48px] bg-[#14532D] p-6 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy & Features */}
          <div className="lg:col-span-7 space-y-6">

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Need Products in Bulk?
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-100/90 leading-relaxed font-medium max-w-xl">
              We work with commercial farms, distributors, retailers and agribusinesses that need dependable access to veterinary products and livestock equipment.
            </p>

            {/* Features 2-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat) => {
                const Icon = feat.icon
                return (
                  <div
                    key={feat.name}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 p-3.5 sm:p-4 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#22C55E]/20 text-[#DCFCE7] shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white leading-snug">
                        {feat.name}
                      </h4>
                      <p className="text-xs text-white/75 leading-relaxed mt-0.5">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/b2b"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] px-8 py-4 text-sm font-extrabold text-[#0E3B20] shadow-xl transition-all hover:bg-[#DCFCE7] hover:scale-[1.02] active:scale-95"
              >
                <span>B2B Commercial Portal</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>

              <Link
                to="/locations"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-white/20 active:scale-95"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Contact Hub Locations</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Box */}
          <div id="b2b-quote" className="lg:col-span-5 scroll-mt-28">
            <div className="rounded-[32px] bg-white p-6 sm:p-8 text-[#14532D] shadow-2xl border border-black/5 space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534]">
                  DIRECT INQUIRY
                </span>
                <h3 className="font-display text-2xl font-extrabold text-[#14532D]">
                  Request a Quote or Chart
                </h3>
                <p className="text-xs text-[#14532D]/70 font-medium">
                  Receive our free poultry vaccination chart and a prompt commercial response from our technical team.
                </p>
              </div>

              {quoteSubmitted ? (
                <div className="rounded-2xl bg-[#DCFCE7] p-6 text-center space-y-3 border border-[#86EFAC]">
                  <CheckCircle2 className="h-8 w-8 text-[#166534] mx-auto" />
                  <h4 className="font-display text-base font-bold text-[#14532D]">
                    Inquiry Received!
                  </h4>
                  <p className="text-xs text-[#14532D]/80">
                    Thank you. You can download the official poultry vaccination chart immediately below:
                  </p>
                  <a
                    href={vaccinationChartPdf}
                    download="ERNEJOYSON_VACCINATION_CHART.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-sm"
                  >
                    <Download className="h-4 w-4 text-[#86efac]" />
                    <span>Download Official PDF Chart</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#14532D]/80 uppercase tracking-wide mb-1">
                      Your Name / Representative
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwesi Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE6DC] bg-[#FAF9F5] px-3.5 py-2.5 text-sm text-[#14532D] placeholder:text-[#14532D]/40 focus:outline-none focus:ring-1.5 focus:ring-[#166534]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#14532D]/80 uppercase tracking-wide mb-1">
                        Farm / Business
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Farm or enterprise name"
                        value={formData.farmName}
                        onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                        className="w-full rounded-xl border border-[#EAE6DC] bg-[#FAF9F5] px-3.5 py-2.5 text-sm text-[#14532D] placeholder:text-[#14532D]/40 focus:outline-none focus:ring-1.5 focus:ring-[#166534]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#14532D]/80 uppercase tracking-wide mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 024 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-[#EAE6DC] bg-[#FAF9F5] px-3.5 py-2.5 text-sm text-[#14532D] placeholder:text-[#14532D]/40 focus:outline-none focus:ring-1.5 focus:ring-[#166534]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#14532D]/80 uppercase tracking-wide mb-1">
                      Primary Product Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full rounded-xl border border-[#EAE6DC] bg-[#FAF9F5] px-3.5 py-2.5 text-sm text-[#14532D] focus:outline-none focus:ring-1.5 focus:ring-[#166534]"
                    >
                      <option value="Free Poultry Vaccination Chart & Protocol">⭐ Free Poultry Vaccination Chart & Protocol</option>
                      <option value="Veterinary Pharmaceuticals">Veterinary Pharmaceuticals</option>
                      <option value="Poultry Feeding & Drinking Lines">Poultry Feeding & Drinking Lines</option>
                      <option value="Hatchery & Incubator Units">Hatchery & Incubator Units</option>
                      <option value="Feed Processing Machinery">Feed Processing Machinery</option>
                      <option value="Transport Cages & Crates">Transport Cages & Crates</option>
                      <option value="Complete Farm Setup Package">Complete Farm Setup Package</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#166534] py-3.5 text-sm font-extrabold text-white shadow-md transition-all hover:bg-[#14532D] active:scale-[0.98] cursor-pointer"
                  >
                    Get Free Vaccination Chart / Quote
                  </button>

                  <p className="text-[11px] text-center text-[#14532D]/60 font-medium pt-1">
                    Serving commercial farms across Kasoa, Kumasi, Swedru, Nsawam & Ghana-wide.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
