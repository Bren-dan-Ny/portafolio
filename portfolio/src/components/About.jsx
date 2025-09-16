import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiSass } from "react-icons/si";

function About() {
  return (
    <section id="about" className="about">
      <h2>Sobre Mi</h2>
      <p>
        Soy desarrolladora front-end en formación, apasionada por crear
        interfaces web minimalistas y funcionales. He concluido mi
        especialización en desarrollo frontend, aprendiendo HTML, CSS,
        JavaScript y frameworks modernos.
      </p>

      <div className="tech-icons">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaBootstrap />
        <SiSass />
      </div>
    </section>
  );
}

export default About;
