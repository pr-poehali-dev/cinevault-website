import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Icon from "@/components/ui/icon";
import { collections, weeklyCollection } from "@/data/collections";

export default function CollectionsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Все подборки фильмов — экспертные коллекции | CineVault";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Тематические подборки фильмов: нуар, корейские триллеры, авторское кино, классика 90-х. Только проверенные фильмы от редакции CineVault.");
    return () => {
      document.title = "CineVault — Лучшие подборки фильмов, рецензии и новинки кино 2026 | Что посмотреть";
    };
  }, []);

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
          <span
            className="font-display"
            style={{ fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", color: "#fff" }}
          >
            Cine<span style={{ color: "#D4AF37" }}>Vault</span>
          </span>
        </button>
        <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Подборки
        </span>
      </div>

      {/* ── PAGE TITLE ── */}
      <div style={{ padding: "52px 24px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="font-body"
          style={{ color: "#D4AF37", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 12 }}
        >
          ✦ Тематические коллекции
        </div>
        <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 14 }}>
          Все подборки
        </h1>
        <p className="font-body" style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 520 }}>
          Редакция CineVault собирает фильмы вручную. Никакого алгоритма — только кино, которое действительно стоит смотреть.
        </p>
      </div>

      {/* ── ПОДБОРКА НЕДЕЛИ (горизонтальная, большая) ── */}
      <div style={{ padding: "0 24px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="font-body"
          style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", marginBottom: 16 }}
        >
          Подборка недели
        </div>
        <div
          onClick={() => navigate(`/collections/${weeklyCollection.slug}`)}
          style={{
            background: "#141414",
            border: "1px solid #2A2A2A",
            borderRadius: 3,
            overflow: "hidden",
            cursor: "pointer",
            display: "grid",
            gridTemplateColumns: "360px 1fr",
            transition: "border-color 0.2s",
            marginBottom: 40,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#D4AF37")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2A2A2A")}
        >
          <div style={{ position: "relative", height: 280 }}>
            <img
              src={weeklyCollection.img}
              alt={weeklyCollection.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 55%, #141414 100%)" }} />
            <div
              className="font-body"
              style={{
                position: "absolute", top: 16, left: 16,
                background: "#D4AF37", color: "#0A0A0A",
                padding: "4px 14px", fontSize: 10,
                letterSpacing: "0.14em", textTransform: "uppercase",
                borderRadius: 2, fontWeight: 700,
              }}
            >
              Подборка недели
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "32px 40px" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {weeklyCollection.tags.map((t) => (
                <span
                  key={t}
                  className="tag-badge font-body"
                  style={{
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    color: "#D4AF37",
                    padding: "3px 10px",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderRadius: 2,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="font-display" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 12 }}>
              {weeklyCollection.title}
            </h2>
            <p className="font-body" style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.75, marginBottom: 24, maxWidth: 420 }}>
              {weeklyCollection.desc}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <button
                className="font-body"
                style={{
                  background: "#D4AF37", color: "#0A0A0A",
                  border: "none", borderRadius: 3,
                  padding: "10px 26px", fontSize: 12,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  fontWeight: 600, cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#E8C84A")}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#D4AF37")}
              >
                Открыть подборку
              </button>
              <span className="font-body" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
                {weeklyCollection.count} фильмов
              </span>
            </div>
          </div>
        </div>

        {/* ── РАЗДЕЛИТЕЛЬ ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div className="font-body" style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", whiteSpace: "nowrap" }}>
            Все коллекции
          </div>
          <div style={{ flex: 1, height: 1, background: "#1a1a1a" }} />
          <span className="font-body" style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>
            {collections.length} подборок
          </span>
        </div>

        {/* ── ГОРИЗОНТАЛЬНЫЕ КАРТОЧКИ ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {collections.map((col, i) => (
            <div
              key={col.id}
              onClick={() => navigate(`/collections/${col.slug}`)}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr auto",
                alignItems: "center",
                gap: 0,
                background: "transparent",
                border: "none",
                borderBottom: "1px solid #141414",
                padding: "20px 0",
                cursor: "pointer",
                transition: "background 0.15s",
                borderRadius: 2,
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
              {/* Изображение */}
              <div style={{ position: "relative", height: 100, width: 180, overflow: "hidden", borderRadius: 2, flexShrink: 0 }}>
                <img
                  src={col.img}
                  alt={col.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {col.isWeekly && (
                  <div
                    className="font-body"
                    style={{
                      position: "absolute", bottom: 6, left: 6,
                      background: "#D4AF37", color: "#0A0A0A",
                      fontSize: 8, padding: "2px 7px",
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      borderRadius: 1, fontWeight: 700,
                    }}
                  >
                    Недели
                  </div>
                )}
              </div>

              {/* Контент */}
              <div style={{ padding: "0 28px" }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                  {col.tags.map((t) => (
                    <span
                      key={t}
                      className="font-body"
                      style={{ fontSize: 9, color: "rgba(212,175,55,0.6)", letterSpacing: "0.12em", textTransform: "uppercase" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-display" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 600, lineHeight: 1.25, marginBottom: 8 }}>
                  {col.title}
                </h3>
                <p className="font-body" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.65, maxWidth: 520 }}>
                  {col.desc}
                </p>
              </div>

              {/* Правая часть */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, minWidth: 100, paddingLeft: 16 }}>
                <span className="font-body" style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}>
                  {col.count} фильмов
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="font-body" style={{ fontSize: 12, color: "#D4AF37", letterSpacing: "0.06em" }}>
                    Смотреть
                  </span>
                  <Icon name="ArrowRight" size={13} style={{ color: "#D4AF37" }} />
                </div>
                <span className="font-body" style={{ fontSize: 10, color: "rgba(255,255,255,0.15)" }}>
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{ padding: "48px 24px", borderTop: "1px solid #141414", marginTop: 40 }}>
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
