import { Heart, Users, Gauge, GaugeCircle } from 'lucide-react'
import Button from './Button'
import Image from 'next/image'

interface CarCardProps {
    name?: string
    category?: string
    image?: string
    fuelCapacity?: string
    transmission?: string
    seatingCapacity?: string
    pricePerDay?: string
    //   onRentClick?: () => void
}

export default function Card({
    name = "Koenigsegg",
    category = "Sport",
    image = "/placeholder.svg?height=200&width=400",
    fuelCapacity = "90L",
    transmission = "Manual",
    seatingCapacity = "2 people",
    pricePerDay = "$99.00",
    //   onRentClick = () => {},
}: CarCardProps) {
    return (
        <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg ">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
                    <p className="text-gray-500">{category}</p>
                </div>
                <button className="rounded-full p-2 hover:bg-gray-100">
                    <Heart className="h-6 w-6 text-red-500" />
                </button>
            </div>

            {/* Car Image */}
            <div className="my-6">
                <Image
                    src={image}
                    alt={name}
                    height={1000}
                    width={1000}
                    className="h-auto w-full object-cover"
                />
            </div>

            {/* Specifications */}
            <div className="mb-6 flex justify-between gap-x-3">
                <div className="flex items-center gap-1 text-gray-500">
                    <Gauge className="h-5 w-5" />
                    <span className='text-[0.5rem] lg:text-sm text-gray-400'>{fuelCapacity}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <GaugeCircle className="h-5 w-5" />
                    <span className='text-[0.5rem] lg:text-sm text-gray-400'>{transmission}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <Users className="h-5 w-5" />
                    <span className='text-[0.5rem] lg:text-sm text-gray-400'>{seatingCapacity}</span>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
                <div>
                    <span className="text-xl font-bold text-black">{pricePerDay}</span>
                    <span className="text-gray-500">/ day</span>
                </div>

                        <Button btnText='Rental Now' bgColor=' bg-blue-600 hover:bg-blue-700' />
            </div>
        </div>
    )
}