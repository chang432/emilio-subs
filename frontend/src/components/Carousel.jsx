import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ images, labels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  const handlePrev = (increment) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - increment : prevIndex - increment));
  };

  const handleNext = (increment) => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - increment ? 0 : prevIndex + increment));
  };

  const handleImageClick = () => {
    setShowLabel(!showLabel); // Toggle label visibility
  };

  return (
    <div className="h-[20rem] md:h-[22rem] py-[1.5rem] md:py-[2rem] bg-black relative overflow-hidden">
      <div className="hidden md:flex transition-transform duration-1000 ease-in-out relative" style={{ transform: `translateX(-${currentIndex * 24.5}%)`}}>
        {images.map((image, index) => (
          <img key={index} src={image} className="rounded-lg h-[8rem] md:h-[18rem] cursor-pointer absolute object-fill" style={{"width": "22.5%", "margin-left": `${index*24.5 + 2}%`}} onClick={handleImageClick}/>
        ))}
      </div>
      <div className="flex md:hidden transition-transform duration-1000 ease-in-out relative" style={{ transform: `translateX(-${currentIndex * 94}%)`}}>
        {images.map((image, index) => (
          <img key={index} src={image} className="rounded-lg h-[17rem] cursor-pointer absolute object-fill" style={{"width": "88%", "margin-left": `${index*94 + 6}%`}} onClick={handleImageClick}/>
        ))}
      </div>
      <button onClick={() => {handlePrev(4)}} className="hidden md:block absolute top-1/2 left-0 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 rounded-full ml-3 bg-slate-700/90 text-white/90 -translate-y-1/2 px-4 py-2 focus:outline-none">
        <FontAwesomeIcon icon={faChevronLeft} size="md:2xl"/>
      </button>
      
      <button onClick={() => {handleNext(4)}} className="hidden md:block absolute top-1/2 right-0 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 rounded-full mr-3 bg-slate-700/90 text-white/90 -translate-y-1/2 px-4 py-2 focus:outline-none">
        <FontAwesomeIcon icon={faChevronRight} size="md:2xl"/>
      </button>

      <button onClick={() => {handlePrev(1)}} className="block md:hidden absolute top-1/2 left-0 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 rounded-full ml-3 bg-slate-700/90 text-white/90 -translate-y-1/2 px-2 py-0 focus:outline-none">
        <FontAwesomeIcon icon={faChevronLeft} size="md:2xl"/>
      </button>
      
      <button onClick={() => {handleNext(1)}} className="block md:hidden absolute top-1/2 right-0 transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-90 rounded-full mr-3 bg-slate-700/90 text-white/90 -translate-y-1/2 px-2 py-0 focus:outline-none">
        <FontAwesomeIcon icon={faChevronRight} size="md:2xl"/>
      </button>
    </div>
  );
};

export default Carousel;