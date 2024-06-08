import React, { useState, useEffect } from 'react';
import mainSub from '../assets/mainSub.png';
import '../css/Animations.css'

const titleCardStyle = {
  'opacity': 0.9,
  'filter': "brightness(50%) contrast(85%)"
}

const TitleCard = () => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainSub}
          className="object-cover w-full h-full"
          style={titleCardStyle}
        />
      </div>

      {/* Title text at the forefront */}
      <div className={`flex flex-col justify-center items-center text-white space-y-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${animate ? 'animate-slide-up' : ''}`}>
        <h1 className="text-5xl font-bold">WE'RE BACK!</h1>
        <h1 className="text-3xl font-bold text-center">Open longer hours now 8pm weeknights</h1>
        <div className='flex flex-row space-x-5'>
          <div className='text-right'> 
            <p>Mon - Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
          <div className='text-left'> 
            <p>11:00AM to 6:00PM</p>
            <p>11:00AM to 4:00PM</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleCard;
