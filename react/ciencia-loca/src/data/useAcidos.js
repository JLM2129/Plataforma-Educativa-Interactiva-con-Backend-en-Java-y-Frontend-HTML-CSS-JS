import { useState, useEffect } from "react";

const preguntas = [
  { pregunta: "¿Qué tipo de sustancia tiene un pH menor a 7?", respuesta: "ácido" },
  { pregunta: "¿Qué tipo de sustancia tiene un pH mayor a 7?", respuesta: "base" },
  { pregunta: "¿Qué tipo de reacción ocurre entre un ácido y una base?", respuesta: "neutralización" }
];

const sustancias = [
  { nombre: "Jugo de limón", tipo: "ácido" },
  { nombre: "Jabón", tipo: "base" },
  { nombre: "Vinagre", tipo: "ácido" },
  { nombre: "Bicarbonato de sodio", tipo: "base" }
];

export function useAcidos() {
  const [pregunta, setPregunta] = useState({});
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    nuevaPregunta();
    setRespuestas(Array(sustancias.length).fill(""));
  }, []);

  function nuevaPregunta() {
    const p = preguntas[Math.floor(Math.random() * preguntas.length)];
    setPregunta(p);
    setRespuesta("");
    setFeedback("");
  }

  function verificarRespuesta() {
    if (respuesta.trim().toLowerCase() === pregunta.respuesta.toLowerCase()) {
      setFeedback("✅ ¡Correcto!");
      setTimeout(() => {
        nuevaPregunta();
      }, 1500);
    } else {
      setFeedback("❌ Incorrecto. Vuelve a intentar.");
    }
  }

  function setRespuestaSustancia(index, valor) {
    const nuevas = [...respuestas];
    nuevas[index] = valor;
    setRespuestas(nuevas);
  }

  function verificarJuego() {
    let correctas = 0;
    sustancias.forEach((item, i) => {
      if (respuestas[i] === item.tipo) correctas++;
    });
    alert(`Obtuviste ${correctas} de ${sustancias.length} respuestas correctas.`);
  }

  return {
    pregunta, respuesta, setRespuesta, feedback, verificarRespuesta,
    sustancias, respuestas, setRespuestaSustancia, verificarJuego
  };
}
