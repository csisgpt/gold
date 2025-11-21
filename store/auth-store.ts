'use client'

import { create } from 'zustand'

type Role = 'user' | 'admin'

interface AuthState {
  user: { id: string; name: string; role: Role } | null
  isAuthenticated: boolean
  loginAsUser: () => void
  loginAsAdmin: () => void
  logout: () => void
}

const fakeUsers = {
  user: { id: 'u-1', name: 'کاربر زرین', role: 'user' as Role },
  admin: { id: 'a-1', name: 'مدیر زرلاین', role: 'admin' as Role }
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loginAsUser: () => set({ user: fakeUsers.user, isAuthenticated: true }),
  loginAsAdmin: () => set({ user: fakeUsers.admin, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false })
}))
