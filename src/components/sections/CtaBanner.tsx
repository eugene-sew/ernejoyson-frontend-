import { ArrowUpRight, ShoppingBag, ShieldCheck, MapPin, Headphones } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-14 sm:py-20 max-w-[1380px] mx-auto w-full">
      <div className="relative min-h-[380px] sm:min-h-[420px] w-full rounded-[40px] sm:rounded-[52px] overflow-hidden p-8 sm:p-14 lg:p-18 flex flex-col items-center justify-center text-center shadow-2xl">
        {/* Background photo: modern livestock / poultry setup */}
        <img
          src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1600&q=85"
          alt="Poultry and livestock farm operations in Ghana"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E3B20]/95 via-[#14532D]/90 to-[#0E3B20]/95" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-7">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-1.5 text-xs sm:text-sm font-bold text-[#DCFCE7] backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              ERNEJOYSON LIMITED • GHANA
            </span>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Let's Build a Better <br />
              <span className="text-[#DCFCE7]">Farm Operation.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto font-medium">
              Whether you need veterinary products, livestock equipment or help choosing the right solution, our team is ready to help.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#featured-products"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 text-sm sm:text-base font-extrabold text-[#14532D] shadow-xl transition-all hover:bg-[#FAF9F5] hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <ShoppingBag className="h-5 w-5 text-[#166534]" />
              <span>Shop Products</span>
              <ArrowUpRight className="h-5 w-5 text-[#14532D]" />
            </a>

            <a
              href="#b2b-quote"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm sm:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 shrink-0"
            >
              <Headphones className="h-4.5 w-4.5 text-[#DCFCE7]" />
              <span>Talk to Our Team</span>
            </a>
          </div>

          {/* Core Commitments */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-4 text-xs sm:text-sm font-semibold text-white/90 border-t border-white/15">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#22C55E]" />
              <span>Quality Veterinary Formulations</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#22C55E]" />
              <span>Hubs in Kasoa, Kumasi, Swedru & Nsawam</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-[#22C55E]" />
              <span>Direct Practical Farmer Guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
