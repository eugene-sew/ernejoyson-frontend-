import { Header } from '@/components/common/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection'
import { FeaturesGridSection } from '@/components/sections/FeaturesGridSection'
import { WhyAgroneSection } from '@/components/sections/WhyAgroneSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/sections/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#0A2B1D] flex flex-col selection:bg-[#8BD333] selection:text-[#0A2B1D] relative">
      {/* Sticky Fixed 3-Pill Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1 space-y-4 sm:space-y-8">
        {/* Section 1: Full-Screen Hero */}
        <HeroSection />

        {/* Section 1.5: Partners / Clients Social Proof */}
        <PartnersSection />

        {/* Section 2: Capabilities & Drone Operations */}
        <CapabilitiesSection />

        {/* Section 3: Flagship Features & Reliability Grid */}
        <FeaturesGridSection />

        {/* Section 4: Why Agrone & Telemetry */}
        <WhyAgroneSection />

        {/* Section 5: Explore Our Products */}
        <ProductsSection />

        {/* Section 6: News & Field Studies */}
        <NewsSection />

        {/* Section 7: Call to Action Banner */}
        <CtaBanner />
      </main>

      {/* Section 8: Mega Dark Forest Footer */}
      <Footer />
    </div>
  )
}

export default App
