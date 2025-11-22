'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: 1,
    name: 'James Okafor',
    role: 'Toyota Camry Owner',
    rating: 5,
    comment: 'Exceptional service! They restored my 2018 Toyota Camry after a minor accident. The paint matching was perfect and the finish is better than factory! I could not be happier with the results.',
    image: '👨‍💼',
    service: 'Auto Body Repair'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Mercedes-Benz Owner',
    rating: 5,
    comment: 'Best detailing service in Lagos! My Mercedes looks brand new. The ceramic coating is holding up perfectly against the rain and sun. Professional team and outstanding results.',
    image: '👩‍💼',
    service: 'Ceramic Coating'
  },
  {
    id: 3,
    name: 'Mike Adekunle',
    role: 'Honda Accord Owner',
    rating: 5,
    comment: 'Quick and professional dent removal. You can&apos;t even tell there was damage. The team was punctual, professional, and the pricing was very reasonable. Will definitely recommend!',
    image: '👨‍🏭',
    service: 'Dent Removal'
  },
  {
    id: 4,
    name: 'Grace Williams',
    role: 'Ford Explorer Owner',
    rating: 5,
    comment: 'The interior cleaning service transformed my car! They removed stubborn stains I thought were permanent. Very thorough and affordable. My car smells and looks brand new!',
    image: '👩‍⚕️',
    service: 'Interior Detailing'
  },
  {
    id: 5,
    name: 'David Chukwu',
    role: 'BMW 5 Series Owner',
    rating: 5,
    comment: 'Outstanding paint correction work! They removed years of swirl marks and scratches. The gloss is incredible. Professional service from start to finish. Highly recommended!',
    image: '👨‍💻',
    service: 'Paint Correction'
  },
  {
    id: 6,
    name: 'Amina Bello',
    role: 'Lexus RX Owner',
    rating: 5,
    comment: 'Emergency repair service saved me! After a minor collision, they had my car looking perfect in just 3 days. Worked directly with my insurance. Amazing service!',
    image: '👩‍🎓',
    service: 'Collision Repair'
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  )
}

export function TestimonialsCarousel() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our services.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <StarRating rating={5} />
              <span className="text-gray-900 dark:text-white font-semibold">4.9/5</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600 dark:text-gray-400">200+ Google Reviews</span>
          </div>
        </div>

        <Carousel
          className="max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 8000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border dark:border-gray-700 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-full flex items-center justify-center text-xl mb-4">
                      {testimonial.image}
                    </div>
                    
                    {/* Rating */}
                    <StarRating rating={testimonial.rating} />
                    
                    {/* Comment */}
                    <blockquote className="my-4 flex-1">
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                        &ldquo;{testimonial.comment}&rdquo;
                      </p>
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="mt-auto">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                        {testimonial.role}
                      </p>
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white/80 hover:bg-white border-none shadow-lg" />
          <CarouselNext className="right-0 bg-white/80 hover:bg-white border-none shadow-lg" />
        </Carousel>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="mb-6 text-blue-100">
              Join hundreds of satisfied customers who trust AutoElite with their vehicles.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Book Service Now
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Google Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}