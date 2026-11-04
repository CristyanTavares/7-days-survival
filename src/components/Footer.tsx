import React from 'react'
import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-paper-100 py-16 border-t border-paper-300 text-xs text-ink-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-paper-300">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-navy-900 text-amber-500 flex items-center justify-center font-montserrat text-sm font-bold">
              <Shield className="w-4 h-4 text-amber-500" />
            </div>
            <span className="font-montserrat text-base font-bold text-ink-900">
              The 7-Day Survival Protocol™
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-ink-600 font-medium">
            <a href="#directives" className="hover:text-navy-900 transition-colors">Official Directives</a>
            <a href="#chapters" className="hover:text-navy-900 transition-colors">The 12 Chapters</a>
            <a href="#deliverable" className="hover:text-navy-900 transition-colors">Book Preview</a>
            <a href="#workbooks" className="hover:text-navy-900 transition-colors">Workbooks</a>
            <a href="#pricing" className="hover:text-navy-900 transition-colors">Order Guide</a>
          </div>
        </div>

        <div className="pt-8 text-center max-w-3xl mx-auto leading-relaxed text-ink-500 text-[11px]">
          <p className="mb-3">
            <strong>Civilian Resilience Disclaimer:</strong> The 7-Day Survival Protocol is an independent educational publication for civilian household resilience and contingency planning. It does not replace official instructions from national civil defense authorities, emergency services, fire departments, or the police. In any life-threatening emergency, always contact your national emergency number (999 in the UK, 112 across Europe).
          </p>
          <p>
            All rights reserved © 2026. The 7-Day Survival Protocol. Published under UK & European civilian domestic preparedness guidelines.
          </p>
        </div>

      </div>
    </footer>
  )
}
