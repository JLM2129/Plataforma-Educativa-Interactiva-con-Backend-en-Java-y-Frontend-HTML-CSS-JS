// src/componentes/calculo/CalculoJuego.jsx
import { useCalculo } from "../data/useCalculo";

export default function CalculoJuego() {
  const {
    preguntaJuego,
    verificarJuego,
    iniciarJuego,
    juegoActivo,
    resultadoJuego,
    puntaje,
    tiempo,
  } = useCalculo();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego Interactivo</h3>
      <p>Resuelve tantas derivadas como puedas en 30 segundos ⏱️</p>
      <p>{preguntaJuego.pregunta}</p>
      {preguntaJuego.opciones?.map((op, i) => (
        <button className="btn-actividad" key={i} onClick={() => verificarJuego(op)}>{op}</button>
      ))}
      <p>{resultadoJuego}</p>
      <p>Puntaje: {puntaje} | Tiempo restante: {tiempo}s</p>
      {!juegoActivo && (
        <button className="btn-accion" onClick={iniciarJuego}>Iniciar Juego</button>
      )}
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}
