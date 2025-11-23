import EjercicioAtomos from "../../components/EjercicioAtomos";
import JuegoAtomos from "../../components/JuegoAtomos";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";

export default function Atomos() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>⚛️ Átomos y Moléculas</h2>
        <p>Conoce la estructura básica de la materia y cómo se combinan los átomos.</p>
      </div>
      <div className="contenedor-contenido">
       <VideoExplicativo url="https://www.youtube.com/embed/HfGxXf9D_c8" titulo="🎥 Videos Explicativos" />
        <EjercicioAtomos />
        <JuegoAtomos />
        <PDFDescargable titulo="📚 PDFs Descargables"
                url="/pdfs/atomos-y-moleculas.pdf"
                texto="📄 Descargar guía en PDF"  /> 
      </div>
    </section>
  );
}