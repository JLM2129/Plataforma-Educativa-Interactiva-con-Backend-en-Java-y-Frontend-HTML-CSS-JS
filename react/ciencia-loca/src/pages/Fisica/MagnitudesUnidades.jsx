import React from "react";
import JuegosMagnitudes from "../../components/JuegosMagnitudes";
import EjerciciosMagnitudes from "../../components/EjerciciosMagnitudes";

export default function MagnitudesUnidades() {
  return (
    <section className="tema">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="titulo-seccion">
        <h2>📦 Magnitudes y Unidades</h2>
        <p>
          Las magnitudes físicas son propiedades que pueden medirse, como la
          masa, la longitud o el tiempo. Las unidades son los patrones que
          usamos para expresar estas magnitudes.
        </p>
      </div>
      <div className="contenedor-contenido">
        <div className="bloque videos">
          <h3>🎥 Videos Explicativos</h3>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/HfGxXf9D_c8"
              title="Video explicativo"
              allowFullScreen
            ></iframe>
          </div>
          <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>Ver más videos</button>
        </div>

        {/* Secciones migradas correctamente */}
        <EjerciciosMagnitudes />
        <JuegosMagnitudes />

        <div className="bloque pdfs">
          <h3>📚 PDFs Descargables</h3>
          <a href="pdfs/numeros-operaciones.pdf" className="recurso-btn" download>
            📄 Descargar guía en PDF
          </a>
          <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>Ver más guías</button>
        </div>
      </div>
    </section>
  );
}
 