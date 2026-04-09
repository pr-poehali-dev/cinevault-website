import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { trailers, genres } from "@/data/trailers";

export default function TrailersPage() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState("Все");
  const [activeTrailer, setActiveTrailer] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Трейлеры фильмов 2026 — смотреть онлайн | CineVault";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Официальные трейлеры фильмов 2026 года. Боевики, триллеры, ужасы, драмы — смотрите первыми на CineVault.");
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, []);

  const filtered = activeGenre === "Все"
    ? trailers
    : trailers.filter((t) => t.genre === activeGenre);

  const featured = trailers[0];

  return (
    <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#fff" }}>

      {/* ── HEADER ── */}
      <div
        style={{
          borderBottom: "1px solid #141414",
          padding: "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(12px)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <Icon name="ChevronLeft" size={18} style={{ color: "#D4AF37" }} />
          <span className="font-display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", color: "#fff" }}>
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
        </button>
        <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Трейлеры
        </span>
      </div>

      {/* ── FEATURED TRAILER ── */}
      <div
        style={{ position: "relative", height: 420, overflow: "hidden", cursor: "pointer" }}
        onClick={() => setActiveTrailer(activeTrailer === featured.id ? null : featured.id)}
      >
        <img
          src={featured.img}
          alt={featured.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />

        {/* Play большой */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "rgba(212,175,55,0.15)",
              border: "2px solid #D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(8px)",
              transition: "transform 0.2s, background 0.2s",
            }}
          >
            <Icon name="Play" size={32} style={{ color: "#D4AF37", marginLeft: 4 }} />
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 24px 32px",
          }}
        >
          <div
            className="font-body"
            style={{ fontSize: 10, color: "#D4AF37", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 10 }}
          >
            ✦ Смотрите первыми
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <div>
              <span
                className="font-body"
                style={{
                  display: "inline-block",
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  color: "#D4AF37",
                  fontSize: 10,
                  padding: "3px 10px",
                  borderRadius: 2,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {featured.genre}
              </span>
              <h1 className="font-display" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 8 }}>
                {featured.title}
              </h1>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, maxWidth: 520 }}>
                {featured.description}
              </p>
            </div>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{featured.studio}</span>
              <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{featured.releaseDate}</span>
              <span
                className="font-body"
                style={{
                  background: "rgba(0,0,0,0.7)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 2,
                  letterSpacing: "0.06em",
                }}
              >
                {featured.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── PAGE CONTROLS ── */}
      <div style={{ padding: "32px 24px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 8 }}>
              Официальные трейлеры · {trailers.length} видео
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.4rem, 3vw, 1.8rem)", fontWeight: 700 }}>
              Все трейлеры
            </h2>
          </div>

          {/* Фильтр по жанру */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className="font-body"
                style={{
                  background: activeGenre === g ? "#D4AF37" : "#141414",
                  color: activeGenre === g ? "#0A0A0A" : "rgba(255,255,255,0.45)",
                  border: `1px solid ${activeGenre === g ? "#D4AF37" : "#2A2A2A"}`,
                  borderRadius: 3,
                  padding: "7px 16px",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontWeight: activeGenre === g ? 700 : 400,
                  transition: "all 0.15s",
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── СЕТКА ТРЕЙЛЕРОВ ── */}
      <div style={{ padding: "0 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((trailer) => (
            <div
              key={trailer.id}
              style={{ cursor: "pointer" }}
              onClick={() => setActiveTrailer(activeTrailer === trailer.id ? null : trailer.id)}
            >
              {/* Превью */}
              <div
                style={{
                  position: "relative",
                  height: 190,
                  overflow: "hidden",
                  borderRadius: 2,
                  border: `1px solid ${activeTrailer === trailer.id ? "#D4AF37" : "#2A2A2A"}`,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (activeTrailer !== trailer.id) e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                }}
                onMouseLeave={(e) => {
                  if (activeTrailer !== trailer.id) e.currentTarget.style.borderColor = "#2A2A2A";
                }}
              >
                <img
                  src={trailer.img}
                  alt={trailer.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.7)",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1.05)";
                    (e.target as HTMLImageElement).style.filter = "brightness(0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = "scale(1)";
                    (e.target as HTMLImageElement).style.filter = "brightness(0.7)";
                  }}
                />

                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 55%)" }} />

                {/* Play */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
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
                      e.currentTarget.style.background = "rgba(212,175,55,0.35)";
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(212,175,55,0.15)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    <Icon name="Play" size={18} style={{ color: "#D4AF37", marginLeft: 3 }} />
                  </div>
                </div>

                {/* Жанр */}
                <div
                  className="font-body"
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    color: "#D4AF37",
                    fontSize: 9,
                    padding: "2px 8px",
                    borderRadius: 2,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {trailer.genre}
                </div>

                {/* Длительность */}
                <div
                  className="font-body"
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    background: "rgba(0,0,0,0.75)",
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 10,
                    padding: "2px 7px",
                    borderRadius: 2,
                    letterSpacing: "0.04em",
                  }}
                >
                  {trailer.duration}
                </div>
              </div>

              {/* Подпись */}
              <div style={{ marginTop: 12 }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: activeTrailer === trailer.id ? "#D4AF37" : "#fff",
                    lineHeight: 1.3,
                    marginBottom: 4,
                    transition: "color 0.2s",
                  }}
                >
                  {trailer.title}
                </h3>
                <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: activeTrailer === trailer.id ? 8 : 0 }}>
                  {trailer.year} · {trailer.studio}
                </div>

                {/* Раскрывающееся описание */}
                {activeTrailer === trailer.id && (
                  <p
                    className="font-body"
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.7,
                      marginTop: 6,
                      borderLeft: "2px solid rgba(212,175,55,0.3)",
                      paddingLeft: 10,
                    }}
                  >
                    {trailer.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.25)", fontSize: 14 }}>
              Трейлеров в этом жанре пока нет
            </p>
          </div>
        )}
      </div>

      {/* ── FOOTER ── */}
      <div style={{ padding: "32px 24px", borderTop: "1px solid #141414" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="font-display" style={{ fontSize: 18, fontWeight: 700 }}>
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
          <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            Кино, достойное вашего времени
          </span>
        </div>
      </div>
    </div>
  );
}
