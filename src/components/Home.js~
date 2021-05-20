import React, { useEffect, useState } from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import MainSquare from '../assets/MainSquare.jpg';
import LinkedInLogo from '../assets/LinkedInLogo.svg';
import GithubLogo from '../assets/GithubLogo.svg';


const Home = () => {
    const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);


  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'white',
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between">
        <div className="w-full md:w-2/5">
          <LazyLoadImage
            src={MainSquare}
            effect="blur"
            placeholderSrc="/MainSquare.jpg" className="rounded-full"
          />
        </div>
        <div className="text-black text-center md:text-left">
          <h2
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
          >
            {'Hello! 👋 '}
            <br />
            {'My name is Tony Hoan Trinh'}
            <br />
            {'And welcome to my website!'}
 
          </h2>
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            }  transform transition duration-2000 ease-in-out font-bold text-xl text-gray-500 mt-5`}
          >
                I'm a 3rd year Computer Science Student at the University of Guelph. 
                <React.Fragment>
                    <br></br>
                </React.Fragment>
                Currently for the summer I am working at Nokia as a UI Developer.
                <React.Fragment>
                    <br></br>
                </React.Fragment>
                Some of my main interests are data science, full stack development and discrete mathematics.
                <React.Fragment>
                    <br></br>
                </React.Fragment>
                I am always looking for new opportunities to expand my knowledge!"
          </h1>
          <ScrollLink to="stack" smooth={true}>
            <button className=" text-white animate-float bg-blue-600 px-10 py-3 text-xl uppercase mt-10 rounded-lg hover:bg-blue-900">
              {'Contact'}
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
    );
};

export default Home;
