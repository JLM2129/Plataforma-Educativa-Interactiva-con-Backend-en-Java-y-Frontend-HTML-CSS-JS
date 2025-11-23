import { useState, useEffect } from "react";

const preguntasAtomos = [
  { pregunta: "¿Qué partícula tiene carga negativa en un átomo?", respuesta: "electrón" },
  { pregunta: "¿Cómo se llama la parte central del átomo?", respuesta: "núcleo" },
  { pregunta: "¿Qué se forma cuando dos o más átomos se unen?", respuesta: "molécula" },
  { pregunta: "¿Que partícula tiene carga positiva en un átomo?", respuesta: "protón"},
  { pregunta: "¿Que se forma cuando se unen dos atomos de un mismo elemento?", respuesta: "ión"}
];

const conceptos = [
  { concepto: "Electrón", definicion: "Partícula con carga negativa" },
  { concepto: "Protón", definicion: "Partícula con carga positiva" },
  { concepto: "Molécula", definicion: "Unión de dos o más átomos" },
  { concepto: "Neutrón", definicion: "Partícula sin carga" }
];

export function useAtomos() {
  // Estado para ejercicio de preguntas
  const [pregunta, setPregunta] = useState(null);
  const [respuestaTexto, setRespuestaTexto] = useState("");
  const [feedback, setFeedback] = useState("");

  // Estado para juego de emparejar
  const [conceptosDesordenados, setConceptosDesordenados] = useState([]);
  const [respuestasJuego, setRespuestasJuego] = useState(Array(conceptos.length).fill(""));

  useEffect(() => {
    generarPregunta();
    desordenarConceptos();
  }, []);

  function generarPregunta() {
    const p = preguntasAtomos[Math.floor(Math.random() * preguntasAtomos.length)];
    setPregunta(p);
    setRespuestaTexto("");
    setFeedback("");
  }

  function verificarRespuesta() {
    if (respuestaTexto.trim().toLowerCase() === pregunta.respuesta.toLowerCase()) {
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

  function setRespuestaJuego(index, valor) {
    const nuevas = [...respuestasJuego];
    nuevas[index] = valor;
    setRespuestasJuego(nuevas);
  }

  function verificarJuego() {
    let correctas = 0;
    conceptos.forEach((item, i) => {
      if (respuestasJuego[i] === item.definicion) correctas++;
    });
    alert(`Obtuviste ${correctas} de ${conceptos.length} emparejamientos correctos.`);
  }

  function reiniciarJuego() {
    setRespuestasJuego(Array(conceptos.length).fill(""));
    desordenarConceptos();
  }

  return {
    // Ejercicio
    pregunta,
    respuestaTexto,
    setRespuestaTexto,
    verificarRespuesta,
    feedback,

    // Juego
    conceptos,
    conceptosDesordenados,
    respuestasJuego,
    setRespuestaJuego,
    verificarJuego,
    reiniciarJuego
  };
}
