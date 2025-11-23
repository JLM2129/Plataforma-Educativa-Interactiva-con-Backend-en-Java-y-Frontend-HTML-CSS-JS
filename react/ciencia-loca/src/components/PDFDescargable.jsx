// src/components/PDFDescargable.jsx
export default function PDFDescargable({ url, texto }) {
  return (
    <div className="bloque pdfs">
      <h3>📚 PDFs Descargables</h3>
      <a href={url} className="recurso-btn" download>
        {texto}
      </a>
      <button className="btn-accion" onClick={() => alert("Debes estar registrado para acceder a este contenido.")}>
        Ver más guías
      </button>
    </div>
  );
}
