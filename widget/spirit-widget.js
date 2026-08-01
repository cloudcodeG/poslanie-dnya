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
  const js = await req.loadString();
  if (typeof window === "undefined") { globalThis.window = globalThis; }
  eval(js);
  const list = globalThis.window.DATA && globalThis.window.DATA[file] ? globalThis.window.DATA[file] : [];
  if (!Array.isArray(list)) throw new Error("Нет данных: " + file);
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

async function run() {
  const id = pickId();
  const list = await loadData(id);
  const it = list[DAY % list.length];
  const card = makeCard(id, it);
  const tr = TRADITIONS.find((t) => t.id === id);
  const deep = `${SITE}/#${id}/${DAY % list.length}`;

  // Текст для шеринга по тапу
  const shareText = `Послание дня · ${tr.emoji} ${tr.name}\n\n${card.quote}\n\n${card.desc || ""}\n\n${deep}`;

  const w = new ListWidget();
  // фон — как на сайте: индиго градиент
  const bg = new LinearGradient();
  bg.locations = [0, 1];
  bg.colors = [new Color("#23265a"), new Color("#10112a")];
  w.backgroundGradient = bg;

  // заголовок
  const header = w.addStack();
  header.layoutHorizontally();
  const h = header.addText("ПОСЛАНИЕ ДНЯ");
  h.font = Font.blackSystemFont(13);
  h.textColor = new Color("#d4af37");

  // число-дата: «1 августа · №214» — чтобы было видно, что послание сегодняшнее
  const d = new Date();
  const dateLabel = d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" }) + " · №" + DAYOFYEAR;
  const date = w.addText(dateLabel);
  date.font = Font.mediumSystemFont(11);
  date.textColor = new Color("#a29eae");
  w.addSpacer(8);

  // само послание
  const quote = w.addText(card.quote);
  quote.font = Font.mediumSystemFont(15);
  quote.textColor = new Color("#e9e6da");
  quote.lineLimit = 5;
  quote.minimumScaleFactor = 0.7;

  w.addSpacer(6);
  const sub = w.addText(card.sub);
  sub.font = Font.italicSystemFont(11);
  sub.textColor = new Color("#e8c56b");
  sub.lineLimit = 1;

  if (card.desc) {
    w.addSpacer(6);
    const desc = w.addText(card.desc);
    desc.font = Font.lightSystemFont(11);
    desc.textColor = new Color("#a29eae");
    desc.lineLimit = 3;
    desc.minimumScaleFactor = 0.7;
  }

  w.addSpacer(6);
  const tag = w.addText(`${tr.emoji} ${tr.name}`);
  tag.font = Font.regularSystemFont(10);
  tag.textColor = new Color("#6f6c86");

  w.url = deep;
  w.refreshAfterDate = new Date(Date.now() + 1000 * 60 * 60); // обновлять не чаще раза в час

  if (config.runsInWidget) {
    Script.setWidget(w);
  } else {
    // проверка прямо в Scriptable: показать превью + скопировать ссылку
    w.presentSmall();
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
  if (!config.runsInWidget) w.presentSmall();
});
