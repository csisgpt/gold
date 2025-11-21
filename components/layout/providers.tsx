'use client'

import { ReactNode, useEffect } from 'react'
import { initThemeFromStorage } from '@/store/theme-store'

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  useEffect(() => {
    initThemeFromStorage()
  }, [])

  return <>{children}</>
}
