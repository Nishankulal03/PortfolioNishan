import React from "react";
import AboutImg from "../assets/aboutme.png";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 flex px-20">
      <div className=" w-1/2" >
      <img src={AboutImg} alt="Developer cartoon" className=" w-full -mt-60" />

      </div>
      
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6  dark:text-purple-300 pb-12 text-purple-500 ">
          About Me
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10 text-justify">
          I am an enthusiastic Information Science student with a passion for solving real-world challenges through innovative technology. With skills in programming languages like C, Java, and Python, I am adept at building dynamic solutions. I have hands-on experience in full-stack development and automation tools like UiPath Studio,I have a foundational knowledge of data analytics, including working with Power BI for data visualization and reporting. Currently, I am Acquiring my expertise in full-stack development with Java, Spring, and Spring Boot. I am excited to leverage my technical and analytical skills to contribute to impactful projects in a dynamic IT environment.
        </p>
        <button className=" ml-40  px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex ">
          <a href="https://drive.google.com/file/d/101ZOHExXNidUrRlewHgi3r0_Hl2BSVbT/view?usp=drive_link">Download CV</a>
        </button>
      </div>
    </section>
  );
};

export default About;
