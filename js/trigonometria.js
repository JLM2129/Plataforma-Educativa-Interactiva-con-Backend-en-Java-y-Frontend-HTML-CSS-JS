let preguntaActual = "";
let respuestaCorrecta = "";

// Crea un conjunto simple de preguntas de trigonometría básica
const preguntasTrig = [
  { pregunta: "sen(90°)", respuesta: "1" },
  { pregunta: "cos(0°)", respuesta: "1" },
  { pregunta: "tan(45°)", respuesta: "1" },
  { pregunta: "sen(0°)", respuesta: "0" },
  { pregunta: "cos(90°)", respuesta: "0" },
];

function generarPreguntaTrig() {
  const random = preguntasTrig[Math.floor(Math.random() * preguntasTrig.length)];
  preguntaActual = random.pregunta;
  respuestaCorrecta = random.respuesta;
  document.getElementById("preguntaTrig").textContent = preguntaActual;
  document.getElementById("respuestaTrig").value = "";
  document.getElementById("feedbackTrig").textContent = "";
}

function verificarRespuestaTrig() {
  const respuesta = document.getElementById("respuestaTrig").value.trim();
  const feedback = document.getElementById("feedbackTrig");

  if (respuesta === respuestaCorrecta) {
    feedback.textContent = "¡Correcto! 🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Intenta de nuevo 🤔";
    feedback.style.color = "red";
  }

  setTimeout(generarPreguntaTrig, 2000);
}
const preguntasJuegoTrig = [
    { pregunta: "sen(30°)", opciones: ["0.5", "1", "0"], correcta: "0.5" },
    { pregunta: "cos(60°)", opciones: ["0.5", "1", "0"], correcta: "0.5" },
    { pregunta: "tan(0°)", opciones: ["0", "1", "infinito"], correcta: "0" },
    { pregunta: "cos(90°)", opciones: ["0", "1", "0.5"], correcta: "0" },
    { pregunta: "sen(0°)", opciones: ["0", "1", "0.5"], correcta: "0" },
  ];
  
  function generarJuegoTrig() {
    const random = preguntasJuegoTrig[Math.floor(Math.random() * preguntasJuegoTrig.length)];
    document.getElementById("preguntaJuegoTrig").textContent = random.pregunta;
  
    const opcionesContainer = document.getElementById("opcionesJuegoTrig");
    opcionesContainer.innerHTML = "";
  
    random.opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => verificarJuegoTrig(opcion, random.correcta);
      opcionesContainer.appendChild(btn);
    });
  }
  
  function verificarJuegoTrig(seleccionada, correcta) {
    const resultado = document.getElementById("resultadoJuegoTrig");
  
    if (seleccionada === correcta) {
      resultado.textContent = "¡Correcto! 🎉";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "¡Incorrecto! ❌";
      resultado.style.color = "red";
    }
  
    setTimeout(() => {
      resultado.textContent = "";
      generarJuegoTrig();
    }, 2000);
  }
  
  // Inicializa al cargar la página
  document.addEventListener("DOMContentLoaded", generarJuegoTrig);
  
// Inicializa al cargar la página
document.addEventListener("DOMContentLoaded", generarPreguntaTrig);
window.verificarRespuestaTrig=verificarRespuestaTrig