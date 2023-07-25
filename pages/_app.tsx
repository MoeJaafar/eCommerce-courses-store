import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="absolute right-0 top-0 p-6 mt-4 mr-4 min-w-[300px] text-white rounded-md text-center"
        toastClassName={() => `
        bg-gradient-to-r 
        from-green-400 
        to-blue-500 
        shadow-lg 
        flex 
        items-center 
        text-white 
        text-sm 
        font-medium 
        px-4 
        py-3 
        rounded-lg 
        justify-between`}
      />

      <Component {...pageProps} />
    </>
  );
}
