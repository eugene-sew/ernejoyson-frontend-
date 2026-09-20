import { useState } from 'react'
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  Settings, 
  LogOut, 
  ExternalLink, 
  Menu, 
  X, 
  ShieldCheck, 
  Building2
} from 'lucide-react'
import { useAdminAuthStore } from '@/store/useAdminAuthStore'

export function AdminLayout() {
  const { admin, isAuthenticated, logout } = useAdminAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Route guard
  if (!isAuthenticated) {
    navigate('/admin/login', { replace: true, state: { from: location } })
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const navItems = [
    { label: 'Overview', to: '/admin', icon: LayoutDashboard, end: true },
    { label: 'Orders & Dispatch', to: '/admin/orders', icon: ShoppingBag },
    { label: 'Catalog & Stock', to: '/admin/products', icon: Package },
    { label: 'Farmer Directory', to: '/admin/customers', icon: Users },
    { label: 'Hubs & Settings', to: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-[#0d1f12] text-white flex flex-col md:flex-row antialiased font-sans">
      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[#112918] border-b border-[#1b3d24] sticky top-0 z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#22C55E] flex items-center justify-center font-black text-[#0d1f12] text-sm">
            EJ
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white leading-tight">ERNEJOYSON</h1>
            <p className="text-[10px] text-[#86efac] font-mono uppercase tracking-wider">Admin Portal</p>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-[#183922] text-[#86efac] hover:bg-[#204a2c] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar for Desktop & Mobile Overlay */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen z-40 w-64 bg-[#112918] border-r border-[#1e4428] flex flex-col justify-between transition-transform duration-200 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Top Branding */}
        <div>
          <div className="p-6 border-b border-[#1e4428]/80 hidden md:flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#166534] to-[#22C55E] flex items-center justify-center font-black text-[#0d1f12] text-lg shadow-lg shadow-green-950/40">
                EJ
              </div>
              <div>
                <h1 className="text-base font-black tracking-tight text-white leading-tight">ERNEJOYSON</h1>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                  <p className="text-[11px] font-semibold text-[#86efac] tracking-wide uppercase">HQ Command</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Badge */}
          <div className="px-4 pt-4 pb-2">
            <div className="bg-[#183922]/80 border border-[#235331] rounded-xl p-3 flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#86efac] shrink-0" />
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">Current Facility</p>
                <p className="text-xs font-semibold text-white truncate">Kumasi Central Depot</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#22C55E] text-[#0d1f12] font-semibold shadow-md shadow-green-900/30'
                        : 'text-neutral-300 hover:text-white hover:bg-[#183922]'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                </NavLink>
              )
            })}
          </nav>
        </div>

        {/* Bottom Section (User Profile, Live Shop Link, Logout) */}
        <div className="p-4 border-t border-[#1e4428] space-y-2">
          {/* Link to public store */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 rounded-xl text-xs font-medium text-neutral-300 bg-[#163520] hover:bg-[#1d4429] hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-[#86efac]" />
              View Live Storefront
            </span>
            <span className="text-[10px] bg-[#22C55E]/20 text-[#86efac] px-1.5 py-0.5 rounded font-mono">GH</span>
          </a>

          {/* Logged in admin badge */}
          <div className="p-2.5 rounded-xl bg-[#0e2415] border border-[#1d4429] flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#166534] border border-[#22C55E]/40 flex items-center justify-center font-bold text-xs text-[#86efac] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white truncate">{admin?.name || 'Administrator'}</p>
                <p className="text-[10px] text-neutral-400 truncate">{admin?.role || 'superadmin'}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-950/40 transition-colors shrink-0"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#09160d] overflow-x-hidden min-h-screen">
        {/* Top Desktop Bar */}
        <div className="hidden md:flex items-center justify-between px-8 py-4 bg-[#112918]/60 border-b border-[#1b3d24] backdrop-blur sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#183922] border border-[#235331] text-[11px] font-semibold text-[#86efac]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
              Ghana Distribution Network: Live & Connected
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-neutral-400">
              Server: <strong className="text-white font-mono">SQLite WAL · Node.js</strong>
            </span>
            <span className="h-4 w-px bg-[#1b3d24]" />
            <span className="text-neutral-400">
              Region: <strong className="text-[#86efac]">Ashanti / Bono / Ahafo</strong>
            </span>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
