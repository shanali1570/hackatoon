import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return ( 
    <div className='w-full px-4 sm:px-8 lg:px-32'>
        <div className='bg-[#f0f2f3]  flex flex-col lg:flex-row items-center justify-between py-16 pr-10 rounded-bl-lg'>

      {/* Left Section (Text and Button) */}
      <div className="  w-full flex items-center justify-center p-4">
        <div className='w-full lg:w-[557px] h-auto'>
          <h6 className="text-[#272343] text-[14px] font-inter mb-2">WELCOME TO CHAIR</h6>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold mb-6">
            Best Furniture <br/> Collection for your <br/> Interior.
          </h1>
          <div className='bg-[#029fae] hover:border-2 text-white rounded-md flex items-center justify-center w-[171px] h-[52px] gap-4 cursor-pointer'>
            <Link href={""} className='flex items-center justify-center gap-4'>
            <h1 className="text-sm sm:text-base lg:text-lg">Shop Now</h1>
            <FaArrowRightLong className='text-white'/>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full flex justify-center lg:w-[50%] mt-8 lg:mt-0">
        <Image
          width={500}  // Increased width for better scaling
          height={500}  // Increased height for better scaling
          alt='Chair'
          src={"/hero.png"}
          className='w-[80%] sm:w-[70%] lg:w-[334px] lg:h-[484px] object-contain'
        />
      </div>
      </div>
    </div>
  );
}

export default Hero;
