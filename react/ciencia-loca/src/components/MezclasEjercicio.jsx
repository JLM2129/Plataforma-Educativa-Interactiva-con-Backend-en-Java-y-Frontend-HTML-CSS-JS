import useMezclas from "../data/useMezclas";

export default function MezclasEjercicio() {
  const { pregunta, respuesta, setRespuesta, verificar, feedback } = useMezclas();

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicio Interactivo</h3>
      <p>{pregunta.pregunta}</p>
      <input
        className="txt-actividad"
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Tu respuesta"
      />
      <button className="btn-actividad" onClick={verificar}>Comprobar</button>
      <p>{feedback}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más ejercicios
      </button>
    </div>
  );
}
