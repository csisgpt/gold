const badges = [
  'نماد اعتماد الکترونیکی',
  'مجوز اتحادیه طلا و جواهر',
  'گواهی امنیت پرداخت PCI',
  'پشتیبانی ۲۴/۷'
]

export const TrustBadges = () => (
  <section className="rounded-2xl border border-dashed border-border/80 bg-muted/40 p-6">
    <p className="mb-4 text-sm text-muted-foreground">مورد اعتماد برترین سرمایه‌گذاران</p>
    <div className="grid gap-4 text-center text-sm font-semibold text-primary sm:grid-cols-2 md:grid-cols-4">
      {badges.map((badge) => (
        <div key={badge} className="rounded-xl bg-background px-4 py-3 shadow">
          {badge}
        </div>
      ))}
    </div>
  </section>
)
