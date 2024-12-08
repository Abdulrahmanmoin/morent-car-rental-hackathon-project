import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white mt-10 text-gray-500 pl-5 pr-5 pt-5'>
            <div className='flex flex-col sm:flex-row lg:justify-between gap-y-8 sm:p-10 border-b-[1.5px]'>
                <div className='flex flex-col gap-y-6'>
                    <h1 className="text-2xl font-bold text-blue-600">
                        MORENT
                    </h1>
                    <p className='text-xs font-extralight leading-tight pr-16 sm:pr-32'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-8'>
                    <div className='flex flex-col gap-y-5'>
                        <p className='text-sm sm:text-base font-semibold text-black'>About</p>
                        <ul>
                            <li className='text-sm'>How it works</li>
                            <li className='text-sm'>Social</li>
                            <li className='text-sm'>Partnership</li>
                            <li className='text-sm'>Business Relation</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <p className='text-sm sm:text-base font-semibold text-black'>Socials</p>
                        <ul>
                            <li className='text-sm'>Discord</li>
                            <li className='text-sm'>Instagram</li>
                            <li className='text-sm'>Twitter</li>
                            <li className='text-sm'>Facebook</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <p className='text-sm sm:text-base font-semibold text-black'>Community</p>
                        <ul>
                            <li className='text-sm'>Events</li>
                            <li className='text-sm'>Blog</li>
                            <li className='text-sm'>Podcast</li>
                            <li className='text-sm'>Invite a friend</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='hidden md:flex mt-10 pb-16 justify-between'>
                <div className='ml-10'>
                    <p className='text-sm sm:text-sm font-semibold text-black'>©2022 MORENT. All rights reserved</p>
                </div>
                <div className='flex gap-10 mr-10'>
                    <p className='text-sm sm:text-sm font-semibold text-black'>Privacy & Policy</p>
                    <p className='text-sm sm:text-sm font-semibold text-black'>Terms & Condition</p>
                </div>
            </div>

            <div className='flex flex-col md:hidden mt-10 pb-8 gap-y-12'>

                <div className='flex justify-between'>
                    <p className='text-sm sm:text-sm font-semibold text-black'>Privacy & Policy</p>
                    <p className='text-sm sm:text-sm font-semibold text-black'>Terms & Condition</p>
                </div>

                <div className='flex xs:justify-center'>
                    <p className='text-sm sm:text-sm font-semibold text-black'>©2022 MORENT. All rights reserved</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
