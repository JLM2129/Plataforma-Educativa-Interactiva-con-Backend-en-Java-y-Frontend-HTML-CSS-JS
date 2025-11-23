import { useEffect, useState } from "react";
import { useAlgebra } from "../data/useAlgebra";

export default function AlgebraInteractivo() {
  const { expresion, verificarRespuesta, generarExpresion } = useAlgebra();
  const [respuesta, setRespuesta] = useState("");
  const [resultado, setResultado] = useState(null);

  function manejarVerificacion() {
    setResultado(verificarRespuesta(respuesta));
  }
useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise(); // Esto le dice a MathJax que actualice
    }
  }, [expresion]); // Se ejecuta cada vez que cambia la expresión

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicios Interactivos </h3>
      <p>
  Resuelve: <span dangerouslySetInnerHTML={{ __html: expresion }} />
</p>

      <input className="txt-actividad"
        type="text"
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
      />
      <button className="btn-actividad" onClick={manejarVerificacion}>Verificar</button>
      {resultado !== null && (
        <p>{resultado ? "¡Correcto!" : "Intenta de nuevo."}</p>
      )}
      <button className="btn-accion" onClick={generarExpresion}>Nueva Expresión</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más ejercicios
      </button>
    </div>
  );
}

 