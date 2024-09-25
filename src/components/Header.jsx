import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import "@fontsource/poppins/700.css"

const Header = ({ darkMode, setDarkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Function to close the sidebar
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && !event.target.closest('aside') && !event.target.closest('button')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="bg-white z-20 dark:bg-gray-900 shadow-md py-4 px-6 md:px-[10rem] fixed w-full">
        <div className="container flex justify-between items-center md:justify-start">
          {/* Center the title on mobile view */}
          <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-500 cursor-pointer mx-auto md:mx-0">Nishan</h1>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden absolute right-6 top-4 flex items-center">
            {/* Dark Mode Toggle Button in Mobile */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl focus:outline-none transition duration-500 ease-in-out mr-4"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
            </button>

            {/* Hamburger Button */}
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className='hidden md:block ml-auto'>
            <ul className="flex space-x-8 font-bold font-lg">
              <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Home</a></li>
              <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">About</a></li>
              <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Skills</a></li>
              <li><a href="#qualification" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Qualification</a></li>
              <li><a href="#portfolio" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Projects</a></li>
              <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Contact</a></li>
            </ul>
          </nav>

          {/* Dark Mode Toggle Button for Desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:block ml-4 text-2xl focus:outline-none transition duration-500 ease-in-out"
          >
            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-500" />}
          </button>
        </div>
      </header>

      {/* Sidebar for Mobile - Slide from top right */}
      {isSidebarOpen && (
        <aside className="fixed top-0 right-0 w-[250px] h-full bg-white dark:bg-gray-900 shadow-lg z-30 p-6">
          <nav>
            <ul className="flex flex-col space-y-6 font-bold text-lg">
              <li><a href="#home" onClick={closeSidebar} className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Home</a></li>
              <li><a href="#about" onClick={closeSidebar} className="text-gray-700 dark:text-gray-300 hover:text-purple-500">About</a></li>
              <li><a href="#skills" onClick={closeSidebar} className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Skills</a></li>
              <li><a href="#qualification" onClick={closeSidebar} className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Qualification</a></li>
              <li><a href="#portfolio" onClick={closeSidebar} className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Projects</a></li>
              <li><a href="#contact" onClick={closeSidebar} className="text-gray-700 dark:text-gray-300 hover:text-purple-500">Contact</a></li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Header;
