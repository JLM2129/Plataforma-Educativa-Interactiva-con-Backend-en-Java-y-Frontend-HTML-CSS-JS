import { useAtomos } from "../../data/useAtomos";

export default function EjercicioAtomos() {
  const { pregunta, respuesta, setRespuesta, feedback, verificarRespuesta } = useAtomos();

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio: Átomos y Moléculas</h3>
      <p>{pregunta}</p>
      <input
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