import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { 
  Search, 
  PhoneCall, 
  MapPin, 
  Truck, 
  X, 
  Printer, 
  Send, 
  ChevronRight,
  RefreshCw
} from 'lucide-react'
import { api, BackendOrder, BackendOrderItem } from '@/services/api'

export function AdminOrdersPage() {
  const [searchParams] = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  
  const [orders, setOrders] = useState<BackendOrder[]>([])
  const [loading, setLoading] = useState(true)
  
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const [statusFilter, setStatusFilter] = useState<string>('ALL')
  
  // Order details modal
  const [selectedOrder, setSelectedOrder] = useState<BackendOrder | null>(null)
  const [actionLoading, setActionLoading] = useState(false)
  
  // Waybill dispatch form in modal
  const [waybillInput, setWaybillInput] = useState('')
  const [courierInput, setCourierInput] = useState('')
  const [showWaybillForm, setShowWaybillForm] = useState(false)

  const fetchOrders = async () => {
    try {
      setLoading(true)
      const data = await api.orders.list({
        status: statusFilter === 'ALL' ? undefined : statusFilter,
        search: searchTerm ? searchTerm : undefined,
      })
      setOrders(data.orders || [])

      // If initialSearch matches an order, auto open its drawer
      if (initialSearch && data.orders?.length > 0) {
        const matched = data.orders.find((o: BackendOrder) => 
          o.order_number.toLowerCase() === initialSearch.toLowerCase() ||
          o.customer_phone.includes(initialSearch)
        )
        if (matched) setSelectedOrder(matched)
      }
    } catch (err: any) {
      console.error('Failed to fetch orders:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [statusFilter])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchOrders()
  }

  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    try {
      setActionLoading(true)
      const res = await api.orders.updateStatus(orderId, { orderStatus: newStatus })
      setOrders(prev => prev.map(o => o.id === orderId ? res.order : o))
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(res.order)
      }
    } catch (err: any) {
      alert(`Error updating status: ${err.message}`)
    } finally {
      setActionLoading(false)
    }
  }

  const handleDispatchWaybill = async (orderId: string) => {
    if (!waybillInput.trim()) {
      alert('Please enter a waybill or consignment number')
      return
    }
    try {
      setActionLoading(true)
      const res = await api.orders.updateWaybill(orderId, {
        waybillNumber: waybillInput.trim(),
        waybillCourier: courierInput.trim() || undefined,
      })
      setOrders(prev => prev.map(o => o.id === orderId ? res.order : o))
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(res.order)
      }
      setShowWaybillForm(false)
      setWaybillInput('')
      setCourierInput('')
    } catch (err: any) {
      alert(`Error dispatching waybill: ${err.message}`)
    } finally {
      setActionLoading(false)
    }
  }

  const formatGHS = (val: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(val).replace('GHS', 'GH₵')
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'PENDING':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase">Pending</span>
      case 'CONFIRMED':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/30 uppercase">Confirmed</span>
      case 'DISPATCHED':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase">Dispatched</span>
      case 'DELIVERED':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase">Delivered</span>
      case 'CANCELLED':
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/30 uppercase">Cancelled</span>
      default:
        return <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">{status}</span>
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Order Fulfillment & Waybills</h1>
          <p className="text-neutral-400 text-xs md:text-sm mt-1">
            Review incoming orders, verify customer delivery details, assign regional waybills, and update status.
          </p>
        </div>
        <button
          onClick={fetchOrders}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#183922] hover:bg-[#214c2e] border border-[#235331] text-xs font-semibold text-[#86efac] self-start sm:self-auto transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh List</span>
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-4 space-y-4">
        {/* Status Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          {['ALL', 'PENDING', 'CONFIRMED', 'DISPATCHED', 'DELIVERED', 'CANCELLED'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`px-3.5 py-2 rounded-xl font-bold uppercase tracking-wider text-[11px] whitespace-nowrap transition-colors ${
                statusFilter === tab
                  ? 'bg-[#22C55E] text-[#0d1f12]'
                  : 'bg-[#15341f] text-neutral-300 hover:text-white hover:bg-[#1c4328]'
              }`}
            >
              {tab === 'ALL' ? 'All Orders' : tab}
            </button>
          ))}
        </div>

        {/* Search & Inputs */}
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Order # (e.g. EJ-2026-), customer name, phone, or town..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs transition-colors"
          >
            Search
          </button>
          {searchTerm && (
            <button
              type="button"
              onClick={() => { setSearchTerm(''); fetchOrders() }}
              className="px-3 py-2.5 rounded-xl bg-[#15341f] hover:bg-[#1c4328] text-neutral-300 text-xs transition-colors"
            >
              Clear
            </button>
          )}
        </form>
      </div>

      {/* Orders Table */}
      <div className="bg-[#112918] border border-[#1e4428] rounded-2xl overflow-hidden shadow-xl shadow-black/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1e4428] bg-[#14321d] text-neutral-400 uppercase font-semibold text-[10px] tracking-wider">
                <th className="py-3.5 px-4">Order ID & Date</th>
                <th className="py-3.5 px-4">Customer Contact</th>
                <th className="py-3.5 px-4">Delivery Depot / Town</th>
                <th className="py-3.5 px-4">Items</th>
                <th className="py-3.5 px-4">Total Amount</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Waybill</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e4428]/60">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#163720]/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <p className="font-mono font-bold text-white text-sm">{order.order_number}</p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {new Date(order.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </td>

                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-white truncate max-w-[150px]">{order.customer_name}</p>
                      <a
                        href={`tel:${order.customer_phone}`}
                        className="text-neutral-400 hover:text-[#86efac] flex items-center gap-1 text-[11px] mt-0.5"
                      >
                        <PhoneCall className="w-3 h-3" />
                        {order.customer_phone}
                      </a>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 text-neutral-200">
                        <MapPin className="w-3.5 h-3.5 text-[#86efac] shrink-0" />
                        <span className="font-medium truncate max-w-[160px]">{order.delivery_location}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="bg-[#183922] text-neutral-200 px-2.5 py-1 rounded-lg font-mono font-semibold">
                        {order.items?.length || 1} item{order.items?.length === 1 ? '' : 's'}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-bold text-white text-sm">
                      {formatGHS(order.total_amount)}
                    </td>

                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-neutral-200 uppercase text-[10px] tracking-wide">
                        {order.payment_method.replace('_', ' ')}
                      </p>
                      <span className={`text-[10px] font-bold ${order.payment_status === 'PAID' ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {order.payment_status}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      {getStatusBadge(order.order_status)}
                    </td>

                    <td className="py-3.5 px-4 font-mono text-[11px]">
                      {order.waybill_number ? (
                        <span className="text-[#86efac] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2 py-0.5 rounded font-bold">
                          {order.waybill_number}
                        </span>
                      ) : (
                        <span className="text-neutral-500 italic">Not Assigned</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => {
                          setSelectedOrder(order)
                          setShowWaybillForm(false)
                        }}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs transition-colors"
                      >
                        Details
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9} className="py-16 text-center text-neutral-400">
                    {loading ? (
                      <div className="flex flex-col items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-[#22C55E] animate-spin mb-2" />
                        <span>Searching database...</span>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-semibold text-white">No orders found</p>
                        <p className="text-xs text-neutral-500 mt-1">Try clearing your search or status filter</p>
                      </div>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details & Waybill Slide-over / Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-150">
          <div className="w-full max-w-2xl bg-[#0e2415] border-l border-[#1e4428] h-full flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Modal Top Header */}
            <div className="p-5 border-b border-[#1e4428] bg-[#112918] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-lg font-black text-white font-mono">{selectedOrder.order_number}</h2>
                  {getStatusBadge(selectedOrder.order_status)}
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Placed on {new Date(selectedOrder.created_at).toLocaleString('en-GB')}
                </p>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-2 rounded-xl bg-[#163520] hover:bg-[#204a2c] text-neutral-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Printable Receipt + Fulfillment Controls */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
              {/* Customer & Delivery Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#14321d] border border-[#1e4428] rounded-xl p-4">
                  <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-2">Customer Profile</p>
                  <p className="text-sm font-bold text-white">{selectedOrder.customer_name}</p>
                  <a
                    href={`tel:${selectedOrder.customer_phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#86efac] hover:underline font-semibold mt-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    {selectedOrder.customer_phone}
                  </a>
                  {selectedOrder.customer_email && (
                    <p className="text-neutral-400 mt-1">{selectedOrder.customer_email}</p>
                  )}
                </div>

                <div className="bg-[#14321d] border border-[#1e4428] rounded-xl p-4">
                  <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider mb-2">Delivery Destination</p>
                  <p className="text-sm font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#22C55E]" />
                    {selectedOrder.delivery_location}
                  </p>
                  {selectedOrder.notes && (
                    <p className="text-[11px] text-amber-300/90 italic mt-2 bg-amber-950/30 p-2 rounded border border-amber-900/50">
                      Note: {selectedOrder.notes}
                    </p>
                  )}
                </div>
              </div>

              {/* Order Items Table */}
              <div className="bg-[#14321d] border border-[#1e4428] rounded-xl overflow-hidden">
                <div className="p-3 border-b border-[#1e4428] bg-[#112918] font-bold text-white flex items-center justify-between">
                  <span>Ordered Agrochemical Items</span>
                  <span className="text-neutral-400 text-[11px]">{selectedOrder.items?.length || 0} Products</span>
                </div>
                <div className="divide-y divide-[#1e4428]/60">
                  {selectedOrder.items?.map((item: BackendOrderItem) => (
                    <div key={item.id} className="p-3 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-bold text-white text-xs">{item.product_name}</p>
                        <p className="text-[11px] text-neutral-400">
                          Qty: {item.quantity} × {formatGHS(item.unit_price)}
                        </p>
                      </div>
                      <p className="font-mono font-bold text-[#86efac] text-xs">
                        {formatGHS(item.total_price)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-[#112918] border-t border-[#1e4428] flex items-center justify-between">
                  <span className="font-bold text-neutral-300">Total Order Value</span>
                  <span className="font-mono font-black text-white text-sm">
                    {formatGHS(selectedOrder.total_amount)}
                  </span>
                </div>
              </div>

              {/* Waybill Tracking & Logistics Box */}
              <div className="bg-[#14321d] border border-[#1e4428] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#86efac]" />
                    <span className="font-bold text-white text-xs">Logistics & Regional Consignment</span>
                  </div>
                  {selectedOrder.waybill_number && (
                    <span className="font-mono font-bold text-[#86efac] bg-[#22C55E]/10 border border-[#22C55E]/30 px-2.5 py-0.5 rounded text-xs">
                      {selectedOrder.waybill_number}
                    </span>
                  )}
                </div>

                {showWaybillForm ? (
                  <div className="space-y-3 pt-2 border-t border-[#1e4428]">
                    <div>
                      <label className="text-[11px] text-neutral-300 font-semibold block mb-1">
                        Waybill / Consignment Number:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. WB-KMS-2026-09"
                        value={waybillInput}
                        onChange={(e) => setWaybillInput(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-neutral-300 font-semibold block mb-1">
                        Transport / Courier Details (Optional):
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. VIP Freight Kumasi / Driver Kofi (0244...)"
                        value={courierInput}
                        onChange={(e) => setCourierInput(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                    <div className="flex gap-2 pt-1">
                      <button
                        onClick={() => handleDispatchWaybill(selectedOrder.id)}
                        disabled={actionLoading}
                        className="px-4 py-2 bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs rounded-xl transition-colors"
                      >
                        {actionLoading ? 'Saving...' : 'Confirm Dispatch'}
                      </button>
                      <button
                        onClick={() => setShowWaybillForm(false)}
                        className="px-3 py-2 bg-[#183922] text-neutral-300 text-xs rounded-xl"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setWaybillInput(selectedOrder.waybill_number || '')
                      setCourierInput(selectedOrder.waybill_courier || '')
                      setShowWaybillForm(true)
                    }}
                    className="w-full py-2.5 rounded-xl bg-[#163520] hover:bg-[#1f492c] border border-[#235331] text-[#86efac] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {selectedOrder.waybill_number ? 'Update Waybill Number' : 'Issue Waybill & Mark Dispatched'}
                  </button>
                )}
              </div>

              {/* Status Update Quick Buttons */}
              <div className="space-y-2">
                <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Workflow Status</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'PENDING')}
                    disabled={actionLoading || selectedOrder.order_status === 'PENDING'}
                    className={`p-2 rounded-xl font-bold text-xs border transition-all ${
                      selectedOrder.order_status === 'PENDING'
                        ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                        : 'bg-[#14321d] border-[#1e4428] text-neutral-300 hover:text-white'
                    }`}
                  >
                    Pending
                  </button>

                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'CONFIRMED')}
                    disabled={actionLoading || selectedOrder.order_status === 'CONFIRMED'}
                    className={`p-2 rounded-xl font-bold text-xs border transition-all ${
                      selectedOrder.order_status === 'CONFIRMED'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-[#14321d] border-[#1e4428] text-neutral-300 hover:text-white'
                    }`}
                  >
                    Confirm
                  </button>

                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'DISPATCHED')}
                    disabled={actionLoading || selectedOrder.order_status === 'DISPATCHED'}
                    className={`p-2 rounded-xl font-bold text-xs border transition-all ${
                      selectedOrder.order_status === 'DISPATCHED'
                        ? 'bg-purple-500/20 border-purple-500 text-purple-300'
                        : 'bg-[#14321d] border-[#1e4428] text-neutral-300 hover:text-white'
                    }`}
                  >
                    Dispatched
                  </button>

                  <button
                    onClick={() => handleUpdateStatus(selectedOrder.id, 'DELIVERED')}
                    disabled={actionLoading || selectedOrder.order_status === 'DELIVERED'}
                    className={`p-2 rounded-xl font-bold text-xs border transition-all ${
                      selectedOrder.order_status === 'DELIVERED'
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                        : 'bg-[#14321d] border-[#1e4428] text-neutral-300 hover:text-white'
                    }`}
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 border-t border-[#1e4428] bg-[#112918] flex items-center justify-between gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#163520] hover:bg-[#1d4429] text-white font-bold text-xs transition-colors"
              >
                <Printer className="w-4 h-4 text-[#86efac]" />
                Print Cargo Waybill
              </button>

              <button
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
