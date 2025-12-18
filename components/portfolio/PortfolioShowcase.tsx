// components/portfolio/PortfolioShowcase.tsx

import { ChevronRight, ArrowRight, Star, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const portfolioItems = [
  {
    id: 1,
    title: 'Complete Auto Body Restoration',
    description: 'Full collision repair and paint restoration on a 2020 Toyota Camry',
    beforeImage: '/images/portfolio/camry-before.jpg',
    afterImage: '/images/portfolio/camry-after.jpg',
    duration: '5 days',
    rating: 5,
    category: 'Body Repair',
    features: ['Dent Removal', 'Paint Matching', 'Frame Alignment']
  },
  {
    id: 2,
    title: 'Premium Ceramic Coating',
    description: 'Paint correction and ceramic coating on a Mercedes-Benz C300',
    beforeImage: '/images/portfolio/mercedes-before.jpg',
    afterImage: '/images/portfolio/mercedes-after.jpg',
    duration: '2 days',
    rating: 5,
    category: 'Detailing',
    features: ['Paint Correction', 'Ceramic Coating', 'Interior Detailing']
  },
  {
    id: 3,
    title: 'Headlight Restoration',
    description: 'Complete headlight restoration on a 2018 Honda Accord',
    beforeImage: '/images/portfolio/headlight-before.jpg',
    afterImage: '/images/portfolio/headlight-after.jpg',
    duration: '3 hours',
    rating: 5,
    category: 'Restoration',
    features: ['UV Protection', 'Lens Polish', 'Sealant Application']
  },
  {
    id: 4,
    title: 'Interior Deep Cleaning',
    description: 'Complete interior restoration and odor elimination',
    beforeImage: '/images/portfolio/interior-before.jpg',
    afterImage: '/images/portfolio/interior-after.jpg',
    duration: '6 hours',
    rating: 5,
    category: 'Detailing',
    features: ['Stain Removal', 'Leather Conditioning', 'Odor Elimination']
  }
]

export function PortfolioShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Vehicle Transformations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            See the incredible before and after results of our premium auto care services
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
            >
              {/* Before/After Images */}
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 flex">
                  {/* Before Image */}
                  <div className="flex-1 relative overflow-hidden">
                    <Image
                      src={item.beforeImage}
                      alt={`Before - ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                  
                  {/* After Image */}
                  <div className="flex-1 relative overflow-hidden border-l border-white/20">
                    <Image
                      src={item.afterImage}
                      alt={`After - ${item.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      After
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.category}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.rating}/5
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Features & Duration */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Transformations</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Vehicle Brands</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Vehicle?
            </h3>
            <p className="text-blue-100 mb-6 max-w-md mx-auto text-lg">
              See more incredible transformations in our full gallery
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/gallery" className="flex items-center space-x-2">
                  <span>View Full Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Get Your Quote</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}