import React, { useEffect } from 'react'
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  Truck,
  FileText,
} from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import { Link } from 'react-router-dom'

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    generateWhatsAppUrl,
  } = useCartStore()

  // Prevent background scrolling when cart drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()
  const whatsappUrl = generateWhatsAppUrl()

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={closeCart}
      />

      {/* Drawer Container */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FAF9F5] shadow-2xl border-l border-[#EAE6DC] animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EAE6DC] px-6 py-4 bg-white">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
              <ShoppingBag className="h-5 w-5 stroke-[2.2]" />
            </div>
            <div>
              <h2 className="font-display text-base font-black text-[#14532D]">
                Order & Quote Cart
              </h2>
              <p className="text-xs text-[#14532D]/70 font-medium">
                {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded hover:bg-red-50 transition-colors"
                title="Empty cart"
              >
                Clear
              </button>
            )}
            <button
              onClick={closeCart}
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-black/5 text-[#14532D] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center py-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-[#EAE6DC] text-[#14532D]/40 mb-4">
                <ShoppingBag className="h-8 w-8 stroke-[1.5]" />
              </div>
              <h3 className="font-display text-lg font-extrabold text-[#14532D] mb-1">
                Your cart is empty
              </h3>
              <p className="text-xs text-[#14532D]/70 max-w-xs mb-6 font-medium">
                Browse our real-stock veterinary medications, poultry feeders, automatic drinkers, and hatchery equipment.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#14532D] transition-all shadow-sm"
              >
                <span>Browse Shop Catalog</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="group flex gap-3.5 rounded-2xl bg-white p-3.5 border border-[#EAE6DC] shadow-xs hover:border-[#166534]/30 transition-all"
                >
                  {/* Thumbnail */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-20 w-20 rounded-xl object-cover border border-[#EAE6DC] shrink-0 bg-[#FAF9F5]"
                  />

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          to={`/shop/${product.id}`}
                          onClick={closeCart}
                          className="font-display text-xs font-extrabold text-[#14532D] hover:text-[#166534] line-clamp-1"
                        >
                          {product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-[#14532D]/40 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                        <span className="text-[10px] text-[#14532D]/60 truncate max-w-[150px]">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Price and Stepper */}
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#FAF9F5]">
                      <div>
                        {product.price !== null ? (
                          <div className="flex flex-col">
                            <span className="font-display text-xs font-black text-[#14532D]">
                              GHS {(product.price * quantity).toFixed(2)}
                            </span>
                            {quantity > 1 && (
                              <span className="text-[10px] text-[#14532D]/60 font-semibold font-display">
                                @ GHS {product.price.toFixed(2)} each
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-[11px] font-bold text-[#166534] bg-[#FEF3C7] text-amber-900 px-2 py-0.5 rounded-full">
                            Quote on Request
                          </span>
                        )}
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center rounded-lg border border-[#EAE6DC] bg-[#FAF9F5] p-0.5">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="flex h-6 w-6 items-center justify-center rounded text-[#14532D]/70 hover:bg-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-7 text-center font-display text-xs font-black text-[#14532D]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="flex h-6 w-6 items-center justify-center rounded text-[#14532D]/70 hover:bg-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#EAE6DC] bg-white p-6 space-y-4">
            {/* Price Breakdown */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#14532D]/70 font-medium">
                <span>Items Selected</span>
                <span>{totalItems} units</span>
              </div>
              <div className="flex items-center justify-between text-sm font-extrabold text-[#14532D]">
                <span>Estimated Subtotal (GHC)</span>
                <span className="font-display text-base font-black text-[#166534]">
                  GHS {totalPrice.toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-[#14532D]/60 flex items-center gap-1.5 pt-1">
                <Truck className="h-3.5 w-3.5 text-[#166534] shrink-0" />
                <span>Dispatched directly from Kasoa, Kumasi, Swedru & Nsawam.</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              {/* WhatsApp Instant Checkout */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#166534] py-3 px-4 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] shadow-md transition-all active:scale-[0.99]"
              >
                <MessageSquare className="h-4 w-4 fill-white/20" />
                <span>Confirm Order via WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              {/* B2B Quote Alternative */}
              <Link
                to="/b2b"
                onClick={closeCart}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FAF9F5] py-2.5 px-4 text-xs font-bold text-[#14532D] hover:bg-[#F4F1EA] border border-[#EAE6DC] transition-all"
              >
                <FileText className="h-3.5 w-3.5 text-[#166534]" />
                <span>Request B2B Proforma Invoice</span>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#14532D]/60 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-[#166534]" />
              <span>Genuine Imported Products • Direct Manufacturer Warranty</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
