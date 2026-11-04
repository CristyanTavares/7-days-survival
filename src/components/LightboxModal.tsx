import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface LightboxProps {
  src: string | null
  onClose: () => void
}

export default function LightboxModal({ src, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (src) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [src, onClose])

  if (!src) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-navy-900/80 text-white flex items-center justify-center hover:bg-navy-900 transition-colors shadow-md"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={src}
          alt="Enlarged view"
          className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
        />
      </div>
    </div>
  )
}
