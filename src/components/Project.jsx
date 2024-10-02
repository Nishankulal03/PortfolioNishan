import React, { useState } from 'react';
import p1 from '../assets/agr.jpeg';
import p2 from '../assets/boo.jpeg';
import p3 from '../assets/disne.jpeg';
import p4 from '../assets/ap.jpeg';
import p5 from '../assets/imag.jpeg';
import { FaLink, FaGithub } from "react-icons/fa";

// Sample portfolio data
const portfolioData = [
  { id: 1, title: 'Agri-Cliam', category: 'Website', image: p1, description: 'An online Insurnace claiming platform', sourceCode: 'https://github.com/Nishankulal03', liveDemo: '' },
  { id: 2, title: 'BookStore', category: 'Website', image: p2, description: 'Disney Website clone.', sourceCode: 'https://github.com/Nishankulal03', liveDemo: '' },
  { id: 3, title: 'Disney-Clone', category: 'Website', image: p3, description: 'BookStore e-commerce Website.', sourceCode: 'https://github.com/Nishankulal03/Disney-Clone', liveDemo: 'https://disney-clone-coral-two.vercel.app/' },
  { id: 4, title: 'Api-Testing', category: 'Application', image: p4, description: 'Api-Testing Automation', sourceCode: 'https://github.com/Nishankulal03', liveDemo: '' },
  { id: 5, title: 'Disk-Management', category: 'Application', image: p5, description: 'Disk Management and cleaning project', sourceCode: 'https://github.com/Nishankulal03', liveDemo: '' },
];

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredItem, setHoveredItem] = useState(null);

  const filteredPortfolio = activeFilter === 'All' ? portfolioData : portfolioData.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6  text-purple-500 dark:text-purple-300">Projects</h2>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-8">
          {['All', 'Website', 'Application'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`mx-2 px-4 py-2 rounded-full border-2 border-purple-500 dark:border-purple-400 ${
                activeFilter === filter ? 'bg-purple-500 dark:bg-purple-400 text-white' : 'bg-white dark:bg-gray-800 text-purple-500 dark:text-purple-400'
              } transition duration-300`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio items */}
        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="relative min-w-[250px] sm:min-w-[300px] h-[350px] bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex-shrink-0 snap-center"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-[200px] object-cover transition-opacity duration-300 ${hoveredItem === item.id ? 'opacity-50' : 'opacity-100'}`}
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold dark:text-white">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center bg-gray-900 bg-opacity-70 text-white space-y-4 z-10">
                    <a
                      href={item.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xl font-bold hover:underline"
                    >
                      <FaLink /> <span>Live Demo</span>
                    </a>
                    <a
                      href={item.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-xl font-bold hover:underline"
                    >
                      <FaGithub /> <span>Source Code</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
