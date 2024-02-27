"use client"
import React from 'react';
import Swiper from 'react-id-swiper';
import Image from 'next/image'; 
// import "./style.css"
const ImageSideBar = () => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
  
    return (
        <div className='mt-40'>
       <Swiper {...params}
    >
        <div> <Image
      src="https://images.unsplash.com/photo-1641792669610-83e23d551bec?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={200} // Set an appropriate height value
      sizes="100vw"
      style={{width: 'auto', height: 'auto' }} 
      
    /></div>
        <div> <Image
      src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: 'auto', height: 'auto' }} 
      
    /></div>
        <div> <Image
      src="https://images.unsplash.com/photo-1641792669610-83e23d551bec?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: 'auto', height: 'auto' }} 
      
    /></div>
        <div> <Image
      src="https://images.unsplash.com/photo-1641792669610-83e23d551bec?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5pa2UlMjBhaXIlMjBmb3JjZSUyMDF8ZW58MHx8MHx8fDA%3D"
      alt="image"
      width={300} // Set an appropriate width value
      height={110} // Set an appropriate height value
      sizes="100vw"
      style={{width: 'auto', height: 'auto' }} 
      
    /></div>
       
      </Swiper>  
        </div>
    );
};

export default ImageSideBar;