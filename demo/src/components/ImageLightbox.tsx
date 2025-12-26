'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageLightboxProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function ImageLightbox({ src, alt, width, height, className = '' }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scale, setScale] = useState(1)

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setScale(1)
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.25, 0.5))
  const handleReset = () => setScale(1)

  const handleClose = () => {
    setIsOpen(false)
    setScale(1)
  }

  return (
    <>
      {/* Thumbnail - clickable */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${className}`}
      />

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          {/* Controls Bar */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
            {/* Zoom Out */}
            <button
              onClick={handleZoomOut}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Zoom out"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
            </button>

            {/* Zoom Level */}
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              {Math.round(scale * 100)}%
            </span>

            {/* Zoom In */}
            <button
              onClick={handleZoomIn}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Zoom in"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Reset zoom"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image Container */}
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-auto">
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `scale(${scale})` }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Hint Text */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <p className="text-sm text-white/70">
              Click outside or press <kbd className="rounded bg-white/10 px-2 py-1 text-xs">ESC</kbd> to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}
