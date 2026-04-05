import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function SaljaPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Sälja skogsfastighet</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Är du intresserad av att sälja din skogsfastighet? Jag kan hjälpa dig att få bästa möjliga pris genom mina omfattande nätverk och erfarenhet av skogsfastighetsmarknaden i Norrland.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Så fungerar det</h2>
          <ol className="space-y-4 list-decimal pl-6">
            <li><strong>Kostnadsfri värdering:</strong> Vi gör en objektiv bedömning av din fastighet</li>
            <li><strong>Marknadsanalys:</strong> Vi analyserar aktuella marknadspriser och efterfrågan</li>
            <li><strong>Profilering:</strong> Din fastighet presenteras profesjonellt för potentiella köpare</li>
            <li><strong>Förhandlingar:</strong> Jag hanterar all kontakt och förhandlingar för ditt bästa</li>
            <li><strong>Avslut:</strong> Vi guidar dig genom hela juridiska processen</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Varför välja mig?</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>Över 30 års erfarenhet av skogsfastigheter i Norrland</li>
            <li>Bred kontaktnät bland köpare och investerare</li>
            <li>Personlig service och dedikerad uppmärksamhet</li>
            <li>Transparent prissättning utan dolda avgifter</li>
            <li>Snabb och effektiv process</li>
          </ul>

          <div className="bg-[#1a3a2a] text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Vill du sälja?</h3>
            <p className="mb-6">
              Kontakta mig för en kostnadsfri samtal och värdering av din fastighet.
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
