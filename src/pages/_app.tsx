import type { AppProps } from 'next/app';
// import { useState, useEffect } from 'react';
// import Spinner from '../app/components/atoms/Spinner/Spinner';
import { ToastContainer } from 'react-toastify';
import 'tailwindcss/tailwind.css'; 
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);

  //   return () => clearTimeout(timer); 
  // }, []);

  return (
    <>
      {/* {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Spinner />
        </div>
      ) : ( */}
        <>
          <Component {...pageProps} />
          <ToastContainer />
        </>
      {/* )} */}
    </>
  );
}

export default MyApp;
