<script>
  import { enhance } from '$app/forms';
  import { onMount } from 'svelte';

  /** @type {import('./$types').ActionData} */
  export let form;

  let submitting = false;
  let calendarUrl = '';

  const googleCalUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
    '&text=Dop%20%E2%80%93%20%C3%9E%C3%B3runn%20%C3%8Dris%20P%C3%A9tursd%C3%B3ttir' +
    '&dates=20260815T120000Z%2F20260815T140000Z' +
    '&location=S%3At%20Pauli%20kyrka%2C%20Kungsgatan%2017%2C%20Malm%C3%B6';

  onMount(() => {
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    calendarUrl = isIOS ? '/dopelse.ics' : googleCalUrl;
  });

  function addToCalendar() {
    if (calendarUrl) window.open(calendarUrl, '_blank');
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Quicksand:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <title>Þórunn Íris Pétursdóttir – Dop</title>
  <meta name="description" content="Välkommen på dop av Þórunn Íris Pétursdóttir" />
</svelte:head>

<!-- ═══════════════════════════════════════════════════ HERO ══ -->
<section class="hero">
  <!-- Floating decorations -->
  <div class="deco deco-cloud deco-1">
    <svg viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="48" r="22" fill="white" opacity="0.85"/>
      <circle cx="60" cy="34" r="28" fill="white" opacity="0.85"/>
      <circle cx="85" cy="46" r="20" fill="white" opacity="0.85"/>
      <rect x="14" y="48" width="91" height="24" fill="white" opacity="0.85"/>
    </svg>
  </div>

  <div class="deco deco-bottle deco-2">
    <svg viewBox="0 0 60 82" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24,22 C24,12 36,12 36,22" fill="#fbd0d7" stroke="#f4a7b4" stroke-width="1.5"/>
      <rect x="17" y="19" width="26" height="7" rx="2.5" fill="#f4a7b4"/>
      <rect x="13" y="26" width="34" height="46" rx="13" fill="#89c4e1"/>
      <rect x="13" y="46" width="34" height="26" rx="0 0 13 13" fill="#b3d9f2" opacity="0.7"/>
      <ellipse cx="23" cy="36" rx="5" ry="9" fill="white" opacity="0.3"/>
    </svg>
  </div>

  <div class="deco deco-rattle deco-3">
    <svg viewBox="0 0 64 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="28" r="26" fill="#f4a7b4"/>
      <circle cx="23" cy="20" r="5" fill="white" opacity="0.45"/>
      <circle cx="38" cy="31" r="3.5" fill="white" opacity="0.45"/>
      <circle cx="27" cy="36" r="3" fill="white" opacity="0.45"/>
      <rect x="28" y="52" width="8" height="30" rx="4" fill="#89c4e1"/>
      <rect x="25" y="61" width="14" height="4" rx="2" fill="#b3d9f2"/>
      <rect x="25" y="70" width="14" height="4" rx="2" fill="#b3d9f2"/>
    </svg>
  </div>

  <div class="deco deco-star deco-4">
    <svg viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 3 L34 19 H51 L38 29 L43 46 L28 36 L13 46 L18 29 L5 19 H22 Z" fill="#FFD166" stroke="#FFBA00" stroke-width="1"/>
    </svg>
  </div>

  <div class="deco deco-duck deco-5">
    <svg viewBox="0 0 72 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="33" cy="46" rx="24" ry="17" fill="#FFD166"/>
      <circle cx="50" cy="28" r="16" fill="#FFD166"/>
      <path d="M62 27 L72 23 L72 31 Z" fill="#FF9500"/>
      <circle cx="54" cy="23" r="3" fill="#333"/>
      <circle cx="55" cy="22" r="1.2" fill="white"/>
      <path d="M16 40 Q24 26 38 32 Q31 44 16 40Z" fill="#FFBA00"/>
      <ellipse cx="34" cy="61" rx="27" ry="7" fill="#b3d9f2" opacity="0.5"/>
    </svg>
  </div>

  <div class="deco deco-heart deco-6">
    <svg viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 44C26 44 3 30 3 14C3 7 9 3 14 3C18 3 22 5.5 26 10C30 5.5 34 3 38 3C43 3 49 7 49 14C49 30 26 44 26 44Z" fill="#f4a7b4"/>
    </svg>
  </div>

  <div class="deco deco-moon deco-7">
    <svg viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M38 26C38 35 31 42 22 42C13 42 6 35 6 26C6 17 13 10 22 10C20 14 19 19 19 24C19 33 25 40 33 40C35 36 37 31 38 26Z" fill="#FFD166"/>
    </svg>
  </div>

  <div class="deco deco-star deco-8">
    <svg viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2 L24 13 H36 L27 20 L31 32 L20 25 L9 32 L13 20 L4 13 H16 Z" fill="#89c4e1" stroke="#6ab4d4" stroke-width="0.5"/>
    </svg>
  </div>

  <div class="deco deco-heart deco-9">
    <svg viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 31C18 31 2 21 2 10C2 5 6 2 10 2C13 2 16 4 18 7C20 4 23 2 26 2C30 2 34 5 34 10C34 21 18 31 18 31Z" fill="#b3d9f2"/>
    </svg>
  </div>

  <!-- Hero Content -->
  <div class="hero-content">
    <p class="welcome-text">Välkommen på dop av</p>
    <h1 class="name-main">Þórunn Íris</h1>
    <h2 class="name-family">Pétursdóttir</h2>
    <div class="hero-divider">
      <svg viewBox="0 0 200 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="200">
        <line x1="0" y1="8" x2="80" y2="8" stroke="#f4a7b4" stroke-width="1.5"/>
        <path d="M96 8 L100 3 L104 8 L100 13 Z" fill="#f4a7b4"/>
        <path d="M88 8 L92 5 L96 8 L92 11 Z" fill="#f4a7b4" opacity="0.5"/>
        <path d="M104 8 L108 5 L112 8 L108 11 Z" fill="#f4a7b4" opacity="0.5"/>
        <line x1="120" y1="8" x2="200" y2="8" stroke="#f4a7b4" stroke-width="1.5"/>
      </svg>
    </div>
    <div class="date-badge">
      <span class="date-item">
        <svg viewBox="0 0 22 22" fill="none" width="18" height="18">
          <rect x="2" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <line x1="7" y1="2" x2="7" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="15" y1="2" x2="15" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="2" y1="9" x2="20" y2="9" stroke="currentColor" stroke-width="1.5"/>
        </svg>
        15 augusti 2026
      </span>
      <span class="dot">✦</span>
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <span class="date-item cal-trigger" on:click={addToCalendar} title="Lägg till i kalender">
        <svg viewBox="0 0 22 22" fill="none" width="18" height="18">
          <circle cx="11" cy="11" r="9" fill="none" stroke="currentColor" stroke-width="1.5"/>
          <line x1="11" y1="11" x2="11" y2="6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="11" y1="11" x2="15" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        11:30
        <span class="cal-hint">＋</span>
      </span>
    </div>
  </div>

  <!-- Wave at bottom of hero -->
  <div class="hero-wave">
    <svg viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,55 C360,110 720,0 1080,55 C1260,82 1380,40 1440,55 L1440,110 L0,110 Z" fill="#ffffff"/>
    </svg>
  </div>
</section>

<!-- ══════════════════════════════════════════════ INFO CARDS ══ -->
<section class="info-section">
  <div class="section-label">Ceremoni</div>
  <div class="icon-divider">
    <span class="icon-divider-line"></span>
    <svg viewBox="0 0 16 16" width="16" fill="#f4a7b4"><path d="M8 1l1.8 5H15l-4.3 3.1 1.6 5L8 11.2l-4.3 2.9 1.6-5L1 6h5.2Z"/></svg>
    <svg viewBox="0 0 16 16" width="20" fill="#89c4e1"><path d="M8 1l1.8 5H15l-4.3 3.1 1.6 5L8 11.2l-4.3 2.9 1.6-5L1 6h5.2Z"/></svg>
    <svg viewBox="0 0 16 16" width="16" fill="#f4a7b4"><path d="M8 1l1.8 5H15l-4.3 3.1 1.6 5L8 11.2l-4.3 2.9 1.6-5L1 6h5.2Z"/></svg>
    <span class="icon-divider-line"></span>
  </div>

  <div class="cards-grid">
    <!-- Church card → Google Maps -->
    <a
      class="card card-link"
      href="https://maps.google.com/maps?q=55.60306,13.01444"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="card-icon" style="background: var(--blue-soft);">
        <svg viewBox="0 0 52 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <rect x="23" y="0" width="6" height="16" rx="2" fill="#89c4e1"/>
          <rect x="15" y="5" width="22" height="6" rx="2" fill="#89c4e1"/>
          <path d="M4 24 L26 10 L48 24 Z" fill="#f4a7b4"/>
          <rect x="4" y="24" width="44" height="36" rx="2" fill="#b3d9f2"/>
          <path d="M20 60 L20 42 Q26 32 32 42 L32 60 Z" fill="#89c4e1"/>
          <rect x="8" y="30" width="10" height="13" rx="5" fill="white" opacity="0.75"/>
          <rect x="34" y="30" width="10" height="13" rx="5" fill="white" opacity="0.75"/>
        </svg>
      </div>
      <h3>Kyrka</h3>
      <div class="card-divider"></div>
      <p>S:t Pauli kyrka<br /><strong>Malmö</strong></p>
      <span class="card-map-hint">Öppna i Google Maps ↗</span>
    </a>

    <!-- Time card → Add to calendar (mobile only) -->
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="card cal-card" on:click={addToCalendar}>
      <div class="card-icon" style="background: var(--pink-soft);">
        <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <circle cx="26" cy="26" r="23" fill="#fce4e8" stroke="#f4a7b4" stroke-width="2.5"/>
          <circle cx="26" cy="26" r="18" fill="white" opacity="0.6"/>
          <line x1="26" y1="26" x2="26" y2="11" stroke="#f4a7b4" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="26" y1="26" x2="36" y2="26" stroke="#89c4e1" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="26" cy="26" r="3.5" fill="#f4a7b4"/>
          <circle cx="26" cy="8" r="1.5" fill="#f4a7b4" opacity="0.5"/>
          <circle cx="26" cy="44" r="1.5" fill="#f4a7b4" opacity="0.5"/>
          <circle cx="8" cy="26" r="1.5" fill="#f4a7b4" opacity="0.5"/>
          <circle cx="44" cy="26" r="1.5" fill="#f4a7b4" opacity="0.5"/>
        </svg>
      </div>
      <h3>Tid &amp; Datum</h3>
      <div class="card-divider"></div>
      <p><strong>15 augusti 2026</strong><br />kl. 11:30</p>
      <span class="card-cal-hint">＋ Lägg till i kalender</span>
    </div>

    <!-- Coffee card → Google Maps -->
    <a
      class="card card-link"
      href="https://www.google.com/maps/search/?api=1&query=S%3At+Paulis+f%C3%B6rsamlingshem+Malm%C3%B6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="card-icon" style="background: var(--blue-soft);">
        <svg viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <path d="M18 16 C18 10 22 6 22 6" stroke="#b3d9f2" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M28 14 C28 8 32 4 32 4" stroke="#b3d9f2" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M38 16 C38 10 42 6 42 6" stroke="#b3d9f2" stroke-width="2" stroke-linecap="round" fill="none"/>
          <path d="M10 22 L16 52 H44 L50 22 Z" fill="#f4a7b4"/>
          <path d="M46 30 Q58 30 58 40 Q58 52 46 52" stroke="#fbd0d7" stroke-width="5" fill="none" stroke-linecap="round"/>
          <ellipse cx="30" cy="22" rx="20" ry="5" fill="#fbd0d7"/>
        </svg>
      </div>
      <h3>Mottagning</h3>
      <div class="card-divider"></div>
      <p>S:t Paulis<br /><strong>församlingshem</strong></p>
      <span class="card-map-hint">Öppna i Google Maps ↗</span>
    </a>
  </div>
</section>

<!-- Wave white → blue-soft -->
<div class="wave-down">
  <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,45 C480,90 960,0 1440,45 L1440,90 L0,90 Z" fill="var(--blue-soft)"/>
  </svg>
</div>

<!-- ════════════════════════════════════════════════ FAMILY ══ -->
<section class="family-section" id="familj">
  <div class="section-label">Familj & Faddrar</div>
  <div class="icon-divider">
    <span class="icon-divider-line"></span>
    <svg viewBox="0 0 20 18" width="18" fill="#f4a7b4"><path d="M10 17C10 17 1 11 1 5C1 2.2 3 1 5 1C6.8 1 8.6 2.2 10 4C11.4 2.2 13.2 1 15 1C17 1 19 2.2 19 5C19 11 10 17 10 17Z"/></svg>
    <svg viewBox="0 0 20 18" width="22" fill="#89c4e1"><path d="M10 17C10 17 1 11 1 5C1 2.2 3 1 5 1C6.8 1 8.6 2.2 10 4C11.4 2.2 13.2 1 15 1C17 1 19 2.2 19 5C19 11 10 17 10 17Z"/></svg>
    <svg viewBox="0 0 20 18" width="18" fill="#f4a7b4"><path d="M10 17C10 17 1 11 1 5C1 2.2 3 1 5 1C6.8 1 8.6 2.2 10 4C11.4 2.2 13.2 1 15 1C17 1 19 2.2 19 5C19 11 10 17 10 17Z"/></svg>
    <span class="icon-divider-line"></span>
  </div>

  <div class="family-block">
    <h3 class="family-heading">Föräldrar</h3>
    <div class="family-grid">
      <div class="family-card">
        <div class="family-icon blue">
          <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
            <circle cx="20" cy="14" r="9" fill="#89c4e1"/>
            <path d="M4 38C4 29 10 24 20 24C30 24 36 29 36 38" fill="#b3d9f2"/>
          </svg>
        </div>
        <div class="family-name">Pétur Gautur Hjartarson</div>
        <div class="family-role">Pappa</div>
      </div>
      <div class="family-and">
        <svg viewBox="0 0 20 18" width="28" fill="#f4a7b4"><path d="M10 17C10 17 1 11 1 5C1 2.2 3 1 5 1C6.8 1 8.6 2.2 10 4C11.4 2.2 13.2 1 15 1C17 1 19 2.2 19 5C19 11 10 17 10 17Z"/></svg>
      </div>
      <div class="family-card">
        <div class="family-icon pink">
          <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
            <circle cx="20" cy="14" r="9" fill="#f4a7b4"/>
            <path d="M4 38C4 29 10 24 20 24C30 24 36 29 36 38" fill="#fbd0d7"/>
          </svg>
        </div>
        <div class="family-name">Lisa Stenström Lindberg</div>
        <div class="family-role">Mamma</div>
      </div>
    </div>
  </div>

  <div class="family-inline-divider">
    <svg viewBox="0 0 300 24" fill="none" width="300">
      <line x1="0" y1="12" x2="120" y2="12" stroke="#b3d9f2" stroke-width="1.5"/>
      <circle cx="140" cy="12" r="5" fill="#89c4e1" opacity="0.5"/>
      <circle cx="150" cy="12" r="7" fill="#89c4e1" opacity="0.7"/>
      <circle cx="160" cy="12" r="5" fill="#89c4e1" opacity="0.5"/>
      <line x1="180" y1="12" x2="300" y2="12" stroke="#b3d9f2" stroke-width="1.5"/>
    </svg>
  </div>

  <div class="family-block">
    <h3 class="family-heading">Faddrar</h3>
    <div class="family-grid">
      <div class="family-card">
        <div class="family-icon blue">
          <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
            <circle cx="20" cy="14" r="9" fill="#89c4e1"/>
            <path d="M4 38C4 29 10 24 20 24C30 24 36 29 36 38" fill="#b3d9f2"/>
          </svg>
        </div>
        <div class="family-name">Atli Hjartarson</div>
        <div class="family-role">Gudfar</div>
      </div>
      <div class="family-and">
        <svg viewBox="0 0 56 54" fill="none" width="24"><path d="M28 3 L34 19 H51 L38 29 L43 46 L28 36 L13 46 L18 29 L5 19 H22 Z" fill="#FFD166"/></svg>
      </div>
      <div class="family-card">
        <div class="family-icon pink">
          <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
            <circle cx="20" cy="14" r="9" fill="#f4a7b4"/>
            <path d="M4 38C4 29 10 24 20 24C30 24 36 29 36 38" fill="#fbd0d7"/>
          </svg>
        </div>
        <div class="family-name">Lotta Jansson</div>
        <div class="family-role">Gudmor</div>
      </div>
    </div>
  </div>
</section>

<!-- Wave blue-soft → white -->
<div class="wave-down">
  <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,45 C480,0 960,90 1440,45 L1440,90 L0,90 Z" fill="#ffffff"/>
  </svg>
</div>

<!-- ═══════════════════════════════════════════════════ MAP ══ -->
<section class="map-section">
  <div class="section-label">Hitta hit</div>
  <div class="icon-divider">
    <span class="icon-divider-line"></span>
    <svg viewBox="0 0 24 24" width="18" fill="none" stroke="#89c4e1" stroke-width="2" stroke-linecap="round">
      <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2Z"/>
      <circle cx="12" cy="9" r="3"/>
    </svg>
    <svg viewBox="0 0 24 24" width="22" fill="none" stroke="#f4a7b4" stroke-width="2" stroke-linecap="round">
      <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2Z"/>
      <circle cx="12" cy="9" r="3"/>
    </svg>
    <svg viewBox="0 0 24 24" width="18" fill="none" stroke="#89c4e1" stroke-width="2" stroke-linecap="round">
      <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2Z"/>
      <circle cx="12" cy="9" r="3"/>
    </svg>
    <span class="icon-divider-line"></span>
  </div>

  <div class="map-address">
    <div class="address-card">
      <div class="address-row">
        <strong>Kyrka</strong>
        <span>S:t Pauli kyrka, Kungsgatan 17, Malmö</span>
      </div>
      <div class="address-divider"></div>
      <div class="address-row">
        <strong>Mottagning</strong>
        <span>S:t Paulis församlingshem, Malmö</span>
      </div>
    </div>
  </div>

  <div class="map-container">
    <iframe
      title="Karta över S:t Pauli kyrka i Malmö"
      src="https://www.openstreetmap.org/export/embed.html?bbox=12.9944%2C55.5931%2C13.0344%2C55.6131&layer=mapnik&marker=55.60306%2C13.01444"
      width="100%"
      height="420"
      style="border:none;"
      loading="lazy"
    ></iframe>
  </div>
</section>

<!-- Wave white → pink-soft -->
<div class="wave-down">
  <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,45 C480,90 960,0 1440,45 L1440,90 L0,90 Z" fill="var(--pink-soft)"/>
  </svg>
</div>

<!-- ══════════════════════════════════════════════════ RSVP ══ -->
<section class="rsvp-section">
  <div class="section-label" style="color: #c06070;">OSA</div>
  <div class="icon-divider">
    <span class="icon-divider-line" style="background: #f4a7b4;"></span>
    <svg viewBox="0 0 60 82" fill="none" width="22">
      <path d="M24,22 C24,12 36,12 36,22" fill="#fbd0d7" stroke="#f4a7b4" stroke-width="1.5"/>
      <rect x="17" y="19" width="26" height="7" rx="2.5" fill="#f4a7b4"/>
      <rect x="13" y="26" width="34" height="46" rx="13" fill="#89c4e1"/>
      <rect x="13" y="46" width="34" height="26" rx="0 0 13 13" fill="#b3d9f2" opacity="0.7"/>
      <ellipse cx="23" cy="36" rx="5" ry="9" fill="white" opacity="0.3"/>
    </svg>
    <svg viewBox="0 0 60 82" fill="none" width="28">
      <path d="M24,22 C24,12 36,12 36,22" fill="#b3d9f2" stroke="#89c4e1" stroke-width="1.5"/>
      <rect x="17" y="19" width="26" height="7" rx="2.5" fill="#89c4e1"/>
      <rect x="13" y="26" width="34" height="46" rx="13" fill="#f4a7b4"/>
      <rect x="13" y="46" width="34" height="26" rx="0 0 13 13" fill="#fbd0d7" opacity="0.7"/>
      <ellipse cx="23" cy="36" rx="5" ry="9" fill="white" opacity="0.3"/>
    </svg>
    <svg viewBox="0 0 60 82" fill="none" width="22">
      <path d="M24,22 C24,12 36,12 36,22" fill="#fbd0d7" stroke="#f4a7b4" stroke-width="1.5"/>
      <rect x="17" y="19" width="26" height="7" rx="2.5" fill="#f4a7b4"/>
      <rect x="13" y="26" width="34" height="46" rx="13" fill="#89c4e1"/>
      <rect x="13" y="46" width="34" height="26" rx="0 0 13 13" fill="#b3d9f2" opacity="0.7"/>
      <ellipse cx="23" cy="36" rx="5" ry="9" fill="white" opacity="0.3"/>
    </svg>
    <span class="icon-divider-line" style="background: #f4a7b4;"></span>
  </div>

  {#if form?.success}
    <div class="rsvp-success">
      <div class="success-icon">
        <svg viewBox="0 0 52 48" fill="none" width="60">
          <path d="M26 44C26 44 3 30 3 14C3 7 9 3 14 3C18 3 22 5.5 26 10C30 5.5 34 3 38 3C43 3 49 7 49 14C49 30 26 44 26 44Z" fill="#f4a7b4"/>
        </svg>
      </div>
      <h3>Tack för din anmälan!</h3>
      <p>Vi ser fram emot att fira denna speciella dag tillsammans med dig.</p>
    </div>
  {:else}
    <div class="rsvp-box">
      <p class="rsvp-intro">
        Vi hoppas att du kan komma och fira Þórunn Íris med oss!<br />
        <strong>OSA senast 30 juni 2026</strong>
      </p>

      {#if form?.error}
        <div class="error-msg">{form.error}</div>
      {/if}

      <form
        method="POST"
        use:enhance={() => {
          submitting = true;
          return async ({ update }) => {
            submitting = false;
            await update();
          };
        }}
      >
        <div class="form-fields">
          <div class="field">
            <label for="name">Namn</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ditt namn"
              value={form?.name ?? ''}
              required
            />
          </div>
          <div class="field">
            <label for="phone">Telefonnummer</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="070-000 00 00"
              value={form?.phone ?? ''}
              required
            />
          </div>
        </div>
        <button type="submit" class="submit-btn" disabled={submitting}>
          {#if submitting}
            Skickar…
          {:else}
            Skicka OSA
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18" style="vertical-align: middle; margin-left: 6px;">
              <path d="M2 10 L18 10 M12 4 L18 10 L12 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          {/if}
        </button>
      </form>
    </div>
  {/if}
</section>

<!-- ════════════════════════════════════════════════ FOOTER ══ -->
<footer>
  <div class="footer-deco">
    <svg viewBox="0 0 52 48" fill="none" width="24"><path d="M26 44C26 44 3 30 3 14C3 7 9 3 14 3C18 3 22 5.5 26 10C30 5.5 34 3 38 3C43 3 49 7 49 14C49 30 26 44 26 44Z" fill="rgba(255,255,255,0.4)"/></svg>
    <svg viewBox="0 0 56 54" fill="none" width="20"><path d="M28 3 L34 19 H51 L38 29 L43 46 L28 36 L13 46 L18 29 L5 19 H22 Z" fill="rgba(255,255,255,0.4)"/></svg>
    <svg viewBox="0 0 52 48" fill="none" width="28"><path d="M26 44C26 44 3 30 3 14C3 7 9 3 14 3C18 3 22 5.5 26 10C30 5.5 34 3 38 3C43 3 49 7 49 14C49 30 26 44 26 44Z" fill="rgba(255,255,255,0.6)"/></svg>
    <svg viewBox="0 0 56 54" fill="none" width="20"><path d="M28 3 L34 19 H51 L38 29 L43 46 L28 36 L13 46 L18 29 L5 19 H22 Z" fill="rgba(255,255,255,0.4)"/></svg>
    <svg viewBox="0 0 52 48" fill="none" width="24"><path d="M26 44C26 44 3 30 3 14C3 7 9 3 14 3C18 3 22 5.5 26 10C30 5.5 34 3 38 3C43 3 49 7 49 14C49 30 26 44 26 44Z" fill="rgba(255,255,255,0.4)"/></svg>
  </div>
  <p class="footer-name">Þórunn Íris Pétursdóttir</p>
  <p class="footer-parents">Pétur Hjartarson &amp; Lisa Stenström Lindberg</p>
</footer>

<!-- ═══════════════════════════════════════════════ STYLES ══ -->
<style>
  /* ── Custom properties ──────────────────────────────────── */
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
  :global(body) {
    font-family: 'Quicksand', sans-serif;
    color: var(--text);
    background: white;
    overflow-x: hidden;
  }
  :global(:root) {
    --pink-soft:  #fce4e8;
    --pink-mid:   #fbd0d7;
    --pink:       #f4a7b4;
    --pink-dark:  #e0869a;
    --blue-soft:  #d6eef7;
    --blue-mid:   #b3d9f2;
    --blue:       #89c4e1;
    --blue-dark:  #6aadcc;
    --cream:      #fff9f5;
    --white:      #ffffff;
    --text:       #3d3d3d;
    --text-mid:   #6b6b6b;
    --text-light: #9a9a9a;
    --gold:       #FFD166;
  }

  /* ── Floating animations ────────────────────────────────── */
  @keyframes float-a {
    0%, 100% { transform: translateY(0)   rotate(0deg); }
    50%       { transform: translateY(-18px) rotate(4deg); }
  }
  @keyframes float-b {
    0%, 100% { transform: translateY(0)   rotate(0deg); }
    50%       { transform: translateY(-12px) rotate(-6deg); }
  }
  @keyframes float-c {
    0%, 100% { transform: translateY(0)   rotate(0deg); }
    50%       { transform: translateY(-22px) rotate(3deg); }
  }

  /* ── Hero ───────────────────────────────────────────────── */
  .hero {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(145deg, #fce4e8 0%, #e8f4fb 55%, #d6eef7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 5rem 1.5rem 8rem;
  }

  .deco {
    position: absolute;
    pointer-events: none;
    opacity: 0.9;
  }
  .deco-1  { width: 130px; top: 8%;  left: 4%;  animation: float-a 7s ease-in-out infinite; }
  .deco-2  { width: 70px;  top: 22%; left: 6%;  animation: float-b 6s ease-in-out infinite 1s; }
  .deco-3  { width: 75px;  top: 30%; right: 5%; animation: float-a 8s ease-in-out infinite 0.5s; }
  .deco-4  { width: 55px;  top: 12%; right: 8%; animation: float-c 5s ease-in-out infinite 2s; }
  .deco-5  { width: 80px;  bottom: 22%; left: 8%;  animation: float-b 9s ease-in-out infinite 1.5s; }
  .deco-6  { width: 50px;  bottom: 25%; right: 7%; animation: float-a 6s ease-in-out infinite 0.8s; }
  .deco-7  { width: 55px;  top: 18%; left: 30%; animation: float-c 7s ease-in-out infinite 3s; }
  .deco-8  { width: 44px;  bottom: 30%; right: 25%; animation: float-b 5s ease-in-out infinite 1.2s; }
  .deco-9  { width: 38px;  top: 55%; left: 18%; animation: float-a 8s ease-in-out infinite 2.5s; }

  @media (max-width: 600px) {
    .deco-1  { width: 90px; }
    .deco-2  { width: 50px; left: 2%; }
    .deco-3  { width: 52px; right: 2%; }
    .deco-4  { width: 40px; right: 4%; }
    .deco-5  { width: 55px; left: 3%; }
    .deco-7, .deco-8, .deco-9 { display: none; }
  }

  .hero-content {
    position: relative;
    text-align: center;
    z-index: 2;
  }

  .welcome-text {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: clamp(0.95rem, 2vw, 1.2rem);
    color: var(--text-mid);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .name-main {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: clamp(3.2rem, 10vw, 7rem);
    line-height: 1.05;
    color: var(--text);
    text-shadow: 0 2px 30px rgba(244, 167, 180, 0.4);
    margin-bottom: 0.1em;
  }

  .name-family {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    font-size: clamp(1.6rem, 4.5vw, 3rem);
    color: var(--text-mid);
    margin-bottom: 1.5rem;
  }

  .hero-divider {
    display: flex;
    justify-content: center;
    margin-bottom: 1.8rem;
  }

  .date-badge {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255,255,255,0.65);
    backdrop-filter: blur(8px);
    border: 1.5px solid rgba(244, 167, 180, 0.4);
    border-radius: 50px;
    padding: 0.75rem 2rem;
    font-size: clamp(0.9rem, 2vw, 1.05rem);
    font-weight: 600;
    color: var(--text);
    box-shadow: 0 4px 20px rgba(244,167,180,0.2);
  }
  .date-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  .dot { color: var(--pink); font-size: 0.8rem; }

  .hero-wave {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    line-height: 0;
  }
  .hero-wave svg { display: block; width: 100%; }

  /* ── Shared wave ────────────────────────────────────────── */
  .wave-down {
    line-height: 0;
    overflow: hidden;
    margin-top: -1px;
  }
  .wave-down svg { display: block; width: 100%; }

  /* ── Shared section styles ──────────────────────────────── */
  .section-label {
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--blue-dark);
    text-align: center;
    margin-bottom: 0.75rem;
  }

  .icon-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 3rem;
  }
  .icon-divider-line {
    flex: 1;
    max-width: 160px;
    height: 1.5px;
    background: linear-gradient(to right, transparent, var(--blue-mid));
    display: block;
  }
  .icon-divider :last-child.icon-divider-line {
    background: linear-gradient(to left, transparent, var(--blue-mid));
  }

  /* ── Info cards ─────────────────────────────────────────── */
  .info-section {
    background: white;
    padding: 5rem 1.5rem 4rem;
    text-align: center;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    .cards-grid { grid-template-columns: 1fr; max-width: 340px; }
  }

  .card {
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    box-shadow: 0 4px 30px rgba(137, 196, 225, 0.15), 0 1px 6px rgba(0,0,0,0.05);
    border: 1.5px solid rgba(179, 217, 242, 0.4);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(137, 196, 225, 0.25);
  }

  .card-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.2rem;
  }

  .card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.6rem;
  }

  .card-divider {
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, var(--pink), var(--blue));
    border-radius: 2px;
    margin: 0 auto 0.8rem;
  }

  .card p {
    color: var(--text-mid);
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 500;
  }
  .card p strong { color: var(--text); font-weight: 700; }

  /* Card as link */
  .card-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .card-link:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(137, 196, 225, 0.25);
  }

  /* Map hint shown on all devices */
  .card-map-hint {
    display: block;
    margin-top: 0.75rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--blue-dark);
    letter-spacing: 0.03em;
    opacity: 0.8;
  }

  /* Calendar hint – only shown on touch devices */
  .card-cal-hint {
    display: block;
    margin-top: 0.75rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--pink-dark);
    letter-spacing: 0.03em;
  }
  .cal-hint {
    display: inline;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--pink-dark);
    margin-left: 4px;
  }
  .cal-card { cursor: pointer; }
  .cal-trigger { cursor: pointer; }

  /* ── Family section ─────────────────────────────────────── */
  .family-section {
    background: var(--blue-soft);
    padding: 5rem 1.5rem 5rem;
    text-align: center;
  }

  .family-block { margin-bottom: 2.5rem; }

  .family-heading {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    font-size: clamp(1.3rem, 3vw, 1.7rem);
    color: var(--text);
    margin-bottom: 1.8rem;
  }

  .family-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    .family-grid { flex-direction: column; }
    .family-card { min-width: unset; width: 100%; max-width: 320px; }
    .family-and { padding: 0.3rem 0; }
  }

  .family-card {
    background: white;
    border-radius: 18px;
    padding: 1.8rem 2rem;
    min-width: 190px;
    box-shadow: 0 4px 24px rgba(137, 196, 225, 0.18);
    border: 1.5px solid rgba(179, 217, 242, 0.5);
    transition: transform 0.2s;
  }
  .family-card:hover { transform: translateY(-3px); }

  .family-icon {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }
  .family-icon.blue { background: var(--blue-soft); }
  .family-icon.pink { background: var(--pink-soft); }

  .family-name {
    font-weight: 700;
    font-size: 1rem;
    color: var(--text);
    margin-bottom: 0.3rem;
  }
  .family-role {
    font-size: 0.82rem;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  .family-and {
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
  }

  .family-inline-divider {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 2.5rem;
  }

  /* ── Map section ────────────────────────────────────────── */
  .map-section {
    background: white;
    padding: 5rem 1.5rem 4rem;
    text-align: center;
  }

  .map-address {
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  .address-card {
    background: var(--cream);
    border-radius: 16px;
    padding: 1.5rem 2rem;
    border: 1.5px solid var(--blue-mid);
    text-align: left;
  }
  .address-row {
    display: flex;
    gap: 1rem;
    align-items: baseline;
    font-size: 0.95rem;
    padding: 0.4rem 0;
  }
  .address-row strong {
    flex-shrink: 0;
    min-width: 60px;
    color: var(--blue-dark);
    font-weight: 700;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .address-row span { color: var(--text); font-weight: 500; }
  @media (max-width: 480px) {
    .address-row { flex-direction: column; gap: 0.2rem; }
    .address-row strong { min-width: unset; }
    .address-card { padding: 1.2rem 1.5rem; }
  }
  .address-divider {
    height: 1px;
    background: var(--blue-mid);
    margin: 0.6rem 0;
    opacity: 0.5;
  }

  .map-container {
    max-width: 900px;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 6px 40px rgba(137, 196, 225, 0.25);
    border: 2px solid var(--blue-mid);
  }
  .map-container iframe { display: block; }

  /* ── RSVP section ───────────────────────────────────────── */
  .rsvp-section {
    background: var(--pink-soft);
    padding: 5rem 1.5rem 6rem;
    text-align: center;
  }

  .rsvp-box {
    max-width: 540px;
    margin: 0 auto;
    background: white;
    border-radius: 24px;
    padding: 2.5rem 2.5rem;
    box-shadow: 0 8px 50px rgba(244, 167, 180, 0.25);
    border: 1.5px solid var(--pink-mid);
  }

  .rsvp-intro {
    font-size: 1rem;
    color: var(--text-mid);
    margin-bottom: 1.8rem;
    line-height: 1.7;
    font-weight: 500;
  }
  .rsvp-intro strong { color: var(--text); }

  .form-fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    .form-fields { grid-template-columns: 1fr; }
    .rsvp-box { padding: 2rem 1.5rem; }
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
  }
  .field label {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--text-mid);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .field input {
    padding: 0.75rem 1rem;
    border: 1.5px solid var(--blue-mid);
    border-radius: 10px;
    font-family: 'Quicksand', sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text);
    background: var(--cream);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .field input:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 3px rgba(137, 196, 225, 0.25);
  }
  .field input::placeholder { color: var(--text-light); }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 2.5rem;
    background: linear-gradient(135deg, var(--pink) 0%, var(--blue) 100%);
    color: white;
    font-family: 'Quicksand', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
    box-shadow: 0 4px 20px rgba(244, 167, 180, 0.4);
    letter-spacing: 0.03em;
  }
  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(244, 167, 180, 0.5);
  }
  .submit-btn:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  .error-msg {
    background: #fff0f2;
    border: 1.5px solid var(--pink);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    color: #c0405a;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
  }

  .rsvp-success {
    max-width: 440px;
    margin: 0 auto;
    background: white;
    border-radius: 24px;
    padding: 3rem 2.5rem;
    box-shadow: 0 8px 50px rgba(244, 167, 180, 0.25);
    border: 1.5px solid var(--pink-mid);
    text-align: center;
  }
  .success-icon { margin-bottom: 1.2rem; }
  .rsvp-success h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.8rem;
  }
  .rsvp-success p {
    color: var(--text-mid);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
  }

  /* ── Footer ─────────────────────────────────────────────── */
  footer {
    background: linear-gradient(135deg, var(--pink) 0%, var(--blue) 100%);
    padding: 3rem 1.5rem 2.5rem;
    text-align: center;
    color: white;
  }
  .footer-deco {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }
  .footer-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.4rem;
  }
  .footer-parents {
    font-size: 0.9rem;
    font-weight: 500;
    opacity: 0.85;
  }
</style>
