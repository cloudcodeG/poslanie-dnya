/* Сцены для обратной стороны карточки — inline SVG под каждую традицию.
   Обновлено 02.08.2026 — новые палитры и цвета под дизайн. */
window.DATA = window.DATA || {};
window.DATA.scenes = {

  bible: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<radialGradient id="bible-halo" cx=".5" cy=".5" r=".5">' +
        '<stop offset="0" stop-color="#5c3d1f" stop-opacity=".95"/>' +
        '<stop offset="1" stop-color="#5c3d1f" stop-opacity="0"/>' +
      '</radialGradient>' +
      '<linearGradient id="bible-gold" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#f0e68c"/>' +
        '<stop offset="1" stop-color="#d4af37"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="180" cy="100" r="78" fill="url(#bible-halo)"/>' +
    '<g fill="#d4af37" opacity=".3">' +
      '<path d="M180 100 L174 18 L186 18 Z"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(30 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(60 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(90 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(120 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(150 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(180 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(210 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(240 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(270 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(300 180 100)"/>' +
      '<path d="M180 100 L174 18 L186 18 Z" transform="rotate(330 180 100)"/>' +
    '</g>' +
    '<g fill="url(#bible-gold)">' +
      '<rect x="171" y="38" width="18" height="98" rx="4"/>' +
      '<rect x="140" y="70" width="80" height="18" rx="4"/>' +
    '</g>' +
  '</svg>',

  runes: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="runes-stone" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#1a3a56"/>' +
        '<stop offset="1" stop-color="#0f2540"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="288" cy="52" r="18" fill="#e8e8e8"/>' +
    '<circle cx="288" cy="52" r="26" fill="#e8e8e8" opacity=".16"/>' +
    '<polygon points="0,172 58,92 116,172" fill="#1a3a56" opacity=".6"/>' +
    '<polygon points="96,172 176,64 256,172" fill="#0d1f33" opacity=".9"/>' +
    '<polygon points="224,172 302,84 360,172" fill="#1a3a56" opacity=".7"/>' +
    '<rect x="0" y="170" width="360" height="30" fill="#0f2540"/>' +
    '<rect x="116" y="90" width="68" height="84" rx="14" fill="url(#runes-stone)" stroke="#c0c0c0" stroke-width="2"/>' +
    '<g stroke="#c0c0c0" stroke-width="3.5" stroke-linecap="round" fill="none">' +
      '<path d="M150 104 L150 158"/>' +
      '<path d="M132 116 L150 132 L168 116"/>' +
    '</g>' +
  '</svg>',

  "slavic-runes": '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="slav-wood" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#3d2817"/>' +
        '<stop offset="1" stop-color="#2a1810"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="56" cy="40" r="16" fill="#e8c56b"/>' +
    '<circle cx="56" cy="40" r="23" fill="#e8c56b" opacity=".14"/>' +
    '<path d="M0 128 Q90 96 180 122 T360 118 L360 200 L0 200 Z" fill="#3d2817" opacity=".65"/>' +
    '<path d="M0 156 Q110 130 220 152 T360 150 L360 200 L0 200 Z" fill="#2a1810" opacity=".8"/>' +
    '<rect x="120" y="66" width="120" height="108" rx="10" fill="url(#slav-wood)" stroke="#d4af37" stroke-width="2"/>' +
    '<g stroke="#d4af37" stroke-width="4" stroke-linecap="round" fill="none">' +
      '<path d="M180 84 L180 150"/>' +
      '<path d="M180 84 L166 102"/>' +
      '<path d="M180 84 L194 102"/>' +
    '</g>' +
  '</svg>',

  mantras: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="mantra-petal" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#ffed4e"/>' +
        '<stop offset="1" stop-color="#ffd700"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="118" cy="58" r="4" fill="#daa520" opacity=".5"/>' +
    '<circle cx="252" cy="70" r="3" fill="#daa520" opacity=".4"/>' +
    '<circle cx="205" cy="38" r="2.5" fill="#daa520" opacity=".5"/>' +
    '<g stroke="#ffd700" fill="none">' +
      '<circle cx="180" cy="80" r="30" stroke-width="2" opacity=".9"/>' +
      '<circle cx="180" cy="80" r="21" stroke-width="1.6" opacity=".6"/>' +
      '<circle cx="180" cy="80" r="13" stroke-width="1.2" opacity=".35"/>' +
    '</g>' +
    '<circle cx="180" cy="80" r="4" fill="#ffed4e"/>' +
    '<g fill="url(#mantra-petal)" stroke="#ffed4e" stroke-width="1">' +
      '<ellipse cx="180" cy="152" rx="20" ry="40" transform="rotate(-15 180 152)"/>' +
      '<ellipse cx="180" cy="152" rx="20" ry="40" transform="rotate(15 180 152)"/>' +
      '<ellipse cx="180" cy="152" rx="18" ry="40" transform="rotate(-46 180 152)"/>' +
      '<ellipse cx="180" cy="152" rx="18" ry="40" transform="rotate(46 180 152)"/>' +
      '<ellipse cx="180" cy="154" rx="16" ry="38"/>' +
    '</g>' +
    '<ellipse cx="180" cy="186" rx="72" ry="12" fill="#2a1810" opacity=".7"/>' +
  '</svg>',

  quran: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="quran-gold" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#e4c39b"/>' +
        '<stop offset="1" stop-color="#2fd6b6"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<g fill="#c4a574">' +
      '<path d="M56 48 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z"/>' +
      '<path d="M296 58 l2.5 7 7 2.5 -7 2.5 -2.5 7 -2.5 -7 -7 -2.5 7 -2.5 Z"/>' +
      '<path d="M118 36 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" opacity=".75"/>' +
      '<path d="M252 30 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" opacity=".6"/>' +
    '</g>' +
    '<g fill="url(#quran-gold)" fill-rule="evenodd">' +
      '<circle cx="226" cy="78" r="42"/>' +
      '<circle cx="206" cy="66" r="40"/>' +
    '</g>' +
    '<g fill="#0b4d3f">' +
      '<rect x="62" y="124" width="236" height="60" opacity=".92"/>' +
      '<path d="M122 124 a58 58 0 0 1 116 0 Z"/>' +
      '<rect x="128" y="56" width="13" height="68" rx="3"/>' +
      '<rect x="219" y="56" width="13" height="68" rx="3"/>' +
      '<circle cx="134.5" cy="52" r="4" fill="#2fd6b6"/>' +
      '<circle cx="225.5" cy="52" r="4" fill="#2fd6b6"/>' +
    '</g>' +
  '</svg>',

  science: {
    space: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="sci-planet" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0" stop-color="#1a1f4d"/>' +
          '<stop offset="1" stop-color="#0d1233"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<g fill="#87ceeb">' +
        '<circle cx="40" cy="40" r="2"/>' +
        '<circle cx="92" cy="122" r="1.5" opacity=".6"/>' +
        '<circle cx="320" cy="50" r="2"/>' +
        '<circle cx="282" cy="152" r="1.5" opacity=".5"/>' +
        '<circle cx="205" cy="26" r="1.5" opacity=".7"/>' +
        '<circle cx="55" cy="160" r="2" opacity=".6"/>' +
        '<circle cx="330" cy="140" r="1.5" opacity=".5"/>' +
        '<circle cx="150" cy="60" r="1.5" opacity=".5"/>' +
        '<circle cx="250" cy="120" r="2" opacity=".6"/>' +
      '</g>' +
      '<g fill="none" stroke="#00bfff" stroke-width="1.5" opacity=".8">' +
        '<path d="M20 80 Q80 40 140 80 T260 80"/>' +
        '<path d="M60 140 Q140 110 220 140 T300 140" opacity=".6"/>' +
      '</g>' +
      '<g fill="#87ceeb">' +
        '<path d="M62 140 L8 132 L62 126 Z"/>' +
        '<circle cx="68" cy="134" r="4"/>' +
        '<circle cx="180" cy="100" r="46" fill="url(#sci-planet)" stroke="#00bfff" stroke-width="1.5"/>' +
        '<ellipse cx="180" cy="100" rx="82" ry="20" fill="none" stroke="#00bfff" stroke-width="2.5" transform="rotate(-18 180 100)" opacity=".85"/>' +
        '<circle cx="264" cy="88" r="6" opacity=".9"/>' +
      '</g>' +
    '</svg>',

    life: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
      '<defs>' +
        '<linearGradient id="sci-dna" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0" stop-color="#87ceeb"/>' +
          '<stop offset="1" stop-color="#00bfff"/>' +
        '</linearGradient>' +
      '</defs>' +
      '<g fill="#87ceeb">' +
        '<circle cx="60" cy="60" r="3"/>' +
        '<circle cx="300" cy="50" r="2.5"/>' +
        '<circle cx="120" cy="160" r="2" opacity=".5"/>' +
        '<circle cx="250" cy="170" r="2.5" opacity=".6"/>' +
      '</g>' +
      '<g fill="none" stroke="#00bfff" stroke-width="3" stroke-linecap="round">' +
        '<path d="M120 40 C160 60 120 80 160 100 C120 120 160 140 120 160"/>' +
        '<path d="M240 40 C200 60 240 80 200 100 C240 120 200 140 240 160"/>' +
      '</g>' +
      '<g stroke="#87ceeb" stroke-width="2.5" fill="none">' +
        '<path d="M160 60 L200 80"/>' +
        '<path d="M120 80 L240 60"/>' +
        '<path d="M160 100 L200 120"/>' +
        '<path d="M120 120 L240 100"/>' +
        '<path d="M160 140 L200 160"/>' +
      '</g>' +
      '<circle cx="120" cy="40" r="5" fill="url(#sci-dna)"/>' +
      '<circle cx="240" cy="40" r="5" fill="url(#sci-dna)"/>' +
    '</svg>',

    atom: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
      '<defs>' +
        '<radialGradient id="sci-nucleus" cx=".5" cy=".5" r=".5">' +
          '<stop offset="0" stop-color="#87ceeb"/>' +
          '<stop offset="1" stop-color="#00bfff"/>' +
        '</radialGradient>' +
      '</defs>' +
      '<g stroke="#87ceeb" fill="none">' +
        '<circle cx="180" cy="100" r="70" opacity=".35"/>' +
        '<circle cx="180" cy="100" r="46" opacity=".22"/>' +
      '</g>' +
      '<ellipse cx="180" cy="100" rx="84" ry="30" fill="none" stroke="#00bfff" stroke-width="1.8"/>' +
      '<ellipse cx="180" cy="100" rx="84" ry="30" fill="none" stroke="#00bfff" stroke-width="1.8" transform="rotate(60 180 100)"/>' +
      '<ellipse cx="180" cy="100" rx="84" ry="30" fill="none" stroke="#00bfff" stroke-width="1.8" transform="rotate(-60 180 100)"/>' +
      '<circle cx="180" cy="100" r="6" fill="url(#sci-nucleus)"/>' +
    '</svg>',

    earth: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
      '<defs>' +
        '<radialGradient id="earth-glow" cx=".35" cy=".35" r=".65">' +
          '<stop offset="0" stop-color="#00bfff" stop-opacity=".8"/>' +
          '<stop offset="1" stop-color="#0047ab" stop-opacity=".3"/>' +
        '</radialGradient>' +
      '</defs>' +
      '<circle cx="180" cy="100" r="52" fill="url(#earth-glow)"/>' +
      '<g fill="#87ceeb" opacity=".7">' +
        '<path d="M160 60 Q180 50 200 65 L190 90 Q180 85 160 90 Z"/>' +
        '<path d="M140 95 Q150 100 160 98 L165 120 Q145 115 140 110 Z"/>' +
        '<path d="M200 110 Q220 105 230 120 L220 135 Q210 130 200 135 Z"/>' +
      '</g>' +
      '<circle cx="180" cy="100" r="50" fill="none" stroke="#00bfff" stroke-width="2" opacity=".6"/>' +
      '<g fill="#87ceeb" opacity=".4">' +
        '<circle cx="95" cy="85" r="2.5"/>' +
        '<circle cx="265" cy="120" r="2"/>' +
        '<circle cx="160" cy="160" r="1.5"/>' +
      '</g>' +
    '</svg>',
  }
};
