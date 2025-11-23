import { useState } from "react";

export default function EjercicioCompletar({ ejercicio }) {
  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState("");

  const verificar = () => {
    const valor = respuesta.trim().toLowerCase();
    const correcta = ejercicio.respuesta_correcta.toLowerCase();

    setResultado(valor === correcta
      ? "✅ ¡Correcto!"
      : "❌ Incorrecto. Intenta de nuevo.");
  };

  return (
    <div>
      <p>{ejercicio.pregunta}</p>
      <input
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        placeholder="Escribe tu respuesta aquí"
      />
      <button className="verificar" onClick={verificar}>Verificar</button>
      <p>{resultado}</p>
    </div>
  );
}
