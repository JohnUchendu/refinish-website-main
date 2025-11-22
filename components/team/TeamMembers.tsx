const teamMembers = [
  {
    id: 1,
    name: 'Chinedu Okoro',
    role: 'Lead Auto Body Specialist',
    experience: '12 years',
    specialty: 'Paint Correction & Dent Repair',
    image: '👨‍🔧'
  },
  {
    id: 2,
    name: 'Amina Bello',
    role: 'Detailing Expert',
    experience: '8 years',
    specialty: 'Ceramic Coating & Interior Detailing',
    image: '👩‍💼'
  },
  {
    id: 3,
    name: 'Emeka Nwosu',
    role: 'Mechanical Engineer',
    experience: '15 years',
    specialty: 'Structural Repair & Frame Straightening',
    image: '👨‍🏭'
  },
  {
    id: 4,
    name: 'Funke Adebayo',
    role: 'Customer Service Manager',
    experience: '6 years',
    specialty: 'Client Relations & Quality Assurance',
    image: '👩‍💻'
  }
]

export function TeamMembers() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Meet Our Expert Team</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our certified professionals bring years of experience and passion to every vehicle we service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {member.image}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.experience} Experience</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}