'use client'

import { useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Modal } from '@/components/ui/modal'
import { adminOrders } from '@/lib/mock-data'

interface AdminUser {
  name: string
  mobile: string
  kyc: string
  joinedAt: string
}

interface UserDetailsModalProps {
  user?: AdminUser
  open: boolean
  onClose: () => void
}

export const UserDetailsModal = ({ user, open, onClose }: UserDetailsModalProps) => {
  const userOrders = useMemo(() => adminOrders.filter((order) => order.customer === user?.name), [user])

  const totalVolume = userOrders.reduce((acc, order) => acc + order.amount, 0)

  if (!user) return null

  const badgeColor = user.kyc === 'تایید شده' ? 'success' : user.kyc === 'در انتظار' ? 'warning' : 'neutral'

  return (
    <Modal open={open} onClose={onClose} title="پروفایل کاربر">
      <div className="space-y-4 text-sm leading-relaxed">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground">نام و نام خانوادگی</p>
            <p className="font-semibold">{user.name}</p>
          </div>
          <Badge color={badgeColor}>{user.kyc}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">شماره موبایل</p>
            <p className="font-semibold">{user.mobile}</p>
          </div>
          <div>
            <p className="text-muted-foreground">تاریخ عضویت</p>
            <p className="font-semibold">{user.joinedAt}</p>
          </div>
          <div>
            <p className="text-muted-foreground">تعداد سفارش‌ها</p>
            <p className="font-semibold">{userOrders.length}</p>
          </div>
          <div>
            <p className="text-muted-foreground">ارزش کل معاملات</p>
            <p className="font-semibold">{totalVolume.toLocaleString()} تومان</p>
          </div>
        </div>
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">سفارش‌های اخیر</p>
              <p className="text-xs text-muted-foreground">برای مشاهده جزئیات، یکی از موارد زیر را انتخاب کنید.</p>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            {userOrders.slice(0, 3).map((order) => (
              <div key={order.id} className="rounded-lg border border-border/70 p-3 text-xs">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-muted-foreground">{order.status}</p>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <p>{order.type}</p>
                  <p>{order.amount.toLocaleString()} تومان</p>
                </div>
              </div>
            ))}
            {userOrders.length === 0 && <p className="text-center text-xs text-muted-foreground">سفارشی برای این کاربر ثبت نشده است.</p>}
          </div>
        </Card>
      </div>
    </Modal>
  )
}

