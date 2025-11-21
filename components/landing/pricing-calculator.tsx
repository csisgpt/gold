'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'

const pricePerGram = 2_780_000
const feeRate = 0.015

export const PricingCalculator = () => {
  const [amount, setAmount] = useState(50_000_000)

  const approximateWeight = amount / pricePerGram
  const fee = amount * feeRate
  const finalAmount = amount + fee

  return (
    <section className="rounded-2xl border border-border bg-card p-8">
      <h2 className="mb-4 text-2xl font-bold text-primary">محاسبه‌گر سریع خرید</h2>
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-semibold">مبلغ سرمایه‌گذاری (تومان)</label>
          <Input
            type="number"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            min={1_000_000}
            step={1_000_000}
          />
        </div>
        <div className="grid gap-4 rounded-xl bg-muted/40 p-4 text-sm text-right md:grid-cols-3">
          <div>
            <p className="text-muted-foreground">قیمت هر گرم</p>
            <p className="text-lg font-bold">{pricePerGram.toLocaleString()} تومان</p>
          </div>
          <div>
            <p className="text-muted-foreground">وزن تقریبی قابل خرید</p>
            <p className="text-lg font-bold">{approximateWeight.toFixed(2)} گرم</p>
          </div>
          <div>
            <p className="text-muted-foreground">کارمزد تقریبی</p>
            <p className="text-lg font-bold">{fee.toLocaleString()} تومان</p>
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-border/70 p-4 text-right">
          <p className="text-sm text-muted-foreground">مبلغ نهایی</p>
          <p className="text-2xl font-extrabold text-primary">{finalAmount.toLocaleString()} تومان</p>
        </div>
      </div>
    </section>
  )
}
