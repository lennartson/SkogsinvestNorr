import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function KopaPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Köpa skogsfastighet</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Att köpa rätt skogsfastighet är en viktig investering. Jag hjälper dig att hitta en fastighet som passar dina behov, oavsett om du letar efter jakt, fiske, timmerproduktion eller ett framtida legat.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Vad jag erbjuder</h2>
          <ul className="space-y-4 list-disc pl-6">
            <li><strong>Marknadsöversikt:</strong> Jag har en fullständig bild av tillgängliga fastigheter i Norrland</li>
            <li><strong>Personlig rådgivning:</strong> Vi diskuterar dina krav och sökkriterier</li>
            <li><strong>Besiktning och analys:</strong> Jag guidar dig genom fastigheter och ger expert-bedömning</li>
            <li><strong>Värderingstjänster:</strong> Oberoende bedömning av fastighets värde och potential</li>
            <li><strong>Juridisk assistans:</strong> Jag hanterar alla juridiska aspekter av köpet</li>
            <li><strong>Finansieringshjälp:</strong> Rådgivning om finansieringsmöjligheter</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Varför jag kan hjälpa dig</h2>
          <p>
            Med över 30 år av erfarenhet från skogsfastighetsmarknaden i Norrland vet jag exakt vad som är värt att leta efter. Jag kan bedöma skogskvalitet, marknadstrender och långsiktigt värde på ett sätt som få andra kan.
          </p>

          <p>
            Mina köpare får hela min expertis — från första kontakt till avslutande.
          </p>

          <div className="bg-[#1a3a2a] text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Vill du köpa?</h3>
            <p className="mb-6">
              Kontakta mig för att diskutera dina krav och hitta rätt fastighet för dina behov.
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
