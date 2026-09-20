import { useState } from 'react'
import { 
  Building2, 
  ShieldCheck, 
  CreditCard, 
  Server, 
  CheckCircle2, 
  MapPin, 
  PhoneCall, 
  Save, 
  Truck
} from 'lucide-react'
import { useAdminAuthStore } from '@/store/useAdminAuthStore'

export function AdminSettingsPage() {
  const { admin } = useAdminAuthStore()
  const [saveSuccess, setSaveSuccess] = useState(false)
  
  const [dispatchPolicy, setDispatchPolicy] = useState('Same-day dispatch for orders confirmed before 2:00 PM GMT via Kumasi Depot.')
  const [carrierNotes, setCarrierNotes] = useState('Primary long-haul: VIP Freight & OA Express parcel services from Kumasi Central.')

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const hubs = [
    {
      name: 'Kumasi Central Depot & Regional HQ',
      region: 'Ashanti Region',
      city: 'Kumasi',
      address: 'Adum Central Agrochemical Market, Kumasi',
      phone: '+233 24 400 0000',
      status: 'Primary Hub (Full Stock)',
    },
    {
      name: 'Sunyani Distribution Station',
      region: 'Bono Region',
      city: 'Sunyani',
      address: 'Near Nana Bosoma Market, Sunyani',
      phone: '+233 24 400 0001',
      status: 'Active Branch',
    },
    {
      name: 'Techiman Transit Depot',
      region: 'Bono East Region',
      city: 'Techiman',
      address: 'Techiman Main Commercial Corridor',
      phone: '+233 24 400 0002',
      status: 'Active Branch',
    },
    {
      name: 'Goaso Cocoa Input Station',
      region: 'Ahafo Region',
      city: 'Goaso',
      address: 'Goaso Central Cocoa Belt Station',
      phone: '+233 24 400 0003',
      status: 'Active Branch',
    },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">System & Hub Configuration</h1>
        <p className="text-neutral-400 text-xs md:text-sm mt-1">
          Operational hubs, payment routing, and warehouse dispatch parameters for ERNEJOYSON Company Limited.
        </p>
      </div>

      {/* Grid: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Operations & Logistics Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Logistics & Dispatch Policy */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#183922] border border-[#235331] flex items-center justify-center text-[#86efac]">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Logistics & Waybill Parameters</h2>
                <p className="text-xs text-neutral-400">Default instructions printed on commercial cargo manifests</p>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="font-semibold text-neutral-300 block mb-1">
                  National Dispatch Cut-Off Policy:
                </label>
                <textarea
                  rows={2}
                  value={dispatchPolicy}
                  onChange={(e) => setDispatchPolicy(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
                />
              </div>

              <div>
                <label className="font-semibold text-neutral-300 block mb-1">
                  Preferred Commercial Freight Carriers:
                </label>
                <textarea
                  rows={2}
                  value={carrierNotes}
                  onChange={(e) => setCarrierNotes(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#09160d] border border-[#1e4428] text-white text-xs focus:outline-none focus:border-[#22C55E]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                {saveSuccess ? (
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#86efac] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                    Configuration updated successfully!
                  </span>
                ) : (
                  <span />
                )}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#1ea34d] text-black font-bold text-xs transition-colors"
                >
                  <Save className="w-4 h-4" />
                  Save Parameters
                </button>
              </div>
            </form>
          </div>

          {/* Regional Depots List */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#183922] border border-[#235331] flex items-center justify-center text-[#86efac]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Active Regional Depots</h2>
                <p className="text-xs text-neutral-400">Physical stock centers supporting customer pickups & waybill dispatches</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hubs.map((hub, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#14321d] border border-[#1e4428] space-y-2">
                  <div className="flex items-start justify-between">
                    <p className="font-bold text-white text-xs">{hub.name}</p>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#183922] text-[#86efac] border border-[#235331]">
                      {hub.status}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-[11px] flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#22C55E] shrink-0" />
                    {hub.address}
                  </p>
                  <p className="text-neutral-400 text-[11px] flex items-center gap-1.5">
                    <PhoneCall className="w-3 h-3 text-[#86efac] shrink-0" />
                    {hub.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Server Status & Admin Credential info */}
        <div className="space-y-6">
          {/* Server & DB Status */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-5 space-y-4">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-[#86efac]" />
              <h3 className="text-sm font-bold text-white">Backend Health</h3>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#14321d] border border-[#1e4428]">
                <span className="text-neutral-400">Engine:</span>
                <span className="font-mono text-white font-semibold">Node.js Express + TS</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#14321d] border border-[#1e4428]">
                <span className="text-neutral-400">Database:</span>
                <span className="font-mono text-[#86efac] font-semibold">SQLite WAL Mode</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#14321d] border border-[#1e4428]">
                <span className="text-neutral-400">API Gateway:</span>
                <span className="font-mono text-white font-semibold">Port 5001 (Live)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#14321d] border border-[#1e4428]">
                <span className="text-neutral-400">Status:</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Operational
                </span>
              </div>
            </div>
          </div>

          {/* Payment Gateways */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#86efac]" />
              <h3 className="text-sm font-bold text-white">Payment Integrations</h3>
            </div>

            <div className="p-3 rounded-xl bg-[#14321d] border border-[#1e4428] space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Paystack GH Gateway</span>
                <span className="text-[10px] font-bold bg-[#22C55E]/20 text-[#86efac] px-2 py-0.5 rounded">
                  Connected
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Accepts MTN MoMo, Telecel Cash, AT Money, and Visa/Mastercard.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#14321d] border border-[#1e4428] space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Direct Bank / Transit</span>
                <span className="text-[10px] font-bold bg-[#22C55E]/20 text-[#86efac] px-2 py-0.5 rounded">
                  Active
                </span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Commercial cocoa cooperative invoices and B2B bank transfers.
              </p>
            </div>
          </div>

          {/* Active Admin Session */}
          <div className="bg-[#112918] border border-[#1e4428] rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#86efac]" />
              <h3 className="text-sm font-bold text-white">Admin Session</h3>
            </div>
            <div className="text-xs space-y-1.5">
              <p className="text-neutral-400">Logged in as:</p>
              <p className="font-bold text-white">{admin?.name || 'Administrator'}</p>
              <p className="text-neutral-400 font-mono">{admin?.email || 'admin@ernejoyson.com'}</p>
              <p className="text-[11px] text-[#86efac] font-semibold mt-2">Role: Superadmin Privileges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
