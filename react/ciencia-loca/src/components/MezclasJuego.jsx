import useMezclas from "../data/useMezclas";

export default function MezclasJuego() {
  const { preguntaOpcion, verificarOpcion, resultado } = useMezclas();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: Pregunta de opción múltiple</h3>
      <p>{preguntaOpcion.pregunta}</p>
      {preguntaOpcion.opciones?.map((op, i) => (
        <button key={i} className="btn-actividad" onClick={() => verificarOpcion(op)}>
          {op}
        </button>
      ))}
      <p>{resultado}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}
