'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from './Button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/lib/sanityImageUrlConverter'
import Link from 'next/link'

const RecommandedCars = () => {


    const [isError, setIsError] = useState('')
    const [RecommandedCarsData, setRecommandedCarsData] = useState([])

    useEffect(() => {
        const fetchingCars = async () => {
            try {
                const data = await client.fetch(`*[_type == "car" && "recommended" in tags]`)
                setRecommandedCarsData(data)
            } catch (err: any) {
                console.log("error: ", err);
                setIsError(err.message)
            }
        }

        fetchingCars()
    }, [])



    return (
        <>
            <div className='overflow-hidden'>
                <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
                    <div className='flex justify-between items-end'>
                        <h3 className='text-gray-400 text-xs font-semibold'>Recomendation Car</h3>
                    </div>
                </div>

                <div className="flex justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-x-4 gap-y-4 mt-5">
                    {RecommandedCarsData.map((item: any) => (
                        <Link href={`/car-detail/${item._id}`}>
                            <Card key={item._id} carId={item._id} name={item.name} category={item.type} image={urlFor(item.image).url()} fuelCapacity={item.fuelCapacity} transmission={item.transmission} capacity={item.seatingCapacity} price={item.pricePerDay} />
                        </Link>
                    ))}
                </div>

                <div className='flex justify-center mt-10'>
                    <Button btnText='Show more Car' bgColor="bg-blue-600 hover:bg-blue-700" />
                </div>
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

export default RecommandedCars
