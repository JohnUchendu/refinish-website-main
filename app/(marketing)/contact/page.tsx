'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({ name: '', email: '', phone: '', vehicle: '', service: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for quotes, questions, or to schedule your vehicle service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 812 345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium mb-2">Vehicle Type</label>
                  <Input
                    id="vehicle"
                    type="text"
                    placeholder="Toyota Camry 2020"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                <Input
                  id="service"
                  type="text"
                  placeholder="Auto Body Repair, Detailing, etc."
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your vehicle and what service you need..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">123 Automotive Street<br />Victoria Island, Lagos<br />Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">📞</span>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">+234 812 345 6789<br />+234 901 234 5678</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">✉️</span>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">info@autoelite.com<br />support@autoelite.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">🕒</span>
                  <div>
                    <h4 className="font-semibold">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Why Contact Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Free consultation and quote</li>
                <li>• Expert advice on your vehicle needs</li>
                <li>• Quick response within 24 hours</li>
                <li>• Flexible scheduling options</li>
                <li>• Insurance claim assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}