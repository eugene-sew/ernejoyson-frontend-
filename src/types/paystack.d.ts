declare module '@paystack/inline-js' {
  export default class PaystackPop {
    newTransaction(options: {
      key: string
      email: string
      amount: number
      currency?: string
      reference?: string
      metadata?: Record<string, any>
      onSuccess?: (transaction: { reference: string; [key: string]: any }) => void
      onCancel?: () => void
      [key: string]: any
    }): void
    resumeTransaction(accessCode: string): void
  }
}
