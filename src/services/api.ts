// Type-safe API Client for Ernejoyson Backend

export interface AdminUser {
  id: string
  email: string
  name: string
  role: string
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
  waybill_number?: string
  waybill_courier?: string
  paystack_reference?: string
  created_at: string
  updated_at: string
  items?: BackendOrderItem[]
}

export interface BackendCustomer {
  id: string
  name: string
  phone: string
  email?: string
  location?: string
  orders_count: number
  total_spent: number
  last_order_at: string
  created_at: string
}

export interface BackendProduct {
  id: string
  name: string
  category: string
  category_slug: string
  price: number | null
  price_display: string
  ref_code?: string
  spec?: string
  notes?: string
  in_stock: number
  stock_quantity: number
  featured: number
  image?: string
  description?: string
  created_at: string
  updated_at: string
}

export interface DashboardSummary {
  totalRevenue: number
  paidRevenue: number
  todayRevenue: number
  totalOrders: number
  pendingOrders: number
  dispatchedOrders: number
  deliveredOrders: number
  totalCustomers: number
  inventory: {
    total: number
    inStock: number
    outOfStock: number
    lowStock: number
  }
  ordersByBranch: Array<{ branch_id: string; count: number; revenue: number }>
  ordersByStatus: Array<{ order_status: string; count: number }>
  recentOrders: BackendOrder[]
}

function getAuthToken(): string | null {
  try {
    return localStorage.getItem('ej_admin_token')
  } catch {
    return null
  }
}

async function request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = getAuthToken()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...((options.headers as Record<string, string>) || {}),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(endpoint, {
    ...options,
    headers,
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Request failed')
  }

  return data
}

export const api = {
  auth: {
    login: (body: { email: string; password: string }) =>
      request<{ success: boolean; token: string; admin: AdminUser }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
    getMe: () =>
      request<{ success: boolean; admin: AdminUser }>('/api/auth/me'),
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
      items: any[]
      totalAmount: number
      paystackReference?: string
    }) =>
      request<{ success: boolean; order: BackendOrder }>('/api/orders', {
        method: 'POST',
        body: JSON.stringify(body),
      }),

    list: (params: {
      status?: string
      paymentStatus?: string
      branchId?: string
      search?: string
      page?: number
      limit?: number
    } = {}) => {
      const query = new URLSearchParams()
      if (params.status) query.set('status', params.status)
      if (params.paymentStatus) query.set('paymentStatus', params.paymentStatus)
      if (params.branchId) query.set('branchId', params.branchId)
      if (params.search) query.set('search', params.search)
      if (params.page) query.set('page', params.page.toString())
      if (params.limit) query.set('limit', params.limit.toString())

      return request<{
        success: boolean
        orders: BackendOrder[]
        pagination: { total: number; page: number; limit: number; totalPages: number }
      }>(`/api/orders?${query.toString()}`)
    },

    get: (id: string) =>
      request<{ success: boolean; order: BackendOrder }>(`/api/orders/${id}`),

    updateStatus: (id: string, body: { orderStatus?: string; paymentStatus?: string; branchId?: string }) =>
      request<{ success: boolean; order: BackendOrder }>(`/api/orders/${id}/status`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      }),

    updateWaybill: (id: string, body: { waybillNumber: string; waybillCourier?: string }) =>
      request<{ success: boolean; order: BackendOrder }>(`/api/orders/${id}/waybill`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      }),
  },

  products: {
    list: (params: { category?: string; inStock?: string; search?: string } = {}) => {
      const query = new URLSearchParams()
      if (params.category) query.set('category', params.category)
      if (params.inStock !== undefined) query.set('inStock', params.inStock)
      if (params.search) query.set('search', params.search)

      return request<{ success: boolean; products: BackendProduct[]; total: number }>(
        `/api/products?${query.toString()}`
      )
    },

    toggleStock: (id: string, inStock?: boolean) =>
      request<{ success: boolean; product: BackendProduct }>(`/api/products/${id}/stock`, {
        method: 'PATCH',
        body: JSON.stringify({ inStock }),
      }),

    update: (id: string, data: Partial<BackendProduct>) =>
      request<{ success: boolean; product: BackendProduct }>(`/api/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),

    create: (data: any) =>
      request<{ success: boolean; product: BackendProduct }>('/api/products', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  customers: {
    list: (params: { search?: string } = {}) => {
      const query = new URLSearchParams()
      if (params.search) query.set('search', params.search)
      return request<{ success: boolean; customers: BackendCustomer[]; total: number }>(
        `/api/customers?${query.toString()}`
      )
    },
  },

  analytics: {
    getSummary: () =>
      request<{ success: boolean; summary: DashboardSummary }>('/api/analytics/summary'),
  },
}
