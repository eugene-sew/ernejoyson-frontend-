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

export function HomePage() {
  return (
    <div className="space-y-4 sm:space-y-8">
      {/* Hero: Better Animal Health. Better Farm Performance. */}
      <HeroSection />

      {/* Section 1 — Quick Actions: Find the Right Products for Your Farm */}
      <CapabilitiesSection />

      {/* Section 2 — Product Categories: 8 Core Veterinary & Equipment Categories */}
      <FeaturesGridSection />

      {/* Section 3 — Featured Products: Quality Products. Practical Solutions. */}
      <FeaturedProductsSection />

      {/* Section 4 — Why ERNEJOYSON: More Than a Supplier. A Partner in Better Farming. */}
      <WhyAgroneSection />

      {/* Section 5 — Farm Solutions: From Animal Health to Farm Equipment */}
      <ProductsSection />

      {/* Section 6 — Technical Support: The Right Product Is Only the Beginning. */}
      <TechnicalSupportSection />

      {/* Section 7 — Locations: Closer to Farmers Across Ghana */}
      <LocationsSection />

      {/* Section 8 — B2B / Bulk Supply: Need Products in Bulk? */}
      <B2bSection />

      {/* Section 9 — Farm Knowledge: Better Farming Starts With Better Information. */}
      <NewsSection />

      {/* Final CTA: Let's Build a Better Farm Operation. */}
      <CtaBanner />
    </div>
  )
}
