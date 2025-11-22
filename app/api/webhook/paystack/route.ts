import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-paystack-signature')

    if (!signature) {
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    const { event, data } = JSON.parse(body)

    if (event === 'charge.success') {
      // Simulate successful payment processing
      console.log('Demo: Payment successful for reference:', data.reference)
      
      // In a real app, you would:
      // 1. Verify the transaction with Paystack
      // 2. Update your database
      // 3. Send confirmation emails, etc.
      
      // For demo purposes, just log and return success
      console.log('Demo: Order would be created in database with reference:', data.reference)
    }

    return NextResponse.json({ received: true, message: 'Webhook processed successfully (demo mode)' })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  // For manual verification from success page (demo version)
  const { searchParams } = new URL(request.url)
  const reference = searchParams.get('reference')

  if (!reference) {
    return NextResponse.json({ error: 'No reference provided' }, { status: 400 })
  }

  try {
    // Simulate verification response
    const verification = {
      status: true,
      message: 'Verification successful',
      data: {
        reference: reference,
        amount: 10000, // Example amount in kobo
        currency: 'NGN',
        status: 'success' as const,
        metadata: {
          custom_fields: []
        }
      }
    }

    return NextResponse.json(verification)
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: 'Verification failed' },
      { status: 500 }
    )
  }
}