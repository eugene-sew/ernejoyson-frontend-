import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, FileText, Check, ShieldCheck, Layers, ArrowRight } from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  spec: string
  availability: string
  hasBulkPricing: boolean
  image: string
  priceDisplay: string
}

export function FeaturedProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [addedItem, setAddedItem] = useState<string | null>(null)

  const products: Product[] = [
    {
      id: 'prod-1',
      name: 'Broad-Spectrum Veterinary Injectable Solution',
      category: 'Veterinary Pharmaceuticals',
      spec: '100ml & 250ml Vial Pack',
      availability: 'In Stock (Kasoa & Kumasi)',
      hasBulkPricing: true,
      priceDisplay: 'Commercial Pack',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-2',
      name: 'Anti-Coccidial & Anthelmintic Oral Suspension',
      category: 'Anti-Parasitics & Anthelmintics',
      spec: '1 Litre & 5 Litre Container',
      availability: 'In Stock',
      hasBulkPricing: true,
      priceDisplay: 'Standard Pack',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-3',
      name: 'Multivitamin & Electrolyte Stress Pack',
      category: 'Nutritional Supplements',
      spec: '1kg Foil Sachet (Box of 10)',
      availability: 'In Stock across all Hubs',
      hasBulkPricing: true,
      priceDisplay: 'Standard Pack',
      image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-4',
      name: 'Automated 360° Poultry Nipple Drinker Line',
      category: 'Feeding & Drinking Systems',
      spec: 'Complete 3m Section with Regulators',
      availability: 'Available for Farm Setup',
      hasBulkPricing: true,
      priceDisplay: 'Per Meter Run / Section',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-5',
      name: 'Commercial Automatic Setter & Hatcher Incubator',
      category: 'Incubators & Hatchery Equipment',
      spec: '1,056 to 5,280 Egg Capacity',
      availability: 'In Stock & Sourced to Order',
      hasBulkPricing: false,
      priceDisplay: 'Turnkey Unit',
      image: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-6',
      name: 'Heavy-Duty Poultry Feed Hammer Mill & Mixer',
      category: 'Feed Processing Machines',
      spec: '500kg/hr - 1.5 Ton/hr Output',
      availability: 'Available on Order',
      hasBulkPricing: false,
      priceDisplay: 'Commercial Unit',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-7',
      name: 'Rotary Poultry Defeathering Plucker Machine',
      category: 'Slaughtering Equipment',
      spec: 'Stainless Steel / 30-50 Birds/hr',
      availability: 'In Stock',
      hasBulkPricing: true,
      priceDisplay: 'Commercial Grade',
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'prod-8',
      name: 'High-Density Perforated Poultry Transport Crate',
      category: 'Transport Cages',
      spec: '960 x 570 x 270 mm (10-14 birds)',
      availability: 'In Stock in Bulk',
      hasBulkPricing: true,
      priceDisplay: 'Per Crate / Stack',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=600&q=80',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'vet', label: 'Veterinary Products' },
    { id: 'equipment', label: 'Livestock Equipment' },
  ]

  const filteredProducts = products.filter((item) => {
    if (selectedCategory === 'all') return true
    if (selectedCategory === 'vet') {
      return (
        item.category === 'Veterinary Pharmaceuticals' ||
        item.category === 'Anti-Parasitics & Anthelmintics' ||
        item.category === 'Nutritional Supplements'
      )
    }
    if (selectedCategory === 'equipment') {
      return (
        item.category === 'Feeding & Drinking Systems' ||
        item.category === 'Incubators & Hatchery Equipment' ||
        item.category === 'Feed Processing Machines' ||
        item.category === 'Slaughtering Equipment' ||
        item.category === 'Transport Cages'
      )
    }
    return true
  })

  const handleAddToCart = (id: string) => {
    setAddedItem(id)
    setTimeout(() => {
      setAddedItem(null)
    }, 1800)
  }

  return (
    <section id="featured-products" className="px-4 sm:px-8 lg:px-12 py-14 sm:py-20 max-w-[1380px] mx-auto w-full space-y-10 sm:space-y-12">
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14532D] leading-[1.1]">
            Quality Products. <br className="hidden sm:inline" />
            Practical Solutions.
          </h2>

          <p className="text-sm sm:text-base text-[#14532D]/80 leading-relaxed max-w-2xl font-medium pt-1">
            Browse products from our veterinary and livestock equipment range. For bulk orders, commercial farms and special requirements, request a quote from our team.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-[#166534] text-white shadow-md'
                  : 'bg-white text-[#14532D] hover:bg-[#FAF9F5] border border-[#EAE6DC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between rounded-[28px] sm:rounded-[32px] bg-white p-5 shadow-sm border border-[#EAE6DC] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image Container with Badges */}
            <div className="relative h-52 w-full overflow-hidden rounded-[22px] bg-[#FAF9F5] mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bulk Pricing Badge */}
              {product.hasBulkPricing && (
                <div className="absolute top-3 left-3 rounded-full bg-[#166534] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm">
                  Bulk Available
                </div>
              )}

              {/* Spec Badge */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold text-[#14532D] shadow-sm border border-black/5 flex items-center justify-between">
                <span className="truncate">{product.spec}</span>
                <span className="text-[10px] font-semibold text-[#166534] shrink-0 ml-1">{product.priceDisplay}</span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#166534] block">
                  {product.category}
                </span>

                <h3 className="font-display text-base font-extrabold text-[#14532D] leading-snug group-hover:text-[#166534] transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </div>

              {/* Availability Line */}
              <div className="pt-2 pb-3 border-b border-black/5 flex items-center gap-1.5 text-xs font-semibold text-[#14532D]/70">
                <ShieldCheck className="h-3.5 w-3.5 text-[#166534] shrink-0" />
                <span className="truncate">{product.availability}</span>
              </div>

              {/* Action Buttons: Add to Cart (B2C) + Request Quote (B2B) */}
              <div className="pt-1 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleAddToCart(product.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-full py-2.5 px-3 text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                    addedItem === product.id
                      ? 'bg-[#22C55E] text-white'
                      : 'bg-[#166534] text-white hover:bg-[#14532D]'
                  }`}
                >
                  {addedItem === product.id ? (
                    <>
                      <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                      <span>Added to Cart</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                <Link
                  to="/b2b#rfq-form"
                  title="Request Quote for Bulk Order"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF9F5] border border-[#EAE6DC] text-[#14532D] transition-colors hover:bg-[#166534] hover:text-white shrink-0"
                >
                  <FileText className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Information Callout */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-[#FAF9F5] p-6 sm:p-8 border border-[#EAE6DC] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-[#166534] text-xs font-extrabold uppercase tracking-wider">
            <Layers className="h-4 w-4" />
            <span>COMMERCIAL & BULK DISPATCH</span>
          </div>
          <h4 className="font-display text-lg sm:text-xl font-extrabold text-[#14532D]">
            Need bulk quantities, veterinary supply contracts, or custom farm equipment setup?
          </h4>
          <p className="text-xs sm:text-sm text-[#14532D]/75 font-medium max-w-2xl">
            Our commercial sales team arranges wholesale pricing, scheduled farm deliveries, and technical onboarding for operations across Ghana.
          </p>
        </div>

        <div className="shrink-0 flex flex-wrap items-center gap-3">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-full border border-[#166534] px-6 py-3 text-sm font-extrabold text-[#166534] hover:bg-[#166534] hover:text-white transition-all shadow-xs"
          >
            <span>Browse Full Shop</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>

          <Link
            to="/b2b#rfq-form"
            className="inline-flex items-center gap-2 rounded-full bg-[#166534] px-7 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-[#14532D] transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>Request a Business Quote</span>
            <ArrowRight className="h-4 w-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  )
}
