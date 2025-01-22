'use client'

import Card from '@/components/Card'
import { urlFor } from '@/lib/sanityImageUrlConverter'
import { CarDataInterface } from '@/types/checkout'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SearchPage() {

    const [searchResult, setSearchResult] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        setIsLoading(true) // Start loading
        const storedData = localStorage.getItem("searchResult")

        if (storedData) {
            console.log("storedDataINSIDE: ", storedData);
            setSearchResult(JSON.parse(storedData))

        } else {
            setSearchResult([]);
        }
        setIsLoading(false) // End loading

    }, []);

    return (
        <div>
            {isLoading ? (
                // Show loading spinner
                <div className="flex justify-center items-center flex-col">
                    <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
                    <span className="text-black">Loading</span>
                </div>
            ) :
                searchResult.length === 0
                    ?
                    (
                        // Show No Result Found if no data
                        <div className="flex justify-center items-center flex-col">
                            <h1 className="text-2xl font-bold text-red-500 mb-4">No Result Found</h1>
                        </div>
                    )
                    :
                    (
                        // Show results if data exists
                        <div className="flex justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-x-4 gap-y-4 mt-5">
                            {searchResult.map((item: CarDataInterface) => (
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
                    )}
        </div>
    )
}
