import React, { useState } from 'react'
import { 
  Play, Radio, Clock, Droplets, Utensils, Compass, 
  ArrowRight, Lock, ShieldCheck, FileCheck, CheckCircle2, ShieldAlert 
} from 'lucide-react'

interface HeroProps {
  onOpenLightbox: (src: string) => void
}

interface Takeaway {
  label: string
  text: string
}

interface NewsReport {
  id: string
  network: string
  title: string
  headline: string
  duration: string
  summary: string
  badge: string
  takeaways: Takeaway[]
}

export default function Hero({ onOpenLightbox }: HeroProps) {
  // Mockup angle state - Only digital assets, completely removed physical "In-Hands" photo
  const [activeMockup, setActiveMockup] = useState('./Mockups/1.png')

  const angles = [
    { label: '3D Digital Edition', src: './Mockups/1.png' },
    { label: 'Complete Collection', src: './Mockups/4.png' },
    { label: 'Tablet & Desk View', src: './Mockups/3.png' },
  ]

  // Video reports state with latest Channel 4 News video as #1 default + concrete briefing takeaways
  const reports: NewsReport[] = [
    {
      id: 'bKOXzJqN-Ps',
      network: 'Channel 4 News',
      title: 'UK Government Advice on Stockpiling for Emergencies',
      headline: 'Official UK Household Resilience Advisory',
      duration: '3:15 MIN',
      summary: 'British national news broadcast on the UK Government instructing households to maintain emergency reserves of water, food, and essentials.',
      badge: 'LATEST UK ADVISORY',
      takeaways: [
        {
          label: 'Official Cabinet Office Advisory',
          text: 'Deputy PM instructs British households to store bottled water, non-perishable canned food, and battery gear.',
        },
        {
          label: 'Critical Infrastructure Vulnerability',
          text: 'Guidance accounts for power cuts, cyber disruption, and card payment system failures where supermarkets empty.',
        },
        {
          label: 'Essential Home Equipment',
          text: 'Explicit recommendation for wind-up/battery radios, torches, basic first aid, and critical prescription medicines.',
        },
      ],
    },
    {
      id: 'mm_z4V3-JVM',
      network: 'Sky News',
      title: 'Nordic Governments Issue War & Crisis Advice to Millions',
      headline: 'Sweden & Finland Civilian Directives',
      duration: '3:42 MIN',
      summary: 'Special report on millions of households across northern Europe receiving crisis preparedness brochures for 7-day autonomy.',
      badge: 'EUROPEAN RESILIENCE',
      takeaways: [
        {
          label: '5 Million Households Contacted',
          text: 'Sweden and Finland distributed physical crisis guides to every civilian residence establishing a 7-day autonomy mandate.',
        },
        {
          label: 'Emergency Services Priority',
          text: 'Civil defense states rescue departments will protect hospitals and grid nodes first; citizens must be self-reliant.',
        },
        {
          label: 'Water & Warmth Formulas',
          text: 'Directive requires at least 3 litres of drinking water per person per day plus dry sanitation protocols.',
        },
      ],
    },
    {
      id: 'Zhkv_xekdCM',
      network: 'BBC News',
      title: 'Civil Protection: European Household Stockpiling Directives',
      headline: 'European & British Household Contingency Guidance',
      duration: '2:50 MIN',
      summary: 'BBC analysis on why emergency management authorities are advising civilian families to maintain autonomous home supplies.',
      badge: 'CIVIL CONTINGENCY',
      takeaways: [
        {
          label: 'The 48-Hour Supermarket Buffer',
          text: 'Retail logistics rely on just-in-time replenishment; shelves empty within 3 hours during regional disruptions.',
        },
        {
          label: 'Electric Water Boosters',
          text: 'Flats above ground level lose running tap water immediately during power cuts without manual storage.',
        },
        {
          label: 'Pre-Emptive Preparation',
          text: 'Ministers urge families to buy an extra 2 cans per weekly grocery trip rather than engaging in panic purchases.',
        },
      ],
    },
  ]

  const [activeVideoIndex, setActiveVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const activeReport = reports[activeVideoIndex]

  const handleSelectReport = (index: number) => {
    setActiveVideoIndex(index)
    setIsPlaying(false) // reset to poster view until clicked, preserving zero-lag speed
  }

  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-20 bg-paper-100 border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Reference Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-montserrat font-medium uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Document Reference: UK-EU-2026-RESILIENCE · CIVIL CONTINGENCY
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl text-ink-950 font-semibold tracking-tight leading-[1.18] mb-5 text-center max-w-4xl mx-auto">
          When the power cuts, taps run dry, and shop shelves empty... <br className="hidden sm:inline"/>
          <span className="font-bold text-navy-900">
            Will your family be ready for the next 7 days?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-ink-700 leading-relaxed max-w-3xl mx-auto text-center font-light mb-12">
          As European and British governments urgently instruct citizens to stockpile essentials, discover the calm, practical protocol to protect your household with ordinary items from your weekly shop — without extreme prepper gear, wasted cash, or bunker fantasies.
        </p>

        {/* Integrated 2-Column Showcase: The Problem (Broadcast News) vs The Solution (The Protocol) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14">
          
          {/* Column 1: The Verified News Broadcast (Channel 4 News / Sky / BBC) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-[#0a192f] border border-[#1e3a5f] p-4 sm:p-5 shadow-2xl">
            <div>
              {/* Monitor Top Status Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1e3a5f]/60 text-xs font-montserrat">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className="text-white font-medium text-[11px] uppercase tracking-wider">
                    {activeReport.network}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-amber-400 font-medium text-[10px] hidden sm:inline">
                    {activeReport.badge}
                  </span>
                </div>
                <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-amber-400" />
                  <span>{activeReport.duration}</span>
                </div>
              </div>

              {/* Video Player Canvas: Lite Façade Pattern */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-lg">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeReport.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeReport.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div
                    onClick={() => setIsPlaying(true)}
                    className="relative w-full h-full cursor-pointer group flex items-center justify-center"
                  >
                    {/* High-res static thumbnail from YouTube CDN */}
                    <img
                      src={`https://img.youtube.com/vi/${activeReport.id}/hqdefault.jpg`}
                      alt={activeReport.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-102 transition-all duration-300"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40"></div>

                    {/* Center Glowing Play Button */}
                    <div className="absolute flex flex-col items-center gap-2 z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-ink-950 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-0.5" />
                      </div>
                      <span className="font-montserrat font-semibold text-[11px] sm:text-xs text-white uppercase tracking-wider bg-black/70 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                        Play Report ({activeReport.duration})
                      </span>
                    </div>

                    {/* Lower-Third News Banner Overlay */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 bg-black/80 backdrop-blur-md border border-white/10 p-2 sm:p-2.5 rounded-xl">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="bg-red-600 text-white font-montserrat font-bold text-[9px] uppercase px-1.5 py-0.5 rounded">
                          {activeReport.network}
                        </span>
                        <span className="text-slate-300 font-montserrat text-[10px]">
                          Official Broadcast
                        </span>
                      </div>
                      <h4 className="text-white font-montserrat font-medium text-xs leading-snug line-clamp-1">
                        {activeReport.title}
                      </h4>
                    </div>
                  </div>
                )}
              </div>

              {/* Broadcast Takeaways Briefing: Eliminates empty dead space with high-value takeaways */}
              <div className="mt-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-montserrat">
                <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/10">
                  <span className="text-[10px] font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                    Key Advisory Takeaways
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {activeReport.network} Segment
                  </span>
                </div>
                
                <div className="space-y-1.5">
                  {activeReport.takeaways.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                      <span className="text-slate-300 font-light">
                        <strong className="text-white font-medium">{t.label}:</strong> {t.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Channel Selector Below Video */}
            <div className="mt-3.5 pt-3 border-t border-[#1e3a5f]/60">
              <div className="text-[10px] text-slate-400 font-montserrat mb-1.5 flex items-center justify-between">
                <span>Select verified broadcast:</span>
                <span className="text-amber-400 font-medium">3 European Networks</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {reports.map((r, idx) => {
                  const isCurrent = activeVideoIndex === idx
                  return (
                    <button
                      key={r.id}
                      onClick={() => handleSelectReport(idx)}
                      className={`px-2.5 py-1.5 rounded-xl text-left border transition-all ${
                        isCurrent
                          ? 'bg-amber-500/15 border-amber-500/40 text-white shadow-sm'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="text-[10px] font-montserrat font-bold uppercase truncate text-amber-400">
                        {r.network}
                      </div>
                      <div className="text-[9px] text-slate-300 font-montserrat truncate">
                        {r.duration}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Column 2: The Practical Solution (The 7-Day Survival Protocol - 100% Digital Download) */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-paper-300 rounded-3xl p-5 sm:p-6 shadow-xl shadow-paper-300/40">
            <div>
              {/* Product Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 font-montserrat text-xs font-semibold text-amber-600 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  100% Digital Download · 150 Pages
                </span>
                <span className="text-[11px] font-montserrat text-ink-500 bg-paper-100 px-2 py-0.5 rounded border border-paper-300 font-medium">
                  Instant PDF Access
                </span>
              </div>

              {/* Mockup Display */}
              <div 
                className="relative overflow-hidden rounded-2xl bg-paper-100 flex items-center justify-center cursor-pointer group h-52 sm:h-64"
                onClick={() => onOpenLightbox(activeMockup)}
              >
                <img
                  src={activeMockup}
                  alt="The 7-Day Survival Protocol - Digital Pack"
                  className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute bottom-2.5 right-2.5 bg-navy-900/80 backdrop-blur-sm text-white text-[10px] font-montserrat font-medium px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to inspect
                </div>
              </div>

              {/* Angle Switcher - Digital Only */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {angles.map((angle) => (
                  <button
                    key={angle.src}
                    onClick={() => setActiveMockup(angle.src)}
                    className={`text-[11px] font-montserrat font-medium px-3 py-1 rounded-lg border transition-all ${
                      activeMockup === angle.src
                        ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                        : 'bg-paper-100 text-ink-600 border-paper-300 hover:bg-paper-200'
                    }`}
                  >
                    {angle.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Primary CTA Block */}
            <div className="mt-4 pt-4 border-t border-paper-200">
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <div className="text-[11px] text-ink-500 font-montserrat line-through">
                    Regular Price: €47.00
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-montserrat font-bold text-navy-900">€7.90</span>
                    <span className="text-xs font-montserrat font-medium text-ink-500">(one-time payment)</span>
                  </div>
                </div>
                <span className="text-[11px] font-montserrat font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  83% Civil Discount
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#pricing"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white font-montserrat font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-lg shadow-navy-900/20 transition-all hover:-translate-y-0.5 text-center"
                >
                  <span>Order The 7-Day Protocol (€7.90)</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </a>

                <a
                  href="#deliverable"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-paper-200 text-ink-800 font-montserrat font-medium text-xs sm:text-sm px-4 py-3.5 rounded-xl border border-paper-300 transition-all text-center shrink-0"
                >
                  <FileCheck className="w-4 h-4 text-ink-500" />
                  <span>Inspect Inside</span>
                </a>
              </div>

              <div className="flex items-center justify-between text-[11px] text-ink-500 font-montserrat mt-3 pt-2">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>Instant PDF (Phone, Tablet, Print)</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>7-Day Money-Back Guarantee</span>
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-paper-300 shadow-sm">
            <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-montserrat font-semibold text-ink-900">The First 60 Minutes</h4>
              <p className="text-xs text-ink-600 leading-normal mt-0.5 font-light font-montserrat">Critical procedures to isolate water and secure resources before panic begins.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-paper-300 shadow-sm">
            <Droplets className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-montserrat font-semibold text-ink-900">Hidden Water Equation</h4>
              <p className="text-xs text-ink-600 leading-normal mt-0.5 font-light font-montserrat">How to safely tap up to 200L inside domestic pipes and hot water cylinders.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-paper-300 shadow-sm">
            <Utensils className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-montserrat font-semibold text-ink-900">7-Day No-Power Menu</h4>
              <p className="text-xs text-ink-600 leading-normal mt-0.5 font-light font-montserrat">Balanced family nutrition using ordinary shelf items with zero gas or cooking.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-paper-300 shadow-sm">
            <Compass className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-montserrat font-semibold text-ink-900">Stay or Evacuate Matrix</h4>
              <p className="text-xs text-ink-600 leading-normal mt-0.5 font-light font-montserrat">Technical, objective triggers to know when home is safe vs. when to leave.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
