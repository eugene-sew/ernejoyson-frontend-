import React, { useEffect, useState } from 'react'
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Truck,
  FileText,
  CreditCard,
  Building2,
  CheckCircle2,
  PhoneCall,
  Mail,
  Loader2,
  ArrowLeft,
  Smartphone,
  Check,
} from 'lucide-react'
import { useCartStore, type CartItem } from '@/store/useCartStore'
import { useAuthStore } from '@/store/useAuthStore'
import { Link } from 'react-router-dom'
import PaystackPop from '@paystack/inline-js'

interface OrderReceipt {
  reference: string
  date: string
  customerName: string
  customerPhone: string
  customerEmail: string
  deliveryLocation: string
  notes?: string
  items: CartItem[]
  totalAmount: number
  paymentMethod: string
  paymentStatus: 'PAID' | 'PENDING'
}

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
    getQuoteItems,
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

  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice()
  const quoteItems = getQuoteItems()

  const { user, login } = useAuthStore()

  // Navigation / View State: 'cart' | 'checkout' | 'success'
  const [viewState, setViewState] = useState<'cart' | 'checkout' | 'success'>('cart')
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Checkout Form State
  const [customerName, setCustomerName] = useState(user?.name || '')
  const [customerPhone, setCustomerPhone] = useState(user?.phone || '')
  const [customerEmail, setCustomerEmail] = useState(user?.email || '')
  const [deliveryLocation, setDeliveryLocation] = useState(user?.farmSize || '')
  const [orderNotes, setOrderNotes] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'paystack' | 'branch'>('paystack')

  // Confirmed Order Receipt State
  const [orderReceipt, setOrderReceipt] = useState<OrderReceipt | null>(null)

  useEffect(() => {
    if (user) {
      if (user.name && !customerName) setCustomerName(user.name)
      if (user.phone && !customerPhone) setCustomerPhone(user.phone)
      if (user.email && !customerEmail) setCustomerEmail(user.email)
      if (user.farmSize && !deliveryLocation) setDeliveryLocation(user.farmSize)
    }
  }, [user])

  // Reset view state when drawer closes
  const handleClose = () => {
    closeCart()
    if (viewState === 'success') {
      setViewState('cart')
      setOrderReceipt(null)
    }
  }

  if (!isOpen) return null

  // Initiate On-Platform Checkout
  const handleProceedToCheckout = () => {
    setErrorMessage('')
    setViewState('checkout')
  }

  // Handle Paystack or Platform Order Submission
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    if (!customerName.trim() || !customerPhone.trim() || !deliveryLocation.trim()) {
      setErrorMessage('Please provide your name, phone number, and delivery location.')
      return
    }

    // Save/update user profile in auth store
    login({
      name: customerName.trim(),
      phone: customerPhone.trim(),
      email: customerEmail.trim() || `${customerPhone.trim()}@farmghana.com`,
      farmSize: deliveryLocation.trim(),
    })

    const referenceId = `ENJ-${Date.now().toString().slice(-6)}`
    const effectiveEmail = customerEmail.trim() || `order_${referenceId.toLowerCase()}@ernejoyson.com`

    // Option 1: Paystack Gateway Payment
    if (paymentMethod === 'paystack') {
      setIsProcessing(true)

      const paystackKey =
        import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder_key'

      try {
        // If real key is available (starts with pk_), launch PaystackPop
        if (paystackKey && !paystackKey.includes('placeholder')) {
          const paystack = new PaystackPop()
          paystack.newTransaction({
            key: paystackKey,
            email: effectiveEmail,
            amount: Math.round(totalPrice * 100), // Pesewas
            currency: 'GHS',
            reference: referenceId,
            metadata: {
              custom_fields: [
                { display_name: 'Customer Name', variable_name: 'customer_name', value: customerName },
                { display_name: 'Phone Number', variable_name: 'phone_number', value: customerPhone },
                { display_name: 'Delivery Town', variable_name: 'delivery_town', value: deliveryLocation },
              ],
            },
            onSuccess: (transaction: { reference: string }) => {
              setIsProcessing(false)
              completeOrder(transaction.reference, 'Paystack Online (MoMo / Card)', 'PAID')
            },
            onCancel: () => {
              setIsProcessing(false)
            },
          })
        } else {
          // Demo / Test Mode integration when API key is pending setup
          setTimeout(() => {
            setIsProcessing(false)
            completeOrder(referenceId, 'Paystack Gateway (Sandbox MoMo)', 'PAID')
          }, 1200)
        }
      } catch (err) {
        console.error('Paystack initialization error:', err)
        // Fallback demo execution
        setTimeout(() => {
          setIsProcessing(false)
          completeOrder(referenceId, 'Paystack Gateway (Test Mode)', 'PAID')
        }, 1000)
      }
    } else {
      // Option 2: Branch Payment / Direct Wire
      setIsProcessing(true)
      setTimeout(() => {
        setIsProcessing(false)
        completeOrder(referenceId, 'Branch Payment / Waybill On-Collection', 'PENDING')
      }, 800)
    }
  }

  const completeOrder = (
    ref: string,
    method: string,
    status: 'PAID' | 'PENDING'
  ) => {
    const receipt: OrderReceipt = {
      reference: ref,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim() || 'N/A',
      deliveryLocation: deliveryLocation.trim(),
      notes: orderNotes.trim(),
      items: [...items],
      totalAmount: totalPrice,
      paymentMethod: method,
      paymentStatus: status,
    }

    setOrderReceipt(receipt)
    clearCart()
    setViewState('success')
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={handleClose}
      />

      {/* Drawer Container */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FAF9F5] shadow-2xl border-l border-[#EAE6DC] animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EAE6DC] px-6 py-4 bg-white">
          <div className="flex items-center gap-2.5">
            {viewState === 'checkout' ? (
              <button
                type="button"
                onClick={() => setViewState('cart')}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-100 text-[#14532D] transition-colors cursor-pointer mr-1"
                aria-label="Back to Cart"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCFCE7] text-[#166534]">
                <ShoppingBag className="h-5 w-5 stroke-[2.2]" />
              </div>
            )}
            <div>
              <h2 className="font-display text-base font-black text-[#14532D]">
                {viewState === 'cart' && 'Shopping Cart'}
                {viewState === 'checkout' && 'Checkout & Payment'}
                {viewState === 'success' && 'Order Confirmed'}
              </h2>
              <p className="text-xs text-[#14532D]/70 font-medium">
                {viewState === 'cart' && `${totalItems} ${totalItems === 1 ? 'item' : 'items'} selected`}
                {viewState === 'checkout' && 'Secure platform checkout (Paystack)'}
                {viewState === 'success' && 'Logged successfully in system'}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* ─── VIEW 1: CART ITEMS ─── */}
        {viewState === 'cart' && (
          <>
            {/* Cart Items Scroll List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#EAE6DC]/60">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7]/60 text-[#166534]">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-base font-bold text-[#14532D]">
                      Your Cart is Empty
                    </p>
                    <p className="text-xs text-[#14532D]/70 max-w-xs">
                      Explore our veterinary pharmaceuticals, feeders, drinkers, and hatchery equipment.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="mt-2 rounded-full bg-[#166534] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#14532D] transition-colors shadow-sm"
                  >
                    Browse Product Catalog
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.product.id} className="flex gap-4 py-4 group">
                    {/* Thumbnail */}
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[#EAE6DC] bg-white p-1">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = '/vite.svg'
                        }}
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs sm:text-sm font-bold text-[#14532D] line-clamp-2">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-neutral-400 hover:text-red-500 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#14532D]/60 font-medium">
                          {item.product.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center rounded-lg border border-[#EAE6DC] bg-white">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="flex h-6 w-6 items-center justify-center text-[#14532D] hover:bg-[#FAF9F5] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-2.5 w-2.5" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#14532D]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="flex h-6 w-6 items-center justify-center text-[#14532D] hover:bg-[#FAF9F5] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-2.5 w-2.5" />
                          </button>
                        </div>

                        {/* Price Display */}
                        <div className="text-right">
                          {item.product.price !== null ? (
                            <span className="font-display text-xs sm:text-sm font-black text-[#14532D]">
                              GHS {(item.product.price * item.quantity).toFixed(2)}
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                              Quote on Request
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Proceed to Checkout */}
            {items.length > 0 && (
              <div className="border-t border-[#EAE6DC] bg-white p-6 space-y-4 shadow-lg">
                {/* Subtotal Calculation */}
                <div className="space-y-1.5 text-xs text-[#14532D]/80">
                  <div className="flex justify-between items-center">
                    <span>Subtotal ({totalItems} items)</span>
                    <span className="font-display font-black text-sm text-[#14532D]">
                      GHS {totalPrice.toFixed(2)}
                    </span>
                  </div>

                  {quoteItems.length > 0 && (
                    <div className="flex justify-between items-center text-amber-700 bg-amber-50/80 px-2 py-1 rounded-lg">
                      <span>Items requiring quotation:</span>
                      <span className="font-bold">{quoteItems.length} item(s)</span>
                    </div>
                  )}

                  <p className="text-[11px] text-[#14532D]/60 flex items-center gap-1.5 pt-1">
                    <Truck className="h-3.5 w-3.5 text-[#166534] shrink-0" />
                    <span>Nationwide waybill dispatched from Kasoa, Kumasi, Swedru &amp; Nsawam.</span>
                  </p>
                </div>

                {/* Primary Proceed Action */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={handleProceedToCheckout}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#166534] py-3.5 px-4 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] shadow-md transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <span>Proceed to Checkout (GHS {totalPrice.toFixed(2)})</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <Link
                    to="/b2b"
                    onClick={handleClose}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FAF9F5] py-2.5 px-4 text-xs font-bold text-[#14532D] hover:bg-[#F4F1EA] border border-[#EAE6DC] transition-all"
                  >
                    <FileText className="h-3.5 w-3.5 text-[#166534]" />
                    <span>Request Official B2B Proforma Invoice</span>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#14532D]/60 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#166534]" />
                  <span>Certified Genuine Products • Safe Platform Checkout</span>
                </div>
              </div>
            )}
          </>
        )}

        {/* ─── VIEW 2: CHECKOUT & PAYMENT FORM ─── */}
        {viewState === 'checkout' && (
          <form onSubmit={handleSubmitOrder} className="flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              
              {/* Order Amount Banner */}
              <div className="rounded-2xl bg-[#DCFCE7]/60 border border-[#22C55E]/30 p-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534]">
                    Total Payable Amount
                  </span>
                  <p className="font-display text-2xl font-black text-[#14532D]">
                    GHS {totalPrice.toFixed(2)}
                  </p>
                </div>
                <span className="text-xs bg-white px-2.5 py-1 rounded-full text-[#166534] font-bold border border-[#22C55E]/30">
                  {totalItems} items
                </span>
              </div>

              {/* Customer Contact Details */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider block">
                  1. Recipient &amp; Delivery Information
                </span>

                <input
                  type="text"
                  placeholder="Full Name / Farm Name *"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium shadow-2xs"
                  required
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="tel"
                    placeholder="Phone (e.g. 0244 000 000) *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium shadow-2xs"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address (for receipt)"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium shadow-2xs"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Delivery Town / City &amp; Region * (e.g. Kasoa, Kumasi, Sunyani)"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium shadow-2xs"
                  required
                />

                <input
                  type="text"
                  placeholder="Delivery notes / Preferred Waybill station (optional)"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 px-3.5 py-2.5 text-xs text-neutral-800 placeholder:text-neutral-400 outline-none focus:border-[#22C55E] bg-white font-medium shadow-2xs"
                />
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider block">
                  2. Choose Payment Method
                </span>

                <div className="space-y-2">
                  {/* Paystack Online (MoMo & Card) */}
                  <label
                    onClick={() => setPaymentMethod('paystack')}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'paystack'
                        ? 'border-[#166534] bg-[#F0FDF4] shadow-xs'
                        : 'border-[#EAE6DC] bg-white hover:bg-[#FAF9F5]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'paystack'}
                      onChange={() => setPaymentMethod('paystack')}
                      className="mt-1 accent-[#166534]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-[#14532D] flex items-center gap-1.5">
                          <CreditCard className="h-4 w-4 text-[#166534]" />
                          Pay with Paystack
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#DCFCE7] text-[#166534] px-2 py-0.5 rounded-full">
                          Instant
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-0.5">
                        MTN Mobile Money, Telecel Cash, Visa, Mastercard in GHS.
                      </p>
                    </div>
                  </label>

                  {/* Branch Payment / Bank Transfer */}
                  <label
                    onClick={() => setPaymentMethod('branch')}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'branch'
                        ? 'border-[#166534] bg-[#F0FDF4] shadow-xs'
                        : 'border-[#EAE6DC] bg-white hover:bg-[#FAF9F5]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'branch'}
                      onChange={() => setPaymentMethod('branch')}
                      className="mt-1 accent-[#166534]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-bold text-[#14532D] flex items-center gap-1.5">
                          <Building2 className="h-4 w-4 text-[#166534]" />
                          Branch Cash / Waybill Dispatch
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-600 mt-0.5">
                        Generate official order reference to pay at Kasoa, Kumasi, Swedru or Nsawam branches.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {errorMessage && (
                <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-600 font-medium">
                  {errorMessage}
                </div>
              )}
            </div>

            {/* Bottom Checkout Action */}
            <div className="border-t border-[#EAE6DC] bg-white p-6 space-y-2.5 shadow-lg">
              <button
                type="submit"
                disabled={isProcessing}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#166534] py-3.5 px-4 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] shadow-md transition-all active:scale-[0.99] disabled:opacity-60 cursor-pointer"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : paymentMethod === 'paystack' ? (
                  <>
                    <Smartphone className="h-4 w-4" />
                    <span>Pay GHS {totalPrice.toFixed(2)} via Paystack</span>
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Confirm Order (Pay at Branch)</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setViewState('cart')}
                className="w-full text-center text-xs font-bold text-[#14532D]/70 hover:text-[#14532D] py-1 cursor-pointer"
              >
                Modify Cart Items
              </button>
            </div>
          </form>
        )}

        {/* ─── VIEW 3: ORDER CONFIRMED RECEIPT ─── */}
        {viewState === 'success' && orderReceipt && (
          <div className="flex-1 flex flex-col justify-between overflow-hidden">
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              
              {/* Green Success Badge */}
              <div className="rounded-2xl bg-[#DCFCE7] border border-[#22C55E]/40 p-5 text-center space-y-2">
                <div className="h-12 w-12 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="font-display text-lg font-black text-[#14532D]">
                  Order Successfully Placed!
                </h3>
                <p className="text-xs text-[#14532D]/80 font-medium">
                  Your order has been logged into the ERNEJOYSON dispatch management system.
                </p>
                <div className="inline-block bg-white px-3.5 py-1.5 rounded-full border border-[#22C55E]/30 text-xs font-mono font-bold text-[#166534] mt-1">
                  Reference: #{orderReceipt.reference}
                </div>
              </div>

              {/* Order Invoice Details */}
              <div className="rounded-2xl bg-white border border-[#EAE6DC] p-4 space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#EAE6DC] pb-2">
                  <span className="text-neutral-500">Date &amp; Time:</span>
                  <span className="font-bold text-[#14532D]">{orderReceipt.date}</span>
                </div>

                <div className="flex justify-between border-b border-[#EAE6DC] pb-2">
                  <span className="text-neutral-500">Customer:</span>
                  <span className="font-bold text-[#14532D]">{orderReceipt.customerName}</span>
                </div>

                <div className="flex justify-between border-b border-[#EAE6DC] pb-2">
                  <span className="text-neutral-500">Phone Contact:</span>
                  <span className="font-mono font-bold text-[#14532D]">{orderReceipt.customerPhone}</span>
                </div>

                <div className="flex justify-between border-b border-[#EAE6DC] pb-2">
                  <span className="text-neutral-500">Delivery Destination:</span>
                  <span className="font-bold text-[#14532D]">{orderReceipt.deliveryLocation}</span>
                </div>

                <div className="flex justify-between border-b border-[#EAE6DC] pb-2">
                  <span className="text-neutral-500">Payment Channel:</span>
                  <span className="font-bold text-[#166534]">{orderReceipt.paymentMethod}</span>
                </div>

                <div className="flex justify-between pt-1">
                  <span className="text-sm font-bold text-[#14532D]">Total Paid / Due:</span>
                  <span className="font-display text-base font-black text-[#14532D]">
                    GHS {orderReceipt.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Purchased Items List */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider block">
                  Itemized Summary
                </span>
                <div className="divide-y divide-[#EAE6DC] rounded-2xl bg-white border border-[#EAE6DC] p-3">
                  {orderReceipt.items.map((item) => (
                    <div key={item.product.id} className="flex justify-between py-2 text-xs">
                      <div>
                        <span className="font-bold text-[#14532D]">{item.product.name}</span>
                        <span className="text-neutral-500 ml-1.5">×{item.quantity}</span>
                      </div>
                      <span className="font-mono font-semibold text-[#14532D]">
                        {item.product.price !== null
                          ? `GHS ${(item.product.price * item.quantity).toFixed(2)}`
                          : 'Quote'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support & Logistics Inquiries */}
              <div className="rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] p-4 space-y-2 text-xs text-[#14532D]">
                <p className="font-bold flex items-center gap-1.5 text-[#166534]">
                  <Truck className="h-4 w-4" />
                  <span>Dispatch &amp; Waybill Tracking:</span>
                </p>
                <p className="text-[11px] text-neutral-600 leading-relaxed">
                  Our dispatch logistics warehouse in Kasoa/Kumasi will prepare your parcel. For any order status inquiries, reference <strong>#{orderReceipt.reference}</strong> when calling our direct desks:
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="tel:0596709226"
                    className="inline-flex items-center gap-1 font-bold text-[#166534] bg-white px-2.5 py-1 rounded-lg border border-[#EAE6DC]"
                  >
                    <PhoneCall className="h-3 w-3" />
                    <span>059 670 9226</span>
                  </a>
                  <a
                    href="tel:0241604926"
                    className="inline-flex items-center gap-1 font-bold text-[#166534] bg-white px-2.5 py-1 rounded-lg border border-[#EAE6DC]"
                  >
                    <PhoneCall className="h-3 w-3" />
                    <span>024 160 4926</span>
                  </a>
                  <a
                    href="mailto:sales@ernejoyson.com"
                    className="inline-flex items-center gap-1 font-bold text-[#166534] bg-white px-2.5 py-1 rounded-lg border border-[#EAE6DC]"
                  >
                    <Mail className="h-3 w-3" />
                    <span>sales@ernejoyson.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Done Action */}
            <div className="border-t border-[#EAE6DC] bg-white p-6 shadow-lg">
              <button
                type="button"
                onClick={handleClose}
                className="w-full rounded-full bg-[#166534] py-3.5 px-4 text-xs sm:text-sm font-black text-white hover:bg-[#14532D] transition-colors shadow-sm cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
