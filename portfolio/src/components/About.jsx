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
          JavaScript y frameworks modernos.
        </p>

        <p>
          Si quieres ponerte en contacto conmigo escribe a:{" "}
          <a href="">lhuanaclopez14@gmail.com</a>
        </p>
        <a href="/cv.pdf" className="btn-primary" download>
          Descargar CV
        </a>
      </div>
    </section>
  );
}

export default About;
