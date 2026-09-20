import React, { useEffect, useState } from 'react'
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
import { useAuthStore } from '@/store/useAuthStore'
import { Link } from 'react-router-dom'
import { User, Check } from 'lucide-react'

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

  const { user, isLoggedIn, login } = useAuthStore()
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [checkoutName, setCheckoutName] = useState(user?.name || '')
  const [checkoutPhone, setCheckoutPhone] = useState(user?.phone || '')
  const [checkoutLocation, setCheckoutLocation] = useState(user?.farmSize || '')
  const [loginError, setLoginError] = useState('')

  useEffect(() => {
    if (user) {
      setCheckoutName(user.name || '')
      setCheckoutPhone(user.phone || '')
      setCheckoutLocation(user.farmSize || '')
    }
  }, [user])

  const handleConfirmOrder = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!isLoggedIn || !user?.name || !user?.phone) {
      setShowLoginForm(true)
      return
    }
    const url = generateWhatsAppUrl({
      name: user.name,
      phone: user.phone,
      location: user.farmSize,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!checkoutName.trim() || !checkoutPhone.trim()) {
      setLoginError('Please provide your name and phone number.')
      return
    }
    const profile = {
      name: checkoutName.trim(),
      phone: checkoutPhone.trim(),
      farmSize: checkoutLocation.trim(),
    }
    login(profile)
    setShowLoginForm(false)
    const url = generateWhatsAppUrl({
      name: profile.name,
      phone: profile.phone,
      location: profile.farmSize,
    })
    window.open(url, '_blank', 'noopener,noreferrer')
  }

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
                Order &amp; Quote Cart
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
                <span>Dispatched directly from Kasoa, Kumasi, Swedru &amp; Nsawam.</span>
              </p>
            </div>

            {/* Recognized Customer Chip */}
            {isLoggedIn && user && !showLoginForm && (
              <div className="flex items-center justify-between text-xs bg-[#DCFCE7]/70 border border-[#22C55E]/30 text-[#166534] px-3.5 py-2 rounded-xl">
                <div className="flex items-center gap-2 truncate">
                  <User className="h-3.5 w-3.5 shrink-0 text-[#166534]" />
                  <span className="truncate">
                    Ordering as: <strong>{user.name}</strong> ({user.phone})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowLoginForm(true)}
                  className="text-[11px] font-bold underline hover:text-[#14532D] shrink-0 ml-2"
                >
                  Edit
                </button>
              </div>
            )}

            {/* CTAs / Login Gate Form */}
            {showLoginForm ? (
              <form onSubmit={handleLoginSubmit} className="rounded-2xl border border-[#22C55E]/40 bg-[#F0FDF4]/80 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4 text-[#166534]" />
                    <span className="text-xs font-bold text-[#14532D]">Contact Information</span>
                  </div>
                  {isLoggedIn && (
                    <button
                      type="button"
                      onClick={() => setShowLoginForm(false)}
                      className="text-xs text-neutral-400 hover:text-neutral-600 font-semibold"
                    >
                      Cancel
                    </button>
                  )}
                </div>
                <p className="text-[11px] text-[#14532D]/70 leading-relaxed">
                  Enter your details so our sales desk can address your order and arrange nationwide delivery.
                </p>
                <input
                  type="text"
                  placeholder="Your Name / Farm Name"
                  value={checkoutName}
                  onChange={(e) => { setCheckoutName(e.target.value); setLoginError('') }}
                  className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (e.g. 0244 000 000)"
                  value={checkoutPhone}
                  onChange={(e) => { setCheckoutPhone(e.target.value); setLoginError('') }}
                  className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium"
                  required
                />
                <input
                  type="text"
                  placeholder="Farm Location / City (optional)"
                  value={checkoutLocation}
                  onChange={(e) => setCheckoutLocation(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium"
                />
                {loginError && <p className="text-[11px] text-red-500">{loginError}</p>}
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#166534] py-3 px-4 text-xs font-bold text-white hover:bg-[#14532D] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Check className="h-4 w-4" />
                  <span>Confirm &amp; Open WhatsApp Order</span>
                </button>
              </form>
            ) : (
              <div className="space-y-2.5">
                {/* WhatsApp Instant Checkout */}
                <button
                  type="button"
                  onClick={handleConfirmOrder}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#166534] py-3 px-4 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] shadow-md transition-all active:scale-[0.99] cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 fill-white/20" />
                  <span>Confirm Order via WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

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
            )}

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
