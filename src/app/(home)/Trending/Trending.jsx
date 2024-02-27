"use client";
import Image from 'next/image';

import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Trending = () => {

  

    return (
        <div >
            
<div className="swiper-container ">
<Swiper
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 1024px (large devices)
            1024: {
              slidesPerView: 4,
            },
            // when window width is >= 640px (mobile devices)
            640: {
              slidesPerView: 2,
            },
          }}
        
      >
        
  {/* 1 slider  */}
  <SwiperSlide>
        <div className=' card bg-base-100 '>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      style={{width:"460px" , height:"220px"}}
      className='rounded-lg p-4 pb-0'
    />
    </motion.div>
    <div className='px-5 pt-0'>
    <p className='text-xl mt-3 font-semibold'>Square Textured</p>
    <div className='flex  text-yellow-500 py-2'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
    </div> 
    <div className='flex gap-2'>
<p className='text-red-600 text-xl '> $20.00 </p>
<p className='text-gray-700 text-lg line-through font-thin'> $40.00 </p>
    </div>
    </div>
    
    </div> 
        </SwiperSlide>

{/* 2 slider  */}
<SwiperSlide>
        <div className=' card bg-base-100 '>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFnfGVufDB8fDB8fHww"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      style={{width:"460px" , height:"220px"}}
      className='rounded-lg p-4 pb-0'
    />
    </motion.div>
    <div className='px-5 pt-0'>
    <p className='text-xl mt-3 font-semibold'>Serenity Silk</p>
    <div className='flex  text-yellow-500 py-2'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStarHalfAlt /> </p>
    </div> 
    <div className='flex gap-2'>
<p className='text-red-600 text-xl '> $70.00 </p>
<p className='text-gray-700 text-lg line-through font-thin'> $80.00 </p>
    </div>
    </div>
    
    </div> 
        </SwiperSlide>

{/* 3 no  */}
<SwiperSlide>
        <div className=' card bg-base-100 '>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1631214524049-0ebbbe6d81aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxpcHN0aWNrfGVufDB8fDB8fHww"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      style={{width:"460px" , height:"220px"}}
      className='rounded-lg p-4 pb-0'
    />
    </motion.div>
    <div className='px-5 pt-0'>
    <p className='text-xl mt-3 font-semibold'>Kaleidoscope</p>
    <div className='flex  text-yellow-500 py-2'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStarHalfAlt /> </p>
    </div> 
    <div className='flex gap-2'>
<p className='text-red-600 text-xl '> $80.00 </p>
<p className='text-gray-700 text-lg line-through font-thin'> $110.00 </p>
    </div>
    </div>
    
    </div> 
        </SwiperSlide>

{/* 4 num */}
<SwiperSlide>
        <div className=' card bg-base-100'>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGxpcHN0aWNrfGVufDB8fDB8fHww"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      style={{width:"460px" , height:"220px"}}
      className='rounded-lg p-4 pb-0'
    />
    </motion.div>
    <div className='px-5 pt-0'>
    <p className='text-xl mt-3 font-semibold'>Whimsical Willow</p>
    <div className='flex  text-yellow-500 py-2'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
    </div> 
    <div className='flex gap-2'>
<p className='text-red-600 text-xl '> $50.00 </p>
<p className='text-gray-700 text-lg line-through font-thin'> $57.00 </p>
    </div>
    </div>
    
    </div> 
        </SwiperSlide>

{/* 5 no */}
        <SwiperSlide>
        <div className=' card bg-base-100 '>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1583167616102-d8d4b7d02c6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGVhcnJpbmdzfGVufDB8fDB8fHww"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      style={{width:"460px" , height:"220px"}}
      className='rounded-lg p-4 pb-0'
    />
    </motion.div>
    <div className='px-5 pt-0'>
    <p className='text-xl mt-3 font-semibold'>Midnight Mirage Attire</p>
    <div className='flex  text-yellow-500 py-2'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
    </div> 
    <div className='flex gap-2'>
<p className='text-red-600 text-xl '> $45.00 </p>
<p className='text-gray-700 text-lg line-through font-thin'> $60.00 </p>
    </div>
    </div>
    
    </div> 
        </SwiperSlide>

{/* 6 no  */}
   <SwiperSlide>
        <div className=' card bg-base-100 '>
        <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
    <Image
      src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={390} // Set an appropriate width value
      height={360} // Set an appropriate height value
      sizes="100vw"
      style={{width:"460px" , height:"220px"}}
      className='rounded-lg p-4 pb-0'
    />
    </motion.div>
    <div className='px-5 pt-0'>
    <p className='text-xl mt-3 font-semibold'>Enchanting Ember Gown</p>
    <div className='flex  text-yellow-500 py-2'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStarHalfAlt /> </p>
    </div> 
    <div className='flex gap-2'>
<p className='text-red-600 text-xl '> $80.00 </p>
<p className='text-gray-700 text-lg line-through font-thin'> $90.00 </p>
    </div>
    </div>
    
    </div> 
        </SwiperSlide>

       
      
      </Swiper>
</div>
            


      </div>
    );
};

export default Trending;