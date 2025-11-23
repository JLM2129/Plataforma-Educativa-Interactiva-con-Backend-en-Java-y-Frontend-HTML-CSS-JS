import { useEffect, useState } from "react";

export default function EjercicioMatematico() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");

  const generar = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setRespuesta("");
    setFeedback("");
  };

  useEffect(() => {
    generar();
  }, []);

  const verificar = () => {
    if (parseInt(respuesta) === num1 + num2) {
      setFeedback("¡Correcto! 🎉");
    } else {
      setFeedback("Intenta de nuevo 🤔");
    }
    setTimeout(generar, 1500);
  };

  return (
    <div className="bloque ejercicios">
      <h3>✍️ Ejercicios Interactivos</h3>
      <p>¿Cuánto es {num1} + {num2}?</p>
      <input className="txt-actividad"
        type="number"
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
