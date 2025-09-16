import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo">D</div>
        <div className="logo back"></div>
      </div>
      <nav>
        <a href="#home">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}
export default Navbar;
