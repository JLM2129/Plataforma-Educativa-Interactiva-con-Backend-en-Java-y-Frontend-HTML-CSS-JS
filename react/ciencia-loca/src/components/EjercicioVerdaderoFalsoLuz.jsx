// src/components/EjercicioVerdaderoFalsoLuz.jsx
import { useEffect } from "react";
import useLuzOptica from "../data/useLuzOptica";

export default function EjercicioVerdaderoFalsoLuz() {
  const {
    preguntasVF, resultadosVF,
    iniciarVF, verificarVF
  } = useLuzOptica();

  useEffect(() => iniciarVF(), []);

  return (
    <div className="bloque ejercicios">
        <h3>✍️ Ejercicio de Verdadero o Falso</h3>
      {preguntasVF.map((item, i) => (
        <div key={i}>
          <p>{item.pregunta}</p>
          <button className="btn-actividad" onClick={() => verificarVF(i, true)}>Verdadero</button>
          <button className="btn-actividad" onClick={() => verificarVF(i, false)}>Falso</button>
          {resultadosVF[i] != null && (
            <p>{resultadosVF[i] ? "✅ Correcto" : "❌ Incorrecto"}</p>
          )}
        </div>
      ))}
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más ejercicios
          </button>
    </div>
  );
}

