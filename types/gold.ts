export interface GoldHolding {
  name: string
  weight: number
  value: number
  pnl: string
}

export interface GoldOrder {
  id: string
  type: 'خرید' | 'فروش'
  amount: number
  status: string
  date: string
  customer?: string
}
