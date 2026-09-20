import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  MapPin,
  Phone,
  Quote,
  Wrench,
  Pill,
  Building2,
  Globe,
  Truck,
  Layers,
  BadgeCheck,
  HeartHandshake,
} from 'lucide-react'

// ─── Staff Photo Imports ──────────────────────────────────────────────────────
import photoDirector from '@/assets/staff/Directorr.jpeg'
import photoJoseph from '@/assets/staff/Mr. Joseph.jpeg'
import photoAccountant from '@/assets/staff/Accountant.jpeg'
import photoWitty from '@/assets/staff/Mrs. Witty Biamah Ohemeng.jpeg'
import photoJennifer from '@/assets/staff/Jennifer.jpeg'
import photoMohammed from '@/assets/staff/Mohammed.jpeg'
import photoYakubu from '@/assets/staff/Yakubu.jpeg'
import photoMillicent from '@/assets/staff/Millicent.jpeg'
import photoFrancis from '@/assets/staff/Francis.jpeg'
import photoManager from '@/assets/staff/Manager.jpeg'

// ─── Data ─────────────────────────────────────────────────────────────────────

const BOARD = [
  {
    name: 'Ernest Boapeah',
    role: 'Director & Founder',
    photo: photoDirector,
    alt: 'Ernest Boapeah – Director & Founder, ERNEJOYSON',
  },
  {
    name: 'Richard Kwabena Nkum',
    role: 'Managing Director',
    photo: photoManager,
    alt: 'Richard Kwabena Nkum – Managing Director, ERNEJOYSON',
  },
  {
    name: 'Joseph Tosure',
    role: 'CFO & Board Member',
    photo: photoJoseph,
    alt: 'Joseph Tosure – CFO & Board Member, ERNEJOYSON',
  },
]

const TEAM: Array<{
  name: string
  role: string
  branch: string
  photo: string | null
}> = [
  {
    name: 'Witty Biamah Ohemeng',
    role: 'Sales Manager',
    branch: 'Kasoa Branch',
    photo: photoWitty,
  },
  {
    name: 'Ms. Jennifer Asante',
    role: 'Sales Manager',
    branch: 'Kumasi',
    photo: photoJennifer,
  },
  {
    name: 'Zakaria Mohammed',
    role: 'Veterinary Sales Executive',
    branch: 'Swedru',
    photo: photoMohammed,
  },
  {
    name: 'Yakubu Abdul-Hanan',
    role: 'Veterinary Sales Executive',
    branch: 'Nsawam',
    photo: photoYakubu,
  },
  {
    name: 'Millicent Gyanewaa Ofosu',
    role: 'Digital Sales Manager',
    branch: 'Nationwide',
    photo: photoMillicent,
  },
  {
    name: 'Benjamin Siaw',
    role: 'Accounts Officer',
    branch: 'Head Office',
    photo: photoAccountant,
  },
  {
    name: 'Francis Otoo',
    role: 'Chief Driver & Fleet Supervisor',
    branch: 'Nationwide',
    photo: photoFrancis,
  },
  {
    name: 'Abinga Christopher Kwadwo',
    role: 'Technical Sales Executive',
    branch: 'Kasoa',
    photo: null,
  },
]

const VALUES = [
  { label: 'Quality', desc: 'We source only from reputable manufacturers in Asia and Europe.' },
  { label: 'Integrity', desc: 'Honest service and transparent dealings with every customer.' },
  { label: 'Professionalism', desc: 'Expert guidance and structured distribution, nationwide.' },
  { label: 'Customer Focus', desc: 'Solutions designed around the real needs of Ghanaian farmers.' },
  { label: 'Innovation', desc: 'Continuously improving how farmers access farm supplies.' },
  { label: 'Teamwork', desc: 'A coordinated branch network working together for farmers.' },
]

const BRANCHES = [
  { name: 'Kasoa', tag: 'Head Office', desc: 'Our headquarters and central wholesale distribution hub.' },
  { name: 'Kumasi', tag: 'Regional Branch', desc: 'Serving the Ashanti Region and the Northern distribution corridor.' },
  { name: 'Agona Swedru', tag: 'Regional Branch', desc: 'Central Region hub for veterinary advisory and equipment supply.' },
  { name: 'Nsawam', tag: 'Regional Branch', desc: 'Eastern Region supply point for Greater Accra clusters.' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen">

      {/* ══ 1. Hero Banner ══════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-[#DCFCE7] text-[#166534] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-[#14532D] leading-[1.08] tracking-tight">
              Ghana's Trusted Source for Veterinary &amp; Farm Supplies
            </h1>
            <p className="text-[#14532D]/75 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              ERNEJOYSON COMPANY LIMITED is a Ghanaian-owned veterinary pharmaceutical and poultry &amp; livestock equipment importation and distribution company — serving farmers, agro-dealers, and commercial producers across Ghana from four strategic branch locations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="tel:0596709226"
                className="inline-flex items-center gap-2 rounded-full bg-[#14532D] text-white px-6 py-3 text-sm font-bold hover:bg-[#0E3B20] transition-colors shadow-sm"
              >
                <Phone className="h-4 w-4" />
                <span>059 670 9226</span>
              </a>
              <a
                href="tel:0241604926"
                className="inline-flex items-center gap-2 rounded-full border border-[#14532D]/20 text-[#166534] px-6 py-3 text-sm font-bold hover:bg-[#DCFCE7] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>024 160 4926</span>
              </a>
            </div>
          </div>

          {/* Founder Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-[#EAE6DC] shadow-xl aspect-[4/5] bg-[#DCFCE7]">
              <img
                src={photoDirector}
                alt="Ernest Boapeah – Founder & Director, ERNEJOYSON"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating name card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/80 shadow-lg px-5 py-4">
              <p className="font-display font-black text-[#14532D] text-base">Ernest Boapeah</p>
              <p className="text-xs font-semibold text-[#166534]">Director &amp; Founder — ERNEJOYSON Company Limited</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 2. Overview Strip ════════════════════════════════════════════════════ */}
      <section className="bg-[#14532D] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {[
            { stat: '4', label: 'Branch Locations', sub: 'Kasoa · Kumasi · Swedru · Nsawam' },
            { stat: '100+', label: 'Products Available', sub: 'Pharmaceuticals, equipment & health' },
            { stat: '2', label: 'Core Specialities', sub: 'Veterinary pharma & farm equipment' },
          ].map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="font-display text-4xl font-black text-white">{item.stat}</p>
              <p className="text-sm font-extrabold text-[#4ADE80]">{item.label}</p>
              <p className="text-xs text-white/60 font-medium">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 3. Vision & Mission ═══════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="mb-10 space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">What Drives Us</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#14532D]">Vision &amp; Mission</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-[#EAE6DC] bg-white p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-5">
              <Quote className="h-24 w-24 text-[#14532D]" />
            </div>
            <span className="inline-block rounded-full bg-[#DCFCE7] text-[#166534] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1">
              Vision
            </span>
            <p className="font-display text-xl sm:text-2xl font-black text-[#14532D] leading-snug">
              To become the most trusted and accessible veterinary pharmaceutical and livestock equipment distributor in Ghana and West Africa.
            </p>
          </div>
          <div className="rounded-3xl border border-[#EAE6DC] bg-white p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-5">
              <Quote className="h-24 w-24 text-[#14532D]" />
            </div>
            <span className="inline-block rounded-full bg-[#DCFCE7] text-[#166534] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1">
              Mission
            </span>
            <p className="font-display text-xl sm:text-2xl font-black text-[#14532D] leading-snug">
              To provide quality and affordable veterinary drugs and farm equipment that enhance productivity and improve animal health across Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 4. What We Do ════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Our Specialisations</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#14532D]">Two Core Pillars</h2>
            <p className="text-[#14532D]/70 text-sm sm:text-base font-medium max-w-2xl">
              Ernejoyson brings together two essential agricultural supply categories under one roof — making it simpler for Ghana's farmers to get what they need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="rounded-3xl border border-[#EAE6DC] p-8 sm:p-10 space-y-6 bg-[#FAF9F5] hover:border-[#166534]/30 transition-all group">
              <div className="h-12 w-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#166534]">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-[#14532D] mb-2">
                  Poultry &amp; Livestock Equipment
                </h3>
                <p className="text-sm text-[#14532D]/75 font-medium leading-relaxed">
                  We supply essential farm equipment to improve day-to-day management, reduce manual labour, and support more efficient farm production.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Feeding &amp; drinking systems',
                  'Slaughtering &amp; plucking equipment',
                  'Transport cages &amp; crates',
                  'Feed processing machines',
                  'Incubators &amp; hatchery equipment',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#14532D]/80 font-medium">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#22C55E] shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <Link
                to="/shop?category=feeders"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166534] hover:text-[#14532D] transition-colors group-hover:gap-2.5"
              >
                <span>Browse Equipment</span>
                <ArrowRight className="h-3.5 w-3.5 transition-all" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-3xl border border-[#EAE6DC] p-8 sm:p-10 space-y-6 bg-[#FAF9F5] hover:border-[#166534]/30 transition-all group">
              <div className="h-12 w-12 rounded-2xl bg-[#DCFCE7] flex items-center justify-center text-[#166534]">
                <Pill className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-[#14532D] mb-2">
                  Veterinary Pharmaceuticals &amp; Animal Health
                </h3>
                <p className="text-sm text-[#14532D]/75 font-medium leading-relaxed">
                  Certified veterinary drugs sourced from reputable manufacturers in Asia and Europe, distributed directly to farmers and agro-vet businesses.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  'Nutritional supplements &amp; amino acids',
                  'Therapeutic antibiotics',
                  'Anti-parasitics &amp; topicals',
                  'Anthelmintics &amp; dewormers',
                  'Preventive coccidiostats &amp; disinfectants',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#14532D]/80 font-medium">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#22C55E] shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <Link
                to="/shop?category=antibiotics"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#166534] hover:text-[#14532D] transition-colors group-hover:gap-2.5"
              >
                <span>Browse Pharmaceuticals</span>
                <ArrowRight className="h-3.5 w-3.5 transition-all" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5. Core Values ════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="mb-12 space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">What We Stand For</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#14532D]">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {VALUES.map(({ label, desc }) => (
            <div
              key={label}
              className="rounded-2xl border border-[#EAE6DC] bg-white p-5 sm:p-6 space-y-2 hover:border-[#166534]/30 hover:shadow-sm transition-all"
            >
              <p className="font-display font-black text-[#14532D] text-base">{label}</p>
              <p className="text-xs text-[#14532D]/65 font-medium leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 6. Branch Network ════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#14532D]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#4ADE80]">Where We Are</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">Our Branch Network</h2>
            <p className="text-white/60 text-sm font-medium max-w-xl">
              Four strategic locations supporting nationwide distribution — with daily regional waybill dispatch to agro-dealers and farmers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BRANCHES.map((b) => (
              <div
                key={b.name}
                className="rounded-2xl bg-white/10 border border-white/10 p-6 space-y-3 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#4ADE80] shrink-0" />
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ADE80]">{b.tag}</span>
                </div>
                <h3 className="font-display text-xl font-black text-white">{b.name}</h3>
                <p className="text-xs text-white/55 font-medium leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#4ADE80] hover:text-white transition-colors"
            >
              <span>View branch contacts &amp; directions</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 7. Board & Leadership ════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="mb-12 space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Leadership</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#14532D]">Board &amp; Executive</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {BOARD.map((person) => (
            <div
              key={person.name}
              className="rounded-3xl border border-[#EAE6DC] bg-white overflow-hidden group hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/4.5] overflow-hidden bg-[#DCFCE7]">
                <img
                  src={person.photo}
                  alt={person.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-1">
                <p className="font-display font-black text-[#14532D] text-base">{person.name}</p>
                <p className="text-xs text-[#166534] font-semibold">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 8. Full Team Grid ════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Our People</p>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-[#14532D]">Branch &amp; Operations Team</h2>
            <p className="text-[#14532D]/65 text-sm font-medium max-w-xl">
              A dedicated team of sales, veterinary, and operations professionals spread across our Ghana-wide branch network.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {TEAM.map((person) => (
              <div
                key={person.name}
                className="rounded-2xl border border-[#EAE6DC] bg-[#FAF9F5] overflow-hidden group hover:shadow-md hover:border-[#166534]/25 transition-all"
              >
                <div className="aspect-square overflow-hidden bg-[#DCFCE7] relative">
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={`${person.name} – ${person.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#166534] to-[#14532D] text-white p-4 text-center select-none">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center font-display font-black text-xl sm:text-2xl tracking-wider text-white shadow-inner mb-1.5">
                        {person.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <span className="text-xs font-black text-white/95">
                        {person.name.split(' ')[1] || person.name.split(' ')[0]}
                      </span>
                      <span className="text-[10px] font-semibold text-white/70">
                        {person.name.split(' ')[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 space-y-0.5">
                  <p className="font-display font-extrabold text-[#14532D] text-xs sm:text-sm leading-tight">{person.name}</p>
                  <p className="text-[11px] text-[#166534] font-semibold">{person.role}</p>
                  <p className="text-[10px] text-[#14532D]/45 font-medium">{person.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. Why Choose Us ═════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="mb-12 space-y-1">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#166534]">Why Ernejoyson</p>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#14532D]">Why Farmers Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Building2, title: 'Ghanaian-Owned', desc: "Locally operated with deep understanding of Ghana's farming needs." },
            { icon: Globe, title: 'International Sourcing', desc: 'Products from reputable manufacturers in Asia and Europe.' },
            { icon: Truck, title: 'Nationwide Distribution', desc: '4 branches with daily regional waybill dispatch across Ghana.' },
            { icon: Layers, title: 'Dual Specialisation', desc: 'Both veterinary pharmaceuticals and poultry/livestock equipment.' },
            { icon: BadgeCheck, title: 'Quality & Affordability', desc: 'Premium products at competitive prices — no compromise.' },
            { icon: HeartHandshake, title: 'Customer-First', desc: 'Practical farm solutions and real support for every farmer.' },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#EAE6DC] bg-white p-6 space-y-3 hover:border-[#166534]/30 transition-all"
            >
              <div className="h-11 w-11 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#166534]">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display font-extrabold text-[#14532D] text-sm">{item.title}</h3>
              <p className="text-xs text-[#14532D]/65 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ 10. CTA Footer ════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F5]">
        <div className="max-w-[1200px] mx-auto rounded-3xl border border-[#EAE6DC] bg-white p-10 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-[#14532D] leading-snug">
              Looking for veterinary products or poultry equipment in Ghana?
            </h3>
            <p className="text-sm text-[#14532D]/70 font-medium">
              Connect with ERNEJOYSON COMPANY LIMITED for direct quotes, farm equipment, and professional veterinary guidance.
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-bold text-[#166534] pt-1">
              <Phone className="h-4 w-4 shrink-0" />
              <span>059 670 9226 &nbsp;/&nbsp; 024 160 4926</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <Link
              to="/shop"
              className="rounded-full bg-[#14532D] text-white px-7 py-3.5 text-sm font-extrabold hover:bg-[#0E3B20] transition-colors shadow-sm"
            >
              Browse Products
            </Link>
            <a
              href="tel:0596709226"
              className="rounded-full border border-[#14532D]/20 text-[#166534] px-7 py-3.5 text-sm font-bold hover:bg-[#DCFCE7] transition-colors inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call Sales Desk (059 670 9226)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
