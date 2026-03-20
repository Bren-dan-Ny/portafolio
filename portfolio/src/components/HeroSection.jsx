import { FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/herosection.css";
import profile from "../assets/profile.png";

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-image img", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
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

      {/*hero container - movile*/}

      <div className="hero-mobile">
        {/*titulo y subtitulo*/}
        <div className="hero-text">
          <h1>
            Hola, <br />
            Soy Dayana
          </h1>
          <h3>
            Bienvenid@ a mi porfolio <br /> como desarrolladora trainee.
          </h3>
        </div>
        {/*imagen , botones y redes sociales*/}
        <div className="hero-media">
          <div className="hero-actions">
            <div className="hero-image">
              <img src={profile} alt="Dayana" />
            </div>
            <div className="social-icons">
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
        </div>
      </div>
    </section>
  );
}
