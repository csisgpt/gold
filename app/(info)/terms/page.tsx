export default function TermsPage() {
  return (
    <article className="space-y-6 text-right">
      <header>
        <h1 className="text-3xl font-bold text-primary">قوانین و مقررات استفاده</h1>
        <p className="text-muted-foreground">لطفا قبل از استفاده از پلتفرم زرلاین این شرایط را با دقت مطالعه کنید.</p>
      </header>
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">قوانین معاملات طلای آب‌شده</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          تمامی معاملات براساس نرخ‌های رسمی اتحادیه و ضرایب اعلامی روز انجام می‌شود. کاربر موظف است اطلاعات هویتی صحیح ارائه کند و در صورت مشاهده رفتار مشکوک حساب موقتا مسدود می‌شود.
        </p>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">ریسک‌های سرمایه‌گذاری</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          بازار طلا نوسان‌پذیر است و ممکن است ارزش دارایی کاهش یا افزایش یابد. زرلاین تضمینی نسبت به سوددهی ارائه نمی‌کند و مسئولیت نهایی تصمیم سرمایه‌گذاری با کاربر است.
        </p>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">شرایط استفاده از وب‌سایت</h2>
        <ul className="mt-2 list-disc space-y-2 pr-5 text-sm text-muted-foreground">
          <li>رعایت قوانین مبارزه با پول‌شویی و احراز هویت دقیق ضروری است.</li>
          <li>هر حساب کاربری صرفا برای مالک قانونی قابل استفاده است.</li>
          <li>ارسال هرگونه محتوای تبلیغاتی یا مخرب در بخش‌های تعاملی ممنوع است.</li>
        </ul>
      </section>
    </article>
  )
}
