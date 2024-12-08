import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const MidHeader = () => {
  return (
    <div className='w-full h-[84px] bg-[#f0f3f3] px-4 sm:px-8 lg:px-[130px] py-[14px] flex items-center justify-between'>
    
      {/* Logo */}
      <div className="flex items-center justify-center gap-4">
        <Link href={"/"}>
        <Image 
          width={400}
          height={400}
          alt='Logo'
          src={"/Logo.png"}
          className='w-[26.67px] h-[23.33px] hover:w-[30px] hover:h-[25px]'
        /></Link>
        <h1 className="text-[26px] hover:text-[27px]"><Link href={"/"}>Comforty</Link></h1>
      </div>

      {/* Cart */}
      <div className='w-[120px] h-[44px] bg-white rounded-md flex items-center justify-center gap-2'>
        <Link href={"/cart"} className='font-medium flex items-center justify-center gap-2'>
          <CiShoppingCart />
          <span className='text-[12px] font-medium'>Cart</span>
        </Link>
        
        <div className='bg-[#007580] rounded-full w-[20px] h-[20px] text-white flex items-center justify-center'>
          <Link href={"/"}>
            <p className='text-[14px]'>2</p>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default MidHeader;
