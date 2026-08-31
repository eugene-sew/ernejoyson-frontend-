import { Sparkles, ArrowUpRight, Globe, Send, Share2, MessageSquare, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="mt-12 bg-[#082318] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-12 rounded-t-[44px] sm:rounded-t-[56px] overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand & Social */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8BD333] text-[#0A2B1D]">
                <Sparkles className="h-4 w-4 fill-current" />
              </div>
              <span>Agrone</span>
            </a>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Pioneering autonomous drone technology and cloud analytics for modern sustainable farming and precision agriculture worldwide.
            </p>

            {/* Social / Connect icons from Lucide */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#8BD333] hover:text-[#0A2B1D]"
                aria-label="Global Network"
              >
                <Globe className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#8BD333] hover:text-[#0A2B1D]"
                aria-label="Direct Dispatch"
              >
                <Send className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#8BD333] hover:text-[#0A2B1D]"
                aria-label="Share Network"
              >
                <Share2 className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#8BD333] hover:text-[#0A2B1D]"
                aria-label="Community Messages"
              >
                <MessageSquare className="h-3.5 w-3.5" />
              </a>

              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#8BD333] hover:text-[#0A2B1D]"
                aria-label="Email Support"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#about" className="hover:text-[#8BD333] transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-[#8BD333] transition-colors">Our Team</a></li>
              <li><a href="#careers" className="hover:text-[#8BD333] transition-colors">Careers & Internships</a></li>
              <li><a href="#press" className="hover:text-[#8BD333] transition-colors">Press & Media Kit</a></li>
              <li><a href="#sustainability" className="hover:text-[#8BD333] transition-colors">Sustainability Impact</a></li>
            </ul>
          </div>

          {/* Col 3: Innovation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider text-white">
              Innovation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#spraying" className="hover:text-[#8BD333] transition-colors">Smart Spraying</a></li>
              <li><a href="#gis" className="hover:text-[#8BD333] transition-colors">Mapping & GIS</a></li>
              <li><a href="#fleet" className="hover:text-[#8BD333] transition-colors">Autonomous Fleet</a></li>
              <li><a href="#api" className="hover:text-[#8BD333] transition-colors">API Integration</a></li>
              <li><a href="#cloud" className="hover:text-[#8BD333] transition-colors">Telemetry Cloud</a></li>
            </ul>
          </div>

          {/* Col 4: Popular Products */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-sm font-bold tracking-wider text-white">
              Popular Products
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li><a href="#products" className="hover:text-[#8BD333] transition-colors">DJI Agras T50</a></li>
              <li><a href="#products" className="hover:text-[#8BD333] transition-colors">DJI Agras T25</a></li>
              <li><a href="#products" className="hover:text-[#8BD333] transition-colors">DJI Mavic 3M Multispectral</a></li>
              <li><a href="#products" className="hover:text-[#8BD333] transition-colors">Generator D12000i</a></li>
              <li><a href="#products" className="hover:text-[#8BD333] transition-colors">Spreading Systems</a></li>
            </ul>
          </div>
        </div>

        {/* Giant Display Footer Wordmark with Contact Us Pill */}
        <div className="relative pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          <span className="font-display text-6xl sm:text-8xl lg:text-[130px] font-black tracking-tight text-white/90 select-none leading-none">
            Agrone
          </span>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#8BD333] px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold text-[#0A2B1D] shadow-xl transition-all hover:bg-[#9BE139] active:scale-95 cursor-pointer shrink-0"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Sub-footer copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-[11px] text-white/50 border-t border-white/5">
          <p>© 2026 Agrone Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
