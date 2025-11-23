import React from "react";
import VideoExplicativo from "../../components/VideoExplicativo";

import PDFDescargable from "../../components/PDFDescargable";
import  {useAlgebra}  from "../../data/useAlgebra";
import AlgebraInteractivo from "../../components/AlgebraInteractivo";
import JuegoAlgebra from "../../components/JuegoAlgebra";

export default function Algebra() {
  const {
    expresion,
    respuestaAlgebra,
    setRespuestaAlgebra,
    feedbackAlgebra,
    verificarRespuestaAlgebra,
    opcionesJuegoAlgebra,
    resultadoJuegoAlgebra,
    seleccionarOpcionAlgebra,
  } = useAlgebra();

  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>📊 Álgebra</h2>
        <p>Explora el mundo del álgebra con ejercicios y juegos interactivos</p>
      </div>
      <div className="contenedor-contenido">
        <VideoExplicativo 
        titulo="🎥 Videos Explicativos"
        url="https://www.youtube.com/embed/HfGxXf9D_c8" />
        <AlgebraInteractivo
          titulo="✍️ Ejercicios Interactivos"
          pregunta={`Resuelve: ${expresion} = ?`}
          tipo="number"
          valor={respuestaAlgebra}
          onChange={(e) => setRespuestaAlgebra(e.target.value)}
          onVerificar={verificarRespuestaAlgebra}
          feedback={feedbackAlgebra}
        />
        <JuegoAlgebra
          titulo="🎮 Juegos de Álgebra"
          pregunta={`Selecciona la expresión equivalente a: ${expresion}`}
          opciones={opcionesJuegoAlgebra}
          onSelect={seleccionarOpcionAlgebra}
          resultado={resultadoJuegoAlgebra}
        />
        <PDFDescargable 
        titulo="📚 PDFs Descargables"
        url="/pdfs/numeros-operaciones.pdf"
        texto="📄 Descargar guía en PDF" />
      </div>
    </section>
  );
}
