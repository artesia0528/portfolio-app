'use client'

import React, { useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Header: React.FC = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div id="home" className="relative w-full min-h-[100dvh] pt-44 overflow-hidden px-4">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b to-sky-50/80 from-white dark:to-[#210F37]/90 dark:from-[#0a0614] -z-40" />

      {/* Hero Content */}
      <motion.div
        className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center gap-6"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold font-ovo mb-4 leading-tight"
          variants={itemVariants}
        >
          <motion.span
            className="block text-blue-500 dark:text-[#F7374F] mb-2"
            variants={itemVariants}
          >
            Jasa Pembuatan Website Profesional
          </motion.span>
          untuk UMKM & Startup
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl font-ovo leading-relaxed"
          variants={itemVariants}
        >
          Desain modern, harga terjangkau, dan hasil maksimal untuk
          <span className="text-blue-500 dark:text-[#F7374F] font-bold">
            {' '}meningkatkan penjualan
          </span>{' '}bisnis Anda
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 my-6"
          variants={itemVariants}
        >
          {[
            'Desain Responsif & Modern',
            'Harga Terjangkau UMKM',
            'Optimasi SEO',
            'Garansi Revisi',
            'Support 24/7',
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="px-4 py-2 bg-blue-100 dark:bg-[#2a1b4d] rounded-full text-blue-700 dark:text-blue-300 text-sm sm:text-base font-medium"
              whileHover={{
                scale: 1.05,
                backgroundColor: '#dbeafe',
                color: '#1d4ed8',
              }}
              transition={{ duration: 0.3 }}
            >
              {feature}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/6285162560528?text=Halo%20Aditya,%20saya%20ingin%20berkonsultasi%20tentang%20pembuatan%20website."
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Konsultasi Gratis
          </motion.a>

          <motion.a
            href="/CV_FWD_ADIT.pdf"
            download
            className="px-8 py-3 bg-white dark:bg-[#2a1b4d] border border-blue-500 text-blue-500 dark:text-blue-300 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-[#3a2b5d] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Portfolio Saya</span>
            <Download size={18} />
          </motion.a>
        </motion.div>

        {/* <motion.div
          className="mt-8 p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-[#2a1b4d] rounded-r-lg max-w-lg"
          variants={itemVariants}
        >
          <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base leading-relaxed">
            Website yang dibuat sangat profesional dan membantu meningkatkan penjualan saya hingga 40% dalam 3 bulan. Harga sangat terjangkau untuk UMKM seperti saya.
          </p>
          <p className="mt-2 text-right text-blue-500 font-semibold">
            - Pemilik Kedai Kopi Lokal
          </p>
        </motion.div> */}
      </motion.div>
    </div>
  )
}

export default Header
