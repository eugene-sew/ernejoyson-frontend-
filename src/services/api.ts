// Storefront API client. Picks the API base URL from the VITE_API_URL environment variable.
const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5001').replace(/\/+$/, '')

function buildApiUrl(endpoint: string): string {
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint
  }
  // If base URL ends with /api and endpoint starts with /api/, avoid duplicate /api
  if (API_BASE_URL.endsWith('/api') && endpoint.startsWith('/api/')) {
    return `${API_BASE_URL}${endpoint.slice(4)}`
  }
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  return `${API_BASE_URL}${cleanEndpoint}`
}

export interface BackendProduct {
  id: string
  name: string
  category: string
  category_slug: string
  price: number | null
  price_display: string
  ref_code?: string | null
  spec?: string | null
  notes?: string | null
  in_stock: boolean
  featured: boolean
  image?: string | null
  description?: string
}

export interface BackendOrderItem {
  id: string
  order_id: string
  product_id: string
  product_name: string
  product_image?: string
  quantity: number
  unit_price: number
  total_price: number
}

export interface BackendOrder {
  id: string
  order_number: string
  customer_name: string
  customer_phone: string
  customer_email?: string
  delivery_location: string
  branch_id: string
  payment_method: string
  payment_status: 'PAID' | 'PENDING' | 'FAILED'
  order_status: 'PENDING' | 'CONFIRMED' | 'DISPATCHED' | 'DELIVERED' | 'CANCELLED'
  total_amount: number
  notes?: string
  paystack_reference?: string
  created_at: string
  updated_at: string
  items?: BackendOrderItem[]
}

// Shop account session (optional — guests order without one). Sent as `Customer <token>`.
export const CUSTOMER_TOKEN_KEY = 'ej_customer_token'
export const getCustomerToken = () => {
  try { return localStorage.getItem(CUSTOMER_TOKEN_KEY) } catch { return null }
}

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) { super(message); this.status = status }
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = buildApiUrl(endpoint)
  const token = getCustomerToken()
  let response: Response
  try {
    response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Customer ${token}` } : {}),
        ...options.headers,
      },
    })
  } catch {
    throw new ApiError('We could not reach the shop. Check your connection and try again.', 0)
  }
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new ApiError(data.message || 'Something went wrong. Please try again.', response.status)
  }
  return data
}

const post = <T,>(endpoint: string, body: unknown) => request<T>(endpoint, { method: 'POST', body: JSON.stringify(body) })

export interface CustomerProfile {
  name: string
  phone: string
  email: string | null
  location: string | null
  orders_count: number
  total_spent: string | number
  hasAccount: boolean
  memberSince: string | null
}

export type OrderStep = 'placed' | 'confirmed' | 'dispatched' | 'delivered' | 'cancelled'

export interface PublicOrder {
  order_number: string
  created_at: string
  order_status: BackendOrder['order_status']
  payment_status: BackendOrder['payment_status']
  payment_method: string
  total_amount: number
  delivery_location: string
  branch: string
  waybill_number: string | null
  waybill_courier: string | null
  notes: string | null
  timeline: { step: OrderStep; at: string; note?: string }[]
  items: { product_id: string; product_name: string; product_image: string | null; quantity: number; unit_price: number; total_price: number }[]
}

type Session = { success: boolean; token: string; customer: CustomerProfile }
export type LeadSource = 'bulk_enquiry' | 'b2b_quote' | 'contact' | 'vaccination_chart' | 'other'

export interface ShopVideo {
  id: number
  title: string
  caption: string
  url: string
  platform: 'youtube' | 'tiktok'
  thumbnail: string
  embed_url: string
}

export interface ShopArticle {
  id: number
  slug: string
  title: string
  category: string
  categoryLabel: string
  summary: string
  body?: string
  cover_image: string
  published_at: string
  featured: boolean
  author: string | null
  readingMinutes: number
}

export interface ShopCategory { slug: string; name: string; sort_order: number; productCount: number }

export const api = {
  categories: {
    list: () => request<{ success: boolean; categories: ShopCategory[] }>('/api/categories'),
  },

  products: {
    list: () => request<{ success: boolean; products: BackendProduct[]; total: number }>('/api/products'),
  },

  orders: {
    create: (body: {
      customerName: string
      customerPhone: string
      customerEmail?: string
      deliveryLocation: string
      notes?: string
      branchId?: string
      paymentMethod: string
      paymentStatus?: string
      items: { productId: string; name?: string; image?: string; quantity: number; price?: number | null }[]
      totalAmount: number
      paystackReference?: string
    }) =>
      request<{ success: boolean; order: BackendOrder }>('/api/orders', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
    track: (orderNumber: string, phone: string) => post<{ success: boolean; order: PublicOrder }>('/api/orders-track', { orderNumber, phone }),
  },

  account: {
    register: (body: { name: string; phone: string; email?: string; location?: string; password: string }) => post<Session>('/api/account/register', body),
    login: (login: string, password: string) => post<Session>('/api/account/login', { login, password }),
    me: () => request<{ success: boolean; customer: CustomerProfile }>('/api/account/me'),
    update: (body: { name?: string; email?: string; location?: string }) =>
      request<{ success: boolean; customer: CustomerProfile }>('/api/account/me', { method: 'PATCH', body: JSON.stringify(body) }),
    changePassword: (currentPassword: string, newPassword: string) =>
      post<{ success: boolean; token: string }>('/api/account/change-password', { currentPassword, newPassword }),
    requestReset: (email: string) => post<{ success: boolean; message: string }>('/api/account/password-reset', { email }),
    confirmReset: (token: string, password: string) => post<Session>('/api/account/password-reset/confirm', { token, password }),
    orders: (page = 1) =>
      request<{ orders: PublicOrder[]; pagination: { total: number; page: number; limit: number; totalPages: number } }>(`/api/account/orders?page=${page}`),
    order: (number: string) => request<{ success: boolean; order: PublicOrder }>(`/api/account/orders/${encodeURIComponent(number)}`),
    claim: (orderNumber: string, phone: string) => post<{ success: boolean; order: PublicOrder }>('/api/account/orders/claim', { orderNumber, phone }),
  },

  content: {
    videos: () => request<{ success: boolean; videos: ShopVideo[] }>('/api/content/videos'),
    articles: (params: { category?: string; page?: number; limit?: number } = {}) => {
      const q = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== undefined && v !== '').map(([k, v]) => [k, String(v)]))
      return request<{ articles: ShopArticle[]; pagination: { total: number; page: number; totalPages: number }; categories: { value: string; label: string }[] }>(`/api/content/articles?${q}`)
    },
    article: (slug: string) => request<{ success: boolean; article: ShopArticle }>(`/api/content/articles/${encodeURIComponent(slug)}`),
  },

  leads: {
    // `website` is a honeypot field — always sent empty by real visitors.
    submit: (body: { source: LeadSource; name: string; phone: string; email?: string; business_name?: string; location?: string;
      farm_type?: string; interest?: string; quantity?: string; message?: string; website?: string }) =>
      post<{ success: boolean; message: string }>('/api/leads/submit', { page: window.location.pathname, ...body }),
  },
}
