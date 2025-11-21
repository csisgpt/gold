const features = [
  {
    title: 'قیمت لحظه‌ای بازار',
    description: 'داده‌های قیمت‌گذاری از صرافی‌های معتبر و ضرایب رسمی به‌صورت لحظه‌ای بروزرسانی می‌شود.'
  },
  {
    title: 'کارمزد شفاف و منصفانه',
    description: 'کارمزد پایه ۱.۵٪ است و قبل از تایید سفارش به صورت دقیق نمایش داده می‌شود.'
  },
  {
    title: 'شروع از مبالغ کم',
    description: 'بدون محدودیت می‌توانید از مبالغ پایین سرمایه‌گذاری را آغاز و به تدریج افزایش دهید.'
  },
  {
    title: 'فروش مجدد فوری',
    description: 'هر زمان که بخواهید می‌توانید با نرخ لحظه‌ای درخواست فروش ثبت کنید و تسویه سریع دریافت نمایید.'
  }
]

export const LandingFeatures = () => (
  <section className="grid gap-4 rounded-2xl border border-border bg-card p-8 md:grid-cols-2">
    {features.map((feature) => (
      <div key={feature.title} className="rounded-xl border border-border/60 p-4 shadow-sm">
        <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
      </div>
    ))}
  </section>
)
