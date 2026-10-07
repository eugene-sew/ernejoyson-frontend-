import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Cookie, X } from 'lucide-react'

export interface CookiePreferences {
  essential: boolean
  analytics: boolean
}

const STORAGE_KEY = 'ej_cookie_consent_v1'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const timer = setTimeout(() => setIsVisible(true), 1200)
        return () => clearTimeout(timer)
      } else {
        const parsed = JSON.parse(stored)
        setAnalyticsEnabled(!!parsed.analytics)
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

  const save = (analytics: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ essential: true, analytics }))
    } catch {
      // ignore
    }
    setAnalyticsEnabled(analytics)
    setIsVisible(false)
    setShowPreferences(false)
  }

  if (!isVisible) return null

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-50 animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      <div className="bg-[#0b2416]/95 text-white rounded-2xl border border-[#22C55E]/30 p-4 shadow-2xl backdrop-blur-xl">
        {!showPreferences ? (
          <div className="space-y-3">
            {/* Header with cookie icon & dismiss */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-xl bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center shrink-0">
                  <Cookie className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-sm text-white">We use cookies</h3>
              </div>
              <button
                type="button"
                onClick={() => save(false)}
                className="text-neutral-400 hover:text-white p-1 transition-colors cursor-pointer"
                aria-label="Close cookie banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Short concise text */}
            <p className="text-xs text-neutral-300 leading-relaxed font-sans">
              We use cookies to save your cart items and improve your experience.{' '}
              <Link to="/cookies" className="text-[#86efac] hover:underline font-medium">
                Learn more
              </Link>
            </p>

            {/* Clean compact action buttons */}
            <div className="flex items-center gap-2 pt-0.5">
              <button
                type="button"
                onClick={() => save(false)}
                className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors cursor-pointer"
              >
                Essential only
              </button>
              <button
                type="button"
                onClick={() => save(true)}
                className="flex-1 py-2 px-3 text-xs font-bold text-[#071c0f] bg-[#22C55E] hover:bg-[#4ade80] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Accept all
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
              >
                Preferences
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-white">Cookie Preferences</h3>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-neutral-400 hover:text-white p-1 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="font-semibold text-white">Essential</p>
                  <p className="text-[11px] text-neutral-400">Cart & session data</p>
                </div>
                <span className="text-[10px] text-[#86efac] bg-[#22C55E]/20 px-2 py-0.5 rounded-md font-medium">
                  Required
                </span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <p className="font-semibold text-white">Analytics</p>
                  <p className="text-[11px] text-neutral-400">Usage & performance</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-8 h-4.5 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-[#22C55E]"></div>
                </label>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="flex-1 py-2 px-3 text-xs font-semibold text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => save(analyticsEnabled)}
                className="flex-1 py-2 px-3 text-xs font-bold text-[#071c0f] bg-[#22C55E] hover:bg-[#4ade80] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
