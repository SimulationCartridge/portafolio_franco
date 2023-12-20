import React, { useState } from 'react';
import images from '../assets/images/images.js';
import { useMediaQuery } from 'react-responsive';

const IMAGES_PER_SLIDE = 3;

const SlideShow = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Ajusta el ancho máximo según tus necesidades
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + (isMobile ? 1 : IMAGES_PER_SLIDE)) % Object.keys(images).length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - (isMobile ? 1 : IMAGES_PER_SLIDE) + Object.keys(images).length) % Object.keys(images).length
    );
  };

  const visibleImages = Object.values(images).slice(startIndex, startIndex + (isMobile ? 1 : IMAGES_PER_SLIDE));

  return (
    <div className='main-contai'>
      <div className="slideshow-container">
        {visibleImages.map((image, index) => (
          <div key={index} className="slide">
            <img className="slide-img" src={image} alt={`Slide ${startIndex + index + 1}`} />
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
