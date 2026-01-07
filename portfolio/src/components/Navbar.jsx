import { useState } from "react";
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
        <a href="#contact">CONTACTO</a>
      </nav>
    </header>
  );
}
export default Navbar;
