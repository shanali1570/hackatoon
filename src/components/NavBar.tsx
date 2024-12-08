'use client';
import { useState } from 'react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "Product", link: "/product" },
    { name: "Pages", link: "/singlepages" },
    { name: "About", link: "/about" },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='w-full h-[74px] border-[1px] border-[#e1e3e5] px-4 sm:px-8 lg:px-[130px] py-[14px] flex items-center justify-between'>
    
      {/* Left side content - Logo or anything else */}
      <div className="flex items-center justify-between w-full sm:w-auto gap-4">
        
        {/* Navbar for large screens */}
        <ul className="hidden sm:flex items-center justify-between text-[#007580] gap-4 sm:flex-row text-[14px]">
          {navItems.map((item, i) => (
            <li key={i} className="text-[14px] hover:text-[16px] hover:underline" onClick={handleMenuItemClick}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for mobile */}
        <div className="block sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#007580] text-2xl">
            &#9776;
          </button>
        </div>
      </div>

      {/* Contact Information (always visible on all screen sizes) */}
      <div className='flex items-start justify-center gap-2'>
        
        <h2 className='text-[14px] hover:underline'><Link href={'/contact'}>Contact:</Link></h2>
        <h2 className='font-bold text-[14px] hover:underline'><Link href={'/contact'}>{`(808) 555-0111`}</Link></h2>
        
        
      </div>

      {/* Mobile Menu (when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-[74px] left-0 w-full bg-[#f0f3f3] p-4">
          <ul className="flex flex-col items-center gap-4">
            {navItems.map((item, i) => (
              <li key={i} className="text-[14px]" onClick={handleMenuItemClick}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
