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

export interface CarDataInterface {
  brand: string | null;
  fuelCapacity: string
  image: {
    _type: 'image',
    asset: { _ref: string }
  }
  name: string
  originalPrice: string
  pricePerDay: string
  seatingCapacity: string
  tags: string[]
  transmission: string
  type: string;
  
  _id: string
  _rev: string
  _type: string
}

export interface CarDetailPageProps {
  params: {
    id: string;
  };
}