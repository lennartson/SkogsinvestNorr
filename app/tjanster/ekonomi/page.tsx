import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function EkonomiPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/tjanster" className="flex items-center gap-2 text-[#1a3a2a] font-semibold hover:text-[#c9b48a] mb-8">
          <ChevronLeft size={20} />
          Tillbaka till tjänster
        </Link>

        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Ekonomisk rådgivning</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Att äga en skogsfastighet är en större investering. Jag erbjuder ekonomisk rådgivning för att säkra att din investering är lönsam på lång sikt.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Vad jag hjälper dig med</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Finansieringsanalys:</strong> Bästa möjliga finansieringsväg för ditt köp</li>
            <li><strong>Investeringskalkyl:</strong> Långsiktig analys av avkastning och värdetillväxt</li>
            <li><strong>Skattebesparing:</strong> Tips för att optimera din skattesituation</li>
            <li><strong>Driftskostnader:</strong> Analys av underhålls- och driftskostnader</li>
            <li><strong>Försäljningsplanering:</strong> Strategisk planering inför försäljning</li>
            <li><strong>Försäkringar:</strong> Rekommendationer för lämplig försäkringsskydd</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Min process</h2>
          <ol className="space-y-3 list-decimal pl-6">
            <li>Vi diskuterar din ekonomiska situation och mål</li>
            <li>Jag analyserar fastigheten och dess ekonomiska potential</li>
            <li>Jag presenterar en detaljerad ekonomisk bedömning</li>
            <li>Vi gör en handlingsplan för att maximera din avkastning</li>
          </ol>

          <div className="bg-[#1a3a2a] text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Vill du få ekonomisk rådgivning?</h3>
            <p className="mb-6">
              Kontakta mig för en kostnadsfri konsultation om dina ekonomiska möjligheter.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-[#c9b48a] text-[#1a3a2a] px-6 py-3 rounded-lg font-bold hover:bg-[#d4c4a0] transition"
            >
              Kontakta mig
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
