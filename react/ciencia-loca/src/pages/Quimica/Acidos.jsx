import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";
import EjercicioAcidos from "../../components/EjercicioAcidos";
import JuegoAcidos from "../../components/JuegoAcidos";

export default function Acidos() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>💧 Ácidos y Bases</h2>
        <p>Aprende qué los diferencia, cómo se identifican y sus usos cotidianos.</p>
      </div>
      <div className="contenedor-contenido">
        <VideoExplicativo
          titulo="🎥 Video: Ácidos y Bases"
          url="https://www.youtube.com/embed/IbW7vhzG3O8"
        />
        <EjercicioAcidos />
        <JuegoAcidos />
        <PDFDescargable
          titulo="📚 PDF: Ácidos y Bases"
          archivo="pdfs/acidos-bases.pdf"
           texto="📄 Descargar guía en PDF"
        />
      </div>
    </section>
  );
}
