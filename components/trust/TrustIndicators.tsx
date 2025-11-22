export function TrustIndicators() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-600 dark:text-blue-400 text-xl">🏢</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">CAC Registered</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">RC: 1234567</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
              <span className="text-green-600 dark:text-green-400 text-xl">⭐</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">4.9/5 Rating</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">200+ Reviews</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto">
              <span className="text-purple-600 dark:text-purple-400 text-xl">🚗</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">5,000+ Vehicles</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Serviced</p>
          </div>
          
          <div className="space-y-2">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto">
              <span className="text-orange-600 dark:text-orange-400 text-xl">⏱️</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white">10+ Years</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}