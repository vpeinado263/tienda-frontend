import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;
      if (Math.abs(difference) > 50) {
        difference > 0 ? nextSlide() : prevSlide();
      }
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div
    className="relative w-full max-w-md mx-auto overflow-hidden"
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
  >
    <div className="w-full h-60 flex justify-center items-center">
      <Image
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        width={300}
        height={180}
        className="object-cover rounded-lg shadow-md"
      />
    </div>

    <button
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      onClick={prevSlide}
      aria-label="Imagen anterior"
    >
      ◀
    </button>
    <button
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
      onClick={nextSlide}
      aria-label="Imagen siguiente"
    >
      ▶
    </button>
    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <span
          key={index}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  </div>
  );
}

export default ImageCarousel;
