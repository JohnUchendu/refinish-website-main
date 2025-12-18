// components/shop/ProductsShowcase.tsx


'use client'

import { useState } from 'react'
import { ShoppingCart, Star, ArrowRight, Plus, Minus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

interface ShowcaseProduct {
  _id: string
  name: string
  description: string
  price: number
  originalPrice: number
  image: string
  rating: number
  reviewCount: number
  category: string
  inStock: boolean
  features: string[]
  // Add the missing properties that Product interface requires
  slug: string
  images: string[]
}

const featuredProducts: ShowcaseProduct[] = [
  {
    _id: '1',
    name: 'Premium Ceramic Coating Kit',
    description: 'Professional-grade ceramic coating for long-lasting paint protection and hydrophobic properties.',
    price: 45000,
    originalPrice: 55000,
    image: '/images/products/ceramic-coating-kit.jpg',
    rating: 4.9,
    reviewCount: 124,
    category: 'Protection',
    inStock: true,
    features: ['9H Hardness', '2+ Years Protection', 'UV Resistance', 'Easy Application'],
    slug: 'premium-ceramic-coating-kit',
    images: ['/images/products/ceramic-coating-kit.jpg']
  },
  {
    _id: '2',
    name: 'Interior Cleaning Bundle',
    description: 'Complete interior cleaning kit for leather, plastic, fabric, and dashboard surfaces.',
    price: 18500,
    originalPrice: 22000,
    image: '/images/products/interior-cleaning-bundle.jpg',
    rating: 4.8,
    reviewCount: 89,
    category: 'Cleaning',
    inStock: true,
    features: ['Leather Safe', 'Non-Toxic', 'Streak-Free', 'All Surfaces'],
    slug: 'interior-cleaning-bundle',
    images: ['/images/products/interior-cleaning-bundle.jpg']
  },
  {
    _id: '3',
    name: 'Headlight Restoration Kit',
    description: 'Professional headlight restoration kit to remove yellowing and restore clarity.',
    price: 12000,
    originalPrice: 15000,
    image: '/images/products/headlight-restoration-kit.jpg',
    rating: 4.7,
    reviewCount: 67,
    category: 'Restoration',
    inStock: true,
    features: ['UV Protection', 'Clear Results', 'Easy to Use', 'Long Lasting'],
    slug: 'headlight-restoration-kit',
    images: ['/images/products/headlight-restoration-kit.jpg']
  },
  {
    _id: '4',
    name: 'Premium Car Wax',
    description: 'High-quality carnauba wax for ultimate shine and protection against environmental elements.',
    price: 15000,
    originalPrice: 18000,
    image: '/images/products/premium-car-wax.jpg',
    rating: 4.9,
    reviewCount: 156,
    category: 'Protection',
    inStock: true,
    features: ['Deep Gloss', 'Water Beading', 'UV Protection', 'Easy Application'],
    slug: 'premium-car-wax',
    images: ['/images/products/premium-car-wax.jpg']
  },
  {
    _id: '5',
    name: 'Wheel & Tire Cleaner',
    description: 'Specialized cleaner for alloy wheels and tires, effectively removes brake dust and grime.',
    price: 8500,
    originalPrice: 10000,
    image: '/images/products/wheel-tire-cleaner.jpg',
    rating: 4.6,
    reviewCount: 92,
    category: 'Cleaning',
    inStock: true,
    features: ['Brake Dust Removal', 'Safe for Alloys', 'Non-Acidic', 'Quick Acting'],
    slug: 'wheel-tire-cleaner',
    images: ['/images/products/wheel-tire-cleaner.jpg']
  },
  {
    _id: '6',
    name: 'Paint Touch-Up Pen Set',
    description: 'Factory-matched paint pens for quick and easy scratch and chip repairs.',
    price: 7500,
    originalPrice: 9000,
    image: '/images/products/paint-touch-up-pen.jpg',
    rating: 4.5,
    reviewCount: 78,
    category: 'Repair',
    inStock: true,
    features: ['Color Matched', 'Easy Application', 'Quick Dry', 'Durable Finish'],
    slug: 'paint-touch-up-pen-set',
    images: ['/images/products/paint-touch-up-pen.jpg']
  }
]

export function ProductsShowcase() {
  const { addItem } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})
  const [addingProduct, setAddingProduct] = useState<string | null>(null)

  const handleAddToCart = async (product: ShowcaseProduct) => {
    setAddingProduct(product._id)

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const quantity = quantities[product._id] || 1
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    
    setAddingProduct(null)
    setQuantities(prev => ({ ...prev, [product._id]: 1 }))
  }

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => {
      const current = prev[productId] || 1
      const newQuantity = Math.max(1, current + change)
      return { ...prev, [productId]: newQuantity }
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(price)
  }

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Premium Auto Care Products
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Shop our selection of professional-grade automotive care products and accessories
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => {
            const quantity = quantities[product._id] || 1
            const isAdding = addingProduct === product._id

            return (
              <div
                key={product._id}
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {product.category}
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="absolute bottom-4 left-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${product.inStock
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <StarRating rating={product.rating} />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ({product.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Product Name & Description */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Section */}
                  <div className="flex items-center justify-between space-x-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                      <button
                        onClick={() => updateQuantity(product._id, -1)}
                        disabled={quantity <= 1}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 disabled:opacity-50"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 py-1 text-sm font-medium text-gray-900 dark:text-white min-w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product._id, 1)}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock || isAdding}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      size="sm"
                    >
                      {isAdding ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Adding...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <ShoppingCart className="h-4 w-4" />
                          <span>Add to Cart</span>
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Features & CTA */}
        <div className="text-center">
          <div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Products?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Premium Quality</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Professional-grade formulas used by experts</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShoppingCart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Free shipping on orders over ₦50,000</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Satisfaction Guaranteed</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">30-day money back guarantee</p>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/products" className="flex items-center space-x-2">
                  <span>View All Products</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white">
                <Link href="/cart" className="flex items-center space-x-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>View Cart</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}