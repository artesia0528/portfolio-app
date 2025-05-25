'use client'
import React from 'react'
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMysql, SiExpress, SiApollographql } from "react-icons/si";
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" size={40} />,
    description: "The standard markup language for building web pages.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" size={40} />,
    description: "Used to style and layout web content.",
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-700" size={40} />,
    description: "A server-side scripting language for web development.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" size={40} />,
    description: "The main language for adding interactivity to websites.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={40} />,
    description: "A typed superset of JavaScript that improves code quality.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" size={40} />,
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    name: "React JS",
    icon: <FaReact className="text-cyan-300" size={40} />,
    description: "A JavaScript library for building component-based UIs.",
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs className="" size={40} />,
    description: "A React framework for server-side rendering and static sites.",
  },
  {
    name: "API Integration",
    icon: <SiApollographql className="text-pink-500" size={40} />,
    description: "Connecting and consuming data from external APIs.",
  },
  {
    name: "Express JS",
    icon: <SiExpress className="" size={40} />,
    description: "A minimalist backend framework for Node.js.",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500" size={40} />,
    description: "A popular open-source relational database management system.",
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className='w-full px-[12%] py-10 scroll-mt-20 bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA]' 
      id="aboutme"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Section Titles */}
      <motion.div variants={itemVariants}>
        <h2 className='text-center text-lg mb-2 font-ovo text-blue-400 dark:text-[#F7374F]'>Introduction</h2>
        <h2 className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'>About me</h2>
      </motion.div>

      {/* About Content */}
      <motion.div 
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        variants={containerVariants}
      >
        {/* Profile Image */}
        <motion.div 
          className='
            aspect-square 
            w-64 sm:w-80 
            rounded-3xl 
            max-w-none 
            overflow-hidden 
            bg-cover 
            bg-center 
            shadow-lg 
            border-4 
            border-white/20 
            dark:border-[#3a2b5d]
          '
          style={{ 
            backgroundImage: `url(/ImageP.jpg)` // pastikan nama file benar
          }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        />
        {/* Bio Text */}
        <motion.div 
          className='flex-1'
          variants={containerVariants}
        >
          <motion.p 
            className='text-lg text-justify font-ovo'
            variants={itemVariants}
          >
            I am a front-end developer with a passion for creating beautiful and functional web applications. I have experience in HTML, CSS, JavaScript, TailwindCSS and React, and I am always eager to learn new technologies and improve my skills.
          </motion.p>
          
          <motion.p 
            className='text-lg text-justify font-ovo mt-5'
            variants={itemVariants}
          >
            In my free time, I love to explore go to the gym, read books, and spend time with my family and friends.
          </motion.p>

          {/* Education Card */}
          <motion.div
            className='border-[0.5px] border-gray-400 dark:border-[#ECEFCA] rounded-xl p-6 cursor-pointer mt-6'
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px -10px rgba(0,0,0,0.1)'
            }}
          >
            <GraduationCap className='my-4 font-semibold' />
            <h3 className='font-semibold my-4 text-gray-700 dark:text-[#b8bb9c] font-ovo'>Education</h3>
            <p className='text-sm text-gray-600 dark:text-[#b8bb9c] font-ovo'>
              I am graduated at the ITB STIKOM Bali, majoring in Information Technology. I have gained a solid foundation in programming, algorithms, and software development.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={itemVariants}>
        <h2 className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'>My skills</h2>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-20"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg"
            variants={skillCardVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.15)'
            }}
            custom={index}
          >
            <div className="flex items-center mb-4 gap-3">
              {skill.icon}
              <h3 className="text-xl font-semibold font-ovo">{skill.name}</h3>
            </div>
            <p className="text-sm font-ovo">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default About