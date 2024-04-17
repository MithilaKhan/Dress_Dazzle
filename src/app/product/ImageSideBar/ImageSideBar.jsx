"use client"
import React from 'react';
import  {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

const ImageSideBar = ({product}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
  
    return (
        <div className=''>
       <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={6}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image 
          alt=''
          width={800}
          height={500}
          style={{ width: '100%' , height:"800px"}} 
          src= {product.img2} />
        </SwiperSlide>

        <SwiperSlide>
          <Image
           alt=''
             width={800}
              height={500}
              style={{ width: '100%' , height:"800px"}} 
              src={product.img3} />
        </SwiperSlide>

        <SwiperSlide>
          <Image 
          alt='' 
          width={800} height={500}
          style={{ width: '100%' , height:"800px"}} 
           src={product.img4} />
        </SwiperSlide>

        <SwiperSlide>
          <Image alt='' 
          width={800} height={500}
          style={{ width: '100%' , height:"800px"}} 
          src={product.img5}/>
        </SwiperSlide>
       
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={4}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image alt='' width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
          src={product.img2}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image alt=''width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
            src={product.img3}/>
        </SwiperSlide>

        <SwiperSlide>
          <Image alt=''width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
           src={product.img4} />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt=''width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
           src={product.img5} />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default ImageSideBar;