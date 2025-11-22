import { notFound } from 'next/navigation'
import { mockServices } from '@/lib/mock-data'
import { UrgencyBadge } from '@/components/urgency/UrgencyBadge'
import { TrustIndicators } from '@/components/trust/TrustIndicators'
import Link from 'next/link'

function getService(id: string) {
  const service = mockServices.find(s => s._id === id)
  if (!service) notFound()
  return service
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = getService(id)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <UrgencyBadge type="popular" />
            <h1 className="text-4xl font-bold mt-4 mb-4 text-gray-900 dark:text-white">{service.title}</h1>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6">{service.priceRange}</p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{service.description}</p>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-yellow-600 dark:text-yellow-400">⏰</span>
                <span className="font-semibold text-yellow-800 dark:text-yellow-200">Limited Time Offer</span>
              </div>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                Book this service today and get 15% discount. Only 3 slots available this week!
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Service Includes:</h3>
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Book This Service
              </Link>
              <Link 
                href="/services"
                className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Service Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Duration</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{service.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Price Range</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{service.priceRange}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">Warranty</span>
                  <span className="font-semibold text-gray-900 dark:text-white">6 Months</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Why Choose Us?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 dark:text-green-400">✅</span>
                  <span className="text-gray-700 dark:text-gray-300">Certified Professionals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 dark:text-green-400">✅</span>
                  <span className="text-gray-700 dark:text-gray-300">Quality Guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 dark:text-green-400">✅</span>
                  <span className="text-gray-700 dark:text-gray-300">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600 dark:text-green-400">✅</span>
                  <span className="text-gray-700 dark:text-gray-300">Insurance Claims Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrustIndicators />
      </div>
    </div>
  )
}