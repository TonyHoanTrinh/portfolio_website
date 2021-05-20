import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';

import EmailLogo from '../assets/EmailLogoLarge.svg';
import GithubLogo from '../assets/GithubLogo.svg';
import LinkedInLogo from '../assets/LinkedInLogo.svg';


const Stack = () => {
    const images = [ LinkedInLogo, GithubLogo, EmailLogo ];
    const links = [ 'https://www.linkedin.com/in/tony-hoan-trinh-965408168/', 'https://github.com/TonyHoanTrinh', 'mailto:anthonytrinh@hotmail.ca' ]
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold px-32">
        Contact Links
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        {images.map((image, index) => {
          return (
            <Link to={{pathname: links[index]}} target='_blank'>
            <span
              className={`${
                index % 2 === 0 ? ' animate-float' : ' animate-refloat'
              } w-24 h-24 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
            >
              <LazyLoadImage src={image} alt={image} />
            </span>
            </Link>
          );
        })}
      </div>
      {/*
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {'My main languages are JavaScript, Python, R and C++'}
      </p>
      */}
    </div>
  );
};

export default Stack;
