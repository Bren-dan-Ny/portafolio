import "../styles/educacion.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Educacion() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ CONTENEDOR GENERAL
      gsap.fromTo(
        ".educacion-container",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".educacion",
            start: "top 80%",
            once: true,
          },
        }
      );

      // 2️⃣ TARJETAS
      gsap.fromTo(
        ".education-item",
        {
          y: 40,
          opacity: 0,
          scale: 0.97,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".educacion",
            start: "top 75%",
            once: true,
          },
        }
      );

      // 3️⃣ CONTENIDO INTERNO (muy sutil)
      gsap.fromTo(
        [".title-education", ".date-education"],
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".educacion",
            start: "top 75%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="educacion" id="educacion">
      <div className="educacion-container">
        <h2>Educación</h2>
        <div className="education-item">
          <div className="title-education">
            <h3>Especialización en Desarrollo Front-end</h3>
            <h4>Instituto IDAT</h4>
            <p>Curso de 210 horas</p>
            <a
              href={`${
                import.meta.env.BASE_URL
              }certificados/frontend-certificado.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Certificado
            </a>
          </div>

          <div className="date-education">
            <h5>Abril 2025 - Agosto 2025</h5>
          </div>
        </div>
        <div className="education-item">
          <div className="title-education">
            <h3>Diseño UX/UI</h3>
            <h4>Instituto IDAT</h4>
            <p>Curso de 32 horas</p>
            <a
              href={`${
                import.meta.env.BASE_URL
              }certificados/UX-UI-certificado.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Certificado
            </a>
          </div>

          <div className="date-education">
            <h5>Junio 2024 - Julio 2024</h5>
          </div>
        </div>
        <div className="education-item">
          <div className="title-education">
            <h3>Diseño Gráfico Digital</h3>
            <h4>Instituto SENATI</h4>
            <p>Carrera profesional - Egresada</p>
          </div>

          <div className="date-education">
            <h5>Febrero 2019 - Enero 2022</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Educacion;
