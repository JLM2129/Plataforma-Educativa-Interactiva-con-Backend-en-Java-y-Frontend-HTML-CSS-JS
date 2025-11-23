import { useMagnitudes } from "../data/useMagnitudes";
import { useEffect } from "react";

export default function EjerciciosMagnitudes() {
  const {
    preguntaMagnitud,
    opcionesMagnitud,
    resultadoMagnitud,
    generarPreguntaMagnitud,
    verificarMagnitud
  } = useMagnitudes();

  useEffect(() => {
    generarPreguntaMagnitud();
  }, []);

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio de Magnitudes</h3>
      <p>{preguntaMagnitud}</p>
      {opcionesMagnitud.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarMagnitud(op)}>{op}</button>
      ))}
      {resultadoMagnitud && (
        <p className={resultadoMagnitud.correcta ? "correcto" : "incorrecto"}>
          {resultadoMagnitud.correcta
            ? "✅ ¡Correcto!"
            : `❌ Incorrecto. La respuesta es "${resultadoMagnitud.respuesta}".`}
        </p>
      )}
      <button className="btn-accion" onClick={generarPreguntaMagnitud}>Nueva pregunta</button>
    </div>
  );
}
