"use client"
import Image from 'next/image';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
const CustomarSay = () => {

  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])

    return (
        <div data-aos="fade-up" className='mt-20'>
             <h1 className='text-4xl text-center font-semibold py-2'>Customer Say! </h1> 
          <p className='text-gray-500 text-center text-xl mb-10'>Customers love our products and we always strive to please them all.</p>
          <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-3 mt-6'>
            {/* card1  */}
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
          <div className="card  bg-base-100 shadow-xl text-center p-4">    
      <figure>
            <div className="avatar">
  <div className="w-20 rounded-full ">
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2fU6VWMdDDAYhNv6NQiHuGeXP3KKtPwVHew&usqp=CAU" width={110} height={45} alt='image' />
  </div> </div>
            </figure>
  <div className="card-body text-center">
    <p className='text-xl text-gray-500'>A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗</p>
    <div className='flex w-1/4 mx-auto  text-yellow-500 py-2 text-xl'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStarHalfAlt /> </p>
    </div>
    <p className='text-xl text-gray-500'> Algistino Lionel - Verified Buyer</p>
  </div>                   
</div>
            </motion.div>

            {/* card 2  */}
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
          <div className="card  bg-base-100 shadow-xl text-center p-4">    
      <figure>
            <div className="avatar">
  <div className="w-20 rounded-full ">
    <Image src="https://images.unsplash.com/photo-1599566147214-ce487862ea4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D" width={130} height={50} alt='image' />
  </div> </div>
            </figure>
  <div className="card-body text-center">
    <p className='text-xl text-gray-500'>Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. Recommend... 🥰🤗</p>
    <div className='flex w-1/4 mx-auto  text-yellow-500 py-2 text-xl'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
    </div>
    <p className='text-xl text-gray-500'>  Siarhei Dzenisenka - Verified Buyer</p>
  </div>                   
</div>
            </motion.div>

            {/* card 3  */}
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
          <div className="card  bg-base-100 shadow-xl text-center p-4">    
      <figure>
            <div className="avatar">
  <div className="w-20 rounded-full ">
    <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" width={130} height={50} alt='image' />
  </div> </div>
            </figure>
  <div className="card-body text-center">
    <p className='text-xl text-gray-500'>These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍 </p>
    <div className='flex w-1/4 mx-auto  text-yellow-500 py-2 text-xl'>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStar /> </p>
      <p><FaStarHalfAlt /> </p>
    </div>
    <p className='text-xl text-gray-500'> Sarah Bond - Verified Buyer</p>
  </div>                   
</div>
            </motion.div>
          </div>
        </div>
    );
};

export default CustomarSay;