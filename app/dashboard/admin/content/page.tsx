'use client'

import { useState } from 'react'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { adminFaq } from '@/lib/mock-data'

export default function AdminContentPage() {
  const [faqList, setFaqList] = useState(adminFaq)
  const [docsIntro, setDocsIntro] = useState('مستندات فنی به توسعه‌دهندگان کمک می‌کند اتصال امن به API را پیاده‌سازی کنند.')

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    setFaqList((prev) => prev.map((item, idx) => (idx === index ? { ...item, [field]: value } : item)))
  }

  return (
    <DashboardShell title="مدیریت محتوا" description="بروزرسانی سوالات متداول و مستندات">
      <Card>
        <h3 className="mb-4 text-lg font-semibold">سوالات متداول</h3>
        <div className="space-y-4">
          {faqList.map((item, index) => (
            <div key={item.question} className="rounded-xl border border-border/60 p-4">
              <Input
                className="mb-2"
                value={item.question}
                onChange={(event) => handleFaqChange(index, 'question', event.target.value)}
              />
              <Textarea
                rows={3}
                value={item.answer}
                onChange={(event) => handleFaqChange(index, 'answer', event.target.value)}
              />
            </div>
          ))}
          <Button type="button" variant="secondary" className="w-full">
            ذخیره‌سازی محتوای FAQ (نمایشی)
          </Button>
        </div>
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">مقدمه مستندات</h3>
        <Textarea rows={4} value={docsIntro} onChange={(event) => setDocsIntro(event.target.value)} />
        <Button type="button" className="mt-4 w-full">
          بروزرسانی محتوا
        </Button>
      </Card>
    </DashboardShell>
  )
}
