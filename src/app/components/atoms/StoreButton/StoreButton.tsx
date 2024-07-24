import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './StoreButton.module.css';
import Image from 'next/image';

const StoreButton: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const toggleColor = () => {
      setIsOn(prevState => !prevState);
    };

    const interval = setInterval(toggleColor, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <Link href="/" passHref>
      <div className={styles.storeButton}>
        <button
          className={`${styles.button} ${isOn ? styles.buttonOn : styles.buttonOff}`}
          aria-label="Botón de tienda"
        >
          <Image
            src="/LogoColorFloating.png"
            alt="Logo de la tienda"
            className={styles.img}
            width={100}
            height={300} // Ajusta esto según el tamaño de la imagen
            priority
          />
        </button>
      </div>
    </Link>
  );
};

export default StoreButton;


