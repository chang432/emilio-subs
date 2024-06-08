import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ images, labels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 4 : prevIndex - 4));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - 4 ? 0 : prevIndex + 4));
  };

  const handleImageClick = () => {
    setShowLabel(!showLabel); // Toggle label visibility
  };

  return (
    <div className="h-[22rem] py-[2rem] bg-black relative overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-in-out relative" style={{ transform: `translateX(-${currentIndex * 24.5}%)`}}>
        {images.map((image, index) => (
          <img key={index} src={image} className="rounded-lg h-[18rem] cursor-pointer absolute object-fill" style={{"width": "22.5%", "margin-left": `${index*24.5 + 2}%`}} onClick={handleImageClick}/>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 rounded-full ml-3 bg-slate-700/90 text-white/90 -translate-y-1/2 px-4 py-2 focus:outline-none">
        <FontAwesomeIcon icon={faChevronLeft} size="2xl"/>
      </button>
      
      <button onClick={handleNext} className="absolute top-1/2 right-0 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 rounded-full mr-3 bg-slate-700/90 text-white/90 -translate-y-1/2 px-4 py-2 focus:outline-none">
        <FontAwesomeIcon icon={faChevronRight} size="2xl"/>
      </button>
    </div>
  );
};

export default Carousel;