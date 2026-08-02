
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


fetch('https://api.counterapi.dev/v1/sindy-linktree/visitas/up')
  .then(response => response.json())
  .then(data => {
    const counterEl = document.getElementById('visit-count');
    if (counterEl) {
      counterEl.textContent = data.count;
    }
  })
  .catch(error => {
    console.error('Error al cargar visitas:', error);
    const counterEl = document.getElementById('visit-count');
    if (counterEl) {
      counterEl.textContent = '1';
    }
  });