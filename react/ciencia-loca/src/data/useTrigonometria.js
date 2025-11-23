// src/data/useTrigonometria.js
import { useState, useEffect } from "react";

export function useTrigonometria() {
  const preguntas = [
    { pregunta: "sen(90°)", respuesta: "1" },
    { pregunta: "cos(0°)", respuesta: "1" },
    { pregunta: "tangente(45°)", respuesta: "1" },
    { pregunta: "sen(0°)", respuesta: "0" },
    { pregunta: "cos(90°)", respuesta: "0" },
  ];

  const preguntasJuego = [
    { pregunta: "sen(30°)", opciones: ["0.5", "1", "0"], correcta: "0.5" },
    { pregunta: "cos(60°)", opciones: ["0.5", "1", "0"], correcta: "0.5" },
    { pregunta: "tangente(0°)", opciones: ["0", "1", "infinito"], correcta: "0" },
    { pregunta: "cos(90°)", opciones: ["0", "1", "0.5"], correcta: "0" },
    { pregunta: "sen(0°)", opciones: ["0", "1", "0.5"], correcta: "0" },
  ];

  const [pregunta, setPregunta] = useState("");
  const [respuestaCorrecta, setRespuestaCorrecta] = useState("");
  const [juego, setJuego] = useState({ pregunta: "", opciones: [], correcta: "" });

  useEffect(() => {
    generarPregunta();
    generarJuego();
  }, []);

  function generarPregunta() {
    const random = preguntas[Math.floor(Math.random() * preguntas.length)];
    setPregunta(random.pregunta);
    setRespuestaCorrecta(random.respuesta);
  }

  function verificarRespuesta(respuesta) {
    return respuesta.trim() === respuestaCorrecta;
  }

  function generarJuego() {
  const random = preguntasJuego[Math.floor(Math.random() * preguntasJuego.length)];

  // Copia las opciones originales
  const opcionesMezcladas = [...random.opciones].sort(() => Math.random() - 0.5);

  // Guarda una nueva versión del juego con opciones mezcladas
  setJuego({
    ...random,
    opciones: opcionesMezcladas,
  });
}


  function verificarJuego(respuesta) {
    return respuesta === juego.correcta;
  }

  return { pregunta, verificarRespuesta, generarPregunta, juego, verificarJuego, generarJuego };
}
