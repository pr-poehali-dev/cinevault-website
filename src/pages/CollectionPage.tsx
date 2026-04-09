import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";
import { getCollectionBySlug, collections } from "@/data/collections";

export default function CollectionPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const collection = getCollectionBySlug(slug || "");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    if (collection) {
      document.title = `${collection.title} — подборка фильмов | CineVault`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", collection.desc);
    }
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, [collection]);

  if (!collection) {
    return (
      <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Подборка не найдена</p>
          <button onClick={() => navigate("/collections")} style={{ background: "#D4AF37", color: "#0A0A0A", border: "none", borderRadius: 3, padding: "10px 24px", cursor: "pointer", fontWeight: 600 }}>
            Все подборки
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
          onClick={() => navigate("/collections")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <Icon name="ChevronLeft" size={18} style={{ color: "#D4AF37" }} />
          <span className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: "0.04em" }}>
            Все подборки
          </span>
        </button>
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span className="font-display" style={{ fontSize: 20, fontWeight: 700, letterSpacing: "0.04em", color: "#fff" }}>
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
        </button>
      </div>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img
          src={collection.img}
          alt={collection.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.45)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 60%)" }} />

        {collection.isWeekly && (
          <div
            className="font-body"
            style={{
              position: "absolute", top: 24, left: 24,
              background: "#D4AF37", color: "#0A0A0A",
              padding: "5px 16px", fontSize: 10,
              letterSpacing: "0.16em", textTransform: "uppercase",
              borderRadius: 2, fontWeight: 700,
            }}
          >
            Подборка недели
          </div>
        )}

        <div style={{ position: "absolute", bottom: 32, left: 24, right: 24, maxWidth: 760 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            {collection.tags.map((t) => (
              <span
                key={t}
                className="font-body"
                style={{
                  background: "rgba(212,175,55,0.12)",
                  border: "1px solid rgba(212,175,55,0.25)",
                  color: "#D4AF37",
                  padding: "4px 12px",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 10 }}>
            {collection.title}
          </h1>
          <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 540 }}>
            {collection.desc}
          </p>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ borderBottom: "1px solid #141414", padding: "16px 24px", display: "flex", gap: 32, maxWidth: 1100, margin: "0 auto" }}>
        <div>
          <div className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Фильмов</div>
          <div className="font-display" style={{ fontSize: 22, fontWeight: 700, color: "#D4AF37" }}>{collection.count}</div>
        </div>
        <div style={{ width: 1, background: "#1a1a1a" }} />
        <div>
          <div className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Подборка</div>
          <div className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Редакция CineVault</div>
        </div>
        <div style={{ width: 1, background: "#1a1a1a" }} />
        <div>
          <div className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>Обновлено</div>
          <div className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Апрель 2026</div>
        </div>
      </div>

      {/* ── ФИЛЬМЫ — СЕТКА КАРТОЧЕК ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>
        <div
          className="font-body"
          style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 28 }}
        >
          Фильмы в подборке · {collection.movies.length} фильмов
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {collection.movies.map((movie, i) => {
            const isOpen = expandedId === movie.id;
            return (
              <div
                key={movie.id}
                onClick={() => setExpandedId(isOpen ? null : movie.id)}
                style={{
                  background: "#111",
                  border: `1px solid ${isOpen ? "rgba(212,175,55,0.4)" : "#1e1e1e"}`,
                  borderRadius: 3,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {/* Постер */}
                <div style={{ position: "relative", height: 300, overflow: "hidden" }}>
                  <img
                    src={movie.img}
                    alt={movie.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.04)")}
                    onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 0%, transparent 55%)" }} />

                  {/* Номер */}
                  <div className="font-display" style={{ position: "absolute", top: 10, left: 12, fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.25)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Рейтинг */}
                  <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 1 }}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} style={{ color: s < movie.rating ? "#D4AF37" : "rgba(255,255,255,0.12)", fontSize: 10 }}>★</span>
                    ))}
                  </div>

                  {/* Жанр */}
                  {movie.genre && (
                    <div
                      className="font-body"
                      style={{
                        position: "absolute", bottom: 10, left: 10,
                        background: "rgba(212,175,55,0.12)",
                        border: "1px solid rgba(212,175,55,0.25)",
                        color: "#D4AF37", fontSize: 9,
                        padding: "2px 8px", borderRadius: 2,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                      }}
                    >
                      {movie.genre}
                    </div>
                  )}
                </div>

                {/* Основная инфа */}
                <div style={{ padding: "14px 16px 16px" }}>
                  <h3 className="font-display" style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.25, marginBottom: 6 }}>
                    {movie.title}
                  </h3>
                  <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
                    {movie.year} · {movie.duration}
                  </div>
                  <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                    Реж. {movie.director}
                  </div>

                  {/* Раскрывающееся описание */}
                  {isOpen && (
                    <div style={{ marginTop: 12, borderTop: "1px solid #1e1e1e", paddingTop: 12 }}>
                      {movie.cast && (
                        <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
                          <span style={{ color: "rgba(212,175,55,0.6)" }}>В ролях:</span> {movie.cast}
                        </div>
                      )}
                      {movie.description && (
                        <p className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                          {movie.description}
                        </p>
                      )}
                    </div>
                  )}

                  <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 4 }}>
                    <span className="font-body" style={{ fontSize: 11, color: isOpen ? "#D4AF37" : "rgba(255,255,255,0.25)" }}>
                      {isOpen ? "Скрыть" : "Подробнее"}
                    </span>
                    <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={12} style={{ color: isOpen ? "#D4AF37" : "rgba(255,255,255,0.25)" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── ДРУГИЕ ПОДБОРКИ ── */}
      <div style={{ borderTop: "1px solid #141414", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 20 }}>
            Другие подборки
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {collections
              .filter((c) => c.slug !== slug)
              .slice(0, 5)
              .map((c) => (
                <button
                  key={c.slug}
                  onClick={() => navigate(`/collections/${c.slug}`)}
                  className="font-body"
                  style={{
                    background: "#141414",
                    border: "1px solid #2A2A2A",
                    color: "rgba(255,255,255,0.55)",
                    borderRadius: 3,
                    padding: "8px 18px",
                    fontSize: 12,
                    cursor: "pointer",
                    transition: "border-color 0.2s, color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                >
                  {c.title}
                </button>
              ))}
            <button
              onClick={() => navigate("/collections")}
              className="font-body"
              style={{
                background: "transparent",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#D4AF37",
                borderRadius: 3,
                padding: "8px 18px",
                fontSize: 12,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              Все подборки <Icon name="ArrowRight" size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}