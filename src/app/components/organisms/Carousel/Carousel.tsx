import React, { useState, useEffect } from "react";
import styles from './Carousel.module.css';
import Image from 'next/image';

const images = [
  '/images/imgCarousel/prendas.webp',
  '/images/imgCarousel/prendas1.webp',
  'https://res.cloudinary.com/dnimaxhyf/image/upload/w_200,h_200,c_limit,e_blur:400,o_90,b_black/l_text:arial_80:®,ar_1:1,c_lfill,o_60,co_rgb:ffffff,b_rgb:000000,r_max/v1722440072/dw5ivd4bdzgavrlwxoti.jpg',
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
            <Image src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            width={500} height={300} 
            priority 
            className={styles.imagecarousel}
            />
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
