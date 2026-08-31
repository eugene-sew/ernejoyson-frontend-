import { ArrowUpRight, ShoppingBag, ShieldCheck, Truck, Headphones } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="px-4 sm:px-6 py-10 max-w-7xl mx-auto w-full">
      <div className="relative min-h-[340px] sm:min-h-[380px] w-full rounded-[40px] overflow-hidden p-8 sm:p-12 lg:p-16 flex flex-col items-center justify-center text-center shadow-2xl">
        {/* Overhead lush agricultural rows texture */}
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=85"
          alt="Top Model for Agriculture"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B1D]/85 via-[#0A2B1D]/75 to-[#0A2B1D]/85" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8BD333]/25 border border-[#8BD333]/40 px-3.5 py-1 text-xs font-bold text-[#8BD333] backdrop-blur-md">
              <ShoppingBag className="h-3.5 w-3.5" />
              Official Agrone Store
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Top models for agriculture <br />
              <span className="text-white">Ready, Steady, Shop</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl mx-auto">
              Explore our full fleet of precision agricultural drones, high-capacity EFI charging generators, spreading systems, and RTK base stations ready for immediate deployment.
            </p>
          </div>

          {/* Shop Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8BD333] px-8 py-3.5 text-xs sm:text-sm font-bold text-[#0A2B1D] shadow-xl transition-all hover:bg-[#9BE139] hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Shop All Equipment</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/15 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0A2B1D] active:scale-95 shrink-0"
            >
              <span>Request Fleet Quote</span>
            </a>
          </div>

          {/* Store Guarantees / Perks */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-[11px] font-medium text-white/80 border-t border-white/15">
            <div className="flex items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 text-[#8BD333]" />
              <span>Global Fast Dispatch</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#8BD333]" />
              <span>Official 2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Headphones className="h-3.5 w-3.5 text-[#8BD333]" />
              <span>24/7 Field Tech Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
