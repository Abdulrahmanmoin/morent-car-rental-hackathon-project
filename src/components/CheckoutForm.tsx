'use client'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@/components/StripePayment'),
  { ssr: false }
)

export function CheckoutForm() {

  return (
    <div >
        <DynamicComponentWithNoSSR />
    </div>
  )
}