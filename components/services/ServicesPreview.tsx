// components/services/ServicesPreview.tsx

import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const featuredServices = [
  {
    _id: '1',
    title: 'Auto Body Repair',
    description: 'Professional collision repair and dent removal services to restore your vehicle to its original condition.',
    image: '/images/services/body-repair.jpg',
    features: [
      'Paintless dent repair',
      'Frame straightening',
      'Panel replacement',
      'Color matching'
    ],
    duration: '2-5 days'
  },
  {
    _id: '2',
    title: 'Premium Detailing',
    description: 'Complete interior and exterior detailing to bring back that showroom shine and protect your investment.',
    image: '/images/services/detailing.jpg',
    features: [
      'Paint decontamination',
      'Ceramic coating',
      'Leather conditioning',
      'Engine bay cleaning'
    ],
    duration: '4-6 hours'
  },
  {
    _id: '3',
    title: 'Paint Correction',
    description: 'Advanced paint restoration to remove swirl marks, scratches, and oxidation for a flawless finish.',
    image: '/images/services/paint-correction.jpg',
    features: [
      'Swirl mark removal',
      'Scratch repair',
      'Paint polishing',
      'UV protection'
    ],
    duration: '1-2 days'
  }
]

export function ServicesPreview() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Premium Auto Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional automotive care services designed to keep your vehicle in perfect condition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <div 
              key={service._id} 
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                {/* CTA Button */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
                  <Button 
                    asChild 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  >
                    <Link href={`/services/${service._id}`} className="flex items-center space-x-1">
                      <span>Learn More</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                  
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>From</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white">
            <Link href="/services" className="flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Trust Note */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
            <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">All Services Include</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Free consultation • 6-month warranty • Certified technicians • Insurance claim support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}