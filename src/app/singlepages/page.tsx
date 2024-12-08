import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full px-4 sm:px-8 lg:px-32 py-8'>

        <div className='flex flex-col md:flex-row items-start justify-start gap-8'>
        <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image2.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
        
        <div>
            <div className='w-[500px] space-y-2  pb-6'>
                <h1 className='text-[50px]'>
                    Library Stool <br/>Chair
                </h1>

                <div className='bg-[#029fae] hover:border-2 w-[144px] h-[44px] flex items-center justify-center rounded-3xl'>
                    <span className='text-[20px] text-white'>$20.00 USD</span>
                </div>
            </div>
            <div className='border-[1px] border-gray-500'/>
            <div className='my-4 space-y-4'>
            <h1 className='text-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                </h1>

                <div className='bg-[#029fae] hover:border-2 w-[212px] h-[63px] flex items-center justify-center rounded-lg'>
                    <span className='text-[20px] text-white'>
                      <Link href={"/cart"}>
                      Add To cart
                      </Link></span>
                </div> 

            </div>
        </div>

        </div>


        <div className='mt-36 flex justify-between items-center'>
       <h1 className='text-[#272343] text-[32px] font-inter mb-8'>
       Featured Products
       </h1>
        <p className='text-[18px] underline'>View All</p>
        
        </div>

        <div className='pt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full px-4 sm:px-8'>
          {/* Image 01 */}
          
          <div className='space-y-2'>
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image11.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
          <div className='flex items-center justify-between '>
            <h1 className='text-[#272343] text-[14px]'>Library Stool Chair</h1>
            <span className='font-bold text-[14px]'>$99</span>
          </div>
            </div>
          
          
          {/* Image 02 */}
          
          <div>
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image8.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
          
          <div className='flex items-center justify-between '>
            <h1 className='text-[#272343] text-[14px]'>Library Stool Chair</h1>
            <span className='font-bold text-[14px]'>$99</span>
          </div>
          </div>
          

          {/* Image 03 */}
          <div>
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image2.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
          
          <div className='flex items-center justify-between '>
            <h1 className='text-[#272343] text-[14px]'>Library Stool Chair</h1>
            <span className='font-bold text-[14px]'>$99</span>
          </div>

          </div>
          
          

          {/* Image 04 */}
          <div>
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image14.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />
          
          <div className='flex items-center justify-between '>
            <h1 className='text-[#272343] text-[14px]'>Library Stool Chair</h1>
            <span className='font-bold text-[14px]'>$99</span>
          </div>
          </div>
          
          

          {/* Image 05 */}
          <div>
          <Image
            width={500}
            height={500}
            alt='Library Stool Chair'
            src={"/Image3.png"}
            className='w-full h-auto object-contain cursor-pointer hover:border-2'
          />  
          
          <div className='flex items-center justify-between '>
            <h1 className='text-[#272343] text-[14px]'>Library Stool Chair</h1>
            <span className='font-bold text-[14px]'>$99</span>
          </div>
          </div>
          
          

          
        </div>

    </div>
  )
}

export default Page