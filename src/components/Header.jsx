import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import "@fontsource/poppins/700.css"

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-[10rem] fixed">
      <div className="container flex items-center">
        <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-500 cursor-pointer">Nishan</h1>
        
        <nav className='px-6 ml-[38rem]'>
          <ul className="flex space-x-8 font-bold font-lg">
          <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200">Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200">About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200">Skills</a></li>
            <li><a href="#qualification" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200">Qualification</a></li>
            <li><a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition duration-200">Contact</a></li>
          </ul>
        </nav>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl focus:outline-none transition duration-500 ease-in-out"
        >
          {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
