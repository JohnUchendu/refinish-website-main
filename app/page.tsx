import { HeroCarousel } from '@/components/hero/HeroCarousel'
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel'
import { TrustIndicators } from '@/components/trust/TrustIndicators'
import { TeamMembers } from '@/components/team/TeamMembers'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { mockServices } from '@/lib/mock-data'
import { UrgencyBadge } from '@/components/urgency/UrgencyBadge'

export default function Home() {
  const featuredServices = mockServices.slice(0, 3)

  return (
    <div className="space-y-0">
      {/* Hero Carousel */}
      <div className="h-[600px] md:h-[700px]">
        <HeroCarousel />
      </div>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* Services Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Premium Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive automotive care services to keep your vehicle in perfect condition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service._id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <UrgencyBadge type="popular" />
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center">
                  <div className="text-blue-600 dark:text-blue-400 text-5xl">🚗</div>
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
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Team Members */}
      <TeamMembers />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Restore Your Vehicle?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today for a free consultation and quote on our premium auto body services.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="tel:+2348123456789">Call Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}