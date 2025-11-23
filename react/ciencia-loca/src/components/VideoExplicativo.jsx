export default function VideoExplicativo({ url }) {
  return (
    <div className="bloque videos">
      <h3>🎥 Videos Explicativos</h3>
      <div className="video-responsive">
        <iframe src={url} title="Video explicativo" allowFullScreen></iframe>
      </div>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más videos
      </button>
    </div>
  );
}
