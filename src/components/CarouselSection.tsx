'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/lib/sanityImageUrlConverter';
import Link from 'next/link';

interface CarouselSection {
    mainHeading?: string
}

const CarouselSection = ({ mainHeading = "Popular Car" }: CarouselSection) => {

    const [isError, setIsError] = useState('')
    const [carouselCardData, setCarouselCardData] = useState([])

    useEffect(() => {
        const fetchingCars = async () => {
            try {
                const data = await client.fetch(`*[_type == "car" && "popular" in tags]`)
                setCarouselCardData(data)
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
                        <h3 className='text-gray-400 text-xs font-semibold'>{mainHeading}</h3>
                        <p className='cursor-pointer font-medium text-xs text-blue-400 underline'>View All</p>
                    </div>
                </div>

                <div
                    className="carousel carousel-start bg-transparent rounded-box
                 max-w-full lg:flex lg:justify-center space-x-4 p-4"
                >
                    {carouselCardData.map((item: any) => (
                        <Link href={`/car-detail/${item._id}`}
                        >
                            <Card
                                key={item._id} carId={item._id}
                                name={item.name} category={item.type}
                                image={urlFor(item.image).url()} fuelCapacity={item.fuelCapacity}
                                transmission={item.transmission} capacity={item.seatingCapacity}
                                price={item.pricePerDay} />
                        </Link>

                    ))}
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

export default CarouselSection
