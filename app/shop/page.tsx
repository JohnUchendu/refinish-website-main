// app/shop/page.tsx

"use client"

import { useState, useMemo } from 'react'
import { mockProducts } from '@/lib/mock-data'
import { formatPrice } from '@/lib/utils'
import { AddToCartButton } from '@/components/cart/AddToCartButton'
import { Search, Filter, Truck, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

// Extract unique categories from products
const categories = ['All', ...Array.from(new Set(mockProducts.map(product => product.category)))]

// Price ranges for filtering in Nigerian Naira
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₦10,000', min: 0, max: 10000 },
  { label: '₦10,000 - ₦25,000', min: 10000, max: 25000 },
  { label: '₦25,000 - ₦50,000', min: 25000, max: 50000 },
  { label: 'Over ₦50,000', min: 50000, max: Infinity }
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name')

  // Filter and sort products - FIX 1: Use const instead of let
  const filteredProducts = useMemo(() => {
    const filtered = mockProducts.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice = product.price >= selectedPriceRange.min && product.price <= selectedPriceRange.max
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      return matchesCategory && matchesPrice && matchesSearch
    })

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price)
        break
      default:
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }, [selectedCategory, selectedPriceRange, searchQuery, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Auto Care Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Premium automotive care products, accessories, and maintenance supplies
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Price Range Filter */}
            <select
              value={priceRanges.indexOf(selectedPriceRange)}
              onChange={(e) => setSelectedPriceRange(priceRanges[parseInt(e.target.value)])}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {priceRanges.map((range, index) => (
                <option key={range.label} value={index}>{range.label}</option>
              ))}
            </select>

            {/* Sort By - FIX 2: Remove 'any' type */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price-low' | 'price-high')}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredProducts.length} of {mockProducts.length} products
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Filter className="h-4 w-4" />
            <span>Filters Applied</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div 
              key={product._id} 
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 group"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {product.isBestSeller && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                      Best Seller
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                      New
                    </Badge>
                  )}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                {/* Category */}
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>

                {/* Features */}
                {product.features && product.features.length > 0 && (
                  <div className="space-y-1 mb-4">
                    {product.features.slice(0, 2).map((feature: string, index: number) => (
                      <div key={index} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <AddToCartButton product={product} />
                </div>

                {/* Additional Info */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                  {product.freeShipping && (
                    <div className="flex items-center space-x-1 text-xs text-green-600 dark:text-green-400">
                      <Truck className="h-3 w-3" />
                      <span>Free Shipping</span>
                    </div>
                  )}
                  {product.warranty && (
                    <div className="flex items-center space-x-1 text-xs text-blue-600 dark:text-blue-400">
                      <Shield className="h-3 w-3" />
                      <span>Warranty</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No products found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <Button 
              onClick={() => {
                setSelectedCategory('All')
                setSelectedPriceRange(priceRanges[0])
                setSearchQuery('')
              }}
              variant="outline"
            >
              Clear all filters
            </Button>
          </div>
        )}

        {/* Trust Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Truck className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Free Shipping</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">On orders over ₦25,000</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">30-Day Returns</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hassle-free returns</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2 flex items-center justify-center text-2xl">✓</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Quality Guarantee</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Premium products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}