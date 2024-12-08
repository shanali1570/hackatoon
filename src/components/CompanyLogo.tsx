import React from 'react'
import Image from 'next/image';

const CompanyLogo = () => {
  return (
    <div className='w-full px-4 sm:px-8 lg:px-32 py-8'>
      <div className="flex flex-nowrap justify-center items-center gap-8 overflow-x-auto">
        {/* Each logo will scale responsively */}
        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='Zapier'
            src={"/Logo1.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>
        
        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='Pipedrive'
            src={"/Logo2.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='CIB BANK'
            src={"/Logo3.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='Z'
            src={"/Logo4.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='BURNT TOAST'
            src={"/Logo5.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='ChairPandaDoc'
            src={"/Logo6.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>

        <div className="flex justify-center items-center">
          <Image
            width={500}
            height={500}
            alt='MOZ'
            src={"/Logo7.png"}
            className='w-[150px] cursor-pointer hover:border-2 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo;

