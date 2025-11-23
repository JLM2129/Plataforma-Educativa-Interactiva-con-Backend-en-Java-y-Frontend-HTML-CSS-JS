import EjercicioTabla from "../../components/EjercicioTabla";
import JuegoTabla from "../../components/JuegoTabla";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";
export default function TablaPeriodica() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>🧪 Tabla Periódica</h2>
        <p>Descubre cómo se organizan los elementos químicos y sus propiedades.</p>
      </div>
      <div className="contenedor-contenido">
        <VideoExplicativo url="https://www.youtube.com/embed/HfGxXf9D_c8" titulo="🎥 Videos Explicativos"/>
        <EjercicioTabla />
        <JuegoTabla />
        <PDFDescargable titulo="📚 PDFs Descargables"
                url="/pdfs/tabla-periodica.pdf"
                texto="📄 Descargar guía en PDF"/>
      </div>
    </section>
  );
}