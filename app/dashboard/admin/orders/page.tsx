'use client'

import { useMemo, useState } from 'react'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { adminOrders } from '@/lib/mock-data'

export default function AdminOrdersPage() {
  const [statusFilter, setStatusFilter] = useState('همه')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return adminOrders.filter((order) => {
      const matchesStatus = statusFilter === 'همه' ? true : order.status === statusFilter
      const matchesSearch = order.customer?.includes(search) ?? false
      return matchesStatus && matchesSearch
    })
  }, [statusFilter, search])

  return (
    <DashboardShell title="سفارش‌های سیستم" description="مدیریت وضعیت سفارش‌ها">
      <Card>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
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
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold">جستجو بر اساس نام کاربر</label>
            <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="نام کاربر" />
          </div>
        </div>
      </Card>
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="text-muted-foreground">
                <th className="p-2">شماره سفارش</th>
                <th className="p-2">نام کاربر</th>
                <th className="p-2">نوع معامله</th>
                <th className="p-2">مبلغ</th>
                <th className="p-2">وضعیت</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((order) => (
                <tr key={order.id} className="border-t border-border/60">
                  <td className="p-2 font-semibold">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.type}</td>
                  <td className="p-2">{order.amount.toLocaleString()} تومان</td>
                  <td className="p-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardShell>
  )
}
