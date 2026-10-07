import { useEffect } from 'react'
import { create } from 'zustand'
import { CATEGORY_FILTERS, PRODUCTS, type Product } from '@/data/products'
import { api, type BackendProduct } from '@/services/api'

/**
 * Live catalog: renders the bundled PRODUCTS instantly, then swaps in the API's
 * stock/prices so admin edits reach shoppers. If the API is unreachable the
 * bundled list stays, so the shop never goes blank.
 */
export interface ShopFilter { slug: string; label: string }

/** Built-in filters, used until (or if not) the API answers. */
const FALLBACK_FILTERS: ShopFilter[] = CATEGORY_FILTERS.filter((c) => c.slug !== 'all').map((c) => ({ slug: c.slug, label: c.label }))

interface CatalogState {
  products: Product[]
  categories: ShopFilter[]
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
    categorySlug: p.category_slug,
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
  categories: FALLBACK_FILTERS,
  status: 'static',
  load: async () => {
    if (get().status !== 'static') return
    set({ status: 'loading' })
    try {
      const [res, cats] = await Promise.all([api.products.list(), api.categories.list().catch(() => null)])
      set({
        products: res.products.map(toProduct),
        // Categories managed in the admin, in their order; empty ones aren't shown to shoppers.
        ...(cats ? { categories: cats.categories.filter((c) => c.productCount > 0).map((c) => ({ slug: c.slug, label: c.name })) } : {}),
        status: 'live',
      })
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

/** Shop filter chips: "All Products" + the managed categories. */
export function useShopCategories(): ShopFilter[] {
  const { categories, load } = useCatalogStore()
  useEffect(() => {
    load()
  }, [load])
  return [{ slug: 'all', label: 'All Products' }, ...categories]
}
