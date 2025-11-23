// src/data/useCalculo.js
import { useState, useEffect } from "react";

const ejercicios = [
  { expresion: "d/dx (x^2)", resultado: "2x" },
  { expresion: "d/dx (sin(x))", resultado: "cos(x)" },
  { expresion: "d/dx (e^x)", resultado: "e^x" },
  { expresion: "d/dx (ln(x))", resultado: "1/x" },
  { expresion: "d/dx (x^3)", resultado: "3x^2" },
  { expresion: "d/dx (cos(x))", resultado: "-sin(x)" },
  { expresion: "d/dx (tan(x))", resultado: "sec^2(x)" },
  { expresion: "d/dx (5x)", resultado: "5" },
  { expresion: "d/dx (1/x)", resultado: "-1/x^2" }
];

const preguntasJuego = [
  {
    pregunta: "¿Cuál es la derivada de x^2?",
    opciones: ["x", "2x", "x^2"],
    correcta: "2x"
  },
  {
    pregunta: "¿Cuál es la derivada de cos(x)?",
    opciones: ["sin(x)", "-sin(x)", "cos(x)"],
    correcta: "-sin(x)"
  },
  {
    pregunta: "¿Cuál es la derivada de ln(x)?",
    opciones: ["x", "1/x", "e^x"],
    correcta: "1/x"
  },
  {
    pregunta: "¿Cuál es la derivada de e^x?",
    opciones: ["ln(x)", "e^x", "x^e"],
    correcta: "e^x"
  }
];

export function useCalculo() {
  const [ejercicio, setEjercicio] = useState({});
  const [feedback, setFeedback] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const [preguntaJuego, setPreguntaJuego] = useState({});
  const [puntaje, setPuntaje] = useState(0);
  const [tiempo, setTiempo] = useState(30);
  const [juegoActivo, setJuegoActivo] = useState(false);
  const [resultadoJuego, setResultadoJuego] = useState("");
  const [intervalo, setIntervalo] = useState(null);

  useEffect(() => {
    generarEjercicio();
    generarPreguntaJuego();
  }, []);

  useEffect(() => {
    if (juegoActivo && tiempo > 0) {
      const id = setInterval(() => setTiempo((t) => t - 1), 1000);
      setIntervalo(id);
      return () => clearInterval(id);
    } else if (tiempo <= 0) {
      finalizarJuego();
    }
  }, [juegoActivo, tiempo]);

  function generarEjercicio() {
    setFeedback("");
    setRespuesta("");
    const e = ejercicios[Math.floor(Math.random() * ejercicios.length)];
    setEjercicio(e);
  }

  function verificarEjercicio() {
    const res = respuesta.trim().toLowerCase();
    if (res === ejercicio.resultado.toLowerCase()) {
      setFeedback("✅ ¡Correcto!");
    } else {
      setFeedback(`❌ Incorrecto. La respuesta correcta es ${ejercicio.resultado}`);
    }
    setTimeout(generarEjercicio, 3000);
  }

  function generarPreguntaJuego() {
    setResultadoJuego("");
    const nueva = preguntasJuego[Math.floor(Math.random() * preguntasJuego.length)];
    setPreguntaJuego(nueva);
  }

  function verificarJuego(opcion) {
    if (!juegoActivo) return;
    if (opcion === preguntaJuego.correcta) {
      setResultadoJuego("✅ ¡Correcto!");
      setPuntaje((p) => p + 1);
    } else {
      setResultadoJuego(`❌ Incorrecto. La respuesta era ${preguntaJuego.correcta}`);
    }
    setTimeout(generarPreguntaJuego, 1000);
  }

  function iniciarJuego() {
    setJuegoActivo(true);
    setPuntaje(0);
    setTiempo(30);
    generarPreguntaJuego();
  }

  function finalizarJuego() {
    clearInterval(intervalo);
    setResultadoJuego(`⏱️ Tiempo terminado. Tu puntaje fue: ${puntaje}`);
    setJuegoActivo(false);
  }

  return {
    ejercicio,
    respuesta,
    setRespuesta,
    verificarEjercicio,
    feedback,
    preguntaJuego,
    verificarJuego,
    iniciarJuego,
    juegoActivo,
    resultadoJuego,
    puntaje,
    tiempo,
  };
}
