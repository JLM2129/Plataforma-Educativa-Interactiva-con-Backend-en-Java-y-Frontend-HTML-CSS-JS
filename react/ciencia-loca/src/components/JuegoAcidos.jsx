import { useAcidos } from "../data/useAcidos";

export default function JuegoAcidos() {
  const { sustancias, respuestas, setRespuestaSustancia, verificarJuego } = useAcidos();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: ¿Ácido o Base?</h3>
      {sustancias.map((item, i) => (
        <div key={i}>
          <label>{item.nombre}</label>
          <select
            value={respuestas[i]}
            onChange={(e) => setRespuestaSustancia(i, e.target.value)}
          >
            <option value="">¿Ácido o base?</option>
            <option value="ácido">Ácido</option>
            <option value="base">Base</option>
          </select>
        </div>
      ))}
      <button className="btn-actividad" onClick={verificarJuego}>✅ Verificar</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}
