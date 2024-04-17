"use client"
import RatingComponent from '@/app/Components/RatingComponent/RatingComponent';
import React, { useState } from 'react';
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai";
import { BiHeart } from 'react-icons/bi';
import { GoDotFill } from "react-icons/go";


const DetailsSlider = ({product}) => {
    const [showShipping, setShowShipping] = useState(true);

    const toggleShipping = () => {
        setShowShipping(!showShipping);
      };
    return (
        <div className=' ms-6 mt-5'>
           <h1 className='text-4xl font-semibold uppercase'>{product.name}</h1> 
           <p className='text-xl text-gray-500 py-2'>
            Aliquet eget sit amet tellus. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
          </p>
          <div className='flex  py-3   text-2xl'>
            <RatingComponent rating={product.rating} />   
      <p className='ps-3'>{product.rating} Rating</p>
      <p className='ps-3'>3 reviews</p>
    </div>
           <p className='text-3xl font-semibold pb-2'>${product.price}</p>

           <p className='text-xl  mt-2'>4 interest-free payments of $28.75 with  <span className='font-semibold'>Klarna.</span>  <span className='underline'>Learn More</span></p>

           <div className=' flex lg:flex-row flex-col gap-3  mt-4 text-xl mb-2 '>
            {/* add to button  */}
           <button className="btn btn-neutral mb-3 w-1/2 h-14 rounded-xl">Add to Bag</button>

           {/* favorite btn  */}
           <button className="btn btn-active  h-14 w-1/2 rounded-xl flex items-center">Favorite <span><BiHeart/></span></button>
           </div>
          <div>
            <p className='text-xl uppercase'><span className='font-semibold pe-4 '> VENDOR:</span>{product.vendor}  </p>
            <p className='text-xl uppercase'><span className='font-semibold pe-4 '> TYPE:</span>{product.type} </p>
            <p className='text-xl uppercase'><span className='font-semibold pe-4 '> SKU:</span> {product.sku}  </p>
            <p className='text-xl uppercase'><span className='font-semibold pe-4 '> AVAILABLE:</span> {product.Available} </p>
          </div>

            <p className='text-xl mt-4'> Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colors, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel. </p>

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