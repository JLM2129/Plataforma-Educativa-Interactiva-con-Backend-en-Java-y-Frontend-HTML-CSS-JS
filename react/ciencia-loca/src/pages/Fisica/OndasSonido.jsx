import React from "react";
import EjerciciosOndas from "../../components/EjerciciosOndas";
import JuegosOndas from "../../components/JuegosOndas";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";
export default function OndasSonido() {
  return (
    <section className="tema">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="titulo-seccion">
        <h2>🔊 Ondas y Sonido</h2>
        <p>
          Las ondas son perturbaciones que transportan energía. El sonido es una onda mecánica que se
          propaga a través de medios materiales.
        </p>
      </div>

      <div className="contenedor-contenido">
        
         <VideoExplicativo 
              url="https://www.youtube.com/embed/HfGxXf9D_c8"
              titulo="🎥 Videos Explicativos"
           />

        <EjerciciosOndas />

        <JuegosOndas />

        <PDFDescargable
        titulo="📚 PDFs Descargables"
          url="/pdfs/Ondas-sonido.pdf" 
           texto= "📄 Descargar guía en PDF" 
          />
         
      </div>
    </section>
  );
}

