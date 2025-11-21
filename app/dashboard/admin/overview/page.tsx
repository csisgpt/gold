import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { PriceChart } from '@/components/charts/price-chart'
import { adminOrders, adminStats } from '@/lib/mock-data'

export default function AdminOverviewPage() {
  return (
    <DashboardShell title="داشبورد مدیر" description="نمای کلی عملیات روزانه">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-muted-foreground">حجم کل معاملات امروز</p>
          <p className="mt-2 text-2xl font-bold">{adminStats.totalVolume.toLocaleString()} تومان</p>
        </Card>
        <Card>
          <p className="text-sm text-muted-foreground">کاربران فعال</p>
          <p className="mt-2 text-2xl font-bold">{adminStats.activeUsers}</p>
        </Card>
        <Card>
          <p className="text-sm text-muted-foreground">سفارشات در انتظار</p>
          <p className="mt-2 text-2xl font-bold text-amber-500">{adminStats.pendingOrders}</p>
        </Card>
      </div>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">روند معاملات ۷ روز گذشته</h3>
        <PriceChart />
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">سفارش‌های نیازمند بررسی</h3>
        <div className="space-y-3">
          {adminOrders.map((order) => (
            <div key={order.id} className="rounded-xl border border-border/70 p-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>{order.amount.toLocaleString()} تومان</p>
                  <p>{order.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </DashboardShell>
  )
}
