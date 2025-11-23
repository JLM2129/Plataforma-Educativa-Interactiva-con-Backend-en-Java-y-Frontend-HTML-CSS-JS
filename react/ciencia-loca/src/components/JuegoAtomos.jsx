import { useAtomos } from "../data/useAtomos";

export default function JuegoAtomos() {
  const {
    conceptos,
    conceptosDesordenados,
    respuestasJuego,
    setRespuestaJuego,
    verificarJuego,
    reiniciarJuego
  } = useAtomos();

  // Protege contra estado aún no inicializado
  if (!conceptos || !conceptosDesordenados || !respuestasJuego) {
    return <p>Cargando juego...</p>;
  }

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: Empareja los conceptos</h3>
      {conceptos.map((item, i) => (
        <div key={i}>
          <label>{item.concepto}</label>
          <select
            value={respuestasJuego[i] || ""}
            onChange={(e) => setRespuestaJuego(i, e.target.value)}
          >
            <option  value="">Selecciona la definición</option>
            {conceptosDesordenados.map((def, j) => (
              <option key={j} value={def}>{def}</option>
            ))}
          </select>
        </div>
      ))}

      <button className="btn-actividad" onClick={verificarJuego}>✅ Comprobar</button>
      <button className="btn-accion" onClick={reiniciarJuego}>🔁 Volver a jugar</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}
