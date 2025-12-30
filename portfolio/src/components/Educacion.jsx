import "../styles/educacion.css";

function Educacion() {
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
