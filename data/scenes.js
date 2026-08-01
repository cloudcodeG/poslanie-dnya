/* Сцены для обратной стороны карточки — inline SVG под каждую традицию.
   Палитра приложения: индиго #23265a/#2c3070/#1c1e45, золото #d4af37/#e8c56b, muted #a29eae.
   Без внешних ресурсов и текстовых элементов — только фигуры. */
window.DATA = window.DATA || {};
window.DATA.scenes = {

  bible: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<radialGradient id="bible-halo" cx=".5" cy=".5" r=".5">' +
        '<stop offset="0" stop-color="#2c3070" stop-opacity=".95"/>' +
        '<stop offset="1" stop-color="#2c3070" stop-opacity="0"/>' +
      '</radialGradient>' +
      '<linearGradient id="bible-gold" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#e8c56b"/>' +
        '<stop offset="1" stop-color="#d4af37"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="180" cy="100" r="78" fill="url(#bible-halo)"/>' +
    '<g fill="#d4af37" opacity=".2">' +
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
        '<stop offset="0" stop-color="#2c3070"/>' +
        '<stop offset="1" stop-color="#1c1e45"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="288" cy="52" r="18" fill="#e8c56b"/>' +
    '<circle cx="288" cy="52" r="26" fill="#e8c56b" opacity=".16"/>' +
    '<polygon points="0,172 58,92 116,172" fill="#23265a" opacity=".6"/>' +
    '<polygon points="96,172 176,64 256,172" fill="#2c3070" opacity=".9"/>' +
    '<polygon points="224,172 302,84 360,172" fill="#23265a" opacity=".7"/>' +
    '<rect x="0" y="170" width="360" height="30" fill="#1c1e45"/>' +
    '<rect x="116" y="90" width="68" height="84" rx="14" fill="url(#runes-stone)" stroke="#d4af37" stroke-width="2"/>' +
    '<g stroke="#d4af37" stroke-width="3.5" stroke-linecap="round" fill="none">' +
      '<path d="M150 104 L150 158"/>' +
      '<path d="M132 116 L150 132 L168 116"/>' +
    '</g>' +
  '</svg>',

  mantras: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="mantra-petal" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#e8c56b"/>' +
        '<stop offset="1" stop-color="#d4af37"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<circle cx="118" cy="58" r="4" fill="#a29eae" opacity=".5"/>' +
    '<circle cx="252" cy="70" r="3" fill="#a29eae" opacity=".4"/>' +
    '<circle cx="205" cy="38" r="2.5" fill="#a29eae" opacity=".5"/>' +
    '<g stroke="#d4af37" fill="none">' +
      '<circle cx="180" cy="80" r="30" stroke-width="2" opacity=".9"/>' +
      '<circle cx="180" cy="80" r="21" stroke-width="1.6" opacity=".6"/>' +
      '<circle cx="180" cy="80" r="13" stroke-width="1.2" opacity=".35"/>' +
    '</g>' +
    '<circle cx="180" cy="80" r="4" fill="#e8c56b"/>' +
    '<g fill="url(#mantra-petal)" stroke="#e8c56b" stroke-width="1">' +
      '<ellipse cx="180" cy="152" rx="20" ry="40" transform="rotate(-15 180 152)"/>' +
      '<ellipse cx="180" cy="152" rx="20" ry="40" transform="rotate(15 180 152)"/>' +
      '<ellipse cx="180" cy="152" rx="18" ry="40" transform="rotate(-46 180 152)"/>' +
      '<ellipse cx="180" cy="152" rx="18" ry="40" transform="rotate(46 180 152)"/>' +
      '<ellipse cx="180" cy="154" rx="16" ry="38"/>' +
    '</g>' +
    '<ellipse cx="180" cy="186" rx="72" ry="12" fill="#1c1e45" opacity=".7"/>' +
  '</svg>',

  quran: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="quran-gold" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="#e8c56b"/>' +
        '<stop offset="1" stop-color="#d4af37"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<g fill="#a29eae">' +
      '<path d="M56 48 l3 8 8 3 -8 3 -3 8 -3 -8 -8 -3 8 -3 Z"/>' +
      '<path d="M296 58 l2.5 7 7 2.5 -7 2.5 -2.5 7 -2.5 -7 -7 -2.5 7 -2.5 Z"/>' +
      '<path d="M118 36 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" opacity=".75"/>' +
      '<path d="M252 30 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2 Z" opacity=".6"/>' +
    '</g>' +
    '<g fill="url(#quran-gold)" fill-rule="evenodd">' +
      '<circle cx="226" cy="78" r="42"/>' +
      '<circle cx="206" cy="66" r="40"/>' +
    '</g>' +
    '<g fill="#23265a">' +
      '<rect x="62" y="124" width="236" height="60" opacity=".92"/>' +
      '<path d="M122 124 a58 58 0 0 1 116 0 Z"/>' +
      '<rect x="128" y="56" width="13" height="68" rx="3"/>' +
      '<rect x="219" y="56" width="13" height="68" rx="3"/>' +
      '<circle cx="134.5" cy="52" r="4" fill="#d4af37"/>' +
      '<circle cx="225.5" cy="52" r="4" fill="#d4af37"/>' +
    '</g>' +
  '</svg>',

  science: '<svg viewBox="0 0 360 200" aria-hidden="true">' +
    '<defs>' +
      '<linearGradient id="sci-planet" x1="0" y1="0" x2="1" y2="1">' +
        '<stop offset="0" stop-color="#2c3070"/>' +
        '<stop offset="1" stop-color="#23265a"/>' +
      '</linearGradient>' +
    '</defs>' +
    '<ellipse cx="180" cy="100" rx="150" ry="50" fill="none" stroke="#a29eae" stroke-width="1" opacity=".35"/>' +
    '<ellipse cx="180" cy="100" rx="106" ry="34" fill="none" stroke="#a29eae" stroke-width="1" opacity=".22"/>' +
    '<g fill="#a29eae">' +
      '<circle cx="40" cy="40" r="2"/>' +
      '<circle cx="92" cy="122" r="1.5" opacity=".6"/>' +
      '<circle cx="320" cy="50" r="2"/>' +
      '<circle cx="282" cy="152" r="1.5" opacity=".5"/>' +
      '<circle cx="205" cy="26" r="1.5" opacity=".7"/>' +
      '<circle cx="55" cy="160" r="2" opacity=".6"/>' +
      '<circle cx="330" cy="140" r="1.5" opacity=".5"/>' +
    '</g>' +
    '<path d="M62 140 L8 132 L62 126 Z" fill="#e8c56b" opacity=".75"/>' +
    '<circle cx="68" cy="134" r="4" fill="#e8c56b"/>' +
    '<circle cx="180" cy="100" r="46" fill="url(#sci-planet)" stroke="#d4af37" stroke-width="1.5"/>' +
    '<ellipse cx="180" cy="100" rx="82" ry="20" fill="none" stroke="#d4af37" stroke-width="2.5" transform="rotate(-18 180 100)" opacity=".85"/>' +
  '</svg>'

};
