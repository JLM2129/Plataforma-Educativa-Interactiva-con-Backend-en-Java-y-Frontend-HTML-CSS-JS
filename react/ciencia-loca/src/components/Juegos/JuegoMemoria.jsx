import { useEffect, useState } from "react";

export default function JuegoMemoria({ juego }) {
  const datos = JSON.parse(juego.dataJson || juego.datos || "{}");
  const cartasOriginales = (datos.cartas || datos.pares || []).map(String);

  // Mezcla inicial de cartas duplicadas
  const cartasIniciales = [...cartasOriginales, ...cartasOriginales]
    .sort(() => Math.random() - 0.5)
    .map((valor, i) => ({
      id: i,
      valor,
      descubierta: false,
      emparejada: false,
    }));

  const [cartas, setCartas] = useState(cartasIniciales);
  const [seleccionadas, setSeleccionadas] = useState([]);
  const [mensaje, setMensaje] = useState("");

  // Comparar dos cartas seleccionadas
  useEffect(() => {
    if (seleccionadas.length === 2) {
      const [i1, i2] = seleccionadas;
      const carta1 = cartas[i1];
      const carta2 = cartas[i2];

      if (carta1.valor === carta2.valor) {
        const nuevas = [...cartas];
        nuevas[i1].emparejada = true;
        nuevas[i2].emparejada = true;
        setCartas(nuevas);
        setSeleccionadas([]);
        setMensaje("✅ ¡Emparejaste!");
      } else {
        setTimeout(() => {
          const nuevas = [...cartas];
          nuevas[i1].descubierta = false;
          nuevas[i2].descubierta = false;
          setCartas(nuevas);
          setSeleccionadas([]);
          setMensaje("❌ No es un par. Intenta de nuevo.");
        }, 800);
      }
    }
  }, [seleccionadas, cartas]);

  const descubrirCarta = (index) => {
    if (seleccionadas.length === 2 || cartas[index].descubierta || cartas[index].emparejada) return;

    const nuevas = [...cartas];
    nuevas[index].descubierta = true;
    setCartas(nuevas);
    setSeleccionadas([...seleccionadas, index]);
  };

  const todasEmparejadas = cartas.every(c => c.emparejada);

  return (
    <div>
      <p>{juego.descripcion}</p>
      <div className="tablero-memoria" style={{ display: "grid", gridTemplateColumns: "repeat(4, 80px)", gap: "10px" }}>
        {cartas.map((carta, i) => (
          <div
            key={i}
            onClick={() => descubrirCarta(i)}
            style={{
              width: "80px",
              height: "80px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              border: "1px solid #ccc",
              backgroundColor: carta.emparejada ? "#aaffaa" : "#ddd",
              cursor: carta.emparejada ? "default" : "pointer"
            }}
          >
            {carta.descubierta || carta.emparejada ? carta.valor : "❓"}
          </div>
        ))}
      </div>
      <p>{mensaje}</p>
      {todasEmparejadas && <p>🎉 ¡Has emparejado todas las cartas!</p>}
    </div>
  );
}
