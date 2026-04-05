import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function GenerationsskiftenPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/tjanster" className="flex items-center gap-2 text-[#1a3a2a] font-semibold hover:text-[#c9b48a] mb-8">
          <ChevronLeft size={20} />
          Tillbaka till tjänster
        </Link>

        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Generationsskiften</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Att överlämna en skogsfastighet till nästa generation är ofta en av de viktigaste besluten en familj gör. Jag kan hjälpa dig att planera och genomföra detta på ett sätt som är rättvist, effektivt och juridiskt korrekt.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Vad jag erbjuder</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Planering:</strong> Diskutera mål och värderingar för skogsmiljön</li>
            <li><strong>Värdering:</strong> Objektiv bedömning av fastighetens värde</li>
            <li><strong>Skatteoptimering:</strong> Minimera arvs- och gavoskatter</li>
            <li><strong>Juridisk struktur:</strong> Välj rätt juridisk modell (ägarförsäljning, arv, samägande, etc.)</li>
            <li><strong>Familjediskussioner:</strong> Facilitering av samtal mellan familjemedlemmar</li>
            <li><strong>Juridisk dokumentation:</strong> Upprättande av allt behövligt juridiskt material</li>
            <li><strong>Ekonomisk planering:</strong> Långsiktig finansiell strategi för fastigheten</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Varför detta är viktigt</h2>
          <p>
            En dåligt genomförd generationsskifte kan orsaka familjetvister, enorma skattekonsekvenser och svårigheter att driva skogsfastigheten vidare. Med rätt planering kan du säkra att fastigheten blomstrar under nästa generation.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Min process</h2>
          <ol className="space-y-3 list-decimal pl-6">
            <li>Inledande samtal om era mål och värderingar</li>
            <li>Analys av fastigheten och dess ekonomiska potential</li>
            <li>Diskussion av möjliga juridiska strukturer</li>
            <li>Skatteanalys och optimeringsförslag</li>
            <li>Upprättande av juridiska dokument</li>
            <li>Stöd under genomförandet</li>
          </ol>

          <div className="bg-[#1a3a2a] text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Planerar du ett generationsskifte?</h3>
            <p className="mb-6">
              Kontakta mig för en diskussion om hur du kan säkra fastighetens framtid.
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
