import "../styles/skills.css";

function Skills() {
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
