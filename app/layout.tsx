import type { Metadata } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import { MainLayout } from '@/components/layout/main-layout'
import { Providers } from '@/components/layout/providers'

export const metadata: Metadata = {
  title: 'زرلاین | خرید آنلاین طلای آب‌شده',
  description: 'زیرساخت نوین برای سرمایه‌گذاری امن در طلای آب‌شده با گزارش‌گیری دقیق و پنل‌های تخصصی.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
