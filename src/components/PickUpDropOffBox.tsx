import { ChevronDown } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

interface PickUpDropOff {
  symbolImg: string;
  mainText: string;
  date: string;
  time: string;
}

const PickUpDropOff = ({ symbolImg, mainText, date, time }: PickUpDropOff) => {
  return (
    <>
    <div className='flex flex-col gap-y-4 rounded-md bg-white mt-8 text-black p-3'>
      <div className='flex gap-x-4 items-center'>
        <Image src={`/assets/${symbolImg}.png`} alt='Pick Up Symbol' height={1000} width={1000}
          className='w-4'
        />
        <p className='text-lg text-black'>{mainText}</p>
      </div>
      <div className='flex gap-x-3 justify-center lg:pr-8'>
        <div className="flex flex-col items-center justify-center border-r-[1px] pr-4 xs:pr-8 xs:pl-8">
          <p className='text-sm sm:text-base font-semibold'>Locations</p>
          <div className="flex items-end gap-x-1">
          <p className='text-[0.65rem] text-gray-400 font-light'>Semarang</p>
          <ChevronDown size={14}/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-r-[1px] pr-4 xs:pr-8 xs:pl-8">
          <p className='text-sm sm:text-base font-semibold'>Date</p>
          <div className="flex items-end gap-x-1">
          <p className='text-[0.65rem] text-gray-400 font-light'>{date}</p>
          <ChevronDown size={14}/>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center xs:pl-8">
          <p className='text-sm sm:text-base font-semibold'>Time</p>
          <div className="flex items-end gap-x-1">
          <p className='text-[0.65rem] text-gray-400 font-light'>{time}</p>
          <ChevronDown size={14}/>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default PickUpDropOff
