import { useReacciones } from "../data/useReacciones";

export default function JuegoReacciones() {
  const { reacciones, respuestas, setRespuestaReaccion, verificarJuego } = useReacciones();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: Clasifica la reacción</h3>
      <p>Selecciona el tipo correcto de cada reacción química:</p>
      {reacciones.map((item, i) => (
        <div key={i}>
          <p>{item.ecuacion}</p>
          <select
            value={respuestas[i]}
            onChange={(e) => setRespuestaReaccion(i, e.target.value)}
          >
            <option value="">Tipo de reacción</option>
            <option value="síntesis">Síntesis</option>
            <option value="descomposición">Descomposición</option>
            <option value="sustitución">Sustitución</option>
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
