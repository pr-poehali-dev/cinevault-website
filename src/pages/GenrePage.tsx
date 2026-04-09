import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { genres, getGenreBySlug } from "@/data/genres";

const SORT_OPTIONS = ["По рейтингу", "По году", "По алфавиту"];

export default function GenrePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const genre = getGenreBySlug(slug || "");
  const [sort, setSort] = useState("По рейтингу");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (genre?.seo) {
      document.title = genre.seo.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", genre.seo.metaDescription);
    } else if (genre) {
      document.title = `${genre.name} — подборки фильмов | CineVault`;
    }
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, [genre]);

  if (!genre) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#0A0A0A", color: "#fff" }}
      >
        <div className="text-center">
          <p className="font-display text-2xl mb-4" style={{ color: "#D4AF37" }}>Жанр не найден</p>
          <button
            onClick={() => navigate("/")}
            style={{ color: "rgba(255,255,255,0.5)", background: "none", border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif" }}
          >
            ← На главную
          </button>
        </div>
      </div>
    );
  }

  const filtered = genre.movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

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
          className="flex items-center gap-3 cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          <span style={{ fontSize: 22 }}>🎬</span>
          <span
            className="font-display font-bold"
            style={{ color: "#D4AF37", fontSize: 20, letterSpacing: "0.14em" }}
          >
            CINEVAULT
          </span>
        </button>

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
            (e.currentTarget).style.borderColor = "#D4AF37";
            (e.currentTarget).style.color = "#D4AF37";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget).style.borderColor = "#2A2A2A";
            (e.currentTarget).style.color = "rgba(255,255,255,0.6)";
          }}
        >
          <Icon name="ChevronLeft" size={15} /> На главную
        </button>
      </header>

      {/* ── HERO ЖАНРА ── */}
      <div
        className="relative pt-24 pb-14 px-6 md:px-16"
        style={{
          background: "linear-gradient(135deg, #0f0e00 0%, #0A0A0A 60%)",
          borderBottom: "1px solid #1a1a1a",
        }}
      >
        {/* Декор */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 300,
            background: "radial-gradient(ellipse at top right, rgba(212,175,55,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="font-body mb-3"
          style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}
        >
          ✦ Жанр
        </div>

        <div className="flex items-center gap-4 mb-3">
          <span style={{ fontSize: 48, lineHeight: 1 }}>{genre.icon}</span>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}
          >
            {genre.name}
          </h1>
        </div>

        <p
          className="font-body mb-8"
          style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}
        >
          {genre.description}
        </p>

        {/* Фильтры */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Поиск */}
          <div style={{ position: "relative" }}>
            <Icon name="Search" size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#D4AF37" }} />
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="font-body"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid #2A2A2A",
                borderRadius: 3,
                padding: "9px 14px 9px 34px",
                color: "#fff",
                fontSize: 13,
                width: 220,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#D4AF37")}
              onBlur={(e) => (e.target.style.borderColor = "#2A2A2A")}
            />
          </div>

          {/* Сортировка */}
          <div className="flex gap-2">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setSort(opt)}
                className="font-body"
                style={{
                  background: sort === opt ? "#D4AF37" : "rgba(255,255,255,0.04)",
                  color: sort === opt ? "#0A0A0A" : "rgba(255,255,255,0.5)",
                  border: `1px solid ${sort === opt ? "#D4AF37" : "#2A2A2A"}`,
                  borderRadius: 3,
                  padding: "8px 16px",
                  fontSize: 12,
                  fontWeight: sort === opt ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  letterSpacing: "0.04em",
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          <span
            className="font-body ml-auto"
            style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}
          >
            {sorted.length} фильмов
          </span>
        </div>
      </div>

      {/* ── СЕТКА ФИЛЬМОВ ── */}
      <div className="px-6 md:px-16 py-12">
        {sorted.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-xl" style={{ color: "rgba(255,255,255,0.3)" }}>
              Ничего не найдено
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {sorted.map((movie) => (
              <div
                key={movie.id}
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
                    src={movie.img}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    style={{ transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                  />

                  {/* Тёмный оверлей при наведении */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 60%, transparent 100%)",
                      transition: "opacity 0.3s",
                    }}
                  >
                    <div className="flex flex-wrap gap-1 mb-2">
                      {movie.tags.map(t => (
                        <span
                          key={t}
                          className="font-body"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.6)",
                            background: "rgba(255,255,255,0.08)",
                            padding: "2px 6px",
                            borderRadius: 2,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div
                      className="font-body"
                      style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}
                    >
                      {movie.duration}
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
                      {movie.rating}.0
                    </span>
                  </div>
                </div>

                {/* Инфо */}
                <h3
                  className="font-display"
                  style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.3, color: "#fff", marginBottom: 3, transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#D4AF37")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                >
                  {movie.title}
                </h3>
                <div
                  className="font-body"
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}
                >
                  {movie.director} · {movie.year}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── SEO ТЕКСТ ── */}
      {genre.seo && (
        <div style={{ backgroundColor: "#0A0A0A", padding: "60px 24px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #1e1e1e)" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2e2e2e", whiteSpace: "nowrap" }}>О ЖАНРЕ</span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #1e1e1e)" }} />
            </div>

            {/* H1 SEO */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#4a4a4a",
              lineHeight: 1.3,
              marginBottom: 20,
            }}>
              {genre.seo.h1}
            </h1>

            {/* Вводный текст */}
            {genre.seo.intro.split("\n\n").map((para, i) => (
              <p key={i} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                lineHeight: 1.85,
                color: "#555",
                marginBottom: 16,
                paddingLeft: i === 0 ? 20 : 0,
                borderLeft: i === 0 ? "2px solid #1e1e1e" : "none",
              }}>
                {para}
              </p>
            ))}

            {/* Секции H2 */}
            <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 32 }}>
              {genre.seo.sections.map((section, i) => (
                <div key={i}>
                  <h2 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    opacity: 0.65,
                    marginBottom: 12,
                  }}>
                    {section.heading}
                  </h2>
                  {section.text.split("\n\n").map((para, j) => (
                    <p key={j} style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: "#555",
                      marginBottom: 10,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 48 }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #1e1e1e)" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2a2a2a", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
                <strong style={{ color: "#D4AF37", opacity: 0.5 }}>CineVault</strong>
                <span style={{ color: "#222" }}> — кино, достойное вашего времени</span>
              </span>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #1e1e1e)" }} />
            </div>
          </div>
        </div>
      )}

      {/* ── ДРУГИЕ ЖАНРЫ ── */}
      <div
        className="px-6 md:px-16 py-12"
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <h2
          className="font-display mb-6"
          style={{ fontSize: 22, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}
        >
          Другие жанры
        </h2>
        <div className="flex flex-wrap gap-3">
          {genres
            .filter(g => g.slug !== slug)
            .map(g => (
              <button
                key={g.slug}
                onClick={() => navigate(`/genre/${g.slug}`)}
                className="font-body flex items-center gap-2"
                style={{
                  background: "#141414",
                  border: "1px solid #2A2A2A",
                  borderRadius: 3,
                  padding: "10px 18px",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.borderColor = "#D4AF37";
                  (e.currentTarget).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.borderColor = "#2A2A2A";
                  (e.currentTarget).style.color = "rgba(255,255,255,0.55)";
                }}
              >
                <span>{g.icon}</span> {g.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}