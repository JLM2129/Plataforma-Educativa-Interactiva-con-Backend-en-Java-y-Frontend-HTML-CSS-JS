// src/components/EjerciciosOndas.jsx
import { useEnergiaOndas } from "../data/useEnergiaOndas";
import { useEffect } from "react";

export default function EjerciciosOndas() {
  const {
    preguntaActual,
    generarPregunta,
    verificarRespuesta,
    resultado
  } = useEnergiaOndas();

  useEffect(() => {
    generarPregunta("ondas");
  }, []);

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio de Ondas</h3>
      <p>{preguntaActual?.pregunta}</p>
      {preguntaActual?.opciones.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarRespuesta(op)}>{op}</button>
      ))}
      {resultado && (
        <p className={resultado.correcta ? "correcto" : "incorrecto"}>
          {resultado.correcta ? "✅ ¡Correcto!" : `❌ Incorrecto. La respuesta era: "${resultado.respuesta}".`}
        </p>
      )}
      <button className="btn-accion" onClick={() => generarPregunta("ondas")}>Nueva pregunta</button>
    </div>
  );
}
