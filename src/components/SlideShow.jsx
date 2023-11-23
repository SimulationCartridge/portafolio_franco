import React, { useState } from 'react';
import images from '../assets/images/images.js'; // Ajusta la ruta según tu estructura de archivos


const IMAGES_PER_SLIDE = 3;

const SlideShow = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + IMAGES_PER_SLIDE) % Object.keys(images).length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - IMAGES_PER_SLIDE + Object.keys(images).length) % Object.keys(images).length
    );
  };

  const visibleImages = Object.values(images).slice(startIndex, startIndex + IMAGES_PER_SLIDE);


  return (
    <div className='main-container-slide'>
    <div className="slideshow-container">
      {visibleImages.map((image, index) => (
        <div key={index} className="slide">
          <img className="slide-img"src={image} alt={`Slide ${startIndex + index + 1}`} />
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </div>
  );
};

export default SlideShow;
