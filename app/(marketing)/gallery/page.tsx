const galleryImages = [
  { id: 1, category: 'Body Repair', description: 'Complete auto body restoration' },
  { id: 2, category: 'Detailing', description: 'Interior deep cleaning' },
  { id: 3, category: 'Paint Correction', description: 'Swirl mark removal' },
  { id: 4, category: 'Ceramic Coating', description: 'Premium protection application' },
  { id: 5, category: 'Headlight Restoration', description: 'Cloudy headlight repair' },
  { id: 6, category: 'Interior Cleaning', description: 'Leather conditioning' },
  { id: 7, category: 'Wheel Repair', description: 'Alloy wheel restoration' },
  { id: 8, category: 'Paint Job', description: 'Full vehicle repainting' },
  { id: 9, category: 'Dent Removal', description: 'Paintless dent repair' },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Work Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse through our portfolio of completed projects and see the quality of our work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden border group hover:shadow-xl transition-shadow">
            <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-4xl text-gray-400">📸</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1">{image.category}</h3>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">See Your Vehicle Here Next!</h2>
          <p className="text-gray-600 mb-6">
            Ready to transform your vehicle? Contact us today for a free consultation and quote.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  )
}