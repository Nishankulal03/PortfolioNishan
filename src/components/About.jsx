import React from "react";
import AboutImg from "../assets/aboutm.png";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-2 flex flex-col md:flex-row px-4 md:px-20">
      {/* Image Section for Mobile and Desktop */}
      <div className="relative flex justify-center items-center mt-4 md:mt-10 w-full md:w-1/2">
  {/* Triangle Shape */}
  <div className="relative w-40 h-40 md:w-56 md:h-56 flex justify-center items-end">
    <div className="w-0 h-0 border-l-[80px] md:border-l-[100px] 
                    border-r-[80px] md:border-r-[100px] 
                    border-b-[140px] md:border-b-[180px] 
                    border-transparent border-b-purple-400 
                    shadow-lg absolute bottom-0">
    </div>

    {/* Image Positioned Inside Triangle */}
    <img src={AboutImg} 
         alt="Developer cartoon" 
         className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                    w-28 md:w-36 rounded-lg shadow-lg" />
  </div>
</div>


      {/* Text Content Section */}
      <div className="container mx-auto text-center order-2 md:order-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-purple-300 pb-12 text-purple-500">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10 text-justify text-sm md:text-base">
          I am an enthusiastic Information Science student with a passion for solving real-world challenges through innovative technology. With skills in programming languages like C, Java, and Python, I am adept at building dynamic solutions. I have hands-on experience in full-stack development and automation tools like UiPath Studio, and I have a foundational knowledge of data analytics, including working with Power BI for data visualization and reporting. Currently, I am acquiring my expertise in full-stack development with Java, Spring, and Spring Boot. I am excited to leverage my technical and analytical skills to contribute to impactful projects in a dynamic IT environment.
        </p>
        <br/>
        <button className="mx-auto mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex">
          <a href="https://drive.google.com/file/d/1oW5ESQm-HYHHDA9ssHD0SKyVKXRtKOkC/view?usp=sharing" className="w-full text-center">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About;
