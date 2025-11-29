'use client'

import { useState } from 'react'
import { DashboardShell } from '@/components/layout/dashboard-shell'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { adminUsers } from '@/lib/mock-data'
import { UserDetailsModal } from '@/components/users/user-details-modal'

export default function AdminUsersPage() {
  const [selectedUser, setSelectedUser] = useState<(typeof adminUsers)[number] | null>(null)

  const badgeColor = (kyc: string) => {
    if (kyc === 'تایید شده') return 'success'
    if (kyc === 'در انتظار') return 'warning'
    return 'neutral'
  }

  return (
    <DashboardShell title="کاربران" description="مدیریت وضعیت احراز هویت">
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead>
              <tr className="text-muted-foreground">
                <th className="p-2">نام</th>
                <th className="p-2">شماره موبایل</th>
                <th className="p-2">وضعیت KYC</th>
                <th className="p-2">تاریخ عضویت</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => (
                <tr
                  key={user.mobile}
                  className="cursor-pointer border-t border-border/60 transition hover:bg-muted/50"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="p-2 font-semibold">{user.name}</td>
                  <td className="p-2">{user.mobile}</td>
                  <td className="p-2">
                    <Badge color={badgeColor(user.kyc)}>{user.kyc}</Badge>
                  </td>
                  <td className="p-2">{user.joinedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      <UserDetailsModal open={!!selectedUser} onClose={() => setSelectedUser(null)} user={selectedUser ?? undefined} />
    </DashboardShell>
  )
}
