import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, MessageSquare } from 'lucide-react'

/* ─── Team Data ─────────────────────────────────────────────────────────── */
const LEADERSHIP = [
  {
    name: 'Ernest Boapeah',
    role: 'Director & Founder',
    initials: 'EB',
    photo: null, // swap with: import photo from '@/assets/team/ernest.jpg'
  },
  {
    name: 'Richard Kwabena Nkum',
    role: 'Managing Director',
    initials: 'RN',
    photo: null,
  },
  {
    name: 'Joseph Tosure',
    role: 'Chief Finance Officer & Board Member',
    initials: 'JT',
    photo: null,
  },
  {
    name: 'Dr. Sherry Ama Mawuko Johnson',
    role: 'Board Member',
    initials: 'SJ',
    photo: null,
  },
]

const TEAM = [
  {
    name: 'Witty Biamah Ohemeng',
    role: 'Sales Manager',
    branch: 'Kasoa Branch',
    initials: 'WO',
    photo: null,
  },
  {
    name: 'Ms. Jennifer Asante',
    role: 'Sales Manager',
    branch: 'Kumasi',
    initials: 'JA',
    photo: null,
  },
  {
    name: 'Zakaria Mohammed',
    role: 'Veterinary Sales Executive',
    branch: 'Swedru',
    initials: 'ZM',
    photo: null,
  },
  {
    name: 'Yakubu Abdul-Hanan',
    role: 'Veterinary Sales Executive',
    branch: 'Nsawam',
    initials: 'YA',
    photo: null,
  },
  {
    name: 'Abinga Christopher Kwadwo',
    role: 'Technical Sales Executive',
    branch: 'Kasoa',
    initials: 'AC',
    photo: null,
  },
  {
    name: 'Millicent Gyanewaa Ofosu',
    role: 'Digital Sales Manager',
    branch: 'Nationwide',
    initials: 'MO',
    photo: null,
  },
  {
    name: 'Benjamin Siaw',
    role: 'Accounts Officer',
    branch: 'Head Office',
    initials: 'BS',
    photo: null,
  },
  {
    name: 'Francis Otoo',
    role: 'Chief Driver & Fleet Supervisor',
    branch: 'Nationwide',
    initials: 'FO',
    photo: null,
  },
]

const VALUES = [
  { label: 'Quality' },
  { label: 'Integrity' },
  { label: 'Professionalism' },
  { label: 'Customer Focus' },
  { label: 'Innovation' },
  { label: 'Teamwork' },
]

/* ─── Avatar Component ──────────────────────────────────────────────────── */
function Avatar({
  initials,
  photo,
  size = 'md',
}: {
  initials: string
  photo: string | null
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeClass =
    size === 'lg'
      ? 'h-20 w-20 text-lg'
      : size === 'sm'
        ? 'h-10 w-10 text-xs'
        : 'h-14 w-14 text-sm'

  if (photo) {
    return (
      <img
        src={photo}
        alt={initials}
        className={`${sizeClass} rounded-full object-cover bg-[#DCFCE7]`}
      />
    )
  }

  return (
    <span
      className={`${sizeClass} rounded-full bg-[#DCFCE7] text-[#14532D] font-black flex items-center justify-center shrink-0`}
    >
      {initials}
    </span>
  )
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

      {/* ── 1. Page Title ── */}
      <div className="space-y-4 max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">
          About Us
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-[#14532D] tracking-tight leading-[1.1]">
          ERNEJOYSON COMPANY LIMITED
        </h1>
        <p className="text-base sm:text-lg text-[#14532D]/80 font-medium leading-relaxed">
          A Ghanaian-owned veterinary pharmaceutical and poultry &amp; livestock equipment importation and distribution company — supplying genuine products and farm solutions to farmers, agro-dealers, and commercial producers across Ghana.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="tel:0596709226"
            className="inline-flex items-center gap-2 rounded-full bg-[#14532D] text-white px-5 py-2.5 text-sm font-bold hover:bg-[#0E3B20] transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>059 670 9226</span>
          </a>
          <a
            href="https://wa.me/233596709226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#14532D]/25 text-[#166534] px-5 py-2.5 text-sm font-bold hover:bg-[#DCFCE7] transition-colors"
          >
            <MessageSquare className="h-4 w-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* ── 2. Vision & Mission ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-[#EAE6DC] bg-white p-7 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Vision</p>
          <p className="text-[#14532D] font-semibold text-sm sm:text-base leading-relaxed">
            To become the most trusted and accessible veterinary pharmaceutical and livestock equipment distributor in Ghana and West Africa.
          </p>
        </div>
        <div className="rounded-2xl border border-[#EAE6DC] bg-white p-7 space-y-2">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Mission</p>
          <p className="text-[#14532D] font-semibold text-sm sm:text-base leading-relaxed">
            To provide quality and affordable veterinary drugs and farm equipment that enhance productivity and improve animal health across Ghana.
          </p>
        </div>
      </div>

      {/* ── 3. What We Do ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">What We Do</p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Two Core Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Pillar 1 */}
          <div className="rounded-2xl border border-[#EAE6DC] bg-white p-7 space-y-4">
            <h3 className="font-display text-lg font-extrabold text-[#14532D]">
              Poultry &amp; Livestock Equipment
            </h3>
            <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
              We supply essential farm equipment to improve day-to-day management, reduce manual labour, and support efficient production.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#14532D]/75 font-medium">
              {[
                'Feeding and drinking systems',
                'Slaughtering & plucking equipment',
                'Transport cages & crates',
                'Feed processing machines',
                'Incubators & hatchery equipment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#22C55E] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/shop?category=feeders"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166534] hover:text-[#14532D] transition-colors"
            >
              <span>Browse Equipment</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-2xl border border-[#EAE6DC] bg-white p-7 space-y-4">
            <h3 className="font-display text-lg font-extrabold text-[#14532D]">
              Veterinary Pharmaceuticals &amp; Animal Health
            </h3>
            <p className="text-xs sm:text-sm text-[#14532D]/80 font-medium leading-relaxed">
              Certified veterinary drugs and health products sourced from reputable manufacturers in Asia and Europe, distributed directly to farmers.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#14532D]/75 font-medium">
              {[
                'Nutritional supplements & amino acids',
                'Therapeutic antibiotics',
                'Anti-parasitics & topicals',
                'Anthelmintics & dewormers',
                'Preventive coccidiostats & disinfectants',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#22C55E] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/shop?category=antibiotics"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166534] hover:text-[#14532D] transition-colors"
            >
              <span>Browse Pharmaceuticals</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── 4. Core Values ── */}
      <div className="space-y-5">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Our Values</p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            What We Stand For
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {VALUES.map(({ label }) => (
            <span
              key={label}
              className="rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-2 text-sm font-bold text-[#166534]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ── 5. Branch Network ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Our Branches</p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Ghana Branch Network
          </h2>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Four strategic locations supporting nationwide distribution and daily regional waybill dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: 'Kasoa',
              label: 'Head Office',
              desc: 'Central warehouse, administration, and wholesale distribution hub.',
            },
            {
              name: 'Kumasi',
              label: 'Regional Branch',
              desc: 'Serving the Ashanti Region and Northern distribution corridor.',
            },
            {
              name: 'Agona Swedru',
              label: 'Regional Branch',
              desc: 'Central Region agricultural hub for veterinary advisory and equipment.',
            },
            {
              name: 'Nsawam',
              label: 'Regional Branch',
              desc: 'Eastern Region supply point for Greater Accra and Akuapem clusters.',
            },
          ].map((branch) => (
            <div
              key={branch.name}
              className="rounded-2xl border border-[#EAE6DC] bg-white p-6 space-y-2 hover:border-[#166534]/30 transition-all"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#22C55E] shrink-0" />
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#166534]">
                  {branch.label}
                </span>
              </div>
              <h3 className="font-display text-xl font-black text-[#14532D]">{branch.name}</h3>
              <p className="text-xs text-[#14532D]/70 font-medium leading-relaxed">{branch.desc}</p>
            </div>
          ))}
        </div>

        <Link
          to="/locations"
          className="inline-flex items-center gap-2 text-sm font-extrabold text-[#166534] hover:text-[#14532D] transition-colors"
        >
          <span>View all branch details & contacts</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ── 6. Leadership ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Leadership</p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Board &amp; Executive Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl border border-[#EAE6DC] bg-white p-6 flex flex-col items-center text-center gap-3 hover:border-[#166534]/30 transition-all"
            >
              <Avatar initials={person.initials} photo={person.photo} size="lg" />
              <div>
                <p className="font-display font-extrabold text-[#14532D] text-sm leading-tight">
                  {person.name}
                </p>
                <p className="text-xs text-[#166534] font-semibold mt-0.5">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. Full Team ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Our Team</p>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#14532D]">
            Branch &amp; Operations Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TEAM.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl border border-[#EAE6DC] bg-white p-5 flex items-center gap-4 hover:border-[#166534]/30 transition-all"
            >
              <Avatar initials={person.initials} photo={person.photo} size="md" />
              <div className="min-w-0">
                <p className="font-display font-extrabold text-[#14532D] text-sm leading-tight truncate">
                  {person.name}
                </p>
                <p className="text-xs text-[#166534] font-semibold mt-0.5">{person.role}</p>
                <p className="text-[11px] text-[#14532D]/50 font-medium">{person.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. Contact CTA ── */}
      <div className="rounded-2xl border border-[#EAE6DC] bg-[#FAF9F5] p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-xl">
          <h3 className="font-display text-xl sm:text-2xl font-black text-[#14532D]">
            Looking for quality poultry equipment or veterinary products?
          </h3>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium">
            Connect with ERNEJOYSON COMPANY LIMITED for direct wholesale quotes, farm equipment, and professional veterinary guidance.
          </p>
          <p className="text-xs font-bold text-[#166534] pt-1">
            059 670 9226 &nbsp;/&nbsp; 024 160 4926
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          <Link
            to="/shop"
            className="rounded-full bg-[#14532D] text-white px-6 py-3 text-sm font-extrabold hover:bg-[#0E3B20] transition-colors"
          >
            Browse Products
          </Link>
          <a
            href="https://wa.me/233596709226?text=Hello%20ERNEJOYSON!%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#14532D]/25 text-[#166634] px-6 py-3 text-sm font-bold hover:bg-[#DCFCE7] transition-colors text-[#166534]"
          >
            WhatsApp Sales Desk
          </a>
        </div>
      </div>

    </div>
  )
}
