import { useTablaPeriodica } from "../data/useTablaPeriodica";

export default function JuegoTabla() {
  const {
    enigma,
    respuestaElemento,
    setRespuestaElemento,
    resultado,
    verificarElemento
  } = useTablaPeriodica();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: ¿Quién soy?</h3>
      <p>🔍 Pista: {enigma?.pista || "Cargando..."}</p>
      <input className="txt-actividad"
        type="text"
        value={respuestaElemento}
        onChange={(e) => setRespuestaElemento(e.target.value)}
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
