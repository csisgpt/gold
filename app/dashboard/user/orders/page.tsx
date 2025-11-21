'use client'

import { useState } from 'react'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { userOrders } from '@/lib/mock-data'

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState('همه')

  const filteredOrders = userOrders.filter((order) => (statusFilter === 'همه' ? true : order.status === statusFilter))

  return (
    <DashboardShell title="سفارش‌ها" description="گزارش کامل سفارش‌های اخیر">
      <Card>
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-semibold">وضعیت</label>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2"
            >
              <option value="همه">همه</option>
              <option value="تکمیل شده">تکمیل شده</option>
              <option value="در حال بررسی">در حال بررسی</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="mb-2 block text-sm font-semibold">از تاریخ</label>
            <Input type="date" />
          </div>
          <div className="flex-1">
            <label className="mb-2 block text-sm font-semibold">تا تاریخ</label>
            <Input type="date" />
          </div>
        </div>
      </Card>
      <Card>
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
              {filteredOrders.map((order) => (
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
