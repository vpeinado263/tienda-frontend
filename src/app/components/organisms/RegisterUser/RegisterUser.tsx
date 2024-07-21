import React, { useState } from "react";
import axios from "axios";
import styles from "./RegisterUser.module.css";

interface RegisterResponse {
  // Define los campos esperados en la respuesta si es necesario
}

const RegisterUsers: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<RegisterResponse>("http://localhost:8080/api/users/", {
        username,
        email,
        password,
      });

      console.log(response.data);
      setSuccessMessage("Usuario registrado con éxito.");

    } catch (error) {
      // Tipo de error general
      if (error instanceof Error) {
        console.error("Error al registrar usuario", error.message);
        setErrorMessage("Error al registrar usuario. Por favor, inténtalo de nuevo.");
      }
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.centro}>
          <form className={styles.form} onSubmit={handleRegister}>
            <div>
              <h1 className={styles.h1}>Creá una Cuenta</h1>
              <h2 className={styles.h2}>creá una contraseña para registrarte con tu email</h2>
              <div>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre" className={styles.formGroup} />
              </div>
              <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" className={styles.formGroup} />
              </div>
              <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" className={styles.formGroup} />
              </div>
              <div>
                <button type="submit" className={styles.buttonRegister}>Crear Cuenta</button>
              </div>
              {errorMessage && (
                <div className={styles.alert} role="alert">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className={styles.alert} role="alert">
                  {successMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterUsers;
