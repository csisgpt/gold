import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { PortfolioChart } from '@/components/charts/portfolio-chart'
import { holdings } from '@/lib/mock-data'

export default function PortfolioPage() {
  return (
    <DashboardShell title="پرتفوی" description="ترکیب دارایی‌های طلای آب‌شده">
      <Card>
        <PortfolioChart />
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">جزئیات دارایی</h3>
        <div className="space-y-3">
          {holdings.map((item) => (
            <div key={item.name} className="flex flex-col rounded-xl border border-border/60 p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">وزن: {item.weight} گرم</p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>ارزش فعلی: {item.value.toLocaleString()} تومان</p>
                <p className="text-emerald-500">سود/زیان: {item.pnl}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardShell>
  )
}
