import { useEffect, useState } from "react";
import { useMovimiento } from "../data/useMovimiento";

export default function EjercicioMovimiento() {
  const { preguntaActual, generarPregunta, verificarRespuesta } = useMovimiento();
  const [seleccion, setSeleccion] = useState("");
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    generarPregunta();
  }, []);

  function manejarVerificacion(opcion) {
    setSeleccion(opcion);
    setResultado(verificarRespuesta(opcion));
  }

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio de Movimiento y Fuerza</h3>
      {preguntaActual ? (
        <>
          <p>{preguntaActual.pregunta}</p>
          {preguntaActual.opciones.map((opcion) => (
            <button className="btn-actividad" key={opcion} onClick={() => manejarVerificacion(opcion)}>
              {opcion}
            </button>
          ))}
          {resultado !== null && (
            <p className={resultado ? "correcto" : "incorrecto"}>
              {resultado ? "✅ ¡Correcto!" : `❌ Incorrecto. La respuesta es "${preguntaActual.correcta}".`}
            </p>
          )}
          <button className="btn-actividad" onClick={() => {
            setResultado(null);
            generarPregunta();
          }}>
            Nueva Pregunta
          </button>
        </>
      ) : (
        <p>Cargando pregunta...</p>
      )}
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>Ver más ejercicios</button>
    </div>
  );
} 
