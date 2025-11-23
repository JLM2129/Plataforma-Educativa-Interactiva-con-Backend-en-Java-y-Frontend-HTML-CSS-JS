import MateriaEjercicio from "../../components/MateriaEjercicio";
import MateriaJuego from "../../components/MateriaJuego";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";

export default function Materia() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>🔬 Materia y sus propiedades</h2>
        <p>Explora los fundamentos de la química de forma divertida y educativa.</p>
      </div>

      <div className="contenedor-contenido">
        <VideoExplicativo url="https://www.youtube.com/embed/HfGxXf9D_c8" titulo="🎥 Videos Explicativos" />
        <MateriaEjercicio />
        <MateriaJuego />
        <PDFDescargable url="/pdfs/materia-propiedades.pdf" titulo="📚 PDFs Descargables" texto= "📄 Descargar guía en PDF" />
      </div>
    </section>
  );
}
 
                  
                    