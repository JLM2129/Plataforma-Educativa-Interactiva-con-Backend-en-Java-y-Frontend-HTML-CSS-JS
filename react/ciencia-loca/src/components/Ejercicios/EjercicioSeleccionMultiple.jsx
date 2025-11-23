import { useState } from "react";

export default function EjercicioSeleccionMultiple({ ejercicio }) {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState("");
  const [resultado, setResultado] = useState("");

  const verificar = () => {
    if (!respuestaSeleccionada) {
      setResultado("Selecciona una opción.");
      return;
    }

    const esCorrecta = respuestaSeleccionada === ejercicio.respuesta_correcta;
    setResultado(esCorrecta ? "✅ ¡Correcto!" : "❌ Incorrecto. Intenta de nuevo.");
  };

  const opciones = typeof ejercicio.opciones === "string"
    ? JSON.parse(ejercicio.opciones)
    : ejercicio.opciones;

  return (
    <div>
      <p>{ejercicio.pregunta}</p>
      <ul>
        {opciones.map((opcion, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name={`preg-${ejercicio.id}`}
                value={opcion}
                onChange={(e) => setRespuestaSeleccionada(e.target.value)}
              />
              {opcion}
            </label>
          </li>
        ))}
      </ul>
      <button className="verificar" onClick={verificar}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
}
