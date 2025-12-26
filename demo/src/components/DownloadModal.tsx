'use client'

import { useState } from 'react'
import { ButtonLink } from '@/components/elements/button'

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  if (!isOpen) return null

  const downloadUrls = {
    macos: process.env.NEXT_PUBLIC_DOWNLOAD_URL_MACOS || '#',
    windows: process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS || '#',
    linux: process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX || '#',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-mauve-900 rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-in fade-in zoom-in duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-mauve-500 hover:text-mauve-700 dark:text-mauve-400 dark:hover:text-mauve-200"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-semibold text-mauve-950 dark:text-white mb-2">
            Download Lighthouse
          </h2>
          <p className="text-mauve-600 dark:text-mauve-400">
            Choose your platform to get started
          </p>
        </div>

        {/* Download options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* macOS */}
          <a
            href={downloadUrls.macos}
            className="group flex flex-col items-center p-6 rounded-xl border-2 border-mauve-200 dark:border-mauve-700 hover:border-mauve-400 dark:hover:border-mauve-500 hover:shadow-lg hover:shadow-mauve-400/50 dark:hover:shadow-mauve-500/50 transition-all duration-200"
          >
            <div className="w-20 h-20 mb-4 text-mauve-700 dark:text-mauve-300 group-hover:scale-110 transition-transform duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-mauve-950 dark:text-white mb-1">macOS</h3>
            <p className="text-sm text-mauve-600 dark:text-mauve-400 text-center mb-3">
              Apple Silicon & Intel
            </p>
            <span className="text-xs text-mauve-500 dark:text-mauve-500 group-hover:text-mauve-700 dark:group-hover:text-mauve-300">
              Universal .dmg
            </span>
          </a>

          {/* Windows */}
          <a
            href={downloadUrls.windows}
            className="group flex flex-col items-center p-6 rounded-xl border-2 border-mauve-200 dark:border-mauve-700 hover:border-mauve-400 dark:hover:border-mauve-500 hover:shadow-lg hover:shadow-mauve-400/50 dark:hover:shadow-mauve-500/50 transition-all duration-200"
          >
            <div className="w-20 h-20 mb-4 text-mauve-700 dark:text-mauve-300 group-hover:scale-110 transition-transform duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-mauve-950 dark:text-white mb-1">Windows</h3>
            <p className="text-sm text-mauve-600 dark:text-mauve-400 text-center mb-3">
              For Windows PCs
            </p>
            <span className="text-xs text-mauve-500 dark:text-mauve-500 group-hover:text-mauve-700 dark:group-hover:text-mauve-300">
              Download .exe
            </span>
          </a>

          {/* Linux */}
          <a
            href={downloadUrls.linux}
            className="group flex flex-col items-center p-6 rounded-xl border-2 border-mauve-200 dark:border-mauve-700 hover:border-mauve-400 dark:hover:border-mauve-500 hover:shadow-lg hover:shadow-mauve-400/50 dark:hover:shadow-mauve-500/50 transition-all duration-200"
          >
            <div className="w-20 h-20 mb-4 text-mauve-700 dark:text-mauve-300 group-hover:scale-110 transition-transform duration-200">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.581,19.049c-0.55-3.047-2.795-3.9-3.25-5.988c-0.138-0.628,0.077-1.203,0.271-1.783 c0.219-0.656,0.53-1.365,0.395-2.193c-0.074-0.445-0.295-0.843-0.627-1.146c-0.214-0.195-0.476-0.323-0.753-0.389 c-0.549-0.128-1.069,0.045-1.561,0.246c-0.492,0.201-0.968,0.451-1.423,0.737c-0.88,0.552-1.654,1.259-2.248,2.088 c-0.593-0.83-1.368-1.536-2.248-2.088c-0.455-0.286-0.931-0.536-1.423-0.737c-0.492-0.201-1.012-0.374-1.561-0.246 c-0.277,0.066-0.539,0.194-0.753,0.389c-0.332,0.303-0.553,0.701-0.627,1.146c-0.135,0.828,0.176,1.537,0.395,2.193 c0.194,0.58,0.409,1.155,0.271,1.783c-0.455,2.088-2.7,2.941-3.25,5.988c-0.121,0.673,0.05,1.395,0.478,1.943 c0.428,0.548,1.078,0.875,1.747,0.875H3.14c0.144,0.007,0.287,0.014,0.432,0.014c2.875,0,5.269-0.961,6.928-2.785 c1.66,1.824,4.053,2.785,6.928,2.785c0.145,0,0.288-0.007,0.432-0.014h1.167c0.669,0,1.319-0.327,1.747-0.875 C20.531,20.444,20.702,19.722,20.581,19.049z M8.5,14.5c-0.828,0-1.5-0.896-1.5-2s0.672-2,1.5-2s1.5,0.896,1.5,2 S9.328,14.5,8.5,14.5z M15.5,14.5c-0.828,0-1.5-0.896-1.5-2s0.672-2,1.5-2s1.5,0.896,1.5,2S16.328,14.5,15.5,14.5z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-mauve-950 dark:text-white mb-1">Linux</h3>
            <p className="text-sm text-mauve-600 dark:text-mauve-400 text-center mb-3">
              For Linux systems
            </p>
            <span className="text-xs text-mauve-500 dark:text-mauve-500 group-hover:text-mauve-700 dark:group-hover:text-mauve-300">
              Download .AppImage
            </span>
          </a>
        </div>

        {/* Footer note */}
        <div className="mt-8 p-4 bg-mauve-50 dark:bg-mauve-800/50 rounded-lg">
          <p className="text-sm text-mauve-700 dark:text-mauve-300 text-center">
            Need help installing? Check out our{' '}
            <a href="/docs" className="font-semibold text-mauve-900 dark:text-mauve-100 hover:underline">
              installation guide
            </a>
            {' '}for step-by-step instructions.
          </p>
        </div>
      </div>
    </div>
  )
}

export function useDownloadModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return { isOpen, openModal, closeModal }
}
