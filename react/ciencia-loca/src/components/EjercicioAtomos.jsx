import { useAtomos } from "../data/useAtomos";

export default function EjercicioAtomos() {
  const {
    pregunta,
    respuestaTexto,
    setRespuestaTexto,
    feedback,
    verificarRespuesta
  } = useAtomos();

  if (!pregunta) return <p>Cargando pregunta...</p>;

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio: Átomos y Moléculas</h3>
      <p>{pregunta.pregunta}</p>

      <input className="txt-actividad"
        type="text"
        value={respuestaTexto}
        onChange={(e) => setRespuestaTexto(e.target.value)}
        placeholder="Tu respuesta"
      />
      <button className="btn-actividad" onClick={verificarRespuesta}>Comprobar</button>
      <p>{feedback}</p>
      <button
        className="btn-accion"
        onClick={() => alert("Debes estar registrado para acceder a este contenido.")}
      >
        Ver más ejercicios
      </button>
    </div>
  );
}
