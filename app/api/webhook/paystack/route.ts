import { NextResponse } from 'next/server'
import { verifyTransaction } from '@/lib/paystack'
import { sanityClientPrivate } from '@/lib/sanity'

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-paystack-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    // Verify webhook signature (implementation depends on Paystack webhook setup)
    // For now, we'll verify by checking the transaction directly

    const { event, data } = JSON.parse(body)

    if (event === 'charge.success') {
      const verification = await verifyTransaction(data.reference)
      
      if (verification.data.status === 'success') {
        // Update order status in Sanity or your database
        // This is where you'd create an order document in Sanity
        console.log('Payment successful for reference:', data.reference)
        
        // Example: Create order in Sanity
        await sanityClientPrivate.create({
          _type: 'order',
          reference: data.reference,
          amount: verification.data.amount / 100, // Convert from kobo
          status: 'completed',
          customerEmail: data.customer?.email,
          metadata: verification.data.metadata,
          paidAt: new Date().toISOString()
        })
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  // For manual verification from success page
  const { searchParams } = new URL(request.url)
  const reference = searchParams.get('reference')

  if (!reference) {
    return NextResponse.json({ error: 'No reference provided' }, { status: 400 })
  }

  try {
    const verification = await verifyTransaction(reference)
    return NextResponse.json(verification)
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}