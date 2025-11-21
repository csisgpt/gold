import { ReactNode } from 'react'
import { Sidebar } from '@/components/layout/sidebar'

interface DashboardShellProps {
  children: ReactNode
  title: string
  description?: string
}

export const DashboardShell = ({ children, title, description }: DashboardShellProps) => {
  return (
    <section className="flex w-full flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-primary">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  )
}

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto flex max-w-6xl gap-6 px-4 py-8">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
