import React from 'react';
import "./style.css" ;
import Link from 'next/link';
const LoginPage = () => {
    return (
        <div className="lg:mb-16">
           <div className=" lg:text-center mt-20 ">
            <h1 className=" lg:text-4xl text-2xl  font-bold lg:text-center pb-4 ">Welcome To DressDazzle</h1>
            <p className="lg:text-xl  text-sm lg:font-bold font-semibold pb-3 ">"Revitalize Your Wardrobe with <span className='text-red-700 font-bold'>DressDazzle  </span>'s Exclusive Fashion Collection <br />  — Unleash Your Style, Unleash Yourself!"</p>
            </div> 

            <div className="hero  ">
  <div className="hero-content  ">
   
    <div className="card  w-full max-w-7xl  backdrop-blur-xl bg-white/30 border-2 border-gray-300 rounded-md shadow-xl bg-base-100">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered w-96" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />         
        </div>
        <div className="form-control mt-6 ">
          <button className="button-28">Login Now</button>
        </div>
      </form>
        <p className='text-lg font-semibold ms-7 mb-7 '>Don't have an account? please <span className=' underline'>
          <Link href="/register">Register Now</Link> </span></p>
    </div>
  </div>
</div>

        </div>
    );
};

export default LoginPage;