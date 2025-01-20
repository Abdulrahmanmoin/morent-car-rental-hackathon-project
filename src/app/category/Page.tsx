"use client"

import Button from '@/components/Button'
import Card from '@/components/Card'
import PickUpDropOff from '@/components/PickUpDropOffBox'
import { SideBar } from '@/components/SideBarLayout'
import { urlFor } from '@/lib/sanityImageUrlConverter'
import { client } from '@/sanity/lib/client'
import { CarDataInterface } from '@/types/checkout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [isError, setIsError] = useState('')
    const [RecommandedCarsData, setRecommandedCarsData] = useState([])

    useEffect(() => {
        const fetchingCars = async () => {
            try {
                const data = await client.fetch(`*[_type == "car" && "recommended" in tags]`)
                setRecommandedCarsData(data)
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

        fetchingCars()
    }, [])

    return (
        <>
            <div>
                <SideBar >
                    <div className='block xl:flex gap-x-32 justify-center mx-5'>

                        <PickUpDropOff
                            symbolImg={"pickUpSymbol"}
                            mainText="Pick - Up"
                            date="20 July 2022"
                            time="07.00"
                        />
                        <PickUpDropOff
                            symbolImg={"dropOffSymbol"}
                            mainText="Drop - Off"
                            date="21 July 2022"
                            time="01.00"
                        />
                    </div>

                    <div className='relative flex justify-center items-center'>
                        <div className='absolute bottom-24 xl:bottom-6  bg-blue-600 rounded-md p-3'>
                            <Image src={"/assets/Swap.png"} alt='Swap' height={1000} width={10000} className='w-7' />
                        </div>
                    </div>

                    <div className='overflow-hidden '>


                        <div className="flex justify-center mx-8 items-center sm:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-x-4 gap-y-4 mt-5">
                            {RecommandedCarsData.map((item: CarDataInterface) => (
                                <Link href={`/car-detail/${item._id}`} key={item._id}>
                                    <Card  name={item.name} category={item.type} image={urlFor(item.image).url()} fuelCapacity={item.fuelCapacity} transmission={item.transmission} seatingCapacity={item.seatingCapacity} pricePerDay={item.pricePerDay} />
                                </Link>
                            ))}
                        </div>

                        <div className='flex justify-center mt-10'>
                            <Button btnText='Show more Car' bgColor="bg-blue-600 hover:bg-blue-700" />
                        </div>
                    </div>

                </SideBar>
            </div>

            {
                isError &&
                <div className='text-4xl text-black text-center'>
                    {isError}
                </div>
            }
        </>

    )
}

export default page
