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
        if (difference > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
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
      className="relative flex items-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-80 flex justify-center items-center overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={230}
          height={10}
          className="max-w-full max-h-full object-cover"
        />
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 z-10 hover:bg-opacity-70"
        onClick={nextSlide}
      >
        Siguiente
      </button>
    </div>
  );
}

export default ImageCarousel;
