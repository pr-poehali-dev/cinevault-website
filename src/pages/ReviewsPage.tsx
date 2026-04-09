import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { reviews, genreFilters } from "@/data/reviews";

export default function ReviewsPage() {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState("Все");
  const [sort, setSort] = useState<"new" | "rating">("new");

  useEffect(() => {
    document.title = "Рецензии на фильмы 2023–2026 — экспертные обзоры | CineVault";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Честные рецензии на лучшие фильмы: Оппенгеймер, Дюна 2, Прошлые жизни. Экспертный взгляд без спойлеров. Только то, что стоит вашего времени.");
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, []);

  const filtered = reviews
    .filter((r) => activeGenre === "Все" || r.tags.includes(activeGenre) || r.genre.includes(activeGenre))
    .sort((a, b) => sort === "rating" ? b.rating - a.rating : b.id - a.id);

  const featured = reviews[reviews.length - 1];

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
          Рецензии
        </span>
      </div>

      {/* ── FEATURED ── */}
      <div
        style={{ position: "relative", height: 400, overflow: "hidden", cursor: "pointer" }}
        onClick={() => navigate(`/reviews/${featured.slug}`)}
      >
        <img
          src={featured.img}
          alt={featured.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 36px", maxWidth: 860 }}>
          <div className="font-body" style={{ fontSize: 10, color: "#D4AF37", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
            ✦ Рецензия редакции
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {featured.tags.map((t) => (
              <span
                key={t}
                className="font-body"
                style={{
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  color: "#D4AF37",
                  fontSize: 10,
                  padding: "3px 10px",
                  borderRadius: 2,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 10 }}>
            {featured.title}
          </h1>
          <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 560, marginBottom: 16 }}>
            {featured.excerpt}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < featured.rating ? "#D4AF37" : "rgba(255,255,255,0.15)", fontSize: 16 }}>★</span>
              ))}
            </div>
            <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              {featured.director} · {featured.year}
            </span>
            <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
              {featured.date}
            </span>
          </div>
        </div>
      </div>

      {/* ── CONTROLS ── */}
      <div style={{ padding: "32px 24px 20px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {genreFilters.map((g) => (
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

          <div style={{ display: "flex", gap: 2 }}>
            {([["new", "Сначала новые"], ["rating", "По рейтингу"]] as const).map(([val, label]) => (
              <button
                key={val}
                onClick={() => setSort(val)}
                className="font-body"
                style={{
                  background: sort === val ? "#1a1a1a" : "transparent",
                  color: sort === val ? "#fff" : "rgba(255,255,255,0.3)",
                  border: "1px solid #1e1e1e",
                  borderRadius: 2,
                  padding: "6px 14px",
                  fontSize: 11,
                  cursor: "pointer",
                  letterSpacing: "0.06em",
                  transition: "all 0.15s",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── СПИСОК РЕЦЕНЗИЙ ── */}
      <div style={{ padding: "0 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {filtered.map((rev, i) => (
            <div
              key={rev.id}
              onClick={() => navigate(`/reviews/${rev.slug}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr auto",
                alignItems: "center",
                gap: 0,
                borderBottom: "1px solid #141414",
                padding: "20px 0",
                cursor: "pointer",
                borderRadius: 2,
                transition: "background 0.15s, padding 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#111";
                e.currentTarget.style.paddingLeft = "12px";
                e.currentTarget.style.paddingRight = "12px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.paddingLeft = "0";
                e.currentTarget.style.paddingRight = "0";
              }}
            >
              {/* Постер */}
              <div style={{ position: "relative", width: 200, height: 120, overflow: "hidden", borderRadius: 2, flexShrink: 0 }}>
                <img src={rev.img} alt={rev.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, #0A0A0A 100%)" }} />
              </div>

              {/* Инфо */}
              <div style={{ padding: "0 28px" }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                  {rev.tags.map((t) => (
                    <span key={t} className="font-body" style={{ fontSize: 9, color: "rgba(212,175,55,0.55)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 600, lineHeight: 1.25, marginBottom: 6 }}>
                  {rev.title}
                  <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontWeight: 400, marginLeft: 10 }}>
                    {rev.originalTitle}
                  </span>
                </h2>
                <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>
                  {rev.director} · {rev.year} · {rev.duration}
                </div>
                <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 500 }}>
                  {rev.excerpt}
                </p>
              </div>

              {/* Рейтинг и дата */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, minWidth: 100, paddingLeft: 16 }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} style={{ color: s < rev.rating ? "#D4AF37" : "rgba(255,255,255,0.1)", fontSize: 13 }}>★</span>
                  ))}
                </div>
                <span className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", textAlign: "right" }}>
                  {rev.date}
                </span>
                <span className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.15)" }}>
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.25)", fontSize: 14 }}>Рецензий в этой категории пока нет</p>
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
