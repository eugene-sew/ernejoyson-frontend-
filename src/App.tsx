import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { CartDrawer } from '@/components/common/CartDrawer'
import { Footer } from '@/components/sections/Footer'

// Dedicated Pages
import { HomePage } from '@/pages/HomePage'
import { ShopPage } from '@/pages/ShopPage'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { TechnicalSupportPage } from '@/pages/TechnicalSupportPage'
import { LocationsPage } from '@/pages/LocationsPage'
import { B2bPage } from '@/pages/B2bPage'
import { KnowledgePage } from '@/pages/KnowledgePage'
import { AboutPage } from '@/pages/AboutPage'

/**
 * ScrollToTop helper:
 * Scrolls to the top of the viewport on route transitions,
 * or smooth-scrolls to the target element if a hash exists.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#FAF9F5] text-[#14532D] flex flex-col selection:bg-[#DCFCE7] selection:text-[#14532D] relative">
        {/* Sticky Fixed 3-Pill Navbar with Live Cart & Search */}
        <Header />

        {/* Global Order & B2B Inquiry Slide-Over Drawer */}
        <CartDrawer />

        {/* Routed Platform Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:id" element={<ProductDetailPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/technical-support" element={<TechnicalSupportPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/b2b" element={<B2bPage />} />
            <Route path="/knowledge" element={<KnowledgePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Mega Forest Green Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
