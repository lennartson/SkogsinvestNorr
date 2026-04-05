import Link from 'next/link'
import { DollarSign, Scale, Users, Zap } from 'lucide-react'
import { ChevronRight } from 'lucide-react'

export default function TjansterPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Tjänster</h1>
        <p className="text-gray-600 text-lg mb-12">
          Jag erbjuder en bred palette av tjänster för att stödja dina skogsfastighets-behov
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ekonomi */}
          <Link href="/tjanster/ekonomi">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <DollarSign size={40} className="text-[#c9b48a]" />
                <ChevronRight size={24} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a2a] mb-3">Ekonomisk rådgivning</h3>
              <p className="text-gray-700">
                Hjälp med finansiering, investeringsanalys och långsiktig ekonomisk planering för dina skogsfastigheter.
              </p>
            </div>
          </Link>

          {/* Juridik */}
          <Link href="/tjanster/juridik">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <Scale size={40} className="text-[#c9b48a]" />
                <ChevronRight size={24} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a2a] mb-3">Juridisk assistans</h3>
              <p className="text-gray-700">
                Stöd med kontrakt, äganderätts- och överlåttelseärenden, samt all juridisk rådgivning.
              </p>
            </div>
          </Link>

          {/* Generationsskiften */}
          <Link href="/tjanster/generationsskiften">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <Users size={40} className="text-[#c9b48a]" />
                <ChevronRight size={24} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a2a] mb-3">Generationsskiften</h3>
              <p className="text-gray-700">
                Planering och genomförande av generationsskiften för att säkra familjeskogarnas framtid.
              </p>
            </div>
          </Link>

          {/* Värdering */}
          <Link href="/tjanster/vardering">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <Zap size={40} className="text-[#c9b48a]" />
                <ChevronRight size={24} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a3a2a] mb-3">Värderingar</h3>
              <p className="text-gray-700">
                Oberoende och professionell värdering av skogsfastigheter för försäljning, arv eller försäkring.
              </p>
            </div>
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1a3a2a] text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Fler frågor?</h2>
          <p className="text-xl text-gray-300 mb-6">
            Kontakta mig för att diskutera vilken tjänst som passar dina behov bäst.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[#c9b48a] text-[#1a3a2a] px-8 py-3 rounded-lg font-bold hover:bg-[#d4c4a0] transition"
          >
            Kontakta mig
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
