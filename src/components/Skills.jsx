import React from 'react';
import SkillImg from '../assets/skil.jpeg';
import { FaHtml5,FaAngular, FaCss3Alt, FaJs,FaPhp, FaBootstrap, FaGitAlt, FaReact, FaPython } from 'react-icons/fa';

import { SiUipath,SiPowerbi,SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-12 h-12" /> },  // Reduced size
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-12 h-12" /> },  // Reduced size
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500 w-12 h-12" /> },  // Reduced size
    { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500 w-12 h-12" /> },  // Reduced size
    { name: 'Git & GitHub', icon: <FaGitAlt className="text-red-500 w-12 h-12" /> },  // Reduced size
    { name: 'React', icon: <FaReact className="text-blue-400 w-12 h-12" /> },  // Reduced size
    { name: 'UiPath', icon: <SiUipath className="text-black w-12 h-12" /> },
    { name: 'Java', icon: <FaJava className="text-orange-500 w-12 h-12" /> },
    { name: 'Python', icon: <FaPython className="text-blue-500 w-12 h-12" /> },
    { name: 'PowerBi', icon: <SiPowerbi className="text-yellow-500 w-12 h-12" /> }, 
    { name: 'MongoDB', icon: <BiLogoMongodb className="text-green-500 w-12 h-12" /> },
    { name: 'MySql', icon: <SiMysql className="text-blue-500 w-12 h-12" /> },
    { name: 'PHP', icon: <FaPhp className="text-blue-500 w-12 h-12" /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500 w-12 h-12" /> }, // Reduced size
  ];

  return (
    <section id="skills" className="bg-white px-[10rem] dark:bg-gray-900 py-20 flex">
      <div className="container">
        <h2 className="text-4xl mb-4 font-bold ml-[2rem] dark:text-purple-300 text-purple-500 flex justify-between items-center">
          Skills, Tools & Technology
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-8 justify-items-center mt-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <h3 className="mt-4 text-sm font-semibold dark:text-gray-300">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <img src={SkillImg} alt="Developer Illustration" className="w-1/2 ml-16" style={{ width: '22rem', height: '22rem' }} />
    </section>
  );
};

export default Skills;
