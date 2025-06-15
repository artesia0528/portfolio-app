'use client'
import React, { useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Header: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

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

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <motion.div 
      className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA]' 
      id='home'
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Gambar Profil dengan Animasi Pop-in */}
      <motion.div
        className='rounded-full max-w-none bg-cover bg-center mt-20 shadow-lg border-4 border-white/20 dark:border-[#3a2b5d]'
        style={{ 
          backgroundImage: `url(/p2.jpg)`,
          height: "256px",
          width: "256px",
        }}
        variants={scaleVariants}
      />

      {/* Salam Pembuka */}
      <motion.h3 
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
        variants={itemVariants}
      >
        Halo! Saya Krisna Aditya
      </motion.h3>

      {/* Headline Utama */}
      <motion.p 
        className='gap-2 text-3xl md:text-4xl mb-3 font-ovo'
        variants={itemVariants}
      >
        Saya seorang <span className='text-blue-400 dark:text-[#F7374F]'>Web Developer</span> dan Freelancer
      </motion.p>

      {/* Deskripsi */}
      <motion.p 
        className='text-lg font-ovo max-w-2xl'
        variants={itemVariants}
      >
        Saya senang merancang dan membangun aplikasi web modern yang responsif. 
        Dengan semangat tinggi terhadap teknologi, saya berfokus pada pengalaman pengguna 
        yang optimal, tampilan yang menarik, dan performa yang efisien.
      </motion.p>

      {/* Tombol Resume */}
      <motion.div
        className='flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full hover:bg-white/10 hover:shadow-md transition-all'
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
        }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="/CV_FWD_ADIT.pdf" download className='flex gap-2 font-ovo items-center'>
          <motion.p
            whileHover={{ x: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Unduh CV Saya
          </motion.p>
          <motion.span
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Download size={18} />
          </motion.span>
        </a>
      </motion.div>
    </motion.div>
  )
}

export default Header
