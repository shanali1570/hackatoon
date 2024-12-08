import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-[74px] border-t-[1px] border-[#e1e3e5] px-4 sm:px-8 lg:px-[150px] py-[14px] flex items-center justify-between'>
    
      {/* Footer Text */}
      <div className="w-full sm:w-auto flex items-center justify-center text-center sm:text-left">
        <p className="text-[14px] font-poppins text-[#9a9caa]">
          @ 2021 - Blogy - Designed & Developed by  &nbsp;
          <strong className='text-black'>Zakirsoft</strong>
        </p>
      </div>

      {/* Footer Logo */}
      <div className="flex items-center justify-center sm:justify-end">
        <Image
          width={227}
          height={27}
          alt='FooterLogo'
          src={'/FooterLogos.png'}
          className='w-[227px] h-[27px] text-[#e1e3e5]'
        />
      </div>
    </div>
  );
}

export default Footer;
