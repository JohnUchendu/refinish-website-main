import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">

              <div className="relative">
                <div className="w-50 h-50 rounded-lg flex items-center justify-center">
                  {/* <Car className="h-6 w-6 text-white" />
                <Wrench className="h-3 w-3 text-blue-200 absolute -bottom-1 -right-1" /> */}
                </div>

                <Image
                  src="/images/logo.png"
                  alt="AutoElite - Premium Auto Body Works & Detailing"
                  fill
                  className="object-contain"
                  priority
                />

              </div>

            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium automobile body works, detailing, and cleaning services.
              Bringing your vehicle back to showroom condition with professional care and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                {/* Add social icons */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services" className="hover:text-white transition-colors">Auto Body Works</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Car Detailing</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Paint Correction</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Ceramic Coating</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Rumuola Street</p>
              <p>PH, Nigeria</p>
              <p>+234 812 000 5000</p>
              <p>info@refinish.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Refinish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}