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

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const url = buildApiUrl(endpoint)
  const response = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })
  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }
  return data
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
  },
}
