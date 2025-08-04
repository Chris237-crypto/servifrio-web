import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaSearch,
  FaThLarge,
  FaHourglassHalf,
} from "react-icons/fa";

import "../style/header.css";
import logo from "../images/logos/logo.png";



const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2; // 20%
      setIsSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="left">
          <span><FaPhoneAlt /> +593 098 863 0953</span>
          <span><FaMapMarkerAlt /> Valles - Quito</span>
          <span><FaHourglassHalf /> Lunes a Viernes : 7:00 AM - 18:00 PM</span>
        </div>
        <div className="right">
          <span><FaEnvelope /> servif@servifrio.com</span>

        </div>
      </div>

      {/* Main Header */}
      <div className={`main-header ${isSticky ? "sticky" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <button className="hamburger" onClick={() => setMenuAbierto(!menuAbierto)}>
          ☰
        </button>

        <nav className={`nav-menu ${menuAbierto ? "abierto" : ""}`}>
          <a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a>
          <a href="#about" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</a>
          <a href="#services" onClick={() => setMenuAbierto(false)}>Servicios</a>
          <a href="#contact" onClick={() => setMenuAbierto(false)}>Contacto</a>

          <a
            href="tel:0988630953"
            className="cta-button llamar-mobile"
            onClick={() => {
              if (typeof window !== "undefined" && window.gtag) {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-11117523946/tUx5CLDyx_8aEOrnn7Up'
                });
              }
              setMenuAbierto(false); // Cierra el menú después del clic
            }}
          >
            <FaPhoneAlt style={{ marginRight: "8px" }} />
            Llamar
          </a>
        </nav>

        <div className="actions">
          <a href="tel:0988630953" className="cta-button">
            <FaPhoneAlt style={{ marginRight: "8px" }} />
            Llamar
          </a>
        </div>

      </div>
    </>
  );
};

export default Header;
