import React from "react";
import "../pages/global.css"; 
import { Link } from "react-router-dom";

function IndexQuimica() {
  return (
    <section className="quimica sin-scroll">
      <div className="logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>

      <div className="titulo-seccion">
        <h2>🧪 Explora los temas de Química Divertida</h2>
        <p>Desde mezclas simples hasta los misterios de los átomos y reacciones químicas.</p>
      </div>

      <div className="contenedor-contenido">
        <Link to="/quimica/materia" className="bloque">
          <h3>🔬 Materia y sus Propiedades</h3>
          <p>Aprende sobre los estados de la materia, cambios físicos y químicos.</p>
        </Link>

        <Link to="/quimica/mezclas" className="bloque">
          <h3>🥛 Mezclas y Soluciones</h3>
          <p>Descubre cómo se combinan las sustancias y cómo se pueden separar.</p>
        </Link>

        <Link to="/quimica/atomo" className="bloque">
          <h3>⚛️ Átomos y Moléculas</h3>
          <p>Conoce las partes del átomo, los elementos y cómo se forman compuestos.</p>
        </Link>

        <Link to="/quimica/tabla" className="bloque">
          <h3>🧪 Tabla Periódica</h3>
          <p>Explora los elementos químicos y su organización en la tabla periódica.</p>
        </Link>

        <Link to="/quimica/reacciones" className="bloque">
          <h3>🧫 Reacciones Químicas</h3>
          <p>Observa cómo ocurren las reacciones, los productos y los tipos más comunes.</p>
        </Link>

        <Link to="/quimica/acidos" className="bloque">
          <h3>💧 Ácidos y Bases</h3>
          <p>Aprende qué los diferencia, cómo se identifican y sus usos cotidianos.</p>
        </Link>
      </div>

      {/* Figuras decorativas */}
      <div className="figura tubo-ensayo flotante" style={{ left: "25%", animationDelay: "2s" }} />
      <div className="figura molecula flotante" style={{ left: "45%", animationDelay: "4s" }} />
      <div className="figura atomo flotante" style={{ left: "65%", animationDelay: "3s" }} />
      <div className="figura tubo-ensayo flotante" style={{ left: "75%", animationDelay: "5s" }} />
    </section>
  );
}

export default IndexQuimica;
