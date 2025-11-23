import { useState, useEffect } from "react";

const preguntas = [
  {
    pregunta: "¿Qué propiedad de la materia indica la cantidad de espacio que ocupa?",
    respuesta: "volumen",
    pista: "Se mide en litros o metros cúbicos."
  },
  {
    pregunta: "¿Cómo se llama la propiedad que permite a la materia resistir cambios en su estado de movimiento?",
    respuesta: "inercia",
    pista: "Es la tendencia a mantener su estado actual."
  },
  {
    pregunta: "¿Cuál es la propiedad que indica la cantidad de materia en un objeto?",
    respuesta: "masa",
    pista: "Se mide en kilogramos o gramos."
  }
];

const enunciadosFV = [
  { frase: "La materia no tiene masa ni volumen.", esVerdadero: false },
  { frase: "La materia tiene masa y ocupa un lugar en el espacio.", esVerdadero: true },
  { frase: "El agua es una mezcla heterogénea.", esVerdadero: false },
  { frase: "El agua pura es una sustancia compuesta.", esVerdadero: true }
];

export default function useMateria() {
  const [pregunta, setPregunta] = useState({});
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const [enunciado, setEnunciado] = useState({});
  const [resultadoFV, setResultadoFV] = useState("");

  useEffect(() => {
    nuevaPregunta();
    nuevaFrase();
  }, []);

  function nuevaPregunta() {
    const aleatoria = preguntas[Math.floor(Math.random() * preguntas.length)];
    setPregunta(aleatoria);
    setRespuesta("");
    setFeedback("");
  }

  function verificar() {
    const r = respuesta.trim().toLowerCase();
    if (r === pregunta.respuesta.toLowerCase()) {
      setFeedback("✅ ¡Correcto!");
    } else {
      setFeedback(`❌ Incorrecto. Pista: ${pregunta.pista}`);
    }
    setTimeout(nuevaPregunta, 3000);
  }

  function nuevaFrase() {
    const aleatoria = enunciadosFV[Math.floor(Math.random() * enunciadosFV.length)];
    setEnunciado(aleatoria);
    setResultadoFV("");
  }

  function responderFV(valor) {
    if (valor === enunciado.esVerdadero) {
      setResultadoFV("✅ ¡Correcto!");
    } else {
      setResultadoFV("❌ Incorrecto.");
    }
    setTimeout(nuevaFrase, 3000);
  }

  return {
    pregunta,
    respuesta,
    setRespuesta,
    verificar,
    feedback,
    enunciado,
    resultadoFV,
    responderFV
  };
}
