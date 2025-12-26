'use client'

import { useState } from 'react'
import { DownloadModal } from './DownloadModal'

interface DownloadButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export function DownloadButton({ variant = 'primary', size = 'md', children, className = '' }: DownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full border font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer'

  const variantClasses = {
    primary: 'border-transparent bg-mauve-950 text-white hover:bg-mauve-800 focus-visible:outline-mauve-950 dark:bg-white dark:text-mauve-950 dark:hover:bg-mauve-50',
    secondary: 'border-transparent bg-mauve-100 text-mauve-950 hover:bg-mauve-200 focus-visible:outline-mauve-950 dark:bg-mauve-800 dark:text-white dark:hover:bg-mauve-700'
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-base'
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        {children}
      </button>
      <DownloadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
