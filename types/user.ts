export interface UserProfile {
  id: string
  name: string
  role: 'user' | 'admin'
  mobile?: string
  email?: string
}
