// src/components/Subtarjetas.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Subtarjetas({ subtemas, onClick  }) {
   const { id } = useParams();
  return (
    <div className="subtarjetas">
      <div className="contenedor-scroll">
        {subtemas.map((sub, index) => (
          <button key={sub.id || index}  className="tarjeta subtema" onClick={() => onClick(sub.id)}>
            {sub.titulo || sub}
          </button>
        ))}
      </div>
    </div>
  );
}


