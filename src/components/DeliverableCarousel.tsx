import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react'

interface CarouselProps {
  onOpenLightbox: (src: string) => void
}

export default function DeliverableCarousel({ onOpenLightbox }: CarouselProps) {
  const slides = [
    {
      src: './deliverable_previews/page-001.webp',
      code: 'Page 001',
      title: 'Official Cover',
      desc: 'The complete UK & European civilian edition.',
    },
    {
      src: './deliverable_previews/page-005.webp',
      code: 'Page 005',
      title: 'The 100-Page Route',
      desc: 'Master roadmap of essential household modules.',
    },
    {
      src: './deliverable_previews/page-009.webp',
      code: 'Page 009',
      title: 'Your First Hour',
      desc: 'Immediate procedures when a normal day changes.',
    },
    {
      src: './deliverable_previews/page-027.webp',
      code: 'Page 027',
      title: 'Water Calculation',
      desc: 'Accurate formulas for drinking, cooking & hygiene.',
    },
    {
      src: './deliverable_previews/page-037.webp',
      code: 'Page 037',
      title: 'Food Stockpile',
      desc: 'Standard non-perishable pantry organization.',
    },
    {
      src: './deliverable_previews/page-047.webp',
      code: 'Page 047',
      title: '7-Day Action Plan',
      desc: 'Complete nutrition without gas or electricity.',
    },
    {
      src: './deliverable_previews/page-081.webp',
      code: 'Page 081',
      title: 'Stay or Evacuate',
      desc: 'Objective decision matrix for critical moments.',
    },
    {
      src: './deliverable_previews/page-101.webp',
      code: 'Bonus B001',
      title: 'Household Profile',
      desc: 'Printable A4 worksheet for family emergency data.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))
  }

  return (
    <section id="deliverable" className="py-20 bg-white border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-paper-200 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-3">
              <Eye className="w-3.5 h-3.5 text-navy-900" />
              Inside The Deliverable
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight">
              Review The Actual Published Pages
            </h2>
            <p className="text-sm sm:text-base text-ink-600 mt-2 max-w-xl font-light font-montserrat">
              Clear visual layouts, zero jargon, and high-legibility typography designed to be readable on phones, tablets, or printed as A4 workbooks.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-xl border border-paper-300 bg-paper-100 hover:bg-paper-200 flex items-center justify-center text-ink-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-xl border border-paper-300 bg-paper-100 hover:bg-paper-200 flex items-center justify-center text-ink-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {slides.slice(currentIndex, currentIndex + 4).concat(
            currentIndex + 4 > slides.length 
              ? slides.slice(0, (currentIndex + 4) % slides.length) 
              : []
          ).map((s, idx) => (
            <div
              key={s.src + idx}
              onClick={() => onOpenLightbox(s.src)}
              className="group rounded-2xl bg-paper-100 border border-paper-300 overflow-hidden cursor-pointer hover:border-navy-900 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-white p-2">
                <img
                  src={s.src}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-sm text-white font-montserrat font-medium text-[10px] px-2 py-0.5 rounded">
                  {s.code}
                </div>
              </div>

              <div className="p-4 border-t border-paper-300 bg-white">
                <h4 className="text-sm font-bold text-ink-900 group-hover:text-navy-900 transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs text-ink-500 mt-1 leading-normal">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
