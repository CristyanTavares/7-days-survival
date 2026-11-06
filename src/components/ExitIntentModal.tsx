import React, { useEffect, useState, useRef } from 'react'
import { WifiOff, ShieldCheck, ArrowRight, X, Download, CheckCircle2 } from 'lucide-react'
import { useCurrency } from '../context/CurrencyContext'
import { redirectTo, buildUrlWithCurrentParams } from '../utils/navigation'
import { CHECKOUT_URL } from '../config/checkout'

const STORAGE_KEY = 'survival_exit_modal_shown_v1'

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentCurrency } = useCurrency()
  const hasReached30PercentRef = useRef(false)
  const lastScrollYRef = useRef(0)
  const lastScrollTimeRef = useRef(Date.now())
  const historyPushedRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return

    const triggerModal = () => {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return
      sessionStorage.setItem(STORAGE_KEY, '1')
      setIsOpen(true)
    }

    // 1. Desktop Exit-Intent: mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && e.relatedTarget === null) {
        triggerModal()
      }
    }

    // 2. Scroll tracking: mark when 30% scroll depth is reached, then detect fast upward scroll
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      )
      const scrollPercent = scrollTop / docHeight

      // Push history state once user starts scrolling so Mobile Back Button can be intercepted
      if (scrollTop > 80 && !historyPushedRef.current && sessionStorage.getItem(STORAGE_KEY) !== '1') {
        try {
          window.history.pushState({ exitIntentGuard: true }, '', window.location.href)
          historyPushedRef.current = true
        } catch {
          // ignore history errors
        }
      }

      if (scrollPercent >= 0.30) {
        hasReached30PercentRef.current = true
      }

      const now = Date.now()
      const dt = Math.max(now - lastScrollTimeRef.current, 1)
      const dy = scrollTop - lastScrollYRef.current

      // If user already scrolled past 30% and rapidly scrolls upward
      if (hasReached30PercentRef.current && dy < -55 && dt < 180) {
        triggerModal()
      }

      lastScrollYRef.current = scrollTop
      lastScrollTimeRef.current = now
    }

    // 3. Mobile / Browser Back-Button Intercept
    const handlePopState = () => {
      if (sessionStorage.getItem(STORAGE_KEY) !== '1') {
        triggerModal()
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('popstate', handlePopState)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-4 animate-fadeIn"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white border-2 border-navy-900 shadow-2xl overflow-hidden text-ink-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Urgent Offline Advisory Bar */}
        <div className="bg-[#0a192f] text-white px-5 py-3 flex items-center justify-between gap-2 border-b border-navy-800">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 shrink-0">
              <WifiOff className="w-3.5 h-3.5 text-amber-400" />
            </span>
            <span className="font-montserrat text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">
              Offline Contingency Advisory
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close warning"
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="p-5 sm:p-7">
          <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-ink-950 leading-snug mb-3">
            Before you leave — use your internet connection now to download what could save your family when it is already too late.
          </h3>

          <p className="text-xs sm:text-sm text-ink-700 font-montserrat leading-relaxed mb-4">
            When a power cut or crisis hits, cell towers and home Wi-Fi fail rapidly. You will not be able to search Google or open websites. Once downloaded, <strong>The 7-Day Survival Protocol™ requires zero internet to open</strong> on your phone, tablet, or in print. <strong>Be prepared!</strong>
          </p>

          {/* Key Offline Advantages */}
          <div className="rounded-2xl bg-paper-100 border border-paper-300 p-3.5 sm:p-4 space-y-2 mb-5 text-xs font-montserrat text-ink-800">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>100% Offline Access:</strong> Opens anytime on your phone or tablet without Wi-Fi or mobile signal.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Complete 150-Page Pack:</strong> 100-page core manual + all 6 printable workbooks ({currentCurrency.workbookValue} value free).</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>7-Day Money-Back Guarantee:</strong> Download and read it now — 100% refund if not satisfied.</span>
            </div>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-ink-400 line-through font-montserrat">
                Regular {currentCurrency.symbol}{currentCurrency.regular}
              </span>
              <span className="text-xs font-montserrat font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                {currentCurrency.discount} Off
              </span>
            </div>
            <div className="font-montserrat text-right">
              <span className="text-2xl font-bold text-navy-900">
                {currentCurrency.symbol}{currentCurrency.price}
              </span>
              <span className="text-[11px] text-ink-500 ml-1">one-time</span>
            </div>
          </div>

          <a
            href={buildUrlWithCurrentParams(CHECKOUT_URL)}
            onClick={(e) => {
              e.preventDefault()
              redirectTo(CHECKOUT_URL)
            }}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-navy-800 text-white font-montserrat font-semibold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-xl shadow-navy-900/25 transition-all hover:-translate-y-0.5 text-center cursor-pointer"
          >
            <Download className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Download Offline Protocol Now ({currentCurrency.symbol}{currentCurrency.price})</span>
            <ArrowRight className="w-4 h-4 text-amber-500 shrink-0" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 py-1.5 text-center text-xs font-montserrat text-ink-500 hover:text-ink-800 transition-colors cursor-pointer"
          >
            Continue reading the page
          </button>
        </div>
      </div>
    </div>
  )
}
