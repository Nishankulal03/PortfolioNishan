import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Qualification from './components/Qualification';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Qualification/>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
