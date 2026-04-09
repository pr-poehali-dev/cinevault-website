import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { genres } from "@/data/genres";
import { collections, weeklyCollection } from "@/data/collections";
import { reviews } from "@/data/reviews";
import { newsItems } from "@/data/news";

const HERO_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/0e25810d-e02e-44a1-bb9b-83a7a0354af8.jpg";
const WEEK_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/06b44759-748e-4a19-8732-4c64e1365f3f.jpg";
const NOIR_IMG = "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/ee289538-68dd-470f-8d6e-ac7a98007c74.jpg";





const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Подборки", path: "/collections" },
  { label: "Жанры", path: "/genre/trillery" },
  { label: "Рецензии", path: "/reviews" },
  { label: "Новости", path: "/news" },
  { label: "Трейлеры", path: "/trailers" },
];

export default function Index() {
  const navigate = useNavigate();
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
              key={link.label}
              onClick={() => { setActiveNav(link.label); navigate(link.path); }}
              className="nav-link font-body"
              style={activeNav === link.label ? { color: "#D4AF37" } : {}}
            >
              {link.label}
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
              key={link.label}
              onClick={() => { setActiveNav(link.label); setMobileMenuOpen(false); navigate(link.path); }}
              className="font-display text-2xl"
              style={{ color: activeNav === link.label ? "#D4AF37" : "#fff", background: "none", border: "none", cursor: "pointer" }}
            >
              {link.label}
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
            onClick={() => navigate("/collections")}
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
          onClick={() => navigate(`/collections/${weeklyCollection.slug}`)}
        >
          <div className="relative overflow-hidden" style={{ minHeight: 380 }}>
            <img
              src={weeklyCollection.img}
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
              {weeklyCollection.tags.map((t) => (
                <span key={t} className="tag-badge">{t}</span>
              ))}
            </div>
            <h3
              className="font-display mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 700, lineHeight: 1.2 }}
            >
              {weeklyCollection.title}
            </h3>
            <p
              className="font-body mb-8"
              style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontSize: 15, maxWidth: 440 }}
            >
              {weeklyCollection.desc}
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
                {weeklyCollection.count} фильмов
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
            onClick={() => navigate("/collections")}
          >
            Все подборки <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {collections.slice(1, 4).map((col) => (
            <div
              key={col.id}
              className="card-hover cursor-pointer overflow-hidden rounded-sm"
              style={{ background: "#141414", border: "1px solid #2A2A2A" }}
              onClick={() => navigate(`/collections/${col.slug}`)}
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

      {/* ── ТРЕЙЛЕРЫ ── */}
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
              ✦ Смотрите первыми
            </div>
            <h2 className="font-display text-3xl md:text-4xl gold-line" style={{ fontWeight: 700 }}>
              Трейлеры
            </h2>
          </div>
          <button
            className="font-body hidden md:flex items-center gap-2"
            style={{ color: "#D4AF37", fontSize: 13, letterSpacing: "0.08em", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => navigate("/trailers")}
          >
            Все трейлеры <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              id: 1,
              title: "Громовержец",
              year: 2026,
              genre: "Боевик",
              duration: "2:34",
              img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/439ce577-8d46-4d3a-91af-9e03b105c9da.jpg",
            },
            {
              id: 2,
              title: "Неон-Сити",
              year: 2026,
              genre: "Фантастика",
              duration: "3:01",
              img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/6bc636ab-4436-4e2b-b77d-093c67d5130a.jpg",
            },
            {
              id: 3,
              title: "Тёмный порог",
              year: 2026,
              genre: "Ужасы",
              duration: "1:58",
              img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/bd369821-4798-4b02-8f22-9765dd76cd80.jpg",
            },
            {
              id: 4,
              title: "Последний закат",
              year: 2026,
              genre: "Драма",
              duration: "2:17",
              img: "https://cdn.poehali.dev/projects/4c6193da-9184-47af-906c-2ccba1394f45/files/125bd6bd-ced9-4877-a4e3-4144dd6af374.jpg",
            },
          ].map((trailer) => (
            <div
              key={trailer.id}
              className="cursor-pointer group"
              style={{ position: "relative" }}
              onClick={() => {}}
            >
              {/* Картинка */}
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  height: 200,
                  border: "1px solid #2A2A2A",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#2A2A2A";
                }}
              >
                <img
                  src={trailer.img}
                  alt={trailer.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.5s ease", filter: "brightness(0.75)" }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1.06)";
                    (e.target as HTMLImageElement).style.filter = "brightness(0.55)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1)";
                    (e.target as HTMLImageElement).style.filter = "brightness(0.75)";
                  }}
                />

                {/* Градиент */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)" }}
                />

                {/* Кнопка Play */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ transition: "opacity 0.2s" }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "rgba(212,175,55,0.15)",
                      border: "2px solid #D4AF37",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backdropFilter: "blur(4px)",
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(212,175,55,0.35)";
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(212,175,55,0.15)";
                      (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                    }}
                  >
                    <Icon name="Play" size={20} style={{ color: "#D4AF37", marginLeft: 3 }} />
                  </div>
                </div>

                {/* Длительность */}
                <div
                  className="absolute bottom-2 right-2 font-body"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 11,
                    padding: "2px 7px",
                    borderRadius: 2,
                    letterSpacing: "0.04em",
                  }}
                >
                  {trailer.duration}
                </div>

                {/* Жанр */}
                <div
                  className="absolute top-2 left-2 font-body"
                  style={{
                    background: "rgba(212,175,55,0.15)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                    fontSize: 10,
                    padding: "2px 8px",
                    borderRadius: 2,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {trailer.genre}
                </div>
              </div>

              {/* Подпись */}
              <div className="mt-3">
                <h3
                  className="font-display"
                  style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.3, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF37")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                >
                  {trailer.title}
                </h3>
                <span className="font-body" style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
                  {trailer.year} · Официальный трейлер
                </span>
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
              onClick={() => navigate(`/genre/${g.slug}`)}
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

        {/* ── СЕРИАЛЫ БАННЕР ── */}
        <div
          className="mt-6 cursor-pointer relative overflow-hidden rounded-sm"
          style={{
            background: "linear-gradient(105deg, #1a1400 0%, #0f0c00 40%, #141414 100%)",
            border: "1px solid #D4AF37",
            padding: "36px 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            boxShadow: "0 0 40px rgba(212,175,55,0.08), inset 0 0 60px rgba(212,175,55,0.03)",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 60px rgba(212,175,55,0.18), inset 0 0 60px rgba(212,175,55,0.05)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 40px rgba(212,175,55,0.08), inset 0 0 60px rgba(212,175,55,0.03)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
        >
          {/* Декоративный элемент */}
          <div
            style={{
              position: "absolute",
              right: -40,
              top: -40,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 48, lineHeight: 1 }}>📺</span>
            <div>
              <div
                className="font-body mb-1"
                style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 600 }}
              ></div>
              <h3
                className="font-display"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}
              >
                Сериалы
              </h3>
              <p
                className="font-body mt-1"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6, maxWidth: 480 }}
              >
                Лучшие сериалы со всего мира — от HBO до корейских дорам. Подборки, рецензии и рейтинги сезонов.
              </p>
            </div>
          </div>

          <button
            className="font-body font-semibold flex-shrink-0"
            onClick={() => navigate("/series")}
            style={{
              background: "#D4AF37",
              color: "#0A0A0A",
              border: "none",
              borderRadius: 3,
              padding: "14px 36px",
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#E8C84A";
              (e.target as HTMLButtonElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "#D4AF37";
              (e.target as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            Смотреть сериалы
          </button>
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
            onClick={() => navigate("/reviews")}
          >
            Все рецензии <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.slice(0, 2).map((rev) => (
            <div
              key={rev.id}
              className="card-hover cursor-pointer rounded-sm overflow-hidden"
              style={{ background: "#141414", border: "1px solid #2A2A2A", display: "flex", flexDirection: "column" }}
              onClick={() => navigate(`/reviews/${rev.slug}`)}
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
                  onClick={(e) => { e.stopPropagation(); navigate(`/reviews/${rev.slug}`); }}
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
            onClick={() => navigate("/news")}
          >
            Все новости <Icon name="ArrowRight" size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsItems.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="card-hover cursor-pointer rounded-sm overflow-hidden"
              style={{ background: "#141414", border: "1px solid #2A2A2A", display: "flex", flexDirection: "column" }}
              onClick={() => navigate(`/news/${item.slug}`)}
            >
              <div className="relative overflow-hidden" style={{ height: 180 }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #141414 0%, transparent 60%)" }}
                />
                <span
                  className="tag-badge font-body absolute top-3 left-3"
                  style={{ color: "#D4AF37", borderColor: "rgba(212,175,55,0.4)", background: "rgba(10,10,10,0.7)" }}
                >
                  {item.tag}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span
                  className="font-body mb-2 block"
                  style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, letterSpacing: "0.08em" }}
                >
                  {item.date}
                </span>
                <h3
                  className="font-display mb-2"
                  style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.35, color: "#fff" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-body text-sm flex-1"
                  style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}
                >
                  {item.excerpt}
                </p>
                <button
                  className="font-body flex items-center gap-2 mt-4"
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
                  onClick={(e) => { e.stopPropagation(); navigate(`/news/${item.slug}`); }}
                >
                  Читать <Icon name="ArrowRight" size={14} />
                </button>
              </div>
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

      {/* ── SEO TEXT ── */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "80px 24px 80px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Верхний разделитель с меткой */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #1e1e1e)" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#333", whiteSpace: "nowrap" }}>
              О ПРОЕКТЕ
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #1e1e1e)" }} />
          </div>

          {/* Главный заголовок */}
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "#4a4a4a",
            lineHeight: 1.35,
            marginBottom: 20,
            letterSpacing: "-0.01em",
          }}>
            Что посмотреть — подборки фильмов<br />и рецензии на лучшее кино
          </h2>

          {/* Вводный параграф с буквицей */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            lineHeight: 1.85,
            color: "#555",
            marginBottom: 48,
            paddingLeft: 20,
            borderLeft: "2px solid #1e1e1e",
          }}>
            <strong style={{ color: "#D4AF37", fontWeight: 600 }}>CineVault</strong> — это кино-гид для тех, кто устал листать бесконечные каталоги стриминговых сервисов и хочет смотреть только лучшее. Мы создали пространство, где каждый фильм заслуживает вашего внимания, каждая подборка собрана вручную, а каждая рецензия написана честно и по существу.
          </p>

          {/* Сетка блоков */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 48px" }}>

            {/* Блок 1 */}
            <div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: 14,
                opacity: 0.7,
              }}>
                Подборки фильмов
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>
                Не знаете, <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>что посмотреть</strong>? У нас десятки тематических подборок: от <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>лучших триллеров</strong> до <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>тихих драм</strong>. Мы отбираем фильмы по жанрам, настроению и платформам — Netflix, Кинопоиск, Apple TV+.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", marginTop: 12, marginBottom: 0 }}>
                <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>Лучшие фильмы 2026 года</strong>, недооценённые шедевры, <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>корейское кино</strong> и авторское кино от студий{" "}
                <a href="#" style={{ color: "#D4AF37", textDecoration: "none", opacity: 0.8 }}>A24</a>, NEON и Mubi.
              </p>
            </div>

            {/* Блок 2 */}
            <div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: 14,
                opacity: 0.7,
              }}>
                Честные рецензии
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>
                Наши <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>рецензии</strong> — это не пересказ сюжета. Мы разбираем режиссёрские решения, актёрские работы, визуальный стиль и саундтрек. Будь то <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>новинки кино 2026</strong> или культовая классика — честная оценка без спойлеров.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", marginTop: 12, marginBottom: 0 }}>
                Каждый фильм получает рейтинг по пятибалльной шкале и рекомендацию: кому стоит смотреть, а кому — нет.
              </p>
            </div>

            {/* Блок 3 */}
            <div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: 14,
                opacity: 0.7,
              }}>
                Новости кино
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>
                Разборы новых трейлеров, новости со съёмочных площадок, обзоры фестивалей{" "}
                <a href="#" style={{ color: "#D4AF37", textDecoration: "none", opacity: 0.8 }}>Канны</a>, Венеция, Берлинале и подготовка к церемонии <strong style={{ color: "#6a6a6a", fontWeight: 500 }}>Оскар 2025</strong>. Всё кратко, по делу и без жёлтых заголовков.
              </p>
            </div>

            {/* Блок 4 */}
            <div>
              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4AF37",
                marginBottom: 14,
                opacity: 0.7,
              }}>
                Жанры и настроение
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: "#555", margin: 0 }}>
                Удобная навигация по категориям:{" "}
                {["триллеры", "драмы", "ужасы", "фантастика", "комедии", "боевики", "детективы", "анимация", "документальное кино"].map((g, i, arr) => (
                  <span key={g}>
                    <a href="#" style={{ color: "#D4AF37", textDecoration: "none", opacity: 0.75 }}>{g}</a>
                    {i < arr.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}и мелодрамы. Выбирайте настроение — мы подберём фильм.
              </p>
            </div>
          </div>

          {/* Нижний разделитель с подписью */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 48 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #1e1e1e)" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#333", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
              <strong style={{ color: "#D4AF37", opacity: 0.6 }}>CineVault</strong>
              <span style={{ color: "#2a2a2a" }}> — кино, достойное вашего времени</span>
            </span>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #1e1e1e)" }} />
          </div>

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
              <div key={l.label} className="mb-2">
                <button
                  className="font-body text-sm nav-link"
                  onClick={() => navigate(l.path)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: 0 }}
                >
                  {l.label}
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