import { Link } from 'react-router-dom'
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="mt-14 bg-[#0E3B20] text-white pt-16 pb-10 px-4 sm:px-6 lg:px-12 rounded-t-[44px] sm:rounded-t-[56px] overflow-hidden">
      <div className="max-w-[1380px] mx-auto w-full space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E] text-[#0E3B20]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span>ERNEJOYSON LIMITED</span>
            </Link>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm font-medium">
              Ghanaian-owned veterinary pharmaceutical and poultry/livestock equipment importation and distribution company. Providing quality products and practical technical support for farmers across Ghana.
            </p>

            {/* Direct Contact Points */}
            <div className="space-y-2.5 pt-2 text-xs font-semibold text-white/85">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#22C55E] shrink-0" />
                <span>Head Office: Kasoa, Central Region, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#22C55E] shrink-0" />
                <span>Regional Hubs: Kumasi • Swedru • Nsawam</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#22C55E] shrink-0" />
                <span>info@ernejoyson.com • sales@ernejoyson.com</span>
              </div>
            </div>
          </div>

          {/* Col 2: Product Categories */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-display text-base font-bold tracking-wider text-white uppercase text-xs">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-medium">
              <li><Link to="/shop?category=antibiotics" className="hover:text-[#DCFCE7] transition-colors">Veterinary Pharmaceuticals</Link></li>
              <li><Link to="/shop?category=anti-parasitics" className="hover:text-[#DCFCE7] transition-colors">Anti-Parasitics & Anthelmintics</Link></li>
              <li><Link to="/shop?category=vitamins" className="hover:text-[#DCFCE7] transition-colors">Nutritional Supplements</Link></li>
              <li><Link to="/shop?category=feeders" className="hover:text-[#DCFCE7] transition-colors">Feeding & Drinking Systems</Link></li>
              <li><Link to="/shop?category=equipment" className="hover:text-[#DCFCE7] transition-colors">Incubators & Brooder Units</Link></li>
              <li><Link to="/shop?category=equipment" className="hover:text-[#DCFCE7] transition-colors">Feed Processing Machines</Link></li>
              <li><Link to="/shop?category=equipment" className="hover:text-[#DCFCE7] transition-colors">Slaughtering Equipment</Link></li>
              <li><Link to="/shop?category=equipment" className="hover:text-[#DCFCE7] transition-colors">Transport Cages</Link></li>
            </ul>
          </div>

          {/* Col 3: B2B & Commercial Supply */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="font-display text-base font-bold tracking-wider text-white uppercase text-xs">
              Commercial & B2B
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 font-medium">
              <li><Link to="/b2b" className="hover:text-[#DCFCE7] transition-colors">Bulk Orders</Link></li>
              <li><Link to="/b2b" className="hover:text-[#DCFCE7] transition-colors">Commercial Supply</Link></li>
              <li><Link to="/b2b" className="hover:text-[#DCFCE7] transition-colors">Wholesale Enquiries</Link></li>
              <li><Link to="/b2b" className="hover:text-[#DCFCE7] transition-colors">Equipment Sourcing</Link></li>
              <li><Link to="/b2b#rfq-form" className="hover:text-[#DCFCE7] transition-colors font-bold text-[#DCFCE7]">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Col 4: Technical Support & Hubs */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-display text-base font-bold tracking-wider text-white uppercase text-xs">
              Support & Locations
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 font-medium">
              <li><Link to="/technical-support" className="hover:text-[#DCFCE7] transition-colors">Technical Farmer Support</Link></li>
              <li><Link to="/technical-support#vaccination-chart" className="hover:text-[#DCFCE7] transition-colors">Poultry Vaccination Schedule</Link></li>
              <li><Link to="/knowledge" className="hover:text-[#DCFCE7] transition-colors">Farm Knowledge Hub</Link></li>
              <li><Link to="/user-flow" className="hover:text-[#DCFCE7] transition-colors text-[#22C55E] font-semibold">One Ordering Flow</Link></li>
              <li><Link to="/locations" className="hover:text-[#DCFCE7] transition-colors">Kasoa Central Hub</Link></li>
              <li><Link to="/locations" className="hover:text-[#DCFCE7] transition-colors">Kumasi Branch (Ashanti & North)</Link></li>
              <li><Link to="/locations" className="hover:text-[#DCFCE7] transition-colors">Swedru & Nsawam Regional Hubs</Link></li>
              <li><Link to="/about" className="hover:text-[#DCFCE7] transition-colors">About ERNEJOYSON</Link></li>
            </ul>
          </div>
        </div>

        {/* Giant Display Wordmark with Free Vaccination Chart Button */}
        <div className="relative pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          <span className="font-display text-4xl sm:text-6xl lg:text-[92px] font-black tracking-tight text-white/90 select-none leading-none">
            ERNEJOYSON
          </span>

          <Link
            to="/technical-support#vaccination-chart"
            className="inline-flex items-center gap-2 rounded-full bg-[#22C55E] px-8 py-4 text-sm font-extrabold text-[#0E3B20] shadow-xl transition-all hover:bg-[#DCFCE7] active:scale-95 cursor-pointer shrink-0"
          >
            <span>Free Vaccination Chart</span>
            <ArrowUpRight className="h-4.5 w-4.5" />
          </Link>
        </div>

        {/* Sub-footer copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-white/60 border-t border-white/5">
          <p>© 2026 ERNEJOYSON LIMITED. All rights reserved. Registered in Ghana.</p>
          <div className="flex items-center gap-6">
            <Link to="/user-flow" className="hover:text-white transition-colors">One Ordering Flow</Link>
            <Link to="/locations" className="hover:text-white transition-colors">Ghana Distribution Network</Link>
            <Link to="/technical-support" className="hover:text-white transition-colors">Technical Farmer Advisory</Link>
            <Link to="/b2b" className="hover:text-white transition-colors">Wholesale & B2B</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
