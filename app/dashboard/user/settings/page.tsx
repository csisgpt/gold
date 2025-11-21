'use client'

import { useState } from 'react'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useThemeStore } from '@/store/theme-store'

export default function UserSettingsPage() {
  const { theme, setTheme } = useThemeStore()
  const [notifications, setNotifications] = useState({ sms: true, email: false, push: true })

  return (
    <DashboardShell title="تنظیمات" description="مدیریت اطلاعات کاربری و ترجیحات">
      <Card>
        <form className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-semibold">نام</label>
            <Input defaultValue="کاربر زرین" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">شماره موبایل</label>
            <Input defaultValue="09121234567" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">ایمیل</label>
            <Input type="email" defaultValue="user@zarlion.ir" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">شماره شبا</label>
            <Input placeholder="IR820540102680020817909002" />
          </div>
        </form>
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">اعلان‌ها</h3>
        <div className="space-y-4">
          <Switch
            checked={notifications.sms}
            onChange={(checked) => setNotifications((prev) => ({ ...prev, sms: checked }))}
            label="پیامک سفارش‌های جدید"
          />
          <Switch
            checked={notifications.email}
            onChange={(checked) => setNotifications((prev) => ({ ...prev, email: checked }))}
            label="ایمیل‌های هفتگی"
          />
          <Switch
            checked={notifications.push}
            onChange={(checked) => setNotifications((prev) => ({ ...prev, push: checked }))}
            label="اعلان‌های فوری"
          />
        </div>
      </Card>
      <Card>
        <h3 className="mb-4 text-lg font-semibold">ترجیح تم</h3>
        <div className="flex gap-3">
          {['light', 'dark', 'system'].map((mode) => (
            <button
              key={mode}
              className={`rounded-xl border px-4 py-2 text-sm font-semibold ${
                theme === mode ? 'border-primary text-primary' : 'border-border text-muted-foreground'
              }`}
              onClick={() => setTheme(mode as 'light' | 'dark' | 'system')}
              type="button"
            >
              {mode === 'light' ? 'روشن' : mode === 'dark' ? 'تاریک' : 'سیستمی'}
            </button>
          ))}
        </div>
      </Card>
    </DashboardShell>
  )
}
