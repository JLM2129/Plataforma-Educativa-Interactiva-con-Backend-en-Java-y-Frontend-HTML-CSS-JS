// src/pages/IndexMatematicas.jsx
import { useEffect, useRef } from "react";
import "../pages/global.css";
import { Link } from "react-router-dom";

export default function IndexMatematicas() {
  const figurasRef = useRef([]);

  useEffect(() => {
    // Lógica para explotar figuras
    const figuras = figurasRef.current;

    figuras.forEach(figura => {
      figura.addEventListener("click", () => {
        const parent = figura.parentNode;
        const nextSibling = figura.nextSibling;
        const figuraRect = figura.getBoundingClientRect();

        figura.classList.add("explotar");
        crearParticulas(figuraRect);

        setTimeout(() => {
          figura.remove();

          setTimeout(() => {
            const nuevaFigura = figura.cloneNode(true);
            nuevaFigura.classList.remove("explotar");
            nuevaFigura.style.animation = figura.style.animation;
            const nuevaPosicion = Math.floor(Math.random() * 90) + 5;
            nuevaFigura.style.left = `${nuevaPosicion}%`;

            parent.insertBefore(nuevaFigura, nextSibling);
            asignarEventoExplotar(nuevaFigura);
          }, 2000);
        }, 500);
      });
    });

    function crearParticulas(rect) {
      const cantidad = 15;
      const simbolos = ["0", "1", "2", "3", "4", "5", "π", "x²", "√", "∞", "∑", "e", "7", "8", "9"];
      for (let i = 0; i < cantidad; i++) {
        const numero = document.createElement("div");
        numero.classList.add("particula");
        numero.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
        numero.style.left = `${rect.left + rect.width / 2}px`;
        numero.style.top = `${rect.top + rect.height / 2}px`;
        numero.style.fontSize = "20px";
        numero.style.fontWeight = "bold";
        numero.style.color = "#ff6600";

        document.body.appendChild(numero);

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 60 + 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        numero.animate(
          [
            { transform: "translate(0, 0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
          ],
          {
            duration: 800,
            easing: "ease-out"
          }
        );

        setTimeout(() => numero.remove(), 800);
      }
    }

    function asignarEventoExplotar(figura) {
      figura.addEventListener("click", () => {
        const parent = figura.parentNode;
        const nextSibling = figura.nextSibling;
        const figuraRect = figura.getBoundingClientRect();

        figura.classList.add("explotar");
        crearParticulas(figuraRect);

        setTimeout(() => {
          figura.remove();
          setTimeout(() => {
            const nuevaFigura = figura.cloneNode(true);
            nuevaFigura.classList.remove("explotar");
            nuevaFigura.style.animation = figura.style.animation;
            const nuevaPosicion = Math.floor(Math.random() * 90) + 5;
            nuevaFigura.style.left = `${nuevaPosicion}%`;

            parent.insertBefore(nuevaFigura, nextSibling);
            asignarEventoExplotar(nuevaFigura);
          }, 2000);
        }, 500);
      });
    }

    // Habilitar sonido con hover
    const sonido = document.getElementById("hoverSound");
    const tarjetas = document.querySelectorAll(".tarjeta");
    let sonidoHabilitado = false;

    document.body.addEventListener("click", () => {
      if (!sonidoHabilitado) {
        sonido.play().then(() => {
          sonido.pause();
          sonido.currentTime = 0;
          sonidoHabilitado = true;
        }).catch(() => {});
      }
    });

    tarjetas.forEach(tarjeta => {
      tarjeta.addEventListener("mouseenter", () => {
        if (sonidoHabilitado) {
          sonido.currentTime = 0;
          sonido.play().catch(() => {});
        }
      });
    });

  }, []);

  return (
    <section className="matematicas-basicas sin-scroll">
      <div className="logo">
        <img src="/logo.jpg" alt="logo" />
      </div>

      <div className="titulo-seccion">
        <h2>📐 Explora los Temas de Matemáticas Locas</h2>
        <p>Desde lo más básico hasta los desafíos de secundaria</p>
      </div>

      <div className="contenedor-contenido">
        <Link to="/matematicas/basicas" className="bloque">
          <h3>📘 Matemáticas Básicas</h3>
          <p>Aprende los conceptos más elementales: sumas, restas, números y más.</p>
        </Link>

        <a href="/matematicas/figuras" className="bloque">
          <h3>📐 Figuras Geométricas</h3>
          <p>Descubre triángulos, círculos, polígonos y sus propiedades.</p>
        </a>

        <a href="/matematicas/algebra" className="bloque">
          <h3>📊 Álgebra</h3>
          <p>Empieza a usar letras y fórmulas para resolver problemas.</p>
        </a>

        <a href="/matematicas/trigonometria" className="bloque">
          <h3>📏 Trigonometría</h3>
          <p>Aprende sobre ángulos, triángulos y funciones trigonométricas.</p>
        </a>

        <a href="/matematicas/calculo" className="bloque">
          <h3>🧮 Cálculo Diferencial</h3>
          <p>Conceptos básicos de límites, derivadas y su aplicación.</p>
        </a>
      </div>

      {/* Figuras flotantes */}
      <div className="figura cuadrado flotante" style={{ left: "20%", animationDelay: "0s" }} ref={el => figurasRef.current[0] = el}></div>
      <div className="figura circulo flotante" style={{ left: "40%", animationDelay: "3s" }} ref={el => figurasRef.current[1] = el}></div>
      <div className="figura triangulo flotante" style={{ left: "60%", animationDelay: "6s" }} ref={el => figurasRef.current[2] = el}></div>
      <div className="figura cuadrado flotante" style={{ left: "80%", animationDelay: "1s" }} ref={el => figurasRef.current[3] = el}></div>

      <audio id="hoverSound" src="/hover.mp3" preload="auto" />
    </section>
  );
}
