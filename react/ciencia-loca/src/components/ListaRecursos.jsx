// src/components/ListaRecursos.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListaRecursos({ idSubtema }) {
  const [recursos, setRecursos] = useState([]);

  useEffect(() => {
    if (!idSubtema) return;
    axios.get(`http://localhost:8080/api/recursos/subtema/${idSubtema}`)
      .then(res => setRecursos(res.data))
      .catch(err => console.error("Error cargando recursos:", err));
  }, [idSubtema]);

  return (
    <ul id="lista-recursos">
      {recursos.map((r, i) => (
        <li key={i}>
          <strong>{r.titulo}</strong><br />
          {r.tipo === "video" ? (
            <a href={r.url} target="_blank" rel="noopener noreferrer">Ver video educativo</a>
          ) : (
            <a href={r.url} target="_blank" download>Descargar PDF</a>
          )}
          <br />
          <small>{r.descripcion || ""}</small>
        </li>
      ))}
    </ul>
  );
}
