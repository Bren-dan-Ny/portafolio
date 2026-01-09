import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo">D</div>
      </div>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <nav className={isOpen ? "nav-open" : ""}>
        <a href="#home" onClick={closeMenu}>
          INICIO
        </a>
        <a href="#about" onClick={closeMenu}>
          SOBRE MI
        </a>
        <a href="#projects" onClick={closeMenu}>
          PORFOLIO
        </a>
        <a href="#educacion" onClick={closeMenu}>
          EDUCACIÓN
        </a>
        <a href="#skills" onClick={closeMenu}>
          SKILLS
        </a>
        <a
          href="#contact"
          className="nav-icon"
          title="Contacto"
          onClick={closeMenu}
        >
          <BsTelephoneFill />
        </a>
      </nav>
    </header>
  );
}
export default Navbar;
