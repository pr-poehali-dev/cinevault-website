import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { newsItems, newsTags } from "@/data/news";

export default function NewsPage() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("Все");

  useEffect(() => {
    document.title = "Новости кино 2026 — фестивали, релизы, тренды | CineVault";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Актуальные новости мирового кино: Канны, Оскар, новые трейлеры, тренды стриминга. Редакция CineVault следит за индустрией каждый день.");
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, []);

  const filtered = activeTag === "Все"
    ? newsItems
    : newsItems.filter((n) => n.tag === activeTag);



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
          Новости
        </span>
      </div>

      {/* ── PAGE TITLE ── */}
      <div style={{ padding: "48px 24px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div className="font-body" style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 12 }}>
          ✦ Последние события
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 14 }}>
          Новости кино
        </h1>
        <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 480 }}>
          Фестивали, премьеры, тренды стриминга и всё, что происходит в мировом кино прямо сейчас.
        </p>
      </div>

      {/* ── ТЕГИ-ФИЛЬТР ── */}
      <div style={{ padding: "0 24px 32px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {newsTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className="font-body"
              style={{
                background: activeTag === tag ? "#D4AF37" : "#141414",
                color: activeTag === tag ? "#0A0A0A" : "rgba(255,255,255,0.45)",
                border: `1px solid ${activeTag === tag ? "#D4AF37" : "#2A2A2A"}`,
                borderRadius: 3,
                padding: "7px 16px",
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontWeight: activeTag === tag ? 700 : 400,
                transition: "all 0.15s",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: "0 24px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/news/${item.slug}`)}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(212,175,55,0.35)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              {/* Картинка */}
              <div style={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #111 0%, transparent 60%)" }} />
                <span
                  className="font-body"
                  style={{
                    position: "absolute", top: 10, left: 10,
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "#D4AF37",
                    fontSize: 9, padding: "3px 10px",
                    borderRadius: 2, letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Контент */}
              <div style={{ padding: "16px 18px 20px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", marginBottom: 10 }}>
                  {item.date} · {item.readTime} чтения
                </div>
                <h3 className="font-display" style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.3, marginBottom: 10, flex: 1 }}>
                  {item.title}
                </h3>
                <p className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, marginBottom: 14 }}>
                  {item.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span className="font-body" style={{ fontSize: 12, color: "#D4AF37" }}>Читать</span>
                  <Icon name="ArrowRight" size={12} style={{ color: "#D4AF37" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.25)", fontSize: 14 }}>
              Новостей в этой категории пока нет
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