'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from './Button'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/lib/sanityImageUrlConverter'
import Link from 'next/link'
import { CarDataInterface } from '@/types/checkout'

const RecommandedCars = () => {
    const [isError, setIsError] = useState('')
    const [RecommandedCarsData, setRecommandedCarsData] = useState<CarDataInterface[]>([]) // Cars currently displayed
    const [currentPage, setCurrentPage] = useState(0) // Current page index (0-based)
    const [isLoading, setIsLoading] = useState(false) // Loading state
    const [hasMore, setHasMore] = useState(true) // Whether there are more cars to load
    const carsPerPage = 4 // Number of cars per page

    // Fetch cars from the server
    const fetchCars = async (page: number) => {
        try {
            setIsLoading(true)
            const startIndex = page * carsPerPage
            const data: CarDataInterface[] = await client.fetch(
                `*[_type == "car" && "recommended" in tags] | order(_createdAt asc) [${startIndex}...${startIndex + carsPerPage}]`
            )
            if (data.length > 0) {
                setRecommandedCarsData((prevCars) => page === 0 ? data : [...prevCars, ...data]) // Append new cars only after page 0
                setCurrentPage(page) // Update current page
                if (data.length < carsPerPage) setHasMore(false) // No more cars to fetch
            } else {
                setHasMore(false) // No more cars
            }
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log("error: ", err)
                setIsError(err.message)
            } else {
                console.log("An unexpected error occurred: ", err)
                setIsError("An unexpected error occurred")
            }
        } finally {
            setIsLoading(false)
        }
    }

    // Initial fetch (first 4 cars)
    useEffect(() => {
        fetchCars(0)
    }, [])

    // Handle "Show More Cars" button
    const handleShowMoreCars = () => {
        if (!isLoading && hasMore) {
            fetchCars(currentPage + 1)
        }
    }

    return (
        <>
            <div className='overflow-hidden'>
                <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
                    <div className='flex justify-between items-end'>
                        <h3 className='text-gray-400 text-xs font-semibold'>Recommendation Cars</h3>
                    </div>
                </div>

                <div className="flex justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-x-4 gap-y-4 mt-5">
                    {RecommandedCarsData.map((item: CarDataInterface) => (
                        <Link href={`/car-detail/${item._id}`} key={item._id}>
                            <Card
                                name={item.name}
                                category={item.type}
                                image={urlFor(item.image).url()}
                                fuelCapacity={item.fuelCapacity}
                                transmission={item.transmission}
                                seatingCapacity={item.seatingCapacity}
                                pricePerDay={item.pricePerDay}
                            />
                        </Link>
                    ))}
                </div>

                {/* Show More Cars Button */}
                {hasMore ? (
                    <div className='flex justify-center mt-10'>
                        <Button
                            btnText={isLoading ? 'Loading...' : 'Show more Cars'}
                            bgColor="bg-blue-600 hover:bg-blue-700"
                            onClickFunc
                            ={handleShowMoreCars}
                        />
                    </div>
                ) : (
                    <div className='flex justify-center mt-10'>
                        <p className='text-black'>No more cars available</p>
                    </div>
                )}
            </div>

            {/* Error Display */}
            {isError && (
                <div className='overflow-hidden'>
                    <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
                        <div className='text-2xl font-bold text-black text-center'>
                            "Unable to load products. Please try again later."
                            <br />
                            {isError}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default RecommandedCars
