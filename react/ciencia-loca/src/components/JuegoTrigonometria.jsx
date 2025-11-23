import { useEffect, useState } from "react";
import { useTrigonometria } from "../data/useTrigonometria";

export default function JuegoTrigonometria() {
  const { juego, verificarJuego, generarJuego } = useTrigonometria();

  function manejarClick(opcion) {
    const correcto = verificarJuego(opcion);
    alert(correcto ? "¡Correcto!" : "Incorrecto, intenta de nuevo.");
  }

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos Matemáticos </h3>
      <p> Selecciona el valor correcto: {juego.pregunta}</p>
      {juego.opciones.map((op, i) => (
        <button  className="btn-actividad" key={i} onClick={() => manejarClick(op)}>{op}</button>
      ))}
      <br />
      <button className="btn-accion" onClick={generarJuego}>Nuevo Juego</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}

