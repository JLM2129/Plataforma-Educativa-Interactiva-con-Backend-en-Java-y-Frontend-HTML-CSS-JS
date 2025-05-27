
let preguntaActualAtomos;
let preguntaActualTabla;
let enigma;

  
  // --- Ejercicio: Átomos y Moléculas ---
  const preguntasAtomos = [
    { pregunta: "¿Qué partícula tiene carga negativa en un átomo?", respuesta: "electrón" },
    { pregunta: "¿Cómo se llama la parte central del átomo?", respuesta: "núcleo" },
    { pregunta: "¿Qué se forma cuando dos o más átomos se unen?", respuesta: "molécula" }
  ];
  
  
  
  function nuevaPreguntaAtomos() {
    preguntaActualAtomos = preguntasAtomos[Math.floor(Math.random() * preguntasAtomos.length)];
    document.getElementById("pregunta-atomos").textContent = preguntaActualAtomos.pregunta;
  
   
  }
  
  
  function verificarRespuestaAtomos() {
    const respuesta = document.getElementById("respuesta-atomos").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback-atomos");
  
    if (respuesta === preguntaActualAtomos.respuesta.toLowerCase()) {
      feedback.textContent = "✅ ¡Correcto!";
      feedback.style.color = "green";
      document.getElementById("respuesta-atomos").value = "";
  
      // Espera 1.5 segundos, cambia pregunta y luego limpia feedback
      setTimeout(() => {
        nuevaPreguntaAtomos();
        feedback.textContent = "";
      }, 1500);
    } else {
      feedback.textContent = "❌ Incorrecto. Inténtalo de nuevo.";
      feedback.style.color = "red";
    }
  }
  
  
  
  
  // --- Juego: Empareja los conceptos (Átomos y Moléculas) ---
  const conceptos = [
    { concepto: "Electrón", definicion: "Partícula con carga negativa" },
    { concepto: "Protón", definicion: "Partícula con carga positiva" },
    { concepto: "Molécula", definicion: "Unión de dos o más átomos" },
    { concepto: "Neutrón", definicion: "Partícula sin carga" }
  ];
  
  function desordenar(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function crearJuegoEmparejar() {
    const juego = document.getElementById("juego-emparejar");
    const definiciones = desordenar([...conceptos]);
    juego.innerHTML = "";
  
    conceptos.forEach((item, i) => {
      const contenedor = document.createElement("div");
      contenedor.innerHTML = `
        <label>${item.concepto}</label>
        <select id="respuesta-${i}">
          <option value="">Selecciona la definición</option>
          ${definiciones.map(def => `<option value="${def.definicion}">${def.definicion}</option>`).join("")}
        </select>
      `;
      juego.appendChild(contenedor);
    });
  
    const boton = document.createElement("button");
    boton.textContent = "✅ Comprobar";
    boton.onclick = () => {
      let correctas = 0;
      conceptos.forEach((item, i) => {
        const seleccion = document.getElementById(`respuesta-${i}`).value;
        if (seleccion === item.definicion) correctas++;
      });
      alert(`Obtuviste ${correctas} de ${conceptos.length} emparejamientos correctos.`);
    };
  
    juego.appendChild(boton);
    const botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "🔁 Volver a jugar";
botonReiniciar.onclick = () => {
  crearJuegoEmparejar(); // Reinicia todo el juego con nuevo orden
};

juego.appendChild(boton);
juego.appendChild(botonReiniciar); // Agregamos botón nuevo

  }
  
  crearJuegoEmparejar();
  
  // --- Ejercicio: Tabla Periódica ---
  const preguntasTabla = [
    { pregunta: "¿Cuál es el símbolo químico del oxígeno?", respuesta: "O" },
    { pregunta: "¿Qué elemento tiene el número atómico 1?", respuesta: "hidrógeno" },
    { pregunta: "¿Qué elemento es un gas noble?", respuesta: "helio" }
  ];
  
 
  
  function nuevaPreguntaTabla() {
    preguntaActualTabla = preguntasTabla[Math.floor(Math.random() * preguntasTabla.length)];
    document.getElementById("pregunta-tabla").textContent = preguntaActualTabla.pregunta;
  
    
  }
  
  
  function verificarRespuestaTabla() {
    const respuesta = document.getElementById("respuesta-tabla").value.trim().toLowerCase();
    const feedback = document.getElementById("feedback-tabla");
  
    if (respuesta === preguntaActualTabla.respuesta.toLowerCase()) {
      feedback.textContent = "✅ ¡Correcto!";
      feedback.style.color = "green";
      document.getElementById("respuesta-tabla").value = "";
  
      setTimeout(() => {
        nuevaPreguntaTabla();
        feedback.textContent = "";
      }, 1500);
    } else {
      feedback.textContent = "❌ Incorrecto. Vuelve a intentarlo.";
      feedback.style.color = "red";
    }
  }
  
  
  
  
  // --- Juego: ¿Quién soy? (Elemento secreto) ---
  const elementos = [
    { pista: "Soy un gas que respiramos, símbolo 'O'", respuesta: "oxígeno" },
    { pista: "Soy un metal líquido a temperatura ambiente", respuesta: "mercurio" },
    { pista: "Mi símbolo es 'Na' y estoy en la sal de mesa", respuesta: "sodio" },
    { pista: "Me usan en los globos, soy un gas noble", respuesta: "helio" }
  ];
  
  
  
  function nuevoEnigma() {
    enigma = elementos[Math.floor(Math.random() * elementos.length)];
    document.getElementById("enigma-elemento").textContent = `🔍 Pista: ${enigma.pista}`;
  
   
  }
  
  
  function verificarElemento() {
    const respuesta = document.getElementById("respuesta-elemento").value.trim().toLowerCase();
    const resultado = document.getElementById("resultado-elemento");
  
    if (respuesta === enigma.respuesta.toLowerCase()) {
      resultado.textContent = "🎉 ¡Correcto!";
      resultado.style.color = "green";
      document.getElementById("respuesta-elemento").value = "";
  
      setTimeout(() => {
        nuevoEnigma(); // Cambiar a un nuevo enigma
        resultado.textContent = ""; // Limpiar el mensaje después
      }, 1500);
    } else {
      resultado.textContent = "🤔 No es ese. ¡Sigue intentando!";
      resultado.style.color = "red";
    }
  }
  
  
  function accesoDenegado() {
    alert("🔒 Esta función está disponible solo para usuarios registrados en Ciencia Loca.");
  }

  window.addEventListener("DOMContentLoaded", () => {
    nuevaPreguntaAtomos();
    nuevaPreguntaTabla();
    nuevoEnigma();
   
  });
window.verificarElemento=verificarElemento;
window.verificarRespuestaAtomos=verificarRespuestaAtomos;
window.verificarRespuestaTabla=verificarRespuestaTabla; 
window.accesoDenegado=accesoDenegado;