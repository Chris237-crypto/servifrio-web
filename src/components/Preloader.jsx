// src/components/Preloader.jsx
import React, { useEffect, useState } from "react";
import "../style/Preloader.css";

const Preloader = () => {
  const [startSplit, setStartSplit] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const splitTimer = setTimeout(() => setStartSplit(true), 2500);
    const hideTimer = setTimeout(() => setHide(true), 4000);

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const letters = "SERVIFRIO".split("");

  return (
    <div
      className={`preloader 
        ${startSplit ? "preloader--split" : ""} 
        ${hide ? "preloader--hide" : ""}`}
    >
      <div className="preloader-text">
        {letters.map((char, i) => (
          <span
            key={i}
            className="text-letter"
            data-char={char}
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="curtain curtain-top" />
      <div className="curtain curtain-bottom" />
    </div>
  );
};

export default Preloader;
