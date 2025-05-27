// Funciones para ejercicios interactivos
let puntaje = 0;
let tiempoRestante = 30;
let intervaloTiempo;

function iniciarJuego() {
  puntaje = 0;
  tiempoRestante = 30;
  document.getElementById("juegoPuntaje").textContent = "Puntaje: 0";
  document.getElementById("resultadoJuegoCalculo").textContent = "";

  // Ocultar el botón
  document.getElementById("botonIniciarJuego").style.display = "none";

  // Generar la primera pregunta
  generarJuegoCalculo();

  // Iniciar temporizador
  intervaloTiempo = setInterval(() => {
    tiempoRestante--;
    if (tiempoRestante <= 0) {
      clearInterval(intervaloTiempo);
      finalizarJuego();
    }
  }, 1000);
}

function verificarJuegoCalculo(opcion) {
  const resultado = document.getElementById("resultadoJuegoCalculo");
  if (opcion === preguntaActual.correcta) {
    resultado.textContent = "¡Correcto! 🎉";
    resultado.style.color = "green";
    puntaje++;
    document.getElementById("juegoPuntaje").textContent = "Puntaje: " + puntaje;
  } else {
    resultado.textContent = `Incorrecto ❌. La respuesta era ${preguntaActual.correcta}`;
    resultado.style.color = "red";
  }

  setTimeout(generarJuegoCalculo, 1000); // Genera otra pregunta tras 1s
}

function finalizarJuego() {
  document.getElementById("resultadoJuegoCalculo").textContent = "⏱️ Tiempo terminado. Tu puntaje fue: " + puntaje;
  document.getElementById("resultadoJuegoCalculo").style.color = "blue";

  // Mostrar el botón nuevamente
  document.getElementById("botonIniciarJuego").style.display = "inline-block";
}





const ejercicios = [
    { expresion: "d/dx (x^2)", resultado: "2x" },
    { expresion: "d/dx (sin(x))", resultado: "cos(x)" },
    { expresion: "d/dx (e^x)", resultado: "e^x" },
    { expresion: "d/dx (ln(x))", resultado: "1/x" },
    { expresion: "d/dx (x^3)", resultado: "3x^2" },
    { expresion: "d/dx (cos(x))", resultado: "-sin(x)" },
    { expresion: "d/dx (tan(x))", resultado: "sec^2(x)" },
    { expresion: "d/dx (5x)", resultado: "5" },
    { expresion: "d/dx (1/x)", resultado: "-1/x^2" }
  ];
  
  let ejercicioActual;
  
  function generarEjercicio() {
    ejercicioActual = ejercicios[Math.floor(Math.random() * ejercicios.length)];
    document.getElementById("expresionCalculo").textContent = ejercicioActual.expresion;
    document.getElementById("respuestaCalculo").value = "";
    document.getElementById("feedbackCalculo").textContent = "";
  }
  
  function verificarRespuestaCalculo() {
    const respuesta = document.getElementById("respuestaCalculo").value.trim();
    const feedback = document.getElementById("feedbackCalculo");
  
    if (respuesta.toLowerCase() === ejercicioActual.resultado.toLowerCase()) {
      feedback.textContent = "¡Correcto! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Incorrecto. La respuesta correcta es ${ejercicioActual.resultado}`;
      feedback.style.color = "red";
    }
  
    setTimeout(generarEjercicio, 3000);
  }
  
  // Juego interactivo: Selecciona la derivada correcta
  const preguntasJuego = [
    {
      pregunta: "¿Cuál es la derivada de x^2?",
      opciones: ["x", "2x", "x^2"],
      correcta: "2x"
    },
    {
      pregunta: "¿Cuál es la derivada de cos(x)?",
      opciones: ["sin(x)", "-sin(x)", "cos(x)"],
      correcta: "-sin(x)"
    },
    {
      pregunta: "¿Cuál es la derivada de ln(x)?",
      opciones: ["x", "1/x", "e^x"],
      correcta: "1/x"
    },
    {
      pregunta: "¿Cuál es la derivada de e^x?",
      opciones: ["ln(x)", "e^x", "x^e"],
      correcta: "e^x"
    }
  ];
  
  let preguntaActual;
  
  function generarJuegoCalculo() {
    const preguntaElem = document.getElementById("juegoPregunta");
    const opcionesElem = document.getElementById("opcionesJuego");
  
    // Limpiar antes de generar nueva pregunta
    opcionesElem.innerHTML = "";
    document.getElementById("resultadoJuegoCalculo").textContent = "";
  
    preguntaActual = preguntasJuego[Math.floor(Math.random() * preguntasJuego.length)];
    preguntaElem.textContent = preguntaActual.pregunta;
  
    preguntaActual.opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => verificarJuegoCalculo(opcion);
      opcionesElem.appendChild(btn);
    });
  }
  
  
  
  
  
  
  window.onload = () => {
    generarEjercicio();
    generarJuegoCalculo();
  };
  
  window.verificarRespuestaCalculo = verificarRespuestaCalculo;
window.verificarJuegoCalculo = verificarJuegoCalculo;
window.iniciarJuego = iniciarJuego;
window.accesoDenegado = accesoDenegado;
