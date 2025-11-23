import React, { useState, useRef } from "react";
import "./Header.css";

function Header() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleMuteToggle = () => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsMuted(false);
      } else {
        audio.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <img  src="/logo1.jpg" alt="logo" />
      </div>

      <audio ref={audioRef} src="/sonido/0408.MP3" autoPlay loop />

      <nav className="nav">
        <a href="/registro">Registrarse</a>
        <a href="/login">Iniciar sesión</a>
        <button id="muteBtn" onClick={handleMuteToggle}>
          <img
            src={isMuted ? "/einsteinlengua.png" : "/Einsteincallado.png"}
            alt="Icono sonido"
          />
        </button>
        <span id="muteLabel">{isMuted ? "Play" : "Mute"}</span>
      </nav>
    </header>
  );
}

export default Header;
