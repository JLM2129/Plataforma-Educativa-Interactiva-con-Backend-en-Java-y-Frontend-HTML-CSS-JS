import EjercicioTabla from "../../componentes/EjercicioTabla";
import JuegoTabla from "../../componentes/JuegoTabla";

export default function TablaPeriodica() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>🧪 Tabla Periódica</h2>
        <p>Descubre cómo se organizan los elementos químicos y sus propiedades.</p>
      </div>
      <div className="contenedor-contenido">
        <div className="bloque videos">
          <h3>🎥 Video: Tabla Periódica</h3>
          <div className="video-responsive">
            <iframe
              src="https://www.youtube.com/embed/O3ZV9vBqkQQ"
              title="Tabla periódica"
              allowFullScreen
            ></iframe>
          </div>
          <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más videos
          </button>
        </div>
        <EjercicioTabla />
        <JuegoTabla />
        <div className="bloque pdfs">
          <h3>📚 PDF: Tabla Periódica</h3>
          <a href="pdfs/tabla-periodica.pdf" className="recurso-btn" download>
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