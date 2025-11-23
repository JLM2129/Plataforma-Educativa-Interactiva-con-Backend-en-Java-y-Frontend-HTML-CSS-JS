// src/components/JuegoMatematico.jsx
import { useEffect, useState } from "react";

export default function JuegoMatematico() {
  const [opciones, setOpciones] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const generarOpciones = () => {
    const numeros = new Set();
    while (numeros.size < 2) {
      numeros.add(Math.floor(Math.random() * 20) * 2 + 1); // impares
    }
    const numeroPar = Math.floor(Math.random() * 10) * 2; // número par
    numeros.add(numeroPar);

    const mezclados = Array.from(numeros).sort(() => Math.random() - 0.5);
    setOpciones(mezclados);
  };

  const verificar = (num) => {
    if (num % 2 === 0) {
      setMensaje("¡Correcto! Es par 🎉");
    } else {
      setMensaje("¡Incorrecto! Ese no es par ❌");
    }

    setTimeout(() => {
      setMensaje("");
      generarOpciones();
    }, 1500);
  };

  useEffect(() => {
    generarOpciones();
  }, []);

  return (
    <div className="bloque juegos">
      <h3>🎮 Juegos Matemáticos</h3>
      <p>¿Cuál de estos números es par?</p>
      <div className="botones-juego">
        {opciones.map((num, idx) => (
          <button className="btn-actividad" key={idx} onClick={() => verificar(num)}>
            {num}
          </button>
        ))}
      </div>
      <p>{mensaje}</p>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más juegos
      </button>
    </div>
  );
}
