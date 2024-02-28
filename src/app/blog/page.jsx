"use client" ;
import React, { useState } from 'react';
import blogs from "@/data/blog.json"
import { AiOutlineArrowUp, AiOutlineDown } from "react-icons/ai"; 
import Image from 'next/image';
import Blogs from './Blogs';
const ProductPage = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showGender, setShowGender] = useState(true);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const toggleGender = () => {
    setShowGender(!showGender);
  };
    return (
        <div className='pt-0  z-0 '>
          <div>
          <Image
      src="https://images.unsplash.com/photo-1650234181399-cd999dcd330f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="image"
      width={800} // Set an appropriate width value
      height={450} // Set an appropriate height value
      sizes="100vw"
      style={{ width: '100%', height: '450px' }} 
      
    />
          </div>
        
            <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ms-10 m-10">
    <div className='grid lg:grid-cols-3 gap-1'>
    {blogs.map((blog) => <Blogs key={blog.id} blog={blog}/>)}
    </div>
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"> </label> 
    <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <div className=' font-semibold text-2xl items-center pt-3'> <p>Popular Posts</p> </div>

      <div className="divider"></div> 
      <div >
        {
            blogs.map((blogMenu)=>
            <div key={blogMenu.id} className='grid lg:grid-cols-2 grid-cols-1 py-4'>
        <div >
        <Image src={blogMenu.image} width={120} height={18} alt="" className='rounded-lg' />
        </div>
        
         <div >
            <p className='font-semibold text-xl'>{blogMenu.title}</p>
            <p className='text-lg'>{blogMenu.date}</p>
         </div>
      </div>)
        }

      </div>
    


    </div>
  
  </div>
</div>
        </div>
    );
};

export default ProductPage;