import React from 'react'
import { ShieldCheck, Check, ArrowRight, Lock } from 'lucide-react'
import { buildUrlWithCurrentParams, redirectTo } from '../utils/navigation'

export default function PricingOffer() {
  const BASE_CHECKOUT_URL = 'https://pay.hotmart.com/R108349121R?checkoutMode=10'

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault()
    redirectTo(BASE_CHECKOUT_URL)
  }

  return (
    <section id="pricing" className="py-20 bg-paper-100 border-b border-paper-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-paper-300 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-navy-900" />
            Direct Digital Download
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight mb-3">
            Secure Your Complete 7-Day Protocol
          </h2>
          <p className="text-base text-ink-600 font-light font-montserrat">
            Instant digital access to the 100-page core guide and all 6 practical action workbooks for a single, transparent fee.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-white border-2 border-navy-900 rounded-3xl p-8 sm:p-12 shadow-xl shadow-navy-950/5 relative overflow-hidden">
          
          {/* Top Banner Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-paper-300">
            <div>
              <span className="font-montserrat text-xs font-semibold text-amber-600 uppercase tracking-wider">
                100% Digital Download Package
              </span>
              <h3 className="font-montserrat text-2xl sm:text-3xl font-semibold text-ink-950 mt-1">
                The 7-Day Survival Protocol™ Bundle
              </h3>
            </div>

            {/* Currency Badge: EUR Only */}
            <div className="inline-flex items-center gap-2 bg-paper-100 border border-paper-300 rounded-xl px-3.5 py-2 shrink-0 self-start sm:self-auto font-montserrat text-xs font-semibold text-navy-900">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>European Standard · EUR (€)</span>
            </div>
          </div>

          {/* Included Features Grid */}
          <div className="py-8 border-b border-paper-300">
            <h4 className="text-xs font-montserrat text-ink-500 uppercase tracking-wider mb-4 font-semibold">
              Complete Package Includes:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-ink-800 font-montserrat">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>The 7-Day Survival Protocol</strong> (100-page core guide)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bonus Vol 1:</strong> Household Profile & Water Worksheets</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bonus Vol 2:</strong> 7-Day Supermarket Master Shopping List</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bonus Vol 3:</strong> 60-Minute Emergency Protocol Checklist</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bonus Vol 4:</strong> Zero-Power Cooking & Rotation Calendar</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bonus Vol 5:</strong> Medical & Vulnerable Care Dossier</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Bonus Vol 6:</strong> Wallet-Sized Emergency Action Cards</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Immediate Updates:</strong> Lifetime access to future revisions</span>
              </div>
            </div>
          </div>

          {/* Pricing Action Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-ink-400 line-through font-montserrat">
                  Regular €47.00
                </span>
                <span className="text-xs font-montserrat font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                  81% Civil Discount
                </span>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-montserrat text-ink-950 font-bold">€</span>
                <span className="text-5xl font-montserrat text-ink-950 font-bold tracking-tight">8.90</span>
                <span className="text-xs text-ink-500 font-montserrat font-medium ml-2">One-time payment</span>
              </div>
              <div className="text-xs text-ink-500 mt-1 font-montserrat font-light">
                No subscription · Instant high-resolution PDF download link sent by email
              </div>
            </div>

            <a
              href={buildUrlWithCurrentParams(BASE_CHECKOUT_URL)}
              onClick={handleCheckout}
              className="inline-flex items-center justify-center gap-3 bg-navy-900 hover:bg-navy-800 text-white font-montserrat font-semibold text-lg px-8 py-5 rounded-2xl shadow-xl shadow-navy-900/20 transition-all hover:-translate-y-0.5 text-center shrink-0 cursor-pointer"
            >
              <span>Get Immediate Access (€8.90)</span>
              <ArrowRight className="w-5 h-5 text-amber-500" />
            </a>
          </div>

          {/* Guarantee Footer */}
          <div className="mt-8 pt-6 border-t border-paper-200 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-600 font-montserrat">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>7-Day Unconditional Guarantee:</strong> 100% refund if not completely satisfied.</span>
            </div>
            <div className="flex items-center gap-2 font-montserrat font-medium text-ink-500">
              <Lock className="w-3.5 h-3.5" />
              <span>256-Bit Encrypted Checkout</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
