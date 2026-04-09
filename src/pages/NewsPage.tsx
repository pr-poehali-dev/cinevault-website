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

  const [featured, ...rest] = filtered;

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

        {/* ── FEATURED ── */}
        {featured && (
          <div
            onClick={() => navigate(`/news/${featured.slug}`)}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              background: "#111",
              border: "1px solid #1e1e1e",
              borderRadius: 3,
              overflow: "hidden",
              cursor: "pointer",
              marginBottom: 48,
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(212,175,55,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#1e1e1e")}
          >
            <div style={{ position: "relative", minHeight: 320, overflow: "hidden" }}>
              <img
                src={featured.img}
                alt={featured.title}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6)" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, #111 100%)" }} />
              <span
                className="font-body"
                style={{
                  position: "absolute", top: 16, left: 16,
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.35)",
                  color: "#D4AF37",
                  fontSize: 10, padding: "3px 10px",
                  borderRadius: 2, letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {featured.tag}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "36px 40px" }}>
              <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", marginBottom: 16 }}>
                {featured.date} · {featured.readTime} чтения
              </div>
              <h2 className="font-display" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 700, lineHeight: 1.25, marginBottom: 14 }}>
                {featured.title}
              </h2>
              <p className="font-body" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 24 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#D4AF37" }}>
                <span className="font-body" style={{ fontSize: 13, letterSpacing: "0.06em" }}>Читать</span>
                <Icon name="ArrowRight" size={14} style={{ color: "#D4AF37" }} />
              </div>
            </div>
          </div>
        )}

        {/* ── ОСТАЛЬНЫЕ НОВОСТИ — горизонтальные карточки ── */}
        {rest.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {rest.map((item, i) => (
              <div
                key={item.id}
                onClick={() => navigate(`/news/${item.slug}`)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "200px 1fr auto",
                  alignItems: "center",
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
                {/* Картинка */}
                <div style={{ position: "relative", width: 180, height: 100, overflow: "hidden", borderRadius: 2, flexShrink: 0 }}>
                  <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.75)" }} />
                  <span
                    className="font-body"
                    style={{
                      position: "absolute", top: 6, left: 6,
                      background: "rgba(10,10,10,0.8)",
                      border: "1px solid rgba(212,175,55,0.25)",
                      color: "#D4AF37",
                      fontSize: 8, padding: "2px 7px",
                      borderRadius: 1, letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Текст */}
                <div style={{ padding: "0 28px" }}>
                  <div className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em", marginBottom: 8 }}>
                    {item.date} · {item.readTime} чтения
                  </div>
                  <h3 className="font-display" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", fontWeight: 600, lineHeight: 1.3, marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.65, maxWidth: 520 }}>
                    {item.excerpt}
                  </p>
                </div>

                {/* Номер + стрелка */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, minWidth: 60, paddingLeft: 16 }}>
                  <Icon name="ArrowRight" size={14} style={{ color: "rgba(212,175,55,0.4)" }} />
                  <span className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.12)" }}>
                    #{String(i + 2).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

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
