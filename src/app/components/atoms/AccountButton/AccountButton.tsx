import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../utils/axiosInstance'; // Asegúrate de que esta importación sea correcta
import { FaUser } from 'react-icons/fa';
import Link from 'next/link';
import styles from './AccountButton.module.css';

const AccountButton: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Verifica el estado de autenticación al montar el componente
  useEffect(() => {
    axiosInstance.get('/api/auth/status') // Ruta del endpoint para verificar el estado de autenticación
      .then(response => {
        setIsLoggedIn(response.data.isLoggedIn); // Asegúrate de que el backend devuelva esta información
      })
      .catch(error => {
        console.error('Error al verificar el estado de autenticación:', error);
      });
  }, []);

  // Maneja el cierre de sesión
  const handleLogout = () => {
    axiosInstance.post('/api/auth/logout') // Ruta del endpoint para cerrar sesión
      .then(response => {
        console.log(response.data.message); // Mensaje de éxito, si es necesario
        window.location.href = '/'; // Redirige al usuario a la página principal
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





