import React from 'react';
import styles from './AgregarProductoButton.module.css';

const AgregarProductoButton = () => {
  return (
    <div className={styles.agregar}>
     <button className="bg-blue-600 text-white rounded-md text-base font-semibold py-2 px-4 shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
     sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8
     sm:text-sm md:text-base lg:text-lg
     ">
      Agregar Producto
    </button>
    </div>
   
  );
};

export default AgregarProductoButton;

