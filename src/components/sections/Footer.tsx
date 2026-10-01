import { Link } from 'react-router-dom'
import { 
  ShieldCheck, 
  Mail, 
  Phone, 
  SlidersHorizontal,
  Clock,
  MapPin
} from 'lucide-react'

// Crisp, high-end SVG Social Icons
function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.91 8.91 12.08 9.03 12.24C9.16 12.4 10.74 14.84 13.16 15.89C15.18 16.75 15.59 16.58 16.03 16.54C16.47 16.5 17.46 15.95 17.66 15.38C17.87 14.81 17.87 14.33 17.8 14.22C17.74 14.12 17.58 14.06 17.33 13.93C17.08 13.81 15.86 13.21 15.63 13.13C15.41 13.04 15.24 13 15.08 13.25C14.91 13.5 14.43 14.07 14.28 14.24C14.14 14.4 14 14.42 13.75 14.3C13.5 14.17 12.7 13.91 11.75 13.06C11.01 12.4 10.51 11.58 10.36 11.33C10.22 11.09 10.34 10.95 10.47 10.83C10.58 10.72 10.72 10.54 10.85 10.39C10.98 10.25 11.02 10.14 11.11 9.98C11.19 9.81 11.15 9.67 11.09 9.55C11.02 9.43 10.54 8.24 10.33 7.76C10.14 7.28 9.94 7.35 9.79 7.34C9.64 7.34 9.48 7.34 9.53 7.34Z"/>
    </svg>
  )
}

function FacebookIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  )
}

function InstagramIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  )
}

function TikTokIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  )
}

function XTwitterIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

export function Footer() {
  const triggerCookieModal = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'))
  }

  return (
    <footer id="contact" className="mt-14 bg-[#082011] text-white pt-14 pb-8 px-4 sm:px-6 lg:px-12 rounded-t-[36px] sm:rounded-t-[48px] border-t border-[#1e4828]/50 overflow-hidden font-sans">
      <div className="max-w-[1380px] mx-auto w-full space-y-12">
        
        {/* Top Header & Socials Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-1 max-w-lg">
            <Link to="/" className="inline-flex items-center gap-2.5 font-display text-2xl font-black tracking-tight text-white group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#166534] to-[#22C55E] text-[#082011] shadow-md group-hover:scale-105 transition-transform">
                <ShieldCheck className="h-5 w-5 stroke-[2.5]" />
              </div>
              <span className="group-hover:text-[#86efac] transition-colors">ERNEJOYSON</span>
            </Link>
            <p className="text-xs text-neutral-300 font-medium">
              Ghana's trusted agricultural input, veterinary pharmaceutical, and farm machinery distributor.
            </p>
          </div>

          {/* Social Icons & Hotline */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 flex-wrap">
            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/233596709226"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Business Desk"
                className="h-9 w-9 rounded-xl bg-[#112d19] hover:bg-[#22C55E] text-[#86efac] hover:text-[#082011] border border-[#1e4828] flex items-center justify-center transition-all hover:scale-105"
                title="WhatsApp Hotline"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/ernejoyson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-xl bg-[#112d19] hover:bg-[#22C55E] text-[#86efac] hover:text-[#082011] border border-[#1e4828] flex items-center justify-center transition-all hover:scale-105"
                title="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/ernejoyson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-xl bg-[#112d19] hover:bg-[#22C55E] text-[#86efac] hover:text-[#082011] border border-[#1e4828] flex items-center justify-center transition-all hover:scale-105"
                title="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com/@ernejoyson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="h-9 w-9 rounded-xl bg-[#112d19] hover:bg-[#22C55E] text-[#86efac] hover:text-[#082011] border border-[#1e4828] flex items-center justify-center transition-all hover:scale-105"
                title="TikTok"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/ernejoyson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
                className="h-9 w-9 rounded-xl bg-[#112d19] hover:bg-[#22C55E] text-[#86efac] hover:text-[#082011] border border-[#1e4828] flex items-center justify-center transition-all hover:scale-105"
                title="X (Twitter)"
              >
                <XTwitterIcon className="h-3.5 w-3.5" />
              </a>
            </div>

            <a
              href="tel:0596709226"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#112d19] hover:bg-[#183d23] text-white border border-[#1e4828] text-xs font-bold transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-[#22C55E]" />
              <span>059 670 9226</span>
            </a>
          </div>
        </div>

        {/* 4 Clean, Concise Columns (No Overwhelming Text) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Column 1: Products */}
          <div className="space-y-3">
            <h4 className="font-display font-black uppercase tracking-wider text-[#86efac] text-[11px]">
              Core Products
            </h4>
            <ul className="space-y-2 text-neutral-300 font-medium">
              <li>
                <Link to="/shop?category=insecticides" className="hover:text-white transition-colors">
                  Crop Protection &amp; Agrochemicals
                </Link>
              </li>
              <li>
                <Link to="/shop?category=antibiotics" className="hover:text-white transition-colors">
                  Veterinary Drugs &amp; Vaccines
                </Link>
              </li>
              <li>
                <Link to="/shop?category=foliar" className="hover:text-white transition-colors">
                  Foliar Fertilizers (Joy Amino)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=seeds" className="hover:text-white transition-colors">
                  Certified Hybrid &amp; Vegetable Seeds
                </Link>
              </li>
              <li>
                <Link to="/shop?category=equipment" className="hover:text-white transition-colors">
                  Knapsack Sprayers &amp; Farm Machinery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Farmer Services */}
          <div className="space-y-3">
            <h4 className="font-display font-black uppercase tracking-wider text-[#86efac] text-[11px]">
              Services &amp; Advisory
            </h4>
            <ul className="space-y-2 text-neutral-300 font-medium">
              <li>
                <Link to="/technical-support#vaccination-chart" className="hover:text-white transition-colors text-[#DCFCE7] font-semibold">
                  Official Vaccination Chart (PDF)
                </Link>
              </li>
              <li>
                <Link to="/knowledge#dosage-calculator" className="hover:text-white transition-colors">
                  Medication Dosage Calculator
                </Link>
              </li>
              <li>
                <Link to="/b2b" className="hover:text-white transition-colors">
                  B2B Wholesale &amp; Cooperatives
                </Link>
              </li>
              <li>
                <Link to="/technical-support" className="hover:text-white transition-colors">
                  Disease Diagnosis &amp; Post-Mortem
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors">
                  Nationwide Waybill Freight
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Regional Depots */}
          <div className="space-y-3">
            <h4 className="font-display font-black uppercase tracking-wider text-[#86efac] text-[11px]">
              Regional Depots
            </h4>
            <ul className="space-y-2 text-neutral-300 font-medium">
              <li>
                <Link to="/locations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-[#22C55E] shrink-0" />
                  <span>Kumasi Central Depot (Adum)</span>
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-[#22C55E] shrink-0" />
                  <span>Kasoa HQ &amp; Main Terminal</span>
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-[#22C55E] shrink-0" />
                  <span>Sunyani &amp; Techiman Depots</span>
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-[#22C55E] shrink-0" />
                  <span>Goaso Cocoa Belt Station</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Lines */}
          <div className="space-y-3">
            <h4 className="font-display font-black uppercase tracking-wider text-[#86efac] text-[11px]">
              Contact Desk
            </h4>
            <div className="space-y-2 text-neutral-300 font-medium">
              <a href="tel:0596709226" className="hover:text-[#86efac] transition-colors flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-[#22C55E] shrink-0" />
                <span>059 670 9226 / 024 160 4926</span>
              </a>
              <a href="mailto:sales@ernejoyson.com" className="hover:text-[#86efac] transition-colors flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-[#22C55E] shrink-0" />
                <span>sales@ernejoyson.com</span>
              </a>
              <div className="flex items-center gap-1.5 text-neutral-400 text-[11px] pt-0.5">
                <Clock className="h-3 w-3 text-[#22C55E] shrink-0" />
                <span>Mon – Sat: 7:30 AM – 6:00 PM GMT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Privacy & Cookie Governance Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 ERNEJOYSON Company Limited. All rights reserved.</p>

          {/* Legal Links + Cookie Manager */}
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-center text-[11px] font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link to="/compliance" className="hover:text-white transition-colors">
              EPA Safety
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={triggerCookieModal}
              className="inline-flex items-center gap-1 hover:text-[#86efac] text-neutral-300 transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="h-3 w-3 text-[#22C55E]" />
              <span>Cookie Settings</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
