import React from 'react'
import PickUpDropOff from './PickUpDropOffBox'
import Image from 'next/image'

const PickUpDropOffSec = () => {
    return (
        <>
           <div className='block lg:flex gap-x-32 justify-center'>

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
                <div className='absolute bottom-24 lg:bottom-6  bg-blue-600 rounded-md p-3'>
                    <Image src={"/assets/Swap.png"} alt='Swap' height={1000} width={10000} className='w-7' />
                </div>
            </div>
        </>
    )
}

export default PickUpDropOffSec
