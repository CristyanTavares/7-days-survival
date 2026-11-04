import React, { useState } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Do I need expensive military or survival gear?',
      a: 'No. The entire system is engineered around standard items you can buy during normal weekly shopping at Tesco, Aldi, Carrefour, Lidl, or your local chemist and hardware shop. You will assemble your reserves gradually without expensive tactical equipment.',
    },
    {
      q: 'I live in an urban apartment with zero extra storage. Will this work for me?',
      a: 'Yes. Chapters 03 and 04 were specifically written for compact European flats. You will learn vertical stacking principles and how to tap clean water already contained within your domestic hot water cylinder and pipework without cluttering your living space.',
    },
    {
      q: 'How and when do I receive the protocol?',
      a: 'Delivery is immediate. The moment your order completes, you will receive direct download links via email to both the 100-page Core Protocol and the 50-page workbook. You can read them immediately on your phone, tablet, laptop, or print them as A4 worksheets.',
    },
    {
      q: 'Does this guide recommend dangerous or improvised methods?',
      a: 'Strictly no. The protocol complies fully with European Civil Protection and National Health safety directives. We explicitly warn against and prohibit dangerous improvisations such as burning camping stoves indoors (carbon monoxide risk), risky DIY electrical work, or unverified water purification chemicals.',
    },
    {
      q: 'What if I have young children, elderly relatives, or pets?',
      a: 'Chapter 11 and Bonus Volume 4 are completely dedicated to vulnerable dependents. You will find guidelines for infant nutrition, reassuring anxious young children, managing chronic prescription medication for seniors, and proper water and food storage for domestic dogs and cats.',
    },
    {
      q: 'What is your refund policy?',
      a: 'You are protected by our 7-day unconditional money-back guarantee. If you review the 100-page manual and 50-page workbook and feel they do not provide clear, practical peace of mind for your family, simply email us within 7 days for an immediate 100% refund.',
    },
  ]

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-20 bg-white border-b border-paper-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-paper-200 text-ink-700 text-xs font-montserrat font-medium uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-navy-900" />
            Common Inquiries
          </div>
          <h2 className="font-montserrat text-3xl sm:text-4xl text-ink-950 font-medium tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-ink-600 mt-2 font-light font-montserrat">
            Straightforward answers about The 7-Day Survival Protocol.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className="rounded-2xl border border-paper-300 bg-paper-100 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-bold text-base text-ink-900 hover:text-navy-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-ink-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-navy-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-ink-700 leading-relaxed border-t border-paper-200 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
