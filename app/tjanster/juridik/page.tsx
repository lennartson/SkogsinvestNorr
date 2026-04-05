import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function JuridikPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/tjanster" className="flex items-center gap-2 text-[#1a3a2a] font-semibold hover:text-[#c9b48a] mb-8">
          <ChevronLeft size={20} />
          Tillbaka till tjänster
        </Link>

        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-6">Juridisk assistans</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>
            Juridiska aspekter av skogsfastigheter kan vara komplexa. Jag erbjuder rådgivning och stöd för att säkra att all juridisk process går smidigt och säkert.
          </p>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Mina juridiska tjänster</h2>
          <ul className="space-y-3 list-disc pl-6">
            <li><strong>Köp- och säljarkontrakt:</strong> Förhandling och upprättande av kontrakt</li>
            <li><strong>Överlåtelseärenden:</strong> Juridisk assistans vid överlåtelse av fastighet</li>
            <li><strong>Äganderätts-frågor:</strong> Rådgivning om äganderätt och gränser</li>
            <li><strong>Miljö- och naturskyddsärenden:</strong> Överensstämmelse med miljölagar</li>
            <li><strong>Jakt- och fiskerätter:</strong> Juridisk bedömning av dessa speciella rättigheter</li>
            <li><strong>Arv och testamente:</strong> Planering av hur fastigheten överförs i generationsskiften</li>
            <li><strong>Samägande-ärenden:</strong> Lösa tvister mellan delägare</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a3a2a] mt-8">Varför juridisk assistans är viktig</h2>
          <p>
            Köp eller försäljning av en skogsfastighet är en stor transaktion. En felaktig juridisk process kan kosta dig mycket pengar och tid. Jag säkrar att alla detaljer är rätt och att din investering är väl skyddad juridiskt.
          </p>

          <div className="bg-[#1a3a2a] text-white p-8 rounded-lg mt-8">
            <h3 className="text-2xl font-bold mb-4">Behöver du juridisk assistans?</h3>
            <p className="mb-6">
              Kontakta mig för att diskutera dina juridiska behov och få expert-rådgivning.
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
