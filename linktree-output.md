# 📁 PROJECT EXPORT FOR LLMs

## 📊 Project Information

- **Project Name**: `linktree`
- **Generated On**: 2026-11-05 17:34:26 (America/Bogota / GMT-05:00)
- **Total Files Processed**: 5
- **Export Tool**: Easy Whole Project to Single Text File for LLMs v1.1.0
- **Tool Author**: Jota / José Guilherme Pandolfi

### ⚙️ Export Configuration

| Setting | Value |
|---------|-------|
| Language | `en` |
| Max File Size | `1 MB` |
| Include Hidden Files | `false` |
| Output Format | `both` |

## 🌳 Project Structure

```
├── 📄 index.html (14.94 KB)
├── 📄 link.png (8.79 KB)
├── 📄 profile.png (386.23 KB)
├── 📄 script.js (1.58 KB)
└── 📄 style.css (6.15 KB)
```

## 📑 Table of Contents

**Project Files:**

- [📄 index.html](#📄-index-html)
- [📄 script.js](#📄-script-js)
- [📄 style.css](#📄-style-css)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Files | 5 |
| Total Directories | 0 |
| Text Files | 3 |
| Binary Files | 2 |
| Total Size | 417.69 KB |

### 📄 File Types Distribution

| Extension | Count |
|-----------|-------|
| `.png` | 2 |
| `.html` | 1 |
| `.js` | 1 |
| `.css` | 1 |

## 💻 File Code Contents

### <a id="📄-index-html"></a>📄 `index.html`

**File Info:**
- **Size**: 14.94 KB
- **Extension**: `.html`
- **Language**: `html`
- **Location**: `index.html`
- **Relative Path**: `root`
- **Created**: 2026-08-01 21:53:51 (America/Bogota / GMT-05:00)
- **Modified**: 2026-11-05 17:30:01 (America/Bogota / GMT-05:00)
- **MD5**: `8336323f4180d3ba9c5ea7bd02b71395`
- **SHA256**: `74e48d1eefd5a59a7d09f5c6cd50079c8aa7244dd7113c10dc5aa7a7daa15ecd`
- **Encoding**: UTF-8

**File code content:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="link.png">
<title>Sindy Alejandra — Enlaces</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="bg-blob blob1"></div>
  <div class="bg-blob blob2"></div>
  <div class="bg-blob blob3"></div>

<div class="card-container">
<div class="card">

  <div class="topbar">
    <img class="topbar-logo" src="link.png" alt="logo">
    <button class="share-btn" onclick="navigator.share ? navigator.share({title:'Sindy Alejandra', url:location.href}) : alert('Copia el enlace desde la barra de direcciones para compartir 💗')" title="Compartir">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v13"/><path d="M7 8l5-5 5 5"/><path d="M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4"/></svg>
    </button>
  </div>

  <div class="header">
    <div class="avatar" id="avatar">
      <img src="profile.png" alt="Foto de perfil" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback').style.display='flex';">
      <span class="fallback">S</span>
      <div class="sparkle-layer" id="sparkleLayer"></div>
    </div>
    <h1 class="name">Sindy Alejandra</h1>
    <div class="tagline">Ingeniera de sistemas · creadora de contenido<br>todos mis enlaces, en un solo lugar</div>
  </div>

  <div class="socials">
    <a href="https://www.instagram.com/sindyalejah/" target="_blank" rel="noopener" title="Instagram">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
    </a>
    <a href="https://www.tiktok.com/@sahernandezra?_r=1&_t=ZS-98WzB19kfk0" target="_blank" rel="noopener" title="TikTok">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/sindycol/" target="_blank" rel="noopener" title="LinkedIn">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7.5" y1="10" x2="7.5" y2="17"/><circle cx="7.5" cy="6.8" r="0.6" fill="currentColor"/><path d="M11.5 17v-4.2c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6V17"/></svg>
    </a>
    <a href="https://www.facebook.com/SysEngAlexCO/" target="_blank" rel="noopener" title="Facebook">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3.5h2V21h3.5v-6.5h2.7l.5-3.5h-3.2V8.5c0-.8.4-1.3 1.4-1.3H15z"/></svg>
    </a>
    <a href="https://x.com/SINDYALEJANDRAH" target="_blank" rel="noopener" title="X">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>
    </a>
    <a href="https://www.snapchat.com/@alex_stunt?invite_id=WhGOdWmL&locale=en_CO" target="_blank" rel="noopener" title="Snapchat">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c-2.8 0-4.6 2-4.6 4.6 0 1 0 2-.2 2.7-.5.2-1.4.3-1.7.3-.3 0-.5.6-.1.9.4.3 1.2.7 1.5 1.3.2.4-.6 1.6-2 2 0 .5.7.8 1.7.9.1.4 0 .9.5 1.1.7.2 1.6-.1 2.3.2.6.3 1.1 1 2.6 1s2-.7 2.6-1c.7-.3 1.6 0 2.3-.2.5-.2.4-.7.5-1.1 1-.1 1.7-.4 1.7-.9-1.4-.4-2.2-1.6-2-2 .3-.6 1.1-1 1.5-1.3.4-.3.2-.9-.1-.9-.3 0-1.2-.1-1.7-.3-.2-.7-.2-1.7-.2-2.7C16.6 5 14.8 3 12 3z"/></svg>
    </a>
    <a href="https://github.com/HelloWorldAlex" target="_blank" rel="noopener" title="GitHub">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a9 9 0 0 0-2.8 17.5c.5.1.6-.2.6-.4v-1.7c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.5 0-1 .3-1.7.9-2.4-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.5 1a8.5 8.5 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.3.1 2.5.6.7.9 1.5.9 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.5c0 .2.1.5.6.4A9 9 0 0 0 12 3z"/></svg>
    </a>
    <a href="https://www.youtube.com/@AlexOneCod" target="_blank" rel="noopener" title="YouTube">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M11 10l4 2-4 2z" fill="currentColor" stroke="none"/></svg>
    </a>
    <a href="https://open.spotify.com/user/op67011lvy8vhdb8yjpxh31kl?si=4Ki099o_RMyTFvQQ80Xh6A&utm_source=copy-link" target="_blank" rel="noopener" title="Spotify">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 11.5c3.5-1 7-.5 9 1.5"/><path d="M8.5 14.5c2.5-.7 5-.3 6.5 1"/><path d="M9 17c1.8-.5 3.5-.2 4.5.8"/></svg>
    </a>
  </div>

  <div class="section-label">Sobre mí</div>
  <p class="about-text">¡Hola! Soy Sindy Alejandra 🇨🇴 Ingeniera de sistemas colombiana, apasionada por la tecnología, el contenido digital y el crecimiento personal. Aquí encuentras todo mi mundo: mis redes, mis proyectos y mi historia académica, reunidos en un solo lugar.</p>

  <div class="section-label">Apoya mi trabajo</div>
  <div class="links">
    <a class="link-row" href="https://paypal.me/AlexOneCod?country.x=CO&locale.x=es_XC" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 4h6.5c2.5 0 4 1.4 4 3.6 0 2.7-2 4.4-5 4.4H9.5L8.5 18H6z"/></svg></span>
      <span class="link-text"><span class="label">Donar</span><span class="value">PayPal — paypal.me/AlexOneCod</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>

     <!-- Nueva Fila de Amazon Wishlist acoplada perfectamente a tu estilo -->
    <a class="link-row" href="https://www.amazon.com/hz/wishlist/ls/2DIW83RMNJ5CT?ref_=wl_share" target="_blank" rel="noopener">
      <span class="icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </span>
      <span class="link-text"><span class="label">Lista de Regalos</span><span class="value">Amazon envio de regalos a Sindy</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
  

  </div>

  <div class="section-label">Redes sociales</div>
  <div class="links">
    <a class="link-row" href="https://www.instagram.com/sindyalejah/" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg></span>
      <span class="link-text"><span class="label">Instagram</span><span class="value">@sindyalejah</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://www.tiktok.com/@sahernandezra?_r=1&_t=ZS-98WzB19kfk0" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></span>
      <span class="link-text"><span class="label">TikTok</span><span class="value">@sahernandezra</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://www.linkedin.com/in/sindycol/" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="7.5" y1="10" x2="7.5" y2="17"/><circle cx="7.5" cy="6.8" r="0.6" fill="currentColor"/><path d="M11.5 17v-4.2c0-1.6 1-2.6 2.4-2.6s2.1 1 2.1 2.6V17"/></svg></span>
      <span class="link-text"><span class="label">LinkedIn</span><span class="value">linkedin.com/in/sindycol</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://www.facebook.com/SysEngAlexCO/" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 4h-2a4 4 0 0 0-4 4v3H7v3.5h2V21h3.5v-6.5h2.7l.5-3.5h-3.2V8.5c0-.8.4-1.3 1.4-1.3H15z"/></svg></span>
      <span class="link-text"><span class="label">Facebook</span><span class="value">SysEngAlexCO</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://x.com/SINDYALEJANDRAH" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg></span>
      <span class="link-text"><span class="label">X</span><span class="value">@SINDYALEJANDRAH</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://www.snapchat.com/@alex_stunt?invite_id=WhGOdWmL&locale=en_CO" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3c-2.8 0-4.6 2-4.6 4.6 0 1 0 2-.2 2.7-.5.2-1.4.3-1.7.3-.3 0-.5.6-.1.9.4.3 1.2.7 1.5 1.3.2.4-.6 1.6-2 2 0 .5.7.8 1.7.9.1.4 0 .9.5 1.1.7.2 1.6-.1 2.3.2.6.3 1.1 1 2.6 1s2-.7 2.6-1c.7-.3 1.6 0 2.3-.2.5-.2.4-.7.5-1.1 1-.1 1.7-.4 1.7-.9-1.4-.4-2.2-1.6-2-2 .3-.6 1.1-1 1.5-1.3.4-.3.2-.9-.1-.9-.3 0-1.2-.1-1.7-.3-.2-.7-.2-1.7-.2-2.7C16.6 5 14.8 3 12 3z"/></svg></span>
      <span class="link-text"><span class="label">Snapchat</span><span class="value">@alex_stunt</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://www.youtube.com/@AlexOneCod" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M11 10l4 2-4 2z" fill="currentColor" stroke="none"/></svg></span>
      <span class="link-text"><span class="label">YouTube</span><span class="value">@AlexOneCod</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://open.spotify.com/user/op67011lvy8vhdb8yjpxh31kl?si=4Ki099o_RMyTFvQQ80Xh6A&utm_source=copy-link" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 11.5c3.5-1 7-.5 9 1.5"/><path d="M8.5 14.5c2.5-.7 5-.3 6.5 1"/><path d="M9 17c1.8-.5 3.5-.2 4.5.8"/></svg></span>
      <span class="link-text"><span class="label">Spotify</span><span class="value">Perfil de Spotify</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
  </div>

  <div class="section-label">Proyectos</div>
  <div class="links">
    <a class="link-row" href="https://alexonecod.blogspot.com/" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg></span>
      <span class="link-text"><span class="label">Sitio web</span><span class="value">alexonecod.blogspot.com</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://github.com/HelloWorldAlex" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3a9 9 0 0 0-2.8 17.5c.5.1.6-.2.6-.4v-1.7c-2.5.5-3-1.1-3-1.1-.4-1-1-1.3-1-1.3-.8-.6.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2-.2-4.1-1-4.1-4.5 0-1 .3-1.7.9-2.4-.1-.2-.4-1.2.1-2.5 0 0 .8-.2 2.5 1a8.5 8.5 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.3.1 2.5.6.7.9 1.5.9 2.4 0 3.5-2.1 4.3-4.1 4.5.3.3.6.8.6 1.7v2.5c0 .2.1.5.6.4A9 9 0 0 0 12 3z"/></svg></span>
      <span class="link-text"><span class="label">GitHub</span><span class="value">github.com/HelloWorldAlex</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
    <a class="link-row" href="https://repository.unad.edu.co/handle/10596/34050" target="_blank" rel="noopener">
      <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5A2.5 2.5 0 016.5 3H19v16.5H6.5A2.5 2.5 0 004 17"/><path d="M4 5.5V17a2.5 2.5 0 002.5 2.5H19"/></svg></span>
      <span class="link-text"><span class="label">Proyecto de grado — UNAD</span><span class="value">repository.unad.edu.co</span></span>
      <span class="arrow">
        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
      </span>
    </a>
  </div>

  <!-- Contador de Visitas -->
  <div class="visitor-counter">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    <span>Visitas: <strong id="visit-count">...</strong></span>
  </div>

  <div class="card-footer-copy">
    Copyright &copy; AlexOneCod 2026
  </div>

</div>
</div>

<!-- Llamado al archivo script.js externo -->
<script src="script.js"></script>

</body>
</html>
```

---

### <a id="📄-script-js"></a>📄 `script.js`

**File Info:**
- **Size**: 1.58 KB
- **Extension**: `.js`
- **Language**: `javascript`
- **Location**: `script.js`
- **Relative Path**: `root`
- **Created**: 2026-08-02 00:08:12 (America/Bogota / GMT-05:00)
- **Modified**: 2026-11-05 17:34:26 (America/Bogota / GMT-05:00)
- **MD5**: `d7771581ab5bce42b8ff75d55000aa1d`
- **SHA256**: `4b9afa8c5fedd54564f0e358b646a2d608d5563a1827d7de14a6cd446b5a6a4b`
- **Encoding**: UTF-8

**File code content:**

```javascript
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

```

---

### <a id="📄-style-css"></a>📄 `style.css`

**File Info:**
- **Size**: 6.15 KB
- **Extension**: `.css`
- **Language**: `css`
- **Location**: `style.css`
- **Relative Path**: `root`
- **Created**: 2026-08-01 22:04:13 (America/Bogota / GMT-05:00)
- **Modified**: 2026-08-02 00:07:45 (America/Bogota / GMT-05:00)
- **MD5**: `3e02b3aac9a4e45a3feba460cd17ee30`
- **SHA256**: `670fb096ebc08332251cb2ea0ae48d358f125b97070e97db306b2d08d01e9129`
- **Encoding**: ASCII

**File code content:**

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root{
  --bg: #E9D9D4;
  --panel: #FFFDFB;
  --card: #FFFFFF;
  --rose-deep: #B5677D;
  --rose-soft: #F3DADD;
  --blush: #F8E4E0;
  --gold: #C9A05C;
  --text: #111111;
  --mute: #666666;
  --line: #E5E5E5;
}

*{ box-sizing:border-box; margin:0; padding:0; }
html,body{ height:100%; }

body{
  position: relative;
  background: var(--bg);
  color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  min-height: 100vh;
  display:flex;
  flex-direction: column;
  align-items:center;
  padding: 30px 16px 30px;
  overflow-x: hidden;
}

.bg-blob{ position: fixed; border-radius: 50%; filter: blur(60px); opacity: 0.6; z-index: 0; pointer-events: none; }
.blob1{ width: 460px; height: 460px; top: -160px; left: -140px; background: radial-gradient(circle, var(--rose-deep), transparent 70%); animation: float1 22s ease-in-out infinite; opacity:0.35; }
.blob2{ width: 420px; height: 420px; bottom: -180px; right: -120px; background: radial-gradient(circle, var(--gold), transparent 70%); animation: float2 26s ease-in-out infinite; opacity:0.3; }
.blob3{ width: 300px; height: 300px; top: 40%; right: -90px; background: radial-gradient(circle, var(--rose-soft), transparent 70%); animation: float3 19s ease-in-out infinite; opacity: 0.4; }

@keyframes float1{ 0%,100%{ transform: translate(0,0) scale(1); } 50%{ transform: translate(40px,60px) scale(1.08); } }
@keyframes float2{ 0%,100%{ transform: translate(0,0) scale(1); } 50%{ transform: translate(-50px,-40px) scale(1.1); } }
@keyframes float3{ 0%,100%{ transform: translate(0,0) scale(1); } 50%{ transform: translate(-30px,50px) scale(0.9); } }

.card-container{
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 460px;
  background: #FFFFFF;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  margin-bottom: 20px;
}

.card{
  width: 100%;
  padding: 24px 20px 32px;
}

.topbar{ display:flex; align-items:center; justify-content:space-between; margin-bottom: 18px; }
.topbar-logo{ width: 32px; height: 32px; border-radius: 50%; background: #fff; border: 1px solid var(--line); padding: 5px; object-fit: contain; }
.share-btn{ width: 34px; height: 34px; border-radius: 50%; background: #F3F3F3; border: none; display:flex; align-items:center; justify-content:center; color: #111; cursor: pointer; transition: all .2s ease; }
.share-btn svg{ width:16px; height:16px; }
.share-btn:hover{ background: #E5E5E5; transform: translateY(-1px); }

.header{ text-align:center; margin-bottom: 24px; }

.avatar{
  width: 96px; height: 96px;
  margin: 0 auto 16px;
  border-radius: 50%;
  position: relative;
  background: #ddd;
  display:flex; align-items:center; justify-content:center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.avatar img{ width:100%; height:100%; object-fit:cover; border-radius:50%; position:relative; z-index:2; }
.avatar .fallback{ display:none; width:100%; height:100%; align-items:center; justify-content:center; font-weight:700; font-size:32px; color:#fff; position:relative; z-index:2; }

.sparkle-layer{ position:absolute; inset:0; pointer-events:none; z-index:3; overflow: visible; }
.sparkle{ position:absolute; width:6px; height:6px; background: var(--gold); border-radius:50%; box-shadow: 0 0 6px 1px rgba(201,160,92,0.8); transform: translate(-50%,-50%); animation: sparkleOut .8s ease-out forwards; }
@keyframes sparkleOut{ 0%{ opacity:1; transform: translate(-50%,-50%) scale(1); } 100%{ opacity:0; transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0.2); } }

.name{
  font-weight: 800;
  font-size: 24px;
  color: #111111;
  letter-spacing: -0.3px;
  margin-bottom: 6px;
}

.tagline{ font-size: 13px; color: #555; line-height: 1.5; font-weight: 400; }

.socials{ 
  display: flex; 
  justify-content: center; 
  flex-wrap: wrap; 
  gap: 12px; 
  max-width: 280px; 
  margin: 20px auto 24px; 
}
.socials a{ width: 38px; height: 38px; border-radius: 50%; background: #F3F3F3; display:flex; align-items:center; justify-content:center; color: #111; transition: all .2s ease; }
.socials a svg{ width:16px; height:16px; }
.socials a:hover{ background: #111; color: #fff; transform: translateY(-2px); }

.section-label{ font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #777; font-weight: 700; margin: 24px 4px 10px; }

.about-text{
  font-size: 13.5px;
  line-height: 1.6;
  color: #333;
  padding: 4px 6px;
  margin-bottom: 10px;
}

.links{ display:flex; flex-direction:column; gap: 12px; }

.link-row{
  display:flex; align-items:center; gap: 14px;
  background: #F8F9FA;
  border: 1px solid #EAEAEA;
  border-radius: 16px;
  padding: 14px 18px;
  text-decoration:none;
  color: #111;
  font-weight: 600;
  transition: all .2s ease;
}

.link-row:hover{
  background: #F1F3F5;
  border-color: #DDE2E5;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.06);
}

.icon{ width: 32px; height: 32px; flex-shrink:0; border-radius: 50%; background: #E9ECEF; display:flex; align-items:center; justify-content:center; color: #111; }
.icon svg{ width:15px; height:15px; }

.link-text{ flex:1; }
.link-text .label{ display:block; font-size: 11px; font-weight: 500; color: #777; margin-bottom: 1px; }
.link-text .value{ font-size: 14.5px; font-weight: 700; color: #111; }

.arrow{ display:flex; align-items:center; justify-content:center; width: 24px; height: 24px; color: #888; transition: transform .2s ease, color .2s ease; }
.arrow svg{ width: 16px; height: 16px; }
.link-row:hover .arrow{ color: #111; transform: scale(1.1); }

.visitor-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11.5px;
  color: #777;
  font-weight: 500;
  margin-top: 24px;
}

.visitor-counter svg {
  width: 14px;
  height: 14px;
  color: var(--rose-deep);
}

.visitor-counter strong {
  color: #111;
  font-weight: 700;
}

.card-footer-copy{
  text-align: center;
  font-size: 11.5px;
  color: #777;
  font-weight: 500;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #EEEEEE;
}

@media (prefers-reduced-motion: reduce){
  .link-row, .socials a, .arrow, .bg-blob, .avatar, .name{ animation:none; transition:none; }
}
```

---

## 🚫 Binary/Excluded Files

The following files were not included in the text content:

- `link.png`
- `profile.png`

