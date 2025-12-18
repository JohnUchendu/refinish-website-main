// components/gallery/GalleryCarousel.tsx

"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'


const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/body-repair-1.jpg',
    alt: 'Professional auto body repair work',
    category: 'Body Repair'
  },
  {
    id: 2,
    src: '/images/gallery/paint-correction-1.jpg',
    alt: 'Paint correction and polishing',
    category: 'Paint Correction'
  },
  {
    id: 3,
    src: '/images/gallery/detailing-1.jpg',
    alt: 'Premium car detailing service',
    category: 'Detailing'
  },
  {
    id: 4,
    src: '/images/gallery/ceramic-coating-1.jpg',
    alt: 'Ceramic coating application',
    category: 'Ceramic Coating'
  },
  {
    id: 5,
    src: '/images/gallery/interior-detailing-1.jpg',
    alt: 'Interior deep cleaning and detailing',
    category: 'Interior Detailing'
  },
  {
    id: 6,
    src: '/images/gallery/wheel-restoration-1.jpg',
    alt: 'Wheel restoration and repair',
    category: 'Wheel Restoration'
  },
  {
    id: 7,
    src: '/images/gallery/headlight-restoration-1.jpg',
    alt: 'Headlight restoration process',
    category: 'Headlight Restoration'
  },
  {
    id: 8,
    src: '/images/gallery/final-result-1.jpg',
    alt: 'Final result showcase',
    category: 'Final Results'
  }
]

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 3000)
    }
    
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Work Gallery
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Browse through our portfolio of premium automotive restoration and detailing work
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div 
            ref={carouselRef}
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Image */}
            <div className="relative h-80 md:h-96 lg:h-[500px]">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
              
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Image Info */}
              <div className="absolute bottom-6 left-6 text-white">
                <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                  {galleryImages[currentIndex].category}
                </span>
                <p className="text-lg font-semibold">{galleryImages[currentIndex].alt}</p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Auto-play Button */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 rounded-full p-2 shadow-lg transition-all duration-200"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Play className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6">
            <div className="flex space-x-3 overflow-x-auto py-2 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentIndex 
                      ? 'border-blue-600 dark:border-blue-400 scale-105' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                  }`}
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 96px"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-blue-600/20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 w-8'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>

        {/* Gallery Description */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Premium Automotive Craftsmanship
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Each image showcases our commitment to excellence in auto body repair, 
              paint correction, and detailing services. Our skilled technicians use 
              state-of-the-art equipment and premium products to deliver exceptional 
              results that exceed customer expectations.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}