import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
      </div>
      <p className={styles.loadingText}>Cargando, por favor espera...</p>
    </div>
  );
};

export default Spinner;

