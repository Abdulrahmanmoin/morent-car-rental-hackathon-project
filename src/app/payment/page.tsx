import { RentalSummary } from "@/components/RentalSummary"
import { CheckoutForm } from "@/components/CheckoutForm"

const sampleData = {
  carName: "Nissan GT-R",
  rating: 4,
  reviewCount: 440,
  subtotal: 80.00,
  tax: 0,
  total: 80.00,
}

export default function CheckoutPage() {
  return (
    <>

      {/* FOR LARGE DEVICES */}

      <div className="hidden lg:block min-h-screen bg-gray-100 p-4 md:p-6 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>
            <div className="lg:sticky lg:top-6 lg:h-fit">
              <RentalSummary data={sampleData} />
            </div>
          </div>
        </div>
      </div>

      {/* FOR MOBILE */}

      <div className="block lg:hidden min-h-screen bg-gray-200 p-4 md:p-6 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">

            <div className="lg:sticky lg:top-6 lg:h-fit">
              <RentalSummary data={sampleData} />
            </div>
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>

    </>

  )
}