import "../styles/heroSection.css";

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
          <h3>UI/UX Designer, Practicante de programación Frontend</h3>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Contáctame
            </a>
            <a href="/cv.pdf" className="btn-primary" download>
              Descargar CV
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="hero-image">
          <img src="/profile.png" alt="Dayana" />
        </div>
      </div>
    </section>
  );
}
