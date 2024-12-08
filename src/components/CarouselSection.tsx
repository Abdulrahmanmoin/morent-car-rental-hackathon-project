import React from 'react'
import Card from './Card'

interface CarouselSection {
    mainHeading?: string;
}

const carouselCardData = [
    {
        name: "Koenigsegg",
        category: "Sport",
        image: "/assets/Car1.png",
        fuelCapacity: "90L",
        transmission: "Manual",
        capacity: 2,
        price: 99.00,
    },
    {
        "name": "Nissan GT-R",
        "category": "Sport",
        "image": "/assets/Car2.png",
        "fuelCapacity": "80L",
        "transmission": "Manual",
        "capacity": 2,
        "price": 80.00
    },
    {
        "name": "Rolls-Royce",
        "category": "Sedan",
        "image": "/assets/Car3.png",
        "fuelCapacity": "70L",
        "transmission": "Manual",
        "capacity": 4,
        "price": 96.00
    },
    {
        "name": "Nissan GT-R",
        "category": "Sport",
        "image": "/assets/Car2.png",
        "fuelCapacity": "80L",
        "transmission": "Manual",
        "capacity": 2,
        "price": 80.00
    }
]

const CarouselSection = ({ mainHeading = "Popular Car" }: CarouselSection) => {
    return (
        <div className='overflow-hidden'>
            <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
                <div className='flex justify-between items-end'>
                    <h3 className='text-gray-400 text-xs font-semibold'>{mainHeading}</h3>
                    <p className='cursor-pointer font-medium text-xs text-blue-400 underline'>View All</p>
                </div>
            </div>

            <div className="carousel carousel-start bg-transparent rounded-box max-w-full lg:flex lg:justify-center space-x-4 p-4">
                {carouselCardData.map((item, index) => (
                    <Card key={index} name={item.name} category={item.category} image={item.image} fuelCapacity={item.fuelCapacity} transmission={item.transmission} capacity={item.capacity} price={item.price} isCarousel={true} />
                ))}
            </div>
        </div>
    )
}

export default CarouselSection
