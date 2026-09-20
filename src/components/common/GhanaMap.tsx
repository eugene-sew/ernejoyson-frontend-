import React from 'react'
import { Navigation } from 'lucide-react'

export interface BranchPin {
  id: string
  name: string
  shortName: string
  role: string
  manager: string
  phone: string
  x: number
  y: number
  isHq?: boolean
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
  // Reference key transit destinations across Ghana
  const waybillHubs = [
    { name: 'Tamale', x: 215, y: 195, region: 'Northern' },
    { name: 'Sunyani', x: 130, y: 320, region: 'Bono' },
    { name: 'Techiman', x: 175, y: 295, region: 'Bono East' },
    { name: 'Bolgatanga', x: 250, y: 85, region: 'Upper East' },
    { name: 'Wa', x: 105, y: 130, region: 'Upper West' },
    { name: 'Takoradi', x: 135, y: 495, region: 'Western' },
    { name: 'Ho', x: 300, y: 395, region: 'Volta' },
    { name: 'Cape Coast', x: 180, y: 490, region: 'Central' },
  ]

  return (
    <div className="relative w-full rounded-3xl bg-white border border-[#EAE6DC] p-4 sm:p-6 shadow-xs overflow-hidden select-none">
      {/* Top Map Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DC]/60 mb-2">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#166534] animate-ping" />
          <span className="text-xs font-black uppercase tracking-wider text-[#14532D]">
            Interactive Branch &amp; Delivery Map
          </span>
        </div>
        <span className="text-[11px] font-bold text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <Navigation className="h-3 w-3" />
          <span>Click any pin to view details</span>
        </span>
      </div>

      {/* SVG Map Container */}
      <div className="relative flex items-center justify-center py-2">
        <svg
          viewBox="0 0 440 560"
          className="w-full max-w-[420px] h-auto drop-shadow-sm transition-all"
        >
          {/* Subtle Grid Pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FAF9F5" strokeWidth="0.8" />
            </pattern>
            <linearGradient id="ghanaFill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F4F8F4" />
              <stop offset="100%" stopColor="#EBF5ED" />
            </linearGradient>
            <linearGradient id="lakeFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Ghana Country Boundary Silhouette */}
          <path
            d="M 95 65 
               Q 140 45 200 40 
               Q 260 35 315 42 
               L 330 55 
               Q 325 105 328 160 
               Q 330 200 318 240 
               Q 312 280 332 335 
               Q 342 375 338 410 
               L 325 440 
               L 305 460 
               Q 275 468 245 478 
               Q 215 486 180 496 
               Q 145 505 115 515 
               L 70 478 
               Q 80 420 72 370 
               Q 65 315 75 260 
               Q 85 205 78 150 
               Q 88 100 95 65 Z"
            fill="url(#ghanaFill)"
            stroke="#166534"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="transition-colors duration-300"
          />

          {/* Lake Volta Representation */}
          <path
            d="M 268 250 
               Q 252 285 262 325 
               Q 272 365 292 395 
               Q 296 415 284 435 
               Q 272 408 258 358 
               Q 246 298 254 260 Z"
            fill="url(#lakeFill)"
            stroke="#3B82F6"
            strokeWidth="1"
            className="opacity-90"
          />
          <text
            x="276"
            y="345"
            fontSize="9"
            fill="#2563EB"
            fontWeight="bold"
            letterSpacing="0.05em"
            className="select-none opacity-80"
          >
            Lake Volta
          </text>

          {/* Regional Belt Labels */}
          <text x="180" y="110" fontSize="10" fill="#14532D" opacity="0.35" fontWeight="900" letterSpacing="0.1em">
            NORTHERN BELT
          </text>
          <text x="120" y="270" fontSize="10" fill="#14532D" opacity="0.35" fontWeight="900" letterSpacing="0.1em">
            MIDDLE BELT
          </text>
          <text x="95" y="450" fontSize="10" fill="#14532D" opacity="0.35" fontWeight="900" letterSpacing="0.1em">
            COASTAL BELT
          </text>

          {/* Inter-Branch Waybill Freight Corridors (Dotted Lines) */}
          {/* Kasoa -> Kumasi */}
          <line
            x1="236"
            y1="468"
            x2="185"
            y2="350"
            stroke="#166534"
            strokeWidth="1.8"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          {/* Kumasi -> Tamale */}
          <line
            x1="185"
            y1="350"
            x2="215"
            y2="195"
            stroke="#166534"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            opacity="0.45"
          />
          {/* Kasoa -> Swedru */}
          <line
            x1="236"
            y1="468"
            x2="215"
            y2="462"
            stroke="#166534"
            strokeWidth="1.8"
            strokeDasharray="3 3"
            opacity="0.6"
          />
          {/* Kasoa -> Nsawam */}
          <line
            x1="236"
            y1="468"
            x2="250"
            y2="442"
            stroke="#166534"
            strokeWidth="1.8"
            strokeDasharray="3 3"
            opacity="0.6"
          />
          {/* Nsawam -> Kumasi */}
          <line
            x1="250"
            y1="442"
            x2="185"
            y2="350"
            stroke="#166534"
            strokeWidth="1.8"
            strokeDasharray="3 3"
            opacity="0.6"
          />

          {/* Major Waybill Destination Dots (Reference Stations) */}
          {waybillHubs.map((hub) => (
            <g key={hub.name} className="opacity-70 group cursor-default">
              <circle cx={hub.x} cy={hub.y} r="3" fill="#6B7280" />
              <text
                x={hub.x + 6}
                y={hub.y + 3}
                fontSize="9"
                fill="#4B5563"
                fontWeight="600"
                className="select-none"
              >
                {hub.name}
              </text>
            </g>
          ))}

          {/* 4 Interactive ERNEJOYSON Branch Pins */}
          {branches.map((b) => {
            const isActive = activeBranchId === b.id

            return (
              <g
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className="cursor-pointer transition-transform duration-200"
                style={{ transformOrigin: `${b.x}px ${b.y}px` }}
              >
                {/* Radar Ring for Active / HQ */}
                {isActive && (
                  <circle
                    cx={b.x}
                    cy={b.y}
                    r="16"
                    fill="none"
                    stroke="#166534"
                    strokeWidth="2"
                    className="animate-ping opacity-75"
                  />
                )}

                {/* Outer Glow Halo */}
                <circle
                  cx={b.x}
                  cy={b.y}
                  r={isActive ? '13' : '10'}
                  fill={isActive ? '#166534' : '#22C55E'}
                  opacity={isActive ? '0.25' : '0.15'}
                />

                {/* Pin Circle */}
                <circle
                  cx={b.x}
                  cy={b.y}
                  r={isActive ? '7.5' : '6'}
                  fill={b.isHq ? '#14532D' : '#166534'}
                  stroke="#FFFFFF"
                  strokeWidth={isActive ? '2.5' : '1.8'}
                  className="shadow-md"
                />

                {/* Inner White / Gold Dot */}
                <circle
                  cx={b.x}
                  cy={b.y}
                  r={b.isHq ? '2.5' : '2'}
                  fill={b.isHq ? '#FDE047' : '#FFFFFF'}
                />

                {/* Pin Text Label Badge */}
                <g transform={`translate(${b.x}, ${b.y})`}>
                  {/* Position text differently depending on space around South Ghana */}
                  <rect
                    x={b.id === 'kumasi' ? -42 : b.id === 'swedru' ? -62 : b.id === 'nsawam' ? 10 : 10}
                    y={b.id === 'kumasi' ? -26 : b.id === 'swedru' ? -8 : b.id === 'nsawam' ? -18 : 6}
                    width={b.isHq ? 84 : 64}
                    height="18"
                    rx="9"
                    fill={isActive ? '#14532D' : '#FFFFFF'}
                    stroke={isActive ? '#166534' : '#EAE6DC'}
                    strokeWidth="1.2"
                    className="shadow-xs"
                  />
                  <text
                    x={b.id === 'kumasi' ? 0 : b.id === 'swedru' ? -31 : b.id === 'nsawam' ? 42 : 52}
                    y={b.id === 'kumasi' ? -14 : b.id === 'swedru' ? 4 : b.id === 'nsawam' ? -6 : 18}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight="800"
                    fill={isActive ? '#FFFFFF' : '#14532D'}
                    className="select-none"
                  >
                    {b.shortName} {b.isHq ? '★ HQ' : ''}
                  </text>
                </g>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Map Legend & Summary Bar */}
      <div className="pt-3 border-t border-[#EAE6DC] flex flex-wrap items-center justify-between gap-3 text-xs text-[#14532D]">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#14532D] border-2 border-[#FDE047]" />
            <span className="font-bold">Kasoa (HQ Depot)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#166534] border border-white" />
            <span className="font-medium">Regional Hubs (3)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            <span className="text-neutral-500 font-medium">Waybill Freight Hubs</span>
          </div>
        </div>

        <span className="text-[11px] font-bold text-[#166534]">
          Nationwide Daily Dispatch
        </span>
      </div>
    </div>
  )
}
