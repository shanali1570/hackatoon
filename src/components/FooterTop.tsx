import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

const FooterTop = () => {
  return (
    <div className='w-full h-auto pt-[80px] border-t-[1px] border-[#e1e3e5] px-4 sm:px-8  lg:px-150 xl:px-[150px] py-[14px] flex flex-col  md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
    
      {/* Logo Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-start gap-4">
        <Link href={'/'}>
          <Image 
            width={400}
            height={400}
            alt='Logo'
            src={"/Logo.png"}
            className='w-[26.67px] h-[23.33px] hover:w-[28px] hover:h-[25px] hover:cursor-pointer'
          /></Link>
          <h1 className="text-[26px] hover:text-[27px] hover:cursor-pointer font-bold"><Link href={'/'}>Comforty</Link> </h1>
        </div>
        <p className='text-[16px] font-Inter font-bold text-[#272343]'>
          Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus
        </p>
        <div className="flex items-center justify-between w-[206px] h-[38px]">
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
          <Link href={"/"}>
          <FaFacebook className='text-gray-500 hover:text-[#007580]' />
          </Link>
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={'/'}>
             <FaTwitter className='text-gray-500 hover:text-[#007580]' />
            </Link>
           
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={'/'}>
             <FaInstagram className='text-gray-500 hover:text-[#007580]' />
            </Link>
           
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={"/"}>
            <FaPinterest className='text-gray-500 hover:text-[#007580]' />
            </Link>
            
          </div>
          <div className="w-[38px] h-[38px] hover:border-[1px] hover:border-[#007580] rounded-full flex items-center justify-center">
            <Link href={'/'}>
           <FaYoutube className='text-gray-500 hover:text-[#007580]' /> 
            </Link>
            
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-6">
        <h1 className="text-[#9a9caa] font-bold text-[14px] font-inter">
          <Link href={"/"}>CATEGORY</Link>
          </h1>
        <div className='space-y-3'>
          <h1 className="text-[#272343] hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
            <Link href={"/"}>Sofa</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
            <Link href={"/"}>Armchair</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
            <Link href={"/"}>Wing Chair</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
            <Link href={"/"}>Desk Chair</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
            <Link href={"/"}>Wooden Chair</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
            <Link href={"/"}>Park Bench</Link></h1>
        </div>
      </div>

      {/* Support Section */}
      <div className="space-y-6">
        <h1 className="text-[#9a9caa] font-bold text-[14px] font-inter">
        <Link href={"/"}>SUPPORT</Link></h1>
        <div className='space-y-3'>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
          <Link href={"/"}>Help & Support</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
          <Link href={"/"}>Terms & Condition</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
          <Link href={"/"}>Privacy Policy</Link></h1>
          <h1 className="text-[#272343]  hover:text-[#007580] hover:underline font-bold text-[16px] font-inter">
          <Link href={"/"}>Help</Link></h1>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className='space-y-8'>
        <h1 className="text-[#9a9caa] font-bold text-[14px] font-inter">NEWSLETTER</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full lg:w-[285px] h-[46px] border-[1px] border-[#e1e3e5] rounded-md bg-[#F5F5F5] p-2 text-sm"
          />
          <button className='text-white bg-[#029fae] hover:border-2 hover:bg-[#65a1a7] w-full lg:w-[127px] h-[46px] rounded-md'>
            Subscribe
          </button>
        </form>
        <h1 className="text-[#9a9caa] font-bold text-[15px] font-inter">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
        </h1>
      </div>

    </div>
  );
}

export default FooterTop;
