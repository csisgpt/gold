'use client'

import { ReactNode, useState } from 'react'
import clsx from 'clsx'

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

interface TabsProps {
  items: TabItem[]
  defaultTab?: string
}

export const Tabs = ({ items, defaultTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab ?? items[0]?.id)

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border pb-2">
        {items.map((tab) => (
          <button
            key={tab.id}
            className={clsx(
              'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
              activeTab === tab.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="pt-4">
        {items.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
