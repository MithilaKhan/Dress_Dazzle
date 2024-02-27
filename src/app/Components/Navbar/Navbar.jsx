import Link from 'next/link';
import React from 'react';
import Button from "../Button"

const Navbar = () => {
    return (
        <div>
            <div className="navbar lg:fixed bg-transparent  w-full top-0  bg-blue backdrop-filter backdrop-blur-2xl  border-b border-gray-200 z-20 font-[Poppins]">
  <div className="navbar-start py-3">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href="/">Home</Link></li>
        <li>
          <a >Shop</a>
          <ul className="p-2">
            <li><Link href="/product">MEN</Link></li>
            <li><Link href="/product">WOMEN</Link></li>
            <li><Link href="/product">Topwear</Link></li>
            <li><Link href="/product">Bottomwear</Link></li>
            <li><Link href="/product">Footwear</Link></li>
            <li><Link href="/product">T-shirt</Link></li>
            <li><Link href="/product">Dresses</Link></li>
            <li><Link href="/product">Shoes</Link></li>           
          </ul>
        </li>
        <li>
          <a >Product</a>
          <ul className="p-2">
            <li><Link href="/product">MEN</Link></li>
            <li><Link href="/product">WOMEN</Link></li>
            <li><Link href="/product">Topwear</Link></li>
            <li><Link href="/product">Bottomwear</Link></li>
            <li><Link href="/product">Footwear</Link></li>
            <li><Link href="/product">T-shirt</Link></li>
            <li><Link href="/product">Dresses</Link></li>
            <li><Link href="/product">Shoes</Link></li>           
          </ul>
        </li>
        <li>
          <a >Our Blogs</a>
          <ul className="p-3">
            <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/blog">Post  Sidebar</Link></li>
            <li><Link href="/blog">Product Blog</Link></li>
            <li><Link href="/blog">Single Post</Link></li>
            <li><Link href="/blog">New  Blog</Link></li>
            <li><Link href="/blog">Post  Sidebar</Link></li>          
          </ul>
        </li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>
    <a className="font-[Poppins] font-bold text-4xl lg:ps-7">DressDazzle</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 uppercase text-black font-semibold font-[Poppins]">
    <li><Link href="/">Home</Link></li>
      <li>
        <details>
          <summary>Shop</summary>
          <ul className="p-2">
          <li><Link href="/product">MEN</Link></li>
            <li><Link href="/product">WOMEN</Link></li>
            <li><Link href="/product">Topwear</Link></li>
            <li><Link href="/product">Bottomwear</Link></li>
            <li><Link href="/product">Footwear</Link></li>
            <li><Link href="/product">T-shirt</Link></li>
            <li><Link href="/product">Dresses</Link></li>
            <li><Link href="/product">Shoes</Link></li>        
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
          <li><Link href="/product">MEN</Link></li>
            <li><Link href="/product">WOMEN</Link></li>
            <li><Link href="/product">Topwear</Link></li>
            <li><Link href="/product">Bottomwear</Link></li>
            <li><Link href="/product">Footwear</Link></li>
            <li><Link href="/product">T-shirt</Link></li>
            <li><Link href="/product">Dresses</Link></li>
            <li><Link href="/product">Shoes</Link></li>        
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Our Blog</summary>
          <ul className="p-3">
          <li><Link href="/blog">Blogs</Link></li>
            <li><Link href="/blog">Post Sidebar</Link></li>
            <li><Link href="/blog">Product Blog</Link></li>
            <li><Link href="/blog">Single Post</Link></li>
            <li><Link href="/blog">New Blog</Link></li>
            <li><Link href="/blog">Post Sidebar</Link></li>     
          </ul>
        </details>
      </li>
      <li><Link href="/contact">Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end lg:me-6">
   <Button/>
  </div>
</div>
        </div>
    );
};

export default Navbar;