import HeroSecCard from '@/components/HeroSecCard'
import Image from 'next/image'
import React from 'react'
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


const page = () => {
    return (
        <div>
            <SideBar >
                <div className='md:flex md:flex-row md:items-center mx-auto justify-center lg:gap-x-5'>
                    <div>
                        <div className='block sm:flex justify-center mt-10 gap-x-5 lg:gap-x-16 '>
                            <HeroSecCard
                                bgImageSrc='second-box-bg-img'
                                headingText='Sports car with the best designn and acceleration'
                                paraText='Safety and comfort while driving a futuristic and elegant sports car'
                                carImageSrc='car2'
                                btnBgColor='bg-blue-400'
                                isButton={false}
                                boxClassName='mx-3'
                            />
                        </div>

                        <div className='flex mx-3 mt-7 sm:justify-evenly  justify-between'>
                            <Image src={"/assets/car1detail.png"} alt='Car' height={1000} width={1000} className='w-20 p-[2px] border-blue-500 border-2 rounded-lg' />
                            <Image src={"/assets/Look 3.png"} alt='Interior of Car' height={1000} width={1000} className='w-20' />
                            <Image src={"/assets/Look 2.png"} alt='Interior of Car' height={1000} width={1000} className='w-20' />
                        </div>
                    </div>
                    <div className='bg-white rounded-lg m-4 sm:mx-20 md:mx-2 md:w-80 lg:mr-10 text-black'>
                        <Card>
                            <CardHeader>
                                <CardTitle>Nissan GT - R</CardTitle>
                                <CardDescription className='flex items-start'>
                                    <Image src={"/assets/star.png"} alt='stars' height={1000} width={1000} className='w-20' />
                                    <p className='text-xs text-gray-400'>440+ Reviewer</p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className='text-xs text-gray-400 '>NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track&quot;.</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center justify-between gap-x-2">
                                    <div>
                                        <span className="text-xl font-bold text-black">$80.00</span>
                                        <span className="text-gray-500">/ day</span>
                                    </div>
                                    <Button btnText='Rent Now' bgColor='bg-blue-600 hover:bg-blue-700 p-2' />
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
                <ReviewSec />
            </SideBar>
                <CarouselInDetailSec/>
        </div>
    )
}

export default page
