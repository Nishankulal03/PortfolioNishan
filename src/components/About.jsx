import React from "react";
import AboutImg from "../assets/aboutm.png";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 flex flex-col md:flex-row px-4 md:px-20">
      {/* Image Section for Mobile and Desktop */}
      <div className="mt-4 md:mt-20 w-full md:w-1/2 order-1 md:order-1">
        {/* Adjusted the image size for mobile */}
        <img src={AboutImg} alt="Developer cartoon" className="w-3/4 md:w-full mx-auto md:-mt-60" />
      </div>

      {/* Text Content Section */}
      <div className="container mx-auto text-center order-2 md:order-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-purple-300 pb-12 text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10 text-justify text-sm md:text-base">
          I am an enthusiastic Information Science student with a passion for solving real-world challenges through innovative technology. With skills in programming languages like C, Java, and Python, I am adept at building dynamic solutions. I have hands-on experience in full-stack development and automation tools like UiPath Studio, and I have a foundational knowledge of data analytics, including working with Power BI for data visualization and reporting. Currently, I am acquiring my expertise in full-stack development with Java, Spring, and Spring Boot. I am excited to leverage my technical and analytical skills to contribute to impactful projects in a dynamic IT environment.
        </p>
        <button className="mx-auto mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex">
          <a href="https://drive.google.com/file/d/101ZOHExXNidUrRlewHgi3r0_Hl2BSVbT/view?usp=drive_link" className="w-full text-center">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About;
