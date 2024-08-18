import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Props {
  setToken: (token: string) => void;
}

const Login = ({ setToken }: Props) => {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold mb-4">Ingresá tu email y contraseña para entrar a tu cuenta</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-2">Nombre de usuario*</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">Contraseña*</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="flex flex-col gap-2">
          <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Iniciar sesión
          </button>
          <button type="button" className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
            <Link href="/registerUsers/registerUser">Registrarse</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
