import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const miniFeatures = [
  { title: 'قیمت لحظه‌ای', description: 'دسترسی به قیمت‌های دقیق شبکه طلا در هر لحظه.' },
  { title: 'کارمزد شفاف', description: '۱.۵٪ کارمزد ثابت و قابل مشاهده قبل از تایید سفارش.' },
  { title: 'امکان فروش مجدد', description: 'ثبت درخواست فروش با نرخ لحظه‌ای و تسویه سریع.' }
]

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-border bg-gradient-to-bl from-primary/10 via-background to-background p-10 text-right shadow-lg">
        <h1 className="text-4xl font-bold text-primary">سرمایه‌گذاری هوشمند روی طلای آب‌شده</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          خرید و فروش طلای آب‌شده با تسویه سریع، گزارش‌های دقیق و پشتیبانی تخصصی تنها با چند کلیک.
        </p>
        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <Button asChild>
            <Link href="/dashboard">شروع خرید</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard/user/overview">مشاهده پنل کاربری</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {miniFeatures.map((feature) => (
          <Card key={feature.title} className="text-right">
            <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 rounded-2xl border border-border p-6 text-right md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-primary">مسیرهای کلیدی</h2>
          <p className="mt-2 text-sm text-muted-foreground">همه اطلاعاتی که نیاز دارید از اینجا در دسترس است.</p>
        </div>
        <div className="grid gap-3 text-sm font-semibold">
          <Link href="/landing" className="rounded-xl border border-border px-4 py-3 hover:bg-muted">
            بیشتر بدانید درباره زرلاین
          </Link>
          <Link href="/faq" className="rounded-xl border border-border px-4 py-3 hover:bg-muted">
            سوالات متداول کاربران
          </Link>
          <Link href="/docs" className="rounded-xl border border-border px-4 py-3 hover:bg-muted">
            مستندات فنی و معماری
          </Link>
          <Link href="/dashboard" className="rounded-xl border border-border px-4 py-3 hover:bg-muted">
            دسترسی سریع به داشبورد (نیاز به ورود)
          </Link>
        </div>
      </section>
    </div>
  )
}
