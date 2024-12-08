import Image from 'next/image';
import React from 'react';
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
const Cart = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-32 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
       
        {/* Cart Items Section */}
        <div className="w-full lg:w-[70%] bg-slate-100 p-6 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4">Bag</h1>

          {/* Cart Item 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-[150px] h-[150px] relative">
              <Image
                width={150}
                height={150}
                alt="Library Stool Chair"
                src="/Image3.png"
                className="object-contain hover:border-2"
              />
            </div>
          
            <div className="flex-1">
              <div className='flex items-center justify-between'>
              <h2 className="text-lg font-semibold">Library Stool Chair</h2>
              <strong className="block mt-1">MPR: $99</strong>
              </div>
              <p className="text-[#757575] mt-1">Ashen Slate/Cobalt Bliss</p>
              <div className="text-[#757575] flex items-center space-x-12">
                <div className="flex justify-start space-x-2">
                  <span>Size</span>
                  <span>L</span>
                </div>
                <div className="flex justify-start space-x-2">
                  <span>Quantity</span>
                  <span>1</span>
                </div>
              </div>
                <div className='flex space-x-2 text-[20px] mt-10'>
                    <div>
                    <CiHeart className='cursor-pointer hover:border-2'/>
                    </div>
                    <div>
                    <RiDeleteBin6Line className='cursor-pointer hover:border-2'/>
                    </div>
                </div>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-300 mb-6" />

          {/* Cart Item 2 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-[150px] h-[150px] relative">
              <Image
                width={150}
                height={150}
                alt="Library Stool Chair"
                src="/Image11.png"
                className="object-contain hover:border-2"
              />
            </div>
          
            <div className="flex-1">
              <div className='flex items-center justify-between'>
              <h2 className="text-lg font-semibold">Library Stool Chair</h2>
              <strong className="block mt-1">MPR: $99</strong>
              </div>
              <p className="text-[#757575] mt-1">Ashen Slate/Cobalt Bliss</p>
              <div className="text-[#757575] flex items-center space-x-12">
                <div className="flex justify-start space-x-2">
                  <span>Size</span>
                  <span>L</span>
                </div>
                <div className="flex justify-start space-x-2">
                  <span>Quantity</span>
                  <span>1</span>
                </div>
              </div>
                <div className='flex space-x-2 text-[20px] mt-10'>
                    <div>
                    <CiHeart className='cursor-pointer hover:border-2'/>
                    </div>
                    <div>
                    <RiDeleteBin6Line className='cursor-pointer hover:border-2'/>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-[30%] p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold mb-4">Summary</h1>

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#111111]">Subtotal</h2>
            <strong>$198.00</strong>
          </div>
          <div className="flex items-center justify-between border-b-[1px] border-gray-300 mb-4 pb-4">
            <h2 className="text-[#111111]">Estimated Delivery & Handling</h2>
            <strong>Free</strong>
          </div>
          <div className="flex items-center justify-between border-b-[1px] border-gray-300 mb-6 pb-4">
            <h2 className="text-[#111111]">Total</h2>
            <strong>$198.00</strong>
          </div>

          {/* Checkout Button */}
          <div className="flex items-center justify-center cursor-pointer hover:border-2 bg-[#029fae] text-[15px] text-white rounded-xl h-[60px] w-full">
            <h1>Member Checkout</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
