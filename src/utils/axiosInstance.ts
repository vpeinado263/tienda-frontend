import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
  baseURL: 'https://mi-back-end.onrender.com',
  timeout: 5000, // Aumentado a 5 segundos para evitar fallos por latencia
  headers: {
    'Content-Type': 'application/json',
  },
});

// Configurar reintentos en caso de error de red o timeout
axiosRetry(axiosInstance, { 
  retries: 3, // Intentará hasta 3 veces
  retryDelay: axiosRetry.exponentialDelay, // Aumenta la espera entre intentos
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED') {
      console.error('Error: Tiempo de espera agotado.');
      return Promise.reject(new Error('El servidor tardó demasiado en responder.'));
    }
    if (error.response) {
      console.error(`Error en la respuesta: ${error.response.status} - ${error.response.data?.error || 'Error desconocido'}`);
    } else {
      console.error('Error de conexión:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

