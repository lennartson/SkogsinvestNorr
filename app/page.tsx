'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import PropertyCard from '@/components/PropertyCard'
import { supabase, Property } from '@/lib/supabase'
import { ChevronRight, TreePine, Users, Globe } from 'lucide-react'

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      const { data } = await supabase
        .from('properties')
        .select('*')
        .eq('status', 'active')
        .limit(3)

      if (data) setProperties(data)
      setLoading(false)
    }

    fetchProperties()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <TreePine size={40} className="mx-auto text-[#1a3a2a] mb-4" />
              <p className="text-3xl font-bold text-[#1a3a2a]">30+</p>
              <p className="text-gray-600">fastigheter förmedlade</p>
            </div>
            <div>
              <Globe size={40} className="mx-auto text-[#1a3a2a] mb-4" />
              <p className="text-3xl font-bold text-[#1a3a2a]">Norrland</p>
              <p className="text-gray-600">från kust till inland</p>
            </div>
            <div>
              <Users size={40} className="mx-auto text-[#1a3a2a] mb-4" />
              <p className="text-3xl font-bold text-[#1a3a2a]">30 år</p>
              <p className="text-gray-600">erfarenhet och passion</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Anders */}
      <section className="py-16 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Placeholder for photo */}
            <div className="bg-gradient-to-br from-[#2a5a3a] to-[#1a3a2a] h-96 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <Users size={64} className="mx-auto mb-4 opacity-40" />
                <p className="text-sm opacity-70">Porträttfoto av Anders</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#1a3a2a] mb-6">
                Om Anders
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Jag är en mäklare med djup känsla för skog och norrländsk natur. Under över 30 år har jag arbetat med skogsfastigheter i Västerbotten och Västernorrland, och jag älskar det jag gör.
              </p>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Mina kunder ser mig inte bara som en mäklare utan som en rådgivare som verkligen förstår vad det innebär att äga en skogsfastighet. Jag hjälper både köpare och säljare att göra de bästa besluten.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Låt mig hjälpa dig med dina skogsfastighetsbehov — oavsett om du vill köpa, sälja eller bara få bättre insikt i vad du äger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#1a3a2a] mb-4">Aktuella fastigheter</h2>
          <p className="text-gray-600 mb-12">Utvalda skogsfastigheter tillgängliga just nu</p>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Laddar...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/till-salu"
              className="inline-flex items-center gap-2 bg-[#1a3a2a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0f2415] transition"
            >
              Se alla fastigheter
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a3a2a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vill du köpa eller sälja en skogsfastighet?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kontakta mig för ett kostnadsfritt samtal om dina möjligheter
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#c9b48a] text-[#1a3a2a] px-8 py-3 rounded-lg font-bold hover:bg-[#d4c4a0] transition"
          >
            Kontakta Anders nu
          </Link>
        </div>
      </section>
    </>
  )
}
