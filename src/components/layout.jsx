import Header from "./header";
import React, { useEffect } from "react";
import Preloader from "./Preloader"; // 👈 importa el Preloader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Layout = ({ children }) => {
  useEffect(() => {
    const outline = document.querySelector(".cursor-outline");

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      outline.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Preloader /> {/* 👈 aquí se muestra primero */}
      <Header />
      <main className="max-w-6xl mx-auto px-4 mt-24">
        {children}
      </main>

      {/* Círculo que sigue al cursor */}
      <div className="custom-cursor">
        <div className="cursor-outline" />
      </div>

     
    </>
  );
};

export default Layout;
