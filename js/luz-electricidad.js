function accesoDenegado() {
    alert("Contenido exclusivo para suscriptores de Ciencia Loca.");
  }
  
  // 🌟 Juego de Verdadero o Falso (Luz y Óptica)
  const preguntasVF = [
    { pregunta: "La luz necesita un medio para propagarse.", respuesta: false },
    { pregunta: "Los espejos planos producen imágenes virtuales.", respuesta: true },
    { pregunta: "La luz blanca se puede descomponer en varios colores.", respuesta: true }
  ];
  
  function juegoVerdaderoFalsoLuz() {
    const contenedor = document.getElementById("ejercicioLuz");
    contenedor.innerHTML = "";
    preguntasVF.forEach((item, i) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${item.pregunta}</p>
        <button onclick="verificarVF(${i}, true)">Verdadero</button>
        <button onclick="verificarVF(${i}, false)">Falso</button>
        <p id="respVF${i}"></p>
      `;
      contenedor.appendChild(div);
    });
  }
  
  function verificarVF(i, respuestaUsuario) {
    const correcto = preguntasVF[i].respuesta === respuestaUsuario;
    document.getElementById(`respVF${i}`).innerText = correcto ? "✅ ¡Correcto!" : "❌ Incorrecto.";
  }
  
  // 🕵️ Adivinanza de Luz
  function juegoAdivinaLuz() {
    const adivinanza = {
      pista: "Soy invisible, pero sin mí no puedes ver. Viajo en línea recta y me reflejo también.",
      respuesta: "luz"
    };
    const contenedor = document.getElementById("juegoLuz");
    contenedor.innerHTML = `
      <p>${adivinanza.pista}</p>
      <input type="text" id="respuestaLuz" placeholder="¿Qué soy?" />
      <button onclick="verificarAdivinanza()">Responder</button>
      <p id="resultadoAdivinanza"></p>
    `;
  }
  
  function verificarAdivinanza() {
    const respuesta = document.getElementById("respuestaLuz").value.toLowerCase();
    const resultado = document.getElementById("resultadoAdivinanza");
    resultado.innerText = (respuesta === "luz") ? "✅ ¡Correcto!" : "❌ Intenta de nuevo.";
  }
  
  // 📦 Clasificación de objetos conductores y aislantes
  function juegoClasificacionElectricidad() {
    const elementos = [
      { nombre: "Cobre", tipo: "conductor" },
      { nombre: "Plástico", tipo: "aislante" },
      { nombre: "Vidrio", tipo: "aislante" },
      { nombre: "Aluminio", tipo: "conductor" }
    ];
  
    const contenedor = document.getElementById("ejercicioElectricidad");
    contenedor.innerHTML = "<p>Clasifica los siguientes materiales como conductores o aislantes:</p>";
    elementos.forEach((item, i) => {
      contenedor.innerHTML += `
        <p>${item.nombre}
          <select id="clasifica${i}">
            <option value="">Selecciona</option>
            <option value="conductor">Conductor</option>
            <option value="aislante">Aislante</option>
          </select>
        </p>
      `;
    });
    contenedor.innerHTML += `<button onclick="verificarClasificacion()">Verificar</button><p id="resultadoClasificacion"></p>`;
  }
  
  function verificarClasificacion() {
    const respuestas = ["conductor", "aislante", "aislante", "conductor"];
    let aciertos = 0;
    respuestas.forEach((resp, i) => {
      const valor = document.getElementById(`clasifica${i}`).value;
      if (valor === resp) aciertos++;
    });
    document.getElementById("resultadoClasificacion").innerText = `✅ Aciertos: ${aciertos}/${respuestas.length}`;
  }
  
  // 🔌 Juego Drag & Drop (Electricidad)
  function juegoDragDropElectricidad() {
    const contenedor = document.getElementById("juegoElectricidad");
    contenedor.innerHTML = `
      <p>Arrastra cada concepto al grupo correcto:</p>
      <div class="grupos">
        <div ondrop="soltar(event, 'electricidad')" ondragover="permitirSoltar(event)" class="grupo" id="electricidad">Electricidad</div>
        <div ondrop="soltar(event, 'magnetismo')" ondragover="permitirSoltar(event)" class="grupo" id="magnetismo">Magnetismo</div>
      </div>
      <div class="conceptos">
        <div draggable="true" ondragstart="arrastrar(event)" id="e1" data-grupo="electricidad">Voltaje</div>
        <div draggable="true" ondragstart="arrastrar(event)" id="e2" data-grupo="electricidad">Corriente</div>
        <div draggable="true" ondragstart="arrastrar(event)" id="m1" data-grupo="magnetismo">Imán</div>
        <div draggable="true" ondragstart="arrastrar(event)" id="m2" data-grupo="magnetismo">Campo magnético</div>
      </div>
      <p id="resultadoDragDrop"></p>
    `;
  }
  
  function permitirSoltar(ev) {
    ev.preventDefault();
  }
  
  function arrastrar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function soltar(ev, grupoDestino) {
    ev.preventDefault();
    const idElemento = ev.dataTransfer.getData("text");
    const elemento = document.getElementById(idElemento);
    const grupoCorrecto = elemento.getAttribute("data-grupo");
    if (grupoDestino === grupoCorrecto) {
      ev.target.appendChild(elemento);
      document.getElementById("resultadoDragDrop").innerText = "✅ ¡Bien hecho!";
    } else {
      document.getElementById("resultadoDragDrop").innerText = "❌ Eso no va ahí.";
    }
  }
  