import { ReactNode } from 'react'
import clsx from 'clsx'

interface BadgeProps {
  children: ReactNode
  color?: 'success' | 'warning' | 'neutral'
}

const colorMap = {
  success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200',
  warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-100',
  neutral: 'bg-muted text-foreground'
}

export const Badge = ({ children, color = 'neutral' }: BadgeProps) => (
  <span className={clsx('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold', colorMap[color])}>{children}</span>
)
