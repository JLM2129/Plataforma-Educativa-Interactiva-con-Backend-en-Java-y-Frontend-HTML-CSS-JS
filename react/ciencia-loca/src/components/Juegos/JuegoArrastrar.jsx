import { useEffect, useRef } from "react";

export default function JuegoArrastrar({ juego }) {
  const contenedorRef = useRef(null);

  let datos = {};
  try {
    datos = typeof juego.dataJson === "string"
      ? JSON.parse(juego.dataJson)
      : (juego.dataJson || juego.datos || {});
  } catch (e) {
    console.error("❌ Error al parsear datos del juego:", e);
  }

  useEffect(() => {
    if (!datos.items || !datos.respuesta_correcta) return;

    const contenedor = contenedorRef.current;

    contenedor.innerHTML = `
      <p>${juego.descripcion}</p>
      <div id="zona-items" style="display: flex; gap: 10px; margin-bottom: 20px;"></div>
      <div id="zona-destino" style="min-height: 80px; border: 2px dashed #333; padding: 10px;">
        <p>Arrastra aquí los números correctos</p>
      </div>
      <button id="verificar-btn" style="background-color: #6fa8dc; color: white;border: none;padding: 10px 20px;border-radius: 8px;font-size: 1rem;font-weight: bold;cursor: pointer;display: block;margin: 10px auto;">Verificar</button>
      <p id="resultado"></p>
    `;

    const zonaItems = contenedor.querySelector("#zona-items");
    const zonaDestino = contenedor.querySelector("#zona-destino");
    const resultado = contenedor.querySelector("#resultado");

    datos.items.forEach((num) => {
      const el = document.createElement("div");
      el.textContent = num;
      el.setAttribute("draggable", true);
      el.dataset.valor = num;
      el.style.padding = "10px";
      el.style.border = "1px solid #333";
      el.style.cursor = "grab";
      el.style.backgroundColor = "#eee";

      el.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", num);
      });

      zonaItems.appendChild(el);
    });

    zonaDestino.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    zonaDestino.addEventListener("drop", (e) => {
      e.preventDefault();
      const valor = e.dataTransfer.getData("text/plain");
      if (valor) {
        const yaExiste = [...zonaDestino.children].some(
          (child) => child.dataset?.valor === valor
        );
        if (!yaExiste) {
          const dropEl = document.createElement("div");
          dropEl.textContent = valor;
          dropEl.dataset.valor = valor;
          dropEl.style.padding = "10px";
          dropEl.style.border = "1px solid #666";
          dropEl.style.margin = "5px";
          dropEl.style.backgroundColor = "#cfc";

          zonaDestino.appendChild(dropEl);
        }
      }
    });

    contenedor.querySelector("#verificar-btn").addEventListener("click", () => {
      const seleccionados = [
        ...zonaDestino.querySelectorAll("div[data-valor]"),
      ].map((el) => el.dataset.valor);
      const correctos = datos.respuesta_correcta;

      const todosSonCorrectos = seleccionados.every((v) =>
        correctos.includes(v)
      );
      const cantidadCorrecta = seleccionados.length === correctos.length;

      if (todosSonCorrectos && cantidadCorrecta) {
        resultado.textContent = "✅ ¡Correcto!";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "❌ Intenta de nuevo.";
        resultado.style.color = "red";
      }
    });
  }, [datos, juego.descripcion]);

  if (!datos.items || !datos.respuesta_correcta) {
    return <p>⚠️ Este juego no tiene datos válidos.</p>;
  }

  return <div ref={contenedorRef}></div>;
}
