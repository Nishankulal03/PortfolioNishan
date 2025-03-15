import React from 'react';
import DevImg from '../assets/me.png';
import { FaLinkedin, FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-8 px-6 md:px-10 pt-20"> 
      
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Social Links */}
        <div className="flex flex-row md:flex-col justify-center md:p-16 mt-4 text-2xl space-x-6 md:space-x-0 md:space-y-6">
          <a href="https://linkedin.com/in/nishan-kulal-1877b4228" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Nishankulal03" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            <FaGithub />
          </a>
          <a href="https://x.com/nishan_kul84063?t=7x8X1fsji-Ir1p4TA115gQ&s=09" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            <FaXTwitter />
          </a>
          <a href="mailto:nishankulal424@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
            <FaEnvelope />
          </a>
        </div>

        {/* Text Content */}
        <div className="text-left mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Hello, I'm <br />
            <span className="text-purple-700 dark:text-purple-400">Nishan</span>
          </h1>
          
          {/* Typing effect */}
          <h2 className="text-xl md:text-2xl font-semibold mt-1 text-gray-800 dark:text-gray-300">
            <Typewriter
              words={[
                "Full Stack Developer",
                "RPA Developer",
                "Web Developer"
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </h2>
          
          <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            I develop full-stack web applications.
          </p>
          <button className="mt-3 px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        {/* Circular Image Container */}
        <div className="relative flex justify-center items-center ml-[-10px] md:ml-[-20px]">
  <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-purple-600 dark:border-purple-400 flex justify-center items-center shadow-lg overflow-hidden">
    <img src={DevImg} alt="Developer Illustration" className="w-full h-full object-cover scale-110" />
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;
