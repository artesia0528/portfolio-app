'use client'
import { MailIcon } from 'lucide-react'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { ImInstagram } from 'react-icons/im'
import { LiaLinkedin } from 'react-icons/lia'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Footer = () => {
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

  const socialVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  }

  return (
    <motion.footer 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-20 py-10 bg-gradient-to-b from-transparent to-gray-100 dark:to-[#1a1033]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo section */}
          <motion.div 
            variants={itemVariants}
            className='flex items-center mb-6'
          >
            <h1 className='font-black text-3xl font-outfit text-gray-800 dark:text-white'>Aditya</h1>
            <motion.div 
              className='h-4 w-4 bg-gradient-to-r from-blue-400 to-red-300 rounded-full ml-2'
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          {/* Email section */}
          <motion.div 
            variants={itemVariants}
            className='flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#2a1b4d] shadow-md hover:shadow-lg transition-shadow duration-300'
            whileHover={{ scale: 1.05 }}
          >
            <MailIcon className='w-5 h-5 text-blue-500 dark:text-blue-400' />
            <p className='text-gray-700 dark:text-gray-300'>akrisna321@gmail.com</p>
          </motion.div>
          
          {/* Social links */}
          <motion.div 
            className="mt-6 w-full max-w-md"
            variants={containerVariants}
          >
            <ul className='flex justify-center gap-4 md:gap-8 my-6 flex-wrap'>
              <motion.li variants={socialVariants}>
                <a 
                  href="https://github.com/artesia0528" 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='
                    flex items-center gap-2 px-4 py-2 rounded-lg
                    text-gray-700 dark:text-gray-300 hover:text-white
                    bg-gray-100 dark:bg-[#2a1b4d] hover:bg-gray-800 dark:hover:bg-[#3a2b5d]
                    transition-all duration-300
                    group
                  '
                >
                  <BsGithub className='w-5 h-5 group-hover:scale-110 transition-transform' />
                  <span className='font-medium'>GitHub</span>
                </a>
              </motion.li>
              <motion.li variants={socialVariants}>
                <a 
                  href="https://www.linkedin.com/in/i-komang-krisna-aditya-kusuma/" 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='
                    flex items-center gap-2 px-4 py-2 rounded-lg
                    text-gray-700 dark:text-gray-300 hover:text-white
                    bg-gray-100 dark:bg-[#2a1b4d] hover:bg-blue-600 dark:hover:bg-blue-700
                    transition-all duration-300
                    group
                  '
                >
                  <LiaLinkedin className='w-5 h-5 group-hover:scale-110 transition-transform' />
                  <span className='font-medium'>LinkedIn</span>
                </a>
              </motion.li>
              <motion.li variants={socialVariants}>
                <a 
                  href="https://www.instagram.com/adit_wokeuplikethis/" 
                  target='_blank' 
                  rel="noopener noreferrer"
                  className='
                    flex items-center gap-2 px-4 py-2 rounded-lg
                    text-gray-700 dark:text-gray-300 hover:text-white
                    bg-gray-100 dark:bg-[#2a1b4d] hover:bg-gradient-to-r from-pink-500 to-purple-500
                    transition-all duration-300
                    group
                  '
                >
                  <ImInstagram className='w-5 h-5 group-hover:scale-110 transition-transform' />
                  <span className='font-medium'>Instagram</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className='mt-8 pt-6 border-t border-gray-200 dark:border-[#2a1b4d] w-full max-w-xs'
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Adit. All rights reserved.
            </p>
            <motion.p 
              className="text-sm text-gray-600 dark:text-gray-400 mt-1"
            >
              Made with <span className='text-red-500'>♥</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer