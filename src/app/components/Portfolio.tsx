'use client'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaJs, FaReact } from 'react-icons/fa6';
import { SiExpress, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PORTFOLIO_DATA = [
  {
    id: 1,
    title: "Visit Besakih",
    description: "Proyek fullstack pertama saya, sebuah aplikasi web untuk Pura Besakih",
    stack: [
      { name: "JavaScript", icon: "FaJs", color: "text-yellow-400" },
      { name: "React", icon: "FaReact", color: "text-blue-500" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-400" },
      { name: "Express", icon: "SiExpress", color: "text-gray-800 dark:text-gray-200" },
      { name: "MySQL", icon: "SiMysql", color: "text-blue-600" },
    ],
    images: [
      "/Portfolio/P2/1.png",
      "/Portfolio/P2/2.png",
      "/Portfolio/P2/3.png",
      "/Portfolio/P2/4.png",
      "/Portfolio/P2/5.png",
      "/Portfolio/P2/6.png",
      "/Portfolio/P2/7.png",
    ],
    bgGradient: "from-purple-500 to-pink-500",
    link: "https://visitbesakih.com"
  },
  {
    id: 2,
    title: "Web Asesme",
    description: "Aplikasi web untuk 3P Diagnostics (Potensi, Kepribadian, dan Passion)",
    stack: [
      { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600" },
      { name: "Next.js", icon: "SiNextdotjs", color: "text-black dark:text-white" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-400" },
    ],
    images: [
      "/Portfolio/P1/1.png",
      "/Portfolio/P1/2.png",
      "/Portfolio/P1/3.png",
      "/Portfolio/P1/4.png",
    ],
    bgGradient: "from-blue-500 to-teal-500",
    link: "https://webasesme.com"
  },
  {
    id: 3,
    title: "Bali Herbal Tea",
    description: "Aplikasi web untuk Bali Herbal Tea, menampilkan produk dan informasi",
    stack: [
      { name: "TypeScript", icon: "SiTypescript", color: "text-blue-600" },
      { name: "Next.js", icon: "SiNextdotjs", color: "text-black dark:text-white" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-cyan-400" },
    ],
    images: [
      "/Portfolio/P3/1.png",
      "/Portfolio/P3/2.png",
      "/Portfolio/P3/3.png",
      "/Portfolio/P3/4.png",
      "/Portfolio/P3/5.png",
      "/Portfolio/P3/6.png",
    ],
    bgGradient: "from-green-500 to-lime-500",
    link: "https://bali-herbal-tea.vercel.app/"
  }
] as const;

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
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

  const renderIcon = (iconName: string, color: string) => {
    switch(iconName) {
      case "FaJs": return <FaJs className={`${color} text-xl`} />;
      case "FaReact": return <FaReact className={`${color} text-xl`} />;
      case "SiTailwindcss": return <SiTailwindcss className={`${color} text-xl`} />;
      case "SiExpress": return <SiExpress className={`${color} text-xl`} />;
      case "SiMysql": return <SiMysql className={`${color} text-xl`} />;
      case "SiTypescript": return <SiTypescript className={`${color} text-xl`} />;
      case "SiNextdotjs": return <SiNextdotjs className={`${color} text-xl`} />;
      default: return null;
    }
  };

  const handleViewAllProjects = () => {
    window.open('https://github.com/artesia0528?tab=repositories', '_blank');
  };

  return (
    <motion.div 
      className='w-full px-[12%] py-16 scroll-mt-20 bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA]' 
      id='portfolio'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <h2 className='text-center text-lg mb-2 font-ovo text-blue-400 dark:text-[#F7374F]'>Portofolio Saya</h2>
        <h2 className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'>Proyek Terbaru</h2>
        <p className='text-center text-lg mb-2 font-ovo max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>
          Selamat datang di portofolio pengembangan web saya! Jelajahi koleksi proyek yang menampilkan keahlian saya dalam pengembangan website.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12'
        variants={containerVariants}
      >
        {PORTFOLIO_DATA.map((item) => (
          <motion.a 
            key={item.id} 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className='
              block group relative bg-white rounded-xl overflow-hidden 
              hover:shadow-2xl transition-all duration-300 
              dark:bg-[#1a1033] border border-gray-200 dark:border-[#2a1b4d]
              hover:-translate-y-2 cursor-pointer
            '
            variants={cardVariants}
            whileHover={{
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Gradient overlay on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 
              group-hover:opacity-20 transition-opacity duration-300
              dark:group-hover:opacity-30 ${item.bgGradient}`}></div>
            
            {/* Project Slider */}
            <motion.div 
              className="slider-container"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Slider {...settings}>
                {item.images.map((img, index) => (
                  <div key={`${item.id}-${index}`}>
                    <div className='w-full h-[300px] relative'>
                      <Image
                        src={img}
                        alt={`${item.title} - ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </motion.div>
            
            {/* Project Details */}
            <motion.div 
              className='p-6'
              variants={itemVariants}
            >
              <h3 className='text-2xl font-bold mb-2 font-ovo text-gray-800 dark:text-white'>{item.title}</h3>
              <p className='text-gray-600 mb-4 font-ovo dark:text-gray-300'>{item.description}</p>
              
              {/* Tech Stack */}
              <motion.div 
                className="flex flex-wrap gap-2 mt-4"
                variants={containerVariants}
              >
                {item.stack.map((tech, techIndex) => (
                  <motion.div 
                    key={`${item.id}-tech-${techIndex}`}
                    className={`
                      flex items-center gap-2 px-3 py-1.5 rounded-full 
                      transition-all duration-200
                      bg-gray-100 hover:bg-gray-200 
                      dark:bg-[#2a1b4d] dark:hover:bg-[#3a2b5d]
                      border border-gray-200 dark:border-[#3a2b5d]
                      group-hover:border-transparent
                    `}
                    title={tech.name}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className={`${tech.color} flex-shrink-0`}>
                      {renderIcon(tech.icon, tech.color)}
                    </span>
                    <span className="text-sm font-medium font-ovo text-gray-700 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
      
      {/* View All Projects Button */}
      <motion.div 
        className="text-center mt-12"
        variants={itemVariants}
      >
        <motion.button 
          onClick={handleViewAllProjects}
          className='
            px-6 py-3 rounded-full 
            bg-gradient-to-r from-blue-500 to-purple-500 
            text-white font-medium font-ovo
            hover:from-blue-600 hover:to-purple-600
            transition-all duration-300
            shadow-lg hover:shadow-xl
            border-2 border-transparent hover:border-white/20
            flex items-center justify-center gap-2 mx-auto
          '
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
        >
          <span>View All Projects</span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            animate={{
              x: [0, 4, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;