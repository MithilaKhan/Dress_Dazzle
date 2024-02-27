import React from 'react';
import Map from '../Components/Map/Map';
import HereToHelp from './HereToHelp';
import GetInTouch from './GetInTouch';

const page = () => {
    return (
        <div className='z-10'>       
            <Map/>
            <HereToHelp/>
            <GetInTouch/>
        </div>
    );
};

export default page;