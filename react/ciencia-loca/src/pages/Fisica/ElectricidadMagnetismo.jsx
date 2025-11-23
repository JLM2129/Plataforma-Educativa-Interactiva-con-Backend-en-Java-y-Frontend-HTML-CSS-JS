// src/pages/ElectricidadMagnetismo.jsx
import JuegoClasificacion from "../../components/JuegoClasificacion";
import JuegoDragDrop from "../../components/JuegoDragDrop";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";
export default function ElectricidadMagnetismo() {
  return (
    <section className="tema">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="titulo-seccion">
        <h2>⚡ Electricidad y Magnetismo</h2>
        <p>
          La electricidad es el movimiento de electrones, y el magnetismo está relacionado con las fuerzas que ejercen los imanes y campos magnéticos.
        </p>
      </div>
      <div className="contenedor-contenido">
       <VideoExplicativo 
                     url="https://www.youtube.com/embed/HfGxXf9D_c8"
                     titulo="🎥 Videos Explicativos"
                  />

        
          <JuegoClasificacion />
      

       
          <JuegoDragDrop />
         

        <PDFDescargable
                titulo="📚 PDFs Descargables"
                  url="/pdfs/energia-magnetismo.pdf"
                   texto= "📄 Descargar guía en PDF" 
                  />
      </div>
    </section>
  );
}
