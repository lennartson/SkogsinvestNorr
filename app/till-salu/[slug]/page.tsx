'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import { supabase, Property } from '@/lib/supabase'
import { MapPin, Leaf, DollarSign, ChevronLeft } from 'lucide-react'

export default function PropertyDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [property, setProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      const { data } = await supabase
        .from('properties')
        .select('*')
        .eq('slug', slug)
        .single()

      if (data) setProperty(data)
      setLoading(false)
    }

    fetchProperty()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9f6f0] flex items-center justify-center">
        <p className="text-gray-600">Laddar...</p>
      </div>
    )
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-[#f9f6f0] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">Fastigheten hittades inte</p>
          <Link href="/till-salu" className="text-[#1a3a2a] font-semibold hover:text-[#c9b48a]">
            Tillbaka till listning
          </Link>
        </div>
      </div>
    )
  }

  const isSold = property.status === 'sold'

  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link href="/till-salu" className="flex items-center gap-2 text-[#1a3a2a] font-semibold hover:text-[#c9b48a] mb-8">
          <ChevronLeft size={20} />
          Tillbaka
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Image */}
            <div className="relative h-96 bg-gradient-to-br from-[#2a5a3a] to-[#1a3a2a] rounded-lg mb-8 flex items-center justify-center overflow-hidden">
              <div className="text-white text-center">
                <Leaf size={64} className="mx-auto mb-4 opacity-40" />
                <p className="text-lg opacity-70">Skogsfastighet — {property.title}</p>
              </div>
              {isSold && (
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-2xl">
                    Såld
                  </span>
                </div>
              )}
            </div>

            {/* Title and meta */}
            <h1 className="text-4xl font-bold text-[#1a3a2a] mb-4">
              {property.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mb-8 pb-8 border-b border-gray-300">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 p-6 bg-white rounded-lg">
              <div>
                <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Storlek</p>
                <p className="text-3xl font-bold text-[#1a3a2a]">{property.hectares}</p>
                <p className="text-gray-600">hektar</p>
              </div>

              {property.volume_m3sk && (
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Volym</p>
                  <p className="text-3xl font-bold text-[#1a3a2a]">
                    {property.volume_m3sk.toLocaleString()}
                  </p>
                  <p className="text-gray-600">m³sk</p>
                </div>
              )}

              {!isSold && (
                <div>
                  <p className="text-sm text-gray-500 uppercase font-semibold mb-2">Pris</p>
                  <p className="text-3xl font-bold text-[#c9b48a]">
                    {(property.price / 1000000).toFixed(1)}
                  </p>
                  <p className="text-gray-600">Mkr</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a3a2a] mb-4">
                Om fastigheten
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="leading-relaxed whitespace-pre-wrap">
                  {property.description || property.short_description}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Contact form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-lg sticky top-8">
              <h3 className="text-2xl font-bold text-[#1a3a2a] mb-6">
                Intresserad?
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
