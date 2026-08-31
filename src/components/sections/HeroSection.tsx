import { HeroBg } from '@/assets'
import { ArrowRight, Star, Leaf, Asterisk } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative w-full px-3 sm:px-6 lg:px-8 pt-3 pb-8">
      {/* 85% Height Hero Container with comfortable breathing room */}
      <div className="relative min-h-[85vh] lg:h-[85vh] w-full rounded-[36px] sm:rounded-[48px] overflow-hidden p-6 sm:p-10 lg:p-12 pt-24 sm:pt-28 lg:pt-32 flex flex-col justify-between shadow-2xl">
        {/* Background Image: Aerial Terraced Green Crop Rows */}
        <img
          src={HeroBg}
          alt="Aerial view of green agricultural field"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
        />
        {/* Dark subtle gradient overlay to keep high contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2B1D]/50 via-[#0A2B1D]/20 to-[#0A2B1D]/80" />

        {/* Middle Row: Main Headline & Floating Stacked Rating Card */}
        <div className="relative z-10 max-w-[1380px] mx-auto w-full grid grid-cols-1 gap-6 lg:grid-cols-12 items-start my-auto">
          {/* Left Title */}
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Part of future <br />
              <span className="inline-flex items-center gap-3 sm:gap-4">
                Agriculture
                <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white shadow-sm shrink-0">
                  <Leaf className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </span>
            </h1>

            <div>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/20 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#0A2B1D] active:scale-95 shadow-md"
              >
                <span>Explore Innovation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Floating Stacked Rating Card (1:1 UI Match) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[270px]">
              {/* Stacked Back Card Peeking Tab */}
              <div className="absolute -top-2.5 inset-x-3.5 h-6 rounded-t-[28px] bg-[#FAF5ED] opacity-95 shadow-sm -z-0" />

              {/* Main Front Lime Card */}
              <div className="relative z-10 rounded-[32px] sm:rounded-[36px] bg-[#7BC639] p-6 sm:p-7 text-white shadow-2xl transition-transform duration-300 hover:scale-[1.03]">
                {/* Rating & Star */}
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-4xl sm:text-5xl font-black tracking-tight leading-none text-white">
                    4.9
                  </span>
                  <Star className="h-6 w-6 fill-white text-white translate-y-[-2px]" />
                </div>

                <p className="mt-2 text-xs font-semibold text-white/95 tracking-wide">
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
