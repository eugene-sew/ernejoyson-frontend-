import { create } from 'zustand'

export interface UserProfile {
  name: string
  phone: string
  farmSize?: string
  email?: string
}

interface AuthState {
  user: UserProfile | null
  isLoggedIn: boolean
  hasRespondedVaccination: boolean
  login: (profile: UserProfile) => void
  logout: () => void
  recordVaccinationResponse: (profile: UserProfile) => void
}

const loadInitialUser = (): UserProfile | null => {
  try {
    const raw = localStorage.getItem('ej_user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

const loadInitialVaccination = (): boolean => {
  try {
    return localStorage.getItem('ej_chart_unlocked') === '1'
  } catch {
    return false
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: loadInitialUser(),
  isLoggedIn: !!loadInitialUser(),
  hasRespondedVaccination: loadInitialVaccination(),

  login: (profile: UserProfile) => {
    try {
      localStorage.setItem('ej_user', JSON.stringify(profile))
      // Also register as lead if not already
      const leads = JSON.parse(localStorage.getItem('ej_leads') || '[]')
      leads.push({
        ...profile,
        source: 'checkout_login',
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem('ej_leads', JSON.stringify(leads))
    } catch (e) {
      console.error(e)
    }
    set({ user: profile, isLoggedIn: true })
  },

  logout: () => {
    try {
      localStorage.removeItem('ej_user')
    } catch (e) {
      console.error(e)
    }
    set({ user: null, isLoggedIn: false })
  },

  recordVaccinationResponse: (profile: UserProfile) => {
    try {
      localStorage.setItem('ej_chart_unlocked', '1')
      localStorage.setItem('ej_user', JSON.stringify(profile))

      const leads = JSON.parse(localStorage.getItem('ej_leads') || '[]')
      leads.push({
        ...profile,
        source: 'vaccination_chart',
        timestamp: new Date().toISOString(),
      })
      localStorage.setItem('ej_leads', JSON.stringify(leads))
    } catch (e) {
      console.error(e)
    }

    set({ user: profile, isLoggedIn: true, hasRespondedVaccination: true })
  },
}))
