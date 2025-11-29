'use client'

import { Order } from '@/types/order'
import { Badge } from '@/components/ui/badge'
import { Modal } from '@/components/ui/modal'

interface OrderDetailsModalProps {
  order?: Order
  open: boolean
  onClose: () => void
}

export const OrderDetailsModal = ({ order, open, onClose }: OrderDetailsModalProps) => {
  if (!order) return null

  const statusTone = order.status === 'تکمیل شده' ? 'success' : order.status === 'در حال بررسی' ? 'warning' : 'neutral'

  return (
    <Modal open={open} onClose={onClose} title="جزئیات سفارش">
      <div className="space-y-3 text-sm leading-relaxed">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground">شماره سفارش</p>
            <p className="font-semibold">{order.id}</p>
          </div>
          <Badge color={statusTone}>{order.status}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">نوع</p>
            <p className="font-semibold">{order.type}</p>
          </div>
          <div>
            <p className="text-muted-foreground">مبلغ</p>
            <p className="font-semibold">{order.amount.toLocaleString()} تومان</p>
          </div>
          {order.customer && (
            <div>
              <p className="text-muted-foreground">کاربر</p>
              <p className="font-semibold">{order.customer}</p>
            </div>
          )}
          <div>
            <p className="text-muted-foreground">تاریخ</p>
            <p className="font-semibold">{order.date}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">این جزئیات از آخرین داده‌های نمونه بارگیری شده‌اند و برای بررسی سریع وضعیت سفارش ارائه می‌شوند.</p>
      </div>
    </Modal>
  )
}

