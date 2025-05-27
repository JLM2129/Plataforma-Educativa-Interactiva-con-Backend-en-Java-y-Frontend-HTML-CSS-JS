// quimica-basica.js

// Preguntas para "Materia y sus propiedades"
const preguntasMateria = [
    {
      pregunta: "¿Qué propiedad de la materia indica la cantidad de espacio que ocupa?",
      respuesta: "Volumen",
      pista: "Se mide en litros o metros cúbicos."
    },
    {
      pregunta: "¿Cómo se llama la propiedad que permite a la materia resistir cambios en su estado de movimiento?",
      respuesta: "Inercia",
      pista: "Es la tendencia a mantener su estado actual."
    },
    {
      pregunta: "¿Cuál es la propiedad que indica la cantidad de materia en un objeto?",
      respuesta: "Masa",
      pista: "Se mide en kilogramos o gramos."
    }
  ];
  
  // Preguntas para "Mezclas y soluciones"
  const preguntasMezcla = [
    {
      pregunta: "¿Qué tipo de mezcla tiene una composición uniforme?",
      respuesta: "Mezcla homogénea",
      pista: "No se pueden distinguir sus componentes a simple vista."
    },
    {
      pregunta: "¿Cómo se llama la mezcla donde se pueden ver sus componentes?",
      respuesta: "Mezcla heterogénea",
      pista: "Sus componentes son visibles y distinguibles."
    },
    {
      pregunta: "¿Qué nombre recibe la sustancia que se disuelve en una solución?",
      respuesta: "Soluto",
      pista: "Es la sustancia que se encuentra en menor cantidad."
    }
  ];
  
  const enunciadosFV = [
    {
      frase: "La materia no tiene masa ni volumen.",
      esVerdadero: false
    },
    {
      frase: "La materia tiene masa y ocupa un lugar en el espacio.",
      esVerdadero: true
    },
    {
      frase: "Las soluciones no son mezclas homogéneas.",
      esVerdadero: false
    },
    {
      frase: "Las soluciones son mezclas homogéneas.",
      esVerdadero: true
    },
    {
      frase: "El agua es una mezcla heterogénea.",
      esVerdadero: false
    },
    {
      frase: "El agua pura es una sustancia compuesta.",
      esVerdadero: true
    }
  ];
  
  let enunciadoActualFV = {};
  
  function generarEnunciadoFV() {
    const indice = Math.floor(Math.random() * enunciadosFV.length);
    enunciadoActualFV = enunciadosFV[indice];
  
    const contenedor = document.getElementById("enunciado-fv");
    const resultado = document.getElementById("resultado-fv");
  
    contenedor.textContent = `"${enunciadoActualFV.frase}"`;
    resultado.textContent = "";
  }
  
  function responderFV(respuestaUsuario) {
    const resultado = document.getElementById("resultado-fv");
    if (respuestaUsuario === enunciadoActualFV.esVerdadero) {
      resultado.textContent = "¡Correcto! ✅";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "Incorrecto ❌";
      resultado.style.color = "red";
    }
  
    // Cargar nuevo enunciado después de unos segundos
    setTimeout(generarEnunciadoFV, 3000);
  }
  
 
  
 
  
  
  // Preguntas de opción múltiple para "Mezclas y soluciones"
  const preguntasOpcion = [
    {
      pregunta: "¿Cuál de las siguientes es una mezcla homogénea?",
      opciones: ["Ensalada", "Agua con sal", "Granola"],
      respuesta: "Agua con sal"
    },
    {
      pregunta: "¿Qué componente de una solución está en mayor proporción?",
      opciones: ["Soluto", "Solvente", "Ambos por igual"],
      respuesta: "Solvente"
    },
    {
      pregunta: "¿Cuál de las siguientes es una mezcla heterogénea?",
      opciones: ["Leche", "Aire", "Arena con piedras"],
      respuesta: "Arena con piedras"
    }
  ];
  
  let preguntaActualMateria = {};
  let preguntaActualMezcla = {};
  let enunciadoActual = {};
  let preguntaActualOpcion = {};
  
  // Función para generar pregunta de "Materia y sus propiedades"
  function generarPreguntaMateria() {
    const indice = Math.floor(Math.random() * preguntasMateria.length);
    preguntaActualMateria = preguntasMateria[indice];
    document.getElementById("pregunta-materia").textContent = preguntaActualMateria.pregunta;
    document.getElementById("respuesta-materia").value = "";
    document.getElementById("feedback-materia").textContent = "";
  }
  
  // Función para verificar respuesta de "Materia y sus propiedades"
  function verificarRespuestaMateria() {
    const respuesta = document.getElementById("respuesta-materia").value.trim().toLowerCase();
    const correcta = preguntaActualMateria.respuesta.toLowerCase();
    const feedback = document.getElementById("feedback-materia");
  
    if (respuesta === correcta) {
      feedback.textContent = "¡Correcto! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Incorrecto. Pista: ${preguntaActualMateria.pista}`;
      feedback.style.color = "red";
    }
  
    setTimeout(generarPreguntaMateria, 3000);
  }
  
  // Función para generar pregunta de "Mezclas y soluciones"
  function generarPreguntaMezcla() {
    const indice = Math.floor(Math.random() * preguntasMezcla.length);
    preguntaActualMezcla = preguntasMezcla[indice];
    document.getElementById("pregunta-mezcla").textContent = preguntaActualMezcla.pregunta;
    document.getElementById("respuesta-mezcla").value = "";
    document.getElementById("feedback-mezcla").textContent = "";
  }
  
  // Función para verificar respuesta de "Mezclas y soluciones"
  function verificarRespuestaMezcla() {
    const respuesta = document.getElementById("respuesta-mezcla").value.trim().toLowerCase();
    const correcta = preguntaActualMezcla.respuesta.toLowerCase();
    const feedback = document.getElementById("feedback-mezcla");
  
    if (respuesta === correcta) {
      feedback.textContent = "¡Correcto! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Incorrecto. Pista: ${preguntaActualMezcla.pista}`;
      feedback.style.color = "red";
    }
  
    setTimeout(generarPreguntaMezcla, 3000);
  }
  
  
  
  
  
 // Función para generar pregunta de opción múltiple
function generarPreguntaOpcion() {
    const indice = Math.floor(Math.random() * preguntasOpcion.length);
    preguntaActualOpcion = preguntasOpcion[indice];
  
    const contenedorPregunta = document.getElementById("pregunta-opcion");
    const contenedorOpciones = document.getElementById("opciones");
    const contenedorResultado = document.getElementById("resultado-opcion");
  
    contenedorPregunta.textContent = preguntaActualOpcion.pregunta;
    contenedorOpciones.innerHTML = "";
    contenedorResultado.textContent = "";
  
    preguntaActualOpcion.opciones.forEach(opcion => {
      const boton = document.createElement("button");
      boton.textContent = opcion;
      boton.onclick = () => verificarRespuestaOpcion(opcion);
      contenedorOpciones.appendChild(boton);
    });
  }
  
  // Función para verificar respuesta de opción múltiple
  function verificarRespuestaOpcion(opcionSeleccionada) {
    const resultado = document.getElementById("resultado-opcion");
  
    if (opcionSeleccionada === preguntaActualOpcion.respuesta) {
      resultado.textContent = "¡Correcto! 🎉";
      resultado.style.color = "green";
    } else {
      resultado.textContent = `Incorrecto. La respuesta correcta es: ${preguntaActualOpcion.respuesta}`;
      resultado.style.color = "red";
    }
  
    setTimeout(generarPreguntaOpcion, 4000);
  }
  
  // Función de acceso denegado (botones bloqueados)
  function accesoDenegado() {
    alert("🔒 Esta función está disponible solo para usuarios registrados.");
  }
  
  // Inicializar preguntas al cargar la página
  window.addEventListener("DOMContentLoaded", () => {
    generarPreguntaMateria();
    generarPreguntaMezcla();
    generarEnunciadoFV();
    generarPreguntaOpcion();
  });
  
  window.verificarRespuestaMateria=verificarRespuestaMateria;
  
  window.verificarRespuestaMezcla=verificarRespuestaMezcla;
  window.verificarRespuestaOpcion=verificarRespuestaOpcion;
  window.accesoDenegado=accesoDenegado;
  window.responderFV=responderFV;