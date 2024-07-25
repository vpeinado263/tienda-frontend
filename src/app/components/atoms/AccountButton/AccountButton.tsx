 import React, { useState, useEffect } from 'react';
 import axiosInstance from '../../../../utils/axiosInstance';
 import { FaUser } from 'react-icons/fa';
 import Link from 'next/link';
 import styles from './AccountButton.module.css';

 const AccountButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

   useEffect(() => {
    axiosInstance.get('/api/auth/status') 
      .then(response => {
        setIsLoggedIn(response.data.isLoggedIn); 
      })
      .catch(error => {
         console.error('Error al verificar el estado de autenticación:', error);
      });
   }, []);

  const handleLogout = () => {
    axiosInstance.post('/api/auth/logout') 
      .then(response => {
        console.log(response.data.message); 
        window.location.href = '/'; 
     })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
   };

   return (
     <div className={styles.accountButton}>
      <Link href={isLoggedIn ? "/profile" : "/login/loginPage"}>
        <button className={`${styles.linkWrapper} ${isLoggedIn ? styles.loggedIn : ''}`} aria-label="Mi cuenta">
          <div className={styles.icon}>
             <FaUser className={styles.FaUser} />
          </div>
          <div className={styles.text}>
            {isLoggedIn ? 'Mi Perfil' : 'Iniciar Sesión'}
           </div>
        </button>
      </Link>
       {isLoggedIn && (
         <button className={styles.logoutButton} onClick={handleLogout}>Cerrar Sesión</button>
       )}
     </div>
  );
 };

 export default AccountButton;





