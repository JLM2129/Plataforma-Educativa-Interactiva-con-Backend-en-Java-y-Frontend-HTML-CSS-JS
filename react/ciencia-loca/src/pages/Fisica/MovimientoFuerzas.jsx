import EjerciciosMovimiento from "../../components/EjercicioMovimiento";
import JuegosMovimiento from "../../components/JuegoMovimiento";
import PDFDescargable from "../../components/PDFDescargable";
import VideoExplicativo from "../../components/VideoExplicativo";
export default function MovimientoFuerzas() {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>🏃‍♂️ Movimiento y Fuerzas</h2>
        <p>
          El movimiento describe cómo cambia la posición de un objeto con el
          tiempo. La fuerza es todo aquello capaz de cambiar el estado de
          movimiento de un cuerpo.
        </p>
      </div>

      <div className="contenedor-contenido">
        <VideoExplicativo 
                titulo="🎥 Videos Explicativos"
                url="https://www.youtube.com/embed/HfGxXf9D_c8" />

        <EjerciciosMovimiento />
        <JuegosMovimiento />
<PDFDescargable
        titulo="📚 PDFs Descargables"
          url="/pdfs/movimiento-fuerza.pdf"
           texto= "📄 Descargar guía en PDF" 
          />
          </div>
      
    </section>
  );
}
