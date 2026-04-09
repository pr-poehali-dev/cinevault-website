import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { seriesList, seriesGenres } from "@/data/series";

const SORT_OPTIONS = ["По рейтингу", "По году", "По алфавиту"];
const STATUS_OPTIONS = ["Все", "Идёт", "Завершён", "Анонс"];

const statusColor: Record<string, string> = {
  "Идёт": "#4ade80",
  "Завершён": "rgba(255,255,255,0.35)",
  "Анонс": "#D4AF37",
};

const platformColors: Record<string, string> = {
  "HBO": "#8b5cf6",
  "Netflix": "#ef4444",
  "Apple TV+": "#3b82f6",
  "Amazon": "#f59e0b",
  "Кинопоиск": "#10b981",
};

export default function SeriesPage() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState("all");
  const [sort, setSort] = useState("По рейтингу");
  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("Все");

  const filtered = seriesList.filter(s => {
    const matchGenre = activeGenre === "all" || s.genre === activeGenre;
    const matchStatus = activeStatus === "Все" || s.status === activeStatus;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase());
    return matchGenre && matchStatus && matchSearch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "По рейтингу") return b.rating - a.rating;
    if (sort === "По году") return b.year - a.year;
    return a.title.localeCompare(b.title);
  });

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
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span style={{ fontSize: 22 }}>🎬</span>
          <span className="font-display font-bold" style={{ color: "#D4AF37", fontSize: 20, letterSpacing: "0.14em" }}>
            CINEVAULT
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {["Главная", "Жанры", "Сериалы"].map(link => (
            <button
              key={link}
              onClick={() => link === "Главная" ? navigate("/") : link === "Жанры" ? navigate("/") : null}
              className="nav-link font-body"
              style={link === "Сериалы" ? { color: "#D4AF37" } : {}}
            >
              {link}
            </button>
          ))}
        </nav>

        <button
          onClick={() => navigate("/")}
          className="font-body flex items-center gap-2"
          style={{
            background: "none",
            border: "1px solid #2A2A2A",
            borderRadius: 3,
            color: "rgba(255,255,255,0.6)",
            padding: "8px 18px",
            fontSize: 13,
            cursor: "pointer",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#D4AF37";
            e.currentTarget.style.color = "#D4AF37";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#2A2A2A";
            e.currentTarget.style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <Icon name="ChevronLeft" size={15} /> На главную
        </button>
      </header>

      {/* ── HERO ── */}
      <div
        className="relative pt-24 pb-12 px-6 md:px-16"
        style={{
          background: "linear-gradient(135deg, #0a0a12 0%, #0A0A0A 60%)",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        <div
          style={{
            position: "absolute", top: 0, right: 0, width: 500, height: 350,
            background: "radial-gradient(ellipse at top right, rgba(100,80,212,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="font-body mb-3" style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          ✦ Раздел
        </div>
        <div className="flex items-center gap-4 mb-3">
          <span style={{ fontSize: 48, lineHeight: 1 }}>📺</span>
          <h1 className="font-display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>
            Сериалы
          </h1>
        </div>
        <p className="font-body mb-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
          Лучшие сериалы со всего мира — от HBO до корейских дорам. Подборки, рецензии и рейтинги сезонов.
        </p>

        {/* Статистика */}
        <div className="flex flex-wrap gap-6 mb-8">
          {[
            { label: "Сериалов", value: seriesList.length },
            { label: "Жанров", value: seriesGenres.length - 1 },
            { label: "Платформ", value: 5 },
          ].map(stat => (
            <div key={stat.label}>
              <div className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Жанры-фильтр */}
        <div className="flex flex-wrap gap-2 mb-5">
          {seriesGenres.map(g => (
            <button
              key={g.slug}
              onClick={() => setActiveGenre(g.slug)}
              className="font-body"
              style={{
                background: activeGenre === g.slug ? "#D4AF37" : "rgba(255,255,255,0.04)",
                color: activeGenre === g.slug ? "#0A0A0A" : "rgba(255,255,255,0.55)",
                border: `1px solid ${activeGenre === g.slug ? "#D4AF37" : "#2A2A2A"}`,
                borderRadius: 3,
                padding: "7px 16px",
                fontSize: 12,
                fontWeight: activeGenre === g.slug ? 700 : 400,
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.04em",
              }}
            >
              {g.name}
            </button>
          ))}
        </div>

        {/* Статус + сортировка + поиск */}
        <div className="flex flex-wrap items-center gap-3">
          <div style={{ position: "relative" }}>
            <Icon name="Search" size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#D4AF37" }} />
            <input
              type="text"
              placeholder="Поиск сериала..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="font-body"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid #2A2A2A",
                borderRadius: 3,
                padding: "8px 14px 8px 34px",
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

          <div
            style={{ width: 1, height: 28, background: "#2A2A2A" }}
            className="hidden md:block"
          />

          {STATUS_OPTIONS.map(s => (
            <button
              key={s}
              onClick={() => setActiveStatus(s)}
              className="font-body"
              style={{
                background: "none",
                border: "none",
                color: activeStatus === s ? "#D4AF37" : "rgba(255,255,255,0.35)",
                fontSize: 13,
                cursor: "pointer",
                fontWeight: activeStatus === s ? 600 : 400,
                padding: "0 4px",
                transition: "color 0.2s",
                borderBottom: activeStatus === s ? "1px solid #D4AF37" : "1px solid transparent",
              }}
            >
              {s}
            </button>
          ))}

          <div className="ml-auto flex gap-2">
            {SORT_OPTIONS.map(opt => (
              <button
                key={opt}
                onClick={() => setSort(opt)}
                className="font-body"
                style={{
                  background: sort === opt ? "rgba(212,175,55,0.1)" : "none",
                  border: `1px solid ${sort === opt ? "rgba(212,175,55,0.4)" : "#2A2A2A"}`,
                  borderRadius: 3,
                  color: sort === opt ? "#D4AF37" : "rgba(255,255,255,0.35)",
                  fontSize: 12,
                  padding: "6px 12px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── СЕТКА СЕРИАЛОВ ── */}
      <div className="px-6 md:px-16 py-12">
        <div className="flex items-center justify-between mb-6">
          <span className="font-body" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            Найдено: <span style={{ color: "#D4AF37" }}>{sorted.length}</span> сериалов
          </span>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <span style={{ fontSize: 48 }}>📺</span>
            <p className="font-display text-xl mt-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              Ничего не найдено
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {sorted.map(series => (
              <div
                key={series.id}
                className="cursor-pointer group"
                style={{ transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")}
              >
                {/* Постер */}
                <div
                  className="relative overflow-hidden rounded-sm mb-3"
                  style={{
                    aspectRatio: "2/3",
                    border: "1px solid #2A2A2A",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#D4AF37";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(212,175,55,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#2A2A2A";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <img
                    src={series.img}
                    alt={series.title}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                  />

                  {/* Оверлей при наведении */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 60%, transparent 100%)",
                      transition: "opacity 0.3s",
                    }}
                  >
                    <div className="flex flex-wrap gap-1 mb-1">
                      {series.tags.map(t => (
                        <span key={t} className="font-body" style={{ fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.08)", padding: "2px 6px", borderRadius: 2 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                      {series.seasons} {series.seasons === 1 ? "сезон" : series.seasons < 5 ? "сезона" : "сезонов"}
                    </div>
                  </div>

                  {/* Рейтинг */}
                  <div
                    className="absolute top-2 right-2"
                    style={{
                      background: "rgba(10,10,10,0.82)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      borderRadius: 2,
                      padding: "2px 7px",
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <span style={{ color: "#D4AF37", fontSize: 10 }}>★</span>
                    <span className="font-body" style={{ color: "#D4AF37", fontSize: 11, fontWeight: 600 }}>
                      {series.rating}.0
                    </span>
                  </div>

                  {/* Статус */}
                  <div
                    className="absolute top-2 left-2 font-body flex items-center gap-1"
                    style={{
                      background: "rgba(10,10,10,0.8)",
                      borderRadius: 2,
                      padding: "2px 7px",
                      fontSize: 10,
                      letterSpacing: "0.06em",
                      color: statusColor[series.status] || "#fff",
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: statusColor[series.status], display: "inline-block" }} />
                    {series.status}
                  </div>

                  {/* Платформа */}
                  <div
                    className="absolute bottom-2 left-2 font-body"
                    style={{
                      background: platformColors[series.platform] ? `${platformColors[series.platform]}22` : "rgba(255,255,255,0.08)",
                      border: `1px solid ${platformColors[series.platform] ? `${platformColors[series.platform]}55` : "rgba(255,255,255,0.15)"}`,
                      color: platformColors[series.platform] || "rgba(255,255,255,0.5)",
                      borderRadius: 2,
                      padding: "2px 7px",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {series.platform}
                  </div>
                </div>

                {/* Инфо */}
                <h3
                  className="font-display"
                  style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3, color: "#fff", marginBottom: 3, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF37")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                >
                  {series.title}
                </h3>
                <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
                  {series.year} · {series.seasons} {series.seasons === 1 ? "сезон" : series.seasons < 5 ? "сезона" : "сезонов"}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <footer
        className="px-6 md:px-16 py-10 mt-8"
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ fontSize: 18 }}>🎬</span>
            <span className="font-display" style={{ color: "#D4AF37", fontSize: 16, letterSpacing: "0.14em" }}>CINEVAULT</span>
          </button>
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 CINEVAULT. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
