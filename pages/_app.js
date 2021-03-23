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

const textStyle = [
  'background: linear-gradient(#26E000, #19272f)',
  'border: 1px solid #1A8904',
  'color: white',
  'padding: 1px 5px',
  'line-height: 40px',
  'font-weight: bold',
  'font-size: large',
  'font-family: Verdana, sans-serif'
].join(';');

const imageStyle = [
  'background-image: url("https://thumbs.gfycat.com/PastelShrillArrowcrab-size_restricted.gif")',
  'background-size: cover',
  'padding: 50px 100px',
].join(';');

console.log('%cLike what you see?', textStyle);
console.log('%cI am looking to get hired', textStyle);
console.log('%ccontact me at kolbe1129@gmail.com', textStyle);
console.log('%c ', imageStyle)




export default MyApp

