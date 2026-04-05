'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Mail, Phone, MessageSquare, User } from 'lucide-react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('contact_leads')
        .insert([formData])

      if (error) throw error

      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Det gick inte att skicka meddelandet. Försök igen senare.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <p className="text-green-800 font-semibold">
          Tack för ditt meddelande! Vi kontaktar dig snart.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <User size={16} className="inline mr-2" />
          Namn *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b48a]"
          placeholder="Ditt namn"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Mail size={16} className="inline mr-2" />
          E-postadress *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b48a]"
          placeholder="din@epost.se"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <Phone size={16} className="inline mr-2" />
          Telefonnummer
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b48a]"
          placeholder="070-123 45 67"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          <MessageSquare size={16} className="inline mr-2" />
          Meddelande *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9b48a] resize-none"
          placeholder="Beskriv ditt intresse eller dina frågor..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1a3a2a] text-white py-3 rounded-lg font-semibold hover:bg-[#0f2415] transition disabled:opacity-50"
      >
        {loading ? 'Skickar...' : 'Skicka meddelande'}
      </button>
    </form>
  )
}
