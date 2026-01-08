import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo">D</div>
      </div>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? "nav-open" : ""}>
        <a href="#home">INICIO</a>
        <a href="#about">SOBRE MI</a>
        <a href="#projects">PORFOLIO</a>
        <a href="#educacion">EDUCACIÓN</a>
        <a href="#skills">SKILLS</a>
        <a href="#contact" className="nav-icon" title="Contacto">
          <BsTelephoneFill />
        </a>
      </nav>
    </header>
  );
}
export default Navbar;
