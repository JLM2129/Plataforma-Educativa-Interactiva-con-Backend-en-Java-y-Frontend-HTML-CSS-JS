// src/componentes/calculo/CalculoEjercicios.jsx
import { useCalculo } from "../data/useCalculo";

export default function CalculoEjercicios() {
  const {
    ejercicio,
    respuesta,
    setRespuesta,
    verificarEjercicio,
    feedback,
  } = useCalculo();

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicios Interactivos</h3>
      <p>Resuelve: <strong>{ejercicio.expresion}</strong></p>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Tu respuesta"
        className="txt-actividad"
      />
      <button className="btn-actividad" onClick={verificarEjercicio}>Comprobar</button>
      <p>{feedback}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más ejercicios
      </button>
    </div>
  );
}
