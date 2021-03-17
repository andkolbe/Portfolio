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

console.log('Like what you see?');
console.log('I am looking for a job.');
console.log('%ccontact me at kolbe1129@gmail.com', 'color: #0091ea;');

export default MyApp
