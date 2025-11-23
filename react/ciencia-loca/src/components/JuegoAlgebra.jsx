import { useEffect, useState } from "react";
import { useAlgebra } from "../data/useAlgebra";

export default function JuegoAlgebra() {
  const { juego, verificarJuego, generarJuego } = useAlgebra();

  function manejarClick(opcion) {
    const correcto = verificarJuego(opcion);
    alert(correcto ? "¡Correcto!" : "Incorrecto, intenta de nuevo.");
  }

  // 👉 Recargar MathJax cuando cambia la pregunta u opciones
  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, [juego]);

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos Matemáticos</h3>

      <p>
        Simplifica la expresión:{" "}
        <span dangerouslySetInnerHTML={{ __html: juego.pregunta }} />
      </p>

      {juego.opciones.map((op, i) => (
        <button className="btn-actividad"
          key={i}
          onClick={() => manejarClick(op)}
          dangerouslySetInnerHTML={{ __html: op }}
        />
      ))}

      <br />
      <button className="btn-accion" onClick={generarJuego}>Nuevo Juego</button>
      <button className="btn-accion"
        onClick={() =>
          alert("Debes estar registrado para acceder a este contenido.")
        }
      >
        Ver más juegos
      </button>
    </div>
  );
}
