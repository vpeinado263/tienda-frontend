import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './StoreButton.module.css';
import Image from 'next/image';

const StoreButton = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
   
    const toggleColor = () => {
      setIsOn((prevState) => !prevState);
    };

    const interval = setInterval(toggleColor, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Link href="/">
      <div className={styles.storeButton}>
        <button className={`${styles.button} ${isOn ? styles.buttonOn : styles.buttonOff}`}>
          <Image src="/LogoColorFloating.png" alt="Botón de tienda" className={styles.img} width={100} height={300}/>
        </button>
      </div>
    </Link>
  );
};

export default StoreButton;


