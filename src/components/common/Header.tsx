import { useState, useEffect } from 'react'
import { Search, ChevronDown, ShoppingBag, Menu, X, Drone } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dronesDropdownOpen, setDronesDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${isScrolled ? 'py-2.5' : 'py-4 sm:py-6'
        }`}
    >
      <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-12 w-full flex items-center justify-between gap-3 pointer-events-auto">
        {/* 1. Left Pill: Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-sm border border-black/5 shrink-0 transition-all duration-200 hover:scale-[1.02] active:scale-95"
        >
          <div className="flex h-6 w-6 items-center justify-center text-[#8BD333]">
            <Drone className="h-5 w-5 stroke-[2.5]" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-[#0A2B1D]">
            Agrone
          </span>
        </a>

        {/* 2. Center Pill: Navigation Links + Search + Cart/Bag */}
        <nav className="hidden lg:flex flex-1 items-center justify-between gap-6 rounded-full bg-white px-6 py-2 shadow-sm border border-black/5">
          {/* Navigation Links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-[#0A2B1D]">
            <a href="#home" className="hover:text-[#8BD333] transition-colors">
              Home
            </a>

            {/* Drones Dropdown */}
            <div
              className="relative flex items-center gap-1 cursor-pointer hover:text-[#8BD333] transition-colors py-1"
              onMouseEnter={() => setDronesDropdownOpen(true)}
              onMouseLeave={() => setDronesDropdownOpen(false)}
            >
              <span>Drones</span>
              <ChevronDown className="h-3.5 w-3.5 transition-transform" />
              {dronesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-white p-2 shadow-xl border border-black/5 flex flex-col gap-1 text-xs z-50 animate-in fade-in zoom-in-95 duration-150">
                  <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                    DJI Agras T50
                  </a>
                  <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                    DJI Agras T25
                  </a>
                  <a href="#products" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                    DJI Mavic 3M
                  </a>
                </div>
              )}
            </div>

            <a href="#capabilities" className="hover:text-[#8BD333] transition-colors">
              How it Works
            </a>

            {/* Services Dropdown */}
            <div
              className="relative flex items-center gap-1 cursor-pointer hover:text-[#8BD333] transition-colors py-1"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <span>Services</span>
              <ChevronDown className="h-3.5 w-3.5 transition-transform" />
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-2xl bg-white p-2 shadow-xl border border-black/5 flex flex-col gap-1 text-xs z-50 animate-in fade-in zoom-in-95 duration-150">
                  <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                    Precision Spraying
                  </a>
                  <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                    Field Mapping & GIS
                  </a>
                  <a href="#capabilities" className="rounded-xl px-3 py-2 text-[#0A2B1D] hover:bg-[#FAF5ED] font-medium">
                    Autonomous Fleet
                  </a>
                </div>
              )}
            </div>

            <a href="#news" className="hover:text-[#8BD333] transition-colors">
              Blog
            </a>

            <a href="#contact" className="hover:text-[#8BD333] transition-colors">
              Contact us
            </a>
          </div>

          {/* Right actions inside Center Pill: Peach Tinted Search + Bag */}
          <div className="flex items-center gap-2">
            {/* Search Pill */}
            <div className="relative flex items-center rounded-full bg-[#FAF2EB] px-3.5 py-1.5 transition-all focus-within:ring-1 focus-within:ring-[#0A2B1D]/20">
              <Search className="h-3.5 w-3.5 text-[#0A2B1D] shrink-0 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="w-20 lg:w-28 xl:w-36 bg-transparent text-xs text-[#0A2B1D] placeholder:text-[#0A2B1D]/70 focus:outline-none"
              />
            </div>

            {/* Shopping Bag / Basket Pill Button */}
            <button
              type="button"
              aria-label="Shopping Cart"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF2EB] text-[#0A2B1D] transition-all hover:bg-[#F3E8DD] active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="h-3.5 w-3.5 text-[#0A2B1D]" />
            </button>
          </div>
        </nav>

        {/* 3. Right Pill: Standalone Contact Us Button */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 shadow-sm border border-black/5 text-xs font-semibold text-[#0A2B1D] transition-all hover:bg-[#FAF5ED] hover:scale-[1.02] active:scale-95 shrink-0"
        >
          Contact Us
        </a>

        {/* Mobile / Tablet View Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center rounded-full bg-white p-1 shadow-sm border border-black/5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF2EB] text-[#0A2B1D]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-[1380px] mx-auto px-6 sm:px-10 mt-3 pointer-events-auto">
          <div className="rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-xl border border-black/5 lg:hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col gap-4 text-sm font-medium text-[#0A2B1D]">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-semibold text-[#0A2B1D]">
                Home
              </a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)}>
                Drones
              </a>
              <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>
                How it Works
              </a>
              <a href="#capabilities" onClick={() => setMobileMenuOpen(false)}>
                Services
              </a>
              <a href="#news" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact us
              </a>

              <div className="pt-3 border-t border-black/5 flex flex-col gap-3">
                <div className="flex items-center rounded-full bg-[#FAF2EB] px-4 py-2">
                  <Search className="h-4 w-4 text-[#0A2B1D] shrink-0 mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent text-xs text-[#0A2B1D] placeholder:text-[#0A2B1D]/70 focus:outline-none"
                  />
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-full items-center justify-center rounded-full bg-[#0A2B1D] text-xs font-semibold text-white"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
