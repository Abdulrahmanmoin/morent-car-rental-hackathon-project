export interface RentalSummary {
    carName: string
    rating: number
    reviewCount: number
    subtotal: number
    tax: number
    total: number
  }
  
  export interface BillingInfo {
    name: string
    address: string
    phoneNumber: string
    townCity: string
  }
  
  export interface RentalInfo {
    pickUp: {
      location: string
      date: string
      time: string
    }
    dropOff: {
      location: string
      date: string
      time: string
    }
  }
  
  export interface PaymentInfo {
    method: 'credit-card' | 'paypal' | 'bitcoin'
    cardNumber?: string
    cardHolder?: string
    expirationDate?: string
    cvc?: string
  }
  
  