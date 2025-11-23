// src/pages/LuzOptica.jsx
import JuegoAdivinaLuz from "../../components/JuegoAdivinaLuz";
import EjercicioVerdaderoFalsoLuz from "../../components/EjercicioVerdaderoFalsoLuz";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";

export default function LuzOptica() {
  return (
    <section className="tema">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="titulo-seccion">
        <h2>💡 Luz y Óptica</h2>
        <p>
          La luz es una forma de energía que se propaga en línea recta. La óptica estudia cómo se comporta y se manipula la luz.
        </p>
      </div>
      <div className="contenedor-contenido">
        <VideoExplicativo 
                      url="https://www.youtube.com/embed/HfGxXf9D_c8"
                      titulo="🎥 Videos Explicativos"
                   />

        
          <EjercicioVerdaderoFalsoLuz />
       
        
          <JuegoAdivinaLuz />
          

        <PDFDescargable
                titulo="📚 PDFs Descargables"
                  url="/pdfs/luz-optica.pdf"
                   texto= "📄 Descargar guía en PDF" 
                  />
      </div>
    </section>
  );
}
