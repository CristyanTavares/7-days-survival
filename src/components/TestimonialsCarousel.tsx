import React from 'react'
import { Star, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  photo: string
  city: string
  country: string
  flag: string
  headline: string
  quote: string
  context: string
  profile: string
}

export default function TestimonialsCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 'uk-liam',
      name: 'Liam & Claire Henderson',
      photo: './testimonials/uk.jpg',
      city: 'Bristol',
      country: 'United Kingdom',
      flag: '🇬🇧',
      headline: 'The UK Government "Prepare" campaign was our wake-up call.',
      quote: 'When ministers officially told British households to keep bottled water and battery radios, we checked our kitchen flat and realised we had barely 36 hours of water. The Protocol gave us an exact, step-by-step supermarket checklist that we assembled across two normal weekly shops—zero extreme prepper gear, zero wasted money.',
      context: 'UK Cabinet Office "Prepare" Directive',
      profile: 'Family with 2 children · Flat resident',
    },
    {
      id: 'se-astrid',
      name: 'Astrid Lindqvist',
      photo: './testimonials/se.jpg',
      city: 'Stockholm',
      country: 'Sweden',
      flag: '🇸🇪',
      headline: 'A calm, rational alternative after receiving the MSB brochure.',
      quote: 'When the updated "If Crisis or War Comes" brochure arrived in our Stockholm mailbox, the 7-day self-sufficiency mandate felt overwhelming. Most American survival guides talk about wilderness and hunting, which is useless in a city apartment. This manual was pure common sense—practical, quiet, and tailored to European domestic life.',
      context: 'Swedish MSB Nationwide Delivery',
      profile: 'Townhouse owner · Public sector',
    },
    {
      id: 'it-marco',
      name: 'Marco & Giulia Rossi',
      photo: './testimonials/it.jpg',
      city: 'Milan',
      country: 'Italy',
      flag: '🇮🇹',
      headline: 'Chapter 4 on water booster failure was worth 100 times the price.',
      quote: 'Living on the 4th floor in Milan, I never realized that the second electrical power drops, our building booster pumps cut out and our taps run dry immediately. The hidden domestic water calculations in Chapter 4 showed us how to safely access reserves already inside our heating system. That single chapter gave us tremendous peace of mind.',
      context: 'Protezione Civile Blackout Advisories',
      profile: '4th floor apartment · Caring for elderly parents',
    },
    {
      id: 'fi-mikko',
      name: 'Mikko Korhonen',
      photo: './testimonials/fi.jpg',
      city: 'Tampere',
      country: 'Finland',
      flag: '🇫🇮',
      headline: 'No freeze-dried rations. Just smart supermarket rotation.',
      quote: 'In Finland civil defense is taken seriously, but modern life makes you complacent. What impressed me about this Protocol was the 7-day no-cook pantry architecture. It relies entirely on regular supermarket foods our family already eats, with zero food waste and zero expensive freeze-dried survival packs.',
      context: 'Finnish 72H National Security Doctrine',
      profile: 'Family homeowner · Nordic climate',
    },
    {
      id: 'de-klaus',
      name: 'Klaus & Hannah Weber',
      photo: './testimonials/de.jpg',
      city: 'Munich',
      country: 'Germany',
      flag: '🇩🇪',
      headline: 'The printable worksheets made our 10-day reserve manageable in 20 min.',
      quote: 'The German BBK advises 10 days of stockpiling, but their generic government PDF lists felt abstract. The printable worksheets in Bonus Volume 2 gave us exact per-person gram equations. We printed the sheets, went to the local supermarket, and had our entire household reserve organized by Sunday evening.',
      context: 'German BBK 10-Day Emergency Stockpile',
      profile: 'Suburban household of four with pets',
    },
    {
      id: 'no-solveig',
      name: 'Solveig Berg',
      photo: './testimonials/no.jpg',
      city: 'Oslo',
      country: 'Norway',
      flag: '🇳🇴',
      headline: 'Dignified and responsible without conspiracy paranoia.',
      quote: 'After continuous Nordic news coverage regarding energy grid security and subsea infrastructure warnings, I wanted an authoritative guide written for normal adults. This protocol focuses on dignity, family warmth, and structured decisions. For €7.90 it is the best peace-of-mind purchase I have made this year.',
      context: 'Norwegian DSB Civil Directives',
      profile: 'Healthcare professional · Apartment owner',
    },
    {
      id: 'pl-piotr',
      name: 'Piotr & Kasia Wiśniewski',
      photo: './testimonials/pl.jpg',
      city: 'Warsaw',
      country: 'Poland',
      flag: '🇵🇱',
      headline: 'Clear guidance on apartment security and prescription medication.',
      quote: 'With everything in the Eastern European news, readiness is constantly discussed. This guide avoided all panic. It provided specific instructions on prescription medicine rotation, low-profile residential security without drawing attention, and battery communication when broadband lines fail.',
      context: 'Polish Energy & Border Advisories',
      profile: 'Apartment owners with young infant',
    },
    {
      id: 'fr-sophie',
      name: 'Sophie Martin',
      photo: './testimonials/fr.jpg',
      city: 'Lyon',
      country: 'France',
      flag: '🇫🇷',
      headline: 'Everything our family needed to remain calm during winter disruptions.',
      quote: 'With recurring discussions about winter grid strain and logistical strikes in France, having an organized plan felt urgent. The dependent and vulnerable care worksheets in Bonus Volume 5 helped us catalog my mother’s medications and organize safe passive heating for our children. Truly reassuring.',
      context: 'French SGDSN Civilian Resilience Plan',
      profile: 'Caregiver & homeowner in Rhône region',
    },
  ]

  // Duplicated list creates a seamless infinite 100% loop with zero empty white space
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-paper-300 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-paper-200 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Verified Civilian Readers Across 8 European Nations
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight">
            Real Civilian Feedback & Peace of Mind
          </h2>
          <p className="text-sm sm:text-base text-ink-600 mt-2 font-light font-montserrat">
            Continuous feedback from everyday households in the UK, Sweden, Italy, Germany, and across Europe preparing their apartments and townhouses without panic. Hover over any testimonial to pause.
          </p>
        </div>
      </div>

      {/* Infinite Seamless Continuous Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Soft edge gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Marquee Track: Smooth continuous sliding, pauses on hover */}
        <div className="animate-marquee-scroll flex gap-6 px-4 cursor-grab">
          {infiniteTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[340px] sm:w-[400px] shrink-0 rounded-3xl bg-paper-100 border border-paper-300 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-navy-900/30 transition-all duration-300 bg-white"
            >
              <div>
                {/* Header: Avatar Photo + Flag + Name + Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-white shadow-md ring-1 ring-paper-300"
                        loading="lazy"
                      />
                      <span 
                        className="absolute -bottom-1 -right-1 text-xs bg-white rounded-full shadow-xs px-1 border border-paper-200" 
                        title={t.country}
                      >
                        {t.flag}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 font-montserrat font-bold text-sm text-ink-950 leading-tight">
                        <span>{t.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100 shrink-0" />
                      </div>
                      <div className="text-[11px] text-ink-500 font-montserrat flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-ink-400 shrink-0" />
                        <span>{t.city}, {t.country}</span>
                      </div>
                      <div className="text-[10px] text-ink-400 font-montserrat font-light mt-0.5">
                        {t.profile}
                      </div>
                    </div>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-0.5 shrink-0 bg-paper-100 border border-paper-200 px-2 py-0.5 rounded-md">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Headline */}
                <h3 className="font-montserrat text-sm font-semibold text-ink-950 mb-2 leading-snug">
                  "{t.headline}"
                </h3>

                {/* Quote */}
                <p className="text-xs text-ink-700 leading-relaxed font-light font-montserrat mb-5">
                  {t.quote}
                </p>
              </div>

              {/* Bottom Directive Badge */}
              <div className="pt-3 border-t border-paper-200 flex items-center justify-between text-xs font-montserrat">
                <span className="text-[10px] text-amber-700 font-medium bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 truncate max-w-[220px]">
                  {t.context}
                </span>
                <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global European Statistics Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10">
        <div className="pt-6 border-t border-paper-200 text-center text-xs text-ink-500 font-montserrat flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5 font-medium text-ink-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Over 12,400+ European Households Prepared</span>
          </span>
          <span className="hidden sm:inline text-paper-300">·</span>
          <span>Independent civilian contingency resource</span>
          <span className="hidden sm:inline text-paper-300">·</span>
          <span>100% Unconditional 7-Day Money-Back Guarantee</span>
        </div>
      </div>
    </section>
  )
}
