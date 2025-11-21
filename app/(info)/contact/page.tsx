'use client'

import { FormEvent, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('پیام شما با موفقیت ثبت شد. تیم پشتیبانی به زودی پاسخ می‌دهد.')
  }

  return (
    <div className="grid gap-8 text-right md:grid-cols-2">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-primary">ارتباط با تیم زرلاین</h1>
        <p className="text-muted-foreground">برای هرگونه سوال، همکاری یا گزارش می‌توانید از راه‌های زیر اقدام کنید.</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>آدرس: تهران، خیابان ولیعصر، کوچه زرین، پلاک ۲۷</li>
          <li>تلفن: ۰۲۱-۷۵۲۵۴</li>
          <li>ایمیل: support@zarlion.ir</li>
          <li>تلگرام: @zarlion_support</li>
          <li>اینستاگرام: instagram.com/zarlion.gold</li>
        </ul>
      </section>
      <section>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold">نام</label>
            <Input required placeholder="نام و نام خانوادگی" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">ایمیل</label>
            <Input type="email" required placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">موضوع</label>
            <Input required placeholder="موضوع پیام" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">پیام</label>
            <Textarea required rows={4} placeholder="متن پیام خود را بنویسید" />
          </div>
          <Button type="submit" className="w-full">
            ارسال پیام
          </Button>
          {status && <p className="text-center text-sm text-emerald-500">{status}</p>}
        </form>
      </section>
    </div>
  )
}
