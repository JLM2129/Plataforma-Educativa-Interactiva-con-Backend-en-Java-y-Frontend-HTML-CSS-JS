import { useState, useEffect } from "react";

const preguntas = [
  { pregunta: "¿Cuál es el símbolo químico del oxígeno?", respuesta: "O" },
  { pregunta: "¿Qué elemento tiene el número atómico 1?", respuesta: "hidrógeno" },
  { pregunta: "¿Qué elemento es un gas noble y usan en los globos?", respuesta: "helio" }
];

const elementos = [
  { pista: "Soy un gas que respiramos, símbolo 'O'", respuesta: "oxígeno" },
  { pista: "Soy un metal líquido a temperatura ambiente", respuesta: "mercurio" },
  { pista: "Mi símbolo es 'Na' y estoy en la sal de mesa", respuesta: "sodio" },
  { pista: "Me usan en los globos, soy un gas noble", respuesta: "helio" }
];

export  function useTablaPeriodica() {
  const [pregunta, setPregunta] = useState({});
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const [enigma, setEnigma] = useState({});
  const [respuestaElemento, setRespuestaElemento] = useState("");
  const [resultado, setResultado] = useState("");

  useEffect(() => {
    generarPregunta();
    generarEnigma();
  }, []);

  function generarPregunta() {
    const p = preguntas[Math.floor(Math.random() * preguntas.length)];
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
      setFeedback("❌ Incorrecto. Vuelve a intentarlo.");
    }
  }

  function generarEnigma() {
    const e = elementos[Math.floor(Math.random() * elementos.length)];
    setEnigma(e);
    setRespuestaElemento("");
    setResultado("");
  }

  function verificarElemento() {
    if (respuestaElemento.trim().toLowerCase() === enigma.respuesta.toLowerCase()) {
      setResultado("🎉 ¡Correcto!");
      setTimeout(() => {
        generarEnigma();
        setResultado("");
      }, 1500);
    } else {
      setResultado("🤔 No es ese. ¡Sigue intentando!");
    }
  }

  return {
    pregunta, respuesta, setRespuesta, verificar, feedback,
    enigma, respuestaElemento, setRespuestaElemento, verificarElemento, resultado
  };
}
