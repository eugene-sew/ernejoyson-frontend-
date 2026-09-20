import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ShoppingBag, 
  TrendingUp, 
  Package, 
  Users, 
  ArrowUpRight, 
  Clock, 
  CheckCircle2, 
  Truck, 
  AlertCircle,
  PhoneCall,
  MapPin,
  RefreshCw
} from 'lucide-react'
import { api, DashboardSummary } from '@/services/api'

export function AdminDashboardPage() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSummary = async () => {
    try {
      setLoading(true)
      setError(null)
      const res = await api.analytics.getSummary()
      setSummary(res.summary)
    } catch (err: any) {
      console.error('Failed to load dashboard summary:', err)
      setError(err.message || 'Could not connect to admin backend')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSummary()
  }, [])

  const formatGHS = (val: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(val).replace('GHS', 'GH₵')
  }

  if (loading && !summary) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <RefreshCw className="w-8 h-8 text-[#22C55E] animate-spin mb-4" />
        <p className="text-neutral-300 font-medium">Loading Operations Dashboard...</p>
        <p className="text-neutral-500 text-xs mt-1">Aggregating orders, inventory, and depot dispatch feeds</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-950/40 border border-red-800 rounded-2xl p-6 text-center max-w-lg mx-auto my-12">
        <AlertCircle className="w-10 h-10 text-red-400 mx-auto mb-3" />
        <h2 className="text-lg font-bold text-white mb-1">Backend Connection Error</h2>
        <p className="text-red-300 text-sm mb-4">{error}</p>
        <button
          onClick={fetchSummary}
          className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-semibold"
        >
          Retry Connection
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header with Title and Refresh */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Executive Dashboard</h1>
          <p className="text-neutral-400 text-xs md:text-sm mt-1">
            Real-time agrochemical commerce, order fulfillment, and regional waybills across Ghana.
          </p>
        </div>
        <button
          onClick={fetchSummary}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#183922] hover:bg-[#214c2e] border border-[#235331] text-xs font-semibold text-[#86efac] transition-all self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Revenue Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#112918] to-[#15341f] border border-[#1e4428] relative overflow-hidden shadow-lg shadow-black/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Total Revenue</span>
            <div className="w-9 h-9 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/30 flex items-center justify-center text-[#22C55E]">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-black text-white mt-3 tracking-tight">
            {formatGHS(summary?.totalRevenue || 0)}
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-[#86efac]">
            <span>Paid: {formatGHS(summary?.paidRevenue || 0)}</span>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#112918] to-[#15341f] border border-[#1e4428] relative overflow-hidden shadow-lg shadow-black/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">All Orders</span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-black text-white mt-3 tracking-tight">
            {summary?.totalOrders || 0}
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-neutral-400">
            <span className="text-amber-400 font-bold">{summary?.pendingOrders || 0} pending</span>
            <span>·</span>
            <span className="text-blue-400 font-bold">{summary?.dispatchedOrders || 0} dispatched</span>
          </div>
        </div>

        {/* Catalog Products */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#112918] to-[#15341f] border border-[#1e4428] relative overflow-hidden shadow-lg shadow-black/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Products in Catalog</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-black text-white mt-3 tracking-tight">
            {summary?.inventory.total || 0}
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-neutral-400">
            <span className="text-[#86efac] font-bold">{summary?.inventory.inStock || 0} in stock</span>
            <span>·</span>
            <span className="text-red-400 font-bold">{summary?.inventory.outOfStock || 0} out</span>
          </div>
        </div>

        {/* Customers / Farmers */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#112918] to-[#15341f] border border-[#1e4428] relative overflow-hidden shadow-lg shadow-black/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">Farmers & Clients</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-black text-white mt-3 tracking-tight">
            {summary?.totalCustomers || 0}
          </p>
          <div className="flex items-center gap-2 mt-2 text-[11px] text-neutral-400">
            <span>Direct commercial buyers</span>
          </div>
        </div>
      </div>

      {/* Status Highlights Banner if pending orders exist */}
      {(summary?.pendingOrders ?? 0) > 0 && (
        <div className="bg-amber-950/30 border border-amber-800/60 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-200">
                Action Required: {summary?.pendingOrders} Pending Order{summary?.pendingOrders === 1 ? '' : 's'}
              </p>
              <p className="text-xs text-amber-300/80">
                New incoming orders require customer phone call verification and dispatch confirmation.
              </p>
            </div>
          </div>
          <Link
            to="/admin/orders"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs shrink-0 flex items-center gap-1.5 transition-colors"
          >
            Review Orders
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Main Grid: Recent Orders + Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders (2 Cols) */}
        <div className="lg:col-span-2 bg-[#112918] border border-[#1e4428] rounded-2xl overflow-hidden flex flex-col">
          <div className="p-5 border-b border-[#1e4428] flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-white">Recent Orders</h2>
              <p className="text-xs text-neutral-400 mt-0.5">Real-time incoming requests from the online shop</p>
            </div>
            <Link
              to="/admin/orders"
              className="text-xs font-semibold text-[#86efac] hover:text-white flex items-center gap-1 transition-colors"
            >
              View All Orders
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#1e4428] bg-[#14321d] text-neutral-400 uppercase font-semibold text-[10px] tracking-wider">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Hub / City</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e4428]/60">
                {summary?.recentOrders && summary.recentOrders.length > 0 ? (
                  summary.recentOrders.map((order) => {
                    const statusConfig = {
                      PENDING: { bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30', label: 'Pending' },
                      CONFIRMED: { bg: 'bg-blue-500/10 text-blue-400 border-blue-500/30', label: 'Confirmed' },
                      DISPATCHED: { bg: 'bg-purple-500/10 text-purple-400 border-purple-500/30', label: 'Dispatched' },
                      DELIVERED: { bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', label: 'Delivered' },
                      CANCELLED: { bg: 'bg-red-500/10 text-red-400 border-red-500/30', label: 'Cancelled' },
                    }[order.order_status] || { bg: 'bg-neutral-800 text-neutral-400 border-neutral-700', label: order.order_status }

                    return (
                      <tr key={order.id} className="hover:bg-[#163720]/60 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-white">
                          {order.order_number}
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="font-semibold text-white truncate max-w-[140px]">{order.customer_name}</p>
                          <a
                            href={`tel:${order.customer_phone}`}
                            className="text-neutral-400 hover:text-[#86efac] flex items-center gap-1 text-[11px] mt-0.5"
                          >
                            <PhoneCall className="w-3 h-3" />
                            {order.customer_phone}
                          </a>
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1 text-neutral-300">
                            <MapPin className="w-3 h-3 text-[#86efac] shrink-0" />
                            <span className="truncate max-w-[130px]">{order.delivery_location}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-white">
                          {formatGHS(order.total_amount)}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${statusConfig.bg}`}>
                            {statusConfig.label}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <Link
                            to={`/admin/orders?search=${encodeURIComponent(order.order_number)}`}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg bg-[#183922] hover:bg-[#22C55E] hover:text-black text-neutral-200 text-xs font-semibold transition-colors"
                          >
                            Manage
                          </Link>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-neutral-400">
                      No orders recorded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar: Order Status Breakdown & Quick Links */}
        <div className="space-y-6">
          {/* Status Breakdown Box */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-white mb-4">Fulfillment Pipeline</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#15341f] border border-[#1e4428]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-neutral-300">Pending Verification</span>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                  {summary?.pendingOrders || 0}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#15341f] border border-[#1e4428]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-medium text-neutral-300">Confirmed / Packed</span>
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">
                  {summary?.ordersByStatus.find(s => s.order_status === 'CONFIRMED')?.count || 0}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#15341f] border border-[#1e4428]">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-medium text-neutral-300">In Transit (Waybill Issued)</span>
                </div>
                <span className="text-xs font-bold text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full">
                  {summary?.dispatchedOrders || 0}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#15341f] border border-[#1e4428]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-neutral-300">Delivered & Closed</span>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                  {summary?.deliveredOrders || 0}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Management Short-cuts */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-5">
            <h3 className="text-sm font-bold text-white mb-3">Quick Navigation</h3>
            <div className="grid grid-cols-1 gap-2.5">
              <Link
                to="/admin/orders"
                className="flex items-center justify-between p-3 rounded-xl bg-[#163620] hover:bg-[#1d4429] text-white text-xs font-medium transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#86efac]" />
                  <span>Orders & Waybills</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </Link>

              <Link
                to="/admin/products"
                className="flex items-center justify-between p-3 rounded-xl bg-[#163620] hover:bg-[#1d4429] text-white text-xs font-medium transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-[#86efac]" />
                  <span>Manage Products & Stock</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </Link>

              <Link
                to="/admin/customers"
                className="flex items-center justify-between p-3 rounded-xl bg-[#163620] hover:bg-[#1d4429] text-white text-xs font-medium transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#86efac]" />
                  <span>Customer Directory</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
