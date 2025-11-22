import { mockServices } from '@/lib/mock-data'
import { UrgencyBadge } from '@/components/urgency/UrgencyBadge'
import { TrustIndicators } from '@/components/trust/TrustIndicators'
import Link from 'next/link'

export default function ServicesPage() {
  const popularServices = mockServices.slice(0, 2)
  const otherServices = mockServices.slice(2)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Premium Services</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional automotive services with guaranteed quality and customer satisfaction
          </p>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">🎉 20% Off All Services This Month!</h2>
          <p className="mb-4">Book before the end of the month to get exclusive discounts</p>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <span>⏰</span>
              <span>Limited Time Only</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>👥</span>
              <span>Only 5 Slots Left</span>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Most Popular Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {popularServices.map((service) => (
              <div key={service._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700 hover:shadow-xl transition-shadow group relative">
                <UrgencyBadge type="popular" />
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <div className="text-blue-600 dark:text-blue-400 text-4xl">🚗</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{service.priceRange}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</span>
                  </div>
                  <Link 
                    href={`/services/${service._id}`}
                    className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block text-center"
                  >
                    View Details & Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">All Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <div key={service._id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border dark:border-gray-700 hover:shadow-xl transition-shadow">
                {index === 0 && <UrgencyBadge type="discount" />}
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-gray-600 dark:text-gray-400 text-4xl">🔧</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">{service.priceRange}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{service.duration}</span>
                  </div>
                  <Link 
                    href={`/services/${service._id}`}
                    className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors block text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TrustIndicators />
      </div>
    </div>
  )
}