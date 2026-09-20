import { useState, useEffect } from 'react'
import { 
  Package, 
  Search, 
  Edit3, 
  X, 
  RefreshCw 
} from 'lucide-react'
import { api, BackendProduct } from '@/services/api'

export function AdminProductsPage() {
  const [products, setProducts] = useState<BackendProduct[]>([])
  const [loading, setLoading] = useState(true)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('ALL')
  const [stockFilter, setStockFilter] = useState<'ALL' | 'IN_STOCK' | 'OUT_OF_STOCK'>('ALL')
  
  // Toggling stock status
  const [togglingId, setTogglingId] = useState<string | null>(null)
  
  // Edit product modal
  const [editingProduct, setEditingProduct] = useState<BackendProduct | null>(null)
  const [editPrice, setEditPrice] = useState<string>('')
  const [editSpec, setEditSpec] = useState<string>('')
  const [savingEdit, setSavingEdit] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const data = await api.products.list({
        category: categoryFilter === 'ALL' ? undefined : categoryFilter,
        search: searchTerm ? searchTerm : undefined,
        inStock: stockFilter === 'ALL' ? undefined : stockFilter === 'IN_STOCK' ? 'true' : 'false',
      })
      setProducts(data.products || [])
    } catch (err: any) {
      console.error('Failed to load products:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [categoryFilter, stockFilter])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetchProducts()
  }

  const handleToggleStock = async (product: BackendProduct) => {
    try {
      setTogglingId(product.id)
      const newStock = !product.in_stock
      const res = await api.products.toggleStock(product.id, newStock)
      setProducts(prev => prev.map(p => p.id === product.id ? res.product : p))
    } catch (err: any) {
      alert(`Could not toggle stock: ${err.message}`)
    } finally {
      setTogglingId(null)
    }
  }

  const openEditModal = (product: BackendProduct) => {
    setEditingProduct(product)
    setEditPrice(product.price ? product.price.toString() : '0')
    setEditSpec(product.spec || '')
  }

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingProduct) return
    try {
      setSavingEdit(true)
      const numPrice = parseFloat(editPrice)
      if (isNaN(numPrice) || numPrice < 0) {
        alert('Please enter a valid price in GH₵')
        return
      }

      const res = await api.products.update(editingProduct.id, {
        price: numPrice,
        spec: editSpec,
      })

      setProducts(prev => prev.map(p => p.id === editingProduct.id ? res.product : p))
      setEditingProduct(null)
    } catch (err: any) {
      alert(`Could not update product: ${err.message}`)
    } finally {
      setSavingEdit(false)
    }
  }

  const formatGHS = (val: number | null) => {
    if (val === null || val === undefined) return 'Price on Request'
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
    }).format(val).replace('GHS', 'GH₵')
  }

  const categories = [
    'ALL',
    'Foliar Fertilizers',
    'Granular & Soil Conditioners',
    'Insecticides',
    'Fungicides',
    'Herbicides',
    'Plant Growth Regulators & Biostimulants',
    'Vegetable & Hybrid Seeds',
    'Sprayers & Application Equipment',
    'PPE & Protective Gear'
  ]

  const totalInStock = products.filter(p => p.in_stock).length
  const totalOutStock = products.length - totalInStock

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Title & Stats Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Product Catalog & Inventory</h1>
          <p className="text-neutral-400 text-xs md:text-sm mt-1">
            Manage live prices, package sizes, and instant depot stock availability across Ghana.
          </p>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <button
            onClick={() => setStockFilter(stockFilter === 'IN_STOCK' ? 'ALL' : 'IN_STOCK')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition-colors ${
              stockFilter === 'IN_STOCK' ? 'bg-[#22C55E]/20 border-[#22C55E]' : 'bg-[#14321d] border-[#1e4428]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="font-bold text-white">{totalInStock} In Stock</span>
          </button>
          <button
            onClick={() => setStockFilter(stockFilter === 'OUT_OF_STOCK' ? 'ALL' : 'OUT_OF_STOCK')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs transition-colors ${
              stockFilter === 'OUT_OF_STOCK' ? 'bg-red-500/20 border-red-500' : 'bg-[#14321d] border-[#1e4428]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="font-bold text-neutral-300">{totalOutStock} Out of Stock</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-4 space-y-4">
        {/* Search */}
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search product by title, active ingredient, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs transition-colors"
          >
            Search
          </button>
        </form>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold uppercase tracking-wider text-[10px] whitespace-nowrap transition-colors ${
                categoryFilter === cat
                  ? 'bg-[#22C55E] text-[#0d1f12]'
                  : 'bg-[#15341f] text-neutral-300 hover:text-white hover:bg-[#1c4328]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid / Table */}
      <div className="bg-[#112918] border border-[#1e4428] rounded-2xl overflow-hidden shadow-xl shadow-black/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1e4428] bg-[#14321d] text-neutral-400 uppercase font-semibold text-[10px] tracking-wider">
                <th className="py-3.5 px-4">Product</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Specification / Pack</th>
                <th className="py-3.5 px-4">Price (GH₵)</th>
                <th className="py-3.5 px-4 text-center">Stock Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e4428]/60">
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-[#163720]/70 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 h-10 rounded-lg object-contain bg-[#09160d] border border-[#1e4428] shrink-0 p-1"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none'
                            }}
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-[#14321d] flex items-center justify-center text-neutral-500 shrink-0">
                            <Package className="w-5 h-5" />
                          </div>
                        )}
                        <div>
                          <p className="font-bold text-white text-xs">{product.name}</p>
                          <p className="text-[10px] text-neutral-400 font-mono">ID: #{product.id}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-lg bg-[#183922] text-[#86efac] text-[10px] font-semibold border border-[#235331]">
                        {product.category}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-neutral-300 text-[11px] truncate max-w-[180px]">
                      {product.spec || 'Standard Unit'}
                    </td>

                    <td className="py-3.5 px-4 font-mono font-bold text-white text-sm">
                      {formatGHS(product.price)}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => handleToggleStock(product)}
                        disabled={togglingId === product.id}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                          product.in_stock
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                            : 'bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20'
                        }`}
                      >
                        {togglingId === product.id ? (
                          <RefreshCw className="w-3 h-3 animate-spin" />
                        ) : (
                          <span className={`w-2 h-2 rounded-full ${product.in_stock ? 'bg-emerald-400' : 'bg-red-400'}`} />
                        )}
                        {product.in_stock ? 'In Stock' : 'Out of Stock'}
                      </button>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => openEditModal(product)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#183922] hover:bg-[#204a2c] text-white text-xs font-semibold transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-[#86efac]" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-16 text-center text-neutral-400">
                    {loading ? (
                      <div className="flex flex-col items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-[#22C55E] animate-spin mb-2" />
                        <span>Loading product inventory...</span>
                      </div>
                    ) : (
                      <p>No products match the selected filters.</p>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0e2415] border border-[#1e4428] rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-base font-bold text-white">Edit Agrochemical Price & Pack</h2>
                <p className="text-xs text-neutral-400 mt-0.5">{editingProduct.name}</p>
              </div>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Retail Price (GH₵)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 font-bold text-xs">
                    GH₵
                  </span>
                  <input
                    type="number"
                    step="0.01"
                    value={editPrice}
                    onChange={(e) => setEditPrice(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-2.5 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs font-mono font-bold focus:outline-none focus:border-[#22C55E]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Packaging / Specification
                </label>
                <input
                  type="text"
                  value={editSpec}
                  onChange={(e) => setEditSpec(e.target.value)}
                  placeholder="e.g. 1 Litre Bottle / 25kg Bag"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 rounded-xl bg-[#14321d] text-neutral-300 hover:text-white text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingEdit}
                  className="px-5 py-2 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black text-xs font-bold transition-colors"
                >
                  {savingEdit ? 'Updating...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
