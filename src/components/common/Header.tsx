import { useState, useEffect, useRef } from 'react'
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

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [cartCount] = useState(0)

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

  return (
    <header
      className={`fixed top-3 sm:top-4 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'py-1' : 'py-2.5 sm:py-3'
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
        {/* 1. Left Pill: Brand Logo */}
        <a
          href="#"
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
        </a>

        {/* 2. Center Pill: Navigation Links + Search + Cart */}
        <nav className="hidden lg:flex flex-1 h-14 items-center justify-between gap-4 2xl:gap-6 rounded-full bg-white px-6 shadow-md border border-black/5">
          {/* Navigation Dropdowns */}
          <div className="flex items-center gap-4 xl:gap-5 2xl:gap-6 text-sm font-bold text-[#14532D] shrink-0 h-full">
            {/* Dropdown 1: Shop Categories */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#categories" className="hover:text-[#166534] transition-colors">
                Shop
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
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
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Veterinary Pharmaceuticals
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Anti-Parasitics & Anthelmintics
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Nutritional Supplements
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Feeding & Drinking Systems
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Incubators & Hatchery Equipment
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Feed Processing Machines
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Slaughtering Equipment
                    </a>
                    <a href="#categories" className="rounded-xl px-3 py-1.5 text-[#14532D] hover:bg-[#FAF9F5] font-medium text-xs sm:text-sm">
                      Transport Cages
                    </a>

                    <div className="my-1 border-t border-black/5" />
                    <a
                      href="#featured-products"
                      className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between"
                    >
                      <span>Browse Featured Products</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown 2: Farm Solutions */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#farm-solutions" className="hover:text-[#166534] transition-colors">
                Solutions
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
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
                    <a href="#farm-solutions" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center gap-2.5">
                      <HeartPulse className="h-4 w-4 text-[#166534]" />
                      <span>Animal Health</span>
                    </a>
                    <a href="#farm-solutions" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center gap-2.5">
                      <Layers className="h-4 w-4 text-[#166534]" />
                      <span>Poultry Production</span>
                    </a>
                    <a href="#farm-solutions" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 text-[#166534]" />
                      <span>Farm Expansion</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown 3: Technical Support */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('support')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#technical-support" className="hover:text-[#166534] transition-colors">
                Technical Support
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
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
                    <a href="#technical-support" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Understand Your Needs
                    </a>
                    <a href="#technical-support" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Find the Right Products
                    </a>
                    <a href="#technical-support" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Use Products Effectively
                    </a>
                    <div className="my-1 border-t border-black/5" />
                    <a href="#b2b-quote" className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between">
                      <span>Talk to Our Technical Team</span>
                      <Headphones className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown 4: Locations */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('locations')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#locations" className="hover:text-[#166534] transition-colors">
                Locations
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
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
                    <a href="#locations" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between">
                      <span>Kasoa</span>
                      <span className="text-[10px] font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">Head Office</span>
                    </a>
                    <a href="#locations" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between">
                      <span>Kumasi</span>
                      <span className="text-[10px] text-[#14532D]/60">Middle & North</span>
                    </a>
                    <a href="#locations" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between">
                      <span>Swedru</span>
                      <span className="text-[10px] text-[#14532D]/60">Regional Hub</span>
                    </a>
                    <a href="#locations" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium flex items-center justify-between">
                      <span>Nsawam</span>
                      <span className="text-[10px] text-[#14532D]/60">Regional Hub</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown 5: B2B / Bulk Supply */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#166534] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('b2b')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#b2b" className="hover:text-[#166534] transition-colors">
                B2B & Bulk
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
              {activeDropdown === 'b2b' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('b2b')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-64 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#14532D]/50">
                      Commercial & Wholesale
                    </span>
                    <a href="#b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Commercial Farm Supply
                    </a>
                    <a href="#b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Wholesale Enquiries
                    </a>
                    <a href="#b2b" className="rounded-xl px-3 py-2 text-[#14532D] hover:bg-[#FAF9F5] font-medium">
                      Product Sourcing
                    </a>
                    <div className="my-1 border-t border-black/5" />
                    <a href="#b2b-quote" className="rounded-xl px-3 py-2 text-[#166534] hover:bg-[#DCFCE7]/40 font-bold text-xs flex items-center justify-between">
                      <span>Request Business Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown 6: Farm Knowledge */}
            <a href="#knowledge" className="hover:text-[#166534] transition-colors py-1 whitespace-nowrap">
              Knowledge
            </a>
          </div>

          {/* Right Group: Search Bar + Cart */}
          <div className="flex items-center gap-2.5 2xl:gap-3 shrink-0">
            {/* Search Bar */}
            <div className="relative flex items-center h-10 rounded-full bg-[#FAF9F5] px-4 transition-all focus-within:ring-1.5 focus-within:ring-[#166534]/40 w-44 xl:w-56 2xl:w-64 border border-[#EAE6DC]">
              <Search className="h-4 w-4 text-[#14532D]/50 shrink-0 mr-2" />
              <input
                type="text"
                placeholder="Search products & equipment..."
                className="w-full bg-transparent text-xs sm:text-sm text-[#14532D] placeholder:text-[#14532D]/50 focus:outline-none truncate font-medium"
              />
            </div>

            {/* Shopping Cart Pill Button */}
            <a
              href="#featured-products"
              aria-label="Shopping Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF9F5] text-[#14532D] border border-[#EAE6DC] transition-all hover:bg-[#F4F1EA] active:scale-95 cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4 text-[#14532D]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#166534] text-[10px] font-black text-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </nav>

        {/* 3. Right Pill: Primary B2B / High-Value CTA Button "Free Vaccination Chart" */}
        <a
          href="#b2b-quote"
          className={`hidden lg:inline-flex items-center justify-center gap-2 rounded-full h-14 px-7 shadow-md border border-black/5 text-sm font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0 ${
            isPastHero
              ? 'bg-[#14532D] text-white hover:bg-[#0E3B20] shadow-lg ring-1 ring-white/10'
              : 'bg-[#166534] text-white hover:bg-[#14532D]'
          }`}
        >
          <span>Free Vaccination Chart</span>
          <ArrowRight className="h-4 w-4 stroke-[2.5]" />
        </a>

        {/* Mobile / Tablet Header Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#featured-products"
            aria-label="Shopping Cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-black/5 text-[#14532D]"
          >
            <ShoppingCart className="h-4.5 w-4.5 text-[#14532D]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#166534] text-[10px] font-black text-white">
                {cartCount}
              </span>
            )}
          </a>

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
            <div className="flex items-center rounded-full bg-[#FAF9F5] px-4 py-3 border border-[#EAE6DC]">
              <Search className="h-4 w-4 text-[#14532D]/60 shrink-0 mr-2.5" />
              <input
                type="text"
                placeholder="Search veterinary products, poultry equipment..."
                className="w-full bg-transparent text-sm text-[#14532D] placeholder:text-[#14532D]/60 focus:outline-none font-medium"
              />
            </div>

            {/* Navigation Sections */}
            <div className="space-y-4 text-sm font-semibold text-[#14532D]">
              {/* Shopping Section */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">Shop Products</span>
                <div className="grid grid-cols-1 gap-2 text-sm font-medium text-[#14532D]/85 pt-1">
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Veterinary Pharmaceuticals</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Anti-Parasitics & Anthelmintics</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Nutritional Supplements</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Feeding & Drinking Systems</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Incubators & Hatchery Equipment</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Feed Processing Machines</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Slaughtering Equipment</a>
                  <a href="#categories" onClick={() => setMobileMenuOpen(false)}>Transport Cages</a>
                </div>
              </div>

              {/* B2B & Wholesale */}
              <div className="space-y-1.5 pt-3 border-t border-black/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">B2B & Bulk Supply</span>
                <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#14532D]/85 pt-1">
                  <a href="#b2b" onClick={() => setMobileMenuOpen(false)}>Bulk Orders</a>
                  <a href="#b2b" onClick={() => setMobileMenuOpen(false)}>Commercial Supply</a>
                  <a href="#b2b" onClick={() => setMobileMenuOpen(false)}>Wholesale Enquiries</a>
                  <a href="#b2b-quote" onClick={() => setMobileMenuOpen(false)}>Request Quote</a>
                </div>
              </div>

              {/* Technical Support */}
              <div className="space-y-1.5 pt-3 border-t border-black/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">Technical Support</span>
                <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#14532D]/85 pt-1">
                  <a href="#technical-support" onClick={() => setMobileMenuOpen(false)}>Product Guidance</a>
                  <a href="#technical-support" onClick={() => setMobileMenuOpen(false)}>Talk to an Expert</a>
                  <a href="#farm-solutions" onClick={() => setMobileMenuOpen(false)}>Farm Solutions</a>
                  <a href="#knowledge" onClick={() => setMobileMenuOpen(false)}>Farm Knowledge</a>
                </div>
              </div>

              {/* Locations in Ghana */}
              <div className="space-y-1.5 pt-3 border-t border-black/5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">Locations in Ghana</span>
                <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#14532D]/85 pt-1">
                  <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Kasoa (HQ)</a>
                  <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Kumasi</a>
                  <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Swedru</a>
                  <a href="#locations" onClick={() => setMobileMenuOpen(false)}>Nsawam</a>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-black/5 space-y-2">
              <a
                href="#b2b-quote"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#166534] text-white text-sm font-bold shadow-md hover:bg-[#14532D]"
              >
                <span>Free Vaccination Chart</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
