// src/data/useAlgebra.js
import { useState, useEffect } from "react";

export function useAlgebra() {
  const [expresion, setExpresion] = useState("");
  const [respuestaAlgebra, setRespuestaAlgebra] = useState("");
  const [feedbackAlgebra, setFeedbackAlgebra] = useState("");
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
  const [opcionesJuegoAlgebra, setOpcionesJuegoAlgebra] = useState([]);
  const [resultadoJuegoAlgebra, setResultadoJuegoAlgebra] = useState("");

  useEffect(() => {
    generarExpresion();
    generarJuego();
  }, []);

  function generarExpresion() {
    const coef = Math.floor(Math.random() * 5) + 1;
    const constante = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * 10);
    setRespuestaCorrecta(coef * x + constante);
    setExpresion(`${coef}x + ${constante} (x = ${x})`);
  }

  function verificarRespuestaAlgebra(respuestaUsuario) {
    return parseInt(respuestaUsuario) === respuestaCorrecta;
  }

  function generarJuego() {
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  const correcta = `\(${a + b}.x\)`;

  const opciones = [
    `\(${a + b}.x\)`,
    `\(${a - 1}.x + ${b}.x\)`,
    `\(${a + b + 1}.x\)`
  ];


  setOpcionesJuegoAlgebra(opciones);
  setResultadoJuegoAlgebra("");
  setExpresion(`\(${a}x + ${b}x\)`);
  setRespuestaCorrecta(correcta); 
  console.log("Pregunta:", `${a}x + ${b}x`);
console.log("Opciones:", opciones);
console.log("Correcta:", correcta);

}


  function seleccionarOpcionAlgebra(opcion) {
    const esCorrecto = opcion === respuestaCorrecta;
    setResultadoJuegoAlgebra(esCorrecto ? "✅ ¡Correcto!" : "❌ Intenta nuevamente");
    return esCorrecto;
  }

  return {
    juego: {
      pregunta: expresion,
      opciones: opcionesJuegoAlgebra
    },
    verificarJuego: seleccionarOpcionAlgebra,
    generarJuego,
    expresion,
    verificarRespuesta: verificarRespuestaAlgebra,
    generarExpresion,
  };
}
