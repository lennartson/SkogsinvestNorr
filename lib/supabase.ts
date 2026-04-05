import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Property = {
  id: string
  title: string
  slug: string
  location: string
  hectares: number
  price: number
  status: 'active' | 'sold'
  description: string
  short_description: string
  volume_m3sk: number | null
  created_at: string
}

export type PropertyImage = {
  id: string
  property_id: string
  url: string
  sort_order: number
  is_cover: boolean
}

export type ContactLead = {
  name: string
  email: string
  phone: string
  message: string
}
