import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import Link from "next/link";

interface Props {
  setToken: (token: string) => void;
}

const Login = ({ setToken }: Props ) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ token: string }>('', {
        username,
        password,    
      });
      if (response.data.token) {
        console.log('Sesión iniciada con éxito:', response.data.token);
        setToken(response.data.token);
      } else {
        setError('Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tu nombre de usuario y contraseña!');
    }
  };

  return (
    <>
      <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <h1 className={styles.title}>Ingresá tu email y contraseña para entrar a tu cuenta</h1>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="username">Nombre de usuario*</label>
          <input
            className={styles.input}
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">Contraseña*</label>
          <input
            className={styles.input}
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={`${styles.buttonRegister} ${styles.botonTactil}`}>
           ¿Olvidaste tu contraseña?
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.buttonContainer}>
          <button className={`${styles.button1} ${styles.botonTactil}`} type="submit">Iniciar sesión</button>
          <button className={styles.button2} type="submit">
          <Link href="/registerUsers/registerUser">Registrarse</Link>
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;
