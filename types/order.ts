export interface OrderFilter {
  status?: string
  startDate?: string
  endDate?: string
}

export interface Order {
  id: string
  type: string
  amount: number
  status: string
  date: string
  customer?: string
}
