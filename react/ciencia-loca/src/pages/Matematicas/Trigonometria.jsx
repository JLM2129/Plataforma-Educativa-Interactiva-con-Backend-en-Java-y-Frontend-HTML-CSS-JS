import React from "react";
import VideoExplicativo from "../../components/VideoExplicativo";

import PDFDescargable from "../../components/PDFDescargable";
import { useTrigonometria } from "../../data/useTrigonometria";
import TrigonometriaInteractivo from "../../components/TrigonometriaInteractivo";
import JuegoTrigonometria from "../../components/JuegoTrigonometria";

export default function Trigonometria() {
  const {
    preguntaTrig,
    respuestaTrig,
    setRespuestaTrig,
    feedbackTrig,
    verificarRespuestaTrig,
    preguntaJuegoTrig,
    opcionesJuegoTrig,
    resultadoJuegoTrig,
    seleccionarOpcionTrig,
  } = useTrigonometria();

  return (
    <section className="tema">
      <div className="titulo-seccion">
        <h2>📏 Trigonometría</h2>
        <p>Aprende sobre ángulos, triángulos y funciones trigonométricas</p>
      </div>
      <div className="contenedor-contenido">
        <VideoExplicativo url="https://www.youtube.com/embed/tu_video_id1" />
        <TrigonometriaInteractivo
          titulo="✍️ Ejercicios Interactivos"
          pregunta={`¿Cuál es el valor de ${preguntaTrig}?`}
          tipo="text"
          valor={respuestaTrig}
          onChange={(e) => setRespuestaTrig(e.target.value)}
          onVerificar={verificarRespuestaTrig}
          feedback={feedbackTrig}
        />
        <JuegoTrigonometria
          titulo="🎮 Juego: ¿Cuál es el valor correcto?"
          pregunta={`Selecciona el valor correcto para: ${preguntaJuegoTrig}`}
          opciones={opcionesJuegoTrig}
          onSelect={seleccionarOpcionTrig}
          resultado={resultadoJuegoTrig}
        />
        <PDFDescargable 
        titulo="📚 PDFs Descargables"
        url="/pdfs/numeros-operaciones.pdf"
        texto="📄 Descargar guía en PDF"  />
        
      </div>
    </section>
  );
}
