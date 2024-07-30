import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './StoreButton.module.css';
import Image from 'next/image';

const StoreButton = () => {
  const [isOn, setIsOn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleColor = () => {
      setIsOn(prevState => !prevState);
    };

    const interval = setInterval(toggleColor, 1000);

    return () => clearInterval(interval); 
  }, []);

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div
      className={`${styles.storeButton} ${isOn ? styles.buttonOn : styles.buttonOff}`}
      aria-label="Botón de tienda"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') handleClick();
      }}
    >
      <Image
        src="/LogoColorFloating.png"
        alt="Logo de la tienda"
        width={80}
        height={270}
        priority
      />
    </div>
  );
};

export default StoreButton;

