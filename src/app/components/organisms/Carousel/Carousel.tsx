import React, { useState, useEffect } from "react";
import styles from './Carousel.module.css';
import Image from 'next/image';

const images = [
  '/images/imgCarousel/prendas.webp',
  '/images/imgCarousel/prendas1.webp',
  '/images/imgCarousel/prendas2.webp',
  '/images/imgCarousel/prendas3.webp',
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
    <>
      <div className={styles.carouselContainer}>
        <div className='relative'>
          <div>
            <Image src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            width={500} height={300} 
            priority 
            className={styles.imagecarousel}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
