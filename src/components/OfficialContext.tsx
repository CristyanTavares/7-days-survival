import React from 'react'
import { AlertCircle, ShoppingCart, Droplet, Flame, Users } from 'lucide-react'

export default function OfficialContext() {
  const directives = [
    {
      country: 'United Kingdom',
      agency: 'Cabinet Office & Civil Contingencies',
      title: 'National "Prepare" Public Guidance',
      quote: 'Ministers officially advise British households to maintain stockpiles of bottled water, non-perishable food, and battery-powered radios for infrastructure emergencies.',
      badge: 'GOV.UK ADVISORY',
    },
    {
      country: 'Sweden',
      agency: 'Civil Contingencies Agency (MSB)',
      title: '5.2 Million Emergency Booklets Mailed',
      quote: 'The Swedish government updated and distributed its booklet "If Crisis or War Comes" to every citizen, establishing a mandatory 7-day domestic autonomy baseline.',
      badge: 'MSB MANDATE',
    },
    {
      country: 'Finland',
      agency: 'National Emergency Supply Agency',
      title: 'The 72-Hour & 7-Day Doctrine',
      quote: 'Finnish civil defense explicitly states rescue departments will prioritize critical hospitals. Normal civilian homes must be entirely self-sufficient for up to 7 days.',
      badge: '72H DIRECTIVE',
    },
    {
      country: 'Germany',
      agency: 'Federal Office of Civil Protection (BBK)',
      title: '10-Day Civilian Food & Water Stockpile',
      quote: 'The BBK recommends every citizen store 2 litres of water per person per day, noting retail grocery chains operate with less than 48 hours of warehouse reserves.',
      badge: 'BBK STANDARD',
    },
  ]

  const fallacies = [
    {
      icon: ShoppingCart,
      title: 'The Supermarket Delivery Fallacy',
      desc: 'Modern supermarkets rely on "just-in-time" supply chains holding barely 2 days of stock. In any widespread power or logistical failure, card terminals cease functioning, fuel pumps stop, and local shelves empty in under 180 minutes.',
    },
    {
      icon: Droplet,
      title: 'The Silent Water Failure',
      desc: 'Most urban flats and townhouses depend on electric booster pumps to deliver municipal water above the ground floor. When power cuts, taps dry out instantly. The average European home holds less than 3 litres of clean drinking water.',
    },
    {
      icon: Flame,
      title: 'The Danger of Improvisation',
      desc: 'Using camping gas stoves or charcoal heaters inside closed flats creates fatal carbon monoxide fumes. Eating spoiled food from unpowered fridges causes acute food poisoning at the exact moment emergency hospitals are overwhelmed.',
    },
    {
      icon: Users,
      title: 'Dependents and Vulnerable Needs',
      desc: 'Children, elderly parents, and domestic pets cannot simply "tough it out." They require non-negotiable prescription medications, warm thermal spaces, and tailored nutrition that cannot be found during panic buying.',
    },
  ]

  return (
    <section id="directives" className="py-20 bg-white border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-paper-200 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-navy-900" />
            Official Civil Defense Context
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight mb-4">
            This is not speculation. <br className="hidden sm:inline"/>
            It is official European civil policy.
          </h2>
          <p className="text-base text-ink-600 leading-relaxed font-light font-montserrat">
            Across Europe, public emergency agencies have revised civilian guidelines. When major power, water, or logistics disruptions occur, emergency services will be fully committed to critical infrastructure. Individual homes must stand on their own.
          </p>
        </div>

        {/* 4 Official Dossier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {directives.map((d) => (
            <div
              key={d.country}
              className="p-6 rounded-2xl bg-paper-100 border border-paper-300 flex flex-col justify-between hover:border-paper-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-montserrat text-xs font-semibold text-navy-900 uppercase tracking-wider">
                    {d.country}
                  </span>
                  <span className="font-montserrat text-[10px] px-2 py-0.5 rounded bg-white border border-paper-300 text-ink-600 font-medium tracking-wide">
                    {d.badge}
                  </span>
                </div>
                <h3 className="text-base font-montserrat font-medium text-ink-900 mb-2 leading-snug">
                  {d.title}
                </h3>
                <p className="text-xs text-ink-600 leading-relaxed mb-4 font-montserrat font-light">
                  {d.quote}
                </p>
              </div>
              <div className="text-[11px] font-montserrat font-medium text-ink-500 pt-3 border-t border-paper-300">
                {d.agency}
              </div>
            </div>
          ))}
        </div>

        {/* The 48-Hour Fallacy Breakdown: Solid High-Contrast Container */}
        <div className="rounded-3xl bg-[#0a192f] text-white p-8 sm:p-12 border border-[#1e3a5f] shadow-2xl">
          <div className="max-w-2xl mb-10">
            <span className="font-montserrat text-xs text-amber-400 uppercase tracking-widest font-medium">
              The Reality of Urban Vulnerability
            </span>
            <h3 className="font-montserrat text-2xl sm:text-3xl text-white font-medium tracking-tight mt-2">
              The 48-Hour Fragility of Modern Households
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-3 leading-relaxed font-light font-montserrat">
              Why relying on last-minute shopping or improvising under pressure fails when basic municipal services cut out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fallacies.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-montserrat font-medium text-white mb-1.5">{f.title}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-light font-montserrat">
                      {f.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
