import { useState } from "react";

export function useMagnitudes() {
  const preguntasMagnitudes = [
    {
      pregunta: "¿Cuál de estas es una magnitud fundamental?",
      opciones: ["Velocidad", "Tiempo", "Fuerza", "Energía"],
      correcta: "Tiempo",
    },
    {
      pregunta: "¿Qué unidad se usa para medir la masa en el SI?",
      opciones: ["Litro", "Metro", "Segundo", "Kilogramo"],
      correcta: "Kilogramo",
    },
    {
      pregunta: "¿Cuál es una magnitud derivada?",
      opciones: ["Longitud", "Tiempo", "Área", "Temperatura"],
      correcta: "Área",
    },
  ];

  const magnitudes = ["masa", "tiempo", "temperatura", "longitud"];
  const descripcion = {
    masa: "Se mide en kilogramos y representa la cantidad de materia.",
    tiempo: "Se mide en segundos y es la duración de los eventos.",
    temperatura: "Se mide en kelvin y mide qué tan caliente está algo.",
    longitud: "Se mide en metros y representa la distancia.",
  };

  // Ejercicios
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [resultadoMagnitud, setResultadoMagnitud] = useState(null);

  function generarPreguntaMagnitud() {
    const aleatoria =
      preguntasMagnitudes[Math.floor(Math.random() * preguntasMagnitudes.length)];
    setPreguntaActual(aleatoria);
    setResultadoMagnitud(null); // Reiniciar resultado anterior
  }

  function verificarMagnitud(opcion) {
    const correcta = opcion === preguntaActual.correcta;
    setResultadoMagnitud({
      correcta,
      respuesta: preguntaActual.correcta,
    });
  }

  // Juegos
  const [descripcionActual, setDescripcionActual] = useState(null);
  const [seleccionCorrecta, setSeleccionCorrecta] = useState("");
  const [resultadoAdivina, setResultadoAdivina] = useState(null);

  function generarAdivinaMagnitud() {
    const seleccion = magnitudes[Math.floor(Math.random() * magnitudes.length)];
    setSeleccionCorrecta(seleccion);
    setDescripcionActual(descripcion[seleccion]);
    setResultadoAdivina(null); // Reiniciar resultado
  }

  function verificarAdivina(opcion) {
    const correcta = opcion === seleccionCorrecta;
    setResultadoAdivina({
      correcta,
      respuesta: seleccionCorrecta,
    });
  }

  return {
    // Para ejercicios
    preguntaMagnitud: preguntaActual?.pregunta,
    opcionesMagnitud: preguntaActual?.opciones || [],
    resultadoMagnitud,
    generarPreguntaMagnitud,
    verificarMagnitud,

    // Para juegos
    descripcionAdivina: descripcionActual,
    opcionesAdivina: magnitudes,
    resultadoAdivina,
    generarAdivinaMagnitud,
    verificarAdivina,
  };
}
