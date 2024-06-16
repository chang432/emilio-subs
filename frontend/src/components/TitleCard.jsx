import React, { useState, useEffect } from 'react';
import mainSub from '../assets/mainSub.png';
import '../css/Animations.css'

const titleCardStyle = {
  'opacity': 0.9,
  'filter': "brightness(50%) contrast(85%)"
}

const TitleCard = ({homeFadeIn}) => {

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${homeFadeIn ? 'animate-fade-in' : ''}`}>
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={mainSub}
          className="object-cover w-full h-full"
          style={titleCardStyle}
        />
      </div>

      {/* Title text at the forefront */}
      <div className={`flex flex-col justify-center items-center w-3/4 text-white space-y-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ${animate ? 'animate-slide-up' : ''}`}>
        <h1 className="text-3xl md:text-5xl font-bold">Homemade Italian Subs & Dinners</h1>
        {/* <h1 className="text-lg md:text-3xl font-bold text-center">Open longer hours now 8pm weeknights</h1> */}
        <div className='text-sm md:text-lg flex flex-row space-x-5'>
          <div className='text-right'> 
            <p>Mon - Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
          <div className='text-left'> 
            <p>9:00AM to 8:00PM</p>
            <p>10:00AM to 6:00PM</p>
            <p>Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TitleCard;
