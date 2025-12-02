import { HeroCarousel } from '@/components/hero/HeroCarousel'
import { TestimonialsCarousel } from '@/components/testimonials/TestimonialsCarousel'
import { TrustIndicators } from '@/components/trust/TrustIndicators'
import { TeamMembers } from '@/components/team/TeamMembers'

import Link from 'next/link'
import { Button } from '@/components/ui/button'


import { ServicesPreview } from '@/components/services/ServicesPreview'
import { PortfolioShowcase } from '@/components/portfolio/PortfolioShowcase'
import { ContactForm } from '@/components/contact/ContactForm'


export default function Home() {
 

  return (
    <div className="space-y-0">
      {/* Hero Carousel */}
      <div className="h-[600px] md:h-[700px]">
        <HeroCarousel />
      </div>

      {/* Trust Indicators */}
      <TrustIndicators />


      {/* Team Members */}
      <TeamMembers />

      {/* Services Preview */}
    <ServicesPreview />
        <ContactForm />

<PortfolioShowcase />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />


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