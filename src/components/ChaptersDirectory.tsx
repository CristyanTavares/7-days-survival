import React from 'react'
import { BookOpen, ExternalLink, ArrowRight } from 'lucide-react'
import { redirectTo, buildUrlWithCurrentParams } from '../utils/navigation'
import { CHECKOUT_URL } from '../config/checkout'
import { useCurrency } from '../context/CurrencyContext'

interface ChaptersProps {
  onOpenLightbox: (src: string) => void
}

export default function ChaptersDirectory({ onOpenLightbox }: ChaptersProps) {
  const { currentCurrency } = useCurrency()

  const chapters = [
    {
      num: '01',
      pages: 'P001–P008',
      title: 'The Psychology of Preparedness & Local Risk',
      desc: 'Eliminating panic and sensationalism. Calibrating realistic regional threats for European cities and towns without conspiracy paranoia.',
      preview: './deliverable_previews/page-005.webp',
    },
    {
      num: '02',
      pages: 'P009–P016',
      title: 'The First 60 Minutes Under Disruption',
      desc: 'The immediate sequence the moment electricity or water fails: what to lock, what to fill, what to isolate, and how to stop contamination.',
      preview: './deliverable_previews/page-009.webp',
    },
    {
      num: '03',
      pages: 'P017–P026',
      title: 'The Household Blueprint (Flats & Houses)',
      desc: 'Tactical floor zoning for apartments and modern houses: establishing the warm room, dry sanitation zone, and discrete storage layout.',
      preview: './deliverable_previews/page-017.webp',
    },
    {
      num: '04',
      pages: 'P027–P036',
      title: 'Water: Storage, Hidden Reserves & Purification',
      desc: 'Exact per-person daily equations. How to safely draw up to 200L inside boilers and radiators, plus safe household chlorination and filters.',
      preview: './deliverable_previews/page-027.webp',
    },
    {
      num: '05',
      pages: 'P037–P046',
      title: 'Food: The Smart Supermarket Pantry',
      desc: 'Which standard supermarket foods to buy, true shelf-life realities, pest isolation, and building a 7-day reserve on normal weekly shops.',
      preview: './deliverable_previews/page-037.webp',
    },
    {
      num: '06',
      pages: 'P047–P056',
      title: '7-Day No-Power, No-Cooking Action Plan',
      desc: 'Day-by-day family meals that require zero cooking gas or electricity, minimizing water used for washing dishes while maintaining nutrition.',
      preview: './deliverable_previews/page-047.webp',
    },
    {
      num: '07',
      pages: 'P057–P064',
      title: 'Power, Lighting & Thermal Control',
      desc: 'Safe passive lighting, torch management, strict smartphone battery preservation protocols, and staying warm without central heating.',
      preview: './deliverable_previews/page-057.webp',
    },
    {
      num: '08',
      pages: 'P065–P072',
      title: 'Domestic Hygiene, Sanitation & First Aid',
      desc: 'Zero-water sanitation, biological waste management in residential blocks, essential home medical reserves, and prescription rotation.',
      preview: './deliverable_previews/page-065.webp',
    },
    {
      num: '09',
      pages: 'P073–P080',
      title: 'Emergency Communications & Analogue Radio',
      desc: 'How to receive official news when cellular towers and broadband fail. Setting up battery/crank radios (FM/AM/DAB) and family link-ups.',
      preview: './deliverable_previews/page-073.webp',
    },
    {
      num: '10',
      pages: 'P081–P088',
      title: 'Stay or Evacuate: The Objective Matrix',
      desc: 'Clear quantitative triggers determining whether remaining sheltered at home or leaving is safest. Evacuation routes and rally points.',
      preview: './deliverable_previews/page-081.webp',
    },
    {
      num: '11',
      pages: 'P089–P096',
      title: 'Protecting Children, the Elderly & Pets',
      desc: 'Infant feeding, psychological comfort routines for children, managing chronic prescription medication for seniors, and pet supplies.',
      preview: './deliverable_previews/page-089.webp',
    },
    {
      num: '12',
      pages: 'P097–P100',
      title: '30-Day Setup Plan & Weekend Rehearsal',
      desc: 'How to assemble supplies across 4 normal grocery trips without denting your budget, plus a gentle 48-hour weekend rehearsal script.',
      preview: './deliverable_previews/page-097.webp',
    },
  ]

  return (
    <section id="chapters" className="py-20 bg-paper-100 border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-paper-300 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-navy-900" />
            Core Master Manual (100 Pages)
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight mb-4">
            The 12 Strategic Chapters
          </h2>
          <p className="text-base text-ink-600 leading-relaxed font-light font-montserrat">
            Written with rigorous practicality for regular European apartments and townhouses. Organized sequentially so your family can implement each step calmly at your own pace.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((ch) => (
            <div
              key={ch.num}
              onClick={() => onOpenLightbox(ch.preview)}
              className="group p-6 rounded-2xl bg-white border border-paper-300 hover:border-navy-900 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-montserrat text-xs font-semibold text-amber-600 uppercase tracking-wider">
                    CHAPTER {ch.num}
                  </span>
                  <span className="font-montserrat text-[11px] font-medium text-ink-500 bg-paper-100 px-2 py-0.5 rounded border border-paper-300">
                    {ch.pages}
                  </span>
                </div>
                <h3 className="text-base font-montserrat font-semibold text-ink-900 group-hover:text-navy-900 transition-colors mb-2 leading-snug">
                  {ch.title}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed font-light font-montserrat">
                  {ch.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-paper-200 flex items-center justify-between text-xs text-navy-900 font-medium">
                <span>View book spread</span>
                <ExternalLink className="w-3.5 h-3.5 text-ink-400 group-hover:text-navy-900 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Mid-Section Direct Checkout CTA */}
        <div className="mt-12 text-center">
          <a
            href={buildUrlWithCurrentParams(CHECKOUT_URL, 'chapters_btn')}
            onClick={(e) => {
              e.preventDefault()
              redirectTo(CHECKOUT_URL, 'chapters_btn')
            }}
            className="inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white font-montserrat font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Download All 12 Chapters + 6 Workbooks ({currentCurrency.symbol}{currentCurrency.price})</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </a>
          <p className="text-xs text-ink-500 font-montserrat mt-2">
            Instant PDF Download · One-time payment · 7-Day Money-Back Guarantee
          </p>
        </div>

      </div>
    </section>
  )
}
