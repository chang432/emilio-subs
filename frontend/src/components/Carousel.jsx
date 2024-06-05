import React, { useState } from 'react';

const Carousel = ({ images, labels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= images.length - 3 ? 0 : prevIndex + 1));
  };

  const handleImageClick = () => {
    setShowLabel(!showLabel); // Toggle label visibility
  };

  return (
    <div className="h-96 py-8 bg-black relative overflow-hidden">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 27}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} className="rounded-lg h-80 w-1/4 object-fit cursor-pointer" style={{'margin-left': '2%'}} onClick={handleImageClick}/>
        ))}
      </div>
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none">
        Prev
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r focus:outline-none">
        Next
      </button>
    </div>
  );
};

export default Carousel;
