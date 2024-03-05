import React from "react";
import { BiCartAlt, BiHeart, BiSearch } from "react-icons/bi";
const Button = () => {
  return <div className=" pt-3 ">
    <div className="mb-3 flex  lg:gap-5 gap-2 items-center">
  <div className="flex gap-1 w-full items-center ">
  <input type="text" placeholder="Search here" className="input input-bordered input-md w-full max-w-xs" />
<p className="lg:text-2xl text-xl"><BiSearch/></p>
 </div>
 
  <div className="lg:text-3xl text-xl">
  <BiHeart/>
 </div>

  <div className="lg:text-3xl text-xl">
  <BiCartAlt/>
 </div>

</div>
 
 
  </div>
};

export default Button;