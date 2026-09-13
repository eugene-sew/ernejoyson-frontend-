import { ArrowRight, ShoppingBag, MapPin, PackageCheck } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full px-0 sm:px-6 lg:px-8 pt-0 sm:pt-2 pb-6 sm:pb-8">
      {/* 85% Height Hero Container */}
      <div className="relative min-h-[85vh] lg:h-[85vh] w-full rounded-none sm:rounded-[48px] overflow-hidden px-5 py-8 sm:p-10 lg:p-14 pt-28 sm:pt-28 lg:pt-32 flex flex-col justify-between shadow-2xl">
        {/* Background Photography: Modern livestock & poultry farm infrastructure */}
        <picture className="absolute inset-0 h-full w-full">
          <source
            media="(max-width: 640px)"
            srcSet="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=800&q=80"
          />
          <img
            src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1800&q=85"
            alt="Poultry and livestock farming equipment in Ghana"
            className="h-full w-full object-cover object-center scale-105"
          />
        </picture>

        {/* Deep Forest Gradient Overlay for contrast and brand alignment */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14532D]/75 via-[#14532D]/50 to-[#0E3B20]/90" />

        {/* Middle Row: Main Headline & Floating Distribution Badge Card */}
        <div className="relative z-10 max-w-[1380px] mx-auto w-full grid grid-cols-1 gap-8 lg:grid-cols-12 items-center my-auto">
          {/* Left Title & Copy Flow */}
          <div className="lg:col-span-8 space-y-6">
            {/* H1 Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-3xl">
              Better Animal Health. <br />
              <span className="text-[#DCFCE7]">Better Farm Performance.</span>
            </h1>

            {/* Paragraph Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-2xl leading-relaxed font-medium">
              Quality veterinary products, poultry and livestock equipment, and practical technical support for farmers and agribusinesses across Ghana.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#featured-products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm sm:text-base font-extrabold text-[#14532D] shadow-xl transition-all hover:bg-[#FAF9F5] hover:scale-[1.02] active:scale-95 cursor-pointer shrink-0"
              >
                <ShoppingBag className="h-4.5 w-4.5 text-[#166534]" />
                <span>Shop Products</span>
              </a>

              <a
                href="#b2b-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#166534] px-7 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-xl transition-all hover:bg-[#14532D] hover:scale-[1.02] active:scale-95 cursor-pointer shrink-0 border border-white/20"
              >
                <span>Free Vaccination Chart</span>
                <ArrowRight className="h-4.5 w-4.5 stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Right Floating Authentic Distribution Hubs Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[320px]">
              {/* Stacked Back Card Peeking Tab */}
              <div className="absolute -top-2.5 inset-x-3.5 h-6 rounded-t-[28px] bg-[#FEF3C7] opacity-90 shadow-sm -z-0" />

              {/* Main Front Forest Green Card */}
              <div className="relative z-10 rounded-[32px] sm:rounded-[36px] bg-[#14532D] p-6 sm:p-7 text-white shadow-2xl border border-white/15 transition-transform duration-300 hover:scale-[1.02]">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#DCFCE7]">
                    Distribution Network
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#DCFCE7]">
                    <MapPin className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-white/60 uppercase tracking-wider block">
                      Operations in Ghana
                    </span>
                    <p className="font-display text-lg sm:text-xl font-extrabold text-white">
                      Kasoa • Kumasi • Swedru • Nsawam
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10 text-xs font-medium text-white/85">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                      <span>Veterinary Pharmaceuticals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                      <span>Poultry & Livestock Equipment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
                      <span>B2C & Commercial B2B Supply</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row Action */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href="#locations"
                    className="text-xs font-bold text-[#DCFCE7] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Hub Locations</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#166534] text-[#DCFCE7]">
                    <PackageCheck className="h-4.5 w-4.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Empty bottom grid spacer for balance */}
        <div className="relative z-10 max-w-[1380px] mx-auto w-full" />
      </div>
    </section>
  )
}
