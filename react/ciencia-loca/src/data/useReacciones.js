import { useState, useEffect } from "react";

const preguntasOriginales = [
  { pregunta: "¿Qué tipo de reacción ocurre cuando se combinan dos sustancias para formar una nueva?", respuesta: "síntesis" },
  { pregunta: "¿Qué reacción descompone una sustancia en otras más simples?", respuesta: "descomposición" },
  { pregunta: "¿Cómo se llama la reacción en la que un elemento reemplaza a otro en un compuesto?", respuesta: "sustitución" }
];

const reacciones = [
  { ecuacion: "2H₂ + O₂ → 2H₂O", tipo: "síntesis" },
  { ecuacion: "2KClO₃ → 2KCl + 3O₂", tipo: "descomposición" },
  { ecuacion: "Zn + 2HCl → ZnCl₂ + H₂", tipo: "sustitución" }
];

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

export function useReacciones() {
  const [preguntasRestantes, setPreguntasRestantes] = useState([]);
  const [pregunta, setPregunta] = useState(null);
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    iniciarPreguntas();
    setRespuestas(Array(reacciones.length).fill(""));
  }, []);

  function iniciarPreguntas() {
    const barajadas = mezclar([...preguntasOriginales]);
    setPreguntasRestantes(barajadas);
    setPregunta(barajadas[0]);
  }

  function siguientePregunta() {
    let restantes = [...preguntasRestantes];
    restantes.shift(); // quitar la actual
    if (restantes.length === 0) {
      restantes = mezclar([...preguntasOriginales]);
    }
    setPreguntasRestantes(restantes);
    setPregunta(restantes[0]);
    setRespuesta("");
    setFeedback("");
  }

  function verificarRespuesta() {
    if (respuesta.trim().toLowerCase() === pregunta.respuesta.toLowerCase()) {
      setFeedback("✅ ¡Correcto!");
      setTimeout(() => {
        siguientePregunta();
      }, 1500);
    } else {
      setFeedback("❌ Incorrecto. Intenta otra vez.");
    }
  }

  function setRespuestaReaccion(index, valor) {
    const nuevas = [...respuestas];
    nuevas[index] = valor;
    setRespuestas(nuevas);
  }

  function verificarJuego() {
    let correctas = 0;
    reacciones.forEach((item, i) => {
      if (respuestas[i] === item.tipo) correctas++;
    });
    alert(`Obtuviste ${correctas} de ${reacciones.length} clasificaciones correctas.`);
  }

  return {
    pregunta,
    respuesta,
    setRespuesta,
    feedback,
    verificarRespuesta,
    reacciones,
    respuestas,
    setRespuestaReaccion,
    verificarJuego
  };
}
