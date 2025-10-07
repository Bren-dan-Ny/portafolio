import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-container">
        <div className="logo">D</div>
        <div className="logo back"></div>
      </div>
      <nav>
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
