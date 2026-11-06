import React, { useEffect, useState, useRef } from 'react'
import { WifiOff, ShieldCheck, ArrowRight, X, Download, CheckCircle2 } from 'lucide-react'
import { useCurrency } from '../context/CurrencyContext'
import { redirectTo, buildUrlWithCurrentParams } from '../utils/navigation'
import { CHECKOUT_URL } from '../config/checkout'

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentCurrency } = useCurrency()

  const hasShownModalRef = useRef(false)
  const hasReached30PercentRef = useRef(false)
  const maxScrollYRef = useRef(0)
  const historyArmedRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const openModalOnce = () => {
      if (hasShownModalRef.current) return
      hasShownModalRef.current = true
      setIsOpen(true)
    }

    // Arm the "screen before the site" history state as soon as the browser grants User Activation (any tap/click).
    // Note: In Chrome/Safari mobile, a scroll gesture (touchmove/touchend) does NOT grant userActivation;
    // only a tap/click grants userActivation. So we check navigator.userActivation before locking historyArmedRef.
    const tryArmHistoryGuard = () => {
      if (historyArmedRef.current) return

      const ua = (navigator as unknown as { userActivation?: { isActive?: boolean; hasBeenActive?: boolean } }).userActivation
      const isActivated = ua ? Boolean(ua.isActive || ua.hasBeenActive) : true
      if (!isActivated) return

      historyArmedRef.current = true
      try {
        // Entry #1 (the "screen before the site"): modal trigger state
        window.history.replaceState({ survivalExitModal: true }, '', window.location.pathname + window.location.search)
        // Entry #2 (current active view): main site state
        window.history.pushState({ survivalMainSite: true }, '', window.location.pathname + window.location.search + '#protocol')
      } catch {
        // ignore history errors
      }
    }

    // 1. Mobile / Browser Back-Button Intercept:
    // When user presses Back, browser moves from Entry #2 (#protocol) back to Entry #1, firing popstate
    const handlePopState = () => {
      if (!hasShownModalRef.current) {
        openModalOnce()
      }
    }

    // 2. Desktop Exit-Intent: mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && e.relatedTarget === null) {
        openModalOnce()
      }
    }

    // 3. Mobile & Desktop Scroll-Up Exit Intent:
    // Once user reaches 30% of the page, track the deepest scroll point (maxScrollYRef).
    // When they scroll back up by 160px+ from their deepest point, show the modal.
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      )
      const scrollPercent = scrollTop / docHeight

      if (scrollTop > maxScrollYRef.current) {
        maxScrollYRef.current = scrollTop
      }

      if (scrollPercent >= 0.30) {
        hasReached30PercentRef.current = true
      }

      // If user has passed 30% of the page and scrolls upward at least 160px from their deepest point
      if (
        hasReached30PercentRef.current &&
        !hasShownModalRef.current &&
        maxScrollYRef.current - scrollTop >= 160
      ) {
        openModalOnce()
      }
    }

    window.addEventListener('click', tryArmHistoryGuard, { capture: true, passive: true })
    window.addEventListener('pointerup', tryArmHistoryGuard, { capture: true, passive: true })
    window.addEventListener('touchend', tryArmHistoryGuard, { capture: true, passive: true })
    window.addEventListener('keydown', tryArmHistoryGuard, { capture: true, passive: true })
    window.addEventListener('popstate', handlePopState)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('click', tryArmHistoryGuard, { capture: true })
      window.removeEventListener('pointerup', tryArmHistoryGuard, { capture: true })
      window.removeEventListener('touchend', tryArmHistoryGuard, { capture: true })
      window.removeEventListener('keydown', tryArmHistoryGuard, { capture: true })
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('scroll', handleScroll)
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
            When a power cut or crisis hits, cell towers and home Wi-Fi fail rapidly. You will not be able to search Google or open websites. Once downloaded, <strong>The 7-Day Survival Protocol™ requires zero internet to open</strong> on your phone, tablet, or in print. <strong>Be ready!</strong>
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
            href={buildUrlWithCurrentParams(CHECKOUT_URL, 'exit_modal')}
            onClick={(e) => {
              e.preventDefault()
              redirectTo(CHECKOUT_URL, 'exit_modal')
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
