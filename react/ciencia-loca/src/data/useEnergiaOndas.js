import { useState } from "react";

export function useEnergiaOndas() {
  const preguntas = {
    energia: [
      {
        pregunta: "¿Qué tipo de energía tiene un objeto en movimiento?",
        opciones: ["Energía potencial", "Energía cinética", "Energía térmica", "Energía eléctrica"],
        correcta: "Energía cinética",
      },
      {
        pregunta: "¿Cuál es la fórmula del trabajo en física?",
        opciones: ["Fuerza × Tiempo", "Masa × Aceleración", "Fuerza × Distancia", "Velocidad ÷ Tiempo"],
        correcta: "Fuerza × Distancia",
      },
      {
        pregunta: "¿En qué unidad se mide el trabajo?",
        opciones: ["Julios", "Watts", "Newton", "Pascal"],
        correcta: "Julios",
      },
    ],
    ondas: [
      {
        pregunta: "¿Qué tipo de onda necesita un medio para propagarse?",
        opciones: ["Onda electromagnética", "Onda transversal", "Onda mecánica", "Onda de radio"],
        correcta: "Onda mecánica",
      },
      {
        pregunta: "¿Cuál es la unidad de frecuencia del sonido?",
        opciones: ["Hertz", "Julio", "Newton", "Decibel"],
        correcta: "Hertz",
      },
      {
        pregunta: "¿Qué propiedad de una onda determina su volumen?",
        opciones: ["Frecuencia", "Amplitud", "Longitud de onda", "Velocidad"],
        correcta: "Amplitud",
      },
    ],
  };

  const juegos = {
    energia: [
      { descripcion: "Un resorte comprimido se suelta", respuesta: "Potencial → Cinética" },
      { descripcion: "Una bombilla encendida", respuesta: "Eléctrica → Lumínica" },
      { descripcion: "Una persona comiendo y luego corriendo", respuesta: "Química → Cinética" },
    ],
    ondas: [
      {
        descripcion: "Se propaga en el vacío y transmite luz.",
        respuesta: "Electromagnética",
      },
      {
        descripcion: "Necesita un medio como el aire o el agua.",
        respuesta: "Mecánica",
      },
      {
        descripcion: "Las partículas oscilan perpendicularmente a la dirección de propagación.",
        respuesta: "Transversal",
      },
      {
        descripcion: "Las partículas oscilan en la misma dirección que la propagación.",
        respuesta: "Longitudinal",
      },
    ],
  };

  const [preguntaActual, setPreguntaActual] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [juegoActual, setJuegoActual] = useState(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(null);
  const [juegoResultado, setJuegoResultado] = useState(null);

  const generarPregunta = (tema) => {
    const seleccion = preguntas[tema][Math.floor(Math.random() * preguntas[tema].length)];
    setPreguntaActual(seleccion);
    setResultado(null);
  };

  const verificarRespuesta = (opcion) => {
    const correcta = opcion === preguntaActual.correcta;
    setResultado({ correcta, respuesta: preguntaActual.correcta });
  };

  const generarJuego = (tema) => {
    const opciones = tema === "energia"
      ? ["Cinética → Potencial", "Potencial → Cinética", "Eléctrica → Lumínica", "Química → Cinética"]
      : ["Mecánica", "Electromagnética", "Transversal", "Longitudinal"];

    const seleccion = juegos[tema][Math.floor(Math.random() * juegos[tema].length)];
    setJuegoActual({ descripcion: seleccion.descripcion, opciones, respuesta: seleccion.respuesta });
    setJuegoResultado(null);
  };

  const verificarJuego = (opcion) => {
    const correcta = opcion === juegoActual.respuesta;
    setJuegoResultado({ correcta, respuesta: juegoActual.respuesta });
  };

  return {
    preguntaActual,
    generarPregunta,
    verificarRespuesta,
    resultado,
    juegoActual,
    generarJuego,
    verificarJuego,
    juegoResultado,
  };
}
