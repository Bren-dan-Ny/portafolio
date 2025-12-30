import "../styles/portfolio.css";
import { FaGithub } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import demo1 from "../assets/demo1.png";
import demo2 from "../assets/demo2.png";
import demo3 from "../assets/demo3.png";

function Portfolio() {
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
                Aplicación web e-commerce desarrollada con React, que consume la
                API de DummyJSON para mostrar productos dinámicamente, con
                carrito de compras y diseño responsivo.
              </p>
              {/* Tecnologías */}
              <div className="technologies">
                <span className="tag react">React</span>
                <span className="tag js">JavaScript</span>
                <span className="tag html">HTML</span>
                <span className="tag css">CSS</span>
                <span className="tag bootstrap">Bootstrap</span>
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
                Aplicación To-Do desarrollada con React, enfocada en el manejo
                eficiente del estado y la experiencia de usuario. Permite
                gestionar tareas con actualizaciones en tiempo real sin recargar
                la página.
              </p>
              {/* Tecnologías */}
              <div className="technologies">
                <span className="tag react">React</span>
                <span className="tag js">JavaScript</span>
                <span className="tag html">HTML</span>
                <span className="tag css">CSS</span>
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
              <p>
                Aplicación web interactiva que consume la PokeAPI para mostrar
                información detallada de Pokémon. Permite explorar, buscar y
                visualizar datos de cada Pokémon de forma dinámica y responsiva.
              </p>
              {/* Tecnologías */}
              <div className="technologies">
                <span className="tag react">React</span>
                <span className="tag js">JavaScript</span>
                <span className="tag html">HTML</span>
                <span className="tag css">CSS</span>
                <span className="tag bootstrap">Bootstrap</span>
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
