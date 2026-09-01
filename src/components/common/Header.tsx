import { useState, useEffect, useRef } from 'react'
import {
  Search,
  ChevronDown,
  ShoppingCart,
  User,
  Menu,
  X,
  Drone,
  ArrowRight,
  Package,
  FileText,
  Bookmark,
  Building2,
  Settings,
  LogOut,
} from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHeroPartners, setIsPastHeroPartners] = useState(false)
  const [cartCount] = useState(0) // Default cart count is 0
  const [isLoggedIn] = useState(false) // Account pill only visible when logged in

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
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Check if scrolled past Hero + Partners section
      const capabilitiesEl = document.getElementById('capabilities')
      if (capabilitiesEl) {
        const rect = capabilitiesEl.getBoundingClientRect()
        setIsPastHeroPartners(rect.top <= 140)
      } else {
        const threshold = window.innerHeight * 0.85 + 160
        setIsPastHeroPartners(window.scrollY > threshold)
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
      className={`fixed top-4 sm:top-5 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
        isScrolled ? 'py-1.5' : 'py-3 sm:py-4'
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-3 sm:gap-4 pointer-events-auto">
        {/* 1. Left Pill: Brand Logo (Matched h-12 on mobile, h-14 on desktop) */}
        <a
          href="#"
          className="flex h-12 lg:h-14 items-center gap-2.5 rounded-full bg-white px-4 sm:px-6 shadow-md border border-black/5 shrink-0 transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          <div className="flex h-6 w-6 items-center justify-center text-[#8BD333]">
            <Drone className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="font-display text-xs sm:text-sm font-black tracking-tight text-[#0A2B1D] whitespace-nowrap">
            ERNEJOYSON LIMITED
          </span>
        </a>

        {/* 2. Center Pill: Navigation Links + (Search & Cart tightly grouped on right) (Matched h-14 on desktop) */}
        <nav className="hidden lg:flex flex-1 h-14 items-center justify-between gap-4 2xl:gap-6 rounded-full bg-white px-6 shadow-md border border-black/5">
          {/* Navigation Links (Unwrapped & Spacious) */}
          <div className="flex items-center gap-4 xl:gap-5 2xl:gap-7 text-sm font-bold text-[#0A2B1D] shrink-0 h-full">
            {/* 1. Shop Dropdown */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#8BD333] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#products" className="hover:text-[#8BD333] transition-colors">
                Shop
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
              {activeDropdown === 'shop' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('shop')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-64 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A2B1D]/45">
                      Product Categories
                    </span>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-semibold flex items-center justify-between">
                      <span>All Products</span>
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Farm Machinery
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Poultry Equipment
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Agricultural Implements
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Animal Health
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Irrigation & Water
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Feed & Farm Supplies
                    </a>
                    <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Processing Equipment
                    </a>

                    <div className="my-1.5 border-t border-black/5" />
                    <a
                      href="#products"
                      className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#8BD333]/15 font-bold text-xs flex items-center justify-between"
                    >
                      <span>View All Products</span>
                      <ArrowRight className="h-4 w-4 text-[#8BD333]" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Solutions Dropdown */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#8BD333] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('solutions')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#capabilities" className="hover:text-[#8BD333] transition-colors">
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
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A2B1D]/45">
                      Farm Problems Solved
                    </span>
                    <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Farm Setup
                    </a>
                    <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Farm Upgrade
                    </a>
                    <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Poultry Solutions
                    </a>
                    <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Agricultural Machinery
                    </a>
                    <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Installation & Maintenance
                    </a>
                    <div className="my-1.5 border-t border-black/5" />
                    <a href="#contact" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-bold flex items-center justify-between">
                      <span>B2B / Wholesale</span>
                      <span className="text-xs text-[#8BD333] font-bold">Enterprise</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Farm Advisory Dropdown */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#8BD333] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('advisory')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#services" className="hover:text-[#8BD333] transition-colors">
                Farm Advisory
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
              {activeDropdown === 'advisory' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('advisory')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-64 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A2B1D]/45">
                      Get Expert Guidance
                    </span>
                    <a href="#services" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Start a Farm
                    </a>
                    <a href="#services" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Expand Your Farm
                    </a>
                    <a href="#services" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Farm Assessment
                    </a>
                    <a href="#services" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Talk to an Expert
                    </a>
                    <div className="my-1.5 border-t border-black/5" />
                    <a href="#contact" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-bold flex items-center justify-between">
                      <span>Request a Farm Quote</span>
                      <ArrowRight className="h-4 w-4 text-[#8BD333]" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Resources Dropdown */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#8BD333] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#news" className="hover:text-[#8BD333] transition-colors">
                Resources
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
              {activeDropdown === 'resources' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-60 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0A2B1D]/45">
                      Knowledge Hub & Media
                    </span>
                    <a href="#news" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Agriculture Hub
                    </a>
                    <a href="#news" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Farming Guides
                    </a>
                    <a href="#news" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Equipment Guides
                    </a>
                    <a href="#news" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Videos
                    </a>
                    <a href="#news" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      FAQs
                    </a>
                    <a href="#news" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Case Studies
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 5. About Dropdown */}
            <div
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-[#8BD333] transition-colors py-1 whitespace-nowrap h-full"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#contact" className="hover:text-[#8BD333] transition-colors">
                About
              </a>
              <ChevronDown className="h-3.5 w-3.5 transition-transform opacity-70" />
              {activeDropdown === 'about' && (
                <div
                  className="absolute top-full left-0 pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-56 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                    <a href="#about" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      About Enerjoyson
                    </a>
                    <a href="#about" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Our Story
                    </a>
                    <a href="#team" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Our Team
                    </a>
                    <a href="#contact" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Locations
                    </a>
                    <a href="#contact" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Group: Search Bar + (Account if logged in) + Cart Icon tightly nested */}
          <div className="flex items-center gap-2.5 2xl:gap-3 shrink-0">
            {/* Search Bar */}
            <div className="relative flex items-center h-10 rounded-full bg-[#FAF2EB] px-4 transition-all focus-within:ring-1.5 focus-within:ring-[#0A2B1D]/40 w-48 xl:w-56 2xl:w-64">
              <Search className="h-4 w-4 text-[#0A2B1D]/60 shrink-0 mr-2.5" />
              <input
                type="text"
                placeholder="Search products, equipment, or solutions..."
                className="w-full bg-transparent text-xs sm:text-sm text-[#0A2B1D] placeholder:text-[#0A2B1D]/55 focus:outline-none truncate font-medium"
              />
            </div>

            {/* Account Pill (Conditional on isLoggedIn) */}
            {isLoggedIn && (
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('account')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex h-10 items-center gap-2 rounded-full bg-[#FAF2EB] px-3.5 text-sm font-bold text-[#0A2B1D] transition-all hover:bg-[#F3E8DD] active:scale-95 cursor-pointer"
                >
                  <User className="h-4 w-4 text-[#0A2B1D]" />
                  <span className="hidden 2xl:inline">Account</span>
                </button>

                {activeDropdown === 'account' && (
                  <div
                    className="absolute top-full right-0 pt-2 z-50"
                    onMouseEnter={() => handleMouseEnter('account')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-60 rounded-2xl bg-white p-3 shadow-2xl border border-black/5 flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-3 py-2 border-b border-black/5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#0A2B1D]/45 block">
                          My Account
                        </span>
                        <span className="text-sm font-bold text-[#0A2B1D]">Farmer Dashboard</span>
                      </div>

                      <a href="#orders" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium flex items-center gap-2.5">
                        <Package className="h-4 w-4 text-[#0A2B1D]/60" />
                        <span>Orders</span>
                      </a>
                      <a href="#quotes" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium flex items-center gap-2.5">
                        <FileText className="h-4 w-4 text-[#0A2B1D]/60" />
                        <span>Quotes</span>
                      </a>
                      <a href="#saved" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium flex items-center gap-2.5">
                        <Bookmark className="h-4 w-4 text-[#0A2B1D]/60" />
                        <span>Saved Products</span>
                      </a>
                      <a href="#farm" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium flex items-center gap-2.5">
                        <Building2 className="h-4 w-4 text-[#0A2B1D]/60" />
                        <span>Farm Profile</span>
                      </a>
                      <a href="#settings" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium flex items-center gap-2.5">
                        <Settings className="h-4 w-4 text-[#0A2B1D]/60" />
                        <span>Account Settings</span>
                      </a>

                      <div className="my-1.5 border-t border-black/5" />
                      <a href="#signout" className="rounded-xl px-3 py-2 text-rose-600 hover:bg-rose-50 font-bold flex items-center gap-2.5">
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Shopping Cart Pill Button (Default count is 0, badge only shows when count > 0) */}
            <button
              type="button"
              aria-label="Shopping Cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF2EB] text-[#0A2B1D] transition-all hover:bg-[#F3E8DD] active:scale-95 cursor-pointer"
            >
              <ShoppingCart className="h-4 w-4 text-[#0A2B1D]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8BD333] text-[10px] font-black text-[#0A2B1D] shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* 3. Right Pill: Primary High-Value CTA Button "Get a Quote" (Matched h-14 on desktop) */}
        <a
          href="#contact"
          className={`hidden lg:inline-flex items-center justify-center gap-2 rounded-full h-14 px-8 shadow-md border border-black/5 text-sm font-extrabold transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0 ${
            isPastHeroPartners
              ? 'bg-[#0A2B1D] text-white hover:bg-[#154631] shadow-lg ring-1 ring-white/10'
              : 'bg-[#8BD333] text-white hover:bg-[#9BE139]'
          }`}
        >
          <span>Get a Quote</span>
          <ArrowRight className={`h-4 w-4 stroke-[2.5] transition-colors ${isPastHeroPartners ? 'text-[#8BD333]' : 'text-white'}`} />
        </a>

        {/* Mobile / Tablet Controls (Matched h-12 with Brand Logo) */}
        <div className="flex items-center gap-2.5 lg:hidden">
          {/* Mobile Cart Button */}
          <button
            type="button"
            aria-label="Shopping Cart"
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md border border-black/5 text-[#0A2B1D]"
          >
            <ShoppingCart className="h-4.5 w-4.5 text-[#0A2B1D]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8BD333] text-[10px] font-black text-[#0A2B1D]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger */}
          <div className="flex items-center rounded-full bg-white p-1.5 shadow-md border border-black/5 h-12 w-12 justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF2EB] text-[#0A2B1D]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 mt-3 pointer-events-auto">
          <div className="rounded-3xl bg-white/98 p-6 shadow-2xl backdrop-blur-xl border border-black/5 lg:hidden max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 space-y-5">
            {/* Search Input */}
            <div className="flex items-center rounded-full bg-[#FAF2EB] px-4 py-3">
              <Search className="h-4 w-4 text-[#0A2B1D]/60 shrink-0 mr-2.5" />
              <input
                type="text"
                placeholder="Search products, equipment, or solutions..."
                className="w-full bg-transparent text-sm text-[#0A2B1D] placeholder:text-[#0A2B1D]/60 focus:outline-none font-medium"
              />
            </div>

            {/* Navigation Groups */}
            <div className="space-y-5 text-sm font-semibold text-[#0A2B1D]">
              {/* Shop */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A2B1D]/45">Shop</span>
                <div className="grid grid-cols-2 gap-2.5 text-sm font-medium text-[#0A2B1D]/80 pt-1">
                  <a href="#products" onClick={() => setMobileMenuOpen(false)}>Farm Machinery</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)}>Poultry Equipment</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)}>Agricultural Implements</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)}>Animal Health</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)}>Irrigation & Water</a>
                  <a href="#products" onClick={() => setMobileMenuOpen(false)}>Feed Supplies</a>
                </div>
              </div>

              {/* Solutions */}
              <div className="space-y-1.5 pt-2 border-t border-black/5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A2B1D]/45">Solutions</span>
                <div className="grid grid-cols-2 gap-2.5 text-sm font-medium text-[#0A2B1D]/80 pt-1">
                  <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Farm Setup</a>
                  <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Farm Upgrade</a>
                  <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Poultry Solutions</a>
                  <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>Installation</a>
                </div>
              </div>

              {/* Farm Advisory */}
              <div className="space-y-1.5 pt-2 border-t border-black/5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A2B1D]/45">Farm Advisory</span>
                <div className="grid grid-cols-2 gap-2.5 text-sm font-medium text-[#0A2B1D]/80 pt-1">
                  <a href="#services" onClick={() => setMobileMenuOpen(false)}>Start a Farm</a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)}>Expand Your Farm</a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)}>Farm Assessment</a>
                  <a href="#services" onClick={() => setMobileMenuOpen(false)}>Talk to an Expert</a>
                </div>
              </div>

              {/* Resources & About */}
              <div className="space-y-1.5 pt-2 border-t border-black/5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0A2B1D]/45">Resources & About</span>
                <div className="grid grid-cols-2 gap-2.5 text-sm font-medium text-[#0A2B1D]/80 pt-1">
                  <a href="#news" onClick={() => setMobileMenuOpen(false)}>Agriculture Hub</a>
                  <a href="#news" onClick={() => setMobileMenuOpen(false)}>Farming Guides</a>
                  <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Get a Quote */}
            <div className="pt-3 border-t border-black/5 space-y-2.5">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
                  isPastHeroPartners ? 'bg-[#0A2B1D] text-white' : 'bg-[#8BD333] text-white'
                }`}
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
