// components/team/TeamMembers.tsx

import { Award, Clock, Star, Users } from 'lucide-react'
import Image from 'next/image'

const teamMembers = [
  {
    id: 1,
    name: 'Chinedu Okoro',
    role: 'Lead Auto Body Specialist',
    experience: '12 years',
    specialty: 'Paint Correction & Dent Repair',
    image: '/images/team/chinedu-okoro.jpg',
    certifications: ['ASE Certified', 'I-CAR Trained']
  },
  {
    id: 2,
    name: 'Amina Bello',
    role: 'Detailing Expert',
    experience: '8 years',
    specialty: 'Ceramic Coating & Interior Detailing',
    image: '/images/team/amina-bello.jpg',
    certifications: ['IDDA Certified', 'Paint Protection Specialist']
  },
  {
    id: 3,
    name: 'Emeka Nwosu',
    role: 'Mechanical Engineer',
    experience: '15 years',
    specialty: 'Structural Repair & Frame Straightening',
    image: '/images/team/emeka-nwosu.jpg',
    certifications: ['ASE Master Tech', 'Structural Repair Expert']
  },
  {
    id: 4,
    name: 'Funke Adebayo',
    role: 'Customer Service Manager',
    experience: '6 years',
    specialty: 'Client Relations & Quality Assurance',
    image: '/images/team/funke-adebayo.jpg',
    certifications: ['Customer Service Pro', 'Quality Assurance']
  }
]

export function TeamMembers() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Expert Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Meet the certified professionals dedicated to delivering exceptional auto care services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              {/* Team Member Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Clock className="h-3 w-3 text-blue-600" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Team Member Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                  {member.role}
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {member.specialty}
                </p>

                {/* Certifications */}
                <div className="space-y-2 mb-4">
                  {member.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-xs">
                      <Award className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{cert}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <Users className="h-3 w-3" />
                    <span>500+ Jobs</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span>4.9 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Certified Experts</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Combined</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Vehicles Serviced</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Team Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work With Our Experts?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
              Our certified team is ready to provide your vehicle with the professional care it deserves
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Schedule Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                Meet Full Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}