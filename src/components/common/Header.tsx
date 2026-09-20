import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  Search,
  ChevronDown,
  ShoppingCart,
  Menu,
  X,
  ShieldPlus,
  ArrowRight,
  Building2,
  Truck,
  Check,
  ShoppingBag,
  Home,
  Wrench,
} from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import { useAuthStore } from '@/store/useAuthStore'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const { getTotalItems, openCart } = useCartStore()
  const { hasRespondedVaccination } = useAuthStore()
  const cartCount = getTotalItems()
  const isShopPage = location.pathname.startsWith('/shop')

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const quickActionsEl = document.getElementById('quick-actions')
      if (quickActionsEl) {
        const rect = quickActionsEl.getBoundingClientRect()
        setIsPastHero(rect.top <= 140)
      } else {
        setIsPastHero(window.scrollY > 400)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const [prevPath, setPrevPath] = useState(location.pathname)
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname)
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-3 sm:top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3 sm:gap-4">
        {/* 1. Left Pill: Brand Logo */}
        <Link
          to="/"
          className="flex h-12 lg:h-14 items-center gap-2.5 rounded-full bg-white px-4 sm:px-6 shadow-md border border-black/5 shrink-0 transition-all duration-200 hover:scale-[1.01] active:scale-95"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
            <ShieldPlus className="h-4.5 w-4.5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs sm:text-sm font-black tracking-tight text-[#14532D] whitespace-nowrap">
              ERNEJOYSON
            </span>
            <span className="text-[9px] font-bold text-[#166534] tracking-wider uppercase -mt-0.5 hidden sm:block">
              Veterinary & Livestock
            </span>
          </div>
        </Link>

        {/* 2. Center Pill: Navigation Links + Search + Cart */}
        <nav className="hidden lg:flex flex-1 h-14 items-center justify-between gap-3 xl:gap-4 rounded-full bg-white px-4 xl:px-6 shadow-md border border-black/5">
          {/* Navigation Dropdowns: Spaced out evenly to occupy the full available space */}
          <div className="flex-1 flex items-center justify-between gap-1 xl:gap-2 text-sm font-bold text-[#14532D] h-full pr-2">
            {/* Nav Item: Home */}
            <Link
              to="/"
              className={`flex items-center px-3 xl:px-4 py-1.5 rounded-full transition-all whitespace-nowrap text-sm font-bold ${
                location.pathname === '/'
                  ? 'text-[#166534] font-black bg-[#DCFCE7]/70'
                  : 'text-[#14532D] hover:text-[#166534] hover:bg-[#FAF9F5]'
              }`}
            >
              Home
            </Link>

            {/* Nav Item: Shop */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/shop"
                className={`flex items-center gap-1 px-3 xl:px-4 py-1.5 rounded-full transition-all whitespace-nowrap text-sm font-bold ${
                  location.pathname.startsWith('/shop')
                    ? 'text-[#166534] font-black bg-[#DCFCE7]/70'
                    : 'text-[#14532D] hover:text-[#166534] hover:bg-[#FAF9F5]'
                }`}
              >
                Shop
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'shop' ? null : 'shop')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle shop menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'shop' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50 pointer-events-auto"
                  onMouseEnter={() => handleMouseEnter('shop')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-80 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Product Categories
                    </span>
                    <Link
                      to="/shop?category=antibiotics"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Therapeutic Antibiotics
                    </Link>
                    <Link
                      to="/shop?category=vitamins"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Nutritional Supplements &amp; Vitamins
                    </Link>
                    <Link
                      to="/shop?category=anti-parasitics"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Dewormers &amp; Parasiticides
                    </Link>
                    <Link
                      to="/shop?category=feeders"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Poultry Feeders &amp; Automatic Drinkers
                    </Link>
                    <Link
                      to="/shop?category=equipment"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Equipment, Incubators &amp; Crates
                    </Link>
                    <Link
                      to="/shop?category=disinfectants"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Biosecurity &amp; Disinfectants
                    </Link>

                    <div className="my-1 border-t border-black/5" />
                    <Link
                      to="/shop"
                      className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between"
                    >
                      <span>Browse All 100+ Products</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav Item: B2B Wholesales */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('b2b')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/b2b"
                className={`flex items-center gap-1 px-3 xl:px-4 py-1.5 rounded-full transition-all whitespace-nowrap text-sm font-bold ${
                  location.pathname === '/b2b'
                    ? 'text-[#166534] font-black bg-[#DCFCE7]/70'
                    : 'text-[#14532D] hover:text-[#166534] hover:bg-[#FAF9F5]'
                }`}
              >
                B2B Wholesales
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'b2b' ? null : 'b2b')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle B2B menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'b2b' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50 pointer-events-auto"
                  onMouseEnter={() => handleMouseEnter('b2b')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-72 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Commercial &amp; Wholesale
                    </span>
                    <Link to="/b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Commercial Farm Supply
                    </Link>
                    <Link to="/b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Agro-Vet Dealership Programme
                    </Link>
                    <Link to="/b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Master-Carton Wholesale &amp; Waybill
                    </Link>
                    <div className="my-1 border-t border-black/5" />
                    <Link
                      to="/b2b#rfq-form"
                      className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between"
                    >
                      <span>Request Proforma Invoice</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav Item: Technical Support */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/technical-support"
                className={`flex items-center gap-1 px-3 xl:px-4 py-1.5 rounded-full transition-all whitespace-nowrap text-sm font-bold ${
                  location.pathname === '/technical-support'
                    ? 'text-[#166534] font-black bg-[#DCFCE7]/70'
                    : 'text-[#14532D] hover:text-[#166534] hover:bg-[#FAF9F5]'
                }`}
              >
                Technical Support
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle technical support menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'support' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50 pointer-events-auto"
                  onMouseEnter={() => handleMouseEnter('support')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-80 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Advisory &amp; Field Support
                    </span>
                    <Link to="/technical-support" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Farm Advisory &amp; Field Consultations
                    </Link>
                    <Link to="/technical-support#vaccination-chart" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Flock Vaccination Schedules &amp; Dosing
                    </Link>
                    <Link to="/technical-support" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Equipment Calibration &amp; Servicing
                    </Link>
                    <Link to="/technical-support" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Biosecurity &amp; Disease Prevention
                    </Link>
                    <div className="my-1 border-t border-black/5" />
                    <Link
                      to="/technical-support"
                      className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between"
                    >
                      <span>Explore Technical Support Desk</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav Item: About */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/about"
                className={`flex items-center gap-1 px-3 xl:px-4 py-1.5 rounded-full transition-all whitespace-nowrap text-sm font-bold ${
                  location.pathname === '/about'
                    ? 'text-[#166534] font-black bg-[#DCFCE7]/70'
                    : 'text-[#14532D] hover:text-[#166534] hover:bg-[#FAF9F5]'
                }`}
              >
                About
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle about menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'about' && (
                <div
                  className="absolute top-full right-0 pt-2 z-50 pointer-events-auto"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-68 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Company Profile
                    </span>
                    <Link to="/about" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Corporate Overview
                    </Link>
                    <Link to="/about" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      4 Strategic Branches
                    </Link>
                    <Link to="/about" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Board &amp; Leadership Team
                    </Link>
                    <Link to="/about" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Vision, Mission &amp; Values
                    </Link>
                    <div className="my-1 border-t border-black/5" />
                    <Link
                      to="/knowledge"
                      className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between"
                    >
                      <span>Farmer Knowledge Base</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Group: Search Bar + Cart */}
          <div className="flex items-center gap-2.5 2xl:gap-3 shrink-0">
            {/* Search Bar - hidden on shop/product-related pages */}
            {!isShopPage && (
              <form onSubmit={handleSearchSubmit} className="relative flex items-center h-10 rounded-full bg-[#FAF9F5] px-4 transition-all focus-within:ring-1.5 focus-within:ring-[#166534]/40 w-44 xl:w-56 2xl:w-60 border border-[#EAE6DC]">
                <Search className="h-4 w-4 text-[#14532D]/50 shrink-0 mr-2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search drugs, equipment..."
                  className="w-full bg-transparent text-xs text-[#14532D] placeholder:text-[#14532D]/50 focus:outline-none truncate font-medium"
                />
              </form>
            )}

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              type="button"
              aria-label="Shopping Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] text-[#14532D] border border-[#EAE6DC] transition-all hover:bg-[#F4F1EA] active:scale-95 cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4 text-[#14532D]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#166534] text-[10px] font-black text-white shadow-sm animate-in zoom-in duration-150">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* 3. Right Pill: CTA Button "Free Vaccination Chart" / "Vaccination Schedule" */}
        <Link
          to="/technical-support#vaccination-chart"
          className={`hidden lg:inline-flex items-center justify-center gap-2 rounded-full h-14 px-6 sm:px-7 shadow-md border border-black/5 text-sm font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0 ${
            isPastHero
              ? 'bg-[#14532D] text-white hover:bg-[#0E3B20] shadow-lg ring-1 ring-white/10'
              : 'bg-[#166534] text-white hover:bg-[#14532D]'
          }`}
        >
          {hasRespondedVaccination ? (
            <>
              <Check className="h-4 w-4 text-[#4ADE80] stroke-[2.5]" />
              <span>Vaccination Schedule</span>
            </>
          ) : (
            <>
              <span>Free Vaccination Chart</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </>
          )}
        </Link>

        {/* Mobile / Tablet Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={openCart}
            type="button"
            aria-label="Shopping Cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-black/5 text-[#14532D] cursor-pointer"
          >
            <ShoppingCart className="h-4.5 w-4.5 text-[#14532D]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#166534] text-[10px] font-black text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-black/5 text-[#14532D]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 mt-3 pointer-events-auto">
          <div className="rounded-3xl bg-white/98 p-6 shadow-2xl backdrop-blur-xl border border-black/5 lg:hidden max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 space-y-5">
            {/* Search Input - shown when not on shop page */}
            {!isShopPage && (
              <form onSubmit={handleSearchSubmit} className="flex items-center rounded-full bg-[#FAF9F5] px-4 py-3 border border-[#EAE6DC]">
                <Search className="h-4 w-4 text-[#14532D]/60 shrink-0 mr-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search drugs, equipment..."
                  className="w-full bg-transparent text-sm text-[#14532D] placeholder:text-[#14532D]/60 focus:outline-none font-medium"
                />
              </form>
            )}

            {/* Navigation Sections */}
            <div className="space-y-1.5 pt-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl p-3 bg-[#FAF9F5] hover:bg-[#DCFCE7]/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534] shrink-0">
                  <Home className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#14532D]">Home</span>
                  <span className="text-[11px] text-[#14532D]/60 font-normal">Welcome to ERNEJOYSON homepage</span>
                </div>
              </Link>

              <Link
                to="/shop"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl p-3 bg-[#FAF9F5] hover:bg-[#DCFCE7]/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534] shrink-0">
                  <ShoppingBag className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#14532D]">Shop Products</span>
                  <span className="text-[11px] text-[#14532D]/60 font-normal">Veterinary pharmaceuticals &amp; farm equipment</span>
                </div>
              </Link>

              <Link
                to="/b2b"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl p-3 bg-[#FAF9F5] hover:bg-[#DCFCE7]/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534] shrink-0">
                  <Truck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#14532D]">B2B Wholesales</span>
                  <span className="text-[11px] text-[#14532D]/60 font-normal">Commercial farm supplies &amp; agro-dealer supply</span>
                </div>
              </Link>

              <Link
                to="/technical-support"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl p-3 bg-[#FAF9F5] hover:bg-[#DCFCE7]/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534] shrink-0">
                  <Wrench className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#14532D]">Technical Support</span>
                  <span className="text-[11px] text-[#14532D]/60 font-normal">Farm advisory, vaccination plans &amp; equipment service</span>
                </div>
              </Link>

              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 rounded-2xl p-3 bg-[#FAF9F5] hover:bg-[#DCFCE7]/40 transition-colors"
              >
                <div className="h-9 w-9 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534] shrink-0">
                  <Building2 className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#14532D]">About ERNEJOYSON</span>
                  <span className="text-[11px] text-[#14532D]/60 font-normal">Corporate profile, 4 branches &amp; leadership</span>
                </div>
              </Link>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-black/5 space-y-2">
              <Link
                to="/technical-support#vaccination-chart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#166534] text-white text-sm font-bold shadow-md hover:bg-[#14532D]"
              >
                {hasRespondedVaccination ? (
                  <>
                    <Check className="h-4 w-4 text-[#4ADE80]" />
                    <span>Vaccination Schedule</span>
                  </>
                ) : (
                  <>
                    <span>Free Vaccination Chart</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
