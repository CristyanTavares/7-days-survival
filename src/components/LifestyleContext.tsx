import React from 'react'
import { Check, X, Shield, ArrowRight } from 'lucide-react'
import { redirectTo, buildUrlWithCurrentParams } from '../utils/navigation'
import { CHECKOUT_URL } from '../config/checkout'
import { useCurrency } from '../context/CurrencyContext'

export default function LifestyleContext() {
  const { currentCurrency } = useCurrency()

  return (
    <section className="py-20 bg-white border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Lifestyle Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-paper-300 shadow-lg">
              <img
                src="./Mockups/3.webp"
                alt="Emergency plan on wooden desk with domestic supplies"
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-paper-200 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5 text-navy-900" />
              Domestic Peace of Mind
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight mb-6">
              Preparedness is not about fear. <br className="hidden sm:inline"/>
              It is about quiet responsibility.
            </h2>
            <p className="text-base text-ink-700 leading-relaxed mb-4 font-light font-montserrat">
              When regional blackouts or supply chain halts occur, the households that remain calm are simply those who know what to do. You do not need rural woodland bunkers or tactical combat gear. You need an organized home, a water reserve, and a clear sequence of decisions.
            </p>
            <p className="text-base text-ink-700 leading-relaxed mb-8 font-light font-montserrat">
              The 7-Day Survival Protocol translates complex civil defense recommendations into manageable domestic steps that any family can set up over a single weekend.
            </p>

            <a
              href={buildUrlWithCurrentParams(CHECKOUT_URL, 'lifestyle_btn')}
              onClick={(e) => {
                e.preventDefault()
                redirectTo(CHECKOUT_URL, 'lifestyle_btn')
              }}
              className="inline-flex items-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white font-montserrat font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <span>Download The Protocol Today ({currentCurrency.symbol}{currentCurrency.price})</span>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </a>
          </div>
        </div>

        {/* Contrast Table */}
        <div className="rounded-3xl bg-paper-100 border border-paper-300 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-montserrat text-2xl sm:text-3xl text-ink-950 font-medium tracking-tight">
              A Sensible Civilian Alternative to Internet "Prepping"
            </h3>
            <p className="text-sm text-ink-600 mt-2">
              How this protocol differs from the extreme survivalist content found online:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Protocol */}
            <div className="p-6 rounded-2xl bg-white border border-paper-300 shadow-sm">
              <h4 className="text-base font-bold text-emerald-800 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" />
                <span>The 7-Day Survival Protocol</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-ink-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Engineered specifically for European flats, townhouses, and suburban homes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Uses budget-friendly items from your local supermarket (Tesco, Aldi, Carrefour, Lidl).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Aligned strictly with national civil defense and public health safety standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Accounts for elderly relatives, young children, prescription medications, and pets.</span>
                </li>
              </ul>
            </div>

            {/* Internet Prepper Hype */}
            <div className="p-6 rounded-2xl bg-white border border-paper-300 shadow-sm opacity-85">
              <h4 className="text-base font-bold text-red-800 mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-red-600" />
                <span>Online "Prepper" Culture</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-ink-600">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Pushes expensive military-surplus gear, tactical knives, and woodland survival.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Relies on doomsday conspiracy theories designed to provoke anxiety and impulse buying.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Dangerous DIY advice (open flames indoors, untested chemical purification).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Completely impractical for normal families living in modern European housing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
