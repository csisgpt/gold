import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AdminSettingsPage() {
  return (
    <DashboardShell title="تنظیمات سامانه" description="پیکربندی سیاست‌های کلان">
      <Card>
        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-semibold">کارمزد پایه (%)</label>
            <Input type="number" step="0.1" defaultValue="1.5" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">حداقل مبلغ معامله (تومان)</label>
            <Input type="number" defaultValue="1000000" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold">حداکثر میزان نگهداری رایگان (روز)</label>
            <Input type="number" defaultValue="30" />
          </div>
          <Button type="button">ذخیره تغییرات</Button>
        </form>
      </Card>
    </DashboardShell>
  )
}
