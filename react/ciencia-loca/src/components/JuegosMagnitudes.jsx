// src/componentes/JuegosMagnitudes.jsx
import { useMagnitudes } from "../data/useMagnitudes";
import { useEffect } from "react";

export default function JuegosMagnitudes() {
  const {
    descripcionAdivina,
    opcionesAdivina,
    correctaAdivina,
    resultadoAdivina,
    generarAdivinaMagnitud,
    verificarAdivina
  } = useMagnitudes();

  useEffect(() => {
    generarAdivinaMagnitud();
  }, []);

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos de Magnitudes</h3>
      <p>{descripcionAdivina}</p>
      {opcionesAdivina.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarAdivina(op)}>{op}</button>
      ))}
      {resultadoAdivina && (
        <p className={resultadoAdivina.correcta ? "correcto" : "incorrecto"}>
          {resultadoAdivina.correcta ? "✅ ¡Correcto!" : `❌ Incorrecto. Era "${resultadoAdivina.respuesta}".`}
        </p>
      )}
      <button className="btn-accion" onClick={generarAdivinaMagnitud}>Nuevo juego</button>
    </div>
  );
}
