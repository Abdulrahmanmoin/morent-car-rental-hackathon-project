import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { CarDataInterface, RentalSummary } from "../types/types"
import { urlFor } from "@/lib/sanityImageUrlConverter"

interface RentalSummaryProps {
  data: CarDataInterface | null;
  totalPrice: number;
}

export function RentalSummary({ data, totalPrice }: RentalSummaryProps) {

  if (!data) {
    return <div>No car data available.</div>;
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Rental Summary</h2>
      <p className="text-sm text-muted-foreground">
        Prices may change depending on the length of the rental and the price of your rental car.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-lg bg-blue-50 text-center flex items-center justify-center">
          <div
            className='w-20 h-14  bg-cover bg-center flex items-center rounded-md'
            style={{ backgroundImage: `url('/assets/second-box-bg-img.jpeg')` }}
          >
            <Image
              src={urlFor(data.image).url()}
              alt='Car'
              height={1000}
              width={1000}
              className='rounded-lg px-[4px]'
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{data.name}</h3>

        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalPrice}</span>
          {/* <span>${data.subtotal.toFixed(2)}</span> */}
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>$0</span>
        </div>
        <div className="flex items-center gap-2">
          <Input placeholder="Apply promo code" className="flex-1" />
          <Button variant="outline">Apply now</Button>
        </div>
        <div className="flex justify-between border-t pt-4">
          <div>
            <span className="font-semibold">Total Rental Price</span>
            <p className="text-sm text-muted-foreground">Overall price and includes rental discount</p>
          </div>
          <span className="text-xl font-semibold">${totalPrice}</span>
        </div>
      </div>
    </div>
  )
}

