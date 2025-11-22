'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const reference = searchParams.get('reference')

  useEffect(() => {
    if (reference) {
      // Verify payment on client side (optional - webhook is primary)
      fetch(`/api/webhook/paystack?reference=${reference}`)
        .catch(console.error)
    }
  }, [reference])

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
          {reference && <span className="block text-sm mt-2">Reference: {reference}</span>}
        </p>
        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/products">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}