import { Sparkles, ArrowRight, MessageSquareCheck, SearchCheck, CheckCircle2, Headphones } from 'lucide-react'

export function TechnicalSupportSection() {
  const steps = [
    {
      step: '01',
      title: 'Understand Your Needs',
      description: 'Tell us about your livestock, production setup and requirements.',
      icon: MessageSquareCheck,
    },
    {
      step: '02',
      title: 'Find the Right Products',
      description: 'Get guidance on products and equipment relevant to your operation.',
      icon: SearchCheck,
    },
    {
      step: '03',
      title: 'Use Products Effectively',
      description: 'Receive practical guidance on the intended use of the products and equipment you purchase.',
      icon: CheckCircle2,
    },
  ]

  return (
    <section id="technical-support" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#166534]">
              <Sparkles className="h-3.5 w-3.5 fill-current" />
              EXPERT SUPPORT
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            The Right Product Is <br className="hidden sm:inline" />
            Only the Beginning.
          </h2>

          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            Every farm has different challenges. Our technical team helps customers understand their product options and make informed decisions based on their operational needs.
          </p>
        </div>

        {/* CTA Button */}
        <div className="shrink-0">
          <a
            href="#b2b-quote"
            className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-7 py-3.5 text-sm font-extrabold text-white shadow-md transition-all hover:bg-[#14532D] hover:scale-[1.02] active:scale-95"
          >
            <Headphones className="h-4.5 w-4.5" />
            <span>Talk to Our Team</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.step}
              className="group rounded-[32px] bg-white p-7 sm:p-8 shadow-sm border border-[#EAE6DC] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Step Pill & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-black text-[#166534]">
                    {item.step}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#166534] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 stroke-[2.2]" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-extrabold text-[#14532D] tracking-tight pt-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#14532D]/75 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EAE6DC]/60 flex items-center gap-2 text-xs font-bold text-[#166534]">
                <span>Practical Guidance</span>
                <div className="h-1 w-1 rounded-full bg-[#166534]" />
                <span>Field-Tested</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
