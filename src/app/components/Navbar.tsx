"use client";
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const menuVariants = {
    open: { 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    },
    closed: { 
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  const overlayVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 }
    })
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  if (!isClient) return null;

  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 font-outfit backdrop-blur-md bg-white/80 dark:bg-[#210F37]/90 border-b border-gray-200 dark:border-[#3d2a5f]'>
      <motion.a 
        href="#top" 
        className='flex items-center group'
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h1 className='font-black text-3xl font-outfit text-gray-800 dark:text-[#ECEFCA] group-hover:text-blue-400 dark:hover:text-[#F7374F] transition-all'>
          Aditya
        </h1>
        <motion.div 
          className='h-4 w-4 bg-gradient-to-r from-blue-400 to-red-300 rounded-full ml-2 group-hover:from-blue-500 group-hover:to-red-400 transition-all'
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.a>

      <ul className='hidden lg:flex items-center gap-8 text-lg font-medium rounded-full px-12 py-3 font-ovo'>
        {['Home', 'About me', 'Services', 'Portfolio', 'Experience'].map((item, i) => (
          <motion.li
            key={item}
            initial="hidden"
            animate="visible"
            custom={i}
            variants={navItemVariants}
          >
            <a 
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className='text-gray-700 dark:text-[#ECEFCA] hover:bg-white/10 hover:text-blue-400 dark:hover:bg-[#3d2a5f]/50 dark:hover:text-[#F7374F] transition-all px-4 py-2 rounded-3xl'
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      <div className='flex items-center gap-4'>
        <motion.button 
          onClick={toggleDarkMode} 
          className='p-2 rounded-full hover:bg-white/10 dark:hover:bg-[#3d2a5f]/50 transition-all text-gray-700 dark:text-[#ECEFCA] hover:text-blue-400 dark:hover:text-[#F7374F]'
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div animate={{ rotate: isDarkMode ? 360 : 0 }}>
            {isDarkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
          </motion.div>
        </motion.button>
        
        <motion.div 
          className='hidden lg:flex items-center gap-3 px-6 py-2.5 border border-gray-300 dark:border-[#3d2a5f] rounded-full ml-4 hover:bg-white/10 dark:hover:bg-[#3d2a5f]/50 hover:text-blue-400 dark:hover:text-[#F7374F] transition-all'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#contact" 
            className='flex gap-2 font-ovo text-gray-700 dark:text-[#ECEFCA]'
          >
            <p>Contact</p> 
            <motion.span
              animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUpRight className='w-5 h-5' />
            </motion.span>
          </a>
        </motion.div>
        
        <motion.button 
          className='block lg:hidden ml-3 p-2 rounded-full hover:bg-white/10 dark:hover:bg-[#3d2a5f]/50 transition-all text-gray-700 dark:text-[#ECEFCA] hover:text-blue-400 dark:hover:text-[#F7374F]' 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className='w-6 h-6' />
        </motion.button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              className='fixed inset-0 bg-black/50 dark:bg-black/70 z-40 lg:hidden'
              onClick={() => setIsMenuOpen(false)}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              transition={{ duration: 0.2 }}
            />
            
            <motion.div
              className='fixed inset-y-0 right-0 w-64 z-50 bg-white dark:bg-[#210F37] shadow-xl lg:hidden'
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              {/* Header Menu */}
              <div className='flex justify-between items-center p-6 border-b border-gray-200 dark:border-[#3d2a5f] bg-white dark:bg-[#210F37]'>
                <h2 className='text-xl font-bold text-gray-800 dark:text-[#ECEFCA] font-ovo'>Menu</h2>
                <motion.button 
                  className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#3d2a5f] transition-all'
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className='w-6 h-6 text-gray-800 dark:text-[#ECEFCA]' />
                </motion.button>
              </div>

              {/* Menu Items */}
              <ul className='flex flex-col gap-1 p-4 bg-white dark:bg-[#210F37] font-ovo'>
                {['Home', 'About me', 'Portfolio', 'Experience'].map((item, i) => (
                  <motion.li
                    key={item}
                    variants={navItemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '')}`}
                      onClick={() => setIsMenuOpen(false)}
                      className='block px-4 py-3 rounded-lg text-gray-800 dark:text-[#ECEFCA] hover:bg-gray-100 dark:hover:bg-[#3d2a5f] transition-all'
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Button */}
              <div className='px-4 pb-4 bg-white dark:bg-[#210F37]'>
                <motion.div 
                  className='flex items-center gap-3 px-6 py-2.5 border border-gray-300 dark:border-[#3d2a5f] rounded-full hover:bg-gray-100 dark:hover:bg-[#3d2a5f] transition-all font-ovo'
                  whileHover={{ scale: 1.05 }}
                >
                  <a 
                    href="#contact" 
                    onClick={() => setIsMenuOpen(false)}
                    className='flex gap-2 text-gray-800 dark:text-[#ECEFCA] w-full items-center'
                  >
                    <span>Contact</span>
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;