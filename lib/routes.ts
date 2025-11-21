export const routes = {
  home: '/',
  landing: '/landing',
  faq: '/faq',
  terms: '/terms',
  contact: '/contact',
  docs: '/docs',
  dashboard: '/dashboard',
  user: {
    overview: '/dashboard/user/overview',
    portfolio: '/dashboard/user/portfolio',
    orders: '/dashboard/user/orders',
    settings: '/dashboard/user/settings'
  },
  admin: {
    overview: '/dashboard/admin/overview',
    orders: '/dashboard/admin/orders',
    users: '/dashboard/admin/users',
    content: '/dashboard/admin/content',
    settings: '/dashboard/admin/settings'
  }
}

export type RouteKey = keyof typeof routes
