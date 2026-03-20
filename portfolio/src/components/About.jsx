import "../styles/about.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-container", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert(); // 👈 evita bugs en StrictMode
  }, []);
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>Sobre Mi</h2>
        <p>
          Soy desarrolladora front-end en formación, apasionada por crear
          interfaces web minimalistas y funcionales. He concluido mi
          especialización en desarrollo frontend, aprendiendo HTML, CSS,
          JavaScript y frameworks modernos como React.
        </p>
        <p>
          Disfruto transformar ideas en experiencias visuales limpias, con
          atención a los detalles y enfoque en la usabilidad. Me encanta
          aprender nuevas herramientas y colaborar con otros para crear
          proyectos que inspiren.
        </p>
        <p>
          Si quieres ponerte en contacto conmigo, escríbeme a:
          <a href="mailto:lhuanaclopez14@gmail.com">lhuanaclopez14@gmail.com</a>
        </p>

        <div className="about-buttons">
          <a href="#contact" className="btn-primary__">
            Contáctame
          </a>
          <a
            href={`${import.meta.env.BASE_URL}curriculum/cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary__"
          >
            Ver CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
