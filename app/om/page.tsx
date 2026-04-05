import { Users, Heart, Award } from 'lucide-react'

export default function OmPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      {/* Hero */}
      <div className="bg-[#1a3a2a] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Om Skogsinvest Norr</h1>
          <p className="text-xl text-gray-300">
            En mäklare med känsla för skog och passion för Norrland
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Anders */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a3a2a] mb-6">Om Anders</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Jag är Anders, och jag har arbetat med skogsfastigheter i Norrland under över 30 år. Det började som ett intresse och blev snart min livssyssla.
            </p>
            <p>
              Jag växte upp nära skogen och älskar Norrlands natur djupt. Att arbeta med skogsfastigheter är för mig inte bara ett jobb — det är en passion. Jag ser min roll som att förena köpare och säljare med fastigheter som passar deras behov och drömmar.
            </p>
            <p>
              Många av mina kunder blir långtidsrelationer. De vet att jag bryr mig om deras intresse och att jag alltid ger mitt bästa för att hitta rätt lösning.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Heart size={40} className="mx-auto text-[#c9b48a] mb-4" />
            <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">Passion</h3>
            <p className="text-gray-700">
              Jag älskar det jag gör och det märks i mitt arbete. Din fastighet är min prioritet.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Award size={40} className="mx-auto text-[#c9b48a] mb-4" />
            <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">Erfarenhet</h3>
            <p className="text-gray-700">
              30 års arbete med skogsfastigheter ger mig kunskap som är svår att ersätta.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Users size={40} className="mx-auto text-[#c9b48a] mb-4" />
            <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">Integritet</h3>
            <p className="text-gray-700">
              Jag bygger relationer på ärlighet, transparens och långsiktig tilllit.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-[#1a3a2a] text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">Min track record</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#c9b48a]">30+</p>
              <p className="text-gray-300">år erfarenhet</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#c9b48a]">100+</p>
              <p className="text-gray-300">nöjda kunder</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#c9b48a]">30+</p>
              <p className="text-gray-300">fastigheter förmedlade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
