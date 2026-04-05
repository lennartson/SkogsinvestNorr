'use client'

import { useEffect, useState } from 'react'
import PropertyCard from '@/components/PropertyCard'
import { supabase, Property } from '@/lib/supabase'

export default function TillSaluPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await supabase
        .from('properties')
        .select('*')
        .order('status', { ascending: true })
        .order('created_at', { ascending: false })

      if (data) setProperties(data)
      setLoading(false)
    }

    fetchProperties()
  }, [])

  const activeProperties = properties.filter(p => p.status === 'active')
  const soldProperties = properties.filter(p => p.status === 'sold')

  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-4">
          Fastigheter till salu
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Utforska vår aktuella utbud av skogsfastigheter i Norrland
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Laddar fastigheter...</p>
          </div>
        ) : (
          <>
            {/* Active properties */}
            {activeProperties.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-[#1a3a2a] mb-8">
                  Aktuella erbjudanden
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {activeProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </>
            )}

            {/* Sold properties */}
            {soldProperties.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-[#1a3a2a] mb-8">
                  Tidigare sålda fastigheter
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {soldProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </>
            )}

            {properties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Inga fastigheter för närvarande. Kontakta mig för mer information.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
