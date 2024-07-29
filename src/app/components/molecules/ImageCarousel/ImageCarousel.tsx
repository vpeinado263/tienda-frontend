import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImageCarousel.module.css';

interface ImageCarouselProps {
  images: string[];
}

function ImageCarousel  ({ images } : ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.carouselButton} onClick={prevSlide}>
        &lt;
      </button>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={500}
          height={300}
          className={styles.image}
        />
      </div>
      <button className={styles.carouselButton} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
