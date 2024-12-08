import React from 'react'
import Card from './Card'
import Button from './Button'

const RecommandedCars = () => {

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
        }
    ]

    return (
        <div className='overflow-hidden'>
            <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
                <div className='flex justify-between items-end'>
                    <h3 className='text-gray-400 text-xs font-semibold'>Recomendation Car</h3>
                </div>
            </div>

            <div className="flex justify-center items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap gap-x-4 gap-y-4 mt-5">
                {RecommandedCarsData.map((item, index) => (
                    <Card key={index} name={item.name} category={item.category} image={item.image} fuelCapacity={item.fuelCapacity} transmission={item.transmission} capacity={item.capacity} price={item.price} />
                ))}
            </div>

            <div className='flex justify-center mt-10'>
                <Button btnText='Show more Car' bgColor="bg-blue-600 hover:bg-blue-700" />
            </div>
        </div>
    )
}

export default RecommandedCars
