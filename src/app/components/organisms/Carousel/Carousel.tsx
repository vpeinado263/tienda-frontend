import React, { useState, useEffect } from "react";
import styles from './Carousel.module.css';
import Image from 'next/image';

const images = [
  '/images/imgCarousel/prendas.webp',
  '/images/imgCarousel/prendas1.webp',
  '/images/imgCarousel/prendas2.webp',
  '/images/imgCarousel/prendas3.webp',
  '/images/imgCarousel/prendas4.webp',
  '/images/imgCarousel/prendas5.webp',
  '/images/imgCarousel/prendas6.webp',
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
          <button className={styles.carouselButton + ' ' + styles.buttonLeft + ' absolute top-1/2 transform -translate-y-1/2 left-0 z-10'} onClick={prevSlide}>
            &lt;
          </button>
          <div>
            <Image src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} width={500} height={300} priority />
          </div>
          <button className={styles.carouselButton + ' ' + styles.buttonRight + ' absolute top-1/2 transform -translate-y-1/2 right-0 z-10'} onClick={nextSlide}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
