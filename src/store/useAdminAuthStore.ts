import { create } from 'zustand'
import { api, type AdminUser } from '@/services/api'

interface AdminAuthState {
  token: string | null
  admin: AdminUser | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  checkAuth: () => Promise<void>
}

const getStoredToken = () => {
  try {
    return localStorage.getItem('ej_admin_token')
  } catch {
    return null
  }
}

const getStoredAdmin = (): AdminUser | null => {
  try {
    const raw = localStorage.getItem('ej_admin_user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const useAdminAuthStore = create<AdminAuthState>((set) => ({
  token: getStoredToken(),
  admin: getStoredAdmin(),
  isAuthenticated: !!getStoredToken(),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    set({ isLoading: true, error: null })
    try {
      const res = await api.auth.login({ email, password })
      localStorage.setItem('ej_admin_token', res.token)
      localStorage.setItem('ej_admin_user', JSON.stringify(res.admin))
      set({
        token: res.token,
        admin: res.admin,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })
      return true
    } catch (err: any) {
      set({
        error: err.message || 'Login failed. Please check your credentials.',
        isLoading: false,
        isAuthenticated: false,
      })
      return false
    }
  },

  logout: () => {
    localStorage.removeItem('ej_admin_token')
    localStorage.removeItem('ej_admin_user')
    set({
      token: null,
      admin: null,
      isAuthenticated: false,
      error: null,
    })
  },

  checkAuth: async () => {
    const token = getStoredToken()
    if (!token) {
      set({ isAuthenticated: false, admin: null })
      return
    }
    try {
      const res = await api.auth.getMe()
      set({ admin: res.admin, isAuthenticated: true })
    } catch {
      localStorage.removeItem('ej_admin_token')
      localStorage.removeItem('ej_admin_user')
      set({ token: null, admin: null, isAuthenticated: false })
    }
  },
}))
