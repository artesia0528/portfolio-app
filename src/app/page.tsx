import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Services from "./components/Sevices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Aditya",
  description: "Kumpulan proyek web development terbaru karya Aditya Krisna",
  openGraph: {
    title: "Proyek Terbaru - Portfolio Aditya",
    description: "Lihat karya terbaru Aditya Krisna dalam web development",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
