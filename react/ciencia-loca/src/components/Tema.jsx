// src/components/Tema.jsx
import React from 'react';

export default function Tema({ titulo, imagen, dataId, onClick }) {
  return (
    <div
      className="tarjeta tema"
      data-id={dataId}
      onClick={onClick}
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="titulo-tema">{titulo}</div>
    </div>
  );
}
