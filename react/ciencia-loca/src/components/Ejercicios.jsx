// src/components/Ejercicios.jsx
import { useEffect, useState } from "react";
import axios from "axios";

import EjercicioSeleccionMultiple from "./Ejercicios/EjercicioSeleccionMultiple";
import EjercicioCompletar from "./Ejercicios/EjercicioCompletar";

export default function Ejercicios({ idSubtema }) {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    if (!idSubtema) return;
    axios.get(`http://localhost:8080/api/ejercicios/${idSubtema}`)
      .then(res => setEjercicios(res.data))
      .catch(err => console.error("Error cargando ejercicios:", err));
  }, [idSubtema]);

  const renderEjercicio = (ejercicio) => {
    switch (ejercicio.tipo) {
      case "seleccion_multiple":
        return <EjercicioSeleccionMultiple ejercicio={ejercicio} />;
      case "completar":
        return <EjercicioCompletar ejercicio={ejercicio} />;
      default:
        return <p>⚠️ Tipo de ejercicio no soportado: {ejercicio.tipo}</p>;
    }
  };

  return (
    <section className="actividades">
      <h2>📘 Ejercicios</h2>
      <div className="ejercicio" id="ejercicios-container">
        {ejercicios.map((ej, i) => (
          <div key={i} className="ejercicio-box">
            <h3>Ejercicio {i + 1}: {ej.tipo}</h3>
            {renderEjercicio(ej)}
          </div>
        ))}
      </div>
    </section>
  );
}
