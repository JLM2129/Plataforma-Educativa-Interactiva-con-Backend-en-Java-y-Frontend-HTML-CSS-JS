import React, { useState, useEffect } from "react";

const ejerciciosFiguras = [
  {
    pregunta: "¿Cuántos lados tiene un triángulo?",
    respuestaCorrecta: "3",
    pista: "Es la figura más básica con lados."
  },
  {
    pregunta: "¿Cuántos lados tiene un pentágono?",
    respuestaCorrecta: "5",
    pista: "Su nombre viene del prefijo griego 'penta'."
  },
  {
    pregunta: "¿Qué figura tiene 4 lados iguales?",
    respuestaCorrecta: "Cuadrado",
    pista: "Sus ángulos también son rectos."
  },
  {
    pregunta: "¿Cuáles son las dimensiones de las figuras bidimensionales?",
    respuestaCorrecta: "largo y ancho",
    pista: "Son las figuras más básicas que podemos dibujar en un papel."
  }
];

const EjercicioInteractivo = () => {
  const [ejercicio, setEjercicio] = useState({});
  const [respuesta, setRespuesta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    generarEjercicio();
  }, []);

  const generarEjercicio = () => {
    const aleatorio = Math.floor(Math.random() * ejerciciosFiguras.length);
    setEjercicio(ejerciciosFiguras[aleatorio]);
    setRespuesta("");
    setMensaje("");
    setColor("");
  };

  const verificar = () => {
    if (respuesta.trim().toLowerCase() === ejercicio.respuestaCorrecta.toLowerCase()) {
      setMensaje("¡Correcto! 🎉");
      setColor("green");
    } else {
      setMensaje(`Intenta de nuevo. Pista: ${ejercicio.pista}`);
      setColor("red");
    }
    setTimeout(() => generarEjercicio(), 2000);
  };

  return (
    <div className="bloque ejercicio-figura">
      <h3>✍️ Ejercicios Interactivos</h3>
      <p>{ejercicio.pregunta}</p>
      <input className="txt-actividad"
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />
      <button className="btn-actividad" onClick={verificar}>Verificar</button>
      <p style={{ color }}>{mensaje}</p>
    </div>
  );
};

export default EjercicioInteractivo;
