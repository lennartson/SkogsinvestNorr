import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-96 md:h-[500px] bg-gradient-to-r from-[#1a3a2a] to-[#2a5a3a] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            En mäklare med<br />känsla för skog
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Förmedling av skogsfastigheter i Norrland — från kust till inland. Över 30 år av erfarenhet och passion för norr.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/till-salu"
              className="bg-[#c9b48a] text-[#1a3a2a] px-8 py-3 rounded-lg font-bold hover:bg-[#d4c4a0] transition"
            >
              Se till salu
            </Link>
            <Link
              href="/kontakt"
              className="border-2 border-[#c9b48a] text-[#c9b48a] px-8 py-3 rounded-lg font-bold hover:bg-[#c9b48a] hover:text-[#1a3a2a] transition"
            >
              Kontakta Anders
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
