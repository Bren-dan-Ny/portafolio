import "../styles/contacto.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contacto() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Contenedor – mini zoom general
      gsap.fromTo(
        ".contacto-container",
        {
          scale: 0.97,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contacto",
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        [".contacto-item", ".tecnologias", ".footer"],
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".contacto",
            start: "top 78%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="contacto" id="contact">
      <div className="contacto-container">
        <h2>¡Contáctame!</h2>

        <div className="box-item-contacto">
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
        </div>

        <div className="tecnologias">
          <h5>Este sitio está desarrollado con:</h5>
          <div className="tags">
            <span className="tag-contact html">HTML5</span>
            <span className="tag-contact css">CSS3</span>
            <span className="tag-contact react">React</span>
            <span className="tag-contact js">JavaScript</span>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer-location">
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
        <p className="footer-copy">© 2025 | Diseñado con por Lhuana</p>
      </footer>
    </section>
  );
}

export default Contacto;
