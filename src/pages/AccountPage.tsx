import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleX,
  ClipboardList,
  Loader2,
  LogOut,
  MapPin,
  Package,
  PackageCheck,
  PackagePlus,
  RotateCcw,
  Search,
  ShieldCheck,
  Truck,
  UserRound,
} from 'lucide-react'
import { api, type OrderStep, type PublicOrder } from '@/services/api'
import { useAuthStore } from '@/store/useAuthStore'
import { useCartStore } from '@/store/useCartStore'
import { useCatalog } from '@/store/useCatalogStore'

// ─── Shared bits ───────────────────────────────────────────────────────────────

const inputClass =
  'w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-sm font-medium text-neutral-800 shadow-2xs outline-none placeholder:text-neutral-400 focus:border-[#22C55E] disabled:bg-neutral-50 disabled:text-neutral-500'
const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#166534] px-5 py-3 text-sm font-black text-white shadow-md transition-all hover:bg-[#14532D] active:scale-[0.99] disabled:opacity-60 cursor-pointer'
const ghostBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#EAE6DC] bg-white px-4 py-2.5 text-xs font-bold text-[#14532D] transition-colors hover:bg-[#F4F1EA] cursor-pointer'

const money = (n: number | string) => `GHS ${Number(n).toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
const date = (iso: string, withTime = false) =>
  new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', ...(withTime ? { hour: '2-digit', minute: '2-digit' } : {}),
  })
const message = (e: unknown) => (e instanceof Error ? e.message : 'Something went wrong. Please try again.')

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-bold uppercase tracking-wider text-[#14532D]/80">{label}</span>
      {children}
      {hint && <span className="block text-[11px] text-neutral-500">{hint}</span>}
    </label>
  )
}

function Notice({ tone, children }: { tone: 'error' | 'ok'; children: React.ReactNode }) {
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={`rounded-xl border p-3 text-xs font-medium ${
        tone === 'error' ? 'border-red-200 bg-red-50 text-red-700' : 'border-[#22C55E]/30 bg-[#F0FDF4] text-[#166534]'
      }`}
    >
      {children}
    </div>
  )
}

const STATUS: Record<PublicOrder['order_status'], { label: string; cls: string }> = {
  PENDING: { label: 'Received', cls: 'bg-amber-50 text-amber-800 ring-amber-200' },
  CONFIRMED: { label: 'Confirmed', cls: 'bg-sky-50 text-sky-800 ring-sky-200' },
  DISPATCHED: { label: 'On the way', cls: 'bg-indigo-50 text-indigo-800 ring-indigo-200' },
  DELIVERED: { label: 'Delivered', cls: 'bg-[#DCFCE7] text-[#166534] ring-[#22C55E]/40' },
  CANCELLED: { label: 'Cancelled', cls: 'bg-neutral-100 text-neutral-600 ring-neutral-200' },
}

function StatusPill({ status }: { status: PublicOrder['order_status'] }) {
  const s = STATUS[status]
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ${s.cls}`}>{s.label}</span>
}

const STEPS: { step: OrderStep; label: string; icon: typeof Package }[] = [
  { step: 'placed', label: 'Order placed', icon: ClipboardList },
  { step: 'confirmed', label: 'Confirmed by our team', icon: PackageCheck },
  { step: 'dispatched', label: 'Dispatched', icon: Truck },
  { step: 'delivered', label: 'Delivered', icon: Check },
]

function Timeline({ order }: { order: PublicOrder }) {
  const at = Object.fromEntries(order.timeline.map((t) => [t.step, t]))
  const cancelled = at.cancelled
  const steps = cancelled
    ? [...STEPS.filter((s) => at[s.step]), { step: 'cancelled' as const, label: 'Cancelled', icon: CircleX }]
    : STEPS
  return (
    <ol className="space-y-0">
      {steps.map((s, i) => {
        const done = !!at[s.step]
        const Icon = s.icon
        const last = i === steps.length - 1
        return (
          <li key={s.step} className="relative flex gap-3 pb-5 last:pb-0">
            {!last && (
              <span className={`absolute left-[15px] top-8 h-[calc(100%-2rem)] w-0.5 ${done && at[steps[i + 1].step] ? 'bg-[#22C55E]' : 'bg-[#EAE6DC]'}`} />
            )}
            <span
              className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                s.step === 'cancelled' ? 'bg-neutral-200 text-neutral-600' : done ? 'bg-[#166534] text-white' : 'bg-white text-neutral-300 ring-1 ring-[#EAE6DC]'
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="pt-1">
              <p className={`text-sm font-bold ${done ? 'text-[#14532D]' : 'text-neutral-400'}`}>{s.label}</p>
              {done && <p className="text-xs text-neutral-500">{date(at[s.step].at, true)}</p>}
              {s.step === 'dispatched' && done && order.waybill_number && (
                <p className="mt-1 text-xs text-[#14532D]">
                  Waybill <span className="font-mono font-bold">{order.waybill_number}</span>
                  {order.waybill_courier && <> via {order.waybill_courier}</>}
                </p>
              )}
              {s.step === 'cancelled' && at.cancelled?.note && <p className="mt-1 text-xs text-neutral-600">{at.cancelled.note}</p>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

/** Full order view — used by the account detail page and guest tracking. */
function OrderView({ order }: { order: PublicOrder }) {
  const products = useCatalog()
  const { addItem, openCart } = useCartStore()
  const [reorderNote, setReorderNote] = useState('')

  const reorder = () => {
    let added = 0
    for (const item of order.items) {
      const p = products.find((x) => x.id === item.product_id)
      if (p && p.inStock !== false) {
        addItem(p, item.quantity)
        added++
      }
    }
    if (added) openCart()
    setReorderNote(
      added === order.items.length ? '' : added ? 'Some items are no longer available and were left out.' : 'These items are no longer available in the shop.'
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-[#EAE6DC] bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#14532D]/60">Order</p>
              <h2 className="font-mono text-xl font-black text-[#14532D]">{order.order_number}</h2>
              <p className="text-xs text-neutral-500">Placed {date(order.created_at, true)}</p>
            </div>
            <StatusPill status={order.order_status} />
          </div>
          <div className="mt-6">
            <Timeline order={order} />
          </div>
        </div>

        <div className="rounded-3xl border border-[#EAE6DC] bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-display text-base font-black text-[#14532D]">Items</h3>
            <button type="button" onClick={reorder} className={ghostBtn}>
              <RotateCcw className="h-3.5 w-3.5" /> Order again
            </button>
          </div>
          {reorderNote && <p className="mb-3 text-xs text-amber-700">{reorderNote}</p>}
          <ul className="divide-y divide-[#EAE6DC]">
            {order.items.map((i) => (
              <li key={i.product_id + i.product_name} className="flex items-center gap-3 py-3">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#EAE6DC] bg-white p-1">
                  {i.product_image ? (
                    <img src={i.product_image} alt="" className="h-full w-full object-contain" />
                  ) : (
                    <Package className="m-auto mt-2.5 h-5 w-5 text-neutral-300" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-[#14532D]">{i.product_name}</p>
                  <p className="text-xs text-neutral-500">
                    {i.quantity} × {i.unit_price ? money(i.unit_price) : 'Quote'}
                  </p>
                </div>
                <span className="font-mono text-sm font-semibold text-[#14532D]">{i.total_price ? money(i.total_price) : '—'}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="rounded-3xl border border-[#EAE6DC] bg-white p-6 text-sm shadow-sm">
          <dl className="space-y-3">
            <div className="flex justify-between gap-3">
              <dt className="text-neutral-500">Total</dt>
              <dd className="font-display text-lg font-black text-[#14532D]">{money(order.total_amount)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-neutral-500">Payment</dt>
              <dd className="text-right font-bold text-[#14532D]">
                {order.payment_status === 'PAID' ? 'Paid' : order.payment_status === 'FAILED' ? 'Failed' : 'To pay'}
                <span className="block text-[11px] font-medium text-neutral-500">{order.payment_method}</span>
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-neutral-500">Deliver to</dt>
              <dd className="text-right font-bold text-[#14532D]">{order.delivery_location}</dd>
            </div>
            {order.branch && (
              <div className="flex justify-between gap-3">
                <dt className="text-neutral-500">Handled by</dt>
                <dd className="text-right font-bold text-[#14532D]">{order.branch}</dd>
              </div>
            )}
          </dl>
        </div>
        <div className="rounded-3xl border border-[#EAE6DC] bg-[#FAF9F5] p-5 text-xs text-neutral-600">
          Questions about this order? Call <a href="tel:0596709226" className="font-bold text-[#166534]">059 670 9226</a> and quote{' '}
          <span className="font-mono font-bold text-[#14532D]">{order.order_number}</span>.
        </div>
      </aside>
    </div>
  )
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1200px] px-4 pb-20 pt-24 sm:px-6 lg:px-8">{children}</div>
}

// ─── /account — sign in / register / forgot, or the portal when signed in ────

export const AccountPage: React.FC = () => {
  const { isLoggedIn, refresh } = useAuthStore()
  useEffect(() => {
    refresh()
  }, [refresh])
  return <PageShell>{isLoggedIn ? <Portal /> : <SignedOut />}</PageShell>
}

function SignedOut() {
  const [params] = useSearchParams()
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>(params.get('mode') === 'register' ? 'register' : 'login')

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_440px]">
      <div className="relative overflow-hidden rounded-3xl bg-radial from-[#14532D] to-[#0A2614] p-8 text-white shadow-xl sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#22C55E]/10 blur-3xl" />
        <div className="relative space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#86EFAC]">Your farm account</p>
          <h1 className="font-display text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl">
            Every order, every waybill, in one place.
          </h1>
          <ul className="space-y-3 text-sm text-white/85">
            {[
              'Follow each order from confirmation to waybill and delivery',
              'Reorder feed, drugs and equipment in one tap',
              'Your name, phone and delivery town filled in at checkout',
            ].map((t) => (
              <li key={t} className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#86EFAC]" />
                {t}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-white/10 p-4 text-sm ring-1 ring-white/15">
            <p className="font-bold">No account? No problem.</p>
            <p className="mt-1 text-white/75">
              You can always order as a guest. To check on a guest order,{' '}
              <Link to="/track" className="font-bold text-[#86EFAC] underline-offset-2 hover:underline">
                track it with your order number
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-[#EAE6DC] bg-white p-6 shadow-sm sm:p-8">
        {mode !== 'forgot' && (
          <div className="mb-6 grid grid-cols-2 rounded-full bg-[#F4F1EA] p-1 text-sm font-bold">
            {(['login', 'register'] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-full py-2 transition-colors cursor-pointer ${mode === m ? 'bg-white text-[#14532D] shadow-sm' : 'text-[#14532D]/60 hover:text-[#14532D]'}`}
              >
                {m === 'login' ? 'Sign in' : 'Create account'}
              </button>
            ))}
          </div>
        )}
        {mode === 'login' && <LoginForm onForgot={() => setMode('forgot')} />}
        {mode === 'register' && <RegisterForm />}
        {mode === 'forgot' && <ForgotForm onBack={() => setMode('login')} />}
      </div>
    </div>
  )
}

function LoginForm({ onForgot }: { onForgot: () => void }) {
  const { setSession } = useAuthStore()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const r = await api.account.login(login.trim(), password)
      setSession(r.token, r.customer)
    } catch (err) {
      setError(message(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Field label="Phone number or email">
        <input className={inputClass} value={login} onChange={(e) => setLogin(e.target.value)} autoComplete="username" required />
      </Field>
      <Field label="Password">
        <input type="password" className={inputClass} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required />
      </Field>
      {error && <Notice tone="error">{error}</Notice>}
      <button type="submit" disabled={busy} className={`${primaryBtn} w-full`}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />} Sign in
      </button>
      <button type="button" onClick={onForgot} className="w-full text-center text-xs font-bold text-[#14532D]/70 hover:text-[#14532D] cursor-pointer">
        Forgot your password?
      </button>
    </form>
  )
}

function RegisterForm() {
  const [params] = useSearchParams()
  const { setSession } = useAuthStore()
  const [form, setForm] = useState({ name: params.get('name') || '', phone: params.get('phone') || '', email: '', location: '', password: '' })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const r = await api.account.register({ ...form, email: form.email.trim() || undefined, location: form.location.trim() || undefined })
      setSession(r.token, r.customer)
      // Came from the post-checkout prompt: bring that order into the new account.
      const claim = params.get('claim')
      if (claim) await api.account.claim(claim, form.phone).catch(() => undefined)
    } catch (err) {
      setError(message(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Field label="Full name / farm name">
        <input className={inputClass} value={form.name} onChange={set('name')} autoComplete="name" required />
      </Field>
      <Field label="Phone number" hint="Use the number you order with, so your orders land in this account.">
        <input type="tel" className={inputClass} value={form.phone} onChange={set('phone')} autoComplete="tel" placeholder="024 000 0000" required />
      </Field>
      <Field label="Email (optional)" hint="For receipts and password resets.">
        <input type="email" className={inputClass} value={form.email} onChange={set('email')} autoComplete="email" />
      </Field>
      <Field label="Delivery town (optional)">
        <input className={inputClass} value={form.location} onChange={set('location')} placeholder="e.g. Kasoa, Central Region" />
      </Field>
      <Field label="Password" hint="At least 8 characters.">
        <input type="password" className={inputClass} value={form.password} onChange={set('password')} autoComplete="new-password" minLength={8} required />
      </Field>
      {error && <Notice tone="error">{error}</Notice>}
      <button type="submit" disabled={busy} className={`${primaryBtn} w-full`}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserRound className="h-4 w-4" />} Create my account
      </button>
    </form>
  )
}

function ForgotForm({ onBack }: { onBack: () => void }) {
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [done, setDone] = useState('')
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      setDone((await api.account.requestReset(email.trim())).message)
    } catch (err) {
      setError(message(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <h2 className="font-display text-lg font-black text-[#14532D]">Reset your password</h2>
        <p className="text-xs text-neutral-500">We'll email you a link. No email on your account? Call 059 670 9226 and we'll help.</p>
      </div>
      <Field label="Email">
        <input type="email" className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Field>
      {done && <Notice tone="ok">{done}</Notice>}
      {error && <Notice tone="error">{error}</Notice>}
      <button type="submit" disabled={busy || !!done} className={`${primaryBtn} w-full`}>
        {busy && <Loader2 className="h-4 w-4 animate-spin" />} Send reset link
      </button>
      <button type="button" onClick={onBack} className="w-full text-center text-xs font-bold text-[#14532D]/70 hover:text-[#14532D] cursor-pointer">
        Back to sign in
      </button>
    </form>
  )
}

// ─── Signed-in portal ──────────────────────────────────────────────────────────

function Portal() {
  const { customer, logout } = useAuthStore()
  const [tab, setTab] = useState<'orders' | 'profile' | 'security'>('orders')
  if (!customer) return null

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166534]">My account</p>
          <h1 className="font-display text-3xl font-black tracking-tight text-[#14532D] sm:text-4xl">
            Akwaaba, {customer.name.split(' ')[0]}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {customer.phone}
            {customer.memberSince && <> · member since {date(customer.memberSince)}</>}
          </p>
        </div>
        <button type="button" onClick={logout} className={ghostBtn}>
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:max-w-md">
        <div className="rounded-2xl border border-[#EAE6DC] bg-white p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Orders</p>
          <p className="font-display text-2xl font-black text-[#14532D]">{customer.orders_count}</p>
        </div>
        <div className="rounded-2xl border border-[#EAE6DC] bg-white p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">Total spent</p>
          <p className="font-display text-2xl font-black text-[#14532D]">{money(customer.total_spent)}</p>
        </div>
      </div>

      <div className="flex gap-1 border-b border-[#EAE6DC] text-sm font-bold">
        {([['orders', 'Orders'], ['profile', 'Profile'], ['security', 'Password']] as const).map(([k, label]) => (
          <button
            key={k}
            type="button"
            onClick={() => setTab(k)}
            className={`-mb-px border-b-2 px-4 py-2.5 transition-colors cursor-pointer ${
              tab === k ? 'border-[#166534] text-[#14532D]' : 'border-transparent text-[#14532D]/50 hover:text-[#14532D]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'orders' && <OrdersTab />}
      {tab === 'profile' && <ProfileTab />}
      {tab === 'security' && <PasswordTab />}
    </div>
  )
}

function OrdersTab() {
  const { customer, refresh } = useAuthStore()
  const [page, setPage] = useState(1)
  const [data, setData] = useState<Awaited<ReturnType<typeof api.account.orders>> | null>(null)
  const [error, setError] = useState('')
  const [reload, setReload] = useState(0)
  const [claimOpen, setClaimOpen] = useState(false)

  useEffect(() => {
    let live = true
    setError('')
    api.account.orders(page).then(
      (d) => live && setData(d),
      (e) => live && setError(message(e))
    )
    return () => {
      live = false
    }
  }, [page, reload])

  const claimed = () => {
    setClaimOpen(false)
    setPage(1)
    setReload((n) => n + 1)
    refresh()
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-neutral-500">Orders you place while signed in show up here.</p>
        <button type="button" onClick={() => setClaimOpen((v) => !v)} className={ghostBtn}>
          <PackagePlus className="h-3.5 w-3.5" /> Add a past order
        </button>
      </div>

      {claimOpen && customer && <ClaimForm phone={customer.phone} onDone={claimed} />}
      {error && <Notice tone="error">{error}</Notice>}

      {!data && !error && (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 animate-pulse rounded-2xl bg-[#F4F1EA]" />
          ))}
        </div>
      )}

      {data && data.orders.length === 0 && (
        <div className="rounded-3xl border border-dashed border-[#EAE6DC] bg-white px-6 py-14 text-center">
          <ClipboardList className="mx-auto h-8 w-8 text-[#166534]/50" />
          <p className="mt-3 font-display text-base font-black text-[#14532D]">No orders yet</p>
          <p className="mx-auto mt-1 max-w-sm text-xs text-neutral-500">
            Ordered before you had an account? Use "Add a past order" with the order number and the phone you used.
          </p>
          <Link to="/shop" className={`${primaryBtn} mt-5`}>
            Browse the shop <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {data && data.orders.length > 0 && (
        <ul className="space-y-3">
          {data.orders.map((o) => (
            <li key={o.order_number}>
              <Link
                to={`/account/orders/${o.order_number}`}
                className="group flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-[#EAE6DC] bg-white p-4 transition-colors hover:border-[#22C55E]/50 hover:bg-[#FCFDF9]"
              >
                <div className="min-w-[140px]">
                  <p className="font-mono text-sm font-black text-[#14532D]">{o.order_number}</p>
                  <p className="text-xs text-neutral-500">{date(o.created_at)}</p>
                </div>
                <p className="min-w-0 flex-1 truncate text-xs text-neutral-600">
                  {o.items.map((i) => `${i.quantity}× ${i.product_name}`).join(', ')}
                </p>
                <StatusPill status={o.order_status} />
                <span className="w-28 text-right font-display text-sm font-black text-[#14532D]">{money(o.total_amount)}</span>
                <ArrowRight className="h-4 w-4 text-[#166534] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </li>
          ))}
        </ul>
      )}

      {data && data.pagination.totalPages > 1 && (
        <div className="flex items-center justify-between pt-2 text-xs font-bold text-[#14532D]">
          <button type="button" disabled={page <= 1} onClick={() => setPage(page - 1)} className={`${ghostBtn} disabled:opacity-40`}>
            Previous
          </button>
          <span>
            Page {data.pagination.page} of {data.pagination.totalPages}
          </span>
          <button type="button" disabled={page >= data.pagination.totalPages} onClick={() => setPage(page + 1)} className={`${ghostBtn} disabled:opacity-40`}>
            Next
          </button>
        </div>
      )}
    </div>
  )
}

function ClaimForm({ phone: accountPhone, onDone }: { phone: string; onDone: () => void }) {
  const [orderNumber, setOrderNumber] = useState('')
  const [phone, setPhone] = useState(accountPhone)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      await api.account.claim(orderNumber.trim(), phone.trim())
      onDone()
    } catch (err) {
      setError(message(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 rounded-2xl border border-[#22C55E]/30 bg-[#F0FDF4] p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
      <Field label="Order number">
        <input className={inputClass} value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} placeholder="ENJ-…" required />
      </Field>
      <Field label="Phone used for that order">
        <input type="tel" className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </Field>
      <button type="submit" disabled={busy} className={primaryBtn}>
        {busy && <Loader2 className="h-4 w-4 animate-spin" />} Add order
      </button>
      {error && (
        <div className="sm:col-span-3">
          <Notice tone="error">{error}</Notice>
        </div>
      )}
    </form>
  )
}

function ProfileTab() {
  const { customer, setCustomer } = useAuthStore()
  const [form, setForm] = useState({ name: customer?.name || '', email: customer?.email || '', location: customer?.location || '' })
  const [busy, setBusy] = useState(false)
  const [note, setNote] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setNote(null)
    try {
      const r = await api.account.update(form)
      setCustomer(r.customer)
      setNote({ tone: 'ok', text: 'Saved. Checkout will use these details.' })
    } catch (err) {
      setNote({ tone: 'error', text: message(err) })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="max-w-lg space-y-4 rounded-3xl border border-[#EAE6DC] bg-white p-6 shadow-sm">
      <Field label="Full name / farm name">
        <input className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
      </Field>
      <Field label="Phone number" hint="Your phone links your orders. To change it, call 059 670 9226.">
        <input className={inputClass} value={customer?.phone || ''} disabled />
      </Field>
      <Field label="Email">
        <input type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </Field>
      <Field label="Delivery town">
        <div className="relative">
          <MapPin className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-neutral-400" />
          <input className={`${inputClass} pl-9`} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        </div>
      </Field>
      {note && <Notice tone={note.tone}>{note.text}</Notice>}
      <button type="submit" disabled={busy} className={primaryBtn}>
        {busy && <Loader2 className="h-4 w-4 animate-spin" />} Save changes
      </button>
    </form>
  )
}

function PasswordTab() {
  const { customer, setSession } = useAuthStore()
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [busy, setBusy] = useState(false)
  const [note, setNote] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setNote(null)
    try {
      const r = await api.account.changePassword(current, next)
      if (customer) setSession(r.token, customer) // other devices are signed out; this one keeps going
      setCurrent('')
      setNext('')
      setNote({ tone: 'ok', text: 'Password changed. Other devices have been signed out.' })
    } catch (err) {
      setNote({ tone: 'error', text: message(err) })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="max-w-lg space-y-4 rounded-3xl border border-[#EAE6DC] bg-white p-6 shadow-sm">
      <Field label="Current password">
        <input type="password" className={inputClass} value={current} onChange={(e) => setCurrent(e.target.value)} autoComplete="current-password" required />
      </Field>
      <Field label="New password" hint="At least 8 characters.">
        <input type="password" className={inputClass} value={next} onChange={(e) => setNext(e.target.value)} autoComplete="new-password" minLength={8} required />
      </Field>
      {note && <Notice tone={note.tone}>{note.text}</Notice>}
      <button type="submit" disabled={busy} className={primaryBtn}>
        {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />} Change password
      </button>
    </form>
  )
}

// ─── /account/orders/:number ───────────────────────────────────────────────────

export const AccountOrderPage: React.FC = () => {
  const { number = '' } = useParams()
  const { isLoggedIn } = useAuthStore()
  const [order, setOrder] = useState<PublicOrder | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isLoggedIn) return
    api.account.order(number).then((r) => setOrder(r.order), (e) => setError(message(e)))
  }, [number, isLoggedIn])

  return (
    <PageShell>
      <Link to="/account" className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#14532D]/70 hover:text-[#14532D]">
        <ArrowLeft className="h-3.5 w-3.5" /> My orders
      </Link>
      {!isLoggedIn ? (
        <Notice tone="error">
          <Link to="/account" className="font-bold underline">Sign in</Link> to see this order, or{' '}
          <Link to={`/track?order=${number}`} className="font-bold underline">track it with your phone number</Link>.
        </Notice>
      ) : error ? (
        <Notice tone="error">{error}</Notice>
      ) : order ? (
        <OrderView order={order} />
      ) : (
        <div className="h-72 animate-pulse rounded-3xl bg-[#F4F1EA]" />
      )}
    </PageShell>
  )
}

// ─── /account/reset?token= ─────────────────────────────────────────────────────

export const AccountResetPage: React.FC = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { setSession } = useAuthStore()
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const token = params.get('token') || ''

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      const r = await api.account.confirmReset(token, password)
      setSession(r.token, r.customer)
      navigate('/account', { replace: true })
    } catch (err) {
      setError(message(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <PageShell>
      <form onSubmit={submit} className="mx-auto max-w-md space-y-4 rounded-3xl border border-[#EAE6DC] bg-white p-8 shadow-sm">
        <h1 className="font-display text-2xl font-black text-[#14532D]">Choose a new password</h1>
        {!token ? (
          <Notice tone="error">
            This link is incomplete. <Link to="/account" className="font-bold underline">Ask for a new one</Link>.
          </Notice>
        ) : (
          <>
            <Field label="New password" hint="At least 8 characters.">
              <input type="password" className={inputClass} value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" minLength={8} required />
            </Field>
            {error && <Notice tone="error">{error}</Notice>}
            <button type="submit" disabled={busy} className={`${primaryBtn} w-full`}>
              {busy && <Loader2 className="h-4 w-4 animate-spin" />} Save and sign in
            </button>
          </>
        )}
      </form>
    </PageShell>
  )
}

// ─── /track — guests check an order with order number + phone ─────────────────

export const TrackOrderPage: React.FC = () => {
  const [params] = useSearchParams()
  const [orderNumber, setOrderNumber] = useState(params.get('order') || '')
  const [phone, setPhone] = useState('')
  const [order, setOrder] = useState<PublicOrder | null>(null)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    try {
      setOrder((await api.orders.track(orderNumber.trim(), phone.trim())).order)
    } catch (err) {
      setOrder(null)
      setError(message(err))
    } finally {
      setBusy(false)
    }
  }

  return (
    <PageShell>
      <div className="mb-8 space-y-2">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#166534]">Order tracking</p>
        <h1 className="font-display text-3xl font-black tracking-tight text-[#14532D] sm:text-4xl">Where's my order?</h1>
        <p className="text-sm text-neutral-500">
          Enter the order number from your receipt and the phone number you ordered with.{' '}
          <Link to="/account" className="font-bold text-[#166534] hover:underline">Have an account? Sign in</Link>.
        </p>
      </div>
      <form onSubmit={submit} className="mb-8 grid gap-3 rounded-3xl border border-[#EAE6DC] bg-white p-5 shadow-sm sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <Field label="Order number">
          <input className={inputClass} value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} placeholder="ENJ-…" required />
        </Field>
        <Field label="Phone number">
          <input type="tel" className={inputClass} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="024 000 0000" required />
        </Field>
        <button type="submit" disabled={busy} className={primaryBtn}>
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />} Track
        </button>
      </form>
      {error && <Notice tone="error">{error}</Notice>}
      {order && <OrderView order={order} />}
    </PageShell>
  )
}
