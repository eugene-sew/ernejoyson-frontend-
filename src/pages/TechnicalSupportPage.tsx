import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  ShieldCheck,
  Calendar,
  HeartPulse,
  PhoneCall,
  Download,
  ExternalLink,
  Lock,
  Unlock,
  CheckCircle2,
  Sparkles,
  Share2,
  Check,
  AlertCircle,
} from 'lucide-react'
import vaccinationChartPdf from '@/assets/ERNEJOYSON VACCINATION CHART.pdf'
import { api } from '@/services/api'
import { useAuthStore } from '@/store/useAuthStore'

export const TechnicalSupportPage: React.FC = () => {
  const { hasRespondedVaccination, unlockVaccinationChart, customer } = useAuthStore()

  // Form state for lead capture gate
  const [formData, setFormData] = useState({
    name: customer?.name || '',
    phone: customer?.phone || '',
    farmName: '',
    location: customer?.location || 'Central Region (Kasoa / Swedru)',
    farmType: 'Broilers',
    flockSize: '500 – 2,000 birds',
    email: customer?.email || '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [justUnlocked, setJustUnlocked] = useState(false)
  const [copiedShare, setCopiedShare] = useState(false)

  const handleUnlockSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const cleanPhone = formData.phone.trim()
    const digitsOnly = cleanPhone.replace(/\D/g, '')
    if (digitsOnly.length < 9) {
      setError('Please enter a valid Ghana phone number (at least 9 or 10 digits).')
      return
    }

    if (!formData.name.trim()) {
      setError('Please enter your full name.')
      return
    }

    setSubmitting(true)
    try {
      await api.leads.submit({
        source: 'vaccination_chart',
        name: formData.name.trim(),
        phone: cleanPhone,
        email: formData.email.trim() || undefined,
        business_name: formData.farmName.trim() || undefined,
        location: formData.location.trim() || undefined,
        farm_type: formData.farmType,
        quantity: formData.flockSize,
        interest: `Vaccination Chart (${formData.farmType}, ${formData.flockSize})`,
        website: honeypot,
      })

      unlockVaccinationChart()
      setJustUnlocked(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit your details. Please check your network connection.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleCopyShare = async () => {
    try {
      const shareUrl = window.location.href.split('#')[0] + '#vaccination-chart'
      await navigator.clipboard.writeText(shareUrl)
      setCopiedShare(true)
      setTimeout(() => setCopiedShare(false), 2500)
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden shadow-xl border border-white/10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 text-[#86efac] text-xs font-bold uppercase tracking-wider">
            Official Farm Advisory
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]">
            Poultry Vaccination Schedule & Technical Farmer Support
          </h1>

          <p className="text-sm sm:text-base text-[#DCFCE7]/85 font-medium leading-relaxed">
            Protecting your flock against Newcastle, Gumboro, and Coccidiosis starts with the right timing and genuine pharmaceutical potency. View and download our verified official vaccination chart below, or contact our technical veterinary team for tailored dosage support.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="#vaccination-chart"
              className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-6 py-3 text-xs sm:text-sm font-black text-[#0A2614] hover:bg-[#4ADE80] transition-colors shadow-sm"
            >
              {hasRespondedVaccination ? (
                <>
                  <Calendar className="h-4 w-4" />
                  <span>View Vaccination Chart</span>
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Unlock Vaccination Chart (Free)</span>
                </>
              )}
            </a>
            {hasRespondedVaccination ? (
              <a
                href={vaccinationChartPdf}
                download="ERNEJOYSON_VACCINATION_CHART.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#14532D] hover:bg-[#FAF9F5] px-6 py-3 text-xs sm:text-sm font-extrabold transition-colors shadow-sm"
              >
                <Download className="h-4 w-4 text-[#166534]" />
                <span>Download Official PDF Chart</span>
              </a>
            ) : null}
            <a
              href="tel:0596709226"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Veterinary Hotline (059 670 9226)</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Official Vaccination Chart PDF Display OR Lead Capture Gate */}
      <div id="vaccination-chart" className="scroll-mt-28 space-y-4">
        {hasRespondedVaccination ? (
          /* ================= UNLOCKED STATE ================= */
          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs space-y-6">
            {/* Celebration alert on instant unlock */}
            {justUnlocked && (
              <div className="rounded-2xl bg-[#DCFCE7] border border-[#86EFAC] p-4 text-[#14532D] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#166534] text-white shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black">Access Unlocked!</h3>
                    <p className="text-xs text-[#14532D]/85">
                      The official poultry vaccination chart is now permanently unlocked on this device. You can view or download it anytime.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setJustUnlocked(false)}
                  className="text-xs font-bold text-[#166534] hover:underline shrink-0"
                >
                  Dismiss
                </button>
              </div>
            )}

            {/* Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAE6DC] pb-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534] shrink-0 mt-0.5">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                      ERNEJOYSON Poultry Vaccination & Medication Chart
                    </h2>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#DCFCE7] text-[#166534] text-[11px] font-black border border-[#86EFAC]">
                      <CheckCircle2 className="h-3 w-3" />
                      Unlocked on this device
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1">
                    Official veterinary schedule calibrated for Ghana poultry operations and commercial flocks.
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={handleCopyShare}
                  className="flex items-center gap-2 rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] px-4 py-2.5 text-xs font-bold transition-colors shadow-xs cursor-pointer"
                  title="Share link with fellow farmer"
                >
                  {copiedShare ? (
                    <>
                      <Check className="h-4 w-4 text-[#166534]" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4 text-[#166534]" />
                      <span>Share Chart</span>
                    </>
                  )}
                </button>

                <a
                  href={vaccinationChartPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] px-4 py-2.5 text-xs font-bold transition-colors shadow-xs"
                >
                  <ExternalLink className="h-4 w-4 text-[#166534]" />
                  <span>Open in New Tab</span>
                </a>

                <a
                  href={vaccinationChartPdf}
                  download="ERNEJOYSON_VACCINATION_CHART.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white px-5 py-2.5 text-xs font-bold transition-colors shadow-sm"
                >
                  <Download className="h-4 w-4 text-[#86efac]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="w-full bg-[#FAF9F5] rounded-2xl border border-[#EAE6DC] overflow-hidden shadow-inner">
              <object
                data={`${vaccinationChartPdf}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-[750px] md:h-[1050px] rounded-2xl"
              >
                <div className="p-8 text-center space-y-4">
                  <FileText className="w-12 h-12 text-[#166534] mx-auto" />
                  <h3 className="text-lg font-bold text-[#14532D]">Vaccination Chart PDF</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto">
                    Your browser does not support inline PDF viewing. You can view or download the complete vaccination chart directly below:
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={vaccinationChartPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-[#166534] text-white font-bold text-xs rounded-xl shadow"
                    >
                      Open PDF Document
                    </a>
                    <a
                      href={vaccinationChartPdf}
                      download="ERNEJOYSON_VACCINATION_CHART.pdf"
                      className="px-5 py-2.5 bg-neutral-200 text-neutral-800 font-bold text-xs rounded-xl hover:bg-neutral-300"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </object>
            </div>

            {/* Footer note */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#14532D]/80">
              <div className="flex items-center gap-2 font-semibold">
                <ShieldCheck className="h-4 w-4 text-[#166534]" />
                <span>All mentioned genuine poultry medications and vitamins are in stock across our branches.</span>
              </div>
              <Link
                to="/shop"
                className="font-bold text-[#166534] hover:underline"
              >
                Browse Veterinary Catalog →
              </Link>
            </div>
          </div>
        ) : (
          /* ================= GATED LEAD CAPTURE STATE ================= */
          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-10 lg:p-12 shadow-sm space-y-8">
            {/* Header banner */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#92400E] text-xs font-black uppercase tracking-wider">
                <Lock className="h-3.5 w-3.5" />
                <span>Farmer Access Gate • Free Resource</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#14532D] tracking-tight">
                Unlock the Official ERNEJOYSON Poultry Vaccination & Medication Schedule
              </h2>
              <p className="text-xs sm:text-base text-[#14532D]/80 font-medium leading-relaxed">
                Calibrated by certified veterinary professionals for Ghana's climatic conditions. Complete this quick one-time registration to instantly view and download the full PDF chart on this device.
              </p>
            </div>

            {/* 2-Column Layout: Left Teaser Perks & Right Lead Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: What's Inside & Trust Proof */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] p-6 space-y-5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#166534]">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-black text-[#14532D]">
                        What You Get in the Chart
                      </h3>
                      <p className="text-[11px] text-[#14532D]/60 font-semibold">
                        Day 1 through harvest & laying maturity
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-[#14532D]/85 font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#166534] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#14532D]">Day 1–7 Brooding Protocol:</strong> Exact glucose, electrolyte, and Joy Amino anti-stress mixing ratios.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#166534] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#14532D]">Gumboro (IBD) Timing:</strong> 1st dose (Day 10–12) & 2nd dose (Day 18) scheduling for Ghana.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#166534] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#14532D]">Newcastle (Lasota) Booster:</strong> Water tank dechlorinating and milk powder protection guidelines.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#166534] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#14532D]">Coccidiosis Knockout:</strong> Timing for preventive and curative treatment with Ernzuril 2.5% and Erncox.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#166534] shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#14532D]">Water Tank Dilution Formulas:</strong> Grams and ml per 100L, 200L, and 1,000L polytanks.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-[#DCFCE7]/60 border border-[#86EFAC]/60 p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-[#166534]">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Permanent Device Access</span>
                  </div>
                  <p className="text-[11px] text-[#14532D]/80 leading-relaxed font-medium">
                    You only need to enter your details once. We save your unlock pass directly in your browser so you won't be asked again on this device.
                  </p>
                </div>
              </div>

              {/* Right Column: Lead Capture Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-[#FAF9F5] border border-[#EAE6DC] p-6 sm:p-8 shadow-xs space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-black text-[#14532D]">
                      Enter Your Details to Unlock Instant Access
                    </h3>
                    <p className="text-xs text-[#14532D]/70 font-medium">
                      Takes 30 seconds. Unlocks immediate PDF inline viewing and downloading.
                    </p>
                  </div>

                  {error && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-3.5 flex items-start gap-2.5 text-xs text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleUnlockSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Samuel K. Mensah"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] placeholder:text-[#14532D]/40 focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                          WhatsApp / Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 024 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] placeholder:text-[#14532D]/40 focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Farm Name */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                          Farm or Enterprise Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Joy Valley Farms"
                          value={formData.farmName}
                          onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] placeholder:text-[#14532D]/40 focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                        />
                      </div>

                      {/* Location / Region */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                          Farm Region / Town
                        </label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none cursor-pointer"
                        >
                          <option value="Central Region (Kasoa / Swedru)">Central Region (Kasoa / Swedru)</option>
                          <option value="Ashanti Region (Kumasi & Environs)">Ashanti Region (Kumasi & Environs)</option>
                          <option value="Greater Accra (Accra / Amasaman / Pokuase)">Greater Accra (Accra / Amasaman / Pokuase)</option>
                          <option value="Eastern Region (Nsawam / Koforidua)">Eastern Region (Nsawam / Koforidua)</option>
                          <option value="Western / Western North">Western / Western North</option>
                          <option value="Bono / Ahafo / Bono East">Bono / Ahafo / Bono East</option>
                          <option value="Volta Region">Volta Region</option>
                          <option value="Northern / Savanna / North East">Northern / Savanna / North East</option>
                          <option value="Upper East / Upper West">Upper East / Upper West</option>
                          <option value="Other / Outside Ghana">Other / Outside Ghana</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Flock Type */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                          Primary Flock Type
                        </label>
                        <select
                          value={formData.farmType}
                          onChange={(e) => setFormData({ ...formData, farmType: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none cursor-pointer"
                        >
                          <option value="Broilers">Broilers (Commercial Meat Birds)</option>
                          <option value="Commercial Layers">Commercial Layers (Table Eggs)</option>
                          <option value="Day-Old Chick Brooding">Day-Old Brooding Specialist</option>
                          <option value="Breeder Flock / Hatchery">Breeder Flock / Hatchery</option>
                          <option value="Cockerel / Local / Guinea Fowl">Cockerel / Local Fowl / Guinea Fowl</option>
                          <option value="Agro-vet / Retailer / Feed Dealer">Agro-vet / Retailer / Feed Dealer</option>
                        </select>
                      </div>

                      {/* Flock Size */}
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                          Flock Capacity / Size
                        </label>
                        <select
                          value={formData.flockSize}
                          onChange={(e) => setFormData({ ...formData, flockSize: e.target.value })}
                          className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] focus:ring-2 focus:ring-[#166534]/30 focus:outline-none cursor-pointer"
                        >
                          <option value="Under 500 birds">Under 500 birds (Smallholder)</option>
                          <option value="500 – 2,000 birds">500 – 2,000 birds (Growing Commercial)</option>
                          <option value="2,000 – 5,000 birds">2,000 – 5,000 birds (Medium Scale)</option>
                          <option value="5,000 – 10,000 birds">5,000 – 10,000 birds (Large Scale)</option>
                          <option value="10,000+ birds">10,000+ birds (Industrial Commercial)</option>
                        </select>
                      </div>
                    </div>

                    {/* Email (Optional) */}
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-[#14532D] uppercase tracking-wider">
                        Email Address <span className="text-[#14532D]/40 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your-email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 px-3.5 rounded-xl border border-[#EAE6DC] bg-white text-xs sm:text-sm font-semibold text-[#14532D] placeholder:text-[#14532D]/40 focus:ring-2 focus:ring-[#166534]/30 focus:outline-none"
                      />
                    </div>

                    {/* Honeypot hidden input for anti-bot */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-13 mt-2 flex items-center justify-center gap-2 rounded-full bg-[#166534] hover:bg-[#14532D] text-white font-black text-sm sm:text-base shadow-md transition-all active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                    >
                      {submitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Unlocking Chart…</span>
                        </>
                      ) : (
                        <>
                          <Unlock className="h-4 w-4 text-[#86efac]" />
                          <span>Unlock & View Vaccination Chart Now</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-[#14532D]/60 font-medium">
                      🔒 Your contact information is only used for farm advisory & authentic poultry supply support.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
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
            href="tel:0596709226"
            className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 p-4 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-[#0A2614] shrink-0 font-bold">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Direct Technical Line</p>
              <p className="text-[11px] text-[#DCFCE7]/80">059 670 9226</p>
            </div>
          </a>

          <a
            href="tel:0241604926"
            className="flex items-center gap-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 p-4 transition-colors"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#166534] shrink-0 font-bold">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Advisory Line 2</p>
              <p className="text-[11px] text-[#DCFCE7]/80">024 160 4926 (Mon – Sat)</p>
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
