import { useAtomos } from "../../data/useAtomos";

export default function JuegoAtomos() {
  const { conceptos, definiciones, respuestas, setRespuesta, verificarJuego, reiniciarJuego } = useAtomos();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: Empareja los conceptos</h3>
      {conceptos.map((item, i) => (
        <div key={i}>
          <label>{item.concepto}</label>
          <select
            value={respuestas[i]}
            onChange={(e) => setRespuesta(i, e.target.value)}
          >
            <option value="">Selecciona la definición</option>
            {definiciones.map((def, j) => (
              <option key={j} value={def.definicion}>{def.definicion}</option>
            ))}
          </select>
        </div>
      ))}
      <button className="btn-actividad" onClick={verificarJuego}>✅ Comprobar</button>
      <button className="btn-actividad" onClick={reiniciarJuego}>🔁 Volver a jugar</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}