import React, { useEffect, useState } from "react";

const JuegoFigura = () => {
  const figuras = ["Círculo", "Triángulo", "Cuadrado", "Pentágono"];
  const correcta = "Triángulo";

  const [opciones, setOpciones] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    generarOpciones();
  }, []);

  const generarOpciones = () => {
    let opcionesMezcladas = figuras.sort(() => Math.random() - 0.5).slice(0, 3);
    if (!opcionesMezcladas.includes(correcta)) {
      opcionesMezcladas[Math.floor(Math.random() * 3)] = correcta;
    }
    setOpciones(opcionesMezcladas);
    setMensaje("");
    setColor("");
  };

  const verificar = (opcion) => {
    if (opcion === correcta) {
      setMensaje("¡Bien hecho! Tiene tres lados.");
      setColor("green");
    } else {
      setMensaje("Incorrecto. Intenta con otra figura.");
      setColor("red");
    }
    setTimeout(() => generarOpciones(), 1500);
  };

  return (
    <div className="bloque juego-figura">
      <h3>🎮 Juegos con figuras geométricas</h3>
      <p>¿Cuál de estas figuras tiene 3 lados?</p>
      <div className="btn.actividad">
        {opciones.map((figura, idx) => (
          <button className="btn-actividad" key={idx} onClick={() => verificar(figura)}>{figura}</button>
        ))}
      </div>
      <p style={{ color }}>{mensaje}</p>
    </div>
  );
};

export default JuegoFigura;
