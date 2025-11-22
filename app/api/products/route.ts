import { NextResponse } from 'next/server'
import { sanityClient } from '@/lib/sanity'
import { productsQuery } from '@/lib/sanity'

export async function GET() {
  try {
    const products = await sanityClient.fetch(productsQuery)
    return NextResponse.json(products)
  } catch (error) {
    console.error('Products API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}