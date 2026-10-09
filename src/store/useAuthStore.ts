import { create } from 'zustand'
import { api, ApiError, CUSTOMER_TOKEN_KEY, getCustomerToken, type CustomerProfile } from '@/services/api'

// Optional shop account. Guests never need one; signing in just links orders and prefills checkout.
interface AuthState {
  customer: CustomerProfile | null
  isLoggedIn: boolean
  hasRespondedVaccination: boolean
  setSession: (token: string, customer: CustomerProfile) => void
  setCustomer: (customer: CustomerProfile) => void
  unlockVaccinationChart: () => void
  logout: () => void
  refresh: () => Promise<void>
}

const PROFILE_KEY = 'ej_customer'

const read = (key: string) => {
  try { return localStorage.getItem(key) } catch { return null }
}

const loadProfile = (): CustomerProfile | null => {
  if (!getCustomerToken()) return null
  try { return JSON.parse(read(PROFILE_KEY) || 'null') } catch { return null }
}

export const useAuthStore = create<AuthState>((set, get) => ({
  customer: loadProfile(),
  isLoggedIn: !!loadProfile(),
  hasRespondedVaccination: read('ej_chart_unlocked') === '1',

  unlockVaccinationChart: () => {
    try {
      localStorage.setItem('ej_chart_unlocked', '1')
    } catch { /* ignore */ }
    set({ hasRespondedVaccination: true })
  },

  setSession: (token, customer) => {
    try {
      localStorage.setItem(CUSTOMER_TOKEN_KEY, token)
      localStorage.setItem(PROFILE_KEY, JSON.stringify(customer))
      localStorage.removeItem('ej_user') // the old fake-login profile
    } catch { /* storage blocked: session lasts this tab only */ }
    set({ customer, isLoggedIn: true })
  },

  setCustomer: (customer) => {
    try { localStorage.setItem(PROFILE_KEY, JSON.stringify(customer)) } catch { /* ignore */ }
    set({ customer })
  },

  logout: () => {
    try {
      localStorage.removeItem(CUSTOMER_TOKEN_KEY)
      localStorage.removeItem(PROFILE_KEY)
    } catch { /* ignore */ }
    set({ customer: null, isLoggedIn: false })
  },

  // Re-read the profile; a 401 means the session ended (password changed elsewhere, expired).
  refresh: async () => {
    if (!getCustomerToken()) return
    try {
      const { customer } = await api.account.me()
      get().setCustomer(customer)
      set({ isLoggedIn: true })
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) get().logout()
    }
  },
}))
