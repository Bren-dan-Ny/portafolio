import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/herosection.css";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Texto */}
        <div className="hero-text">
          <h1>
            Hola, <br />
            Soy Dayana
          </h1>
          <h3>Bienvenid@ a mi porfolio como desarrolladora trainee.</h3>

          <div className="hero-buttons">
            <a href="/cv.pdf" className="btn-primary_" download>
              Contactame
            </a>
            <a href="/cv.pdf" className="btn-primary_" download>
              Descargar CV
            </a>
          </div>
          <div className="contact-icons">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-background"
            >
              <FaGithub className="icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/tu-usuario/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-background"
            >
              <FaLinkedin className="icon linkedin" />
            </a>
            <a href="mailto:tuemail@example.com" className="icon-background">
              <FaEnvelope className="icon email" />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/profile.png" alt="Dayana" />
        </div>
      </div>
    </section>
  );
}
