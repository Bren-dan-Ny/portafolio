import "../styles/contacto.css";

function Contacto() {
  return (
    <section className="contacto" id="contact">
      <div className="contacto-container">
        <h2>¡Contáctame!</h2>

        <div className="contacto-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM4 8l8 5 8-5v10H4V8Zm8 3L4 6h16l-8 5Z" />
          </svg>
          <a href="mailto:lhuanaclopez14@gmail.com">
            <span className="text">Email</span>lhuanaclopez14@gmail.com
          </a>
        </div>

        <div className="contacto-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0a11.82 11.82 0 0 0-10.4 17.68L0 24l6.5-1.68A11.8 11.8 0 0 0 12 24a11.77 11.77 0 0 0 8.48-3.52A11.77 11.77 0 0 0 24 12a11.77 11.77 0 0 0-3.48-8.52ZM12 22a9.86 9.86 0 0 1-5-1.36l-.36-.2-3.86 1L4 17.72l-.24-.4A9.85 9.85 0 0 1 2 12 10 10 0 1 1 12 22Zm5.46-7.36c-.3-.15-1.76-.87-2-1-.27-.1-.46-.15-.65.15s-.75 1-.92 1.24-.34.2-.63.05a8.2 8.2 0 0 1-2.4-1.48 9.12 9.12 0 0 1-1.67-2 2 2 0 0 1-.43-1c0-.1.1-.2.15-.3s.2-.25.3-.4a1 1 0 0 0 .15-.3.32.32 0 0 0 0-.3c0-.15-.65-1.57-.9-2.15s-.5-.5-.65-.5h-.55a1.06 1.06 0 0 0-.8.35 3.29 3.29 0 0 0-1 2.44 5.68 5.68 0 0 0 1.2 3.07 12.92 12.92 0 0 0 5.09 4.39 17.4 17.4 0 0 0 1.74.64 4.2 4.2 0 0 0 1.9.12 3.09 3.09 0 0 0 2-1.44 2.57 2.57 0 0 0 .18-1.44c-.06-.12-.24-.18-.54-.33Z" />
          </svg>
          <a
            href="https://wa.me/51901715166"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text">Whatsapp</span>
            +51 901 715 166
          </a>
        </div>
        <div className="tecnologias">
          <h5>Este sitio está desarrollado con:</h5>
          <div className="tags">
            <span className="tag html">HTML5</span>
            <span className="tag css">CSS3</span>
            <span className="tag react">React</span>
          </div>
        </div>
      </div>
      <footer class="footer">
        <p class="footer-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          Lima - Perú
        </p>
        <p class="footer-copy">© 2025 | Diseñado con por Lhuana</p>
      </footer>
    </section>
  );
}

export default Contacto;
