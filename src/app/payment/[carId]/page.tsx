"use client"

import { RentalSummary } from "@/components/RentalSummary"
import { CheckoutForm } from "@/components/CheckoutForm"
import { CarDataInterface } from "@/types/types"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { usePathname } from "next/navigation";

export default function CheckoutPage() {


  const pathname = usePathname()
  const [amount, setAmount] = useState<number | null>(null);

  const carId = pathname.split('/').pop(); // Extract the id (e.g., "car-8")

  const [carData, setCarData] = useState<CarDataInterface[]>([])
  const [isError, setIsError] = useState<string>('')

  useEffect(() => {
    const fetchingCar = async () => {
      try {
        const data = await client.fetch(`*[_type == "car" && _id == $carId]`, { carId })
        setCarData(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log("error: ", err);
          setIsError(err.message);
        } else {
          console.log("An unexpected error occurred: ", err);
          setIsError("An unexpected error occurred");
        }
      }
    }

    fetchingCar()
  }, [carId])


  useEffect(() => {
    // Retrieve the amount from sessionStorage
    const storedAmount = sessionStorage.getItem("amount");
    if (storedAmount) {
      setAmount(parseFloat(storedAmount));
    } else {
      console.error("Amount not found. Redirecting to booking page.");
      // Redirect user back to booking page if no amount is found
    }
  }, []);


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
              <RentalSummary
                data={carData.length > 0 ? carData[0] : null}
                totalPrice={amount!}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FOR MOBILE */}

      <div className="block lg:hidden min-h-screen bg-gray-200 p-4 md:p-6 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">

            <div className="lg:sticky lg:top-6 lg:h-fit">
              <RentalSummary
                data={carData.length > 0 ? carData[0] : null}
                totalPrice={amount!}
              />
            </div>
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>
          </div>
        </div>
      </div>

      {
        isError &&
        <div className='overflow-hidden'>
          <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
            <div className='text-2xl font-bold text-black text-center'>
              &quot;Unable to load car detail. Please try again later.&quot;
              <br />
              {isError}
            </div>
          </div>
        </div>
      }


    </>

  )
}