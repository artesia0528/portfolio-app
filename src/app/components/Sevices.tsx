'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, CheckCircle, Star, Zap, ArrowRight } from 'lucide-react';

// Definisikan tipe untuk kunci paket
type PackageKey = 'basic' | 'standard' | 'premium';

// Definisikan tipe untuk paket
interface Package {
  name: string;
  price: string;
  note: string; 
  features: string[];
  recommended: boolean;
  icon: React.ReactNode;
}

const Services = () => {
  // Gunakan tipe PackageKey untuk state
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('standard');

  // Definisikan objek packages dengan tipe yang jelas
  const packages: Record<PackageKey, Package> = {
    basic: {
      name: 'Paket Basic',
      price: 'Rp 755.000',
      features: [
        'Free domain',
        'Shared hosting',
        'Desain responsive (Mobile & Desktop)',
        'Direct WhatsApp chat',
        'Free SEO optimization',
        '1 email bisnis',
        'SSD storage',
        'Free SSL',
        'Gratis revisi 2x',
        'Gratis maintenance 1 bulan',
        'Source code',
        'Video panduan'
      ],
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      recommended: false,
      note: 'Cocok untuk landing page, portofolio, dan website statis.',
    },
    standard: {
      name: "Paket Standard",
      price: "Rp 1.250.000",
      features: [
        "Free domain",
        "Shared hosting",
        "Desain responsive (Mobile & Desktop)",
        "Direct WhatsApp chat",
        "Free SEO optimization",
        "3 email bisnis",
        "SSD storage",
        "Free SSL",
        "Gratis revisi 3x",
        "Gratis maintenance 2 bulan",
        "Source code",
        "Video panduan"
      ],
      recommended: true,
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      note: 'Cocok untuk website dinamis ringan (SSG) berbasis Next.js/Vue.',
    },
    premium: {
      name: "Paket Premium",
      price: "Rp 2.550.000",
      features: [
        "Free domain",
        "Free hosting 1 tahun",
        "Desain responsive (Mobile & Desktop)",
        "Direct WhatsApp chat",
        "Free SEO optimization",
        "5 email bisnis",
        "SSD storage",
        "Request fitur khusus",
        "Free SSL",
        "Gratis revisi 5x",
        "Gratis maintenance 2,5 bulan",
        "Source code",
        "Video panduan"
      ],
      recommended: false,
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      note: 'Cocok untuk aplikasi kompleks dengan fitur custom dan SSR.',
    }
  };

  // Gunakan tipe PackageKey untuk parameter
  const handlePackageSelect = (pkg: PackageKey) => {
    setSelectedPackage(pkg);
  };

  // Gunakan tipe PackageKey untuk parameter
  const generateWhatsAppMessage = (pkg: PackageKey) => {
    const packageName = packages[pkg].name;
    const packagePrice = packages[pkg].price;
    
    return encodeURIComponent(
      `Halo Aditya, saya tertarik dengan ${packageName} (${packagePrice}) untuk pembuatan website. Bisakah kita berdiskusi lebih lanjut?`
    );
  };

  // Variants untuk animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="w-full px-[12%] py-16 scroll-mt-20 bg-sky-50 dark:bg-[#210F37] dark:text-[#ECEFCA]" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-2 font-ovo text-blue-400 dark:text-[#F7374F]"
          >
            Layanan Profesional
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-ovo mb-4 font-bold dark:text-[#ECEFCA]"
          >
            Pilihan Paket Website
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg mb-2 font-ovo max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Solusi website profesional dengan harga terjangkau untuk kebutuhan bisnis Anda
          </motion.p>
        </motion.div>

        {/* Package Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {(Object.entries(packages) as [PackageKey, Package][]).map(([key, pkg]) => (
            <motion.div
              key={key}
              className={`relative flex flex-col h-full rounded-2xl overflow-hidden border ${
                pkg.recommended
                  ? 'border-yellow-400 dark:border-yellow-400 shadow-xl'
                  : 'border-gray-200 dark:border-[#2a1b4d]'
              } ${selectedPackage === key ? 'ring-2 ring-blue-500' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: pkg.recommended 
                  ? '0 25px 50px -12px rgba(255, 215, 0, 0.4)' 
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePackageSelect(key)}
              layout
            >
              {pkg.recommended && (
                <motion.div 
                  className="absolute top-2.5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-1 rounded-b-full text-xs font-bold whitespace-nowrap z-10"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  REKOMENDASI
                </motion.div>
              )}
              
              <div className={`p-1 flex-grow ${
                pkg.recommended 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' 
                  : 'bg-gray-100 dark:bg-[#2a1b4d]'
              }`}>
                <div className="bg-white dark:bg-[#1a1033] p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="p-2 bg-blue-100 dark:bg-[#2a1b4d] rounded-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {pkg.icon}
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-bold font-ovo text-gray-800 dark:text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {pkg.name}
                      </motion.h3>
                    </div>
                    {pkg.recommended && (
                      <motion.div 
                        className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        VALUE TERBAIK
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <motion.div 
                      className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {pkg.price}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-sm text-gray-400 mb-4"
                    >
                      {pkg.note}
                    </motion.p>
                    <motion.p 
                      className="text-gray-500 dark:text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      Pembayaran satu kali
                    </motion.p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2"
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.a 
                    href={`https://wa.me/6285162560528?text=${generateWhatsAppMessage(key)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 mt-auto ${
                      pkg.recommended 
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700'
                        : 'bg-gray-100 dark:bg-[#2a1b4d] text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-[#3a2b5d]'
                    } transition-all`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Pilih Paket <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div 
          className="mt-16 bg-white dark:bg-[#1a1033] rounded-2xl p-8 border border-gray-200 dark:border-[#2a1b4d]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 font-ovo text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Layanan Tambahan
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Maintenance Website",
                description: "Perawatan berkala untuk menjaga website Anda tetap optimal",
                price: "Rp 200.000 / bulan",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Optimasi SEO Lanjutan",
                description: "Meningkatkan peringkat website di mesin pencari",
                price: "Rp 500.000 / bulan",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Konten Berkala",
                description: "Pembuatan artikel/blog untuk website Anda",
                price: "Rp 100.000 / artikel",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Penambahan Animasi Interaktif",
                description: "Animasi menarik menggunakan framer-motion atau GSAP",
                price: "Rp 300.000 / halaman",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Integrasi WhatsApp / Chat",
                description: "Tombol WhatsApp & integrasi live chat seperti Tawk.to",
                price: "Rp 150.000 / integrasi",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Formulir Kontak Kustom",
                description: "Form dinamis dengan validasi & pengiriman ke email/WhatsApp",
                price: "Rp 200.000 / form",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Google Analytics & Search Console",
                description: "Integrasi pelacakan performa website",
                price: "Rp 150.000 / setup",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Pembuatan Landing Page Promo",
                description: "Landing page untuk campaign promosi & produk",
                price: "Rp 500.000 / halaman",
                icon: <Check className="w-5 h-5 text-green-500" />
              },
              {
                title: "Perbaikan Bug / Error",
                description: "Mengatasi bug ringan pada website yang berjalan",
                price: "Mulai dari Rp 100.000",
                icon: <Check className="w-5 h-5 text-green-500" />
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="p-6 bg-sky-50 dark:bg-[#2a1b4d] rounded-xl"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <motion.h4 
                  className="font-bold text-lg mb-3 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  {service.icon} {service.title}
                </motion.h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <motion.div 
                  className="font-bold text-blue-500 dark:text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.price}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center font-ovo text-gray-800 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Pertanyaan Umum
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                question: "Berapa lama waktu pengerjaan website?",
                answer: "Waktu pengerjaan tergantung pada paket yang dipilih. Paket Basic biasanya selesai dalam 4-7 hari kerja, Standard 5-9 hari kerja, dan Premium 7-14 hari kerja."
              },
              {
                question: "Apakah saya bisa request fitur khusus?",
                answer: "Tentu! Untuk fitur khusus di luar paket, kami akan memberikan penawaran tambahan sesuai kompleksitas fitur yang diminta."
              },
              {
                question: "Bagaimana proses pembayarannya?",
                answer: "Pembayaran dilakukan dengan DP 50% di awal sebelum pengerjaan dimulai, dan pelunasan 50% setelah website selesai dan disetujui."
              }
              // {
              //   question: "Apakah website saya bisa diubah nantinya?",
              //   answer: "Ya, Anda akan mendapatkan akses admin untuk mengubah konten website. Kami juga menyediakan video panduan dan training penggunaan."
              // }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-[#1a1033] p-6 rounded-xl border border-gray-200 dark:border-[#2a1b4d]"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <motion.h4 
                  className="font-bold text-lg mb-3 text-blue-500 dark:text-blue-400"
                  whileHover={{ scale: 1.02 }}
                >
                  {faq.question}
                </motion.h4>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-4 font-ovo text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Siap Membuat Website Impian Anda?
          </motion.h3>
          <motion.p 
            className="text-lg mb-6 font-ovo text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Jangan ragu untuk menghubungi saya. Saya siap membantu mewujudkan website profesional untuk bisnis Anda.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="https://wa.me/6285162560528?text=Halo%20Aditya,%20saya%20ingin%20berkonsultasi%20tentang%20pembuatan%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold font-obo hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a 
              href="mailto:akrisna321@gmail.com"
              className="bg-blue-800 text-white px-6 py-3 rounded-full font-bold font-obo hover:bg-blue-900 transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Kirim Email
            </motion.a>
          </div>
          
          <motion.p 
            className="mt-6 text-blue-100 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Respon dalam 1x24 jam | Garansi kepuasan 100%
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;