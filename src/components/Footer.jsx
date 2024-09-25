import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white">
        <p> © {new Date().getFullYear()} Nishan | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="linkedin.com/in/nishan-kulal-1877b4228" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Nishankulal03" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
