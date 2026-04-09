import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/0e25810d-e02e-44a1-bb9b-83a7a0354af8.jpg";
const WEEK_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg";
const NOIR_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/ee289538-68dd-470f-8d6e-ac7a98007c74.jpg";
const SCI_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/029ce885-c123-44ac-9d52-a9b185f01d4a.jpg";

const collections = [
  {
    id: 1,
    title: "Нуар и детектив",
    desc: "Тёмные улицы, роковые красавицы, частные сыщики — лучший нуар всех времён",
    img: NOIR_IMG,
    tags: ["Нуар", "Детектив", "Криминал"],
    count: 24,
  },
  {
    id: 2,
    title: "Фантастика / Космос",
    desc: "Эпические путешествия сквозь звёзды, инопланетные цивилизации и будущее человечества",
    img: SCI_IMG,
    tags: ["Sci-Fi", "Фантастика", "Эпик"],
    count: 31,
  },
  {
    id: 3,
    title: "Авторское кино",
    desc: "Висконти, Тарковский, Феллини — великие режиссёры, изменившие язык кино",
    img: HERO_IMG,
    tags: ["Арт-хаус", "Авторское", "Классика"],
    count: 18,
  },
];

const reviews = [
  {
    id: 1,
    title: "Оппенгеймер",
    year: 2023,
    director: "Кристофер Нолан",
    rating: 5,
    img: WEEK_IMG,
    excerpt:
      "Монументальная биографическая эпопея Нолана превращает историю создания атомной бомбы в захватывающий психологический триллер, где каждый кадр — произведение искусства.",
    genre: "Биография / Драма",
  },
  {
    id: 2,
    title: "Прошлые жизни",
    year: 2023,
    director: "Селин Сон",
    rating: 4,
    img: NOIR_IMG,
    excerpt:
      "Тонкая, почти бесплотная история о двух людях, чьи судьбы пересекаются через десятилетия. Кино, которое остаётся с тобой навсегда.",
    genre: "Мелодрама",
  },
];

const news = [
  {
    id: 1,
    date: "8 апреля 2026",
    tag: "Фестивали",
    title: "Канны 2026: объявлена программа основного конкурса",
    excerpt: "В этом году конкурс поражает смелыми именами: дебютанты соседствуют с мэтрами мирового кино.",
  },
  {
    id: 2,
    date: "6 апреля 2026",
    tag: "Релизы",
    title: "Вышел трейлер нового фильма Пола Томаса Андерсона",
    excerpt: "Режиссёр «Нефти» и «Мастера» возвращается с камерной историей о музыканте в Лос-Анджелесе 70-х.",
  },
  {
    id: 3,
    date: "4 апреля 2026",
    tag: "Рецензии",
    title: "«Зло не существует» Хамагути: разбор финала",
    excerpt: "Почему открытый финал японского мастера — это не слабость, а высшая форма кинематографического высказывания.",
  },
];

const genres = [
  { name: "Триллеры", icon: "🔪", count: 87 },
  { name: "Драмы", icon: "🎭", count: 134 },
  { name: "Ужасы", icon: "👻", count: 62 },
  { name: "Фантастика", icon: "🚀", count: 95 },
  { name: "Комедии", icon: "😄", count: 73 },
  { name: "Боевики", icon: "💥", count: 110 },
  { name: "Детективы", icon: "🔍", count: 49 },
  { name: "Анимация", icon: "✨", count: 58 },
  { name: "Криминал", icon: "🎩", count: 44 },
  { name: "Военный", icon: "🎖️", count: 37 },
  { name: "Фэнтези", icon: "🐉", count: 52 },
  { name: "Документальный", icon: "🎥", count: 41 },
];

const navLinks = ["Главная", "Подборки", "Жанры", "Рецензии", "Новости"];

export default function Index() {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeNav, setActiveNav] = useState("Главная");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A", color: "#fff" }}>

      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          backgroundColor: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <span style={{ fontSize: 22 }}>🎬</span>
          <span
            className="font-display font-bold tracking-widest"
            style={{ color: "#D4AF37", fontSize: 20, letterSpacing: "0.14em" }}
          >
            CINEVAULT
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveNav(link)}
              className="nav-link font-body"
              style={activeNav === link ? { color: "#D4AF37" } : {}}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2" style={{ position: "relative" }}>
          <Icon name="Search" size={16} style={{ position: "absolute", left: 12, color: "#D4AF37", zIndex: 1 }} />
          <input
            type="text"
            placeholder="Найти фильм..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-glow font-body"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid #2A2A2A",
              borderRadius: 4,
              padding: "8px 16px 8px 36px",
              color: "#fff",
              fontSize: 13,
              width: 200,
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
            onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
          />
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: "#D4AF37", background: "none", border: "none", cursor: "pointer" }}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "rgba(10,10,10,0.98)", backdropFilter: "blur(20px)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => { setActiveNav(link); setMobileMenuOpen(false); }}
              className="font-display text-2xl"
              style={{ color: activeNav === link ? "#D4AF37" : "#fff", background: "none", border: "none", cursor: "pointer" }}
            >
              {link}
            </button>
          ))}
          <div className="flex items-center gap-2 mt-4" style={{ position: "relative" }}>
            <Icon name="Search" size={16} style={{ position: "absolute", left: 12, color: "#D4AF37", zIndex: 1 }} />
            <input
              type="text"
              placeholder="Найти фильм..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid #2A2A2A",
                borderRadius: 4,
                padding: "10px 16px 10px 38px",
                color: "#fff",
                fontSize: 15,
                width: 260,
                outline: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: 600 }}>
        <img
          src={HERO_IMG}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.65)" }}
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 pb-20 md:pb-28">
          <div>
            <div
              className="animate-fade-up font-body mb-4"
              style={{
                color: "#D4AF37",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              ✦ Премиум подборка · Апрель 2026
            </div>
            <h1
              className="animate-fade-up-delay-1 font-display"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                maxWidth: 700,
                textShadow: "0 4px 30px rgba(0,0,0,0.6)",
              }}
            >
              Кино, достойное<br />
              <span style={{ color: "#D4AF37", fontStyle: "italic" }}>вашего времени</span>
            </h1>
            <p
              className="animate-fade-up-delay-2 font-body mt-4"
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                color: "rgba(255,255,255,0.7)",
                maxWidth: 500,
                lineHeight: 1.7,
              }}
            >
              Экспертные подборки, глубокие рецензии и новости мирового кино — всё в одном месте
            </p>
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 mt-8">
              <button
                className="font-body font-semibold"
                style={{
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  border: "none",
                  borderRadius: 3,
                  padding: "14px 36px",
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#E8C84A";
                  (e.target as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#D4AF37";
                  (e.target as HTMLButtonElement).style.transform = "translateY(0)";
                }}
              >
                Смотреть подборки
              </button>
              <button
                className="font-body font-medium"
                style={{
                  background: "transparent",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 3,
                  padding: "14px 36px",
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "#D4AF37";
                  (e.target as HTMLButtonElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                  (e.target as HTMLButtonElement).style.color = "#fff";
                }}
              >
                Читать рецензии
              </button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.12em" }}
        >
          <span className="font-body uppercase">Прокрутить</span>
          <Icon name="ChevronDown" size={16} />
        </div>
      </section>

      {/* ── ПОДБОРКА НЕДЕЛИ ── */}
      <section className="px-6 md:px-16 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div
              className="font-body mb-2"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              ✦ Редакция рекомендует
            </div>
            <h2 className="font-display text-3xl md:text-4xl gold-line" style={{ fontWeight: 700 }}>
              Подборка недели
            </h2>
          </div>
          <button
            className="font-body hidden md:flex items-center gap-2"
            style={{ color: "#D4AF37", fontSize: 13, letterSpacing: "0.08em", background: "none", border: "none", cursor: "pointer" }}
          >
            Все подборки <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div
          className="card-hover relative overflow-hidden rounded-sm cursor-pointer"
          style={{
            background: "#141414",
            border: "1px solid #2A2A2A",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="relative overflow-hidden" style={{ minHeight: 380 }}>
            <img
              src={WEEK_IMG}
              alt="Подборка недели"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, transparent 60%, #141414 100%)" }}
            />
            <div
              className="absolute top-5 left-5 font-body font-bold"
              style={{
                background: "#D4AF37",
                color: "#0A0A0A",
                padding: "4px 14px",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                borderRadius: 2,
              }}
            >
              Подборка недели
            </div>
          </div>

          <div className="flex flex-col justify-center p-10 md:p-14">
            <div className="flex gap-2 mb-5 flex-wrap">
              {["Эпик", "Фантастика", "Экшен"].map((t) => (
                <span key={t} className="tag-badge">{t}</span>
              ))}
            </div>
            <h3
              className="font-display mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              Великие эпосы большого экрана
            </h3>
            <p
              className="font-body mb-8"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontSize: 15, maxWidth: 440 }}
            >
              15 монументальных фильмов, которые переосмыслили жанр. От «Лоуренса Аравийского» до «Дюны» — эпическое кино, которое смотрят на большом экране.
            </p>
            <div className="flex items-center gap-6">
              <button
                className="font-body font-semibold"
                style={{
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  border: "none",
                  borderRadius: 3,
                  padding: "12px 30px",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#E8C84A")}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#D4AF37")}
              >
                Открыть подборку
              </button>
              <span className="font-body" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                15 фильмов
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ПОДБОРКИ ── */}
      <section className="px-6 md:px-16 pb-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div
              className="font-body mb-2"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              ✦ Тематические коллекции
            </div>
            <h2 className="font-display text-3xl md:text-4xl gold-line" style={{ fontWeight: 700 }}>
              Подборки
            </h2>
          </div>
          <button
            className="font-body hidden md:flex items-center gap-2"
            style={{ color: "#D4AF37", fontSize: 13, letterSpacing: "0.08em", background: "none", border: "none", cursor: "pointer" }}
          >
            Все подборки <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.map((col) => (
            <div
              key={col.id}
              className="card-hover cursor-pointer overflow-hidden rounded-sm"
              style={{ background: "#141414", border: "1px solid #2A2A2A" }}
            >
              <div className="relative overflow-hidden" style={{ height: 220 }}>
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #141414 0%, transparent 60%)" }}
                />
                <div
                  className="absolute bottom-3 right-3 font-body"
                  style={{
                    background: "rgba(10,10,10,0.75)",
                    border: "1px solid #2A2A2A",
                    color: "#D4AF37",
                    padding: "3px 10px",
                    fontSize: 11,
                    borderRadius: 2,
                  }}
                >
                  {col.count} фильмов
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {col.tags.map((t) => (
                    <span key={t} className="tag-badge">{t}</span>
                  ))}
                </div>
                <h3 className="font-display text-xl mb-2" style={{ fontWeight: 600, lineHeight: 1.3 }}>
                  {col.title}
                </h3>
                <p className="font-body text-sm mb-5" style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  {col.desc}
                </p>
                <button
                  className="font-body flex items-center gap-2"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#D4AF37",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    padding: 0,
                  }}
                >
                  Смотреть <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ЖАНРЫ ── */}
      <section
        className="px-6 md:px-16 py-20"
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <div
              className="font-body mb-2"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              ✦ Все направления
            </div>
            <h2 className="font-display text-3xl md:text-4xl gold-line" style={{ fontWeight: 700 }}>
              Жанры
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {genres.map((g) => (
            <button
              key={g.name}
              className="card-hover text-left cursor-pointer rounded-sm"
              style={{
                background: "#141414",
                border: "1px solid #2A2A2A",
                padding: "20px 18px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                transition: "transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 30px rgba(212,175,55,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#2A2A2A";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: 26 }}>{g.icon}</span>
              <span
                className="font-display"
                style={{ fontSize: 15, fontWeight: 600, color: "#fff", lineHeight: 1.2 }}
              >
                {g.name}
              </span>
              <span
                className="font-body"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}
              >
                {g.count} фильмов
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── РЕЦЕНЗИИ ── */}
      <section
        className="px-6 md:px-16 py-20"
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <div
              className="font-body mb-2"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              ✦ Экспертный взгляд
            </div>
            <h2 className="font-display text-3xl md:text-4xl gold-line" style={{ fontWeight: 700 }}>
              Рецензии
            </h2>
          </div>
          <button
            className="font-body hidden md:flex items-center gap-2"
            style={{ color: "#D4AF37", fontSize: 13, letterSpacing: "0.08em", background: "none", border: "none", cursor: "pointer" }}
          >
            Все рецензии <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="card-hover cursor-pointer rounded-sm overflow-hidden"
              style={{ background: "#141414", border: "1px solid #2A2A2A", display: "flex", flexDirection: "column" }}
            >
              <div className="relative overflow-hidden" style={{ height: 260 }}>
                <img
                  src={rev.img}
                  alt={rev.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #141414 0%, transparent 55%)" }}
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="tag-badge font-body"
                    style={{ color: "#D4AF37", borderColor: "rgba(212,175,55,0.3)" }}
                  >
                    {rev.genre}
                  </span>
                  <div className="stars font-body" style={{ fontSize: 14 }}>
                    {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                  </div>
                </div>
                <h3 className="font-display text-2xl mb-1" style={{ fontWeight: 700 }}>
                  {rev.title}
                </h3>
                <div
                  className="font-body mb-4"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: 13 }}
                >
                  {rev.director} · {rev.year}
                </div>
                <p
                  className="font-body text-sm flex-1"
                  style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}
                >
                  {rev.excerpt}
                </p>
                <button
                  className="font-body flex items-center gap-2 mt-5"
                  style={{
                    background: "none",
                    border: "none",
                    color: "#D4AF37",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    letterSpacing: "0.04em",
                    padding: 0,
                  }}
                >
                  Читать рецензию <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── НОВОСТИ ── */}
      <section
        className="px-6 md:px-16 py-20"
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <div
              className="font-body mb-2"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              ✦ Последние события
            </div>
            <h2 className="font-display text-3xl md:text-4xl gold-line" style={{ fontWeight: 700 }}>
              Новости
            </h2>
          </div>
          <button
            className="font-body hidden md:flex items-center gap-2"
            style={{ color: "#D4AF37", fontSize: 13, letterSpacing: "0.08em", background: "none", border: "none", cursor: "pointer" }}
          >
            Все новости <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="flex flex-col">
          {news.map((item, idx) => (
            <div
              key={item.id}
              className="cursor-pointer"
              style={{
                padding: "24px 0",
                borderBottom: idx < news.length - 1 ? "1px solid #1e1e1e" : "none",
                transition: "padding-left 0.3s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.paddingLeft = "8px")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.paddingLeft = "0px")}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-4 flex-wrap">
                  <span
                    className="tag-badge font-body flex-shrink-0"
                    style={{ color: "#D4AF37", borderColor: "rgba(212,175,55,0.3)" }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className="font-display text-lg md:text-xl"
                    style={{ fontWeight: 600, transition: "color 0.2s" }}
                  >
                    {item.title}
                  </h3>
                </div>
                <span
                  className="font-body flex-shrink-0"
                  style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, letterSpacing: "0.06em" }}
                >
                  {item.date}
                </span>
              </div>
              <p
                className="font-body mt-2"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 680 }}
              >
                {item.excerpt}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ПОДПИСКА ── */}
      <section
        className="px-6 md:px-16 py-24"
        style={{
          background: "linear-gradient(135deg, #111108 0%, #0A0A0A 50%, #0D0D08 100%)",
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="font-body mb-4"
            style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
          >
            ✦ Будьте в курсе
          </div>
          <h2
            className="font-display text-3xl md:text-5xl mb-4 gold-line-center"
            style={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            Кино каждую неделю
          </h2>
          <p
            className="font-body mt-8 mb-10"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8 }}
          >
            Подпишитесь на нашу рассылку — каждую пятницу мы отправляем лучшие фильмы недели, рецензии редакции и главные новости мирового кино
          </p>

          {subscribed ? (
            <div
              className="font-body flex items-center justify-center gap-3"
              style={{ color: "#D4AF37", fontSize: 16, fontWeight: 500 }}
            >
              <Icon name="CheckCircle" size={22} />
              Вы подписаны! Ждите писем каждую пятницу
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-body flex-1"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid #2A2A2A",
                  borderRadius: 3,
                  padding: "14px 18px",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
                onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
              />
              <button
                type="submit"
                className="font-body font-semibold flex-shrink-0"
                style={{
                  background: "#D4AF37",
                  color: "#0A0A0A",
                  border: "none",
                  borderRadius: 3,
                  padding: "14px 28px",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#E8C84A")}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#D4AF37")}
              >
                Подписаться
              </button>
            </form>
          )}
          <p
            className="font-body mt-4"
            style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}
          >
            Никакого спама. Только хорошее кино.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="px-6 md:px-16 py-16" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span style={{ fontSize: 20 }}>🎬</span>
              <span
                className="font-display font-bold tracking-widest"
                style={{ color: "#D4AF37", fontSize: 18, letterSpacing: "0.14em" }}
              >
                CINEVAULT
              </span>
            </div>
            <p
              className="font-body text-sm"
              style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}
            >
              Премиальный кино-портал для тех, кто воспринимает кино как искусство
            </p>
          </div>

          <div>
            <h4
              className="font-body font-semibold mb-4"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Разделы
            </h4>
            {navLinks.map((l) => (
              <div key={l} className="mb-2">
                <button
                  className="font-body text-sm nav-link"
                  style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: 0 }}
                >
                  {l}
                </button>
              </div>
            ))}
          </div>

          <div>
            <h4
              className="font-body font-semibold mb-4"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Жанры
            </h4>
            {["Драма", "Триллер", "Комедия", "Документальное", "Фантастика"].map((g) => (
              <div key={g} className="mb-2">
                <button
                  className="font-body text-sm nav-link"
                  style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: 0 }}
                >
                  {g}
                </button>
              </div>
            ))}
          </div>

          <div>
            <h4
              className="font-body font-semibold mb-4"
              style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              Мы в сети
            </h4>
            <div className="flex gap-4">
              {[
                { icon: "MessageCircle", label: "Telegram" },
                { icon: "Youtube", label: "YouTube" },
                { icon: "Instagram", label: "Instagram" },
              ].map((s) => (
                <button
                  key={s.icon}
                  title={s.label}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid #2A2A2A",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.5)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37";
                    (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#2A2A2A";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon name={s.icon as "MessageCircle" | "Youtube" | "Instagram"} size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2026 CINEVAULT. Все права защищены.
          </p>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Условия использования"].map((l) => (
              <button
                key={l}
                className="font-body text-xs"
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.color = "#D4AF37")}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.25)")}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}