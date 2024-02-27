"use client"
import Banner from "./Banner/Banner";
import CustomarSay from "./CustomarSay/CustomarSay";
import Featured from "./Featured/Featured";
import FeaturedCollection from "./FeaturedCollection/FeaturedCollection";
import HolidayFrame from "./HolidayFrame/HolidayFrame";
import Services from "./Services/Services";
import Trending from "./Trending/Trending";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage =()=> {
  useEffect(() => {
    AOS.init({
         duration: 1000,
         once: false,
       })
 }, [])
  return (
    <main className="max-w-[1580px] mx-auto font-[Poppins] p-10">
     <Banner/> 
     <FeaturedCollection/>     
   <Featured/>
   
   <div data-aos="fade-up" className='mt-20 mb-16'>
    <h1 className='lg:text-4xl text-2xl text-center py-2  font-semibold'>New Arrivals</h1> 
  <p className='text-gray-500 text-center lg:text-xl text-lg mb-10'>Find the top most popular items in Umino best sellers.</p> 

  <Trending/> 
  </div>
  
   <HolidayFrame/>
  <Services/>  
  <CustomarSay/>
    </main>
  )
}
export default HomePage;