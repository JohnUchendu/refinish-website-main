'use client'

import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'
import { Product } from '@/types'
import { useState } from 'react'

interface AddToCartButtonProps {
  product: Product
  disabled?: boolean
}

export function AddToCartButton({ product, disabled = false }: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)
    addItem(product)
    
    // Reset loading state after a brief delay for better UX
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <Button 
      onClick={handleAddToCart}
      disabled={disabled || isAdding}
      size="sm"
    >
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </Button>
  )
}