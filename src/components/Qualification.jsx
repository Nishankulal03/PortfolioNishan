import React from 'react';

const Qualification = () => {
  return (
    <section id="qualification" className="bg-white dark:bg-gray-900 py-20 px-4 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-purple-500 dark:text-purple-300 text-center mb-8">
          My Qualifications
        </h2>

        <div className="qualification-container flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
          {/* SSLC */}
          <div className="qualification-item text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              SSLC
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Morarji Desai Residential School Vogga, 2019
            </p>
          </div>

          {/* Arrow (removed one arrow here) */}
          <div className="hidden md:block qualification-arrow md:w-1/12">
            <span className="block h-8 w-8 border-purple-500 rotate-45 mx-auto"></span>
          </div>

          {/* Pre-University College */}
          <div className="qualification-item text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              Pre-University College
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sri Rama PU College Kalladka, 2019-2021
            </p>
          </div>

          {/* Arrow (keep only one arrow here) */}
          <div className="hidden md:block qualification-arrow md:w-1/12">
            <span className="block h-8 w-8 border-purple-500 rotate-45 mx-auto"></span>
          </div>

          {/* Bachelor */}
          <div className="qualification-item text-center md:text-left md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
              Bachelor of Information Science and Engineering
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Canara Engineering College, 2021-present
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
