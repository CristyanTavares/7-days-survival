import React from 'react'
import { useCurrency } from '../context/CurrencyContext'
import { redirectTo, buildUrlWithCurrentParams } from '../utils/navigation'
import { CHECKOUT_URL } from '../config/checkout'
import { FileCheck, ClipboardList, ShoppingBag, Salad, CreditCard, RotateCw, ArrowRight } from 'lucide-react'

export default function WorkbookBonus() {
  const { currentCurrency } = useCurrency()
  const workbooks = [
    {
      num: '01',
      icon: ClipboardList,
      title: 'Household Profile & Headcount Worksheets',
      desc: 'Fill-in-the-blank forms for family headcount, individual water ratios, daily caloric targets, and special mobility or medical dependencies.',
      format: 'Printable A4 Format · 8 Pages',
      val: '€12.00',
    },
    {
      num: '02',
      icon: FileCheck,
      title: 'First 60-Minute Urgent Checklists',
      desc: 'Operational action sheets to prevent hesitation under pressure: Sudden Grid Blackout, Tap Water Contamination, and Severe Winter Storms.',
      format: 'Laminatable Action Sheets · 8 Pages',
      val: '€9.00',
    },
    {
      num: '03',
      icon: ShoppingBag,
      title: 'Supermarket Aisle-by-Aisle Shopping Guide',
      desc: 'Organized by standard supermarket sections (canned staples, dry goods, chemist, hardware) to assemble your supplies without wasted spending.',
      format: 'Grocery Optimised · 10 Pages',
      val: '€11.00',
    },
    {
      num: '04',
      icon: Salad,
      title: 'Special Diets & Pediatric Adaptations',
      desc: 'Specific substitutions for gluten-free, dairy-free, and vegetarian households, plus high-calorie nutrition schedules for toddlers and infants.',
      format: '7 Full Days Planned · 8 Pages',
      val: '€10.00',
    },
    {
      num: '05',
      icon: CreditCard,
      title: 'Wallet & Backpack Emergency Cards',
      desc: 'Pocket-sized cut-out cards for every family member with ICE contact details, blood groups, known allergies, and primary rendezvous points.',
      format: 'Wallet Format · 8 Pages',
      val: '€8.00',
    },
    {
      num: '06',
      icon: RotateCw,
      title: 'Twice-Yearly Stock Audit & Rotation Routine',
      desc: 'A simple twice-yearly audit system so pantry items are rotated naturally into regular home cooking and supplies never expire.',
      format: 'Zero-Waste Schedule · 8 Pages',
      val: '€12.00',
    },
  ]

  return (
    <section id="workbooks" className="py-20 bg-paper-100 border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-paper-300 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-4">
            <FileCheck className="w-3.5 h-3.5 text-navy-900" />
            50-Page Practical Workbook
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight mb-4">
            Included 100% Free: <br className="hidden sm:inline"/>
            The 6 Practical Action Workbooks
          </h2>
          <p className="text-base text-ink-600 leading-relaxed font-light font-montserrat">
            Operational checklists, shopping forms, and emergency cards. Designed so you never have to improvise under stress — simply print, complete in 20 minutes, and keep with your supplies.
          </p>
        </div>

        {/* Workbooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {workbooks.map((wb) => {
            const Icon = wb.icon
            return (
              <div
                key={wb.num}
                className="p-6 rounded-2xl bg-white border border-paper-300 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-paper-100 border border-paper-300 flex items-center justify-center text-navy-900">
                      <Icon className="w-5 h-5 text-navy-900" />
                    </div>
                    <span className="font-montserrat text-xs font-semibold text-amber-600 uppercase tracking-wider">
                      VOLUME {wb.num}
                    </span>
                  </div>

                  <h3 className="text-base font-montserrat font-semibold text-ink-900 mb-2 leading-snug">
                    {wb.title}
                  </h3>

                  <p className="text-xs text-ink-600 leading-relaxed mb-4 font-montserrat font-light">
                    {wb.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-paper-200 flex items-center justify-between text-xs font-montserrat font-medium">
                  <span className="text-ink-500">{wb.format}</span>
                  <span className="text-ink-400 line-through">{wb.val}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Value Box */}
        <div className="rounded-2xl bg-white border border-paper-300 p-8 text-center max-w-2xl mx-auto shadow-sm">
          <div className="text-xs font-montserrat font-medium text-ink-500 uppercase tracking-wider mb-1">
            Total Combined Workbook Value
          </div>
          <div className="font-montserrat text-3xl sm:text-4xl font-bold text-navy-900">
            {currentCurrency.workbookValue}
          </div>
          <p className="text-sm text-ink-600 mt-2 mb-6">
            Included entirely <strong>free of charge</strong> with your one-time purchase of The 7-Day Survival Protocol.
          </p>
          <a
            href={buildUrlWithCurrentParams(CHECKOUT_URL, 'workbooks_btn')}
            onClick={(e) => {
              e.preventDefault()
              redirectTo(CHECKOUT_URL, 'workbooks_btn')
            }}
            className="inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white font-montserrat font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Claim Complete Bundle + All 6 Workbooks ({currentCurrency.symbol}{currentCurrency.price})</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </a>
        </div>

      </div>
    </section>
  )
}
