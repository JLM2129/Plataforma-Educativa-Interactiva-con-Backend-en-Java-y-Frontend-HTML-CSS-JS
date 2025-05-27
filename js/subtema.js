// Obtener el ID del subtema desde la URL
const params = new URLSearchParams(window.location.search);
const idSubtema = params.get("id") || params.get("idSubtema");




// Cargar subtema y materiales
async function cargarSubtema() {
  try {
    const response = await fetch(`http://localhost:8080/api/subtemas/${idSubtema}`);
    const subtema = await response.json();
    document.getElementById("titulo-subtema").textContent = subtema.nombre;

    const contenidoDiv = document.getElementById("contenido-subtema");
    const contenidoImagen = document.getElementById("contenido-imagen")
    const resMateriales = await fetch(`http://localhost:8080/api/materiales/subtema/${idSubtema}`);
    const materiales = await resMateriales.json();

    materiales.forEach(m => {
      if (m.tipo === "imagen") {
        const img = document.createElement("img");
        img.src = `/imagenes/${m.urlImagen}`;
        img.alt = "Imagen de contenido";
        img.style.maxWidth = "100%";
        contenidoImagen.appendChild(img);
      } else if (m.tipo === "video") {
        const video = document.createElement("video");
        video.src = `/videos/${m.urlImagen}`;
        video.controls = true;
        contenidoImagen.appendChild(video);
      } else if (m.tipo === "texto") {
        const p = document.createElement("p");
        p.innerHTML = m.contenido;
        contenidoDiv.appendChild(p);
      }
    });
  } catch (error) {
    console.error("Error al cargar el subtema:", error);
  }
}

// Navegar a otro tema
function irATema(element) {
  const idTema = element.getAttribute("data-id");
  window.location.href = `tema.html?id=${idTema}`;
}

// Navegar a otro subtema desde una tarjeta
function irASubtema(event) {
  const tarjeta = event.currentTarget.closest(".tarjeta");
  if (!tarjeta) return;
  const idSubtema = tarjeta.getAttribute("subtema-id");
  if (idSubtema) {
    window.location.href = `subtema.html?id=${idSubtema}`;
  }
}

// Cargar toda la información cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tarjeta").forEach(tarjeta => {
    tarjeta.addEventListener("click", irASubtema);
  });

  if (!idSubtema) {
    console.error("ID de subtema no especificado en la URL.");
    return;
  }

  cargarSubtema();
  cargarRecursos(idSubtema);
  cargarEjercicios(idSubtema);
  cargarJuegos(idSubtema);
});

async function cargarRecursos(idSubtema) {
  try {
    const res = await fetch(`http://localhost:8080/api/recursos/subtema/${idSubtema}`);
    const recursos = await res.json();
    const lista = document.getElementById("lista-recursos");
    lista.innerHTML = ""; // Limpiar antes

    recursos.forEach(r => {
      const li = document.createElement("li");

      if (r.tipo === "video") {
        li.innerHTML = `
          <strong>${r.titulo}</strong><br>
          <a href="${r.url}" target="_blank">Ver video educativo</a><br>
          <small>${r.descripcion || ""}</small>
        `;
      } else if (r.tipo === "pdf") {
        li.innerHTML = `
          <strong>${r.titulo}</strong><br>
          <a href="${r.url}" target="_blank" download>Descargar PDF</a><br>
          <small>${r.descripcion || ""}</small>
        `;
      }

      lista.appendChild(li);
    });

  } catch (error) {
    console.error("Error al cargar recursos educativos:", error);
  }
}

// Cargar juegos
function cargarJuegos(id) {
  fetch(`http://localhost:8080/api/juegos/${id}`)
    .then(response => response.json())
    .then(juegos => mostrarJuegos(juegos))
    .catch(error => console.error("Error cargando los juegos:", error));
}


function mostrarJuegos(juegos) {
  const contenedor = document.getElementById("juegos-container");
  contenedor.innerHTML = "";

  juegos.forEach(juego => {
    const divJuego = document.createElement("div");
    
    divJuego.classList.add("juego");
    

    const titulo = document.createElement("h3");
    const titulo1 = document.createElement("h3")
    
    titulo.textContent = ` Tipo: ${juego.tipo}`;
    titulo1.textContent = `Juego: ${juego.titulo}`;

    divJuego.appendChild(titulo);
    divJuego.appendChild(titulo1);
    let datos;
    if (juego.tipo === "contrarreloj") {
  const descripcionDiv = document.createElement("div");
  const btnIniciar = document.createElement("button");
  btnIniciar.textContent = "Iniciar juego contrarreloj";

  const contenedorJuego = document.createElement("div"); // Aquí se mostrará el juego

  btnIniciar.addEventListener("click", () => {
    iniciarJuegoContrarreloj(contenedorJuego, juego.descripcion, JSON.parse(juego.dataJson), btnIniciar);
    btnIniciar.style.display = "none";
  });

  divJuego.appendChild(descripcionDiv);
  divJuego.appendChild(btnIniciar);
  divJuego.appendChild(contenedorJuego); // Este no se borra el botón
  contenedor.appendChild(divJuego);

}if (juego.tipo === "arrastrar"){
      const logica = document.createElement("div");
      generarLogicaJuego(juego,logica);

    divJuego.appendChild(logica);
    contenedor.appendChild(divJuego);

    }if (juego.tipo === "memoria") {
      const logica1 = document.createElement("div");
      generarLogicaJuego(juego,logica1);
    try {
      datos = JSON.parse(juego.dataJson);
    } catch (e) {
      console.error("Error al parsear data_json:", e);
      return;
    }
    divJuego.appendChild(logica1);
    contenedor.appendChild(divJuego);
  } else {
    datos = juego.dataJson; // u otro campo
  
  }
   
  });

}


  function generarLogicaJuego(juego, contenedor) {
  if (!juego || !juego.dataJson) {
    console.warn("Juego no definido o sin dataJson:", juego);
    contenedor.innerHTML = "<p>Juego no disponible.</p>";
    return;
  }

  let datos;
  try {
    datos = typeof juego.dataJson === 'string'
      ? JSON.parse(juego.dataJson)
      : juego.dataJson;
  } catch (e) {
    console.error("Error al parsear el contenido del juego:", e, juego.dataJson);
    contenedor.innerHTML = "<p>Error en el contenido del juego.</p>";
    return;
  }

  // Delegar al tipo de juego
  switch (juego.tipo) {
    case "arrastrar":
      iniciarJuegoArrastrar(contenedor, juego.descripcion, datos);
      break;
    case "contrarreloj":
      iniciarJuegoContrarreloj(contenedor, juego.descripcion, datos);
      break;
    case "memoria":
    
    iniciarJuegoMemoria(contenedor, juego.descripcion, datos);
    break;

    default:
      contenedor.innerHTML = "<p>Tipo de juego no soportado.</p>";
  }
}



function iniciarJuegoArrastrar(contenedor, descripcion, datos) {
  const { items, respuesta_correcta } = datos;

  contenedor.innerHTML = `
    <p>${descripcion}</p>
    <div id="zona-items" style="display: flex; gap: 10px; margin-bottom: 20px;"></div>
    <div id="zona-destino" style="min-height: 80px; border: 2px dashed #333; padding: 10px;">
      <p>Arrastra aquí los números correctos</p>
    </div>
    <button id="verificar-btn">Verificar</button>
    <p id="resultado"></p>
  `;

  const zonaItems = contenedor.querySelector('#zona-items');
  const zonaDestino = contenedor.querySelector('#zona-destino');
  const resultado = contenedor.querySelector('#resultado');

  items.forEach((num) => {
    const el = document.createElement('div');
    el.textContent = num;
    el.setAttribute('draggable', true);
    el.dataset.valor = num;
    el.style.padding = '10px';
    el.style.border = '1px solid #333';
    el.style.cursor = 'grab';
    el.style.backgroundColor = '#eee';

    el.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', num);
    });

    zonaItems.appendChild(el);
  });

  zonaDestino.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  zonaDestino.addEventListener('drop', (e) => {
    e.preventDefault();
    const valor = e.dataTransfer.getData('text/plain');
    if (valor) {
      const yaExiste = [...zonaDestino.children].some(child => child.dataset?.valor === valor);
      if (!yaExiste) {
        const dropEl = document.createElement('div');
        dropEl.textContent = valor;
        dropEl.dataset.valor = valor;
        dropEl.style.padding = '10px';
        dropEl.style.border = '1px solid #666';
        dropEl.style.margin = '5px';
        dropEl.style.backgroundColor = '#cfc';

        zonaDestino.appendChild(dropEl);
      }
    }
  });

  contenedor.querySelector('#verificar-btn').addEventListener('click', () => {
    const seleccionados = [...zonaDestino.querySelectorAll('div[data-valor]')].map(el => el.dataset.valor);
    const correctos = respuesta_correcta;

    const todosSonCorrectos = seleccionados.every(v => correctos.includes(v));
    const cantidadCorrecta = seleccionados.length === correctos.length;

    if (todosSonCorrectos && cantidadCorrecta) {
      resultado.textContent = "✅ ¡Correcto!";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "❌ Intenta de nuevo.";
      resultado.style.color = "red";
    }
  });
}



function iniciarJuegoContrarreloj(contenedor, descripcion, datos, btnIniciar) {
  let preguntaIndex = 0;
  let tiempoRestante = datos.tiempo_limite;
  let timerId;
  let juegoTerminado = false;

  contenedor.innerHTML = `
    <p>${descripcion}</p>
    <p id="pregunta-actual"></p>
    <input type="text" id="respuesta" placeholder="Tu respuesta" />
    <button id="verificar">Verificar</button>
    <p id="feedback"></p>
    <p>Tiempo restante: <span id="tiempo">${tiempoRestante}</span>s</p>
  `;

  const preguntaEl = contenedor.querySelector("#pregunta-actual");
  const tiempoEl = contenedor.querySelector("#tiempo");
  const input = contenedor.querySelector("#respuesta");
  const feedback = contenedor.querySelector("#feedback");

  function mostrarPregunta() {
    if (preguntaIndex >= datos.preguntas.length) {
      terminarJuego("Juego terminado.");
      return;
    }

    const p = datos.preguntas[preguntaIndex];

    // Determina el tipo de pregunta
    if (p.inicio !== undefined && p.fin !== undefined) {
      // Pregunta tipo "¿Cuántos números hay entre A y B?"
      preguntaEl.textContent = `¿Cuántos números hay entre ${p.inicio} y ${p.fin}?`;
    } else if (p.numero !== undefined) {
      // Pregunta tipo "¿Ordinal o cardinal?"
      preguntaEl.textContent = `¿El número "${p.numero}" es cardinal u ordinal?`;
    } else {
      preguntaEl.textContent = "Pregunta no reconocida.";
    }
  }

  function terminarJuego(mensaje) {
    clearInterval(timerId);
    preguntaEl.textContent = mensaje;
    juegoTerminado = true;
    if (btnIniciar) btnIniciar.style.display = "inline-block";
  }

  contenedor.querySelector("#verificar").addEventListener("click", () => {
    if (juegoTerminado) {
      feedback.textContent = "El juego ya ha terminado.";
      return;
    }

    const respuestaUsuario = input.value.trim().toLowerCase();
    const p = datos.preguntas[preguntaIndex];
    const respuestaCorrecta = String(p.respuesta).toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
      feedback.textContent = "✅ ¡Correcto!";
      preguntaIndex++;
      input.value = "";
      mostrarPregunta();
    } else {
      feedback.textContent = "❌ Incorrecto. Intenta de nuevo.";
    }
  });

  mostrarPregunta();

  timerId = setInterval(() => {
    tiempoRestante--;
    tiempoEl.textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
      terminarJuego("¡Se acabó el tiempo!");
    }
  }, 1000);
}


function iniciarJuegoMemoria(contenedor, descripcion, datos) {
  console.log("Datos recibidos:", datos);

  const cartas = (datos.cartas || datos.pares).sort(() => 0.5 - Math.random()); // Mezclar
  let primera = null;
  let segunda = null;
  let bloqueadas = false;
  let emparejadas = 0;

  contenedor.innerHTML = `
    <p>${descripcion}</p>
    <div class="tablero-memoria" style="display: grid; grid-template-columns: repeat(3, 80px); gap: 10px;"></div>
    <p id="mensaje-memoria"></p>
  `;

  const tablero = contenedor.querySelector(".tablero-memoria");
  const mensaje = contenedor.querySelector("#mensaje-memoria");

  cartas.forEach((valor, i) => {
    const carta = document.createElement("div");
    carta.classList.add("carta");
    carta.dataset.valor = valor;
    carta.dataset.index = i;
    carta.style.width = "80px";
    carta.style.height = "80px";
    carta.style.display = "flex";
    carta.style.alignItems = "center";
    carta.style.justifyContent = "center";
    carta.style.fontSize = "2rem";
    carta.style.border = "1px solid #ccc";
    carta.style.background = "#ddd";
    carta.style.cursor = "pointer";
    carta.textContent = "❓";

    carta.addEventListener("click", () => {
      if (bloqueadas || carta.classList.contains("descubierta")) return;

      carta.textContent = valor;
      carta.classList.add("descubierta");

      if (!primera) {
        primera = carta;
      } else {
        segunda = carta;
        bloqueadas = true;

        setTimeout(() => {
          if (primera.dataset.valor === segunda.dataset.valor) {
            primera.style.background = "#aaffaa";
            segunda.style.background = "#aaffaa";
            emparejadas += 2;
            if (emparejadas === cartas.length) {
              mensaje.textContent = "🎉 ¡Has emparejado todas!";
            }
          } else {
            primera.textContent = "❓";
            segunda.textContent = "❓";
            primera.classList.remove("descubierta");
            segunda.classList.remove("descubierta");
          }

          primera = null;
          segunda = null;
          bloqueadas = false;
        }, 800);
      }
    });

    tablero.appendChild(carta);
  });
}






  

  





// Cargar ejercicios
function cargarEjercicios(idSubtema) {
  fetch(`http://localhost:8080/api/ejercicios/${idSubtema}`)
    .then(response => response.json())
    .then(ejercicios => mostrarEjercicios(ejercicios))
    .catch(error => console.error("Error cargando ejercicios:", error));
}

function mostrarEjercicios(ejercicios) {
  const contenedor = document.getElementById("ejercicios-container");
  contenedor.innerHTML = "";
console.log("Ejercicios recibidos:", ejercicios);

  ejercicios.forEach((ejercicio, index) => {
    const divEjercicio = document.createElement("div");
    divEjercicio.classList.add("ejercicio");

    const titulo = document.createElement("h1");
    titulo.textContent = `Ejercicio ${index + 1}: ${ejercicio.tipo}`;

    const pregunta = document.createElement("div");
  
      if (ejercicio.pregunta) {
pregunta.innerHTML += generarHTMLDelEjercicio(ejercicio);
    } else {
      console.warn("Ejercicio sin contenido:",ejercicio);
    }
  
    

    divEjercicio.appendChild(titulo);
    divEjercicio.appendChild(pregunta);
    contenedor.appendChild(divEjercicio);
  });
}

function generarHTMLDelEjercicio(ejercicio) {
  // Verificación inicial
  if (!ejercicio || !ejercicio.tipo || !ejercicio.pregunta) {
    throw new Error("Ejercicio mal definido o incompleto");
  }

  // Si las opciones vienen como string, conviértelas a array
  let opciones = [];
  if (ejercicio.opciones) {
    opciones = typeof ejercicio.opciones === "string"
      ? JSON.parse(ejercicio.opciones)
      : ejercicio.opciones;
  }

  if (ejercicio.tipo === "seleccion_multiple") {
    const respuestaCorrecta = ejercicio.respuesta_correcta;
    return `
      <p>${ejercicio.pregunta}</p>
      <ul>
        ${opciones.map(op => `
          <li>
            <label>
              <input type="radio" name="preg-${ejercicio.id}" value="${op}"> ${op}
            </label>
          </li>
        `).join("")}
      </ul>
      <button onclick="verificarSeleccion('${respuestaCorrecta}', 'preg-${ejercicio.id}')">Verificar</button>
      <p id="resultado-${ejercicio.id}"></p>
    `;
  }

  if (ejercicio.tipo === "completar") {
    const respuestaCorrecta = ejercicio.respuesta_correcta;
    console.log("respuesta correcta:",respuestaCorrecta);
    return `
      <p>${ejercicio.pregunta}</p>
      <input type="text" id="resp-${ejercicio.id}" placeholder="Escribe tu respuesta aquí">
      <button onclick="verificarCompletar('${respuestaCorrecta}', 'resp-${ejercicio.id}', 'resultado-${ejercicio.id}')">Verificar</button>
      <p id="resultado-${ejercicio.id}"></p>
    `;
  }

  return "<p>Tipo de ejercicio no soportado.</p>";
}


function verificarSeleccion(respuesta_correcta, nameGroup) {
  const seleccionada = document.querySelector(`input[name="${nameGroup}"]:checked`);
  const resultado = document.getElementById(`resultado-${nameGroup.split('-')[1]}`);
console.log("selecion:",seleccionada);
console.log("respuesta correcta:",respuesta_correcta);
  if (!seleccionada) {
    resultado.textContent = "Selecciona una opción.";
    return;
  }

  resultado.textContent = seleccionada.value == respuesta_correcta
    ? "✅ ¡Correcto!"
    : "❌ Incorrecto. Intenta de nuevo.";
    
}

function verificarCompletar(respuesta_correcta, inputId, resultadoId) {
  
  const valor = document.getElementById(inputId).value.trim();
  const resultado = document.getElementById(resultadoId);
  console.log("resultado:",resultado);
  console.log("Valor ingresado:", valor);
  console.log("Respuesta correcta:", respuesta_correcta);
  resultado.textContent = valor == respuesta_correcta
    ? "✅ ¡Correcto!"
    : "❌ Incorrecto. Intenta de nuevo.";
}



