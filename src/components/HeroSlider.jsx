import React, { useState, useEffect } from "react";
import "../style/HeroSlider.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


import slide1 from "../images/hero_shape_1.png";
import slide2 from "../images/hero_shape_2.png";
import slide3 from "../images/hero_shape_3.png";

const slides = [
    {
        id: 1,
        title: "REPARACIÓN DE REFRIGERADORAS",
        subtitle: "SERVICIO TÉCNICO ESPECIALIZADO",
        description:
            "Ofrecemos mantenimiento y reparación profesional de refrigeradoras de todas las marcas. Servicio rápido, garantizado y a domicilio.",
        image: slide1,
    },
    {
        id: 2,
        title: "REPARACIÓN DE LAVADORAS",
        subtitle: "EFICIENCIA Y CONFIANZA",
        description:
            "¿Tu lavadora no centrifuga, no enciende o hace ruidos extraños? Nuestro equipo de técnicos soluciona todo tipo de fallas con repuestos originales.",
        image: slide2,
    },
    {
        id: 3,
        title: "REPARACIÓN DE SECADORAS",
        subtitle: "CUIDAMOS TU ROPA Y TU HOGAR",
        description:
            "Reparamos secadoras que no calientan, no giran o presentan errores. Contamos con diagnóstico preciso y atención inmediata.",
        image: slide3,
    },
];


const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    const { title, subtitle, description, image } = slides[currentSlide];

    return (
        <section className="hero-slider" id="inicio">
            <img
                key={currentSlide}
                src={image}
                alt=""
                className="hero-bg-shape slide-in"
            />

            <div className="hero-overlay" />
            <div key={currentSlide} className="hero-content">
                <h5 className="fade-up delay-0">{subtitle}</h5>
                <h1 className="fade-up delay-1">{title}</h1>
                <p className="fade-up delay-2">{description}</p>
                <div className="buttons fade-up delay-3">
                    <a
                        href="https://wa.me/593988630953?text=Hola,%20estoy%20interesado%20en%20un%20servicio%20técnico%20para%20mi%20electrodoméstico.%20¿Me%20puede%20ayudar?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary fancy-hover"
                        onClick={() => {
                            if (typeof window !== "undefined" && window.gtag) {
                                window.gtag('event', 'conversion', {
                                    send_to: 'AW-11117523946/tUx5CLDyx_8aEOrnn7Up'
                                });
                            }
                        }}
                    >
                        <FaWhatsapp style={{ marginRight: "8px" }} />
                        CHAT WHATSAPP
                    </a>

                    <a
                        href="tel:0988630953"
                        className="btn-secondary fancy-hover"
                        onClick={() => {
                            if (typeof window !== "undefined" && window.gtag) {
                                window.gtag('event', 'conversion', {
                                    send_to: 'AW-11117523946/tUx5CLDyx_8aEOrnn7Up'
                                });
                            }
                        }}
                    >
                        <FaPhoneAlt style={{ marginRight: "8px" }} />
                        0988630953
                    </a>
                </div>


            </div>

        </section>
    );
};

export default HeroSlider;
