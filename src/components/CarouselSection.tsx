'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/lib/sanityImageUrlConverter';
import Link from 'next/link';
import { CarDataInterface } from '@/types/checkout';

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
                    {carouselCardData.map((item: CarDataInterface) => (
                        <Link 
                        href={`/car-detail/${item._id}`}
                        key={item._id} 
                        >
                            <Card
                                
                                name={item.name} category={item.type}
                                image={urlFor(item.image).url()} fuelCapacity={item.fuelCapacity}
                                transmission={item.transmission} seatingCapacity={item.seatingCapacity}
                                pricePerDay={item.pricePerDay} />
                        </Link>

                    ))}
                </div>
            </div>

            {
                isError &&
                <div className='overflow-hidden '>
                    <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
                        <div className='text-2xl font-bold text-black text-center '>
                            {isError}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CarouselSection
