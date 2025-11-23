import React from "react";
import VideoExplicativo from "../../components/VideoExplicativo";
import JuegoFigura from "../../components/JuegoFigura";
import EjercicioInteractivo from "../../components/EjercicioInteractivo";
import PDFDescargable from "../../components/PDFDescargable";


const Figuras = () => {
  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2 id="figuras">📐 Figuras Geométricas</h2>
        <p>
          Aprende sobre formas como el círculo, el triángulo, el cuadrado y otras figuras básicas de forma divertida.
        </p>
      </div>

      <div className="contenedor-contenido">

        <VideoExplicativo
          titulo="🎥 Videos Explicativos"
          url="https://www.youtube.com/embed/tu_video_id1"
        />

        <EjercicioInteractivo />

        <JuegoFigura />

        <PDFDescargable
          titulo="📚 PDFs Descargables"
          url="/pdfs/figuras-geometricas.pdf"
          texto="📄 Descargar guía en PDF"
        />

      </div>
    </section>
  );
};

export default Figuras;
