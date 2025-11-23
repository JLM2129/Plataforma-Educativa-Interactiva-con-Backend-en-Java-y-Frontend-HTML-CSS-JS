// src/components/EjerciciosEnergia.jsx
import { useEnergiaOndas } from "../data/useEnergiaOndas";
import { useEffect } from "react";

export default function EjerciciosEnergia() {
  const {
    preguntaActual,
    generarPregunta,
    verificarRespuesta,
    resultado
  } = useEnergiaOndas();

  useEffect(() => {
    generarPregunta("energia");
  }, []);

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio de Energía</h3>
      <p>{preguntaActual?.pregunta}</p>
      {preguntaActual?.opciones.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarRespuesta(op)}>{op}</button>
      ))}
      {resultado && (
        <p className={resultado.correcta ? "correcto" : "incorrecto"}>
          {resultado.correcta ? "✅ ¡Correcto!" : `❌ Incorrecto. La respuesta era: "${resultado.respuesta}".`}
        </p>
      )}
      <button className="btn-accion" onClick={() => generarPregunta("energia")}>Nueva pregunta</button>
    </div>
  );
}
