import '../styles/globals.css';
import '../styles/styles.css'; 
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading && (
        <div className="spinner-container">
          <RingLoader color={'white'} loading={true} />
        </div>
      )}
      {!loading && <Component {...pageProps} />}

      <ToastContainer/>
    </>
  );
}

export default MyApp;



