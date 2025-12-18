// app/terms/page.tsx

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Welcome to AutoElite. These Terms of Service govern your use of our website located at autoelite.com 
                and our services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Services</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AutoElite provides professional automobile body works, detailing, cleaning, and restoration services. 
                We also offer automotive care products for purchase through our website.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                <li>Auto body repair and restoration</li>
                <li>Paint correction and ceramic coating</li>
                <li>Vehicle detailing and cleaning</li>
                <li>Automotive care products</li>
                <li>Consultation and quote services</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                <li>Provide accurate and complete information when requesting services</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* Appointments and Bookings */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Appointments and Bookings</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Service appointments are subject to availability. We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                <li>Reschedule appointments due to unforeseen circumstances</li>
                <li>Request additional information about your vehicle</li>
                <li>Modify service timelines based on vehicle condition</li>
                <li>Cancel appointments with proper notice</li>
              </ul>
            </section>

            {/* Payments and Pricing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Payments and Pricing</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All prices are quoted in Nigerian Naira (NGN). Payment terms:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                <li>Quotes are valid for 30 days from issuance</li>
                <li>Deposit may be required for certain services</li>
                <li>Full payment is due upon service completion</li>
                <li>We accept cash, bank transfer, and card payments</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            {/* Product Sales */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Product Sales</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For product purchases through our website:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                <li>All product descriptions and images are for reference only</li>
                <li>We reserve the right to limit quantities</li>
                <li>Products are subject to availability</li>
                <li>Shipping costs are calculated at checkout</li>
                <li>Delivery times are estimates and not guaranteed</li>
              </ul>
            </section>

            {/* Cancellation and Refunds */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Cancellation and Refunds</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Cancellation and refund policies:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 ml-4">
                <li>Service appointments may be cancelled with 24 hours notice</li>
                <li>Deposits are non-refundable for cancellations with less than 24 hours notice</li>
                <li>Product returns are accepted within 14 days of purchase</li>
                <li>Products must be unopened and in original packaging</li>
                <li>Refunds will be processed within 7-10 business days</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of AutoElite 
                and protected by copyright laws. You may not use our content without written permission.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AutoElite shall not be liable for any indirect, incidental, special, or consequential damages arising 
                from your use of our services. Our total liability shall not exceed the amount paid for the specific service.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to Terms</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                upon posting on our website. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Information</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>AutoElite</strong><br />
                  123 Automotive Street<br />
                  Victoria Island, Lagos<br />
                  Nigeria<br />
                  Email: legal@autoelite.com<br />
                  Phone: +234 812 345 6789
                </p>
              </div>
            </section>

            {/* Footer Navigation */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Contact Us
                </Link>
                <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}