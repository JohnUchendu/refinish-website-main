'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Autoplay from "embla-carousel-autoplay"

const heroSlides = [
  {
    id: 1,
    title: "Premium Auto Body Works & Detailing",
    subtitle: "Professional automobile restoration, detailing, and cleaning services. Bringing your vehicle back to showroom condition.",
    background: "from-gray-900 to-blue-900",
    image: "🚗",
    cta: "Our Services",
    ctaLink: "/services"
  },
  {
    id: 2,
    title: "Expert Paint Correction & Ceramic Coating",
    subtitle: "Advanced paint protection and restoration services to keep your vehicle looking brand new for years.",
    background: "from-blue-900 to-purple-900",
    image: "✨",
    cta: "View Gallery",
    ctaLink: "/gallery"
  },
  {
    id: 3,
    title: "Emergency Auto Body Repair Services",
    subtitle: "Quick and reliable collision repair services. We work with all insurance companies.",
    background: "from-purple-900 to-indigo-900",
    image: "🔧",
    cta: "Get Quote",
    ctaLink: "/contact"
  },
  {
    id: 4,
    title: "Premium Auto Care Products",
    subtitle: "Shop our selection of professional-grade automotive care products and accessories.",
    background: "from-indigo-900 to-blue-900",
    image: "🧴",
    cta: "Shop Now",
    ctaLink: "/products"
  }
]

export function HeroCarousel() {
  return (
    <Carousel
      className="w-full h-[600px] md:h-[700px]"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {heroSlides.map((slide) => (
          <CarouselItem key={slide.id} className="h-[600px] md:h-[700px]">
            <section className={`relative bg-gradient-to-r ${slide.background} text-white w-full h-full flex items-center`}>
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href={slide.ctaLink}>{slide.cta}</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                        <Link href="/contact">Free Consultation</Link>
                      </Button>
                    </div>
                    
                    {/* Trust badges */}
                    <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">⭐</span>
                        <span className="text-blue-100">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🚗</span>
                        <span className="text-blue-100">5,000+ Vehicles</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">🏆</span>
                        <span className="text-blue-100">CAC Certified</span>
                      </div>
                    </div>
                  </div>

                  {/* Image/Icon */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="text-8xl md:text-9xl opacity-80">
                      {slide.image}
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 border-none text-white" />
      <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 border-none text-white" />
    </Carousel>
  )
}