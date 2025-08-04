import React, { useState } from "react";
import "../style/Services.css";
import {
  FaIndustry,
  FaHome,
  FaCogs,
  FaSnowflake,
  FaTshirt,
  FaWarehouse,
  FaTools,
  FaWhatsapp,
} from "react-icons/fa";
import {
  GiMicrowaveOven,
  GiGasStove,
  GiKnifeFork,
  GiColdHeart,
} from "react-icons/gi";
import { MdKitchen, MdOutlineMicrowave } from "react-icons/md";
import imgLavadora from "../images/servicios/lavadora.png";
import imgRefrigeracion from "../images/servicios/refrigeracion.png";
import imgCocina from "../images/servicios/cocina.png";
import imgNevera from "../images/servicios/nevera.png";
import imgMicroondas from "../images/servicios/microondas.png";
import imgEstufa from "../images/servicios/estufa.png";
import imgSecadora from "../images/servicios/secadora.png";
import imgCamara from "../images/servicios/camara.png";
import imgCocinaIndustrial from "../images/servicios/cocina-industrial.png";


const categorias = ["Comercial", "Residencial", "Industrial"];

const servicios = {
  Comercial: [
    {
      id: 1,
      titulo: "Reparación de Lavadoras",
      descripcion:
        "Soluciones profesionales para lavadoras industriales y semi-industriales en negocios o lavanderías.",
      icono: <FaTools />,
      numero: "01",
      imagen: imgLavadora,

    },
    {
      id: 2,
      titulo: "Servicio de Refrigeración",
      descripcion:
        "Mantenimiento y arreglo de refrigeradoras y congeladores en locales comerciales.",
      icono: <FaSnowflake />,
      numero: "02",
      imagen: imgRefrigeracion,
    },
    {
      id: 3,
      titulo: "Equipos de Cocina",
      descripcion:
        "Reparación de cocinas industriales, hornos y microondas de alto rendimiento.",
      icono: <GiKnifeFork />,
      numero: "03",
      imagen: imgCocina,
    },
  ],
  Residencial: [
    {
      id: 4,
      titulo: "Reparación de Neveras",
      descripcion:
        "Diagnóstico y solución a fallas comunes en neveras domésticas de cualquier marca.",
      icono: <GiColdHeart />,
      numero: "04",
      imagen: imgNevera,
    },
    {
      id: 5,
      titulo: "Microondas y Hornos",
      descripcion:
        "Atención a fallos en encendido, platos giratorios o calentamiento irregular.",
      icono: <MdOutlineMicrowave />,
      numero: "05",
      imagen: imgMicroondas,
    },
    {
      id: 6,
      titulo: "Cocinas y Estufas",
      descripcion:
        "Revisión de quemadores, fugas de gas o encendedores en cocinas residenciales.",
      icono: <GiGasStove />,
      numero: "06",
      imagen: imgEstufa,
    },
  ],
  Industrial: [
    {
      id: 7,
      titulo: "Secadoras de Ropa",
      descripcion:
        "Servicio técnico para secadoras industriales con ciclos defectuosos o sin calor.",
      icono: <FaTshirt />,
      numero: "07",
      imagen: imgSecadora,
    },
    {
      id: 8,
      titulo: "Cámaras Frigoríficas",
      descripcion:
        "Instalación, mantenimiento y control de temperatura en cámaras de conservación.",
      icono: <FaWarehouse />,
      numero: "08",
      imagen: imgCamara,
    },
    {
      id: 9,
      titulo: "Equipos de Cocina Industrial",
      descripcion:
        "Reparación de planchas, hornos y extractores en cocinas técnicas o restaurantes.",
      icono: <MdKitchen />,
      numero: "09",
      imagen: imgCocinaIndustrial,
    },
  ],
};

const Services = () => {
  const [categoriaActiva, setCategoriaActiva] = useState("Comercial");
  const titulosCategoria = {
    Comercial: "Servicios para Negocios",
    Residencial: "Reparaciones del Hogar",
    Industrial: "Equipos Industriales",
  };

  return (
    <section className="servicios-container" id="services">
      <h5 className="servicios-subtitle">NUESTROS SERVICIOS</h5>
      <h2>{titulosCategoria[categoriaActiva]}</h2>

      <div className="servicios-filtros">
        {categorias.map((cat) => (
          <button
            type="button"
            key={cat}
            className={`filtro-btn ${categoriaActiva === cat ? "active" : ""}`}
            onClick={() => setCategoriaActiva(cat)}
          >
            {cat === "Comercial" && <FaCogs />}
            {cat === "Residencial" && <FaHome />}
            {cat === "Industrial" && <FaIndustry />}
            {cat}
          </button>
        ))}
      </div>

      <div className="servicios-grid">
        {servicios[categoriaActiva].map(
          ({ id, titulo, descripcion, icono, numero, imagen }) => (
            <div className="servicio-card" key={id}>
              <span className="numero">{numero}</span>
              <hr />
              <h3 className="servicio-titulo">
                <span className="servicio-icon-inline">{icono}</span>
                {titulo}
              </h3>
              <img src={imagen} alt={titulo} className="servicio-img" />

              <p className="servicio-desc">{descripcion}</p>
              <a
                href={`https://wa.me/593988630953?text=Hola,%20quisiera%20solicitar%20una%20visita%20técnica%20para%20el%20servicio%20de%20${encodeURIComponent(titulo)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="servicio-whatsapp-btn"
                onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag('event', 'conversion', {
                    send_to: 'AW-11117523946/tUx5CLDyx_8aEOrnn7Up'
                  });
                }
              }}
              >
                <FaWhatsapp className="icono-wsp" />
                Solicitar Visita
              </a>


            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
