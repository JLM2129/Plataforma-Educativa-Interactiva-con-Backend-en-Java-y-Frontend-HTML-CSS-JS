import MezclasEjercicio from "../../components/MezclasEjercicio";
import MezclasJuego from "../../components/MezclasJuego";

import PDFDescargable from "../../components/PDFDescargable";
import VideoExplicativo from "../../components/VideoExplicativo";

export default function Mezclas() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>🥛 Mezclas y Soluciones</h2>
        <p>Descubre cómo se combinan las sustancias y cómo se pueden separar.</p>
      </div>

      <div className="contenedor-contenido">
        <VideoExplicativo url="https://www.youtube.com/embed/HfGxXf9D_c8" titulo="🎥 Videos Explicativos" />
        <MezclasEjercicio />
        <MezclasJuego />
        <PDFDescargable titulo="📚 PDFs Descargables"
        url="/pdfs/mezclas-y-soluciones.pdf"
        texto="📄 Descargar guía en PDF"  /> 
      </div>
    </section>
  );
}
