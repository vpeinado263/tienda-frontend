import React, { useState, useEffect } from "react";
import styles from './Carousel.module.css';
import Image from 'next/image';

const images = [
  '/images/imgCarousel/20-30-50-oferta.webp',
  '/images/imgCarousel/descuento.webp',
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
