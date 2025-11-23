import { useState } from "react";

const elementos = [
  { nombre: "Cobre", tipo: "conductor" },
  { nombre: "Plástico", tipo: "aislante" },
  { nombre: "Vidrio", tipo: "aislante" },
  { nombre: "Aluminio", tipo: "conductor" }
];

const dragsIniciales = [
  { nombre: "Voltaje", grupo: "electricidad" },
  { nombre: "Corriente", grupo: "electricidad" },
  { nombre: "Imán", grupo: "magnetismo" },
  { nombre: "Campo magnético", grupo: "magnetismo" }
];

export default function useElectricidad() {
  const [clasificacion, setClasificacion] = useState(Array(elementos.length).fill(""));
  const [resultadosClasificacion, setResultadosClasificacion] = useState(null);

  const [dragsPendientes, setDragsPendientes] = useState(dragsIniciales);
  const [mensajeDrag, setMensajeDrag] = useState("");
  const [aciertos, setAciertos] = useState(0);

  function verificarClasificacion() {
    const correctos = elementos.map(e => e.tipo);
    let aciertos = 0;
    clasificacion.forEach((v, i) => { if (v === correctos[i]) aciertos++; });
    setResultadosClasificacion(`${aciertos}/${elementos.length}`);
  }

  function actualizarClasificacion(idx, val) {
    setClasificacion(prev => {
      const c = [...prev];
      c[idx] = val;
      return c;
    });
  }

  function permitirSoltar(ev) {
    ev.preventDefault();
  }

  function arrastrar(ev, nombre) {
    ev.dataTransfer.setData("text", nombre);
  }

  function soltar(ev, grupoDestino) {
    ev.preventDefault();
    const texto = ev.dataTransfer.getData("text");

    const obj = dragsPendientes.find(d => d.nombre === texto);
    if (!obj) return;

    if (grupoDestino === obj.grupo) {
      setMensajeDrag("✅ ¡Correcto!");
      setAciertos(prev => prev + 1);
      setDragsPendientes(prev => prev.filter(d => d.nombre !== texto));
    } else {
      setMensajeDrag("❌ Eso no va ahí.");
    }
  }

  function reiniciarJuego() {
    setMensajeDrag("");
    setAciertos(0);
    setDragsPendientes(dragsIniciales);
  }

  return {
    elementos, clasificacion, actualizarClasificacion, verificarClasificacion, resultadosClasificacion,
    dragsPendientes, permitirSoltar, arrastrar, soltar, mensajeDrag, aciertos, reiniciarJuego, total: dragsIniciales.length
  };
}
