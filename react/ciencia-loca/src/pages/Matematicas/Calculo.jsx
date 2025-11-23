// src/componentes/calculo/Calculo.jsx
import CalculoEjercicios from "../../components/CalculoEjercicios";
import CalculoJuego from "../../components/CalculoJuego";

export default function Calculo() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>Cálculo Diferencial 🧮</h2>
        <p>Conceptos básicos de límites, derivadas y su aplicación.</p>
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
          <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más videos
          </button>
        </div>

        <CalculoEjercicios />
        <CalculoJuego />

        <div className="bloque pdfs">
          <h3>📚 PDFs Descargables</h3>
          <a href="pdfs/guia_calculo_diferencial.pdf" className="recurso-btn" download>
            📄 Descargar guía en PDF
          </a>
          <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más guías
          </button>
        </div>
      </div>
    </section>
  );
}
