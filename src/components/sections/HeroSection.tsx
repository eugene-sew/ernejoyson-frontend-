import { HeroBg, HeroMobile } from '@/assets'
import { ArrowRight, Star, Asterisk, ShoppingBag, CheckCircle2 } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full px-0 sm:px-6 lg:px-8 pt-0 sm:pt-3 pb-8">
      {/* 85% Height Hero Container: Edge-to-Edge full width on mobile, rounded card on sm/lg */}
      <div className="relative min-h-[85vh] lg:h-[85vh] w-full rounded-none sm:rounded-[48px] overflow-hidden px-5 py-8 sm:p-10 lg:p-14 pt-28 sm:pt-28 lg:pt-32 flex flex-col justify-between shadow-2xl">
        {/* Responsive Background Image: Uses HeroMobile on mobile and HeroBg on larger screens */}
        <picture className="absolute inset-0 h-full w-full">
          <source media="(max-width: 640px)" srcSet={HeroMobile} />
          <img
            src={HeroBg}
            alt="Agricultural field operations"
            className="h-full w-full object-cover object-center scale-105"
          />
        </picture>

        {/* Dark subtle gradient overlay to keep high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B1D]/60 via-[#0A2B1D]/35 to-[#0A2B1D]/85" />

        {/* Middle Row: Main Headline & Floating Stacked Rating Card */}
        <div className="relative z-10 max-w-[1380px] mx-auto w-full grid grid-cols-1 gap-8 lg:grid-cols-12 items-center my-auto">
          {/* Left Title & Copy Flow */}
          <div className="lg:col-span-8 space-y-6">
            {/* H1 Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-3xl">
              Build Better. <br />
              Farm Smarter. <br />
              <span className="text-[#8BD333]">Grow More.</span>
            </h1>

            {/* Paragraph Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100/90 max-w-2xl leading-relaxed font-medium">
              Quality agricultural equipment, farm supplies, and expert solutions designed to help you build, manage, and grow a more productive farm.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm sm:text-base font-extrabold text-[#0A2B1D] shadow-xl transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-95 cursor-pointer shrink-0"
              >
                <ShoppingBag className="h-4.5 w-4.5 text-[#0A2B1D]" />
                <span>Shop Equipment</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8BD333] px-7 py-3.5 text-sm sm:text-base font-extrabold text-white shadow-xl transition-all hover:bg-[#9BE139] hover:scale-[1.02] active:scale-95 cursor-pointer shrink-0"
              >
                <span>Get a Farm Quote</span>
                <ArrowRight className="h-4.5 w-4.5 stroke-[2.5]" />
              </a>
            </div>

            {/* Sub-caption Trust Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/85 pt-1">
              <CheckCircle2 className="h-4 w-4 text-[#8BD333] shrink-0" />
              <span>Trusted equipment. Practical expertise. Reliable support.</span>
            </div>
          </div>

          {/* Right Floating Stacked Rating Card */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[280px]">
              {/* Stacked Back Card Peeking Tab */}
              <div className="absolute -top-2.5 inset-x-3.5 h-6 rounded-t-[28px] bg-[#FAF5ED] opacity-95 shadow-sm -z-0" />

              {/* Main Front Lime Card */}
              <div className="relative z-10 rounded-[32px] sm:rounded-[36px] bg-[#7BC639] p-6 sm:p-7 text-white shadow-2xl transition-transform duration-300 hover:scale-[1.03]">
                {/* Rating & Star */}
                <div className="flex items-center gap-2">
                  <span className="font-display text-5xl sm:text-6xl font-black tracking-tight leading-none text-white">
                    4.9
                  </span>
                  <Star className="h-7 w-7 fill-white text-white translate-y-[-2px]" />
                </div>

                <p className="mt-2 text-sm font-bold text-white/95 tracking-wide">
                  1200+ Farmers Review
                </p>

                {/* Overlapping Customer Reviewer Avatars */}
                <div className="flex items-center -space-x-2.5 my-5">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                    alt="Customer 1"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                    alt="Customer 2"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
                    alt="Customer 3"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                    alt="Customer 4"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                  />
                </div>

                {/* Bottom Row: Google 'G' lettermark + Dark Green Asterisk Circle Button */}
                <div className="flex items-center justify-between pt-1">
                  <span className="font-display text-3xl font-black tracking-tighter text-white select-none">
                    G
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2B1D] text-[#8BD333] shadow-md transition-transform duration-200 hover:rotate-45 cursor-pointer">
                    <Asterisk className="h-7 w-7 text-[#8BD333] stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative z-10 max-w-[1380px] mx-auto w-full mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Featured products slot */}
        </div>
      </div>
    </section>
  )
}
