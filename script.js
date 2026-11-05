const avatar = document.getElementById('avatar');
const layer = document.getElementById('sparkleLayer');

if (avatar && layer) {
  avatar.addEventListener('mouseenter', () => {
    for (let i = 0; i < 18; i++) {
      const s = document.createElement('span');
      s.className = 'sparkle';
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 50;
      s.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
      s.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
      s.style.left = '50%';
      s.style.top = '50%';
      s.style.animationDelay = (Math.random() * 0.15) + 's';
      layer.appendChild(s);
      setTimeout(() => s.remove(), 900);
    }
  });
}

// Lógica del contador corregida para acoplarse a tus estilos CSS (.visitor-counter strong)
document.addEventListener('DOMContentLoaded', () => {
  // Buscamos la etiqueta strong dentro de la clase .visitor-counter
  const counterEl = document.querySelector('.visitor-counter strong');
  
  if (counterEl) {
    fetch('https://counterapi.dev')
      .then(response => response.json())
      .then(data => {
        if (data && data.count) {
          counterEl.textContent = data.count;
        }
      })
      .catch(error => {
        console.error('Error al cargar visitas:', error);
        // Respaldo local si la API externa no responde
        let localVisits = localStorage.getItem('linktree_page_visits') || 210;
        localVisits = parseInt(localVisits) + 1;
        localStorage.setItem('linktree_page_visits', localVisits);
        counterEl.textContent = localVisits;
      });
  }
});
