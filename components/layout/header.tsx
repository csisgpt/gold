'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { Moon, Sun } from 'lucide-react'
import { routes } from '@/lib/routes'
import { useThemeStore } from '@/store/theme-store'
import { useAuthStore } from '@/store/auth-store'
import { Button } from '@/components/ui/button'

export const Header = () => {
  const { theme, setTheme } = useThemeStore()
  const { isAuthenticated, user, loginAsUser, loginAsAdmin, logout } = useAuthStore()

  const themeIcon = useMemo(() => (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />), [theme])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <Link href={routes.home} className="text-lg font-semibold text-primary">
            زرلاین
          </Link>
          <nav className="hidden gap-4 text-sm font-medium md:flex">
            <Link href={routes.home} className="hover:text-primary">
              خانه
            </Link>
            <Link href={routes.landing} className="hover:text-primary">
              خرید طلای آب‌شده
            </Link>
            <Link href={routes.faq} className="hover:text-primary">
              سوالات متداول
            </Link>
            <Link href={routes.terms} className="hover:text-primary">
              قوانین و مقررات
            </Link>
            <Link href={routes.docs} className="hover:text-primary">
              مستندات فنی
            </Link>
            <Link href={routes.contact} className="hover:text-primary">
              تماس با ما
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Button variant="secondary" size="sm" onClick={logout}>
              خروج ({user?.role === 'admin' ? 'مدیر' : 'کاربر'})
            </Button>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button variant="secondary" size="sm" onClick={loginAsUser}>
                ورود کاربر
              </Button>
              <Button variant="outline" size="sm" onClick={loginAsAdmin}>
                ورود مدیر
              </Button>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            aria-label="تغییر تم"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {themeIcon}
          </Button>
        </div>
      </div>
    </header>
  )
}
