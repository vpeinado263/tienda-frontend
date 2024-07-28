import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { RingLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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

