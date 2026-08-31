import { useState } from 'react'
import { Asterisk, ArrowRight } from 'lucide-react'

export function FeaturesGridSection() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      id: 0,
      title: 'Magnetic Drive Impeller Pump',
      description:
        'Dual pump flow rate of up to 24 L/min[3]. This is a 100% increase compared with the previous generation, to meet demands of fields, orchards, and high-temperature environments.',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 1,
      title: 'Dual Atomizing Centrifugal Sprinklers',
      description:
        'Micron-level uniform atomization with adjustable droplet size ranging from 50 to 500 μm, preventing drift while maximizing leaf canopy absorption.',
      image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=90',
    },
    {
      id: 2,
      title: 'Brand-New Solenoid Valves',
      description:
        'High-precision start/stop dripping prevention with centrifugal atomization valves ensuring zero chemical wastage and pinpoint droplet distribution.',
      image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=90',
    },
  ]

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-16 sm:py-24 max-w-[1380px] mx-auto w-full space-y-12 sm:space-y-16">
      {/* Centered Display Header with Exact 3-line Break */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2B1D] leading-[1.14]">
          <span className="inline-flex items-center justify-center rounded-full bg-[#FAF5ED] border border-[#EAE4D6] h-11 w-11 sm:h-14 sm:w-14 text-[#8BD333] align-middle mr-2 sm:mr-3 shadow-sm">
            <Asterisk className="h-6 w-6 sm:h-8 sm:w-8 text-[#8BD333] stroke-[2.5]" />
          </span>
          Elevates agricultural <br />
          operations to{' '}
          <span className="inline-flex items-center justify-center rounded-full bg-[#8BD333] px-4 sm:px-6 py-1.5 sm:py-2 align-middle text-[#0A2B1D] mx-1 sm:mx-2 shadow-sm transition-transform hover:scale-105">
            <ArrowRight className="h-5 w-5 sm:h-7 sm:w-7 stroke-[2.5]" />
          </span> <br />
          new heights
        </h2>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Vertical Feature Selector with Indicator Line */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-5 border-l-2 border-[#0A2B1D]/15 pl-0">
            {features.map((feature, index) => {
              const isActive = activeTab === index
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`group relative pl-6 py-2 transition-all duration-300 cursor-pointer ${
                    isActive ? 'border-l-2 border-[#0A2B1D] -ml-[2px]' : '-ml-[2px] border-l-2 border-transparent'
                  }`}
                >
                  <h3
                    className={`font-display text-base sm:text-lg font-bold tracking-tight transition-colors ${
                      isActive ? 'text-[#0A2B1D]' : 'text-[#0A2B1D]/70 group-hover:text-[#0A2B1D]'
                    }`}
                  >
                    {feature.title}
                  </h3>

                  {isActive && (
                    <p className="text-xs sm:text-sm text-[#0A2B1D]/75 leading-relaxed mt-2.5 max-w-md animate-in fade-in duration-300">
                      {feature.description}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Cream Card with Drone Cutout */}
        <div className="lg:col-span-7">
          <div className="relative rounded-[36px] sm:rounded-[44px] bg-[#FAF5ED] border border-[#EAE4D6] p-6 sm:p-10 min-h-[340px] sm:min-h-[420px] flex items-center justify-center shadow-lg overflow-hidden group">
            {/* Top Right Stepped Notch Accent */}
            <div className="absolute top-0 right-0 w-16 h-10 bg-white/40 rounded-bl-[24px] pointer-events-none" />

            {/* Drone Feature Image Display */}
            <img
              src={features[activeTab].image}
              alt={features[activeTab].title}
              className="w-full max-h-[320px] sm:max-h-[380px] object-contain drop-shadow-2xl transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
