let preguntaActualReaccion;
let preguntaActualAcido;

// --- Preguntas: Reacciones Químicas ---
const preguntasReaccion = [
  { pregunta: "¿Qué tipo de reacción ocurre cuando se combinan dos sustancias para formar una nueva?", respuesta: "síntesis" },
  { pregunta: "¿Qué reacción descompone una sustancia en otras más simples?", respuesta: "descomposición" },
  { pregunta: "¿Cómo se llama la reacción en la que un elemento reemplaza a otro en un compuesto?", respuesta: "sustitución" }
];

function nuevaPreguntaReaccion() {
  preguntaActualReaccion = preguntasReaccion[Math.floor(Math.random() * preguntasReaccion.length)];
  document.getElementById("pregunta-reaccion").textContent = preguntaActualReaccion.pregunta;
}

function verificarRespuestaReaccion() {
  const respuesta = document.getElementById("respuesta-reaccion").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback-reaccion");

  if (respuesta === preguntaActualReaccion.respuesta.toLowerCase()) {
    feedback.textContent = "✅ ¡Correcto!";
    feedback.style.color = "green";
    document.getElementById("respuesta-reaccion").value = "";
    nuevaPreguntaReaccion();
  } else {
    feedback.textContent = "❌ Incorrecto. Intenta otra vez.";
    feedback.style.color = "red";
  }
}

// --- Juego: Clasificar reacciones ---
const reacciones = [
  { ecuacion: "2H₂ + O₂ → 2H₂O", tipo: "síntesis" },
  { ecuacion: "2KClO₃ → 2KCl + 3O₂", tipo: "descomposición" },
  { ecuacion: "Zn + 2HCl → ZnCl₂ + H₂", tipo: "sustitución" }
];

function crearJuegoReacciones() {
  const contenedor = document.getElementById("juego-reacciones");
  contenedor.innerHTML = "";

  reacciones.forEach((item, i) => {
    const bloque = document.createElement("div");
    bloque.innerHTML = `
      <p>${item.ecuacion}</p>
      <select id="select-reaccion-${i}">
        <option value="">Tipo de reacción</option>
        <option value="síntesis">Síntesis</option>
        <option value="descomposición">Descomposición</option>
        <option value="sustitución">Sustitución</option>
      </select>
    `;
    contenedor.appendChild(bloque);
  });

  const boton = document.createElement("button");
  boton.textContent = "✅ Verificar";
  boton.onclick = () => {
    let correctas = 0;
    reacciones.forEach((item, i) => {
      const seleccion = document.getElementById(`select-reaccion-${i}`).value;
      if (seleccion === item.tipo) correctas++;
    });
    alert(`Obtuviste ${correctas} de ${reacciones.length} clasificaciones correctas.`);
  };
  contenedor.appendChild(boton);
}

crearJuegoReacciones();

// --- Preguntas: Ácidos y Bases ---
const preguntasAcido = [
  { pregunta: "¿Qué tipo de sustancia tiene un pH menor a 7?", respuesta: "ácido" },
  { pregunta: "¿Qué tipo de sustancia tiene un pH mayor a 7?", respuesta: "base" },
  { pregunta: "¿Qué tipo de reacción ocurre entre un ácido y una base?", respuesta: "neutralización" }
];

function nuevaPreguntaAcido() {
  preguntaActualAcido = preguntasAcido[Math.floor(Math.random() * preguntasAcido.length)];
  document.getElementById("pregunta-acido").textContent = preguntaActualAcido.pregunta;
}

function verificarRespuestaAcido() {
  const respuesta = document.getElementById("respuesta-acido").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback-acido");

  if (respuesta === preguntaActualAcido.respuesta.toLowerCase()) {
    feedback.textContent = "✅ ¡Correcto!";
    feedback.style.color = "green";
    document.getElementById("respuesta-acido").value = "";
    nuevaPreguntaAcido();
  } else {
    feedback.textContent = "❌ Incorrecto. Vuelve a intentar.";
    feedback.style.color = "red";
  }
}

// --- Juego: ¿Ácido o Base? ---
const sustancias = [
  { nombre: "Jugo de limón", tipo: "ácido" },
  { nombre: "Jabón", tipo: "base" },
  { nombre: "Vinagre", tipo: "ácido" },
  { nombre: "Bicarbonato de sodio", tipo: "base" }
];

function crearJuegoAcidoBase() {
  const contenedor = document.getElementById("juego-acido-base");
  contenedor.innerHTML = "";

  sustancias.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <label>${item.nombre}</label>
      <select id="select-sustancia-${i}">
        <option value="">¿Ácido o base?</option>
        <option value="ácido">Ácido</option>
        <option value="base">Base</option>
      </select>
    `;
    contenedor.appendChild(div);
  });

  const boton = document.createElement("button");
  boton.textContent = "✅ Verificar";
  boton.onclick = () => {
    let correctas = 0;
    sustancias.forEach((item, i) => {
      const seleccion = document.getElementById(`select-sustancia-${i}`).value;
      if (seleccion === item.tipo) correctas++;
    });
    alert(`Obtuviste ${correctas} de ${sustancias.length} respuestas correctas.`);
  };

  contenedor.appendChild(boton);
}

crearJuegoAcidoBase();

// --- Inicializar preguntas ---
window.addEventListener("DOMContentLoaded", () => {
  nuevaPreguntaReaccion();
  nuevaPreguntaAcido();
});

window.verificarRespuestaReaccion = verificarRespuestaReaccion;
window.verificarRespuestaAcido = verificarRespuestaAcido;
