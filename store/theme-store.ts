'use client'

import { create } from 'zustand'

type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const applyThemeClass = (theme: Theme) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark)
  root.classList.toggle('dark', isDark)
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  setTheme: (theme) => {
    set({ theme })
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('zarlion-theme', theme)
      applyThemeClass(theme)
    }
  }
}))

export const initThemeFromStorage = () => {
  if (typeof window === 'undefined') return
  const saved = (window.localStorage.getItem('zarlion-theme') as Theme | null) ?? 'system'
  useThemeStore.setState({ theme: saved })
  applyThemeClass(saved)
}
