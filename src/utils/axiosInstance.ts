import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mi-back-end.onrender.com',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
