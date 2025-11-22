import { mockProducts } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { AddToCartButton } from '@/components/cart/AddToCartButton'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Auto Care Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Premium automotive care products and accessories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockProducts.map((product) => (
          <div key={product._id} className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-shadow">
            <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-gray-600 text-4xl">🧴</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">{formatPrice(product.price)}</span>
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}