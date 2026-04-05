'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1a3a2a] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <span>🌲</span>
            <span>Skogsinvest Norr</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/till-salu" className="hover:text-[#c9b48a] transition">
              Till salu
            </Link>
            <Link href="/salja" className="hover:text-[#c9b48a] transition">
              Sälja
            </Link>
            <Link href="/kopa" className="hover:text-[#c9b48a] transition">
              Köpa
            </Link>
            <Link href="/tjanster" className="hover:text-[#c9b48a] transition">
              Tjänster
            </Link>
            <Link href="/om" className="hover:text-[#c9b48a] transition">
              Om
            </Link>
            <Link href="/kontakt" className="hover:text-[#c9b48a] transition">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/till-salu" className="block hover:text-[#c9b48a] transition">
              Till salu
            </Link>
            <Link href="/salja" className="block hover:text-[#c9b48a] transition">
              Sälja
            </Link>
            <Link href="/kopa" className="block hover:text-[#c9b48a] transition">
              Köpa
            </Link>
            <Link href="/tjanster" className="block hover:text-[#c9b48a] transition">
              Tjänster
            </Link>
            <Link href="/om" className="block hover:text-[#c9b48a] transition">
              Om
            </Link>
            <Link href="/kontakt" className="block hover:text-[#c9b48a] transition">
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
