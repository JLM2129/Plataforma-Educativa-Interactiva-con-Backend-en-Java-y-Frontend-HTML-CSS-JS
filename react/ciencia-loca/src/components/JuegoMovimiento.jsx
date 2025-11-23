import { useState } from "react";

export default function JuegoMovimiento() {
  const pares = [
    { concepto: "Fuerza", relacion: "Newton" },
    { concepto: "Velocidad", relacion: "m/s" },
    { concepto: "Aceleración", relacion: "m/s²" },
    { concepto: "Trabajo", relacion: "Julio"},
  ];

  const opciones = ["Newton", "m/s", "m/s²", "Kg", "Julio"];

  const [conceptoActual, setConceptoActual] = useState(null);
  const [respuesta, setRespuesta] = useState(null);
  const [resultado, setResultado] = useState(null);

  function generarPregunta() {
    const aleatoria = pares[Math.floor(Math.random() * pares.length)];
    setConceptoActual(aleatoria);
    setRespuesta(null);
    setResultado(null);
  }

  function manejarRespuesta(opcion) {
    setRespuesta(opcion);
    setResultado(opcion === conceptoActual.relacion);
  }

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos de Movimiento y Fuerza</h3>
      {conceptoActual ? (
        <>
          <p>
            ❓ ¿Cuál es la unidad de medida de "{conceptoActual.concepto}"?
          </p>
          {opciones.map((op) => (
            <button
              key={op}
              onClick={() => manejarRespuesta(op)}
              className="btn-actividad"
            >
              {op}
            </button>
          ))}
          {respuesta && (
            <p className={resultado ? "correcto" : "incorrecto"}>
              {resultado
                ? "✅ ¡Correcto!"
                : `❌ Incorrecto. Era "${conceptoActual.relacion}".`}
            </p>
          )}
          <button className="btn-accion" onClick={generarPregunta}>Nuevo juego</button>
        </>
      ) : (
        <button className="btn-accion" onClick={generarPregunta}>Jugar</button>
      )}
      <button className="btn-accion"
        onClick={() => alert("Debes estar registrado para acceder a este contenido.")}
      >
        Ver más juegos
      </button>
    </div>
  );
}
