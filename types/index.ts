// types/index.ts

export interface Product {
  _id: string
  name: string
  description: string
  price: number
  slug: string
  images: string[]
  category: string
  inStock: boolean
  // Add these new properties
  isBestSeller?: boolean
  isNew?: boolean
  features?: string[]
  originalPrice?: number
  freeShipping?: boolean
  warranty?: string | boolean
}

export interface Service {
  _id: string
  title: string
  description: string
  priceRange: string
  duration: string
  image: string
  features: string[]
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}