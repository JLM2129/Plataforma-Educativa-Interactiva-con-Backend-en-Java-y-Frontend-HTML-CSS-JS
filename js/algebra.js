// Generador de expresiones algebraicas simples
let valorX;
let resultadoCorrecto;

function generarExpresion() {
  const coef = Math.floor(Math.random() * 5) + 1; // coeficiente de x (1 a 5)
  const constante = Math.floor(Math.random() * 10); // número constante (0 a 9)
  valorX = Math.floor(Math.random() * 10); // valor de x (0 a 9)

  resultadoCorrecto = coef * valorX + constante;
  const expresionStr = `${coef}x + ${constante} (x = ${valorX})`;

  document.getElementById("expresion").textContent = expresionStr;
  document.getElementById("respuestaAlgebra").value = "";
  document.getElementById("feedbackAlgebra").textContent = "";
}

window.verificarRespuestaAlgebra = function () {
    const respuesta = parseInt(document.getElementById("respuestaAlgebra").value);
    const feedback = document.getElementById("feedbackAlgebra");
  
    if (respuesta === resultadoCorrecto) {
      feedback.textContent = "¡Correcto! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Intenta de nuevo 🤔";
      feedback.style.color = "red";
    }
  
    setTimeout(generarExpresion, 1500);
  };
  

// Juego: seleccionar expresión equivalente
function generarJuegoAlgebra() {
  const a = Math.floor(Math.random() * 5) + 1;
  const b = Math.floor(Math.random() * 5) + 1;

  const correcta = `${a}x + ${b}x`;
  const resultado = `${a + b}x`;
  document.getElementById("expJuego").textContent = correcta;

  const opciones = [
    resultado,                     // correcta
    `${a - 1}x + ${b}x`,           // incorrecta
    `${a + b + 1}x`,               // incorrecta
  ];

  const barajadas = opciones.sort(() => Math.random() - 0.5);
  const opcionesContainer = document.getElementById("opcionesJuegoAlgebra");
  opcionesContainer.innerHTML = "";

  barajadas.forEach(op => {
    const btn = document.createElement("button");
    btn.textContent = op;
    btn.onclick = () => verificarJuegoAlgebra(op, resultado);
    opcionesContainer.appendChild(btn);
  });
}

function verificarJuegoAlgebra(seleccionado, correcto) {
  const resultado = document.getElementById("resultadoJuegoAlgebra");

  if (seleccionado === correcto) {
    resultado.textContent = "¡Correcto! 🎉";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Incorrecto ❌";
    resultado.style.color = "red";
  }

  setTimeout(() => {
    resultado.textContent = "";
    generarJuegoAlgebra();
  }, 1500);
}

// Placeholder para acceso denegado (botón "ver más")
function accesoDenegado() {
  alert("Debes estar registrado para acceder a este contenido");
}

// Iniciar ejercicios y juegos al cargar la página
window.onload = () => {
  generarExpresion();
  generarJuegoAlgebra();
  
};
window.accesoDenegado = accesoDenegado;