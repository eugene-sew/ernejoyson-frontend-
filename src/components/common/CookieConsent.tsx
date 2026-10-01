import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, Shield, Check, X, SlidersHorizontal } from 'lucide-react'

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
        const timer = setTimeout(() => setIsVisible(true), 1200)
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
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 pointer-events-none flex justify-center sm:justify-end animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="pointer-events-auto w-full max-w-lg bg-[#0A2614]/95 text-white rounded-3xl border border-[#22C55E]/30 p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-4">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#22C55E]/15 text-[#22C55E] border border-[#22C55E]/30 shrink-0">
              <Cookie className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-white text-base tracking-tight">
                Data & Cookie Preferences
              </h3>
              <p className="text-[11px] font-semibold text-[#86efac] flex items-center gap-1.5 mt-0.5">
                <Shield className="h-3 w-3" />
                <span>Ghana Data Protection Act (Act 843) Compliant</span>
              </p>
            </div>
          </div>

          <button
            onClick={handleEssentialOnly}
            className="p-1 rounded-lg text-white/50 hover:text-white transition-colors"
            title="Dismiss with Essential Only"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Description */}
        {!showPreferences ? (
          <p className="text-xs text-white/80 leading-relaxed font-sans">
            We use essential storage to preserve your cart items, remember regional depot selections, and support secure Ghana MoMo &amp; Card checkout via Paystack. You can choose whether to enable anonymous analytics.
          </p>
        ) : (
          /* Granular Preferences Box */
          <div className="space-y-3 py-1 text-xs">
            {/* Essential */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="space-y-0.5 pr-2">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span>Essential System Storage</span>
                  <span className="text-[10px] font-mono bg-[#22C55E]/20 text-[#86efac] px-2 py-0.5 rounded-full">
                    Required
                  </span>
                </div>
                <p className="text-[11px] text-white/60">
                  Cart memory, depot pickup routing, security, and Paystack transactions.
                </p>
              </div>
              <input
                type="checkbox"
                checked={true}
                disabled={true}
                className="rounded text-[#22C55E] focus:ring-0 cursor-not-allowed opacity-80"
              />
            </div>

            {/* Performance & Analytics */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="space-y-0.5 pr-2">
                <div className="flex items-center gap-2 font-bold text-white">
                  <span>Anonymous Platform Analytics</span>
                </div>
                <p className="text-[11px] text-white/60">
                  Helps us improve website responsiveness and catalog search across Ghana.
                </p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({ ...preferences, analytics: e.target.checked })
                }
                className="h-4 w-4 rounded border-white/20 bg-black/40 text-[#22C55E] focus:ring-0 cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Buttons / Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1 border-t border-white/10">
          <div className="flex items-center gap-2 text-[11px] text-white/60 self-start sm:self-center">
            <Link to="/privacy" className="hover:text-[#86efac] underline underline-offset-2">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-[#86efac] underline underline-offset-2">
              Cookie Policy
            </Link>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {!showPreferences ? (
              <>
                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  <span>Customize</span>
                </button>

                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-bold text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors"
                >
                  Essential Only
                </button>

                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-4 py-2 text-xs font-extrabold text-[#0A2614] bg-[#22C55E] hover:bg-[#4ADE80] rounded-xl transition-colors shadow-sm"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Accept All</span>
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  className="flex-1 sm:flex-initial px-3.5 py-2 text-xs font-bold text-white/70 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1 px-5 py-2 text-xs font-extrabold text-[#0A2614] bg-[#22C55E] hover:bg-[#4ADE80] rounded-xl transition-colors shadow-sm"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Save Settings</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
