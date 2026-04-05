import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a3a2a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Skogsinvest Norr</h3>
            <p className="text-gray-300 text-sm">
              En mäklare med känsla för skog. Vi förmedlar skogsfastigheter i Norrland med passion och kunskap.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/till-salu" className="text-gray-300 hover:text-[#c9b48a]">Till salu</Link></li>
              <li><Link href="/salja" className="text-gray-300 hover:text-[#c9b48a]">Sälja fastighet</Link></li>
              <li><Link href="/kopa" className="text-gray-300 hover:text-[#c9b48a]">Köpa fastighet</Link></li>
              <li><Link href="/tjanster" className="text-gray-300 hover:text-[#c9b48a]">Tjänster</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <span>Kontakta Anders</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>info@skogsinvestnorr.se</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>Vännäs, Västerbotten</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; 2026 Skogsinvest Norr AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  )
}
