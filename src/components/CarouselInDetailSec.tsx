import React from 'react'
import CarouselSection from './CarouselSection'
import RecommandedCars from './RecommandedCars'

const CarouselInDetailSec = () => {
  return (
    <div >
      <CarouselSection mainHeading='Recent Car' />
      <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16'>
        <RecommandedCars />
      </div>
    </div>
  )
}

export default CarouselInDetailSec
