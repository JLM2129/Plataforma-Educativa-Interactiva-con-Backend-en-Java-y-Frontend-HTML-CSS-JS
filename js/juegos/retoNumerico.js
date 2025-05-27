function iniciarJuegoContrarreloj(juego, contenedor) {
  const preguntas = juego.data_json.preguntas;
  const tiempoLimite = juego.data_json.tiempo_limite;
  let indice = 0;
  let puntos = 0;
  let tiempoRestante = tiempoLimite;

  const mostrarPregunta = () => {
    if (indice >= preguntas.length) {
      contenedor.innerHTML = `<p>Juego terminado. Puntos: ${puntos}</p>`;
      return;
    }

    const p = preguntas[indice];
    contenedor.innerHTML = `
      <p>¿Cuántos números hay entre ${p.inicio} y ${p.fin}?</p>
      <input type="number" id="respuesta-${juego.id}" />
      <button onclick="verificarRespuestaReto('${p.respuesta}', ${juego.id})">Verificar</button>
      <p id="tiempo-${juego.id}">Tiempo restante: ${tiempoRestante}s</p>
      <p id="resultado-juego-${juego.id}"></p>
    `;
  };

  const intervalo = setInterval(() => {
    tiempoRestante--;
    const tiempoEl = document.getElementById(`tiempo-${juego.id}`);
    if (tiempoEl) tiempoEl.textContent = `Tiempo restante: ${tiempoRestante}s`;

    if (tiempoRestante <= 0) {
      clearInterval(intervalo);
      contenedor.innerHTML += `<p>Se acabó el tiempo. Puntos: ${puntos}</p>`;
    }
  }, 1000);

  window[`verificarRespuestaReto`] = (respuestaCorrecta, juegoId) => {
    const input = document.getElementById(`respuesta-${juegoId}`);
    const resultado = document.getElementById(`resultado-juego-${juegoId}`);
    if (input.value === respuestaCorrecta) {
      resultado.textContent = "¡Correcto!";
      puntos++;
    } else {
      resultado.textContent = "Incorrecto";
    }
    indice++;
    mostrarPregunta();
  };

  mostrarPregunta();
}
