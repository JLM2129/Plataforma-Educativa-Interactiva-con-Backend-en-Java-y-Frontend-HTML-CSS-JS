import { useState } from "react";

export function useMovimiento() {
  const preguntasMovimiento = [
    {
      pregunta: "¿Qué ley de Newton dice que F = m × a?",
      opciones: [
        "Primera ley",
        "Segunda ley",
        "Tercera ley",
        "Ley de la gravedad",
      ],
      correcta: "Segunda ley",
    },
    {
      pregunta: "¿Qué es la aceleración?",
      opciones: [
        "Cambio de posición",
        "Cambio de velocidad",
        "Velocidad constante",
        "Fuerza dividida",
      ],
      correcta: "Cambio de velocidad",
    },
    {
      pregunta: "¿Qué ocurre si la fuerza neta es cero?",
      opciones: [
        "El objeto acelera",
        "El objeto se detiene",
        "El objeto continúa igual",
        "El objeto desaparece",
      ],
      correcta: "El objeto continúa igual",
    },
  ];

  const paresRelacion = [
    { concepto: "Fuerza", relacion: "Newton" },
    { concepto: "Velocidad", relacion: "m/s" },
    { concepto: "Aceleración", relacion: "m/s²" },
    { concepto: "Trabajo", relacion: "Julio" }
  ];

  const [preguntaActual, setPreguntaActual] = useState(null);
  const [relacionActual, setRelacionActual] = useState(null);

  function generarPregunta() {
    const aleatoria = preguntasMovimiento[Math.floor(Math.random() * preguntasMovimiento.length)];
    setPreguntaActual(aleatoria);
  }

  function verificarRespuesta(opcion) {
    return opcion === preguntaActual.correcta;
  }

  function generarRelacion() {
    const seleccion = paresRelacion[Math.floor(Math.random() * paresRelacion.length)];
    setRelacionActual(seleccion);
  }

  function verificarRelacion(opcion) {
    return opcion === relacionActual.relacion;
  }

  return {
    preguntaActual,
    generarPregunta,
    verificarRespuesta,
    relacionActual,
    generarRelacion,
    verificarRelacion,
  };
}
