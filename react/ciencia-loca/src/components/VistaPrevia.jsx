import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "./VistaPrevia.css";
import { Link } from 'react-router-dom';
function VistaPrevia() {
  const hoverSoundRef = useRef(null);
  const [sonidoHabilitado, setSonidoHabilitado] = useState(false);

  useEffect(() => {
    const enableSound = () => {
      if (!sonidoHabilitado) {
        hoverSoundRef.current.play().then(() => {
          hoverSoundRef.current.pause();
          hoverSoundRef.current.currentTime = 0;
          setSonidoHabilitado(true);
        }).catch(() => {});
      }
    };

    document.body.addEventListener("click", enableSound);

    return () => {
      document.body.removeEventListener("click", enableSound);
    };
  }, [sonidoHabilitado]);

  const reproducirSonido = () => {
    if (sonidoHabilitado && hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="vista-previa">
      <h2 data-aos="fade-up">Explora Ciencia Loca</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Una experiencia didáctica que te sorprenderá.
      </p>

      <div className="cards">
        <Card
          icono="📐"
          titulo="Matemáticas Locas"
          descripcion="Juegos, retos y trucos para dominar los números."
          link="/matematicas"
          delay={200}
          onHover={reproducirSonido}
        />
        <Card
          icono="⚡"
          titulo="Física en Acción"
          descripcion="Aprende cómo funciona el mundo con experimentos reales."
          link="/fisica"
          delay={400}
          onHover={reproducirSonido}
        />
        <Card
           icono="🧪"
           titulo="Química Divertida"
           descripcion="Desde mezclas simples hasta los misterios del átomo."
           link="/quimica"
           delay={600}
           onHover={reproducirSonido}
         />

      </div>

      <audio ref={hoverSoundRef} src="/sonido/Exclamation.wav" preload="auto" />
    </section>
  );
}

export default VistaPrevia;
