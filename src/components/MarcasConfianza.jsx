import React, { useState, useRef, useEffect } from "react";
import "../style/MarcasConfianza.css";
import indurama from "../images/logos/Indurama.webp";
import whirlpool from "../images/logos/whirlpool.webp";
import lg from "../images/logos/lg.webp";
import samsung from "../images/logos/samsung.webp";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from "framer-motion";

// Logos base
const baseLogos = [indurama, whirlpool, lg, samsung];
// Duplicamos los primeros 3 para permitir loop sin espacios vacíos
const logos = [...baseLogos, ...baseLogos.slice(0, 3)];

const MarcasConfianza = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const nextSlide = () => {
        setIndex((prev) => {
            if (prev + 1 >= baseLogos.length) return 0; // reinicio suave
            return prev + 1;
        });
    };

    const prevSlide = () => {
        setIndex((prev) => {
            if (prev - 1 < 0) return baseLogos.length - 1;
            return prev - 1;
        });
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <section className="marcas-section">
            <div className="texto-marcas">
                <h2 className="h2-proveedores">Nuestros proveedores de confianza</h2>
                <p>
                    Contar con proveedores de confianza es clave para garantizar la calidad y cumplimiento en cada proyecto. Nos apoyamos en alianzas sólidas que comparten nuestros estándares de responsabilidad, puntualidad y compromiso, asegurando que cada suministro o servicio contribuya al éxito del trabajo final.
                </p>
                <div className="navegacion-marcas">
                    <button onClick={prevSlide}><FiChevronLeft size={20} /></button>
                    <button onClick={nextSlide}><FiChevronRight size={20} /></button>
                </div>
            </div>

            <div className="slider-marcas" ref={containerRef}>
                <motion.div
                    className="carousel-track"
                    animate={{ x: `-${index * (100 / 3)}%` }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: "flex",
                        width: `${(logos.length / 3) * 100}%`
                    }}
                >
                    {logos.map((logo, i) => (
                        <div
                            className="logo-item"
                            key={i}
                            style={{
                                flex: "0 0 calc(100% / 3)",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <img src={logo} alt={`Logo ${i}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MarcasConfianza;
