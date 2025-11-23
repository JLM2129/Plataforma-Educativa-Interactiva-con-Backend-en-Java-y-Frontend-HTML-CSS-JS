import { useEffect, useState } from "react";
import { useTrigonometria } from "../data/useTrigonometria";

export default function TrigonometriaInteractivo() {
  const { pregunta, verificarRespuesta, generarPregunta } = useTrigonometria();
  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState(null);

  function manejarVerificacion() {
    setResultado(verificarRespuesta(respuesta));
  }

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicios Interactivos </h3>
      <p>{pregunta}</p>
      <input className="txt-actividad"
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />
      <button className="btn-actividad" onClick={manejarVerificacion}>Verificar</button>
      {resultado !== null && (
        <p>{resultado ? "¡Correcto!" : "Intenta de nuevo."}</p>
      )}
      <button className="btn-accion" onClick={generarPregunta}>Nueva Pregunta</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más ejercicios
      </button>
    </div>
  );
}
