// src/data/useLuzOptica.js
import { useState, useEffect } from "react";

const preguntasVF = [
  { pregunta: "La luz necesita un medio para propagarse.", respuesta: false },
  { pregunta: "Los espejos planos producen imágenes virtuales.", respuesta: true },
  { pregunta: "La luz blanca se puede descomponer en varios colores.", respuesta: true }
];

const adivinanzasData = [
  {
    pista: "Soy invisible, pero sin mí no puedes ver. Viajo en línea recta y me reflejo también.",
    respuesta: "luz"
  },
  {
    pista: "Me usan para ver mejor, cambio la dirección de la luz. Estoy en lentes y cámaras.",
    respuesta: "lente"
  },
  {
    pista: "Soy una superficie que refleja la luz. Te ves en mí todas las mañanas.",
    respuesta: "espejo"
  },
  {
    pista: "Paso por un prisma y me divido en muchos colores.",
    respuesta: "luz blanca"
  }
];

export default function useLuzOptica() {
  // Juego verdadero/falso
  const [resultadosVF, setResultadosVF] = useState([]);

  // Juego adivinanza
  const [preguntaActual, setPreguntaActual] = useState({});
  const [respuestaUsuario, setRespuestaUsuario] = useState("");
  const [feedback, setFeedback] = useState("");

  function iniciarVF() {
    setResultadosVF(preguntasVF.map(() => null));
  }

  function verificarVF(index, valor) {
    setResultadosVF((prev) => {
      const copia = [...prev];
      copia[index] = preguntasVF[index].respuesta === valor;
      return copia;
    });
  }

  function generarNuevaAdivinanza() {
    const aleatoria = adivinanzasData[Math.floor(Math.random() * adivinanzasData.length)];
    setPreguntaActual(aleatoria);
    setRespuestaUsuario("");
    setFeedback("");
  }

  function verificarAdivinanza() {
    const respuesta = respuestaUsuario.trim().toLowerCase();
    const correcta = preguntaActual.respuesta.toLowerCase();
    if (respuesta === correcta) {
      setFeedback("✅ ¡Correcto! Nueva adivinanza cargada...");
      setTimeout(generarNuevaAdivinanza, 1500);
    } else {
      setFeedback("❌ Incorrecto. Intenta otra vez.");
    }
  }

  useEffect(() => {
    generarNuevaAdivinanza();
  }, []);

  return {
    // Verdadero o falso
    preguntasVF,
    resultadosVF,
    iniciarVF,
    verificarVF,

    // Adivinanza
    preguntaActual,
    respuestaUsuario,
    setRespuestaUsuario,
    feedback,
    verificarAdivinanza,
    generarNuevaAdivinanza
  };
}
