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

const ImageSideBar = () => {
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
          src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" />
        </SwiperSlide>

        <SwiperSlide>
          <Image
           alt=''
             width={800}
              height={500}
              style={{ width: '100%' , height:"800px"}} 
              src="https://images.unsplash.com/photo-1533659828870-95ee305cee3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" />
        </SwiperSlide>

        <SwiperSlide>
          <Image 
          alt='' 
          width={800} height={500}
          style={{ width: '100%' , height:"800px"}} 
           src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" />
        </SwiperSlide>

        <SwiperSlide>
          <Image alt='' 
          width={800} height={500}
          style={{ width: '100%' , height:"800px"}} 
          src="https://images.unsplash.com/photo-1634469875582-a0885fc2f589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" />
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
          src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" />
        </SwiperSlide>

        <SwiperSlide>
          <Image alt=''width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
            src="https://images.unsplash.com/photo-1533659828870-95ee305cee3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBkcmVzc3xlbnwwfHwwfHx8MA%3D%3D" />
        </SwiperSlide>

        <SwiperSlide>
          <Image alt=''width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
           src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" />
        </SwiperSlide>
        <SwiperSlide>
          <Image alt=''width={120} height={130}
          style={{ width: '100%' , height:"130px"}}
           src="https://images.unsplash.com/photo-1634469875582-a0885fc2f589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" />
        </SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default ImageSideBar;