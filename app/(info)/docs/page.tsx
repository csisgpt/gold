export default function DocsPage() {
  return (
    <article className="space-y-6 text-right">
      <header>
        <h1 className="text-3xl font-bold text-primary">مستندات فنی پلتفرم طلای آب‌شده</h1>
        <p className="text-muted-foreground">در این صفحه نحوه قیمت‌گذاری، ساختار کارمزدها و فرآیند تسویه توضیح داده شده است.</p>
      </header>
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">چطور قیمت‌گذاری انجام می‌شود</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          سرویس قیمت زرلاین از سه منبع داده شامل بورس کالا، اتحادیه طلا و بازار آزاد استفاده می‌کند. داده‌ها در هر ۱۰ ثانیه بروزرسانی و در یک موتور تجمیع با وزن‌دهی پویا پردازش می‌شود.
        </p>
        <pre className="mt-4 rounded-xl bg-muted/40 p-4 text-left text-xs text-muted-foreground ltr">
{`price = (0.5 * exchange) + (0.3 * guild) + (0.2 * market)`}
        </pre>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">ساختار کارمزدها</h2>
        <ul className="mt-2 list-disc space-y-2 pr-5 text-sm text-muted-foreground">
          <li>کارمزد پایه خرید: ۱.۵٪ از مبلغ سفارش</li>
          <li>کارمزد فروش مجدد: ۱٪ از مبلغ فروش</li>
          <li>نگهداری امن در خزانه زرلاین: رایگان تا ۳۰ روز</li>
        </ul>
      </section>
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold">فرآیند تأیید و تسویه</h2>
        <ol className="mt-2 list-decimal space-y-2 pr-5 text-sm text-muted-foreground">
          <li>ثبت سفارش و قفل شدن قیمت به مدت ۶۰ ثانیه</li>
          <li>تایید پرداخت و ارسال به خزانه</li>
          <li>تولید گواهی مالکیت دیجیتال و نمایش در پرتفوی</li>
          <li>امکان درخواست تحویل یا فروش مجدد</li>
        </ol>
      </section>
    </article>
  )
}
