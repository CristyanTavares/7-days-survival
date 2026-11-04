import React, { useState } from 'react'
import { Play, Tv, Radio, CheckCircle2, ShieldAlert } from 'lucide-react'

interface NewsReport {
  id: string
  network: string
  title: string
  headline: string
  duration: string
  summary: string
  badge: string
}

export default function NewsVideoDossier() {
  const reports: NewsReport[] = [
    {
      id: 'bKOXzJqN-Ps',
      network: 'Channel 4 News',
      title: 'UK Government Advice on Stockpiling for Emergencies',
      headline: 'Channel 4 News Broadcast: Official UK Household Resilience Advisory',
      duration: '3:15 MIN',
      summary: 'Mainstream British news broadcast covering the UK Government instructing households to maintain emergency stockpiles of bottled water, non-perishable food, and battery gear for national disruptions.',
      badge: 'LATEST UK ADVISORY',
    },
    {
      id: 'mm_z4V3-JVM',
      network: 'Sky News',
      title: 'Nordic Governments Issue Crisis & War Advice to Millions of Homes',
      headline: 'Sky News World Coverage: Sweden & Finland Civilian Directives',
      duration: '3:42 MIN',
      summary: 'Special international report detailing why millions of households across northern Europe are receiving physical contingency brochures and instructions to hold 7-day water and food reserves.',
      badge: 'EUROPEAN RESILIENCE',
    },
    {
      id: 'Zhkv_xekdCM',
      network: 'BBC News',
      title: 'Why European Nations Are Urging Citizens to Assemble Emergency Kits',
      headline: 'BBC News Analysis: European & British Household Contingency Guidance',
      duration: '2:50 MIN',
      summary: 'BBC analysis examining why emergency management authorities across Europe and the UK are advising civilian families to maintain autonomous home supplies for water, lighting, and nutrition.',
      badge: 'CIVIL CONTINGENCY',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const activeReport = reports[activeIndex]

  const handleSelectReport = (index: number) => {
    setActiveIndex(index)
    setIsPlaying(false) // reset to poster view until clicked, preserving zero-lag speed
  }

  return (
    <section id="news-reports" className="py-20 bg-paper-100 border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-paper-300 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-4 shadow-sm">
            <Tv className="w-3.5 h-3.5 text-navy-900" />
            Verified European Broadcasts
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight mb-4">
            Watch How European Media Is Reporting <br className="hidden sm:inline"/>
            The Civilian Stockpiling Directives
          </h2>
          <p className="text-base text-ink-600 leading-relaxed font-light font-montserrat">
            From London to Stockholm and Berlin, international news agencies are actively broadcasting government instructions. See why public agencies consider 7 days of home resilience essential.
          </p>
        </div>

        {/* Video Player Display: Lite Façade Pattern (Zero initial page speed penalty) */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="rounded-3xl bg-[#0a192f] border border-[#1e3a5f] p-3 sm:p-5 shadow-2xl">
            
            {/* Monitor Top Status Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#1e3a5f]/60 mb-3 text-xs font-montserrat">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-white font-medium tracking-wider text-[11px] uppercase">
                  Broadcast Coverage Archive
                </span>
                <span className="text-slate-400 hidden sm:inline">·</span>
                <span className="text-amber-400 font-medium text-[11px] hidden sm:inline">
                  {activeReport.badge}
                </span>
              </div>
              <div className="text-slate-400 text-[11px] font-medium flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-amber-400" />
                <span>{activeReport.duration}</span>
              </div>
            </div>

            {/* Video Canvas */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
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
                  <div className="absolute flex flex-col items-center gap-3 z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-500 hover:bg-amber-400 text-ink-950 flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                      <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                    </div>
                    <span className="font-montserrat font-semibold text-xs sm:text-sm text-white uppercase tracking-wider bg-black/60 px-3.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      Click to Play Report ({activeReport.duration})
                    </span>
                  </div>

                  {/* Lower-Third News Banner Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-red-600 text-white font-montserrat font-bold text-[10px] uppercase px-2 py-0.5 rounded">
                        {activeReport.network}
                      </span>
                      <span className="text-slate-300 font-montserrat text-xs">
                        Official News Broadcast
                      </span>
                    </div>
                    <h3 className="text-white font-montserrat font-medium text-sm sm:text-base leading-snug">
                      {activeReport.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 3 Report Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reports.map((r, idx) => {
            const isCurrent = activeIndex === idx
            return (
              <button
                key={r.id}
                onClick={() => handleSelectReport(idx)}
                className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-navy-900 shadow-md ring-2 ring-navy-900/10'
                    : 'bg-white/70 border-paper-300 hover:bg-white hover:border-paper-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`font-montserrat text-xs font-semibold uppercase tracking-wider ${
                      isCurrent ? 'text-amber-600' : 'text-ink-600'
                    }`}>
                      {r.network}
                    </span>
                    <span className="font-montserrat text-[10px] text-ink-500 bg-paper-100 px-2 py-0.5 rounded border border-paper-300 font-medium">
                      {r.duration}
                    </span>
                  </div>
                  <h4 className="font-montserrat font-medium text-xs sm:text-sm text-ink-950 mb-1.5 leading-snug">
                    {r.title}
                  </h4>
                  <p className="font-montserrat font-light text-[11px] text-ink-600 leading-relaxed">
                    {r.summary}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-paper-200 flex items-center justify-between text-[11px] font-montserrat font-medium">
                  <span className={isCurrent ? 'text-navy-900' : 'text-ink-500'}>
                    {isCurrent ? '● Currently Loaded' : 'Click to Load Video'}
                  </span>
                  <Play className={`w-3.5 h-3.5 ${isCurrent ? 'text-amber-600 fill-current' : 'text-ink-400'}`} />
                </div>
              </button>
            )
          })}
        </div>

        {/* Authority Guarantee Note */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs text-ink-600 font-montserrat font-light">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Independent European news coverage confirms the validity of civilian household preparedness mandates.</span>
          </div>
        </div>

      </div>
    </section>
  )
}
