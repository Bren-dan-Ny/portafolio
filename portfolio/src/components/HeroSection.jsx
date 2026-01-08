import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "../styles/herosection.css";
import profile from "../assets/profile.png";

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
            <a href="#contact" className="btn-primary_">
              Contactame
            </a>
            <a
              href={`${import.meta.env.BASE_URL}curriculum/cv.pdf`}
              className="btn-primary_"
              target="_blank"
            >
              Ver CV
            </a>
          </div>
          <div className="contact-icons">
            <a
              href="https://github.com/Bren-dan-Ny"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-background"
            >
              <FaGithub className="icon github" />
            </a>
            <a
              href="mailto:lhuanaclopez14@gmail.com"
              className="icon-background"
            >
              <FaEnvelope className="icon email" />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Dayana" />
        </div>
      </div>
    </section>
  );
}
