// src/components/JuegoAdivinaLuz.jsx
import useLuzOptica from "../data/useLuzOptica";

export default function JuegoAdivinaLuz() {
  const {
    preguntaActual,
    respuestaUsuario,
    setRespuestaUsuario,
    feedback,
    verificarAdivinanza
  } = useLuzOptica();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego de Adivinanza</h3>
      <p>{preguntaActual?.pista}</p>
      <input className="txt-actividad"
        type="text"
        value={respuestaUsuario}
        onChange={(e) => setRespuestaUsuario(e.target.value)}
        placeholder="¿Qué soy?"
      />
      <button className="btn-actividad" onClick={verificarAdivinanza}>Responder</button>
      {feedback && <p>{feedback}</p>}
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}

