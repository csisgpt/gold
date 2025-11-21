import { faqItems } from '@/lib/mock-data'

export default function FaqPage() {
  return (
    <div className="space-y-6">
      <div className="text-right">
        <h1 className="text-3xl font-bold text-primary">سوالات متداول</h1>
        <p className="text-muted-foreground">پرسش‌هایی که بیشتر توسط سرمایه‌گذاران پرسیده شده است.</p>
      </div>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-2xl border border-border bg-card p-4">
            <summary className="cursor-pointer text-lg font-semibold">{item.question}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
