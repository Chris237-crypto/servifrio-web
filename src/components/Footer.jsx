import React from "react";
import "../style/Footer.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Columna 1: Logo y nombre */}
        <div className="footer-brand">
          <h3>Servifrio</h3>
          <p>Brindamos atención especializada en electrodomésticos de línea blanca. <br /> Tenemos una amplia trayectoria trabajando con todas las marcas y modelos del mercado.<br />  Ofrecemos garantía, repuestos originales y atención inmediata las 24 horas del día.</p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p><FaWhatsapp /> 0988 630 953</p>
          <p><FaEnvelope /> servifrio@gmail.com</p>
          <p><FaMapMarkerAlt /> Quito, Ecuador</p>
        </div>

        {/* Columna 3: Enlaces rápidos */}
        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Servifrio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
