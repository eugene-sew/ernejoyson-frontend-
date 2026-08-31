export type ThemeMode = 'light' | 'dark' | 'system'

export interface User {
  id: string
  name: string
  email: string
  role?: string
}
