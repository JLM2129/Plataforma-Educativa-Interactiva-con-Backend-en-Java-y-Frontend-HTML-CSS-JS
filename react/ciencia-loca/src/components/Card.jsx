import React from "react";
import "./Tarjeta.css";
import { Link } from "react-router-dom";

function Card({ icono, titulo, descripcion, link, delay, onHover }) {
  return (
    <Link
      to={link}
      className="card"
      data-aos="zoom-in"
      data-aos-delay={delay}
      onMouseEnter={onHover}
    >
      <div className="icono">{icono}</div>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </Link>
  );
}

export default Card;
