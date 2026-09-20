import React, { useRef, useState } from 'react'
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
  type MapRef,
} from '@/components/ui/map'
import {
  MapPin,
  PhoneCall,
  Navigation,
  Building2,
  ExternalLink,
  ChevronRight,
  Maximize2,
} from 'lucide-react'

export interface BranchPin {
  id: string
  name: string
  shortName: string
  role: string
  manager: string
  managerPhoto?: string
  managerRole?: string
  phone: string
  lng: number
  lat: number
  isHq?: boolean
  address?: string
}

interface GhanaMapProps {
  branches: BranchPin[]
  activeBranchId: string
  onSelectBranch: (id: string) => void
}

export const GhanaMap: React.FC<GhanaMapProps> = ({
  branches,
  activeBranchId,
  onSelectBranch,
}) => {
  const mapRef = useRef<MapRef | null>(null)
  const [popupBranchId, setPopupBranchId] = useState<string | null>(activeBranchId)

  // Default Ghana center view covering all 4 branches
  const GHANA_CENTER: [number, number] = [-0.95, 6.2]
  const GHANA_ZOOM = 7.1

  const handleFlyTo = (branch: BranchPin) => {
    onSelectBranch(branch.id)
    setPopupBranchId(branch.id)
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [branch.lng, branch.lat],
        zoom: 10.5,
        duration: 1000,
        essential: true,
      })
    }
  }

  const handleResetView = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: GHANA_CENTER,
        zoom: GHANA_ZOOM,
        duration: 900,
        essential: true,
      })
    }
  }

  return (
    <div className="flex flex-col w-full rounded-3xl bg-white border border-[#EAE6DC] p-3 sm:p-5 shadow-xs overflow-hidden">
      {/* Top Map Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#EAE6DC]">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#166534] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#166534]" />
          </span>
          <div>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#14532D]">
              Interactive Ghana Hub Map
            </h3>
            <span className="text-[11px] text-[#14532D]/70 font-medium">
              Click any pin or button to view branch manager hotline &amp; details
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleResetView}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-[#14532D] bg-[#FAF9F5] border border-[#EAE6DC] hover:bg-[#F4F1EA] transition-colors cursor-pointer"
        >
          <Maximize2 className="h-3 w-3 text-[#166534]" />
          <span>Reset View</span>
        </button>
      </div>

      {/* Quick Jump Buttons for Farmers */}
      <div className="flex items-center gap-2 overflow-x-auto py-2.5 no-scrollbar">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#14532D]/60 shrink-0">
          Jump to:
        </span>
        {branches.map((b) => {
          const isActive = activeBranchId === b.id
          return (
            <button
              key={b.id}
              type="button"
              onClick={() => handleFlyTo(b)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#166534] text-white shadow-xs scale-[1.02]'
                  : 'bg-[#FAF9F5] text-[#14532D] hover:bg-[#F4F1EA] border border-[#EAE6DC]'
              }`}
            >
              <MapPin className={`h-3 w-3 ${isActive ? 'text-amber-300' : 'text-[#166534]'}`} />
              <span>{b.shortName}</span>
              {b.isHq && (
                <span className="text-[9px] bg-amber-400/30 text-amber-900 px-1 rounded font-black">
                  HQ
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Map Canvas Container */}
      <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden border border-[#EAE6DC] bg-[#FAF9F5]">
        <Map
          ref={mapRef}
          theme="light"
          center={GHANA_CENTER}
          zoom={GHANA_ZOOM}
          minZoom={5.5}
          maxZoom={16}
          className="w-full h-full"
        >
          <MapControls position="bottom-right" showZoom showCompass showLocate />

          {/* Branch Markers */}
          {branches.map((branch) => {
            const isActive = activeBranchId === branch.id
            const isPopupOpen = popupBranchId === branch.id

            return (
              <MapMarker
                key={branch.id}
                longitude={branch.lng}
                latitude={branch.lat}
                onClick={() => {
                  onSelectBranch(branch.id)
                  setPopupBranchId(branch.id)
                }}
              >
                {/* Marker Pin */}
                <MarkerContent>
                  <div
                    className={`relative flex flex-col items-center group cursor-pointer transition-transform ${
                      isActive ? 'scale-110 z-30' : 'hover:scale-105 z-20'
                    }`}
                  >
                    {/* Pulsing ring for HQ */}
                    {branch.isHq && (
                      <span className="absolute -inset-1.5 rounded-full bg-[#166534]/30 animate-ping pointer-events-none" />
                    )}

                    {/* Pin Bubble */}
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full shadow-lg border-2 transition-colors ${
                        branch.isHq
                          ? 'bg-[#14532D] text-white border-amber-400'
                          : isActive
                          ? 'bg-[#166534] text-white border-white'
                          : 'bg-white text-[#14532D] border-[#166534]'
                      }`}
                    >
                      {branch.isHq ? (
                        <Building2 className="h-3.5 w-3.5 text-amber-300 shrink-0" />
                      ) : (
                        <MapPin className={`h-3.5 w-3.5 shrink-0 ${isActive ? 'text-amber-300' : 'text-[#166534]'}`} />
                      )}
                      <span className="text-xs font-black whitespace-nowrap">
                        {branch.shortName}
                      </span>
                    </div>

                    {/* Pin Tip Triangle */}
                    <div
                      className={`w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] -mt-[1px] ${
                        branch.isHq
                          ? 'border-t-amber-400'
                          : isActive
                          ? 'border-t-[#166534]'
                          : 'border-t-[#166534]'
                      }`}
                    />
                  </div>
                </MarkerContent>

                {/* Marker Popup */}
                {isPopupOpen && (
                  <MarkerPopup
                    closeButton
                    className="p-3 w-64 sm:w-72 rounded-2xl shadow-2xl border border-[#EAE6DC] bg-white text-neutral-900 space-y-2.5"
                    offset={[0, -18]}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 border-b border-[#EAE6DC] pb-2">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#166534] bg-[#DCFCE7] px-2 py-0.5 rounded-full inline-block">
                          {branch.role}
                        </span>
                        <h4 className="text-sm font-black text-[#14532D] mt-1 leading-snug">
                          {branch.name}
                        </h4>
                      </div>
                    </div>

                    {/* Manager Details */}
                    <div className="flex items-center gap-2.5 bg-[#FAF9F5] p-2 rounded-xl border border-[#EAE6DC]">
                      {branch.managerPhoto && (
                        <img
                          src={branch.managerPhoto}
                          alt={branch.manager}
                          className="h-11 w-11 rounded-lg object-cover border border-white shadow-xs shrink-0"
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <span className="text-[9px] uppercase font-bold text-neutral-500 block">
                          Contact Person:
                        </span>
                        <p className="text-xs font-black text-[#14532D] truncate">
                          {branch.manager}
                        </p>
                        <p className="text-[10px] text-neutral-600 truncate">
                          {branch.managerRole || 'Branch Manager'}
                        </p>
                      </div>
                    </div>

                    {/* Direct Call Button */}
                    <a
                      href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] text-white py-2 px-3 text-xs font-black hover:bg-[#14532D] shadow-sm transition-transform active:scale-95 cursor-pointer"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                      <span>Call {branch.phone}</span>
                    </a>

                    {/* Scroll to full details link */}
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(branch.id)
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                      }}
                      className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-bold text-[#166534] hover:text-[#14532D] pt-0.5 cursor-pointer"
                    >
                      <span>View full branch inventory &amp; team</span>
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  </MarkerPopup>
                )}
              </MapMarker>
            )
          })}
        </Map>
      </div>

      {/* Delivery Coverage Footer */}
      <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-3 rounded-2xl bg-[#FAF9F5] border border-[#EAE6DC] text-xs">
        <div className="flex items-center gap-2 text-[#14532D]">
          <Navigation className="h-4 w-4 text-[#166534] shrink-0" />
          <span className="font-semibold">
            Not near these 4 branches? Daily nationwide express waybills to all 16 regions of Ghana.
          </span>
        </div>
        <a
          href="tel:0596709226"
          className="inline-flex items-center gap-1.5 font-black text-[#166534] hover:text-[#14532D] text-xs cursor-pointer shrink-0"
        >
          <span>Waybill Hotline: 059 670 9226</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}
