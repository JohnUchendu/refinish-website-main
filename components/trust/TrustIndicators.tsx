// components/trust/TrustIndicators.tsx

import { Building2, Star, Car, Clock, CheckCircle2, Users, Shield, Award, ThumbsUp } from 'lucide-react'

export function TrustIndicators() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Thousands of Vehicle Owners
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Experience the AutoElite difference - premium quality, professional service, guaranteed satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CAC Registered */}
          <div className="group text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Building2 className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              CAC Registered
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Fully licensed and compliant
            </p>
            <div className="flex items-center justify-center space-x-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircle2 className="h-3 w-3" />
              <span>RC: 1234567</span>
            </div>
          </div>

          {/* Rating */}
          <div className="group text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <div className="flex items-center space-x-0.5">
                <Star className="h-6 w-6 text-blue-600 dark:text-blue-400 fill-current" />
                <span className="text-blue-700 dark:text-blue-300 font-bold text-sm">4.9</span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Excellent Rating
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              200+ 5-star reviews
            </p>
            <div className="flex items-center justify-center space-x-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircle2 className="h-3 w-3" />
              <span>Google Verified</span>
            </div>
          </div>

          {/* Vehicles Serviced */}
          <div className="group text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Car className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              5,000+ Vehicles
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Successfully serviced
            </p>
            <div className="flex items-center justify-center space-x-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircle2 className="h-3 w-3" />
              <span>Nationwide Trust</span>
            </div>
          </div>

          {/* Experience */}
          <div className="group text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
              <Clock className="h-7 w-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              10+ Years
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Industry experience
            </p>
            <div className="flex items-center justify-center space-x-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <CheckCircle2 className="h-3 w-3" />
              <span>Since 2013</span>
            </div>
          </div>
        </div>

        {/* Additional Trust Elements - Single Row */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-xl font-bold text-gray-900 dark:text-white">6M</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Warranty</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-xl font-bold text-gray-900 dark:text-white">50+</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technicians</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-xl font-bold text-gray-900 dark:text-white">100%</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <ThumbsUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <div className="text-xl font-bold text-gray-900 dark:text-white">24/7</div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience Premium Auto Care?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Join thousands of satisfied customers who trust AutoElite with their vehicles
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Book Service Now
              </button>
              <button className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                View Our Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}