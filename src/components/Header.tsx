import React from 'react'
import { Shield, Download } from 'lucide-react'
import { redirectTo, buildUrlWithCurrentParams } from '../utils/navigation'
import { CHECKOUT_URL } from '../config/checkout'
import { useCurrency } from '../context/CurrencyContext'

export default function Header() {
  const { currency, setCurrency, currentCurrency } = useCurrency()

  return (
    <>
      {/* Top Civil Contingency Notice - Fixed during entire scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#081325]/95 backdrop-blur-md border-b border-navy-800 text-paper-200 text-xs py-2 px-4 shadow-md transition-all">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="font-montserrat text-[11px] font-semibold text-amber-400 uppercase tracking-wider shrink-0">
              Civil Protection Notice
            </span>
            <span className="text-paper-300 hidden sm:inline">—</span>
            <span className="text-paper-200 text-xs font-montserrat font-normal">
              Governments in the UK, Sweden, Finland, and Germany advise all households to maintain 7 days of autonomous reserves.
            </span>
          </div>
          <span className="font-montserrat text-[10px] text-paper-300 hidden md:inline font-medium tracking-wide">
            UK & European Civilian Edition · 2026
          </span>
        </div>
      </div>

      {/* Main Masthead - positioned below fixed notice bar */}
      <header className="mt-10 sm:mt-9 bg-white border-b border-paper-300 relative z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-navy-900 text-amber-500 flex items-center justify-center text-lg font-bold shadow-sm">
              <Shield className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <div className="font-montserrat text-lg sm:text-xl font-bold tracking-tight text-ink-900 leading-none">
                The 7-Day Survival Protocol
              </div>
              <div className="text-[11px] font-montserrat font-medium text-ink-500 uppercase tracking-wider mt-1">
                European Household Preparedness Standard
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-montserrat font-medium text-ink-700">
            <a href="#directives" className="hover:text-navy-900 transition-colors">Official Directives</a>
            <a href="#chapters" className="hover:text-navy-900 transition-colors">The 12 Chapters</a>
            <a href="#deliverable" className="hover:text-navy-900 transition-colors">Inside the Book</a>
            <a href="#workbooks" className="hover:text-navy-900 transition-colors">Worksheets</a>
            <a href="#testimonials" className="hover:text-navy-900 transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-navy-900 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Quick Currency Selector */}
            <div className="flex items-center bg-paper-100 border border-paper-300 rounded-lg p-0.5 text-xs font-montserrat">
              <button
                type="button"
                onClick={() => setCurrency('EUR')}
                className={`px-2 py-1 rounded transition-all cursor-pointer font-medium ${
                  currency === 'EUR' ? 'bg-navy-900 text-white shadow-xs' : 'text-ink-600 hover:text-ink-950'
                }`}
              >
                € EUR
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-1 rounded transition-all cursor-pointer font-medium ${
                  currency === 'USD' ? 'bg-navy-900 text-white shadow-xs' : 'text-ink-600 hover:text-ink-950'
                }`}
              >
                $ USD
              </button>
            </div>

            <a
              href={buildUrlWithCurrentParams(CHECKOUT_URL, 'header_btn')}
              onClick={(e) => {
                e.preventDefault()
                redirectTo(CHECKOUT_URL, 'header_btn')
              }}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-montserrat font-semibold px-4 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-amber-500" />
              <span>Get Protocol ({currentCurrency.symbol}{currentCurrency.price})</span>
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
