// Послание дня — виджет для Scriptable (iPhone, Home/Lock Screen)
// Как поставить: см. widget/README.md
//
// Настройки:
//   TRAD = "science" | "runes" | "slavic-runes" | "bible" | "mantras" | "quran"
//   или "" (пусто) — каждый день новая традиция по кругу.
// Ссылка на сайт приложения:
const SITE = "https://poslanie-dnya.vercel.app";
const TRAD = ""; // "" = ротация традиций по дню

const TRADITIONS = [
  { id: "bible",        name: "Библия",          emoji: "📖" },
  { id: "runes",        name: "Руны",            emoji: "ᛟ" },
  { id: "slavic-runes", name: "Руны славянские", emoji: "🪵" },
  { id: "mantras",      name: "Мантры",          emoji: "🕉️" },
  { id: "quran",        name: "Коран",           emoji: "☪️" },
  { id: "science",      name: "Наука",           emoji: "🔬" },
];

// Палитры традиций — как на сайте (см. index.html)
const PALETTES = {
  bible:         { bg1:"#142d44", bg2:"#0b1c2c", gold:"#8ecae6", goldSoft:"#d4e6f2", text:"#f5f8fb", muted:"#a8bdcc", cardA:"#20405c", cardB:"#152c42", glow:"#2f6f99", line:"rgba(142,202,230,.4)" },
  runes:         { bg1:"#152640", bg2:"#0c1626", gold:"#aebbd0", goldSoft:"#dce5f0", text:"#eef2f7", muted:"#9aa8ba", cardA:"#253a56", cardB:"#17273d", glow:"#2c4d74", line:"rgba(174,187,208,.4)" },
  "slavic-runes":{ bg1:"#2d1614", bg2:"#190b09", gold:"#e63946", goldSoft:"#f7e6e3", text:"#f4ece7", muted:"#cfa9a0", cardA:"#46251f", cardB:"#2d1612", glow:"#5c1f1a", line:"rgba(230,57,70,.4)" },
  mantras:       { bg1:"#20205a", bg2:"#12122e", gold:"#d4af37", goldSoft:"#e8c56b", text:"#eceaf5", muted:"#a79fc2", cardA:"#2a2a72", cardB:"#1d1d4d", glow:"#3a3a8f", line:"rgba(212,175,55,.4)" },
  quran:         { bg1:"#153731", bg2:"#0b211d", gold:"#2fd6b6", goldSoft:"#e4c39b", text:"#f7f2e6", muted:"#c4b9a0", cardA:"#1f4d43", cardB:"#12342c", glow:"#2f7a69", line:"rgba(47,214,182,.4)" },
  science:       { bg1:"#241a56", bg2:"#120e30", gold:"#22d3ee", goldSoft:"#c4b5fd", text:"#eef2f7", muted:"#a3a8c4", cardA:"#3b2f73", cardB:"#261d52", glow:"#4c3aa8", line:"rgba(34,211,238,.4)" },
};

const DAY = Math.floor(Date.now() / 86400000);
const DAYOFYEAR = dayOfYear(new Date());

// Паутина: все data-файлы сайта, чтобы взять любую традицию
const FILES = {
  bible:        "bible",
  runes:        "runes",
  "slavic-runes": "slavic-runes",
  mantras:      "mantras",
  quran:        "quran",
  science:      "science",
};

async function loadData(id) {
  const file = FILES[id];
  const req = new Request(`${SITE}/data/${file}.js`);
  req.timeoutInterval = 12; // не виснуть дольше 12 сек
  const js = await req.loadString();

  // Данные — обычный JS (ключи без кавычек), не JSON, поэтому честно выполняем:
  // в Scriptable нет window, подставляем заглушку и возвращаем массив по ключу.
  const path = /^[A-Za-z0-9]+$/.test(id)
    ? `window.DATA.${id}`                       // bible, runes, ...
    : `window.DATA[${JSON.stringify(id)}]`;     // "slavic-runes" (дефис)
  const list = eval(`var window = {}; ${js}; ${path}`);
  if (!Array.isArray(list)) throw new Error("Не массив: " + file);
  return list;
}

function pickId() {
  if (TRAD && FILES[TRAD]) return TRAD;
  return TRADITIONS[DAY % TRADITIONS.length].id; // детерминированно «рандомное, но сегодняшнее»
}

function makeCard(id, it) {
  const tr = TRADITIONS.find((t) => t.id === id);
  if (id === "bible") return { quote: `«${it.text}»`, sub: it.ref, desc: it.desc };
  if (id === "runes" || id === "slavic-runes") return { quote: `${it.name} — ${it.meaning}`, sub: "руна дня", desc: it.desc };
  if (id === "mantras") return { quote: `«${it.translation}»`, sub: it.translit, desc: it.desc };
  if (id === "quran") return { quote: `«${it.text}»`, sub: it.sura, desc: it.desc };
  return { quote: it.fact, sub: "научный факт дня", desc: it.desc };
}

function dayOfYear(d) {
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d - start;
  return Math.floor(diff / 86400000);
}

// Заменить CSS-переменные в SVG сцены на реальные цвета палитры (Scriptable не знает var()).
function resolveScene(svg, p) {
  const m = {
    "var(--bg1)": p.bg1, "var(--bg2)": p.bg2, "var(--gold)": p.gold,
    "var(--gold-soft)": p.goldSoft, "var(--text)": p.text, "var(--muted)": p.muted,
    "var(--card-a)": p.cardA, "var(--card-b)": p.cardB, "var(--glow)": p.glow,
    "var(--line)": p.line,
  };
  Object.keys(m).forEach((k) => { svg = svg.split(k).join(m[k]); });
  return svg;
}

async function run() {
  const id = pickId();
  const p = PALETTES[id] || PALETTES.bible;
  const list = await loadData(id);
  const it = list[DAY % list.length];
  const card = makeCard(id, it);
  const tr = TRADITIONS.find((t) => t.id === id);
  const deep = `${SITE}/#${id}/${DAY % list.length}`;

  // Текст для шеринга по тапу
  const shareText = `Послание дня · ${tr.emoji} ${tr.name}\n\n${card.quote}\n\n${card.desc || ""}\n\n${deep}`;

  const w = new ListWidget();
  // фон — палитра традиции дня (как на сайте)
  const bg = new LinearGradient();
  bg.locations = [0, 1];
  bg.colors = [new Color(p.bg1), new Color(p.bg2)];
  w.backgroundGradient = bg;

  // сцена-зарисовка дня (если Scriptable отрисует SVG); размер зависит от семейства виджета
  const family = (config.widgetFamily || "medium").toLowerCase();
  const sceneSize = family === "large" ? { w: 300, h: 167 }
                  : family === "medium" ? { w: 300, h: 110 }
                  : null; // маленький виджет — сцена не помещается, только текст
  if (sceneSize && it.scene) {
    try {
      const svg = resolveScene(it.scene, p);
      const img = Image.fromSVG(svg);
      const sceneStack = w.addStack();
      sceneStack.layoutVertically();
      const imgEl = sceneStack.addImage(img);
      imgEl.imageSize = new Size(sceneSize.w, sceneSize.h);
      imgEl.centerAlignImage();
      sceneStack.addSpacer(6);
    } catch (e) {
      // не критично — без сцены виджет тоже работает
    }
  }

  // заголовок
  const header = w.addStack();
  header.layoutHorizontally();
  const h = header.addText("ПОСЛАНИЕ ДНЯ");
  h.font = Font.blackSystemFont(13);
  h.textColor = new Color(p.gold);

  // число-дата: «1 августа · №214» — чтобы было видно, что послание сегодняшнее
  const d = new Date();
  const dateLabel = d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" }) + " · №" + DAYOFYEAR;
  const date = w.addText(dateLabel);
  date.font = Font.mediumSystemFont(11);
  date.textColor = new Color(p.muted);
  w.addSpacer(8);

  // само послание
  const quote = w.addText(card.quote);
  quote.font = Font.mediumSystemFont(15);
  quote.textColor = new Color(p.text);
  quote.lineLimit = 5;
  quote.minimumScaleFactor = 0.7;

  w.addSpacer(6);
  const sub = w.addText(card.sub);
  sub.font = Font.italicSystemFont(11);
  sub.textColor = new Color(p.goldSoft);
  sub.lineLimit = 1;

  if (card.desc) {
    w.addSpacer(6);
    const desc = w.addText(card.desc);
    desc.font = Font.lightSystemFont(11);
    desc.textColor = new Color(p.muted);
    desc.lineLimit = 3;
    desc.minimumScaleFactor = 0.7;
  }

  w.addSpacer(6);
  const tag = w.addText(`${tr.emoji} ${tr.name}`);
  tag.font = Font.regularSystemFont(10);
  tag.textColor = new Color(p.muted);

  w.url = deep;
  w.refreshAfterDate = new Date(Date.now() + 1000 * 60 * 60); // обновлять не чаще раза в час

  if (config.runsInWidget) {
    Script.setWidget(w);
  } else {
    // проверка прямо в Scriptable: показать превью + скопировать ссылку
    w.presentMedium();
    Pasteboard.copyString(shareText);
    console.log("Сегодня: " + dateLabel + " | " + card.quote + "\nСсылка: " + deep);
  }
}

run().catch((err) => {
  const w = new ListWidget();
  const bg = new LinearGradient();
  bg.colors = [new Color("#23265a"), new Color("#10112a")];
  w.backgroundGradient = bg;
  const t = w.addText("Не получилось загрузить послание");
  t.textColor = new Color("#e9e6da");
  t.font = Font.mediumSystemFont(13);
  const e = w.addText(String(err && err.message || err));
  e.textColor = new Color("#ff5f6d");
  e.font = Font.lightSystemFont(10);
  w.addSpacer(4);
  w.url = SITE;
  Script.setWidget(w);
  if (!config.runsInWidget) w.presentMedium();
});
