"use client"

import HeroSecCard from '@/components/HeroSecCard'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Button from '@/components/Button'
import ReviewSec from '@/components/ReviewSec'
import { SideBar } from '@/components/SideBarLayout'
import CarouselInDetailSec from '@/components/CarouselInDetailSec'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/lib/sanityImageUrlConverter'
import { CarDataInterface, CarDetailPageProps } from '@/types/checkout'


const page = (props: CarDetailPageProps) => {

    const carId = props.params.id;

    const [isError, setIsError] = useState<string>('')
    const [carData, setCarData] = useState<CarDataInterface[]>([])

    useEffect(() => {
        const fetchingCar = async () => {
            try {
                const data = await client.fetch(`*[_type == "car" && _id == $carId]`, { carId })
                setCarData(data)
            }  catch (err: unknown) {
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

    return (
        <>
            <div>
                <SideBar >
                    {carData.map((item: CarDataInterface) =>
                    (
                        <>
                            <div key={item._id} className='md:flex md:flex-row md:items-center mx-auto justify-center lg:gap-x-5'>
                                <div>
                                    <div className='block sm:flex justify-center mt-10 gap-x-5 lg:gap-x-16 '>
                                        <HeroSecCard
                                            bgImageSrc='second-box-bg-img'
                                            headingText={`${item.type} car with the best design and acceleration`}
                                            paraText={`Safety and comfort while driving a futuristic and elegant ${item.type} car`}
                                            dynamicCarImageSrc={urlFor(item.image).url()}
                                            btnBgColor='bg-blue-400'
                                            isButton={false}
                                            boxClassName='mx-3'
                                        />
                                    </div>

                                    <div className='flex mx-3 mt-7 sm:justify-evenly  justify-between'>
                                        <div
                                            className='w-20 h-14  bg-cover bg-center flex items-center rounded-md'
                                            style={{ backgroundImage: `url('/assets/second-box-bg-img.jpeg')` }}
                                        >
                                            <Image src={urlFor(item.image).url()} alt='Car' height={1000} width={1000}
                                                className='rounded-lg px-[4px]' />
                                        </div>
                                        <Image src={"/assets/Look 3.png"} alt='Interior of Car' height={1000} width={1000} className='w-20' />
                                        <Image src={"/assets/Look 2.png"} alt='Interior of Car' height={1000} width={1000} className='w-20' />
                                    </div>
                                </div>
                                <div className='bg-white rounded-lg m-4 sm:mx-20 md:mx-2 md:w-80 lg:mr-10 text-black'>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>{item.name}</CardTitle>
                                            <CardDescription className='flex items-start'>
                                                <Image src={"/assets/star.png"} alt='stars' height={1000} width={1000} className='w-20' />
                                                <p className='text-xs text-gray-400'>440+ Reviewer</p>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            {item.brand
                                                ?
                                                <p className='text-xs text-gray-400 '>{item.name} has become the embodiment of {item.brand}&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p>
                                                :
                                                <p className='text-xs text-gray-400 '>{item.name} has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p>
                                            }
                                        </CardContent>
                                        <CardFooter>
                                            <div className="flex items-center justify-between gap-x-2">
                                                <div>
                                                    <span className="text-xl font-bold text-black">{item.pricePerDay}</span>
                                                    <span className="text-gray-500">/ day</span>

                                                </div>
                                                <Link href="/payment">
                                                    <Button btnText='Rent Now' bgColor='bg-blue-600 hover:bg-blue-700 p-2' />
                                                </Link>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </div>
                            <ReviewSec />
                        </>
                    ))}

                </SideBar >
                <CarouselInDetailSec />
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
