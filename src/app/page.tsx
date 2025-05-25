import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
