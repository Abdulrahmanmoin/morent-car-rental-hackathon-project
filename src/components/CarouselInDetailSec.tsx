import React, { useEffect, useState } from 'react'
import { CarDataInterface } from '@/types/types'
import Link from 'next/link'
import Card from './Card'
import { urlFor } from '@/lib/sanityImageUrlConverter'
import { client } from '@/sanity/lib/client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

interface Props {
  type?: string
}

const CarouselInDetailSec = ({ type = "" }: Props) => {

  const [isError, setIsError] = useState('')
  const [RecommandedCarsData, setRecommandedCarsData] = useState([])

  const router = useRouter()
  const searchParams = useSearchParams()

  const types = searchParams.get('types')

  useEffect(() => {
    const fetchingCarsByCategory = async (categories: string[]) => {
      try {
        const data = await client.fetch(
          `*[_type == "car" && type in $categories]`,
          { categories }
        );
        setRecommandedCarsData(data);
        router.refresh();
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log('error: ', err);
          setIsError(err.message);
        } else {
          console.log('An unexpected error occurred: ', err);
          setIsError('An unexpected error occurred');
        }
      }
    };

    if (type) {
      const categoriesArray = []
      categoriesArray.push(type)
      fetchingCarsByCategory(categoriesArray);
    }

    if (types) {
      const categoriesArray = types.split(',');
      fetchingCarsByCategory(categoriesArray);

    }
  }, [types, type])

  return (
    <>

      <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4 ml-5'>
        <div className='flex justify-between items-end'>
          <h3 className='text-gray-400 text-xs font-semibold'>Related Cars</h3>
        </div>
      </div>

      <div className="flex justify-center mx-8 items-center sm:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap gap-x-4 gap-y-4 mt-5">



        {RecommandedCarsData.map((item: CarDataInterface) => (
          <Link href={`/car-detail/${item._id}`} key={item._id}>
            <Card name={item.name} category={item.type} image={urlFor(item.image).url()} fuelCapacity={item.fuelCapacity} transmission={item.transmission} seatingCapacity={item.seatingCapacity} pricePerDay={item.pricePerDay} />
          </Link>
        ))}
      </div>

      {
        isError &&
        <div className='overflow-hidden'>
          <div className='flex flex-col gap-y-5 mt-5 space-x-4 px-4'>
            <div className='text-2xl font-bold text-black text-center'>
              &quot;Unable to load products. Please try again later.&quot;
              <br />
              {isError}
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default CarouselInDetailSec
