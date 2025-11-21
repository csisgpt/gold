import { ReactNode } from 'react'
import { DashboardLayout } from '@/components/layout/dashboard-shell'

export default function DashboardRootLayout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>
}
