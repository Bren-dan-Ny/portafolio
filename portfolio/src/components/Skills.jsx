import "../styles/skills.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // CONTENEDOR GENERAL
      gsap.fromTo(
        ".skills-container",
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
            trigger: ".skills",
            start: "top 85%",
            once: true,
          },
        }
      );

      // GRUPOS DE SKILLS
      gsap.fromTo(
        ".skills-group",
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 80%",
            once: true,
          },
        }
      );

      // TAGS (opcional, sutil)
      gsap.fromTo(
        ".skills-group .tag",
        {
          scale: 0.9,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".skills-container",
            start: "top 75%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="skills-group">
          <h3>Lenguajes de Programación</h3>
          <div className="tags">
            <span className="tag html">HTML5</span>
            <span className="tag css">CSS3</span>
            <span className="tag js">JavaScript</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Frameworks y Librerías</h3>
          <div className="tags">
            <span className="tag bootstrap">Bootstrap</span>
            <span className="tag react">React</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Software y Herramientas</h3>
          <div className="tags">
            <span className="tag illustrator">Adobe Illustrator</span>
            <span className="tag photoshop">Adobe Photoshop</span>

            <span className="tag figma">Figma</span>
            <span className="tag vscode">Visual Studio Code</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Otras Habilidades</h3>
          <div className="tags">
            <span className="tag">Comunicación</span>
            <span className="tag">Trabajo en equipo</span>
            <span className="tag">Resolución de problemas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
