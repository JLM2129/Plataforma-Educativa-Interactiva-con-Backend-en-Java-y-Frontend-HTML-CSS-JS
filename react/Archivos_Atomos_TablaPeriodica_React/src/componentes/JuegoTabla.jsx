import { useTablaPeriodica } from "../../data/useTablaPeriodica";

export default function JuegoTabla() {
  const { pista, respuesta, setRespuesta, resultado, verificarElemento } = useTablaPeriodica();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: ¿Quién soy?</h3>
      <p>🔍 Pista: {pista}</p>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Elemento químico"
      />
      <button className="btn-actividad" onClick={verificarElemento}>Responder</button>
      <p>{resultado}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}