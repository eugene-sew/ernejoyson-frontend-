import React, { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {
  Search,
  X,
  ShoppingCart,
  Check,
  ArrowRight,
  ShieldCheck,
  Truck,
  ExternalLink,
} from 'lucide-react'
import { PRODUCTS, CATEGORY_FILTERS, type Product } from '@/data/products'
import { useCartStore } from '@/store/useCartStore'

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category') || 'all'
  const searchTerm = searchParams.get('q') || ''

  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'name'>('default')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [addedItemMap, setAddedItemMap] = useState<Record<string, boolean>>({})

  const { addItem, openCart } = useCartStore()

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
    return PRODUCTS.filter((product) => {
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
  }, [selectedCategory, inStockOnly, searchTerm, sortBy])

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }))
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }))
    }, 1200)
  }

  return (
    <div className="pt-24 pb-20 max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* 1. Header Banner */}
      <div className="rounded-3xl bg-radial from-[#14532D] via-[#0E3B20] to-[#0A2614] p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-lg border border-white/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Veterinary & Poultry Equipment
            </h1>
            <p className="text-xs sm:text-sm text-[#DCFCE7]/80 font-medium leading-relaxed">
              Certified veterinary pharmaceuticals and poultry equipment with direct wholesale pricing across Ghana.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col items-start gap-2.5 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/10 text-xs font-semibold text-[#DCFCE7]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#22C55E]" />
              <span>100% Genuine Potency</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/10 text-xs font-semibold text-[#DCFCE7]">
              <Truck className="h-3.5 w-3.5 text-[#22C55E]" />
              <span>Dispatched from 4 Hubs</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="space-y-4">
        {/* Search row */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#14532D]/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by product name, ref code (e.g. 8066), category, or medication..."
              className="w-full h-12 pl-11 pr-10 rounded-full bg-white border border-[#EAE6DC] text-sm text-[#14532D] placeholder:text-[#14532D]/40 font-medium focus:outline-none focus:ring-2 focus:ring-[#166534]/30 shadow-xs"
            />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#14532D]/40 hover:text-[#14532D] p-1"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 flex-wrap">
            {/* Sort Dropdown */}
            <div className="relative flex items-center">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="h-11 rounded-full bg-white border border-[#EAE6DC] px-4 text-xs sm:text-sm font-bold text-[#14532D] focus:outline-none focus:ring-2 focus:ring-[#166534]/30 shadow-xs cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>

            {/* In Stock Toggle */}
            <label className="flex items-center gap-2 h-11 px-4 rounded-full bg-white border border-[#EAE6DC] text-xs sm:text-sm font-bold text-[#14532D] cursor-pointer hover:bg-[#FAF9F5] shadow-xs select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="rounded text-[#166534] focus:ring-[#166534] h-4 w-4 accent-[#166534]"
              />
              <span>In Stock Only</span>
            </label>

            {/* View Cart Pill */}
            <button
              onClick={openCart}
              className="flex items-center gap-2 h-11 px-4 rounded-full bg-[#166534] text-white text-xs sm:text-sm font-black hover:bg-[#14532D] shadow-xs transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>View Cart</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORY_FILTERS.map((cat) => {
            const isActive = selectedCategory === cat.slug
            return (
              <button
                key={cat.slug}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-150 cursor-pointer shadow-xs ${
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
        <div className="flex items-center justify-between text-xs text-[#14532D]/70 font-semibold px-1">
          <span>
            Showing <strong className="text-[#14532D]">{filteredProducts.length}</strong> items
            {selectedCategory !== 'all' && ` in ${CATEGORY_FILTERS.find((c) => c.slug === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </span>
          {(searchTerm || selectedCategory !== 'all' || inStockOnly) && (
            <button
              onClick={() => {
                handleSearchChange('')
                handleCategoryChange('all')
                setInStockOnly(false)
              }}
              className="text-[#166534] hover:underline font-bold text-xs"
            >
              Reset all filters
            </button>
          )}
        </div>
      </div>

      {/* 3. Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="rounded-3xl bg-white p-12 text-center border border-[#EAE6DC] shadow-xs space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-[#14532D]">
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
            className="rounded-full bg-[#166534] text-white px-6 py-2.5 text-xs font-bold hover:bg-[#14532D] transition-colors"
          >
            Clear Filters & Show All
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product) => {
            const isAdded = addedItemMap[product.id]
            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-3xl bg-white border border-[#EAE6DC] p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#166534]/30 transition-all duration-200"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#FAF9F5] border border-[#EAE6DC]/60 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute top-2.5 right-2.5">
                      {product.inStock ? (
                        <span className="rounded-full bg-[#DCFCE7]/90 backdrop-blur-xs px-2 py-0.5 text-[9px] font-black text-[#14532D] uppercase tracking-wider shadow-xs">
                          In Stock
                        </span>
                      ) : (
                        <span className="rounded-full bg-red-100/90 backdrop-blur-xs px-2 py-0.5 text-[9px] font-black text-red-700 uppercase tracking-wider shadow-xs">
                          Pre-order
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category & Title */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-bold text-[#166534] uppercase tracking-wider">
                      {product.category}
                    </p>
                    <Link
                      to={`/shop/${product.id}`}
                      className="font-display text-base font-black text-[#14532D] hover:text-[#166534] transition-colors line-clamp-2 leading-snug"
                    >
                      {product.name}
                    </Link>

                    {/* Packaging Notes / Volume Discounts */}
                    {product.notes && (
                      <p className="text-[11px] font-semibold text-amber-800 bg-[#FEF3C7] px-2 py-0.5 rounded-md inline-block">
                        {product.notes}
                      </p>
                    )}

                    <p className="text-xs text-[#14532D]/70 line-clamp-2 leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Card Controls */}
                <div className="pt-4 mt-4 border-t border-[#FAF9F5] flex items-center justify-between gap-3">
                  <div>
                    <span className="font-display text-lg font-extrabold tracking-tight text-[#14532D]">
                      {product.priceDisplay}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Link
                      to={`/shop/${product.id}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] transition-colors"
                      title="View product details"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Link>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex items-center gap-1.5 h-9 px-3.5 rounded-full text-xs font-bold transition-all shadow-xs ${
                        isAdded
                          ? 'bg-[#14532D] text-white'
                          : 'bg-[#166534] hover:bg-[#14532D] text-white active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="h-3.5 w-3.5" />
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
      <div className="rounded-3xl bg-[#DCFCE7]/30 border border-[#DCFCE7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1 max-w-2xl">
          <h3 className="font-display text-base sm:text-lg font-black text-[#14532D]">
            Buying for a Commercial Poultry Farm or Agro-vet Shop?
          </h3>
          <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium">
            Take advantage of carton-level discounts, 30+ unit bulk rates, and direct scheduled delivery to your farm anywhere in Ghana.
          </p>
        </div>
        <Link
          to="/b2b"
          className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-6 py-3 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] transition-all shadow-sm shrink-0"
        >
          <span>B2B Wholesale Inquiries</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
