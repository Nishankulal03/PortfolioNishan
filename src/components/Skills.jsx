import React from 'react';
import SkillImg from '../assets/skil.png';
import { FaHtml5, FaAngular, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaGitAlt, FaReact, FaPython } from 'react-icons/fa';
import { SiUipath, SiPowerbi, SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'React', icon: <FaReact className="text-blue-400 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'UiPath', icon: <SiUipath className="text-black w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'Java', icon: <FaJava className="text-orange-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'PowerBi', icon: <SiPowerbi className="text-yellow-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'MongoDB', icon: <BiLogoMongodb className="text-green-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'MySql', icon: <SiMysql className="text-blue-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'PHP', icon: <FaPhp className="text-blue-500 w-10 h-10 md:w-12 md:h-12" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500 w-10 h-10 md:w-12 md:h-12" /> },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20 px-6 md:px-[10rem] flex flex-col md:flex-row">
      <div className="container">
        <h2 className="text-2xl mb-4 font-bold dark:text-purple-300 text-purple-500 sm:text-1xl md:text-4xl text-right flex justify-end">
          Skills, Tools & Technology
        </h2>

        {/* Adjusted grid layout for mobile */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <h3 className="mt-2 text-xs md:text-sm font-semibold dark:text-gray-300">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Image: Hidden on mobile, visible on medium & large screens */}
      <img
        src={SkillImg}
        alt="Developer Illustration"
        className="hidden md:block w-40 md:w-56 lg:w-72 ml-10"
      />
    </section>
  );
};

export default Skills;
