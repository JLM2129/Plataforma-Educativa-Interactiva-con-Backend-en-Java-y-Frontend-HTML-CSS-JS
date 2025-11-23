import { useState, useEffect } from "react";

const preguntas = [
  {
    pregunta: "¿Qué tipo de mezcla tiene una composición uniforme?",
    respuesta: "Mezcla homogénea",
    pista: "No se pueden distinguir sus componentes a simple vista."
  },
  {
    pregunta: "¿Cómo se llama la mezcla donde se pueden ver sus componentes?",
    respuesta: "Mezcla heterogénea",
    pista: "Sus componentes son visibles y distinguibles."
  },
  {
    pregunta: "¿Qué nombre recibe la sustancia que se disuelve en una solución?",
    respuesta: "Soluto",
    pista: "Es la sustancia que se encuentra en menor cantidad."
  }
];

const preguntasOpcion = [
  {
    pregunta: "¿Cuál de las siguientes es una mezcla homogénea?",
    opciones: ["Ensalada", "Agua con sal", "Granola"],
    respuesta: "Agua con sal"
  },
  {
    pregunta: "¿Qué componente de una solución está en mayor proporción?",
    opciones: ["Soluto", "Solvente", "Ambos por igual"],
    respuesta: "Solvente"
  },
  {
    pregunta: "¿Cuál de las siguientes es una mezcla heterogénea?",
    opciones: ["Leche", "Aire", "Arena con piedras"],
    respuesta: "Arena con piedras"
  }
];

export default function useMezclas() {
  const [pregunta, setPregunta] = useState({});
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const [preguntaOpcion, setPreguntaOpcion] = useState({});
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    generarPregunta();
    generarPreguntaOpcion();
  }, []);

  function generarPregunta() {
    const p = preguntas[Math.floor(Math.random() * preguntas.length)];
    setPregunta(p);
    setRespuesta("");
    setFeedback("");
  }

  function verificar() {
    const res = respuesta.trim().toLowerCase();
    const correcta = pregunta.respuesta.toLowerCase();
    if (res === correcta) {
      setFeedback("✅ ¡Correcto!");
    } else {
      setFeedback(`❌ Incorrecto. Pista: ${pregunta.pista}`);
    }
    setTimeout(generarPregunta, 3000);
  }

  function generarPreguntaOpcion() {
    const p = preguntasOpcion[Math.floor(Math.random() * preguntasOpcion.length)];
    setPreguntaOpcion(p);
    setResultado("");
  }

  function verificarOpcion(opcion) {
    if (opcion === preguntaOpcion.respuesta) {
      setResultado("✅ ¡Correcto!");
    } else {
      setResultado(`❌ Incorrecto. La respuesta correcta es: ${preguntaOpcion.respuesta}`);
    }
    setTimeout(generarPreguntaOpcion, 4000);
  }

  return {
    pregunta, respuesta, setRespuesta, verificar, feedback,
    preguntaOpcion, verificarOpcion, resultado
  };
}
