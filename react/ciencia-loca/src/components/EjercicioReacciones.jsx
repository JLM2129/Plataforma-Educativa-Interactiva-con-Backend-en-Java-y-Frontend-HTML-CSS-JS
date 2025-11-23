import { useReacciones } from "../data/useReacciones";

export default function EjercicioReacciones() {
  const { pregunta, respuesta, setRespuesta, feedback, verificarRespuesta } = useReacciones();

  if (!pregunta) {
    return <p className="bloque ejercicios">⏳ Cargando pregunta...</p>;
  }

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio: Reacciones Químicas</h3>
      <p>{pregunta.pregunta}</p>
      <input className="txt-actividad"
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Tu respuesta"
      />
      <button className="btn-actividad" onClick={verificarRespuesta}>Comprobar</button>
      <p>{feedback}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más ejercicios
      </button>
    </div>
  );
}

