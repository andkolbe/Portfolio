// This file is the main entry point into the app

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: true
  })
  }, []);

  return <Component {...pageProps} />;
}

const style2 = [
  'background: linear-gradient(#26E000, #19272f)',
  'border: 1px solid #1A8904',
  'color: white',
  'padding: 1px 5px',
  'line-height: 40px',
  'font-weight: bold',
  'font-size: large',
  'font-family: Verdana, sans-serif'
].join(';');
console.log('%cLike what you see?', style2);
console.log('%cI am looking to get hired', style2);
console.log('%ccontact me at kolbe1129@gmail.com', style2);




export default MyApp

