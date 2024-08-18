import React, { useState } from "react";
import axios from "axios";

interface RegisterResponse {
  success: boolean;
  message: string;
}

const RegisterUsers = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<RegisterResponse>("/api/register", {
        username,
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage("Usuario registrado con éxito.");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        setErrorMessage("Error al registrar usuario.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage("Error al registrar usuario. Por favor, inténtalo de nuevo.");
      } else {
        setErrorMessage("Error desconocido.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={handleRegister} className="space-y-4">
        <h1 className="text-2xl font-bold mb-2">Creá una Cuenta</h1>
        <h2 className="text-lg text-gray-600 mb-4">Creá una contraseña para registrarte con tu email</h2>

        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Crear Cuenta
          </button>
        </div>

        {errorMessage && (
          <div className="p-3 bg-red-100 border border-red-300 text-red-700 rounded-md" role="alert">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="p-3 bg-green-100 border border-green-300 text-green-700 rounded-md" role="alert">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterUsers;
