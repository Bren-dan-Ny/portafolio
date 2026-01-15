import "../styles/portfolio.css";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import demo3 from "../assets/demo3.png";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ CONTENEDOR GENERAL
      gsap.fromTo(
        ".port-container",
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
            trigger: ".portfolio",
            start: "top 85%",
            once: true,
          },
        }
      );

      // 2️⃣ TARJETAS
      gsap.fromTo(
        ".project-item",
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
            trigger: ".port-projects",
            start: "top 80%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="portfolio" id="projects">
      <div className="port-container">
        <h2>Portfolio</h2>
        <div className="port-projects">
          {/* proyecto 1 */}
          <div className="project-item">
            <div className="project-demo">
              <img
                src={demo1}
                alt="Vista previa - demo"
                className="project-img"
              />
            </div>
            {/* Informacion del proyecto */}
            <div className="project-info">
              <h3>E-commerce Dummy</h3>
              <p>
                E-commerce en React con consumo de API y carrito de compras.
              </p>
              {/* Tecnologías */}
              <div className="technologies">
                <span className="tag-portfolio react">React</span>
                <span className="tag-portfolio js">JavaScript</span>
                <span className="tag-portfolio html">HTML</span>
                <span className="tag-portfolio css">CSS</span>
                <span className="tag-portfolio bootstrap">Bootstrap</span>
              </div>
              {/* Enlaces git y demo */}
              <div className="project-links">
                <a
                  href="https://github.com/Bren-dan-Ny/proyect-commerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://bren-dan-ny.github.io/proyect-commerce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <HiLink />
                </a>
              </div>
            </div>
          </div>

          {/* proyecto 2 */}
          <div className="project-item">
            <div className="project-demo">
              <img
                src={demo2}
                alt="Vista previa - demo"
                className="project-img"
              />
            </div>
            {/* Informacion del proyecto */}
            <div className="project-info">
              <h3>To-Do App</h3>
              <p>
                To-Do app en React con manejo de estado y actualizaciones en
                tiempo real.
              </p>
              {/* Tecnologías */}
              <div className="technologies">
                <span className="tag-portfolio react">React</span>
                <span className="tag-portfolio js">JavaScript</span>
                <span className="tag-portfolio html">HTML</span>
                <span className="tag-portfolio css">CSS</span>
              </div>
              {/* Enlaces git y demo */}
              <div className="project-links">
                <a
                  href="https://github.com/Bren-dan-Ny/To-do-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://bren-dan-ny.github.io/To-do-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <HiLink />
                </a>
              </div>
            </div>
          </div>

          {/* proyecto 3 */}
          <div className="project-item">
            <div className="project-demo">
              <img
                src={demo3}
                alt="Vista previa - demo"
                className="project-img"
              />
            </div>
            {/* Informacion del proyecto */}
            <div className="project-info">
              <h3>Pokedex</h3>
              <p>Pokédex interactiva en React con consumo de PokeAPI.</p>
              {/* Tecnologías */}
              <div className="technologies">
                <span className="tag-portfolio react">React</span>
                <span className="tag-portfolio js">JavaScript</span>
                <span className="tag-portfolio html">HTML</span>
                <span className="tag-portfolio css">CSS</span>
                <span className="tag-portfolio bootstrap">Bootstrap</span>
              </div>
              {/* Enlaces git y demo */}
              <div className="project-links">
                <a
                  href="https://github.com/Bren-dan-Ny/PokeDex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://bren-dan-ny.github.io/PokeDex/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <HiLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
