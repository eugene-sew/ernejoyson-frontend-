import { useEffect } from 'react'
import { create } from 'zustand'
import { PRODUCTS, type Product } from '@/data/products'
import { api, type BackendProduct } from '@/services/api'

/**
 * Live catalog: renders the bundled PRODUCTS instantly, then swaps in the API's
 * stock/prices so admin edits reach shoppers. If the API is unreachable the
 * bundled list stays, so the shop never goes blank.
 */
interface CatalogState {
  products: Product[]
  status: 'static' | 'loading' | 'live'
  load: () => Promise<void>
}

const fallback = new Map(PRODUCTS.map((p) => [p.id, p]))

function toProduct(p: BackendProduct): Product {
  const local = fallback.get(p.id)
  return {
    id: p.id,
    name: p.name,
    category: p.category,
    categorySlug: p.category_slug as Product['categorySlug'],
    price: p.price,
    priceDisplay: p.price_display,
    refCode: p.ref_code ?? undefined,
    notes: p.notes ?? undefined,
    spec: p.spec ?? undefined,
    inStock: p.in_stock,
    featured: p.featured,
    image: p.image || local?.image || '',
    description: p.description || local?.description || '',
  }
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  products: PRODUCTS,
  status: 'static',
  load: async () => {
    if (get().status !== 'static') return
    set({ status: 'loading' })
    try {
      const res = await api.products.list()
      set({ products: res.products.map(toProduct), status: 'live' })
    } catch (err) {
      console.warn('Catalog API unavailable, showing bundled catalog:', err)
      set({ status: 'static' })
    }
  },
}))

export function useCatalog(): Product[] {
  const { products, load } = useCatalogStore()
  useEffect(() => {
    load()
  }, [load])
  return products
}
