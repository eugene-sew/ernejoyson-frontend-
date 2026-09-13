import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  ShieldCheck,
  Truck,
  MapPin,
  MessageSquare,
  ChevronRight,
  Info,
} from 'lucide-react'
import { PRODUCTS } from '@/data/products'
import { useCartStore } from '@/store/useCartStore'

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCartStore()

  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)

  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h1 className="font-display text-2xl font-extrabold text-[#14532D]">
          Product Not Found
        </h1>
        <p className="text-sm text-[#14532D]/70">
          The requested product could not be located in our current Ghana inventory catalog.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#14532D] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Shop Catalog</span>
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  // Related products from same category (excluding this one)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4)

  const whatsappInquiryUrl = `https://wa.me/233244000000?text=${encodeURIComponent(
    `Hello ERNEJOYSON! I have an inquiry regarding: ${product.name} (Ref: #${product.refCode || 'N/A'}, Price: ${product.priceDisplay}). Is this available for delivery to my farm?`
  )}`

  return (
    <div className="pt-24 pb-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-[#14532D]/60 flex-wrap">
        <Link to="/" className="hover:text-[#166534] transition-colors">
          Home
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/shop" className="hover:text-[#166534] transition-colors">
          Shop
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link
          to={`/shop?category=${product.categorySlug}`}
          className="hover:text-[#166534] transition-colors capitalize"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-[#14532D] font-bold truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* 2. Main Product Details View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Product Visuals & Branch Availability */}
        <div className="lg:col-span-6 space-y-6">
          <div className="relative aspect-4/3 sm:aspect-square w-full rounded-3xl overflow-hidden bg-white border border-[#EAE6DC] shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.refCode && (
              <div className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur-xs px-3.5 py-1 text-xs font-mono font-black text-[#166534] border border-black/5 shadow-xs">
                Ref Code: #{product.refCode}
              </div>
            )}
            <div className="absolute top-4 right-4">
              {product.inStock ? (
                <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-black text-[#14532D] shadow-xs">
                  Available in Ghana
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-black text-red-700 shadow-xs">
                  Order by Quote
                </span>
              )}
            </div>
          </div>

          {/* Regional Hub Availability Matrix */}
          <div className="rounded-3xl bg-white border border-[#EAE6DC] p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-black text-[#14532D] uppercase tracking-wider">
              <MapPin className="h-4 w-4 text-[#166534]" />
              <span>Branch Stock & Pickup Status</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
              <div className="rounded-2xl bg-[#FAF9F5] p-3 border border-[#EAE6DC]">
                <p className="font-bold text-[#14532D]">Kasoa HQ</p>
                <p className="text-[11px] text-[#166534] font-semibold mt-0.5 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Ready
                </p>
              </div>
              <div className="rounded-2xl bg-[#FAF9F5] p-3 border border-[#EAE6DC]">
                <p className="font-bold text-[#14532D]">Kumasi</p>
                <p className="text-[11px] text-[#166534] font-semibold mt-0.5 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Ready
                </p>
              </div>
              <div className="rounded-2xl bg-[#FAF9F5] p-3 border border-[#EAE6DC]">
                <p className="font-bold text-[#14532D]">Swedru</p>
                <p className="text-[11px] text-[#166534] font-semibold mt-0.5 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Ready
                </p>
              </div>
              <div className="rounded-2xl bg-[#FAF9F5] p-3 border border-[#EAE6DC]">
                <p className="font-bold text-[#14532D]">Nsawam</p>
                <p className="text-[11px] text-[#166534] font-semibold mt-0.5 flex items-center gap-1">
                  <Check className="h-3 w-3" /> Ready
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Product Info, Pricing, Action Stepper */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#166534]">
                {product.category}
              </span>
              {product.spec && (
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#14532D] border border-[#EAE6DC]">
                  {product.spec}
                </span>
              )}
            </div>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#14532D] leading-tight">
              {product.name}
            </h1>

            {/* Pricing */}
            <div className="pt-2 flex items-baseline gap-3">
              <span className="font-mono text-3xl font-black text-[#166534]">
                {product.priceDisplay}
              </span>
              {product.price !== null && (
                <span className="text-xs text-[#14532D]/60 font-semibold">
                  (Includes statutory farm supply pricing)
                </span>
              )}
            </div>

            {/* Notes / Bulk discounts */}
            {product.notes && (
              <div className="rounded-xl bg-[#FEF3C7] p-3 border border-amber-200/80 text-xs font-bold text-amber-900 flex items-start gap-2">
                <Info className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                <span>Special Packaging / Wholesale Note: {product.notes}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="rounded-2xl bg-white p-5 border border-[#EAE6DC] shadow-xs space-y-3">
            <h3 className="font-display text-xs font-black uppercase tracking-wider text-[#14532D]/70">
              Product Overview & Specifications
            </h3>
            <p className="text-sm text-[#14532D]/85 leading-relaxed font-medium">
              {product.description}
            </p>
          </div>

          {/* Quantity and Cart Controls */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-2xl border border-[#EAE6DC] bg-white p-1 shadow-xs">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-[#14532D] hover:bg-[#FAF9F5] text-lg font-bold"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 text-center font-mono text-base font-black text-[#14532D]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-[#14532D] hover:bg-[#FAF9F5] text-lg font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2.5 h-12 rounded-full font-black text-sm transition-all shadow-md active:scale-95 ${
                  isAdded
                    ? 'bg-[#14532D] text-white'
                    : 'bg-[#166534] hover:bg-[#14532D] text-white'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="h-5 w-5" />
                    <span>Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-5 w-5" />
                    <span>
                      {product.price !== null
                        ? `Add to Cart • GHS ${(product.price * quantity).toFixed(2)}`
                        : 'Add Item to Quote Request'}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Inquiry */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FAF9F5] hover:bg-[#F4F1EA] text-[#14532D] border border-[#EAE6DC] py-3 text-xs sm:text-sm font-bold transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-[#166534]" />
              <span>Ask Veterinary Specialist About This Item on WhatsApp</span>
            </a>
          </div>

          {/* Farmer Trust Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2.5 rounded-2xl bg-white p-3.5 border border-[#EAE6DC] text-xs font-semibold text-[#14532D]">
              <ShieldCheck className="h-5 w-5 text-[#166534] shrink-0" />
              <span>100% Genuine Potency Guaranteed</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl bg-white p-3.5 border border-[#EAE6DC] text-xs font-semibold text-[#14532D]">
              <Truck className="h-5 w-5 text-[#166534] shrink-0" />
              <span>Scheduled Farm Delivery Across Ghana</span>
            </div>
          </div>

          {/* Technical Consultation Callout */}
          <div className="rounded-3xl bg-[#DCFCE7]/40 border border-[#DCFCE7] p-5 flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <h4 className="font-display text-xs font-black text-[#14532D]">
                Need Dosage or Installation Advice?
              </h4>
              <p className="text-xs text-[#14532D]/80 font-medium">
                Our veterinary reps can calculate dilution ratios or recommend drinker heights for your flock.
              </p>
            </div>
            <Link
              to="/technical-support"
              className="shrink-0 rounded-full bg-[#166534] text-white px-4 py-2 text-xs font-bold hover:bg-[#14532D] transition-colors"
            >
              Free Guidance
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-10 border-t border-[#EAE6DC] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-black text-[#14532D]">
                Related {product.category} Items
              </h2>
              <p className="text-xs text-[#14532D]/70 font-medium">
                Other imported equipment and medications frequently purchased together
              </p>
            </div>
            <Link
              to={`/shop?category=${product.categorySlug}`}
              className="text-xs font-bold text-[#166534] hover:underline"
            >
              View all in category &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                to={`/shop/${rel.id}`}
                className="group rounded-3xl bg-white p-4 border border-[#EAE6DC] shadow-xs hover:shadow-md hover:border-[#166534]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#FAF9F5] border border-[#EAE6DC]/60 mb-3">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {rel.refCode && (
                    <span className="text-[10px] font-mono font-bold text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                      #{rel.refCode}
                    </span>
                  )}
                  <h3 className="font-display text-sm font-bold text-[#14532D] group-hover:text-[#166534] transition-colors line-clamp-1 mt-1">
                    {rel.name}
                  </h3>
                </div>
                <div className="pt-3 mt-3 border-t border-[#FAF9F5] flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#14532D]">
                    {rel.priceDisplay}
                  </span>
                  <span className="text-xs font-bold text-[#166534]">View &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
