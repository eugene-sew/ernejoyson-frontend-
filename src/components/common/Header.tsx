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
  Headphones,
  Sparkles,
  Layers,
  HeartPulse,
} from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const { getTotalItems, openCart } = useCartStore()
  const cartCount = getTotalItems()

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
      className={`fixed top-3 sm:top-4 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'py-1' : 'py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
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
        <nav className="hidden lg:flex flex-1 h-14 items-center justify-between gap-4 2xl:gap-6 rounded-full bg-white px-6 shadow-md border border-black/5">
          {/* Navigation Dropdowns */}
          <div className="flex items-center gap-4 xl:gap-5 2xl:gap-6 text-sm font-bold text-[#14532D] shrink-0 h-full">
            {/* Nav Item: Shop */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/shop"
                className="flex items-center gap-1 hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full font-bold text-sm text-[#14532D]"
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
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('shop')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-72 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Product Categories
                    </span>
                    <Link
                      to="/shop?category=antibiotics"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Veterinary Pharmaceuticals
                    </Link>
                    <Link
                      to="/shop?category=anti-parasitics"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Dewormers &amp; Parasiticides
                    </Link>
                    <Link
                      to="/shop?category=vitamins"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Vitamins &amp; Amino Acids
                    </Link>
                    <Link
                      to="/shop?category=feeders"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Poultry Feeders (Chicks to Layers)
                    </Link>
                    <Link
                      to="/shop?category=drinkers"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Manual &amp; Automatic Drinkers
                    </Link>
                    <Link
                      to="/shop?category=equipment"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
                    >
                      Debeakers, Brooders &amp; Crates
                    </Link>
                    <Link
                      to="/shop?category=disinfectants"
                      className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm"
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

            {/* Nav Item: Solutions */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/solutions"
                className="flex items-center gap-1 hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full font-bold text-sm text-[#14532D]"
              >
                Solutions
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle solutions menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'solutions' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-64 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Operations Supported
                    </span>
                    <Link
                      to="/solutions#poultry"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center gap-2.5"
                    >
                      <Layers className="h-4 w-4 text-[#166534]" />
                      <span>Poultry Broiler/Layer Health</span>
                    </Link>
                    <Link
                      to="/solutions#disease-control"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center gap-2.5"
                    >
                      <HeartPulse className="h-4 w-4 text-[#166534]" />
                      <span>Disease Biosecurity</span>
                    </Link>
                    <Link
                      to="/solutions#livestock-ruminants"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center gap-2.5"
                    >
                      <Sparkles className="h-4 w-4 text-[#166534]" />
                      <span>Ruminant &amp; Swine Care</span>
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
                className="flex items-center gap-1 hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full font-bold text-sm text-[#14532D]"
              >
                Technical Support
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle support menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'support' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('support')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-68 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Farmer Assistance
                    </span>
                    <Link
                      to="/technical-support#vaccination-chart"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium"
                    >
                      Poultry Vaccination Schedule
                    </Link>
                    <Link
                      to="/technical-support"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium"
                    >
                      Flock Diagnosis Advice
                    </Link>
                    <div className="my-1 border-t border-black/5" />
                    <Link
                      to="/technical-support"
                      className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between"
                    >
                      <span>Talk to Our Veterinary Team</span>
                      <Headphones className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav Item: Locations */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('locations')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/locations"
                className="flex items-center gap-1 hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full font-bold text-sm text-[#14532D]"
              >
                Locations
              </Link>
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'locations' ? null : 'locations')}
                className="ml-0.5 flex items-center text-[#14532D]/60 hover:text-[#166534] cursor-pointer"
                aria-label="Toggle locations menu"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {activeDropdown === 'locations' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('locations')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-64 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Ghana Distribution Network
                    </span>
                    <Link
                      to="/locations"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between"
                    >
                      <span>Kasoa</span>
                      <span className="text-[10px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                        Head Office
                      </span>
                    </Link>
                    <Link
                      to="/locations"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between"
                    >
                      <span>Kumasi</span>
                      <span className="text-[10px] text-[#14532D]/60">Middle &amp; North</span>
                    </Link>
                    <Link
                      to="/locations"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between"
                    >
                      <span>Swedru</span>
                      <span className="text-[10px] text-[#14532D]/60">Regional Hub</span>
                    </Link>
                    <Link
                      to="/locations"
                      className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between"
                    >
                      <span>Nsawam</span>
                      <span className="text-[10px] text-[#14532D]/60">Regional Hub</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Nav Item: B2B & Bulk */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => handleMouseEnter('b2b')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/b2b"
                className="flex items-center gap-1 hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full font-bold text-sm text-[#14532D]"
              >
                B2B &amp; Bulk
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
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('b2b')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-64 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Commercial &amp; Wholesale
                    </span>
                    <Link to="/b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Commercial Farm Supply
                    </Link>
                    <Link to="/b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Agro-Vet Dealership
                    </Link>
                    <Link to="/b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Master-Carton Wholesale
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

            {/* Link: Knowledge */}
            <Link to="/knowledge" className="hover:text-[#166534] transition-colors py-1 whitespace-nowrap font-bold text-sm text-[#14532D]">
              Knowledge
            </Link>

            {/* Link: About */}
            <Link to="/about" className="hover:text-[#166534] transition-colors py-1 whitespace-nowrap font-bold text-sm text-[#14532D]">
              About
            </Link>
          </div>

          {/* Right Group: Search Bar + Cart */}
          <div className="flex items-center gap-2.5 2xl:gap-3 shrink-0">
            {/* Search Bar */}
            <form onSubmit={handleSearchSubmit} className="relative flex items-center h-10 rounded-full bg-[#FAF9F5] px-4 transition-all focus-within:ring-1.5 focus-within:ring-[#166534]/40 w-44 xl:w-56 2xl:w-60 border border-[#EAE6DC]">
              <Search className="h-4 w-4 text-[#14532D]/50 shrink-0 mr-2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search catalog..."
                className="w-full bg-transparent text-xs text-[#14532D] placeholder:text-[#14532D]/50 focus:outline-none truncate font-medium"
              />
            </form>

            {/* Shopping Cart Button */}
            <button
              onClick={openCart}
              type="button"
              aria-label="Shopping Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] text-[#14532D] border border-[#EAE6DC] transition-all hover:bg-[#F4F1EA] active:scale-95 cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4 text-[#14532D]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#166534] text-[10px] font-black text-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* 3. Right Pill: CTA Button "Free Vaccination Chart" */}
        <Link
          to="/technical-support#vaccination-chart"
          className={`hidden lg:inline-flex items-center justify-center gap-2 rounded-full h-14 px-7 shadow-md border border-black/5 text-sm font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0 ${
            isPastHero
              ? 'bg-[#14532D] text-white hover:bg-[#0E3B20] shadow-lg ring-1 ring-white/10'
              : 'bg-[#166534] text-white hover:bg-[#14532D]'
          }`}
        >
          <span>Free Vaccination Chart</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
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
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="flex items-center rounded-full bg-[#FAF9F5] px-4 py-3 border border-[#EAE6DC]">
              <Search className="h-4 w-4 text-[#14532D]/60 shrink-0 mr-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products & equipment..."
                className="w-full bg-transparent text-sm text-[#14532D] placeholder:text-[#14532D]/60 focus:outline-none font-medium"
              />
            </form>

            {/* Navigation Sections */}
            <div className="space-y-4 text-sm font-semibold text-[#14532D]">
              <div className="grid grid-cols-2 gap-2 text-sm font-bold text-[#14532D] pt-1">
                <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30">
                  Shop Products
                </Link>
                <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30">
                  Farm Solutions
                </Link>
                <Link to="/technical-support" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30">
                  Technical Support
                </Link>
                <Link to="/locations" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30">
                  4 Ghana Hubs
                </Link>
                <Link to="/b2b" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30">
                  B2B & Wholesale
                </Link>
                <Link to="/knowledge" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30">
                  Farm Knowledge
                </Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="rounded-xl p-2 bg-[#FAF9F5] hover:bg-[#DCFCE7]/30 col-span-2 text-center">
                  About ERNEJOYSON
                </Link>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-black/5 space-y-2">
              <Link
                to="/technical-support#vaccination-chart"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#166534] text-white text-sm font-bold shadow-md hover:bg-[#14532D]"
              >
                <span>Free Vaccination Chart</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
