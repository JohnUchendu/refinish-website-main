import { notFound } from 'next/navigation'
import { mockProducts } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { AddToCartButton } from '@/components/cart/AddToCartButton'

function getProduct(slug: string) {
  const product = mockProducts.find(p => p.slug === slug)
  if (!product) notFound()
  return product
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-600 text-6xl">🧴</div>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-blue-600">{formatPrice(product.price)}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex items-center space-x-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              product.inStock 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
            <span className="text-sm text-gray-500 capitalize">{product.category}</span>
          </div>

          <div className="flex space-x-4">
            <AddToCartButton product={product} disabled={!product.inStock} />
            <Button variant="outline" disabled={!product.inStock}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}