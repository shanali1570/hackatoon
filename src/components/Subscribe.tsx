import Image from 'next/image'
import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-start pt-20 space-y-8'>
      
      {/* Newsletter Subscription Section */}
      <div className='w-full max-w-4xl flex flex-col items-center justify-between space-y-10'>
        <h1 className='font-inter text-center text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px]'>
          Or subscribe to the newsletter
        </h1>
        
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2'>
          <input
            type="email"
            placeholder="Email Address"
            className='border-b-2 border-black text-[16px] w-full sm:w-[443px] md:w-[543px] lg:w-[643px] p-2'
          />
          <button className='border-b-2 border-black text-[16px] px-4 py-2'>
            SUBMIT
          </button>
        </div>
      </div>

      {/* Instagram Follow Section */}
      <div className='w-full max-w-7xl flex flex-col items-center'>
        <h1 className='font-inter text-center text-[40px] sm:text-[50px]'>
          Follow products and discounts on Instagram
        </h1>

        {/* Responsive Image Grid */}
        <div className='pt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full px-4 sm:px-8'>
          {/* Image 01 */}
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image11.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />

          {/* Image 02 */}
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image8.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />

          {/* Image 03 */}
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image2.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />

          {/* Image 04 */}
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image14.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />

          {/* Image 05 */}
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image3.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />

          {/* Image 06 */}
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image10.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
        </div>
      </div>
    </div>
  )
}

export default Subscribe;
