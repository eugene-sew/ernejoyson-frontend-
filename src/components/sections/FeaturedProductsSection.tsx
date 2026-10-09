import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, FileText, Check, ShieldCheck, Layers, ArrowRight } from 'lucide-react'
import logoWatermark from '@/assets/logo-watermark.png'
import { useCatalog } from '@/store/useCatalogStore'
import { useCartStore } from '@/store/useCartStore'
import type { Product } from '@/data/products'

// Filter pills group the admin-managed category slugs into the two lines we sell.
const GROUPS: Record<string, string[]> = {
  vet: ['antibiotics', 'anti-parasitics', 'injectables', 'vitamins', 'feed-additives', 'disinfectants', 'pets'],
  equipment: ['feeders', 'drinkers', 'equipment'],
}
const MAX_CARDS = 8

/** Bulk quote link with the product named, so the sales desk knows what it's for. */
const bulkQuoteHref = (p: Product) => `/b2b?item=${encodeURIComponent(p.name)}#rfq-form`

export function FeaturedProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [addedItem, setAddedItem] = useState<string | null>(null)
  const { items, addItem } = useCartStore()

  const cartItemMap = useMemo(() => {
    const map: Record<string, number> = {}
    for (const item of items) {
      map[item.product.id] = (map[item.product.id] || 0) + item.quantity
    }
    return map
  }, [items])

  // "Featured" is toggled per product in the admin. Falls back to any in-stock items if none are featured.
  const catalog = useCatalog()
  const featured = catalog.filter((p) => p.featured && p.inStock)
  const pool = featured.length ? featured : catalog.filter((p) => p.inStock)

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'vet', label: 'Veterinary Products' },
    { id: 'equipment', label: 'Livestock Equipment' },
  ]

  const filteredProducts = pool
    .filter((p) => selectedCategory === 'all' || GROUPS[selectedCategory]?.includes(p.categorySlug))
    .slice(0, MAX_CARDS)

  const handleAddToCart = (product: Product) => {
    addItem(product, 1)
    setAddedItem(product.id)
    setTimeout(() => setAddedItem((id) => (id === product.id ? null : id)), 1500)
  }

  return (
    <section id="featured-products" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            Quality Products. <br className="hidden sm:inline" />
            Practical Solutions.
          </h2>

          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            Browse products from our veterinary and livestock equipment range. For bulk orders, commercial farms and special requirements, request a quote from our team.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#166534] text-white shadow-md'
                  : 'bg-white text-[#14532D] hover:bg-[#FAF9F5] border border-[#EAE6DC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const buyable = product.inStock && product.price !== null
          const cartQty = cartItemMap[product.id] || 0
          const inCart = cartQty > 0
          const isJustAdded = addedItem === product.id

          return (
          <div
            key={product.id}
            className={`group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-white p-5 shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              inCart ? 'border-[#166534]/50 bg-[#F0FDF4]/20 ring-1 ring-[#166534]/20' : 'border-[#EAE6DC]'
            }`}
          >
            {/* Image Container with Badges */}
            <div className="relative h-52 w-full overflow-hidden rounded-[22px] bg-[#FAF9F5] mb-4">
              <img
                src={product.image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* In Cart Indicator Badge */}
              {inCart && (
                <div className="absolute top-3 right-3 z-20">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#14532D] text-white px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider shadow-md">
                    <Check className="h-3 w-3 stroke-[2.5] text-[#4ADE80]" />
                    <span>Added {cartQty > 1 ? `(${cartQty})` : ''}</span>
                  </span>
                </div>
              )}

              {/* ERNEJOYSON Logo Watermark */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none select-none z-10">
                <img
                  src={logoWatermark}
                  alt=""
                  className="h-9 sm:h-10 w-auto max-w-[120px] object-contain opacity-70 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
                />
              </div>

              {/* Bulk Pricing Badge */}
              {product.notes && (
                <div className="absolute top-3 left-3 rounded-full bg-[#166534] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm">
                  Bulk Available
                </div>
              )}

              {/* Spec + Price Badge */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-[#14532D] shadow-sm border border-black/5 flex items-center justify-between gap-2">
                <span className="truncate">{product.spec || product.category}</span>
                <span className="text-xs font-black text-[#166534] shrink-0">{product.priceDisplay}</span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534] block">
                  {product.category}
                </span>

                {/* The whole card opens the product (stretched link); the buttons below sit above it */}
                <h3 className="font-display text-base font-extrabold text-[#14532D] leading-snug group-hover:text-[#166534] transition-colors line-clamp-2">
                  <Link to={`/shop/${product.id}`} className="after:absolute after:inset-0 after:rounded-[inherit] focus:outline-none focus-visible:underline">
                    {product.name}
                  </Link>
                </h3>
              </div>

              {/* Availability Line */}
              <div className="pt-2 pb-3 border-b border-black/5 flex items-center gap-1.5 text-xs font-semibold text-[#14532D]/70">
                <ShieldCheck className="h-3.5 w-3.5 text-[#166534] shrink-0" />
                <span className="truncate">{product.inStock ? 'In stock · ships nationwide' : 'Available on order'}</span>
              </div>

              {/* Actions: buy one now, or ask for bulk pricing. Quote-only items lead with the quote. */}
              <div className="relative z-10 pt-1 flex items-center gap-2">
                {buyable ? (
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className={`flex-1 flex items-center justify-center gap-1.5 rounded-full py-2.5 px-3 text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                      inCart
                        ? 'bg-[#14532D] text-white ring-2 ring-[#22C55E]/40 hover:bg-[#166534]'
                        : 'bg-[#166534] text-white hover:bg-[#14532D]'
                    }`}
                    title={inCart ? `${cartQty} in cart. Click to add another.` : 'Add to cart'}
                  >
                    {inCart ? (
                      <>
                        <Check className={`h-3.5 w-3.5 stroke-[2.5] text-[#4ADE80] transition-transform ${isJustAdded ? 'scale-125' : ''}`} />
                        <span>Added to cart {cartQty > 1 ? `(${cartQty})` : ''}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Add to cart</span>
                      </>
                    )}
                  </button>
                ) : (
                  <Link
                    to={bulkQuoteHref(product)}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-full py-2.5 px-3 text-xs font-bold bg-[#166534] text-white hover:bg-[#14532D] transition-all active:scale-95"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Request quote</span>
                  </Link>
                )}

                {buyable && (
                  <Link
                    to={bulkQuoteHref(product)}
                    className="flex items-center justify-center gap-1.5 rounded-full py-2.5 px-3.5 text-xs font-bold bg-[#FAF9F5] border border-[#EAE6DC] text-[#14532D] transition-colors hover:border-[#166534] hover:text-[#166534] shrink-0"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Bulk quote</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
          )
        })}
      </div>

      {/* Bottom Information Callout */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] p-6 sm:p-8 border border-[#EAE6DC] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#166534] text-xs font-extrabold uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>COMMERCIAL & BULK DISPATCH</span>
          </div>
          <h4 className="font-display text-lg sm:text-xl font-extrabold text-[#14532D]">
            Need bulk quantities, veterinary supply contracts, or custom farm equipment setup?
          </h4>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium max-w-2xl">
            Our commercial sales team arranges wholesale pricing, scheduled farm deliveries, and technical onboarding for operations across Ghana.
          </p>
        </div>

        <div className="shrink-0 flex flex-wrap items-center gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-6 py-3 text-sm font-extrabold text-[#166534] hover:bg-[#166534] hover:text-white transition-all shadow-xs"
          >
            <span>Browse Full Shop</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>

          <Link
            to="/b2b#rfq-form"
            className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-7 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-[#14532D] transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Request a Business Quote</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  )
}
