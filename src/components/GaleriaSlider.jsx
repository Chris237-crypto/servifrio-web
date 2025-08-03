import React, { useState } from "react";
import Slider from "react-slick";
import "../style/GaleriaSlider.css";

import trabajo1 from "../images/servicios/lavadora1.jpg";
import trabajo2 from "../images/servicios/microondas1.png";
import trabajo3 from "../images/servicios/cocinainduccion1.png";
import trabajo4 from "../images/servicios/secadora-lavadora.jpg";
import trabajo5 from "../images/servicios/frigorifico1.jpg";
import trabajo6 from "../images/servicios/refrigueradora1.jpg";
import { FaWhatsapp } from "react-icons/fa";

const imagenes = [
  {
    titulo: "Lavadoras",
    categoria: "Pregunta por",
    imagen: trabajo1,
  },
  {
    titulo: "Microondas",
    categoria: "Pregunta por",
    imagen: trabajo2,
  },
  {
    titulo: "Cocina de Inducción",
    categoria: "Pregunta por",
    imagen: trabajo3,
  },
  {
    titulo: "Secadora de Ropa",
    categoria: "Pregunta por",
    imagen: trabajo4,
  },
  {
    titulo: "Cámara Frigoríficos",
    categoria: "Pregunta por",
    imagen: trabajo5,
  },
  {
    titulo: "Refrigeradora",
    categoria: "Pregunta por",
    imagen: trabajo6,
  },
];

const GaleriaSlider = () => {
  const [imagenAbierta, setImagenAbierta] = useState(null);

  const abrirImagen = (imagen) => setImagenAbierta(imagen);
  const cerrarImagen = () => setImagenAbierta(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="galeria-slider">
      <div className="snowflakes" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="snowflake">❄</div>
        ))}
      </div>

      <h5 className="galeria-subtitle">A precios de locura</h5>
      <h2 className="galeria-title">
        Pregunta por uno y un <br /> técnico en línea te contactará
      </h2>

      <Slider {...settings}>
        {imagenes.map((img, index) => (
          <div key={index} className="galeria-wrapper">
            <div className="galeria-item">
              <img
                src={img.imagen}
                alt={img.titulo}
                onClick={() => abrirImagen(img.imagen)}
                className="clickable-image"
              />
              <div className="galeria-info">
                <span>{img.categoria}</span>
                <h3>{img.titulo}</h3>
                <a
                  href={`https://wa.me/593988630953?text=${encodeURIComponent(
                    `Hola, ¿tiene disponible el artículo ${img.titulo} para la venta?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <FaWhatsapp style={{ marginRight: "8px" }} />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal de imagen */}
      {imagenAbierta && (
        <div className="modal-overlay" onClick={cerrarImagen}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={cerrarImagen}>✕</button>
            <img src={imagenAbierta} alt="Vista ampliada" />
          </div>
        </div>
      )}
    </section>
  );
};

export default GaleriaSlider;
