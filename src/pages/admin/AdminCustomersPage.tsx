import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  PhoneCall, 
  MapPin, 
  Mail, 
  ShoppingBag, 
  RefreshCw
} from 'lucide-react'
import { api, BackendCustomer } from '@/services/api'

export function AdminCustomersPage() {
  const [customers, setCustomers] = useState<BackendCustomer[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchCustomers = async () => {
    try {
      setLoading(true)
      const data = await api.customers.list({ search: searchTerm || undefined })
      setCustomers(data.customers || [])
    } catch (err: any) {
      console.error('Failed to load customers:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCustomers()
  }, [])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchCustomers()
  }

  const formatGHS = (val: number) => {
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(val).replace('GHS', 'GH₵')
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Farmer & Client Directory</h1>
          <p className="text-neutral-400 text-xs md:text-sm mt-1">
            Registered farm managers, plantation procurement officers, and direct commercial agrochemical buyers.
          </p>
        </div>
        <button
          onClick={fetchCustomers}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#183922] hover:bg-[#214c2e] border border-[#235331] text-xs font-semibold text-[#86efac] self-start sm:self-auto transition-colors"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh Directory</span>
        </button>
      </div>

      {/* Search Filter */}
      <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-4">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by customer name, mobile phone number, or town..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs transition-colors"
          >
            Search Directory
          </button>
        </form>
      </div>

      {/* Customer Directory Table */}
      <div className="bg-[#112918] border border-[#1e4428] rounded-2xl overflow-hidden shadow-xl shadow-black/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1e4428] bg-[#14321d] text-neutral-400 uppercase font-semibold text-[10px] tracking-wider">
                <th className="py-3.5 px-4">Customer Details</th>
                <th className="py-3.5 px-4">Contact Phone</th>
                <th className="py-3.5 px-4">Primary Depot / City</th>
                <th className="py-3.5 px-4 text-center">Orders Placed</th>
                <th className="py-3.5 px-4">Lifetime Spend</th>
                <th className="py-3.5 px-4">Last Activity</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e4428]/60">
              {customers.length > 0 ? (
                customers.map((c) => (
                  <tr key={c.id} className="hover:bg-[#163720]/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#183922] border border-[#235331] flex items-center justify-center font-bold text-xs text-[#86efac] shrink-0">
                          {c.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-white text-xs">{c.name}</p>
                          {c.email ? (
                            <p className="text-[11px] text-neutral-400 flex items-center gap-1 mt-0.5">
                              <Mail className="w-3 h-3" />
                              {c.email}
                            </p>
                          ) : (
                            <p className="text-[10px] text-neutral-500 italic">No email registered</p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <a
                        href={`tel:${c.phone}`}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#14321d] hover:bg-[#1c4528] text-[#86efac] font-mono font-semibold transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        {c.phone}
                      </a>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1 text-neutral-200">
                        <MapPin className="w-3.5 h-3.5 text-[#86efac] shrink-0" />
                        <span className="font-medium">{c.location || 'Ghana'}</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center justify-center min-w-[28px] px-2 py-0.5 rounded-full bg-[#183922] border border-[#235331] font-mono font-bold text-white text-xs">
                        {c.orders_count}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 font-mono font-bold text-[#86efac] text-sm">
                      {formatGHS(c.total_spent || 0)}
                    </td>

                    <td className="py-3.5 px-4 text-neutral-400 text-[11px]">
                      {c.last_order_at ? (
                        new Date(c.last_order_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })
                      ) : (
                        '—'
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <Link
                        to={`/admin/orders?search=${encodeURIComponent(c.phone)}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#183922] hover:bg-[#22C55E] hover:text-black text-white font-bold text-xs transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        Orders
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-neutral-400">
                    {loading ? (
                      <div className="flex flex-col items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-[#22C55E] animate-spin mb-2" />
                        <span>Querying customer registry...</span>
                      </div>
                    ) : (
                      <p>No customers found matching the search criteria.</p>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
