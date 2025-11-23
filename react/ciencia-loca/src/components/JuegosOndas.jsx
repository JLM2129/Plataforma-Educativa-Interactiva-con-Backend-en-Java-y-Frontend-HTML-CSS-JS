// src/components/JuegosOndas.jsx
import { useEnergiaOndas } from "../data/useEnergiaOndas";
import { useEffect } from "react";

export default function JuegosOndas() {
  const {
    juegoActual,
    generarJuego,
    verificarJuego,
    juegoResultado
  } = useEnergiaOndas();

  useEffect(() => {
    generarJuego("ondas");
  }, []);

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos de Sonido</h3>
      <p>❓ {juegoActual?.descripcion}</p>
      {juegoActual?.opciones.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarJuego(op)}>{op}</button>
      ))}
      {juegoResultado && (
        <p className={juegoResultado.correcta ? "correcto" : "incorrecto"}>
          {juegoResultado.correcta ? "✅ ¡Correcto!" : `❌ Incorrecto. Era: ${juegoResultado.respuesta}.`}
        </p>
      )}
      <button className="btn-accion" onClick={() => generarJuego("ondas")}>Nuevo juego</button>
    </div>
  );
}
