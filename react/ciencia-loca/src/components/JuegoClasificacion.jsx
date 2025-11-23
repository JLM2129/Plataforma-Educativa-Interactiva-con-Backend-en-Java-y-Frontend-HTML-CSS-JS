// src/components/JuegoClasificacion.jsx
import useElectricidad from "../data/useElectricidad";

export default function JuegoClasificacion() {
  const {
    elementos, clasificacion, actualizarClasificacion,
    verificarClasificacion, resultadosClasificacion
  } = useElectricidad();

  return (
    <div className="bloque ejercicios">
        <h3>✍️ Ejercicio de Clasificación</h3>
      <p>Clasifica materiales:</p>
      {elementos.map((e, i) => (
        <div key={i}>
          <span>{e.nombre}</span>
          <select 
            value={clasificacion[i]}
            onChange={e1 => actualizarClasificacion(i, e1.target.value)}
          >
            <option className="opt-actividad" value="">--</option>
            <option className="opt-actividad" value="conductor">Conductor</option>
            <option className="opt-actividad" value="aislante">Aislante</option>
          </select>
        </div>
      ))}
      <button className="btn-actividad" onClick={verificarClasificacion}>Verificar</button>
      {resultadosClasificacion && <p>✅ Aciertos: {resultadosClasificacion}</p>}
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más ejercicios
          </button>
    </div>
  );
}
