import React from 'react'
import HeroSecCard from './HeroSecCard'

const HeroCarBoxes = () => {
    return (
        <div className='block sm:flex justify-center mt-10 gap-x-5 lg:gap-x-16'>
            
            <HeroSecCard
                bgImageSrc='first-box-bg-img'
                headingText='The Best Platform for Car Rental'
                paraText='Ease of doing a car rental safely and reliably. Of course at a low price.'
                carImageSrc='car1'
                btnBgColor='bg-blue-600'
            />
            <HeroSecCard
                bgImageSrc='second-box-bg-img'
                headingText='Easy way to rent a car at a low price'
                paraText='Providing cheap car rental services and safe and comfortable facilities.'
                carImageSrc='car2'
                boxClassName='hidden sm:block'
                btnBgColor='bg-blue-400'

            />
        </div>
    )
}

export default HeroCarBoxes
