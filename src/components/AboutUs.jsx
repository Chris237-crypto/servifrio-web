import React from "react";
import "../style/AboutUs.css";
import {
  FaCheckCircle,
  FaTools,
  FaWrench,
  FaCogs,
  FaArrowDown,
  FaUsers
} from "react-icons/fa";
import aboutImage from "../images/post-reparaciones.png";


const AboutUs = () => {

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = 1000;
    const duration = 2000;
    const increment = end / (duration / 20);

    const startCounting = () => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);

          // Esperar 1 segundo y reiniciar
          setTimeout(() => {
            setCount(0);
            start = 0;
            startCounting();
          }, 3000);
        } else {
          setCount(Math.floor(start));
        }
      }, 20);
    };

    startCounting();

    return () => {
      // Cleanup en desmontaje
      setCount(0);
    };
  }, []);


  return (
    <>
      {/* SECCIÓN DE TARJETAS DE SERVICIO */}
      <section className="service-cards">
        <div className="about-cards">
          <div className="about-card">
            <div className="icon-circle">
              <FaTools />
            </div>
            <h3>Instalaciones</h3>
            <p>
              Servicio técnico profesional para instalar lavadoras, cocinas, secadoras y más. Garantía incluida.
            </p>
            <div className="arrow-icon"><FaArrowDown /></div>
          </div>

          <div className="about-card">
            <div className="icon-circle">
              <FaWrench />
            </div>
            <h3>Reparaciones</h3>
            <p>
              Reparamos electrodomésticos con partes originales y técnicos certificados. Atención inmediata.
            </p>
            <div className="arrow-icon"><FaArrowDown /></div>
          </div>

          <div className="about-card">
            <div className="icon-circle">
              <FaCogs />
            </div>
            <h3>Mantenimientos</h3>
            <p>
              Mantenimientos preventivos para evitar fallas y prolongar la vida útil de sus equipos.
            </p>
            <div className="arrow-icon"><FaArrowDown /></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE INFORMACIÓN "DON REPARADOR" */}
      <section className="about-us" id="about">
        <div className="about-images">
          <img src={aboutImage} alt="Técnico reparando electrodoméstico" className="about-main-image" />
          <div className="circle-counter">
            <FaUsers className="clients-icon" />
            <span className="count">{count.toLocaleString()}+</span>
            <p>
              Clientes<br />
              Satisfechos
            </p>
          </div>

        </div>


        <div className="about-content">
          <h5>DON REPARADOR</h5>
          <h2>
            Expertos en Reparación
            <br />
            de Electrodomésticos
          </h2>
          <p>
            Brindamos atención especializada en electrodomésticos de línea blanca. Tenemos una amplia trayectoria trabajando con todas las marcas y modelos del mercado. Ofrecemos garantía, repuestos originales y atención inmediata las 24 horas del día.
          </p>

          <ul className="features-list">
            <li><FaCheckCircle className="check-icon" /> Reparación de lavadoras</li>
            <li><FaCheckCircle className="check-icon" /> Reparación de secadoras</li>
            <li><FaCheckCircle className="check-icon" /> Reparación de cocinas</li>
            <li><FaCheckCircle className="check-icon" /> Reparación de calefones</li>
            <li><FaCheckCircle className="check-icon" /> Reparación de refrigeradoras</li>
            <li><FaCheckCircle className="check-icon" /> Reparación de lavavajillas</li>
          </ul>

          <div className="about-bottom">
            <a
              href="https://wa.me/593988630953?text=Hola,%20quisiera%20solicitar%20una%20visita%20técnica%20para%20revisar%20mi%20electrodoméstico.%20¿Podrían%20ayudarme?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              SOLICITAR VISITA TÉCNICA
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
