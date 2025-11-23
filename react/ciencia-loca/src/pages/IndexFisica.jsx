import React from "react";
import "../pages/global.css"; 
import { Link } from "react-router-dom";

function IndexFisica() {
  return (
    <section className="fisica sin-scroll">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>

      <div className="titulo-seccion">
        <h2>⚡ Explora los temas de Física en Acción</h2>
        <p>
          Descubre el fascinante mundo de la física, desde el movimiento hasta
          el electromagnetismo.
        </p>
      </div>

      <div className="contenedor-contenido">
        <Link to="/fisica/magnitudes" className="bloque">
          <h2>📦 Magnitudes y Unidades</h2>
          <p>Aprende qué son las magnitudes físicas y cómo medimos el mundo.</p>
        </Link>

        <Link to="/fisica/movimiento" className="bloque">
          <h2>🏃‍♂️ Movimiento y Fuerzas</h2>
          <p>Explora el movimiento, la velocidad, aceleración y las leyes de Newton.</p>
        </Link>

        <Link to="/fisica/energia" className="bloque">
          <h2>🌡️ Energía y Trabajo</h2>
          <p>Descubre cómo se transforma la energía y cómo se calcula el trabajo.</p>
        </Link>

        <Link to="/fisica/onda" className="bloque">
          <h2>🔊 Ondas y Sonido</h2>
          <p>Aprende sobre el sonido, las vibraciones y el comportamiento de las ondas.</p>
        </Link>

        <Link to="/fisica/luz" className="bloque">
          <h2>💡 Luz y Óptica</h2>
          <p>Explora los fenómenos de la luz, reflexión, refracción y más.</p>
        </Link>

        <Link to="/fisica/electricidad" className="bloque">
          <h2>⚡ Electricidad y Magnetismo</h2>
          <p>Entiende cómo funciona la corriente, los circuitos y los imanes.</p>
        </Link>
      </div>

      {/* Figuras decorativas */}
      <div className="figura onda-senoidal flotante" style={{ left: "35%", animationDelay: "2s" }} />
      <div className="figura foton flotante" style={{ left: "35%", animationDelay: "3s" }} />
      <div className="figura onda-senoidal flotante" style={{ left: "55%", animationDelay: "3s" }} />
      <div className="figura foton flotante" style={{ left: "75%", animationDelay: "2s" }} />
      <div className="figura onda-senoidal flotante" style={{ left: "45%", animationDelay: "4s" }} />
      <div className="figura onda-senoidal flotante" style={{ left: "65%", animationDelay: "5s" }} />
    </section>
  );
}

export default IndexFisica;
