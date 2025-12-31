import "../styles/about.css";

function About() {
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
          <a
            href="mailto:lhuanaclopez14@gmail.com"
            className="btn-primary__"
            download
          >
            Contáctame
          </a>
          <a href="/cv.pdf" className="btn-primary__" download>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
