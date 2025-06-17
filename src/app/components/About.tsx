'use client'
import React from 'react'
import { FaHtml5, FaCss3Alt, FaPhp, FaJs, FaReact, FaWordpress } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMysql, SiExpress, SiApollographql } from "react-icons/si";
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" size={40} />,
    description: "Bahasa markup standar untuk membuat halaman web.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" size={40} />,
    description: "Digunakan untuk menata tampilan dan tata letak konten web.",
  },
  {
    name: "PHP",
    icon: <FaPhp className="text-indigo-700" size={40} />,
    description: "Bahasa pemrograman server-side untuk pengembangan web.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400" size={40} />,
    description: "Bahasa utama untuk menambahkan interaktivitas pada situs web.",
  },
  {
    name: "WordPress",
    icon: <FaWordpress className='text-sky-400' size={40} />,
    description: "Sistem manajemen konten (CMS) yang populer untuk membuat situs web.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" size={40} />,
    description: "Superset JavaScript yang mendukung pengetikan statis untuk kualitas kode yang lebih baik.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" size={40} />,
    description: "Framework CSS berbasis utility untuk pengembangan UI yang cepat.",
  },
  {
    name: "React JS",
    icon: <FaReact className="text-cyan-300" size={40} />,
    description: "Library JavaScript untuk membangun antarmuka pengguna berbasis komponen.",
  },
  {
    name: "Next JS",
    icon: <SiNextdotjs size={40} />,
    description: "Framework React untuk rendering sisi server dan pembuatan situs statis.",
  },
  {
    name: "Integrasi API",
    icon: <SiApollographql className="text-pink-500" size={40} />,
    description: "Menghubungkan dan mengambil data dari layanan eksternal melalui API.",
  },
  {
    name: "Express JS",
    icon: <SiExpress size={40} />,
    description: "Framework backend minimalis berbasis Node.js.",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="text-blue-500" size={40} />,
    description: "Sistem manajemen basis data relasional open-source yang populer.",
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
      {/* Judul Section */}
      <motion.div variants={itemVariants}>
        <h2 className='text-center text-lg mb-2 font-ovo text-blue-400 dark:text-[#F7374F]'>Perkenalan</h2>
        <h2 className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'>Tentang Saya</h2>
      </motion.div>

      {/* Konten Tentang Saya */}
      <motion.div 
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
        variants={containerVariants}
      >
        {/* Gambar Profil */}
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
          style={{ backgroundImage: `url(/p2.jpg)` }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        />
        
        {/* Deskripsi Diri */}
        <motion.div className='flex-1' variants={containerVariants}>
          <motion.p className='text-lg text-justify font-ovo' variants={itemVariants}>
            Saya awalnya adalah seorang pengembang antarmuka (Front-End Developer) yang memiliki ketertarikan besar dalam menciptakan aplikasi web yang menarik dan fungsional. Saya memiliki pengalaman dalam menggunakan HTML, CSS, JavaScript, TailwindCSS, dan React.
          </motion.p>
          <motion.p className='text-lg text-justify font-ovo mt-5' variants={itemVariants}>
            Saat ini, saya sedang memplajari back-end development dengan Node.js, Express, dan MongoDB. Saya percaya bahwa pemahaman yang baik tentang kedua sisi pengembangan (front-end dan back-end) akan membantu saya menjadi pengembang yang lebih baik dan mampu menciptakan aplikasi web yang lebih kompleks.
          </motion.p>

          <motion.p className='text-lg text-justify font-ovo mt-5' variants={itemVariants}>
            Di waktu luang, saya senang pergi ke gym, membaca buku, serta menghabiskan waktu bersama keluarga dan teman-teman.
          </motion.p>

          {/* Kartu Pendidikan */}
          <motion.div
            className='border-[0.5px] border-gray-400 dark:border-[#ECEFCA] rounded-xl p-6 cursor-pointer mt-6'
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px -10px rgba(0,0,0,0.1)'
            }}
          >
            <GraduationCap className='my-4 font-semibold' />
            <h3 className='font-semibold my-4 text-gray-700 dark:text-[#b8bb9c] font-ovo'>Pendidikan</h3>
            <p className='text-sm text-gray-600 dark:text-[#b8bb9c] font-ovo'>
              Saya merupakan lulusan dari ITB STIKOM Bali dengan jurusan Teknologi Informasi. Selama masa studi, saya mendapatkan dasar yang kuat dalam pemrograman, algoritma, dan pengembangan perangkat lunak.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bagian Keahlian */}
      <motion.div variants={itemVariants}>
        <h2 className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'>Keahlian Saya</h2>
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
