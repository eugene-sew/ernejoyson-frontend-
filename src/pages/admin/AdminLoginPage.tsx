import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAdminAuthStore } from '@/store/useAdminAuthStore'
import {
  Lock,
  Mail,
  ArrowRight,
  AlertCircle,
  Loader2,
  Building2,
} from 'lucide-react'

export const AdminLoginPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { login, isLoading, error } = useAdminAuthStore()

  const [email, setEmail] = useState('admin@ernejoyson.com')
  const [password, setPassword] = useState('Ernejoyson@2026!')
  const [localError, setLocalError] = useState('')

  const from = (location.state as any)?.from?.pathname || '/admin'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLocalError('')

    if (!email.trim() || !password.trim()) {
      setLocalError('Please enter both email and password.')
      return
    }

    const success = await login(email.trim(), password.trim())
    if (success) {
      navigate(from, { replace: true })
    }
  }

  return (
    <div className="min-h-screen bg-[#0E3B20] flex items-center justify-center p-4 selection:bg-[#22C55E] selection:text-white">
      <div className="w-full max-w-md space-y-8">
        
        {/* Brand Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex h-16 w-16 rounded-2xl bg-[#14532D] border border-[#22C55E]/30 items-center justify-center text-[#22C55E] shadow-xl">
            <Building2 className="h-8 w-8" />
          </div>
          <div>
            <h1 className="font-display text-3xl font-black text-white tracking-tight">
              ERNEJOYSON
            </h1>
            <p className="text-xs uppercase tracking-widest text-[#22C55E] font-bold mt-1">
              E-Commerce Management Portal
            </p>
          </div>
          <p className="text-xs text-white/60 max-w-xs mx-auto">
            Authorized administration desk for order processing, waybill dispatch, and inventory control.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/10 space-y-6">
          <div className="space-y-1">
            <h2 className="font-display text-xl font-black text-[#14532D]">
              Administrator Sign In
            </h2>
            <p className="text-xs text-neutral-500 font-medium">
              Enter your corporate credentials to access the admin dashboard.
            </p>
          </div>

          {(error || localError) && (
            <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5 font-semibold animate-in fade-in duration-200">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
              <span>{error || localError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#14532D] uppercase tracking-wider block">
                Work Email
              </label>
              <div className="relative">
                <Mail className="h-4 w-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ernejoyson.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] transition-all bg-[#FAF9F5]"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-[#14532D] uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <Lock className="h-4 w-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#166534] transition-all bg-[#FAF9F5]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#166534] hover:bg-[#14532D] text-white font-black text-sm transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Seed credentials reminder helper */}
          <div className="pt-2 border-t border-neutral-100 text-[11px] text-neutral-500 text-center space-y-1">
            <span className="font-semibold text-neutral-600 block">Default Superadmin Credentials:</span>
            <code className="bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded text-[10px] font-mono inline-block">
              admin@ernejoyson.com • Ernejoyson@2026!
            </code>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-white/40 font-medium">
          <p>© {new Date().getFullYear()} ERNEJOYSON Company Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
