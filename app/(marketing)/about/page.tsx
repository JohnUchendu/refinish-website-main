export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About AutoElite</h1>
        
        <div className="prose prose-lg mx-auto">
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, AutoElite has been at the forefront of automotive excellence in Nigeria. 
              What started as a small auto body shop has grown into a comprehensive automotive care center 
              serving thousands of satisfied customers across the region.
            </p>
            <p className="text-gray-600">
              Our mission is simple: to provide exceptional auto body works, detailing, and cleaning services 
              that exceed customer expectations while maintaining the highest standards of quality and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading automotive care provider in West Africa, setting new standards for 
                quality, innovation, and customer service in the auto body and detailing industry.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Quality craftsmanship in every job</li>
                <li>• Honest and transparent pricing</li>
                <li>• Customer satisfaction guarantee</li>
                <li>• Continuous improvement and innovation</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2">Expert Technicians</h4>
                <p className="text-sm text-gray-600">Certified professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🔧</span>
                </div>
                <h4 className="font-semibold mb-2">Quality Materials</h4>
                <p className="text-sm text-gray-600">Premium products and equipment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⏱️</span>
                </div>
                <h4 className="font-semibold mb-2">Timely Service</h4>
                <p className="text-sm text-gray-600">Quick turnaround without compromising quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}