import JuegoContrarreloj from "./JuegoContrarreloj";
import JuegoMemoria from "./JuegoMemoria";
import JuegoArrastrar from "./JuegoArrastrar"; 
const juegoComponents = {
  contrarreloj: JuegoContrarreloj,
  memoria: JuegoMemoria,
  arrastrar: JuegoArrastrar, 
};

export default function renderJuego(juego) {
  const Component = juegoComponents[juego.tipo];
  return Component ? <Component juego={juego} /> : <p>⚠️ Tipo de juego no soportado: {juego.tipo}</p>;
}
