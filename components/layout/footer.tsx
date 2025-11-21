import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} زرلاین – تمامی حقوق محفوظ است.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-primary">
            حریم خصوصی
          </Link>
          <Link href="/support" className="hover:text-primary">
            پشتیبانی ۲۴ ساعته
          </Link>
          <Link href="mailto:support@zarlion.ir" className="hover:text-primary">
            support@zarlion.ir
          </Link>
        </div>
      </div>
    </footer>
  )
}
