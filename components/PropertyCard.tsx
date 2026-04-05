'use client'

import Link from 'next/link'
import { Property } from '@/lib/supabase'
import { MapPin, Leaf } from 'lucide-react'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isSold = property.status === 'sold'

  return (
    <Link href={`/till-salu/${property.slug}`}>
      <div className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition ${isSold ? 'opacity-75' : ''}`}>
        {/* Image placeholder */}
        <div className="relative h-64 bg-gradient-to-br from-[#2a5a3a] to-[#1a3a2a] flex items-center justify-center">
          <div className="text-white text-center">
            <Leaf size={48} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm opacity-70">Skogsfastighet</p>
          </div>
          {isSold && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                Såld
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-[#1a3a2a] mb-2">
            {property.title}
          </h3>

          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin size={16} />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-200">
            <div>
              <p className="text-xs text-gray-500 uppercase">Storlek</p>
              <p className="text-lg font-bold text-[#1a3a2a]">
                {property.hectares} ha
              </p>
            </div>
            {property.volume_m3sk && (
              <div>
                <p className="text-xs text-gray-500 uppercase">Volym</p>
                <p className="text-lg font-bold text-[#1a3a2a]">
                  {property.volume_m3sk.toLocaleString()} m³
                </p>
              </div>
            )}
          </div>

          {/* Price */}
          {!isSold && (
            <p className="text-2xl font-bold text-[#c9b48a] mb-4">
              {(property.price / 1000000).toFixed(1)} Mkr
            </p>
          )}

          <p className="text-sm text-gray-600 line-clamp-2">
            {property.short_description}
          </p>
        </div>
      </div>
    </Link>
  )
}
