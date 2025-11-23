import { useEffect } from 'react';

function EfectoParticulas() {
  useEffect(() => {
    const figuras = document.querySelectorAll('.figura');

    figuras.forEach(figura => asignarEventoExplotar(figura));

    function asignarEventoExplotar(figura) {
      figura.addEventListener('click', () => {
        const parent = figura.parentNode;
        const nextSibling = figura.nextSibling;
        const figuraRect = figura.getBoundingClientRect();

        figura.classList.add('explotar');
        crearParticulas(figuraRect);

        setTimeout(() => {
          figura.remove();
          setTimeout(() => {
            const nuevaFigura = figura.cloneNode(true);
            nuevaFigura.classList.remove('explotar');
            nuevaFigura.style.animation = figura.style.animation;
            nuevaFigura.style.left = `${Math.floor(Math.random() * 90) + 5}%`;
            parent.insertBefore(nuevaFigura, nextSibling);
            asignarEventoExplotar(nuevaFigura);
          }, 2000);
        }, 500);
      });
    }

    function crearParticulas(rect) {
      const cantidad = 15;
      const simbolos = ["0", "1", "2", "3", "4", "5", "π", "x²", "√", "∞", "∑", "e", "7", "8", "9"];

      for (let i = 0; i < cantidad; i++) {
        const numero = document.createElement('div');
        numero.classList.add('particula');
        numero.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
        numero.style.position = 'absolute';
        numero.style.left = `${rect.left + rect.width / 2}px`;
        numero.style.top = `${rect.top + rect.height / 2}px`;
        numero.style.fontSize = '20px';
        numero.style.fontWeight = 'bold';
        numero.style.color = '#ff6600';
        numero.style.pointerEvents = 'none';
        document.body.appendChild(numero);

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 60 + 20;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        numero.animate([
          { transform: 'translate(0, 0)', opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], {
          duration: 800,
          easing: 'ease-out'
        });

        setTimeout(() => numero.remove(), 800);
      }
    }
  }, []);

  return null;
}

export default EfectoParticulas;
