import React, { useState, useEffect } from 'react'
import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function StickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-paper-300 py-3.5 px-4 shadow-xl transition-transform duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex w-8 h-8 rounded-lg bg-navy-900 text-amber-500 items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-ink-950 font-montserrat">
              The 7-Day Survival Protocol™ (150 Pages)
            </div>
            <div className="text-[11px] text-ink-500 font-montserrat font-medium hidden sm:block">
              Core Manual + 6 Workbooks · €7.90
            </div>
          </div>
        </div>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md shrink-0 font-montserrat"
        >
          <span>Get Instant Access (€7.90)</span>
          <ArrowRight className="w-4 h-4 text-amber-500" />
        </a>
      </div>
    </div>
  )
}
