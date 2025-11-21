import { faqItems } from '@/lib/mock-data'

export const LandingFaqSection = () => (
  <section className="rounded-2xl border border-border bg-card p-8">
    <h2 className="mb-4 text-2xl font-bold text-primary">سوالات پرتکرار</h2>
    <div className="space-y-4">
      {faqItems.slice(0, 3).map((item) => (
        <details key={item.question} className="rounded-xl border border-border/70 bg-muted/30 p-4">
          <summary className="cursor-pointer text-lg font-semibold">{item.question}</summary>
          <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  </section>
)
