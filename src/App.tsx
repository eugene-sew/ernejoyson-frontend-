import { lazy, Suspense, useEffect, type ComponentType } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { CartDrawer } from '@/components/common/CartDrawer'
import { CookieConsent } from '@/components/common/CookieConsent'
import { ChatWidget } from '@/components/common/ChatWidget'
import { Footer } from '@/components/sections/Footer'

// Home loads with the app; every other page is its own chunk (the map library only loads on /locations).
import { HomePage } from '@/pages/HomePage'

const page = <K extends string>(load: () => Promise<Record<K, ComponentType>>, name: K) =>
  lazy(() => load().then((m) => ({ default: m[name] })))
const ShopPage = page(() => import('@/pages/ShopPage'), 'ShopPage')
const ProductDetailPage = page(() => import('@/pages/ProductDetailPage'), 'ProductDetailPage')
const SolutionsPage = page(() => import('@/pages/SolutionsPage'), 'SolutionsPage')
const TechnicalSupportPage = page(() => import('@/pages/TechnicalSupportPage'), 'TechnicalSupportPage')
const LocationsPage = page(() => import('@/pages/LocationsPage'), 'LocationsPage')
const B2bPage = page(() => import('@/pages/B2bPage'), 'B2bPage')
const KnowledgePage = page(() => import('@/pages/KnowledgePage'), 'KnowledgePage')
const ArticlePage = page(() => import('@/pages/ArticlePage'), 'ArticlePage')
const AboutPage = page(() => import('@/pages/AboutPage'), 'AboutPage')
const LegalPrivacyPage = page(() => import('@/pages/LegalPrivacyPage'), 'LegalPrivacyPage')
const AccountPage = page(() => import('@/pages/AccountPage'), 'AccountPage')
const AccountOrderPage = page(() => import('@/pages/AccountPage'), 'AccountOrderPage')
const AccountResetPage = page(() => import('@/pages/AccountPage'), 'AccountResetPage')
const TrackOrderPage = page(() => import('@/pages/AccountPage'), 'TrackOrderPage')

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

/**
 * Public Layout Wrapper:
 * Renders customer storefront with sticky 3-pill navbar, cart drawer, cookie consent, and footer.
 */
function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#14532D] flex flex-col selection:bg-[#DCFCE7] selection:text-[#14532D] relative">
      {/* Sticky Fixed 3-Pill Navbar with Live Cart & Search */}
      <Header />

      {/* Global Order & B2B Inquiry Slide-Over Drawer */}
      <CartDrawer />

      {/* Ghana Data Protection Act Compliant Cookie Pop-up */}
      <CookieConsent />

      {/* Routed Platform Content */}
      <main className="flex-1 pt-12">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Modern Forest Green Footer */}
      <Footer />

      {/* Chat assistant (answers from the catalog, no LLM) */}
      <ChatWidget />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Storefront Routes (the admin portal is a separate app in ../admin) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ProductDetailPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/technical-support" element={<TechnicalSupportPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/b2b" element={<B2bPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/knowledge/:slug" element={<ArticlePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/orders/:number" element={<AccountOrderPage />} />
          <Route path="/account/reset" element={<AccountResetPage />} />
          <Route path="/track" element={<TrackOrderPage />} />
          
          {/* Legal, Privacy & Compliance Routes */}
          <Route path="/privacy" element={<LegalPrivacyPage />} />
          <Route path="/terms" element={<LegalPrivacyPage />} />
          <Route path="/cookies" element={<LegalPrivacyPage />} />
          <Route path="/compliance" element={<LegalPrivacyPage />} />
          <Route path="/legal" element={<LegalPrivacyPage />} />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
