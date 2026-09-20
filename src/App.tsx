import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { Header } from '@/components/common/Header'
import { CartDrawer } from '@/components/common/CartDrawer'
import { Footer } from '@/components/sections/Footer'

// Dedicated Public Pages
import { HomePage } from '@/pages/HomePage'
import { ShopPage } from '@/pages/ShopPage'
import { ProductDetailPage } from '@/pages/ProductDetailPage'
import { SolutionsPage } from '@/pages/SolutionsPage'
import { TechnicalSupportPage } from '@/pages/TechnicalSupportPage'
import { LocationsPage } from '@/pages/LocationsPage'
import { B2bPage } from '@/pages/B2bPage'
import { KnowledgePage } from '@/pages/KnowledgePage'
import { AboutPage } from '@/pages/AboutPage'

// Admin Portal Pages
import { AdminLoginPage } from '@/pages/admin/AdminLoginPage'
import { AdminLayout } from '@/pages/admin/AdminLayout'
import { AdminDashboardPage } from '@/pages/admin/AdminDashboardPage'
import { AdminOrdersPage } from '@/pages/admin/AdminOrdersPage'
import { AdminProductsPage } from '@/pages/admin/AdminProductsPage'
import { AdminCustomersPage } from '@/pages/admin/AdminCustomersPage'
import { AdminSettingsPage } from '@/pages/admin/AdminSettingsPage'

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
 * Renders customer storefront with sticky 3-pill navbar, cart drawer, and footer.
 */
function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#14532D] flex flex-col selection:bg-[#DCFCE7] selection:text-[#14532D] relative">
      {/* Sticky Fixed 3-Pill Navbar with Live Cart & Search */}
      <Header />

      {/* Global Order & B2B Inquiry Slide-Over Drawer */}
      <CartDrawer />

      {/* Routed Platform Content */}
      <main className="flex-1 pt-12">
        <Outlet />
      </main>

      {/* Mega Forest Green Footer */}
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Admin Login Route */}
        <Route path="/admin/login" element={<AdminLoginPage />} />

        {/* Admin Protected Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="customers" element={<AdminCustomersPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>

        {/* Public Storefront Routes */}
        <Route element={<PublicLayout />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
