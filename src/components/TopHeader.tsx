import React from 'react';
import { PiCheckBold } from 'react-icons/pi';
import { CiCircleAlert } from 'react-icons/ci';
import Link from 'next/link';

const TopHeader = () => {
  return (
    <div className='w-full h-[45px] bg-[#272343] text-white px-4 sm:px-8 lg:px-32 py-[14px] flex items-center justify-between'>
      {/* Left side */}
      <div className="flex items-center gap-2">
        <PiCheckBold />
        <p>Free shipping on all orders over $50</p>
      </div>

      {/* Right side */}
      <div className="flex items-center justify-center gap-8">
        {/* Language Selector */}
        <select
          defaultValue={""}
          className="text-white text-right hover:border-2 hover:cursor-pointer  bg-[#272343] border-none"
        >
          <option value="en" className='hover:border-2'>Eng</option>
          <option value="es">Span</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>

        {/* Frequent Asked Questions */}
        <Link href={'/faqs'}>
          <span className='hover:border-2'>Faqs</span>
        </Link>

        {/* Need Help */}
        <div>
          <Link href={"/"} className='flex items-center justify-center gap-2'>
            <CiCircleAlert className='text-[24px] hover:border-2' />
            <span className='hover:border-2'>Need Help</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
