import { Header } from '@/components/common/Header'
import { HeroSection } from '@/components/sections/HeroSection'
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection'
import { FeaturesGridSection } from '@/components/sections/FeaturesGridSection'
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection'
import { WhyAgroneSection } from '@/components/sections/WhyAgroneSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { TechnicalSupportSection } from '@/components/sections/TechnicalSupportSection'
import { LocationsSection } from '@/components/sections/LocationsSection'
import { B2bSection } from '@/components/sections/B2bSection'
import { NewsSection } from '@/components/sections/NewsSection'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { Footer } from '@/components/sections/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#14532D] flex flex-col selection:bg-[#DCFCE7] selection:text-[#14532D] relative">
      {/* 1. Sticky Fixed 3-Pill Navbar */}
      <Header />

      {/* Main Page Flow - 13 Explicit Structured Sections */}
      <main className="flex-1 space-y-4 sm:space-y-8">
        {/* 2. Hero: Better Animal Health. Better Farm Performance. */}
        <HeroSection />

        {/* 3. Section 1 — Quick Actions: Find the Right Products for Your Farm */}
        <CapabilitiesSection />

        {/* 4. Section 2 — Product Categories: 8 Core Veterinary & Equipment Categories */}
        <FeaturesGridSection />

        {/* 5. Section 3 — Featured Products: Quality Products. Practical Solutions. */}
        <FeaturedProductsSection />

        {/* 6. Section 4 — Why ERNEJOYSON: More Than a Supplier. A Partner in Better Farming. */}
        <WhyAgroneSection />

        {/* 7. Section 5 — Farm Solutions: From Animal Health to Farm Equipment */}
        <ProductsSection />

        {/* 8. Section 6 — Technical Support: The Right Product Is Only the Beginning. */}
        <TechnicalSupportSection />

        {/* 9. Section 7 — Locations: Closer to Farmers Across Ghana */}
        <LocationsSection />

        {/* 10. Section 8 — B2B / Bulk Supply: Need Products in Bulk? */}
        <B2bSection />

        {/* 11. Section 9 — Farm Knowledge: Better Farming Starts With Better Information. */}
        <NewsSection />

        {/* 12. Final CTA: Let's Build a Better Farm Operation. */}
        <CtaBanner />
      </main>

      {/* 13. Footer: Mega Forest Green Footer with Ghana Distribution Network */}
      <Footer />
    </div>
  )
}

export default App
