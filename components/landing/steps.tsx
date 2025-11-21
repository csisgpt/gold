const steps = [
  { title: 'ثبت‌نام و احراز هویت', description: 'حساب کاربری بسازید و مراحل KYC آنلاین را تکمیل کنید.' },
  { title: 'شارژ کیف پول ریالی', description: 'از طریق درگاه امن بانکی حساب خود را شارژ کنید.' },
  { title: 'خرید طلای آب‌شده', description: 'مبلغ موردنظر را وارد و سفارش را تایید کنید.' },
  { title: 'مدیریت و فروش', description: 'در پنل کاربری دارایی خود را مدیریت یا درخواست فروش ثبت کنید.' }
]

export const LandingSteps = () => (
  <section className="rounded-2xl border border-border bg-card p-8">
    <h2 className="mb-6 text-2xl font-bold text-primary">چهار قدم تا مالکیت طلای آب‌شده</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-xl bg-muted/50 p-4">
          <span className="text-sm font-semibold text-primary">مرحله {index + 1}</span>
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="text-sm text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
)
