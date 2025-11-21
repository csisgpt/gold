import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => (
  <div className={clsx('rounded-2xl border border-border bg-card p-6 shadow-sm', className)}>{children}</div>
)
