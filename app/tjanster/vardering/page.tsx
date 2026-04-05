import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function VarderingPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/tjanster" className="flex items-center gap-2 text-[#1a3a2a] font-semibold hover:text-[#c9b48a] mb-8">
          <ChevronLeft size={20} />
          Tillbaka till tjänster
        </Link>

        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Värderingar</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Att veta värdet på en skogsfastighet är avgörande för många situationer — oavsett om du ska sälja, arva, försäkra eller bara veta vad du äger. Jag erbjuder professionella och oberoende värderingar.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">När behövs värdering?</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Vid försäljning:</strong> För att sätta rätt pris på marknaden</li>
            <li><strong>Vid köp:</strong> För att säkra att du inte betalar för mycket</li>
            <li><strong>Vid arv:</strong> För skattemässiga och juridiska ändamål</li>
            <li><strong>Vid försäkring:</strong> För att säkra rätt försäkringsskydd</li>
            <li><strong>Vid uppdelning mellan arvingar:</strong> För att fördela värdet rättvist</li>
            <li><strong>Vid lån:</strong> Som säkerhet för bankfinansiering</li>
            <li><strong>Vid gåva:</strong> För gåvoskattebedömning</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Vad ingår i en värdering?</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Markbeskrivning:</strong> Detaljerad analys av markens egenskaper</li>
            <li><strong>Skogsinventering:</strong> Bedömning av skogsstatus och volym</li>
            <li><strong>Lägesanalys:</strong> Marknadens efterfrågan och köparkrets</li>
            <li><strong>Jakt- och fiskerätter:</strong> Värdering av dessa speciella rättigheter</li>
            <li><strong>Marknadsanalys:</strong> Jämförelse med liknande fastigheter</li>
            <li><strong>Värderingsrapport:</strong> Detaljerad skriftlig rapport med slutsatser</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Min expertis</h2>
          <p>
            Med 30 års erfarenhet av skogsfastigheter i Norrland kan jag bedöma värdet på ett sätt som är både objektivt och baserat på djup marknadskännedom. Min värdering är mycket mer än bara en siffra — det är en professionell bedömning av all relevant information.
          </p>

          <div className="bg-[#1a3a2a] text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Behöver du värdering?</h3>
            <p className="mb-6">
              Kontakta mig för ett kostnadsfritt samtal om dina värderingsbehov.
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
