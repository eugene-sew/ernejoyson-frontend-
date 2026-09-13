import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '@/data/products'

export interface CartItem {
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  getQuoteItems: () => CartItem[]
  getPricedItems: () => CartItem[]
  generateWhatsAppUrl: () => string
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      addItem: (product: Product, quantity = 1) => {
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) => item.product.id === product.id
          )
          if (existingIndex > -1) {
            const updated = [...state.items]
            updated[existingIndex].quantity += quantity
            return { items: updated }
          }
          return {
            items: [...state.items, { product, quantity }],
          }
        })
      },

      removeItem: (productId: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }))
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }))
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => {
          if (item.product.price !== null) {
            return total + item.product.price * item.quantity
          }
          return total
        }, 0)
      },

      getQuoteItems: () => {
        return get().items.filter((item) => item.product.price === null)
      },

      getPricedItems: () => {
        return get().items.filter((item) => item.product.price !== null)
      },

      generateWhatsAppUrl: () => {
        const { items } = get()
        const phone = '233244000000' // ERNEJOYSON Official Sales Line

        if (items.length === 0) {
          const text = encodeURIComponent(
            'Hello ERNEJOYSON team! I am interested in inquiring about your veterinary pharmaceuticals and livestock equipment.'
          )
          return `https://wa.me/${phone}?text=${text}`
        }

        let message = `*NEW ORDER / INQUIRY - ERNEJOYSON LIMITED*\n`
        message += `--------------------------------------\n`

        items.forEach((item, index) => {
          const ref = item.product.refCode ? ` (Ref: #${item.product.refCode})` : ''
          const price =
            item.product.price !== null
              ? `GHS ${(item.product.price * item.quantity).toFixed(2)} (@ GHS ${item.product.price.toFixed(2)})`
              : 'Quote on Request'
          message += `${index + 1}. *${item.product.name}* x${item.quantity}${ref}\n   Price: ${price}\n`
        })

        message += `--------------------------------------\n`
        const subtotal = get().getTotalPrice()
        if (subtotal > 0) {
          message += `*Subtotal (Priced Items): GHS ${subtotal.toFixed(2)}*\n`
        }
        const quoteCount = get().getQuoteItems().length
        if (quoteCount > 0) {
          message += `*Items Requiring Quotation: ${quoteCount}*\n`
        }
        message += `\nPlease confirm availability and delivery to my farm location.`

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      },
    }),
    {
      name: 'ernejoyson_cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
