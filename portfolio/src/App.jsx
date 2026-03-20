import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Educacion from "./components/Educacion";
import Skills from "./components/Skills";
import Contacto from "./components/Contacto";
import "./styles/responsive.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Educacion />
      <Skills />
      <Contacto />
    </>
  );
}

export default App;
