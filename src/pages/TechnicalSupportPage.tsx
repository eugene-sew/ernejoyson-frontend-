import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  ShieldCheck,
  Calendar,
  HeartPulse,
  PhoneCall,
  Download,
  ExternalLink,
} from 'lucide-react'
import vaccinationChartPdf from '@/assets/ERNEJOYSON VACCINATION CHART.pdf'

export const TechnicalSupportPage: React.FC = () => {
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
              <Calendar className="h-4 w-4" />
              <span>View Vaccination Chart</span>
            </a>
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

      {/* 2. Official Vaccination Chart PDF Display */}
      <div id="vaccination-chart" className="scroll-mt-28 space-y-4">
        <div className="rounded-3xl bg-white border border-[#EAE6DC] p-6 sm:p-8 shadow-xs space-y-6">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAE6DC] pb-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534] shrink-0 mt-0.5">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
                  ERNEJOYSON Poultry Vaccination & Medication Chart
                </h2>
                <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium mt-1">
                  Official veterinary schedule calibrated for Ghana poultry operations and commercial flocks.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3 flex-wrap">
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
