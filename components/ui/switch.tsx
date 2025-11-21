'use client'

import { Switch as HeadlessSwitch } from '@headlessui/react'
import clsx from 'clsx'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
}

export const Switch = ({ checked, onChange, label }: SwitchProps) => (
  <HeadlessSwitch.Group as="div" className="flex items-center gap-3">
    {label && <HeadlessSwitch.Label className="text-sm text-muted-foreground">{label}</HeadlessSwitch.Label>}
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={clsx(
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60',
        checked ? 'bg-primary' : 'bg-muted'
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200',
          checked ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </HeadlessSwitch>
  </HeadlessSwitch.Group>
)
