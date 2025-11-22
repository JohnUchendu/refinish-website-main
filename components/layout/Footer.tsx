import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              <span className="font-bold text-xl">AutoElite</span>
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

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Automotive Street</p>
              <p>Lagos, Nigeria</p>
              <p>+234 812 345 6789</p>
              <p>info@autoelite.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoElite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}