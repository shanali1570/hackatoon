import React from 'react'
import Image from 'next/image';

const ExploreNew = () => {
  return (
    <div className='w-full px-36 sm:px-8 py-8  flex justify-center items-start relative'>
     
     <h1 className=' h-[50px] w-[399px] transform lg:-rotate-90 -rotate-90 sm:-rotate-90 text-[25px] font-semibold absolute left-0  top-64 '>
              Explore new and popular styles
            </h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-2'>
          {/* Vertical Text and Main Image Section */}
          
          <div className='flex flex-col lg:flex-row items-center lg:items-start mb-6 lg:mb-0'>
            
            {/* image 01 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/itemcategory1.png"}
              className='w-[350] h-[400] cursor-pointer hover:border-2'
            />
          </div>

          {/* Responsive Grid of Images */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
            {/* image 02 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/itemcategory2.jfif"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />

            {/* image 03 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/itemcategory4.jfif"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />

            {/* image 04 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/itemcategory3.jfif"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />

            {/* image 05 */}
            <Image
              width={500}
              height={500}
              alt='Wooden Chair'
              src={"/itemcategory5.jfif"}
              className='w-[250px] h-[250px] cursor-pointer hover:border-2'
            />
          </div>
        </div>

      </div>
    
  );
}

export default ExploreNew;
