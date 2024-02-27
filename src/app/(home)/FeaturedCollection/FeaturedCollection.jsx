"use client"
import Image from 'next/image';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
const FeaturedCollection = () => {

  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])

    return (
        <div data-aos="fade-up" className='lg:mt-10 mt-10 p-8 '>
          <h1 className='text-4xl text-center font-semibold py-2'>Featured Collection</h1> 
          <p className='text-gray-500 text-center text-xl mb-10'>Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p> 

          <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-2 gap-2'>
{/* 1 colum  */}
<div>
<div className="relative lg:mt-9">
<motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
<Image
      src="https://images.unsplash.com/photo-1600717535275-0b18ede2f7fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={500} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '95%' , height:"500px"}} 
      className='rounded'
    />
    </motion.div>
    <div className="absolute bottom-0 left-0     lg:mb-10  lg:ms-36   ">
    <p className=" btn glass rounded  text-2xl shadow-lg py-2 px-6  font-bold  font-[Poppins] "> Clothing  </p>
    </div>

</div>
</div>

{/* 2 colum */}
<div>
<div className='grid grid-rows-2 gap-5'>
<div className="relative ">
<motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
<Image
      src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fHww"
      alt="image"
      width={400} // Set an appropriate width value
      height={283} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '95%' , height:"283px"}} 
      className='rounded'
    />
    </motion.div>
    <div className="absolute bottom-0 left-0    lg:mb-10  lg:ms-36   ">
    <p className=" btn glass rounded  text-2xl shadow-lg py-2 px-6  font-bold  font-[Poppins] "> Bags </p>
    </div>

</div>
<div className="relative ">
<motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
<Image
      src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww"
      alt="image"
      width={400} // Set an appropriate width value
      height={283} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '95%' , height:"283px"}} 
      className='rounded'
    />
   </motion.div> 
    <div className="absolute bottom-0 left-0     lg:mb-10  lg:ms-36   ">
    <p className=" btn glass rounded  text-2xl shadow-lg py-2 px-6  font-bold  font-[Poppins] "> Shoes  </p>
    </div>

</div> 
</div>
</div>
 
{/* 3 colum  */}
<div>
<div className="relative lg:mt-9">
<motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
<Image
      src="https://images.unsplash.com/photo-1619603364937-8d7af41ef206?w=600&500=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={500} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '95%' , height:"500px"}} 
      className='rounded'
    />
    </motion.div>
    <div className="absolute bottom-0 left-0    lg:mb-10  lg:ms-36   ">
    <p className=" btn glass rounded  text-2xl shadow-lg py-2 px-6  font-bold  font-[Poppins] "> Man Coat  </p>
    </div>

</div>
</div>
          </div>
        </div>
    );
};

export default FeaturedCollection;