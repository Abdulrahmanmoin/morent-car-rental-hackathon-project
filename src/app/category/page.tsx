import Button from '@/components/Button'
import Card from '@/components/Card'
import PickUpDropOff from '@/components/PickUpDropOffBox'
import { SideBar } from '@/components/SideBarLayout'
import Image from 'next/image'
import React from 'react'

const page = () => {

    const RecommandedCarsData = [
        {
            "name": "All New Rush",
            "category": "SUV",
            "image": "/assets/Car5.png",
            "fuelCapacity": "70L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 72.00
        },
        {
            "name": "CR-V",
            "category": "SUV",
            "image": "/assets/Car6.png",
            "fuelCapacity": "80L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 80.00
        },
        {
            "name": "All New Terios",
            "category": "SUV",
            "image": "/assets/Car7.png",
            "fuelCapacity": "90L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 74.00
        },
        {
            "name": "CR-V",
            "category": "SUV",
            "image": "/assets/Car8.png",
            "fuelCapacity": "80L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 80.00
        },
        {
            "name": "Honda CR-V",
            "category": "SUV",
            "image": "/assets/Car9.png",
            "fuelCapacity": "70L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 72.00
        },
        {
            "name": "Honda CR-V",
            "category": "SUV",
            "image": "/assets/Car8.png",
            "fuelCapacity": "90L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 74.00
        },
        {
            "name": "MG ZS",
            "category": "SUV",
            "image": "/assets/Car9.png",
            "fuelCapacity": "BOL",
            "transmission": "Manual",
            "capacity": 6,
            "price": 80.00
        },
        {
            "name": "New MG ZS",
            "category": "SUV",
            "image": "/assets/Car7.png",
            "fuelCapacity": "80L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 80.00
        },
        {
            "name": "CR-V",
            "category": "SUV",
            "image": "/assets/Car6.png",
            "fuelCapacity": "80L",
            "transmission": "Manual",
            "capacity": 6,
            "price": 80.00
        }
    ]

    return (
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
                        {RecommandedCarsData.map((item, index) => (
                            <Card key={index} name={item.name} category={item.category} image={item.image} fuelCapacity={item.fuelCapacity} transmission={item.transmission} capacity={item.capacity} price={item.price} />
                        ))}
                    </div>

                    <div className='flex justify-center mt-10'>
                        <Button btnText='Show more Car' bgColor="bg-blue-600 hover:bg-blue-700" />
                    </div>
                </div>

            </SideBar>
        </div>
    )
}

export default page
