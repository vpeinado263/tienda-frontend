import React, { useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa'; 
import Link from 'next/link';
import styles from './AccountButton.module.css';

const AccountButton = () => {
  const [isLoggedIn] = useState(false);
  const handleLogout = () => {
    axios.delete('')
      .then(response => {
        console.log(response.data);
        window.location.href = '/';
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
  };

  return (
    <>
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
    </>
  );
};

export default AccountButton;







