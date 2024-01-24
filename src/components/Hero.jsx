import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/UjjwalxTyagi/textsummarizer", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='orange_gradient'>
        Text Summarizer
      </h1>
      <h2 className='desc'>
      Introducing our innovative text summarizer – a powerful tool designed to streamline your reading experience. Simply provide a link to any article, and watch as our summarizer extracts key insights, condensing the content into a concise and easily digestible summary. Save time, get to the core of the information, and stay informed with our efficient and user-friendly text summarizer.
      </h2>
    </header>
  );
};

export default Hero;
