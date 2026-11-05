import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import OfficialContext from './components/OfficialContext'
import ChaptersDirectory from './components/ChaptersDirectory'
import DeliverableCarousel from './components/DeliverableCarousel'
import WorkbookBonus from './components/WorkbookBonus'
import LifestyleContext from './components/LifestyleContext'
import TestimonialsCarousel from './components/TestimonialsCarousel'
import PricingOffer from './components/PricingOffer'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'
import LightboxModal from './components/LightboxModal'
import { CurrencyProvider } from './context/CurrencyContext'

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-paper-100 flex flex-col font-sans">
        <Header />
        <main className="flex-1">
          <Hero onOpenLightbox={(src) => setLightboxSrc(src)} />
          <OfficialContext />
          <ChaptersDirectory onOpenLightbox={(src) => setLightboxSrc(src)} />
          <DeliverableCarousel onOpenLightbox={(src) => setLightboxSrc(src)} />
          <WorkbookBonus />
          <LifestyleContext />
          <TestimonialsCarousel />
          <PricingOffer />
          <FAQ />
        </main>
        <Footer />
        <StickyBar />
        <LightboxModal src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      </div>
    </CurrencyProvider>
  )
}
