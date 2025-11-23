// src/pages/SubtemaPage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Juegos from "../components/Juegos";
import Ejercicios from "../components/Ejercicios";
import ListaRecursos from "../components/ListaRecursos";

export default function SubtemaPage() {
  const { id } = useParams();
  const [subtema, setSubtema] = useState(null);
  const [materiales, setMateriales] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchDatos = async () => {
      try {
        const subtemaRes = await axios.get(`http://localhost:8080/api/subtemas/${id}`);
        setSubtema(subtemaRes.data);

        const materialesRes = await axios.get(`http://localhost:8080/api/materiales/subtema/${id}`);
        setMateriales(materialesRes.data);
      } catch (error) {
        console.error("Error cargando el subtema:", error);
      }
    };

    fetchDatos();
  }, [id]);

  if (!subtema) return <p>Cargando subtema...</p>;

  return (
    <div className="contenedor-subtema">
      <header className="encabezado">
        <img src="/logo.jpg" alt="logo" className="logo" />
        <h1 id="titulo-subtema">{subtema.nombre}</h1>
        
      </header>
      <div className="contenido-izquierdo">
        
        <div className="imagen" id="contenido-imagen">
          {materiales.map((m, i) => {
            if (m.tipo === "imagen") {
              return <img key={i} src={`/imagenes/${m.urlImagen}`} alt="" style={{ maxWidth: "100%" }} />;
            } else if (m.tipo === "video") {
              return <video key={i} controls src={`/videos/${m.urlImagen}`} style={{ maxWidth: "100%" }} />;
            }
            return null;
          })}
        </div>
        <div id="contenido-subtema">
          {materiales
            .filter(m => m.tipo === "texto")
            .map((m, i) => <p key={i} dangerouslySetInnerHTML={{ __html: m.contenido }} />)}
        </div>
        <Ejercicios idSubtema={id} />
        <Juegos idSubtema={id} />
      </div>
      <div className="recursos-educativos">
        <h2>📚 Recursos Educativos</h2>
        <ListaRecursos idSubtema={id} />
      </div>
    </div>
  );
}
