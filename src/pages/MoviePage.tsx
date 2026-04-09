import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { getMovieBySlug } from "@/data/movies";

export default function MoviePage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const movie = getMovieBySlug(slug || "");
  const [trailerOpen, setTrailerOpen] = useState(false);

  useEffect(() => {
    if (movie) {
      document.title = `${movie.title} (${movie.year}) — смотреть, описание, трейлер | CineVault`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", movie.description.slice(0, 160));
    }
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, [movie]);

  if (!movie) {
    return (
      <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Фильм не найден</p>
          <button onClick={() => navigate(-1)} style={{ background: "#D4AF37", color: "#0A0A0A", border: "none", borderRadius: 3, padding: "10px 24px", cursor: "pointer", fontWeight: 600 }}>
            Назад
          </button>
        </div>
      </div>
    );
  }

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
          onClick={() => navigate(-1)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <Icon name="ChevronLeft" size={18} style={{ color: "#D4AF37" }} />
          <span className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Назад</span>
        </button>
        <button onClick={() => navigate("/")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <span className="font-display" style={{ fontSize: 20, fontWeight: 700 }}>
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
        </button>
      </div>

      {/* ── BACKDROP HERO ── */}
      <div style={{ position: "relative", height: 480, overflow: "hidden" }}>
        <img
          src={movie.imgBackdrop || movie.img}
          alt={movie.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 0%, transparent 60%)" }} />

        {/* Контент поверх */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 40px", maxWidth: 1100, display: "flex", alignItems: "flex-end", gap: 32 }}>

          {/* Постер */}
          <div style={{ flexShrink: 0, width: 160, height: 230, borderRadius: 3, overflow: "hidden", border: "2px solid rgba(212,175,55,0.2)", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
            <img src={movie.img} alt={movie.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* Инфо */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="font-body"
                  style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37", fontSize: 10, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  {g}
                </span>
              ))}
              <span
                className="font-body"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)", fontSize: 10, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.08em" }}
              >
                {movie.ageRating}
              </span>
            </div>

            <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: 6 }}>
              {movie.title}
            </h1>
            <div className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
              {movie.originalTitle} · {movie.year} · {movie.country} · {movie.duration}
            </div>

            {/* Рейтинг */}
            <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < movie.rating ? "#D4AF37" : "rgba(255,255,255,0.12)", fontSize: 20 }}>★</span>
              ))}
            </div>

            {/* Кнопки */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {movie.trailerUrl && (
                <button
                  onClick={() => setTrailerOpen(true)}
                  className="font-body"
                  style={{
                    background: "#D4AF37", color: "#0A0A0A",
                    border: "none", borderRadius: 3,
                    padding: "12px 28px", fontSize: 13,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    fontWeight: 700, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: 8,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#E8C84A")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#D4AF37")}
                >
                  <Icon name="Play" size={16} style={{ color: "#0A0A0A" }} />
                  Смотреть трейлер
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── ОСНОВНАЯ ИНФОРМАЦИЯ ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 48 }}>

          {/* Левая колонка — описание */}
          <div>
            <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 16 }}>
              О фильме
            </div>
            <p className="font-body" style={{ fontSize: 15, lineHeight: 1.9, color: "rgba(255,255,255,0.62)", marginBottom: 40 }}>
              {movie.description}
            </p>

            {/* Трейлер встроенный */}
            {movie.trailerUrl && (
              <div style={{ marginBottom: 40 }}>
                <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 16 }}>
                  Официальный трейлер
                </div>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: 3, border: "1px solid #1e1e1e" }}>
                  <iframe
                    src={movie.trailerUrl}
                    title={`Трейлер — ${movie.title}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Правая колонка — детали */}
          <div>
            <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: 3, padding: "24px" }}>
              <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 20 }}>
                Детали
              </div>

              {[
                { label: "Год", value: String(movie.year) },
                { label: "Страна", value: movie.country },
                { label: "Длительность", value: movie.duration },
                { label: "Возраст", value: movie.ageRating },
                { label: "Жанр", value: movie.genre.join(", ") },
                { label: "Режиссёр", value: movie.director },
              ].map(({ label, value }) => (
                <div key={label} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: "1px solid #1a1a1a" }}>
                  <div className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>
                    {label}
                  </div>
                  <div className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                    {value}
                  </div>
                </div>
              ))}

              {/* В ролях */}
              <div>
                <div className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
                  В ролях
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {movie.cast.map((actor) => (
                    <div
                      key={actor}
                      className="font-body"
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", paddingLeft: 8, borderLeft: "2px solid rgba(212,175,55,0.2)" }}
                    >
                      {actor}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── МОДАЛКА ТРЕЙЛЕРА ── */}
      {trailerOpen && movie.trailerUrl && (
        <div
          onClick={() => setTrailerOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 100,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(860px, 92vw)", position: "relative" }}
          >
            <button
              onClick={() => setTrailerOpen(false)}
              style={{ position: "absolute", top: -40, right: 0, background: "none", border: "none", color: "#D4AF37", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}
            >
              <Icon name="X" size={18} style={{ color: "#D4AF37" }} />
              <span className="font-body" style={{ fontSize: 12, letterSpacing: "0.1em" }}>Закрыть</span>
            </button>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 3, overflow: "hidden" }}>
              <iframe
                src={`${movie.trailerUrl}?autoplay=1`}
                title={`Трейлер — ${movie.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <div style={{ padding: "32px 24px", borderTop: "1px solid #141414", marginTop: 20 }}>
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
