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
import Image from 'next/image'

const heroSlides = [
  {
    id: 1,
    title: "Premium Auto Body Works & Detailing",
    subtitle: "Professional automobile restoration, detailing, and cleaning services. Bringing your vehicle back to showroom condition.",
    background: "from-gray-900/90 to-blue-900/90",
    image: "/images/gwagon.png", // Added leading slash
    cta: "Our Services",
    ctaLink: "/services",
    overlay: "bg-black/40"
  },
  {
    id: 2,
    title: "Expert Paint Correction & Ceramic Coating",
    subtitle: "Advanced paint protection and restoration services to keep your vehicle looking brand new for years.",
    background: "from-blue-900/90 to-purple-900/90",
    image: "/images/restorationcar.png", // Added leading slash
    cta: "View Gallery",
    ctaLink: "/gallery",
    overlay: "bg-black/50"
  },
  {
    id: 3,
    title: "Emergency Auto Body Repair Services",
    subtitle: "Quick and reliable collision repair services. We work with all insurance companies.",
    background: "from-purple-900/90 to-indigo-900/90",
    image: "/images/emergency.png", // Added leading slash
    cta: "Get Quote",
    ctaLink: "/contact",
    overlay: "bg-black/40"
  },
  {
    id: 4,
    title: "Premium Auto Care Products",
    subtitle: "Shop our selection of professional-grade automotive care products and accessories.",
    background: "from-indigo-900/90 to-blue-900/90",
    image: "/images/hero/neelabh-raj-rS9PBJBY5pc-unsplash.jpg", // Added leading slash
    cta: "Shop Now",
    ctaLink: "/products",
    overlay: "bg-black/50"
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
            <section className="relative w-full h-full flex items-center overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                {/* Gradient Overlay */}
                {/* <div className={`absolute inset-0 bg-gradient-to-r ${slide.background} ${slide.overlay}`}></div> */}
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Text Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                      <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
                        <Link href={slide.ctaLink}>{slide.cta}</Link>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 shadow-lg">
                        <Link href="/contact">Free Car Inspection</Link>
                      </Button>
                    </div>
                    
                    {/* Trust badges */}
                    <div className="flex items-center justify-center lg:justify-start space-x-4 pt-6">
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                          <span className="text-black text-xs font-bold">★</span>
                        </div>
                        <span className="text-white font-medium">4.9/5 Rating</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-bold">✓</span>
                        </div>
                        <span className="text-white font-medium">5,000+ Vehicles</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Visual Element */}
                  <div className="hidden lg:flex justify-end">
                    <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                      <div className="text-white text-center space-y-4">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white text-2xl font-bold">✓</span>
                        </div>
                        <p className="text-white font-semibold">Premium Quality Guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
            </section>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm" />
      <CarouselNext className="right-4 bg-white/20 hover:bg-white/30 border-none text-white backdrop-blur-sm" />
    </Carousel>
  )
}