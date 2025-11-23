// src/pages/TemaPage.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axiosConfig';

export default function TemaPage() {
  const { id } = useParams();
  const [tema, setTema] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get(`/api/temas/${id}`)
      .then(res => setTema(res.data))
      .catch(err => setError('Error al cargar el tema.'));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!tema) return <p>Cargando tema…</p>;

  return (
    <div className="tema-page">
      <header className="encabezado">
        <img src="/logo.jpg" alt="logo" className="logo" />
        <h1 className="titulo-tema">{tema.nombre}</h1>
       <Link to="/usuario"> <img src={`/imagenes/${tema.url_imagen}`} alt={tema.nombre} className="imagen-tema" /></Link>
      </header>
      <main className="contenedor-tema">
        <ol id="lista-subtemas">
          {tema.subtemas?.map(sub => (
            <li key={sub.id}>
              <Link to={`/subtema/${sub.id}`}>{sub.nombre}</Link>
              <p className="descripcion-subtema">{sub.descripcion}</p>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
