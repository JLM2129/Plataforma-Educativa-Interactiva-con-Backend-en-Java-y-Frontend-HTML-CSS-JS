const preguntas = {
    energia: [
      {
        pregunta: "¿Qué tipo de energía tiene un objeto en movimiento?",
        opciones: ["Energía potencial", "Energía cinética", "Energía térmica", "Energía eléctrica"],
        correcta: "Energía cinética"
      },
      {
        pregunta: "¿Cuál es la fórmula del trabajo en física?",
        opciones: ["Fuerza × Tiempo", "Masa × Aceleración", "Fuerza × Distancia", "Velocidad ÷ Tiempo"],
        correcta: "Fuerza × Distancia"
      },
      {
        pregunta: "¿En qué unidad se mide el trabajo?",
        opciones: ["Julios", "Watts", "Newton", "Pascal"],
        correcta: "Julios"
      }
    ],
    ondas: [
      {
        pregunta: "¿Qué tipo de onda necesita un medio para propagarse?",
        opciones: ["Onda electromagnética", "Onda transversal", "Onda mecánica", "Onda de radio"],
        correcta: "Onda mecánica"
      },
      {
        pregunta: "¿Cuál es la unidad de frecuencia del sonido?",
        opciones: ["Hertz", "Julio", "Newton", "Decibel"],
        correcta: "Hertz"
      },
      {
        pregunta: "¿Qué propiedad de una onda determina su volumen?",
        opciones: ["Frecuencia", "Amplitud", "Longitud de onda", "Velocidad"],
        correcta: "Amplitud"
      }
    ]
  };
  
  const juegos = {
    energia: () => {
      const casos = [
        { descripcion: "Un resorte comprimido se suelta", respuesta: "Potencial → Cinética" },
        { descripcion: "Una bombilla encendida", respuesta: "Eléctrica → Lumínica" },
        { descripcion: "Una persona comiendo y luego corriendo", respuesta: "Química → Cinética" }
      ];
      const elegido = casos[Math.floor(Math.random() * casos.length)];
      const contenedor = document.getElementById("juego-energia");
      contenedor.innerHTML = `<p>❓ ¿Qué transformación de energía ocurre?: <strong>${elegido.descripcion}</strong></p>`;
      const opciones = ["Cinética → Potencial", "Potencial → Cinética", "Eléctrica → Lumínica", "Química → Cinética"];
      opciones.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => {
          const msg = op === elegido.respuesta
            ? `<p class="correcto">✅ ¡Correcto!</p>`
            : `<p class="incorrecto">❌ Incorrecto. Era: ${elegido.respuesta}.</p>`;
          contenedor.innerHTML += msg;
        };
        contenedor.appendChild(btn);
      });
    },
    ondas: () => {
      const tipos = {
        "Se propaga en el vacío y transmite luz.": "Electromagnética",
        "Necesita un medio como el aire o el agua.": "Mecánica",
        "Las partículas oscilan perpendicularmente a la dirección de propagación.": "Transversal",
        "Las partículas oscilan en la misma dirección que la propagación.": "Longitudinal"
      };
      const descripciones = Object.keys(tipos);
      const descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
      const correcta = tipos[descripcion];
      const contenedor = document.getElementById("juego-ondas");
      contenedor.innerHTML = `<p>❓ ${descripcion}</p>`;
      const opciones = ["Mecánica", "Electromagnética", "Transversal", "Longitudinal"];
      opciones.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op;
        btn.onclick = () => {
          const msg = op === correcta
            ? `<p class="correcto">✅ ¡Correcto!</p>`
            : `<p class="incorrecto">❌ Incorrecto. Era: ${correcta}.</p>`;
          contenedor.innerHTML += msg;
        };
        contenedor.appendChild(btn);
      });
    }
  };
  
  // Lógica para mostrar ejercicios
  function jugarEjercicio(tema) {
    const preguntasTema = preguntas[tema];
    if (!preguntasTema) return;
  
    const pregunta = preguntasTema[Math.floor(Math.random() * preguntasTema.length)];
    const contenedor = document.getElementById(`ejercicio-${tema}`);
    contenedor.innerHTML = `<p>${pregunta.pregunta}</p>`;
  
    pregunta.opciones.forEach(opcion => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => {
        const resultado = opcion === pregunta.correcta
          ? `<p class="correcto">✅ ¡Correcto!</p>`
          : `<p class="incorrecto">❌ Incorrecto. La respuesta era: "${pregunta.correcta}".</p>`;
        contenedor.innerHTML += resultado;
      };
      contenedor.appendChild(btn);
    });
  }
  
  // Lógica para mostrar juegos
  function jugarJuego(tema) {
    const juego = juegos[tema];
    if (juego) {
      juego();
    } else {
      alert("Juego no disponible para este tema.");
    }
  }
  function accesoDenegado() {
    alert("Debes estar registrado para acceder a este contenido");
  }
  // Para que estén disponibles en HTML inline
  window.jugarEjercicio = jugarEjercicio;
  window.jugarJuego = jugarJuego;
  window.accesoDenegado=accesoDenegado;