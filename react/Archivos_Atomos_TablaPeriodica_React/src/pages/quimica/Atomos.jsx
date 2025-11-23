import EjercicioAtomos from "../../componentes/EjercicioAtomos";
import JuegoAtomos from "../../componentes/JuegoAtomos";

export default function Atomos() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>⚛️ Átomos y Moléculas</h2>
        <p>Conoce la estructura básica de la materia y cómo se combinan los átomos.</p>
      </div>
      <div className="contenedor-contenido">
        <div className="bloque videos">
          <h3>🎥 Video: Átomos y Moléculas</h3>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/IbW7vhzG3O8"
              title="Átomos y moléculas"
              allowFullScreen
            ></iframe>
          </div>
          <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más videos
          </button>
        </div>
        <EjercicioAtomos />
        <JuegoAtomos />
        <div className="bloque pdfs">
          <h3>📚 PDF: Átomos y Moléculas</h3>
          <a href="pdfs/atomos-moleculas.pdf" className="recurso-btn" download>
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