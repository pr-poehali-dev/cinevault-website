import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { getNewsBySlug, newsItems } from "@/data/news";

export default function NewsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const item = getNewsBySlug(slug || "");

  useEffect(() => {
    if (item) {
      document.title = `${item.title} | CineVault`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", item.excerpt);
    }
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, [item]);

  if (!item) {
    return (
      <div style={{ backgroundColor: "#0A0A0A", minHeight: "100vh", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p className="font-body" style={{ color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Новость не найдена</p>
          <button onClick={() => navigate("/news")} style={{ background: "#D4AF37", color: "#0A0A0A", border: "none", borderRadius: 3, padding: "10px 24px", cursor: "pointer", fontWeight: 600 }}>
            Все новости
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
          onClick={() => navigate("/news")}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
        >
          <Icon name="ChevronLeft" size={18} style={{ color: "#D4AF37" }} />
          <span className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Все новости
          </span>
        </button>
        <button onClick={() => navigate("/")} style={{ background: "none", border: "none", cursor: "pointer" }}>
          <span className="font-display" style={{ fontSize: 20, fontWeight: 700 }}>
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
        </button>
      </div>

      {/* ── HERO ── */}
      <div style={{ position: "relative", height: 360, overflow: "hidden" }}>
        <img
          src={item.img}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.3)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0A0A0A 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 32px", maxWidth: 860 }}>
          <span
            className="font-body"
            style={{
              display: "inline-block",
              background: "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "#D4AF37",
              fontSize: 10, padding: "4px 12px",
              borderRadius: 2, letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            {item.tag}
          </span>
          <h1 className="font-display" style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 12 }}>
            {item.title}
          </h1>
          <div className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", display: "flex", gap: 16 }}>
            <span>{item.date}</span>
            <span>{item.author}</span>
            <span>{item.readTime} чтения</span>
          </div>
        </div>
      </div>

      {/* ── ТЕКСТ ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "48px 24px 60px" }}>

        {/* Лид */}
        <p
          className="font-body"
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 40,
            paddingLeft: 20,
            borderLeft: "2px solid rgba(212,175,55,0.35)",
            fontStyle: "italic",
          }}
        >
          {item.excerpt}
        </p>

        {/* Основной текст */}
        {item.body.map((para, i) => (
          <p
            key={i}
            className="font-body"
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "rgba(255,255,255,0.58)",
              marginBottom: 22,
            }}
          >
            {para}
          </p>
        ))}

        {/* Разделитель */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "48px 0 40px" }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #1e1e1e)" }} />
          <span className="font-body" style={{ fontSize: 10, color: "#2a2a2a", letterSpacing: "0.18em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            CineVault
          </span>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #1e1e1e)" }} />
        </div>
      </div>

      {/* ── ДРУГИЕ НОВОСТИ ── */}
      <div style={{ borderTop: "1px solid #141414", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 20 }}>
            Другие новости
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {newsItems
              .filter((n) => n.slug !== slug)
              .slice(0, 4)
              .map((n) => (
                <button
                  key={n.slug}
                  onClick={() => navigate(`/news/${n.slug}`)}
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
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#D4AF37"; e.currentTarget.style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2A2A2A"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}
                >
                  <span
                    style={{
                      fontSize: 8,
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.2)",
                      color: "#D4AF37",
                      padding: "1px 6px",
                      borderRadius: 1,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    {n.tag}
                  </span>
                  {n.title.length > 40 ? n.title.slice(0, 40) + "…" : n.title}
                </button>
              ))}
            <button
              onClick={() => navigate("/news")}
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
              Все новости <Icon name="ArrowRight" size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
