import { Star } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { RentalSummary } from "../types/checkout"

interface RentalSummaryProps {
  data: RentalSummary
}

export function RentalSummary({ data }: RentalSummaryProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Rental Summary</h2>
      <p className="text-sm text-muted-foreground">
        Prices may change depending on the length of the rental and the price of your rental car.
      </p>
      
      <div className="mt-6 flex items-center gap-4">
        <div className="h-16 w-16 overflow-hidden rounded-lg bg-blue-50 text-center flex items-center justify-center">
          <Image
            src="/assets/car1detail.png"
            alt={data.carName}
            width={64}
            height={64}
            className="h-9 w-32 object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="font-semibold">{data.carName}</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(data.rating) ? "fill-orange-300 text-yellow-500" : "fill-muted text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground">{data.reviewCount}+ Reviewer</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${data.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${data.tax.toFixed(2)}</span>
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
          <span className="text-xl font-semibold">${data.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

