"use client"
import Image from 'next/image';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Services = () => {

  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])

    return (
        <div data-aos="fade-up" className='mt-20'>
          <h1 className='text-4xl text-center font-semibold py-2'>Our Services </h1> 
          <p className='text-gray-500 text-center text-xl mb-10'>Our Diverse Range of Services to Elevate Your Experience</p>
            <div className='grid lg:grid-cols-3  justify-items-center'>
            <div className="card  lg:w-96  ">
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
 <Image
      src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: '230px' }} 
      
    /></motion.div>
  <div className="pt-5">
    <h2 className="card-title pb-2">How Can We Help You?</h2>
    <p className='pb-2'>Wherever you are, Our Client Advisors will be delighted to assist you </p>
    <button class=" text-gray-800  underline mb-6 ">
 Contract Us
</button>
  </div>
            </div>


            <div className="card  lg:w-96 mb-6 ">
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
        <Image
      src="https://images.unsplash.com/photo-1512909481869-0eaa1e9817ba?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: '230px' }} 
      
    /></motion.div>
  <div className="pt-5">
    <h2 className="card-title pb-3">Art of Gifting</h2>
    <p className='pb-3'>Choose the perfect gift from Ou Advisors will be delighted to assist you </p>
    <div className='flex gap-4'>
    <button className="text-gray-800  underline">
 Gifts for her
</button>
<button className="text-gray-800  underline">
 Gifts for him
</button>
    </div>
   
  </div>
            </div>

            <div className="card  lg:w-96 ">
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
 <Image
      src="https://images.unsplash.com/photo-1659276606015-70cffda39d4b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: '230px' }} 
      
    /> </motion.div>
  <div className="pt-5">
    <h2 className="card-title pb-3">Personalization</h2>
    <p className='pb-3'>DressDazzle personalization offer spans a wide range of services </p>
    <button class="text-gray-800  underline">
 Explore our Collection
</button>
  </div>
            </div>

            </div>
        </div>
    );
};

export default Services;