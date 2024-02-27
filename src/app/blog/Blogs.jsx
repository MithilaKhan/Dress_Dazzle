"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Blogs = ({blog}) => {
    return (
        <div>
            <div className="card  w-80  mb-10 ">
            <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.1 }}
    >
 <Image
      src={blog.image}
      alt="image"
      width={225} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: '100%', height: '170px' }} 
      className='rounded-lg'
    /></motion.div>
  <div className="pt-5">
   
    <p className='pb-1 text-lg'>New </p>
    <h2 className="card-title pb-2 text-2 text-black">{blog.title}</h2>
    <p className='pb-1 text-lg'>{blog.heading} </p>
    <div className='flex gap-5 pt-3'>
    <p className='pb-1 text-lg font-semibold text-black'> {blog.date}</p>
    <p className='pb-1 text-lg font-semibold text-black'>Post By {blog.postBy}</p>
    </div>
     
  
   
  </div>
            </div>
       
        
        </div>
    );
};

export default Blogs;