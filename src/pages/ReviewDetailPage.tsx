import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { getReviewBySlug, reviews } from "@/data/reviews";

export default function ReviewDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const review = getReviewBySlug(slug || "");

  useEffect(() => {
    if (review) {
      document.title = `${review.title} — рецензия | CineVault`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", review.excerpt);
    }
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, [review]);

  if (!review) {
    return (
      <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Рецензия не найдена</p>
          <button onClick={() => navigate("/reviews")} style={{ background: "#D4AF37", color: "#0A0A0A", border: "none", borderRadius: 3, padding: "10px 24px", cursor: "pointer", fontWeight: 600 }}>
            Все рецензии
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
          onClick={() => navigate("/reviews")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <Icon name="ChevronLeft" size={18} style={{ color: "#D4AF37" }} />
          <span className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Все рецензии
          </span>
        </button>
        <button onClick={() => navigate("/")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <span className="font-display" style={{ fontSize: 20, fontWeight: 700 }}>
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
        </button>
      </div>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: 420, overflow: "hidden" }}>
        <img
          src={review.img}
          alt={review.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.3)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 36px", maxWidth: 860 }}>
          <div className="font-body" style={{ fontSize: 10, color: "#D4AF37", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
            ✦ Рецензия · {review.date}
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
            {review.tags.map((t) => (
              <span
                key={t}
                className="font-body"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", color: "#D4AF37", fontSize: 10, padding: "3px 10px", borderRadius: 2, letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: 8 }}>
            {review.title}
          </h1>
          <div className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>
            {review.originalTitle} · {review.director} · {review.year} · {review.country} · {review.duration}
          </div>
          <div style={{ display: "flex", gap: 3 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < review.rating ? "#D4AF37" : "rgba(255,255,255,0.12)", fontSize: 20 }}>★</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ТЕКСТ РЕЦЕНЗИИ ── */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px" }}>

        {/* Лид */}
        <p
          className="font-body"
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.65)",
            marginBottom: 40,
            paddingLeft: 20,
            borderLeft: "2px solid rgba(212,175,55,0.4)",
            fontStyle: "italic",
          }}
        >
          {review.excerpt}
        </p>

        {/* Основной текст */}
        {review.body.map((para, i) => (
          <p
            key={i}
            className="font-body"
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 24,
            }}
          >
            {para}
          </p>
        ))}

        {/* Вердикт */}
        <div
          style={{
            background: "#111",
            border: "1px solid #1e1e1e",
            borderLeft: "3px solid #D4AF37",
            borderRadius: 2,
            padding: "24px 28px",
            margin: "40px 0",
          }}
        >
          <div className="font-body" style={{ fontSize: 10, color: "#D4AF37", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12, opacity: 0.7 }}>
            Вердикт
          </div>
          <p className="font-body" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.65)" }}>
            {review.verdict}
          </p>
        </div>

        {/* Плюсы и минусы */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 2, padding: "20px 24px" }}>
            <div className="font-body" style={{ fontSize: 10, color: "rgba(100,200,100,0.7)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>
              Достоинства
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {review.pros.map((p, i) => (
                <li key={i} className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(100,200,100,0.6)", flexShrink: 0, marginTop: 2 }}>+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 2, padding: "20px 24px" }}>
            <div className="font-body" style={{ fontSize: 10, color: "rgba(200,100,100,0.7)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>
              Недостатки
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {review.cons.map((c, i) => (
                <li key={i} className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(200,100,100,0.6)", flexShrink: 0, marginTop: 2 }}>−</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Итоговый рейтинг */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 48, padding: "32px", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
          <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>ОЦЕНКА РЕДАКЦИИ</span>
          <div style={{ display: "flex", gap: 4 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} style={{ color: i < review.rating ? "#D4AF37" : "rgba(255,255,255,0.1)", fontSize: 24 }}>★</span>
            ))}
          </div>
          <span className="font-display" style={{ fontSize: 28, fontWeight: 700, color: "#D4AF37" }}>
            {review.rating}/5
          </span>
        </div>
      </div>

      {/* ── ДРУГИЕ РЕЦЕНЗИИ ── */}
      <div style={{ borderTop: "1px solid #141414", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 20 }}>
            Другие рецензии
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {reviews
              .filter((r) => r.slug !== slug)
              .slice(0, 4)
              .map((r) => (
                <button
                  key={r.slug}
                  onClick={() => navigate(`/reviews/${r.slug}`)}
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
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                >
                  {r.title}
                  <span style={{ fontSize: 10, color: "rgba(212,175,55,0.5)" }}>{"★".repeat(r.rating)}</span>
                </button>
              ))}
            <button
              onClick={() => navigate("/reviews")}
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
              Все рецензии <Icon name="ArrowRight" size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
