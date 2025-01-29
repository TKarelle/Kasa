import React, { useState } from 'react';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevImage} className="arrow left"> <i className="fas fa-chevron-left"></i></button>
      <div className="carousel-image">
        <img src={pictures[currentIndex]} alt={`Image ${currentIndex}`} />
      </div>
      <button onClick={nextImage} className="arrow right"><i className="fas fa-chevron-right"></i></button>
    </div>
  );
};

export default Slideshow;
