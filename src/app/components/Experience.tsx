'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    company: "BTW Edutech",
    duration: "Maret 2024 - Juli 2024",
    position: "Magang Frontend Developer",
    description: "Membantu dalam pengembangan aplikasi web responsif menggunakan React dan TypeScript. Berkolaborasi dengan developer senior untuk mengimplementasikan fitur baru dan meningkatkan antarmuka pengguna."
  }
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className='w-full px-[12%] py-16 scroll-mt-20 bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA] mb-7' id='experience'>
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <h2 className='text-center text-lg mb-2 font-ovo text-blue-400 dark:text-[#F7374F]'>Perjalanan Karier</h2>
          <h2 className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'>Pengalaman Kerja</h2>
          <p className='text-center text-lg mb-2 font-ovo max-w-2xl mx-auto text-gray-600 dark:text-gray-300'>
            Perjalanan profesional saya melalui berbagai organisasi dan peran yang pernah saya jalani.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-white dark:bg-[#1a1033] border border-gray-200 dark:border-[#2a1b4d] hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-ovo text-gray-800 dark:text-white">{exp.company}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-ovo">{exp.duration}</span>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-500 dark:text-[#F7374F] mb-2 font-ovo">
                {exp.position}
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm font-ovo">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience