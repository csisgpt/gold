'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { routes } from '@/lib/routes'
import { useAuthStore } from '@/store/auth-store'

const userLinks = [
  { href: routes.user.overview, label: 'نمای کلی' },
  { href: routes.user.portfolio, label: 'پرتفوی' },
  { href: routes.user.orders, label: 'سفارش‌ها' },
  { href: routes.user.settings, label: 'تنظیمات' }
]

const adminLinks = [
  { href: routes.admin.overview, label: 'داشبورد مدیر' },
  { href: routes.admin.orders, label: 'سفارش‌های سیستم' },
  { href: routes.admin.users, label: 'کاربران' },
  { href: routes.admin.content, label: 'مدیریت محتوا' },
  { href: routes.admin.settings, label: 'تنظیمات سامانه' }
]

export const Sidebar = () => {
  const pathname = usePathname()
  const { user } = useAuthStore()
  const isAdmin = user?.role === 'admin'

  return (
    <aside className="w-full max-w-xs border-l border-border bg-[var(--sidebar)] p-4">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">خوش آمدید</p>
        <p className="text-lg font-semibold text-[var(--sidebar-foreground)]">{user?.name ?? 'کاربر مهمان'}</p>
      </div>
      <nav className="space-y-1">
        {userLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
              pathname === link.href
                ? 'bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)]'
                : 'text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)]'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      {isAdmin && (
        <div className="mt-8">
          <p className="mb-2 text-xs font-semibold text-muted-foreground">پنل مدیر</p>
          <nav className="space-y-1">
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)]'
                    : 'text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </aside>
  )
}
