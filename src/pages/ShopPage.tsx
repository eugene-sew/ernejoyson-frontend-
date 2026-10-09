import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Search,
  X,
  ShoppingCart,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react'
import { type Product } from '@/data/products'
import { useCatalog, useShopCategories } from '@/store/useCatalogStore'
import { useCartStore } from '@/store/useCartStore'
import logoWatermark from '@/assets/logo-watermark.png'

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'all'
  const searchTerm = searchParams.get('q') || ''

  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [justAddedId, setJustAddedId] = useState<string | null>(null)

  const { items, addItem, openCart } = useCartStore()
  const products = useCatalog()
  const categoryFilters = useShopCategories()

  const cartItemMap = useMemo(() => {
    const map: Record<string, number> = {}
    for (const item of items) {
      map[item.product.id] = (map[item.product.id] || 0) + item.quantity
    }
    return map
  }, [items])


  const handleCategoryChange = (slug: string) => {
    const newParams = new URLSearchParams(searchParams)
    if (slug === 'all') {
      newParams.delete('category')
    } else {
      newParams.set('category', slug)
    }
    setSearchParams(newParams)
  }

  const handleSearchChange = (val: string) => {
    const newParams = new URLSearchParams(searchParams)
    if (!val) {
      newParams.delete('q')
    } else {
      newParams.set('q', val)
    }
    setSearchParams(newParams)
  }

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.categorySlug !== selectedCategory) {
        return false
      }

      // In stock filter
      if (inStockOnly && !product.inStock) {
        return false
      }

      // Search term filter (name, refCode, notes, category, description)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim()
        const matchesName = product.name.toLowerCase().includes(query)
        const matchesRef = product.refCode?.toLowerCase().includes(query)
        const matchesNotes = product.notes?.toLowerCase().includes(query)
        const matchesCategory = product.category.toLowerCase().includes(query)
        const matchesDesc = product.description.toLowerCase().includes(query)
        return matchesName || matchesRef || matchesNotes || matchesCategory || matchesDesc
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        if (a.price === null) return 1
        if (b.price === null) return -1
        return a.price - b.price
      }
      if (sortBy === 'price-desc') {
        if (a.price === null) return 1
        if (b.price === null) return -1
        return b.price - a.price
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name)
      }
      return 0
    })
  }, [products, selectedCategory, inStockOnly, searchTerm, sortBy])

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
    setJustAddedId(product.id)
    setTimeout(() => {
      setJustAddedId((prev) => (prev === product.id ? null : prev))
    }, 1200)
  }

  return (
    <div className="pt-20 sm:pt-24 pb-20 max-w-[1560px] mx-auto px-2.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">

      {/* 2. Search & Filter Bar - Sticky on mobile when scrolling */}
      <div className="sticky top-[64px] sm:static z-30 -mx-2.5 sm:mx-0 px-2.5 sm:px-0 py-2 sm:py-0 bg-[#FAF9F5]/95 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none transition-all space-y-3 sm:space-y-4 shadow-xs sm:shadow-none border-b border-[#EAE6DC]/60 sm:border-b-0 pb-3 sm:pb-0">
        {/* Search row */}
        <div className="flex flex-col md:flex-row gap-2.5 sm:gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#14532D]/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search drugs, equipment, or ref #..."
              className="w-full h-10 sm:h-12 pl-10 sm:pl-11 pr-9 sm:pr-10 rounded-full bg-white border border-[#EAE6DC] text-xs sm:text-sm text-[#14532D] placeholder:text-[#14532D]/40 font-medium focus:outline-none focus:ring-2 focus:ring-[#166534]/30 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#14532D]/40 hover:text-[#14532D] p-1"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap justify-between sm:justify-start">
            {/* Sort Dropdown */}
            <div className="relative flex items-center flex-1 sm:flex-none">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full sm:w-auto h-9 sm:h-11 rounded-full bg-white border border-[#EAE6DC] px-3 sm:px-4 text-[11px] sm:text-sm font-bold text-[#14532D] focus:outline-none focus:ring-2 focus:ring-[#166534]/30 shadow-xs cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>

            {/* In Stock Toggle */}
            <label className="flex items-center gap-1.5 sm:gap-2 h-9 sm:h-11 px-3 sm:px-4 rounded-full bg-white border border-[#EAE6DC] text-[11px] sm:text-sm font-bold text-[#14532D] cursor-pointer hover:bg-[#FAF9F5] shadow-xs select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded text-[#166534] focus:ring-[#166534] h-3.5 w-3.5 sm:h-4 sm:w-4 accent-[#166534]"
              />
              <span>In Stock</span>
            </label>

            {/* View Cart Pill - hidden on mobile as requested */}
            <button
              onClick={openCart}
              className="hidden sm:flex items-center gap-2 h-11 px-4 rounded-full bg-[#166534] text-white text-xs sm:text-sm font-black hover:bg-[#14532D] shadow-xs transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>View Cart</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-2 scrollbar-none">
          {categoryFilters.map((cat) => {
            const isActive = selectedCategory === cat.slug
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-extrabold whitespace-nowrap transition-all duration-150 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#166534] text-white shadow-sm ring-1 ring-[#166534]'
                    : 'bg-white text-[#14532D] hover:bg-[#FAF9F5] border border-[#EAE6DC]'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#14532D]/70 font-semibold px-1">
          <span>
            Showing <strong className="text-[#14532D]">{filteredProducts.length}</strong> items
            {selectedCategory !== 'all' && ` in ${categoryFilters.find((c) => c.slug === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </span>
          {(searchTerm || selectedCategory !== 'all' || inStockOnly) && (
            <button
              onClick={() => {
                handleSearchChange('')
                handleCategoryChange('all')
                setInStockOnly(false)
              }}
              className="text-[#166534] hover:underline font-bold text-[11px] sm:text-xs"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* 3. Product Grid - 2x2 on Mobile, 3 cols on tablet, 4 on desktop */}
      {filteredProducts.length === 0 ? (
        <div className="rounded-2xl sm:rounded-3xl bg-white p-8 sm:p-12 text-center border border-[#EAE6DC] shadow-xs space-y-4">
          <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
            <Search className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h3 className="font-display text-base sm:text-lg font-bold text-[#14532D]">
            No matching products found
          </h3>
          <p className="text-xs text-[#14532D]/70 max-w-md mx-auto font-medium">
            We couldn't find any items matching your criteria. Try searching with a broader keyword, checking reference codes, or browsing all categories.
          </p>
          <button
            onClick={() => {
              handleSearchChange('')
              handleCategoryChange('all')
              setInStockOnly(false)
            }}
            className="rounded-full bg-[#166534] text-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs font-bold hover:bg-[#14532D] transition-colors"
          >
            Clear Filters & Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
          {filteredProducts.map((product) => {
            const cartQty = cartItemMap[product.id] || 0
            const isAdded = cartQty > 0
            const isJustAdded = justAddedId === product.id

            return (
              <div
                key={product.id}
                className={`group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border p-2 sm:p-5 shadow-xs hover:shadow-md transition-all duration-200 ${
                  isAdded
                    ? 'border-[#166534]/50 bg-[#F0FDF4]/20 ring-1 ring-[#166534]/20'
                    : 'border-[#EAE6DC] hover:border-[#166534]/30'
                }`}
              >
                <div>
                  {/* Image Container */}
                  <Link
                    to={`/shop/${product.id}`}
                    className="block relative aspect-square sm:aspect-4/3 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF9F5] border border-[#EAE6DC]/60 mb-2 sm:mb-4 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* In Cart Indicator Badge */}
                    {isAdded && (
                      <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 z-20">
                        <span className="inline-flex items-center gap-0.5 sm:gap-1 rounded-full bg-[#14532D] text-white px-1.5 sm:px-2.5 py-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-wider shadow-md">
                          <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[2.5] text-[#4ADE80]" />
                          <span>Added {cartQty > 1 ? `(${cartQty})` : ''}</span>
                        </span>
                      </div>
                    )}

                    {/* ERNEJOYSON Logo Watermark */}
                    <div className="absolute bottom-1.5 sm:bottom-2.5 left-1/2 -translate-x-1/2 pointer-events-none select-none z-10">
                      <img
                        src={logoWatermark}
                        alt="ERNEJOYSON"
                        className="h-6 sm:h-11 w-auto max-w-[80px] sm:max-w-[120px] object-contain opacity-70 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                      />
                    </div>

                    <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5">
                      {product.inStock ? (
                        <span className="rounded-full bg-[#DCFCE7]/90 backdrop-blur-xs px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-black text-[#14532D] uppercase tracking-wider shadow-xs">
                          In Stock
                        </span>
                      ) : (
                        <span className="rounded-full bg-red-100/90 backdrop-blur-xs px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-black text-red-700 uppercase tracking-wider shadow-xs">
                          Pre-order
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Category & Title */}
                  <div className="space-y-1">
                    <p className="text-[9px] sm:text-[11px] font-bold text-[#166534] uppercase tracking-wider truncate">
                      {product.category}
                    </p>
                    <Link
                      to={`/shop/${product.id}`}
                      className="font-display text-xs sm:text-base font-black text-[#14532D] hover:text-[#166534] transition-colors line-clamp-2 leading-tight sm:leading-snug min-h-[2rem] sm:min-h-0"
                    >
                      {product.name}
                    </Link>

                    {/* Packaging Notes / Volume Discounts */}
                    {product.notes && (
                      <p className="text-[9px] sm:text-[11px] font-semibold text-amber-800 bg-[#FEF3C7] px-1.5 sm:px-2 py-0.5 rounded-md inline-block truncate max-w-full">
                        {product.notes}
                      </p>
                    )}

                    {/* Description - hidden on mobile 2x2 grid to preserve vertical rhythm */}
                    <p className="hidden sm:block text-xs text-[#14532D]/70 line-clamp-2 leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Controls */}
                <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-[#FAF9F5] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
                  <div>
                    <span className="font-display text-xs sm:text-lg font-extrabold tracking-tight text-[#14532D]">
                      {product.priceDisplay}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 w-full sm:w-auto">
                    <Link
                      to={`/shop/${product.id}`}
                      className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] transition-colors"
                      title="View product details"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex items-center justify-center gap-1 h-8 sm:h-9 px-2 sm:px-3.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-xs cursor-pointer flex-1 sm:flex-none ${
                        isAdded
                          ? 'bg-[#14532D] hover:bg-[#166534] text-white active:scale-95 ring-2 ring-[#22C55E]/40'
                          : 'bg-[#166534] hover:bg-[#14532D] text-white active:scale-95'
                      }`}
                      title={isAdded ? `${cartQty} in cart. Click to add another.` : 'Add to cart'}
                    >
                      {isAdded ? (
                        <>
                          <Check className={`h-3 w-3 stroke-[2.5] text-[#4ADE80] transition-transform ${isJustAdded ? 'scale-125' : ''}`} />
                          <span>Added {cartQty > 1 ? `(${cartQty})` : ''}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-3 w-3" />
                          <span>{product.price !== null ? 'Add' : 'Quote'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* 4. Wholesale & B2B Footnote */}
      <div className="rounded-2xl sm:rounded-3xl bg-[#DCFCE7]/30 border border-[#DCFCE7] p-4 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1 max-w-2xl">
          <h3 className="font-display text-sm sm:text-lg font-black text-[#14532D]">
            Buying for a Commercial Poultry Farm or Agro-vet Shop?
          </h3>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium">
            Take advantage of carton-level discounts, 30+ unit bulk rates, and direct scheduled delivery to your farm anywhere in Ghana.
          </p>
        </div>
        <Link
          to="/b2b"
          className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] transition-all shadow-sm shrink-0"
        >
          <span>B2B Wholesale Inquiries</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
