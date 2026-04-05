import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#1a3a2a] mb-4">Kontakta Anders</h1>
        <p className="text-gray-600 text-lg mb-12">
          Har du frågor om en fastighet eller vill du diskutera dina behov? Hör gärna av dig!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#1a3a2a] mb-4 flex items-center gap-2">
                  <Phone size={24} className="text-[#c9b48a]" />
                  Telefon
                </h3>
                <p className="text-gray-700">
                  <a href="tel:+46xxx" className="text-[#1a3a2a] font-semibold hover:text-[#c9b48a]">
                    Kontakta för nummer
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a3a2a] mb-4 flex items-center gap-2">
                  <Mail size={24} className="text-[#c9b48a]" />
                  E-post
                </h3>
                <p className="text-gray-700">
                  <a href="mailto:info@skogsinvestnorr.se" className="text-[#1a3a2a] font-semibold hover:text-[#c9b48a]">
                    info@skogsinvestnorr.se
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1a3a2a] mb-4 flex items-center gap-2">
                  <MapPin size={24} className="text-[#c9b48a]" />
                  Plats
                </h3>
                <p className="text-gray-700">
                  Vännäs, Västerbotten<br />
                  Sverige
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#1a3a2a] mb-6">
                Skicka ett meddelande
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
