import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";
import EjercicioReacciones from "../../components/EjercicioReacciones";
import JuegoReacciones from "../../components/JuegoReacciones";

export default function Reacciones() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>🧫 Reacciones Químicas</h2>
        <p>Observa cómo ocurren las reacciones, los productos y los tipos más comunes.</p>
      </div>
      <div className="contenedor-contenido">
        <VideoExplicativo
          titulo="🎥 Video: Reacciones Químicas"
          url="https://www.youtube.com/embed/IbW7vhzG3O8"
        />
        <EjercicioReacciones />
        <JuegoReacciones />
        <PDFDescargable
          titulo="📚 PDF: Reacciones Químicas"
          archivo="pdfs/reacciones-quimicas.pdf"
           texto="📄 Descargar guía en PDF"  
        />
      </div>
    </section>
  );
}
