"use client";

import React, { useEffect, useState } from 'react';
import DetailsSlider from '../DetailsSlider/DetailsSlider';
import YouMightLike from '../YouMightLike/YouMightLike';
import ImageSideBar from '../ImageSideBar/ImageSideBar';
import AboutProduct from '../AboutProduct/AboutProduct';

const DetailsPage = ({ params }) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        
            fetch(`https://dress-dazzle-elci3tluz-mithilakhans-projects.vercel.app/products/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProduct(data.details);
                })
               
       
    }, [params.id]);
    console.log(product);
    return (
                <div className='font-[Poppins] pb-10  mt-20 z-0'>
           
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 lg:m-7'>
                        <div>
                            <ImageSideBar  product={product} />  
                           
                        </div>
                        <div>
                            <DetailsSlider product={product}  />
                           
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

export default DetailsPage;






