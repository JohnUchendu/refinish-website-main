// app/(marketing)/services/page.tsx

"use client"

import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { mockServices } from '@/lib/mock-data'
import { UrgencyBadge } from '@/components/urgency/UrgencyBadge'
import { TrustIndicators } from '@/components/trust/TrustIndicators'

// Service image mapping - replace with your actual image paths
const serviceImages = {
  popular: [
    '/images/services/body-repair.jpg',
    '/images/services/detailing.jpg'
  ],
  other: [
    '/images/services/paint-correction.jpg',
    '/images/services/engine-repair.jpg',
    '/images/services/brake-service.jpg',
    '/images/services/oil-change.jpg',
    '/images/services/tire-rotation.jpg',
    '/images/services/electrical-repair.jpg'
  ]
}

// Fallback image in case service images are missing
const fallbackImage = '/images/services/service-placeholder.jpg'

export default function ServicesPage() {
  const popularServices = mockServices.slice(0, 2)
  const otherServices = mockServices.slice(2)

  const getServiceImage = (serviceType: 'popular' | 'other', index: number) => {
    const images = serviceType === 'popular' ? serviceImages.popular : serviceImages.other
    return images[index] || fallbackImage
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Premium Auto Services
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional automotive care services designed to keep your vehicle in perfect condition
          </p>
        </div>

        {/* Limited Time Offer Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center mb-12 border border-blue-300 dark:border-blue-700">
          <h2 className="text-2xl font-bold mb-2">Special Offer: 20% Off All Services This Month!</h2>
          <p className="mb-4 text-blue-100">Book before the end of the month to get exclusive discounts</p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Limited Time Only</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Only 5 Slots Left</span>
            </div>
          </div>
        </div>

        {/* Popular Services */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Most Popular Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularServices.map((service, index) => (
              <div 
                key={service._id} 
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg relative"
              >
                <UrgencyBadge type="popular" />
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={getServiceImage('popular', index)}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = fallbackImage
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Link href={`/services/${service._id}`} className="flex items-center space-x-1">
                        <span>View Details & Book</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                    
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {service.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Services */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            All Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <div 
                key={service._id} 
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg relative"
              >
                {index === 0 && <UrgencyBadge type="discount" />}
                
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={getServiceImage('other', index)}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = fallbackImage
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Clock className="h-3 w-3 text-blue-600" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600"
                    >
                      <Link href={`/services/${service._id}`} className="flex items-center space-x-1">
                        <span>Learn More</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                    
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {service.priceRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Note */}
        <div className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">All Services Include</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              Free consultation • 6-month warranty • Certified technicians • Insurance claim support
            </p>
          </div>
        </div>

        <TrustIndicators />
      </div>
    </div>
  )
}
