import { useEffect, useState } from "react";
import axios from "axios";
import JuegoContrarreloj from "./Juegos/JuegoContrarreloj";
import JuegoMemoria from "./Juegos/JuegoMemoria";
import JuegoArrastrar from "./Juegos/JuegoArrastrar";


export default function Juegos({ idSubtema }) {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    if (!idSubtema) return;
    axios.get(`http://localhost:8080/api/juegos/${idSubtema}`)
      .then(res =>{console.log("juegos recibidos:",res.data); setJuegos(res.data);})
      .catch(err => console.error("Error cargando juegos:", err));
  }, [idSubtema]);

  return (
    <section className="actividades">
      <h2>🎮 Juegos</h2>
      <div className="juegos" id="juegos-container">
        {juegos.map((juego, index) => {
          if (juego.tipo === "contrarreloj") {
            return (
              <div key={index} className="juego">
                <JuegoContrarreloj juego={juego} />
              </div>
            );
          } else if (juego.tipo === "memoria") {
            return (
              <div key={index} className="juego">
                <JuegoMemoria juego={juego} />
              </div>
            );

          } else if (juego.tipo === "arrastrar"){
            return(
            <div key={index} className="juego">
                <JuegoArrastrar juego={juego} />
              </div> );
          } else {
            return (
              <div key={index} className="juego">
                <p>⚠️ Tipo de juego "{juego.tipo}" no soportado.</p>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
