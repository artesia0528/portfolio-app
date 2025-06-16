'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);
    setResult("Sending...");

    try {
      const formData = new FormData(event.currentTarget);

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      id='contact'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className='w-full px-[12%] py-10 scroll-mt-20 bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA]'
    >
      <motion.h2
        className='text-center text-lg mb-2 font-ovo text-blue-400 dark:text-[#F7374F]'
        variants={fadeInUp}
      >
        Hubungi Saya
      </motion.h2>
      <motion.h2
        className='text-center text-5xl font-ovo mb-2 font-bold dark:text-[#ECEFCA]'
        variants={fadeInUp}
      >
        Kontak
      </motion.h2>
      <motion.p
        className='text-center text-lg mb-2 font-ovo max-w-2xl mx-auto text-gray-600 dark:text-gray-300'
        variants={fadeInUp}
      >
        Saya sangat senang mendengar dari Anda! Jika Anda memiliki pertanyaan, komentar, atau masukan, silakan isi formulir di bawah ini.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className='max-w-2xl mx-auto'
        variants={fadeInUp}
      >
        <div className='flex flex-col lg:flex-row gap-6 mt-10 mb-8'>
          <input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Masukan nama anda'
            type="text"
            required
            className='flex-1 p-3 outline-none rounded-md transition-all
              bg-white dark:bg-[#2a1b47] border 
              border-gray-300 dark:border-[#3d2a5f]
              text-gray-800 dark:text-[#ECEFCA]
              placeholder-gray-500 dark:placeholder-[#a0a0a0]
              focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#7c5fb9]
              focus:border-transparent'
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Masukan email anda'
            type="email"
            required
            className='flex-1 p-3 outline-none rounded-md transition-all
              bg-white dark:bg-[#2a1b47] border 
              border-gray-300 dark:border-[#3d2a5f]
              text-gray-800 dark:text-[#ECEFCA]
              placeholder-gray-500 dark:placeholder-[#a0a0a0]
              focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#7c5fb9]
              focus:border-transparent'
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          placeholder='Masukan pesan anda'
          required
          className='w-full p-4 outline-none rounded-md transition-all
            bg-white dark:bg-[#2a1b47] border 
            border-gray-300 dark:border-[#3d2a5f]
            text-gray-800 dark:text-[#ECEFCA]
            placeholder-gray-500 dark:placeholder-[#a0a0a0]
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#7c5fb9]
            focus:border-transparent mb-6'
        />

        <motion.button
          type="submit"
          disabled={loading}
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 ${
            loading ? 'bg-gray-500' : 'bg-[#210F37] hover:bg-[#3d2a5f] dark:bg-[#ECEFCA] dark:hover:bg-[#d8dbb6]'
          } text-white dark:text-[#210F37] rounded-full mx-auto duration-300 transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? 'Sending...' : success ? 'Sent!' : 'Submit'}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={
              loading
                ? { rotate: 360 }
                : success
                ? { scale: [1, 1.3, 1] }
                : { x: [0, 4, 0] }
            }
            transition={{
              duration: loading ? 1 : 1.5,
              repeat: loading || !success ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </motion.svg>
        </motion.button>

        {/* Tombol WhatsApp */}
        <motion.a
          href={`https://wa.me/6285162560528?text=${encodeURIComponent(
            'Halo, saya tertarik dengan jasa pembuatan website Anda.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className='w-max mx-auto mt-4 py-3 px-8 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-center transition-colors duration-300 flex items-center justify-center gap-2'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p>Hubungi via WhatsApp</p> 
          <FaWhatsapp />
        </motion.a>

        {/* Result Text */}
        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`mt-4 text-center ${
              result.includes("Successfully") ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  );
};

export default Contact;