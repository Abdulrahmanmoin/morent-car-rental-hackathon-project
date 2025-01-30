"use client"

import BillingInfoForm from '@/components/BillingInfoForm'
import Button from '@/components/Button';
import { RentalSummary } from '@/components/RentalSummary'
import { client } from '@/sanity/lib/client';
import { CarDataInterface, CarDetailPageProps } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react'

export default function BookingDetail(props: CarDetailPageProps) {


  const router = useRouter();

  const carId = props.params.carId;

  const [carData, setCarData] = useState<CarDataInterface[]>([])
  const [isError, setIsError] = useState<string>('')
  const [totalPrice, setTotalPrice] = useState<number>(0)


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

  const handlePriceChange = useCallback((newPrice: number) => {
    setTotalPrice(newPrice);
  }, []);


  const handleProceedToPay = () => {
    
    if (totalPrice == 0) {
      return
    }

    sessionStorage.setItem("amount", totalPrice.toString());
    console.log(sessionStorage.getItem("amount"));
    router.push(`/payment/${carId}`);
  };

  return (
    <>

      {/* FOR LARGE DEVICES */}

      <div className="hidden lg:block min-h-screen bg-transparent p-4 md:p-6 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <BillingInfoForm
                basePrice={
                  carData.length > 0 && carData[0].pricePerDay
                    ? parseFloat(carData[0].pricePerDay.replace(/[^0-9.]/g, '')) // Convert "$99.00" to 99.00
                    : 0
                }
                onPriceChange={handlePriceChange}
              />
            </div>
            <div className="lg:sticky lg:top-6 lg:h-fit">
              <RentalSummary
                data={carData.length > 0 ? carData[0] : null}
                totalPrice={totalPrice}
              />
            </div>

          </div>
          <div className='flex justify-center m-6'>
            <Button
              onClickFunc={handleProceedToPay}
              btnText='Proceed to Pay'
              bgColor='bg-blue-600 hover:bg-blue-700 p-2' />
          </div>
        </div>
      </div>

      {/* FOR MOBILE */}

      <div className="block lg:hidden min-h-screen bg-transparent p-4 md:p-6 text-black">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">

            <div className="lg:sticky lg:top-6 lg:h-fit">
              <RentalSummary
                data={carData.length > 0 ? carData[0] : null}
                totalPrice={totalPrice}
              />
            </div>
            <div className="lg:col-span-2">
              <BillingInfoForm
                basePrice={
                  carData.length > 0 && carData[0].pricePerDay
                    ? parseFloat(carData[0].pricePerDay.replace(/[^0-9.]/g, '')) // Convert "$99.00" to 99.00
                    : 0
                }
                onPriceChange={handlePriceChange}
              />
            </div>
            <div className='flex justify-center'>
                <Button 
                onClickFunc={handleProceedToPay}
                btnText='Proceed to Pay' 
                bgColor='bg-blue-600 hover:bg-blue-700 p-2' />
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
