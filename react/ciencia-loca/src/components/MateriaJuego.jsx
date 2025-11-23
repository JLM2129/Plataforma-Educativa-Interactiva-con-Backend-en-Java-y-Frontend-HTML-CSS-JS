import useMateria from "../data/useMateria";

export default function MateriaJuego() {
  const {
    enunciado,
    resultadoFV,
    responderFV
  } = useMateria();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego: ¿Falso o Verdadero?</h3>
      <p>"{enunciado.frase}"</p>
      <button className="btn-actividad" onClick={() => responderFV(true)}>Verdadero</button>
      <button className="btn-actividad" onClick={() => responderFV(false)}>Falso</button>
      <p>{resultadoFV}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}
