import React from 'react'
import HeroCarBoxes from './HeroCarBoxes'
import PickUpDropOffSec from './PickUpDropOffSec'
import CarouselSection from './CarouselSection'
import RecommandedCars from './RecommandedCars'

const HeroSection = () => {
    return (
        <div>
            <HeroCarBoxes />
            <PickUpDropOffSec />
            <CarouselSection />
            <RecommandedCars/>
        </div>
    )
}

export default HeroSection
