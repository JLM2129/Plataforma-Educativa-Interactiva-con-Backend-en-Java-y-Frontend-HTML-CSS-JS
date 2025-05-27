const preguntasMagnitudes = [
    {
      pregunta: "¿Cuál de estas es una magnitud fundamental?",
      opciones: ["Velocidad", "Tiempo", "Fuerza", "Energía"],
      correcta: "Tiempo"
    },
    {
      pregunta: "¿Qué unidad se usa para medir la masa en el SI?",
      opciones: ["Litro", "Metro", "Segundo", "Kilogramo"],
      correcta: "Kilogramo"
    },
    {
      pregunta: "¿Cuál es una magnitud derivada?",
      opciones: ["Longitud", "Tiempo", "Área", "Temperatura"],
      correcta: "Área"
    }
  ];
  
  const preguntasMovimiento = [
    {
      pregunta: "¿Qué ley de Newton dice que F = m × a?",
      opciones: ["Primera ley", "Segunda ley", "Tercera ley", "Ley de la gravedad"],
      correcta: "Segunda ley"
    },
    {
      pregunta: "¿Qué es la aceleración?",
      opciones: ["Cambio de posición", "Cambio de velocidad", "Velocidad constante", "Fuerza dividida"],
      correcta: "Cambio de velocidad"
    },
    {
      pregunta: "¿Qué ocurre si la fuerza neta es cero?",
      opciones: ["El objeto acelera", "El objeto se detiene", "El objeto continúa igual", "El objeto desaparece"],
      correcta: "El objeto continúa igual"
    }
  ];
  
  function mostrarPreguntaRandom(preguntas, contenedorId) {
    const preguntaObj = preguntas[Math.floor(Math.random() * preguntas.length)];
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = `<p>${preguntaObj.pregunta}</p>`;
    preguntaObj.opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => {
        if (opcion === preguntaObj.correcta) {
          contenedor.innerHTML += `<p class='correcto'>✅ ¡Correcto!</p>`;
        } else {
          contenedor.innerHTML += `<p class='incorrecto'>❌ Incorrecto. La respuesta es "${preguntaObj.correcta}".</p>`;
        }
      };
      contenedor.appendChild(btn);
    });
  }
  
  function jugarMagnitudes() {
    mostrarPreguntaRandom(preguntasMagnitudes, "resultadoMagnitudes");
  }
  
  function jugarMovimiento() {
    mostrarPreguntaRandom(preguntasMovimiento, "resultadoMovimiento");
  }
  
  function juegoAdivinaMagnitud() {
    const magnitudes = ["masa", "tiempo", "temperatura", "longitud"];
    const descripcion = {
      masa: "Se mide en kilogramos y representa la cantidad de materia.",
      tiempo: "Se mide en segundos y es la duración de los eventos.",
      temperatura: "Se mide en kelvin y mide qué tan caliente está algo.",
      longitud: "Se mide en metros y representa la distancia."
    };
    const seleccion = magnitudes[Math.floor(Math.random() * magnitudes.length)];
    const contenedor = document.getElementById("juegoMagnitud");
    contenedor.innerHTML = `<p>❓ ${descripcion[seleccion]}</p>`;
    magnitudes.forEach(m => {
      const btn = document.createElement("button");
      btn.textContent = m;
      btn.onclick = () => {
        if (m === seleccion) {
          contenedor.innerHTML += `<p class='correcto'>✅ ¡Correcto!</p>`;
        } else {
          contenedor.innerHTML += `<p class='incorrecto'>❌ Incorrecto. Era "${seleccion}".</p>`;
        }
      };
      contenedor.appendChild(btn);
    });
  }
  
  function juegoRelacionMovimiento() {
    const pares = [
      { concepto: "Fuerza", relacion: "Newton" },
      { concepto: "Velocidad", relacion: "m/s" },
      { concepto: "Aceleración", relacion: "m/s²" }
    ];
    const elegido = pares[Math.floor(Math.random() * pares.length)];
    const contenedor = document.getElementById("juegoMovimiento");
    contenedor.innerHTML = `<p>❓ ¿Cuál es la unidad de medida de "${elegido.concepto}"?</p>`;
    const opciones = ["Newton", "m/s", "m/s²", "Kg"];
    opciones.forEach(op => {
      const btn = document.createElement("button");
      btn.textContent = op;
      btn.onclick = () => {
        if (op === elegido.relacion) {
          contenedor.innerHTML += `<p class='correcto'>✅ ¡Correcto!</p>`;
        } else {
          contenedor.innerHTML += `<p class='incorrecto'>❌ Incorrecto. Era "${elegido.relacion}".</p>`;
        }
      };
      contenedor.appendChild(btn);
    });
  }
  function accesoDenegado() {
    alert("Debes estar registrado para acceder a este contenido");
  }

  window.accesoDenegado = accesoDenegado;
  window.juegoRelacionMovimiento=juegoRelacionMovimiento;
  window.juegoAdivinaMagnitud=juegoAdivinaMagnitud;
  window.mostrarPreguntaRandom=mostrarPreguntaRandom;
  