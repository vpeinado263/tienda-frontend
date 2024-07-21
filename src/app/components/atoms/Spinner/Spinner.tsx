import React from 'react';
import styles from './Spinner.module.css';
import Image from 'next/image';

const Spinner = () => {
  return (
    <div className= {styles.spinnerContainer}>
    <Image src="/spinner.png" alt="Loading..." width={500} height={300} />
    </div>
  );
};

export default Spinner;


