import { Card } from '@/components/ui/card'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { PriceChart } from '@/components/charts/price-chart'
import { userOrders, userStats } from '@/lib/mock-data'

export default function UserOverviewPage() {
  return (
    <DashboardShell title="نمای کلی" description="وضعیت فعلی پرتفوی طلای آب‌شده شما">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-muted-foreground">ارزش کل پرتفوی</p>
          <p className="mt-2 text-2xl font-bold">{userStats.portfolioValue.toLocaleString()} تومان</p>
        </Card>
        <Card>
          <p className="text-sm text-muted-foreground">سود/زیان امروز</p>
          <p className="mt-2 text-2xl font-bold text-emerald-500">{userStats.dailyPnL.toLocaleString()} تومان</p>
        </Card>
        <Card>
          <p className="text-sm text-muted-foreground">وزن کل طلای آب‌شده</p>
          <p className="mt-2 text-2xl font-bold">{userStats.totalWeight} گرم</p>
        </Card>
      </div>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">روند قیمت هفتگی</h3>
        <PriceChart />
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">آخرین سفارش‌ها</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="text-muted-foreground">
                <th className="p-2">شماره سفارش</th>
                <th className="p-2">نوع</th>
                <th className="p-2">مبلغ</th>
                <th className="p-2">وضعیت</th>
                <th className="p-2">تاریخ</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order) => (
                <tr key={order.id} className="border-t border-border/60">
                  <td className="p-2 font-semibold">{order.id}</td>
                  <td className="p-2">{order.type}</td>
                  <td className="p-2">{order.amount.toLocaleString()} تومان</td>
                  <td className="p-2">{order.status}</td>
                  <td className="p-2">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardShell>
  )
}
