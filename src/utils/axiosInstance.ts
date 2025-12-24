import axios from "axios";
import axiosRetry from "axios-retry";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Error: Tiempo de espera agotado.");
      return Promise.reject(
        new Error("El servidor tardó demasiado en responder."),
      );
    }
    if (error.response) {
      console.error(
        `Error en la respuesta: ${error.response.status} - ${error.response.data?.error || "Error desconocido"}`,
      );
    } else {
      console.error("Error de conexión:", error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
