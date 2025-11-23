import { useEffect, useRef, useState } from 'react';

function useAudioControl(src) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
    }
  }, [src]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setMuted(false);
    } else {
      audioRef.current.pause();
      setMuted(true);
    }
  };

  return { audioRef, muted, toggleMute };
}

export default useAudioControl;

