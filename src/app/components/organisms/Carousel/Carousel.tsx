import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/imgCarousel/prendas.webp',
  '/images/imgCarousel/prendas1.webp',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <div className="overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={500}
          height={300}
          priority
          className="w-full h-auto object-cover"
        />
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
