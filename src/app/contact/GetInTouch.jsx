import React from 'react';
import "@/app/contact/style.css"
const GetInTouch = () => {
    return (
        <div className='ms-10 mb-20 '>
            <h1 className=' font-semibold text-4xl mb-6'>Get in Touch</h1>
            <p className="  text-lg text-gray-700 mb-4">We'd love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.</p>
            <form >
                <div className='lg:flex gap-2'>
                    <div className=' w-full'>
                    <input type="text" placeholder="YOUR NAME" className="input input-bordered w-full max-w-xl mb-4" />
                    </div>

                    <div className=" w-full ">
                    <input type="text" placeholder="YOUR EMAIL" className="input input-bordered w-full max-w-xl mb-4" />
                    </div>
               
               
                </div>
                <div className='w-full'>
                <textarea placeholder="Comment" className="textarea textarea-bordered textarea-lg w-full max-w-7xl h-44" ></textarea>
                </div>

                <div>
                <div className="mb-5">
  <label className=" flex gap-2 ">
  <input type="checkbox" checked="checked" className="checkbox checkbox-warning" />
    <span className="label-text text-black text-lg ">
Save my name, email, and website in this browser for the next time I comment.</span>
    
  </label>
</div>
                </div>
                <button className=" button-27 ">Send massage </button>
            </form>
        </div>
    );
};

export default GetInTouch;