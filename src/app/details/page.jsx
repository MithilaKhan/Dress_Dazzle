import React from 'react';
// import ImageSlider from './ImageSlider/ImageSlider';
import DetailsSlider from './DetailsSlider/DetailsSlider';
import YouMightLike from './YouMightLike/YouMightLike';
import ImageSideBar from './ImageSideBar/ImageSideBar';

const details = () => {
    return (
        <div className='font-[Poppins] pb-10 '>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div>
                    <ImageSideBar/>
                    {/* <ImageSlider /> */}
                </div>
                <div>
                    <DetailsSlider/>
                   
                </div>
            </div>

            <div>
                <YouMightLike/>
            </div>
        </div>
    );
};
export default details ;