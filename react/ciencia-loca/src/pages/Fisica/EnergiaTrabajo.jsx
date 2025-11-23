import React from "react";
import EjerciciosEnergia from "../../components/EjerciciosEnergia";
import JuegosEnergia from "../../components/JuegosEnergia";
import VideoExplicativo from "../../components/VideoExplicativo";
import PDFDescargable from "../../components/PDFDescargable";
export default function EnergiaTrabajo() {
  return (
    <section className="tema">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="titulo-seccion">
        <h2>⚡ Energía y Trabajo</h2>
        <p>
          La energía es la capacidad para realizar trabajo. El trabajo es la transferencia de energía
          cuando una fuerza mueve un objeto.
        </p>
      </div>

      <div className="contenedor-contenido">
        
<VideoExplicativo 
              url="https://www.youtube.com/embed/HfGxXf9D_c8"
              titulo="🎥 Videos Explicativos"
           />
        <EjerciciosEnergia />

        <JuegosEnergia />

        <PDFDescargable
                titulo="📚 PDFs Descargables"
                  url="/pdfs/Energia-trabajo.pdf" 
                   texto= "📄 Descargar guía en PDF" 
                  />
      </div>
    </section>
  );
}
