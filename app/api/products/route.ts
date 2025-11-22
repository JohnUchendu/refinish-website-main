import { NextResponse } from 'next/server'
import { mockProducts } from '@/lib/mock-data'

export async function GET() {
  try {
    // Return mock products instead of fetching from Sanity
    return NextResponse.json(mockProducts)
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}