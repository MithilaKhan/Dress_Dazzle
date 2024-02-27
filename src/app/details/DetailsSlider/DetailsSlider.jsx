"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";
import { BiHeart } from 'react-icons/bi';
import { GoDotFill } from "react-icons/go";
const DetailsSlider = () => {
    const [showShipping, setShowShipping] = useState(true);

    const toggleShipping = () => {
        setShowShipping(!showShipping);
      };
    return (
        <div className='mt-10'>
           <h1 className='text-4xl font-semibold'>Air Jordan 1 Low</h1> 
           <p className='text-2xl font-semibold py-2'>Women's Shoes</p>
           <p className='text-2xl font-semibold pb-2'>$115</p>
        
<div className='flex text-2xl font-semibold justify-evenly mt-5'>
    <p>Select Size</p>
    <p>Size Guide</p>
</div>
          

           <p className='text-xl text-center mt-5'>4 interest-free payments of $28.75 with <br /> <span className='font-semibold'>Klarna.</span>  <span className='underline'>Learn More</span></p>

           <div className='  text-center mt-4  '>
           <button className="btn btn-neutral mb-3 w-2/4 h-14 rounded-xl">Add to Bag</button>
           <button className="btn btn-active w-2/4 h-14 mx-auto rounded-xl flex items-center">Favorite <span><BiHeart/></span></button>
           </div>
           <p className='text-xl mt-10'>Shipping* <br />
To get accurate shipping information Edit <span className='underline'>Location</span> </p>
           <p className='text-xl mt-7'>Free Pickup <br />
<span className='underline'>Find a Store</span> </p>

<p className='text-xl mt-7'>Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colors, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel. </p>

<ul className='mt-3'>
    <li className='flex gap-1 text-xl items-center'><span><GoDotFill/></span>Shown: White/Aluminum/Wolf Grey</li>
    <li className='flex gap-1 text-xl items-center'> <span><GoDotFill/></span>Style: DC0774-105</li>
</ul>

<p className='text-xl underline mb-6'>View Product Details</p>

<div className='divider mb-4'></div>

<div>
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Shipping & Returns</h2>
        <button onClick={toggleShipping} className="ml-2">
          {!showShipping ? (
            <span><AiOutlineArrowUp/></span> 
          ) : (
            <span><AiOutlineDown/></span>
          )}
        </button>
      </div>
      {showShipping  && (<div>
        <p className='text-xl mt-7'>Free standard shipping on orders $50+ and free 60-day returns for Nike Members <br />
<span className='underline'> Learn more. Return policy exclusions apply.</span> </p>

<p className='text-xl mt-4 underline'>Pick-up available at select Nike Stores.</p>
      </div>
        
      )}
    </div> 
        </div>
    );
};

export default DetailsSlider;