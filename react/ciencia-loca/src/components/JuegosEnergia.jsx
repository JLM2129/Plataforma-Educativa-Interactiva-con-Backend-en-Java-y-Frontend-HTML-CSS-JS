// src/components/JuegosEnergia.jsx
import { useEnergiaOndas } from "../data/useEnergiaOndas";
import { useEffect } from "react";

export default function JuegosEnergia() {
  const {
    juegoActual,
    generarJuego,
    verificarJuego,
    juegoResultado
  } = useEnergiaOndas();

  useEffect(() => {
    generarJuego("energia");
  }, []);

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos de Energía</h3>
      <p>❓ ¿Qué transformación de energía ocurre?: <strong>{juegoActual?.descripcion}</strong></p>
      {juegoActual?.opciones.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarJuego(op)}>{op}</button>
      ))}
      {juegoResultado && (
        <p className={juegoResultado.correcta ? "correcto" : "incorrecto"}>
          {juegoResultado.correcta ? "✅ ¡Correcto!" : `❌ Incorrecto. Era: ${juegoResultado.respuesta}.`}
        </p>
      )}
      <button className="btn-accion" onClick={() => generarJuego("energia")}>Nuevo juego</button>
    </div>
  );
}
