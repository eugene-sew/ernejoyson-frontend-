import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, Shield, Check, X, SlidersHorizontal, ArrowLeft } from 'lucide-react'

export interface CookiePreferences {
  essential: boolean // always true
  analytics: boolean
  marketing: boolean
}

const STORAGE_KEY = 'ej_cookie_consent_v1'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        // Small delay so it feels natural and does not block page load
        const timer = setTimeout(() => setIsVisible(true), 1000)
        return () => clearTimeout(timer)
      } else {
        const parsed = JSON.parse(stored)
        setPreferences(parsed)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  // Listen for custom event to reopen preferences from the footer "Cookie Settings"
  useEffect(() => {
    const handleOpenSettings = () => {
      setShowPreferences(true)
      setIsVisible(true)
    }

    window.addEventListener('open-cookie-settings', handleOpenSettings)
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings)
  }, [])

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
    } catch {
      // ignore
    }
    setPreferences(prefs)
    setIsVisible(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleEssentialOnly = () => {
    savePreferences({
      essential: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSaveCustom = () => {
    savePreferences(preferences)
  }

  if (!isVisible) return null

  return (
    <aside
      aria-label="Cookie and data preferences"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5 pointer-events-none flex justify-center animate-in fade-in slide-in-from-bottom-6 duration-300"
    >
      <div className="pointer-events-auto w-full max-w-6xl bg-[#071c0f]/95 text-white rounded-3xl border border-[#22C55E]/30 p-5 sm:p-6 shadow-2xl backdrop-blur-2xl">
        {!showPreferences ? (
          /* ─── Long / Wide Horizontal Bar Layout ─── */
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Left Content Area */}
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 shrink-0 mt-0.5">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="font-display font-extrabold text-white text-base tracking-tight">
                    Data &amp; Cookie Governance
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#86efac] bg-[#22C55E]/15 px-2.5 py-0.5 rounded-full border border-[#22C55E]/30">
                    <Shield className="h-3 w-3" />
                    <span>Ghana Data Protection Act (Act 843) Compliant</span>
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed font-sans">
                  We use essential storage to preserve your cart items, remember regional depot selections (Kumasi, Kasoa, Sunyani, Goaso), and support secure Paystack transactions. You can manage non-essential preferences or accept all cookies.
                </p>
                <div className="flex items-center gap-3 text-[11px] text-neutral-400 pt-0.5">
                  <Link to="/privacy" className="hover:text-[#86efac] underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  <span>•</span>
                  <Link to="/cookies" className="hover:text-[#86efac] underline underline-offset-2">
                    Cookie Policy
                  </Link>
                  <span>•</span>
                  <Link to="/terms" className="hover:text-[#86efac] underline underline-offset-2">
                    Terms of Supply
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Buttons Area */}
            <div className="flex items-center gap-2.5 shrink-0 flex-wrap sm:flex-nowrap">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-neutral-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-[#86efac]" />
                <span>Customize</span>
              </button>

              <button
                type="button"
                onClick={handleEssentialOnly}
                className="flex-1 sm:flex-initial px-4 py-2.5 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-xl border border-white/15 transition-colors"
              >
                Essential Only
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-5 py-2.5 text-xs font-black text-[#082011] bg-[#22C55E] hover:bg-[#4ADE80] rounded-xl transition-all shadow-md active:scale-95"
              >
                <Check className="h-4 w-4" />
                <span>Accept All</span>
              </button>

              <button
                onClick={handleEssentialOnly}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-colors hidden sm:flex shrink-0"
                title="Dismiss"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ─── Granular Wide Preferences Panel ─── */
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 shrink-0">
                  <SlidersHorizontal className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-white text-base tracking-tight">
                    Custom Storage &amp; Cookie Preferences
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Adjust which data categories you allow ERNEJOYSON Company Limited to store on your device.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowPreferences(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors"
                title="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Wide 2-Column Options Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Category 1: Essential */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Essential System Storage</span>
                    <span className="text-[10px] font-mono bg-[#22C55E]/20 text-[#86efac] px-2 py-0.5 rounded-full font-bold">
                      Always Required
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="rounded text-[#22C55E] cursor-not-allowed opacity-75"
                  />
                </div>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Required for cart persistence across page transitions, regional depot order routing, security tokens, and Paystack Ghana checkout authorization. Cannot be disabled.
                </p>
              </div>

              {/* Category 2: Performance & Analytics */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Anonymous Analytics &amp; Latency</span>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="h-4 w-4 rounded border-white/20 bg-black/40 text-[#22C55E] focus:ring-0 cursor-pointer"
                  />
                </div>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  Helps our technical team measure catalog search response times, page load speed, and network latency across MTN, Telecel, and AT networks in Ghana.
                </p>
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Summary</span>
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="px-4 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-black text-[#082011] bg-[#22C55E] hover:bg-[#4ADE80] rounded-xl transition-all shadow-md"
                >
                  <Check className="h-4 w-4" />
                  <span>Save Preferences</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
