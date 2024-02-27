import Trending from '@/app/(home)/Trending/Trending';
import Image from 'next/image';
import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";
const YouMightLike = () => {
    return (
        <div>
            <div className='mt-20 mb-16'>
            <h1 className='text-2xl font-semibold uppercase pb-3 flex items-center'>You Might Also Like <span className='ps-2'><BsArrowRightCircle/></span></h1>
           
        <Trending/>


      </div> 
        </div>
    );
};

export default YouMightLike;