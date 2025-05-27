function iniciarJuegoArrastrar(juego, contenedor) {
  const items = juego.data_json.items;
  const respuestaCorrecta = juego.data_json.respuesta_correcta;

  // Barajar los ítems
  const mezclados = [...items].sort(() => Math.random() - 0.5);

  contenedor.innerHTML = `
    <div class="zona-arrastrar" id="zona-${juego.id}">
      ${mezclados.map(item => `<div class="draggable" draggable="true">${item}</div>`).join("")}
    </div>
    <button onclick="verificarOrden(${JSON.stringify(respuestaCorrecta)}, 'zona-${juego.id}', 'resultado-juego-${juego.id}')">Verificar</button>
  `;

  // Lógica de arrastrar y soltar
  activarDragAndDrop(`zona-${juego.id}`);
}

function activarDragAndDrop(contenedorId) {
  const zona = document.getElementById(contenedorId);
  let elementoArrastrado = null;

  zona.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("draggable")) {
      elementoArrastrado = e.target;
    }
  });

  zona.addEventListener("dragover", (e) => e.preventDefault());

  zona.addEventListener("drop", (e) => {
    if (e.target.classList.contains("draggable") && elementoArrastrado) {
      const temp = e.target.innerHTML;
      e.target.innerHTML = elementoArrastrado.innerHTML;
      elementoArrastrado.innerHTML = temp;
    }
  });
}

function verificarOrden(respuesta, zonaId, resultadoId) {
  const zona = document.getElementById(zonaId);
  const items = Array.from(zona.children).map(div => div.textContent);
  const correcto = JSON.stringify(items) === JSON.stringify(respuesta);
  document.getElementById(resultadoId).textContent = correcto ? "¡Correcto!" : "Intenta de nuevo";
}
