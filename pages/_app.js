// import "@/styles/globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App({ Component, pageProps }) {
//   return (
    
//     <>
    
//       <Navbar />
//       <Component {...pageProps} />
//       <Footer />
//     </>
//   );
// }
import Head from 'next/head';
import '@/styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
