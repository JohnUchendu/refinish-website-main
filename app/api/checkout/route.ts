import { NextResponse } from 'next/server'
import { initializeTransaction } from '@/lib/paystack'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, amount, reference, items, customer } = body

    if (!email || !amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid request data' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const response = await initializeTransaction(email, amount, reference, {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: `${customer.firstName} ${customer.lastName}`
        },
        {
          display_name: "Items",
          variable_name: "items",
          value: JSON.stringify(items.map((item: any) => ({
            product: item.product.name,
            quantity: item.quantity,
            price: item.product.price
          })))
        }
      ]
    })

    if (!response.status) {
      throw new Error(response.message)
    }

    return NextResponse.json({
      authorization_url: response.data.authorization_url,
      reference: response.data.reference
    })
  } catch (error) {
    console.error('Checkout API error:', error)
    return NextResponse.json(
      { error: 'Failed to initialize payment' },
      { status: 500 }
    )
  }
}