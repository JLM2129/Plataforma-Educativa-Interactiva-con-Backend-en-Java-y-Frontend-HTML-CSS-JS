// src/pages/Matematicas/Basicas.jsx
import React, { useEffect, useState } from "react";
import VideoExplicativo from "../../components/VideoExplicativo";
import EjercicioMatematico from "../../components/EjercicioMatematico";
import JuegoMatematico from "../../components/JuegoMatematico";
import PDFDescargable from "../../components/PDFDescargable";
import logo from "/Users/HP/Documents/react/ciencia-loca/public/logo.jpg";

export default function Basicas() {
  return (
    <section className="tema">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <div className="titulo-seccion">
        <h2>🔢 Matemáticas Básicas</h2>
        <p>¡Aprende jugando y diviértete con los números!</p>
      </div>

      <div className="contenedor-contenido">
        <VideoExplicativo 
        titulo="🎥 Videos Explicativos"
        url="https://www.youtube.com/embed/HfGxXf9D_c8" />

        <EjercicioMatematico />

        <JuegoMatematico />

        <PDFDescargable
          titulo="📚 PDFs Descargables"
          url="/pdfs/numeros-operaciones.pdf"
          texto="📄 Descargar guía en PDF"
        />
      </div>
    </section>
  );
}
