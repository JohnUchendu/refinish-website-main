const mockReviews = [
  {
    id: 1,
    name: 'James Okafor',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Exceptional service! They restored my 2018 Toyota Camry after a minor accident. The paint matching was perfect and the finish is better than factory!',
    vehicle: 'Toyota Camry 2018'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    date: '1 month ago',
    comment: 'Best detailing service in Lagos! My Mercedes looks brand new. The ceramic coating is holding up perfectly against the rain and sun.',
    vehicle: 'Mercedes-Benz C300'
  },
  {
    id: 3,
    name: 'Mike Adekunle',
    rating: 5,
    date: '3 days ago',
    comment: 'Quick and professional dent removal. You can\'t even tell there was damage. Will definitely recommend to friends and family.',
    vehicle: 'Honda Accord 2020'
  },
  {
    id: 4,
    name: 'Grace Williams',
    rating: 5,
    date: '2 months ago',
    comment: 'The interior cleaning service transformed my car! They removed stubborn stains I thought were permanent. Very thorough and affordable.',
    vehicle: 'Ford Explorer 2019'
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  )
}

export function GoogleReviews() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto">
            Read genuine reviews from our satisfied customers on Google Business
          </p>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              <StarRating rating={5} />
              <span className="text-gray-900 dark:text-white font-semibold">4.9/5</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600 dark:text-gray-400">200+ Google Reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockReviews.map((review) => (
            <div key={review.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.vehicle}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{review.comment}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Reviews on Google
          </button>
        </div>
      </div>
    </section>
  )
}