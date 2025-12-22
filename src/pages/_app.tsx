import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
