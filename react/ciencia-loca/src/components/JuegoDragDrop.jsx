// src/components/JuegoDragDrop.jsx
import useElectricidad from "../data/useElectricidad";

export default function JuegoDragDrop() {
  const {
    dragsPendientes,
    permitirSoltar,
    arrastrar,
    soltar,
    mensajeDrag,
    aciertos,
    total,
    reiniciarJuego
  } = useElectricidad();

  return (
    <div className="bloque juegos">
      <h3>🎮 Juego de Arrastrar y Soltar</h3>
      <p>Arrastra cada concepto al grupo correspondiente:</p>
      
      <div className="grupos">
        <div
          onDrop={ev => soltar(ev, 'electricidad')}
          onDragOver={permitirSoltar}
          className="grupo"
        >
          ⚡ Electricidad
        </div>
        <div
          onDrop={ev => soltar(ev, 'magnetismo')}
          onDragOver={permitirSoltar}
          className="grupo"
        >
          🧲 Magnetismo
        </div>
      </div>

      <div className="conceptos">
        {dragsPendientes.map((item, i) => (
          <div
            key={i}
            id={`drag-${i}`}
            draggable="true"
            onDragStart={(e) => arrastrar(e, item.nombre)}
            className="concepto"
          >
            {item.nombre}
          </div>
        ))}
      </div>

      <p>{mensajeDrag}</p>
      {aciertos === total && (
        <p>🎉 ¡Has clasificado todos los conceptos correctamente!</p>
      )}
      <button onClick={reiniciarJuego} className="btn-actividad">🔄 Reiniciar</button>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
            Ver más ejercicios
          </button>
    </div>
    
  );
}
