// js/basicas.js

let n1, n2;

function generarNumeros() {
  n1 = Math.floor(Math.random() * 10);
  n2 = Math.floor(Math.random() * 10);
  document.getElementById("num1").textContent = n1;
  document.getElementById("num2").textContent = n2;
  document.getElementById("respuesta").value = "";
  document.getElementById("feedback").textContent = "";
}

function verificarRespuesta() {
  const respuesta = parseInt(document.getElementById("respuesta").value);
  const feedback = document.getElementById("feedback");

  if (respuesta === n1 + n2) {
    feedback.textContent = "¡Correcto! 🎉";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Intenta de nuevo 🤔";
    feedback.style.color = "red";
  }

  // Regenerar números tras un tiempo
  setTimeout(generarNumeros, 1500);
}

// Juego matemático de par o impar
function generarJuego() {
    const opcionesContainer = document.getElementById("opcionesJuego");
    opcionesContainer.innerHTML = ""; // limpiar botones anteriores
  
    // Aseguramos al menos un número par
    const numeros = new Set();
    while (numeros.size < 2) {
      numeros.add(Math.floor(Math.random() * 20) * 2 + 1); // impares
    }
    const numeroPar = Math.floor(Math.random() * 10) * 2; // número par
    numeros.add(numeroPar);
  
    // Convertimos a array y lo mezclamos
    const opciones = Array.from(numeros).sort(() => Math.random() - 0.5);
  
    opciones.forEach(num => {
      const btn = document.createElement("button");
      btn.textContent = num;
      btn.onclick = () => jugar(num);
      opcionesContainer.appendChild(btn);
    });
  }
  
  function jugar(num) {
    const resultado = document.getElementById("resultadoJuego");
    if (num % 2 === 0) {
      resultado.textContent = "¡Correcto! Es par 🎉";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "¡Incorrecto! Ese no es par ❌";
      resultado.style.color = "red";
    }
  
    // Generar nuevo reto después de un segundo
    setTimeout(() => {
      resultado.textContent = "";
      generarJuego();
    }, 1500);
  }
  



  const ejerciciosFiguras = [
    {
      pregunta: "¿Cuántos lados tiene un triángulo?",
      respuestaCorrecta: "3",
      pista: "Es la figura más básica con lados."
    },
    {
      pregunta: "¿Cuántos lados tiene un pentágono?",
      respuestaCorrecta: "5",
      pista: "Su nombre viene del prefijo griego 'penta'."
    },
    {
      pregunta: "¿Qué figura tiene 4 lados iguales?",
      respuestaCorrecta: "Cuadrado",
      pista: "Sus ángulos también son rectos."
    },
    { 
      pregunta:"¿cuales son las dimenciones de las figuras bidimencionales?",
      respuestaCorrecta: "largo y ancho",

      pista: "son las figuras mas basicas que podedmos dibujar en un papel."
      
    }
  ];
  
  let ejercicioActual = {};
  
  function generarEjercicioFigura() {
    const aleatorio = Math.floor(Math.random() * ejerciciosFiguras.length);
    ejercicioActual = ejerciciosFiguras[aleatorio];
  
    document.getElementById("pregunta-figura").textContent = ejercicioActual.pregunta;
    document.getElementById("respuesta-figura").value = "";
    document.getElementById("mensaje-figura").textContent = "";
  }
  
  function comprobarRespuestaFigura() {
    const userInput = document.getElementById("respuesta-figura").value.trim();
    const mensaje = document.getElementById("mensaje-figura");
  
    if (userInput.toLowerCase() === ejercicioActual.respuestaCorrecta.toLowerCase()) {
      mensaje.textContent = "¡Correcto! 🎉";
      mensaje.style.color = "green";
    } else {
      mensaje.textContent = `Intenta de nuevo. Pista: ${ejercicioActual.pista}`;
      mensaje.style.color = "red";
    }
  
    setTimeout(generarEjercicioFigura, 2000);
  }
  
  const figuras = ["Círculo", "Triángulo", "Cuadrado", "Pentágono"];
  const correcta = "Triángulo"; // Puedes variar esto también
  
  function generarJuegoFigura() {
    const resultado = document.getElementById("resultado-juego");
    resultado.textContent = "";
  
    const opcionesContainer = document.getElementById("opciones-figura");
    opcionesContainer.innerHTML = "";
  
    const opciones = figuras.sort(() => Math.random() - 0.5).slice(0, 3); // Solo 3 opciones al azar
    if (!opciones.includes(correcta)) opciones[Math.floor(Math.random() * 3)] = correcta; // Aseguramos la correcta
  
    opciones.forEach(fig => {
      const btn = document.createElement("button");
      btn.textContent = fig;
      btn.onclick = () => verificarFigura(fig);
      opcionesContainer.appendChild(btn);
    });
  }
  
  function verificarFigura(opcion) {
    const resultado = document.getElementById('resultado-juego');
    if (opcion === correcta) {
      resultado.textContent = "¡Bien hecho! Tiene tres lados.";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "Incorrecto. Intenta con otra figura.";
      resultado.style.color = "red";
    }
  
    setTimeout(generarJuegoFigura, 1500);
  }

  function accesoDenegado() {
    alert("Debes estar registrado para acceder a este contenido.");
  }

  window.onload = () => {
    generarNumeros();
    generarJuego();
    generarEjercicioFigura();
    generarJuegoFigura();
    
  };
  
  window.verificarRespuesta = verificarRespuesta;
  window.comprobarRespuestaFigura = comprobarRespuestaFigura;
  window.accesoDenegado = accesoDenegado;
  
  
 





