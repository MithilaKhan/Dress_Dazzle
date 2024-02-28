import React from 'react';

import DetailsSlider from './DetailsSlider/DetailsSlider';
import YouMightLike from './YouMightLike/YouMightLike';
import ImageSideBar from './ImageSideBar/ImageSideBar';
import AboutProduct from './AboutProduct/AboutProduct';


const details = () => {
    return (
        <div className='font-[Poppins] pb-10  mt-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 lg:m-7'>
                <div>
                    <ImageSideBar/>  
                   
                </div>
                <div>
                    <DetailsSlider/>
                   
                </div>
            </div>
            <div className='mt-10'>
            <AboutProduct/>
            </div>
       
            <div>
                <YouMightLike/>
            </div>
        </div>
    );
};
export default details ;