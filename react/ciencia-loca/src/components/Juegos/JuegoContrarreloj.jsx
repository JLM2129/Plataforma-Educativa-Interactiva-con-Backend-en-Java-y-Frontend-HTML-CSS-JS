import { useEffect, useState } from "react";

export default function JuegoContrarreloj({ juego }) {
  const datos = JSON.parse(juego.dataJson || juego.datos || "{}");
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [respuesta, setRespuesta] = useState("");
  const [feedback, setFeedback] = useState("");
  const [tiempo, setTiempo] = useState(datos.tiempo_limite || 30);
  const [terminado, setTerminado] = useState(false);
  const [activo, setActivo] = useState(false); // nuevo estado: juego iniciado o no
  const [aciertos, setAciertos] = useState(0);
  useEffect(() => {
    if (!activo || terminado) return;

    const timer = setInterval(() => {
      setTiempo(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setTerminado(true);
          setActivo(false); // detener juego al terminar
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activo, terminado]);

  const iniciarJuego = () => {
    setPreguntaIndex(0);
    setRespuesta("");
    setFeedback("");
    setTiempo(datos.tiempo_limite || 30);
    setTerminado(false);
    setActivo(true);
    setAciertos(0);
  };

  const pregunta = datos.preguntas?.[preguntaIndex];

  const textoPregunta = pregunta?.inicio !== undefined
    ? `¿Cuántos números hay entre ${pregunta.inicio} y ${pregunta.fin}?`
    : pregunta?.numero !== undefined
      ? `¿El número "${pregunta.numero}" es cardinal u ordinal?`
      : pregunta?.valor1 !== undefined
      ? `¿entre los valores ${pregunta.valor1} y ${pregunta.valor2} responde >, < o =?`
      : pregunta?.num !== undefined
      ?`¿En el número "${pregunta.num}" el ${pregunta.num1} es unidad o decena?`
      : "Pregunta no reconocida.";

  const verificar = () => {
    const correcta = String(pregunta.respuesta).toLowerCase();
    if (respuesta.trim().toLowerCase() === correcta) {
      setFeedback("✅ ¡Correcto!");
      setRespuesta("");
      setAciertos(prev => prev + 1); 
      if (preguntaIndex + 1 < datos.preguntas.length) {
        setPreguntaIndex(prev => prev + 1);
      } else {
        setTerminado(true);
        setActivo(false);
      }
    } else {
      setFeedback("❌ Incorrecto. Intenta de nuevo.");
    }
  };

  return (
    <div className="juego-contrarreloj">
      <p>{juego.descripcion}</p>

      {activo && !terminado && (
        <>
          <p>{textoPregunta}</p>
          <input
            type="text"
            value={respuesta}
            onChange={e => setRespuesta(e.target.value)}
            placeholder="Tu respuesta"
            disabled={terminado}
          />
          <button className="verificar" onClick={verificar} disabled={terminado}>
            Verificar
          </button>
          <p>{feedback}</p>
          <p>⏱ Tiempo restante: {tiempo}s</p>
        </>
      )}

      {!activo && (
        <button className="iniciar" onClick={iniciarJuego}>
          {terminado ? "🔁 Volver a Jugar" : "▶️ Iniciar Juego"}
        </button>
      )}

      {terminado && <p>✅ Juego terminado.Aciertos: {aciertos} de {datos.preguntas.length}</p>}
      
    </div>
  );
}
