import { useState, useEffect } from "react";

const preguntasAtomos = [
  { pregunta: "¿Qué partícula tiene carga negativa en un átomo?", respuesta: "electrón" },
  { pregunta: "¿Cómo se llama la parte central del átomo?", respuesta: "núcleo" },
  { pregunta: "¿Qué se forma cuando dos o más átomos se unen?", respuesta: "molécula" }
];

const conceptos = [
  { concepto: "Electrón", definicion: "Partícula con carga negativa" },
  { concepto: "Protón", definicion: "Partícula con carga positiva" },
  { concepto: "Molécula", definicion: "Unión de dos o más átomos" },
  { concepto: "Neutrón", definicion: "Partícula sin carga" }
];

export default function useAtomos() {
  const [pregunta, setPregunta] = useState({});
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const [conceptosDesordenados, setConceptosDesordenados] = useState([]);

  useEffect(() => {
    generarPregunta();
    desordenarConceptos();
  }, []);

  function generarPregunta() {
    const p = preguntasAtomos[Math.floor(Math.random() * preguntasAtomos.length)];
    setPregunta(p);
    setRespuesta("");
    setFeedback("");
  }

  function verificar() {
    if (respuesta.trim().toLowerCase() === pregunta.respuesta.toLowerCase()) {
      setFeedback("✅ ¡Correcto!");
      setTimeout(() => {
        generarPregunta();
        setFeedback("");
      }, 1500);
    } else {
      setFeedback("❌ Incorrecto. Inténtalo de nuevo.");
    }
  }

  function desordenarConceptos() {
    const definiciones = conceptos.map(c => c.definicion).sort(() => Math.random() - 0.5);
    setConceptosDesordenados(definiciones);
  }

  function comprobarEmparejamiento(respuestasUsuario) {
    let correctas = 0;
    conceptos.forEach((item, i) => {
      if (respuestasUsuario[i] === item.definicion) correctas++;
    });
    return correctas;
  }

  return {
    pregunta, respuesta, setRespuesta, verificar, feedback,
    conceptos, conceptosDesordenados, desordenarConceptos, comprobarEmparejamiento
  };
}
