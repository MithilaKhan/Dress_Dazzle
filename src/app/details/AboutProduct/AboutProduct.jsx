"use client"
import React from 'react';
import { MdOutlineStarBorderPurple500 } from 'react-icons/md';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const AboutProduct = () => {
    return (
        <div className='text-center lg:mt-10 mt-5'>
 <Tabs>
    <TabList style={{ margin: '0 auto' , fontSize:"20px" ,  fontWeight:" bold "}}>
      <Tab>DESCRIPTION</Tab>
      <Tab>ADDITIONAL INFORMATION</Tab>
      <Tab>REVIEW (NO REVIEWS)</Tab>
    </TabList>

    <TabPanel>
      <div className='text-xl text-center p-5
      '>
      <p>Tristique risus nec feugiat in fermentum posuere urna. Nibh sed pulvinar proin gravida hendrerit lectus. <br/> Non consectetur a erat nam at lectus urna duis convallis Natoque penatibus.</p>

<ul className='mt-3 text-center'>
<li className=' text-xl '>1. Aliquet risus feugiat in ante metus dictum.</li>
<li className=' text-xl '>2.  Mauris pharetra et ultrices neque ornare aenean.</li>
<li className=' text-xl '> 3. Tellus integer feugiat scelerisque varius morbi enim.</li>
</ul>

<p>Gravida cum sociis natoque penatibus et magnis dis. Feugiat scelerisque varius morbi enim nunc. Ullamcorper a <br /> lacus vestibulum sed arcu non odio euismod lacinia.</p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className='mt-3 text-left'>
            <p className='text-lg'><span className='font-semibold pe-4'> WEIGHT:</span> 1kg  </p>
            <p className='text-lg'><span className='font-semibold pe-4'> DIMENSIONS:</span> 1 x 2 x 3 Cm  </p>
            <p className='text-lg'><span className='font-semibold pe-4'> SIZES:</span> 43WSSDW1  </p>
            <p className='text-lg'><span className='font-semibold pe-4'> COLOR:</span> Black, Blue, Brown, Dove Grey, Red </p>
          </div>
    </TabPanel>
    <TabPanel>
      <h2 className="text-gray-600 font-bold text-2xl mt-3">Customer Reviews</h2>
      <div className='flex  py-2   text-2xl'>
      <p><MdOutlineStarBorderPurple500 /> </p>
      <p><MdOutlineStarBorderPurple500 /> </p>
      <p><MdOutlineStarBorderPurple500 /> </p>
      <p><MdOutlineStarBorderPurple500 /> </p>
      <p><MdOutlineStarBorderPurple500 /> </p>
      
    </div>
      <p className='text-xl'>No reviews yet</p>
    </TabPanel>
  </Tabs>

           {/* <div role="tablist" className="tabs tabs-lifted mx-auto">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="DESCRIPTION" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 text-xl">
    <p>Tristique risus nec feugiat in fermentum posuere urna. Nibh sed pulvinar proin gravida hendrerit lectus. Non consectetur a erat nam at lectus urna duis convallis Natoque penatibus.</p>

    <ul className='mt-3'>
    <li className='flex gap-1 text-xl items-center'><span><GoDotFill/></span>Aliquet risus feugiat in ante metus dictum.</li>
    <li className='flex gap-1 text-xl items-center'> <span><GoDotFill/></span>Mauris pharetra et ultrices neque ornare aenean.</li>
    <li className='flex gap-1 text-xl items-center'> <span><GoDotFill/></span>Tellus integer feugiat scelerisque varius morbi enim.</li>
</ul>

<p>Gravida cum sociis natoque penatibus et magnis dis. Feugiat scelerisque varius morbi enim nunc. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia.</p>
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="ADDITIONAL INFORMATION" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">ADDITIONAL INFORMATION</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="REVIEW (NO REVIEWS)" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">REVIEW (NO REVIEWS)</div>
</div>  */}
        </div>
    );
};

export default AboutProduct;