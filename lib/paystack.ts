export interface InitializeTransactionResponse {
  status: boolean
  message: string
  data: {
    authorization_url: string
    access_code: string
    reference: string
  }
}

export interface VerifyTransactionResponse {
  status: boolean
  message: string
  data: {
    amount: number
    currency: string
    status: 'success' | 'failed' | 'abandoned'
    reference: string
    metadata: any
  }
}

export async function initializeTransaction(
  email: string,
  amount: number,
  reference: string,
  metadata?: any
): Promise<InitializeTransactionResponse> {
  const response = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      amount: amount * 100, // Convert to kobo
      reference,
      metadata,
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to initialize transaction')
  }

  return response.json()
}

export async function verifyTransaction(reference: string): Promise<VerifyTransactionResponse> {
  const response = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
    headers: {
      'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to verify transaction')
  }

  return response.json()
}