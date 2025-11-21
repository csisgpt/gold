import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const LandingHero = () => (
  <section className="grid gap-6 rounded-3xl border border-border bg-gradient-to-br from-secondary to-background/50 p-10 text-right">
    <p className="text-sm font-semibold text-primary">پلتفرم خرید طلای آب‌شده</p>
    <h1 className="text-4xl font-extrabold text-primary">سرمایه‌گذاری هوشمند با شفافیت کامل</h1>
    <p className="text-lg text-muted-foreground">
      زرلاین با اتصال مستقیم به شبکه طلا، قیمت‌های لحظه‌ای، تسویه سریع و گزارش‌گیری دقیق را در اختیار شما قرار می‌دهد.
    </p>
    <div className="flex flex-wrap justify-end gap-3">
      <Button asChild>
        <Link href="/dashboard">شروع خرید</Link>
      </Button>
      <Button variant="outline" asChild>
        <Link href="/docs">مشاهده مستندات فنی</Link>
      </Button>
    </div>
  </section>
)
