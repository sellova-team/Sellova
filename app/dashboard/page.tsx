"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { useLang } from "../../lib/lang"; // ✅ سیستم زبان خودت

const ICONS = {
  upload: "/assets/icons/upload.png",
  image: "/assets/icons/image.png",
  video: "/assets/icons/video.png",
  avatar: "/assets/icons/man%20avatar.png",
  captions: "/assets/icons/caption.png",
  advisory: "/assets/icons/consulation.png",
  upgrade: "/assets/icons/upgrade.png",
  settings: "/assets/icons/seting.png",
  brandOverlay: "/assets/icons/brand-overlay.png",
  slides: "/assets/icons/promo-slides.png",
  guideCenter: "/assets/icons/guide-center.png",
  academyInsight: "/assets/icons/academy-insight.png",
};

const styles: { [k: string]: CSSProperties } = {
  page: {
    minHeight: "100vh",
    background: "#0b1e3d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 16px 56px",
    width: "100%", // ⬅ بک‌گراند سورمه‌ای کل عرض را می‌گیرد
  },

  logoWrap: {
    marginTop: 28,
    marginBottom: 8,
    display: "flex",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: 800,
    marginBottom: 22,
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gap: 16,
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "min(920px, 92vw)",
    transform: "translateY(-6px)",
  },

  card: {
    background: "#fff",
    borderRadius: 14,
    padding: 12,
    boxShadow: "0 6px 14px rgba(0,0,0,.16)",
    border: "1px solid rgba(0,0,0,.9)",
    transition: "transform .08s ease",
  },

  cardInner: {
    display: "grid",
    gridTemplateColumns: "80px 1fr",
    alignItems: "center",
    gap: 14,
    minHeight: 80,
  },

  iconWrap: {
    height: "auto",
    width: "auto",
    display: "grid",
    placeItems: "center",
    overflow: "visible",
  },

  icon: { width: 42, height: 42, objectFit: "contain" },

  cardTitle: {
    color: "#0b1e3d",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1.18,
  },

  langBar: {
    position: "absolute",
    top: 18,
    right: 12,
  },

  langButton: {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.6)",
    background: "rgba(255,255,255,.15)",
    color: "#fff",
    fontSize: 14,
    padding: "3px 10px",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
  },
};

function Tile({
  href,
  title,
  iconSrc,
}: {
  href: string;
  title: string;
  iconSrc: string;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div className="dash-card" style={styles.card}>
        <div className="dash-card-inner" style={styles.cardInner}>
          <div className="dash-icon-wrap" style={styles.iconWrap}>
            <img
              src={iconSrc}
              alt={title}
              className="dash-icon"
              style={styles.icon}
            />
          </div>
          <div className="dash-card-title" style={styles.cardTitle}>
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang();

  const toggleLang = () => {
    setLocale(locale === "en" ? "fa" : "en");
  };

  const localizedItems = [
    { href: "/guide", title: messages.dashboard.cards.uploadGuide, iconSrc: ICONS.upload },
    { href: "/generate-image", title: messages.dashboard.cards.generateImage, iconSrc: ICONS.image },
    { href: "/generate-video", title: messages.dashboard.cards.generateVideo, iconSrc: ICONS.video },
    { href: "/avatar", title: messages.dashboard.cards.createAvatar, iconSrc: ICONS.avatar },
    { href: "/hashtags", title: messages.dashboard.cards.captionsHashtags, iconSrc: ICONS.captions },
    { href: "/advisory-consultation", title: messages.dashboard.cards.advisoryAnalysis, iconSrc: ICONS.advisory },
    { href: "/upgrade-plan", title: messages.dashboard.cards.upgradePlan, iconSrc: ICONS.upgrade },
    { href: "/settings", title: messages.dashboard.cards.settings, iconSrc: ICONS.settings },
    { href: "/brand-overlay", title: messages.dashboard.cards.brandOverlay, iconSrc: ICONS.brandOverlay },
    { href: "/promo-slides", title: messages.dashboard.cards.promoSlides, iconSrc: ICONS.slides },
    { href: "/guide-center", title: messages.dashboard.cards.sellovaGuide, iconSrc: ICONS.guideCenter },
    { href: "/academy-insight", title: messages.dashboard.cards.academyInsight, iconSrc: ICONS.academyInsight },
  ];

  return (
    <main style={{ ...styles.page }} dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* زبان */}
      <div style={styles.langBar}>
        <button
          className="dash-lang"
          style={styles.langButton}
          onClick={toggleLang}
        >
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      {/* لوگو */}
      <div style={styles.logoWrap} className="dash-logo-wrap">
        <img src="/logo.png" alt="Sellova" width={260} height={180} />
      </div>

      {/* متن خوش‌آمد */}
      <div style={styles.title} className="dash-title">
        {messages.dashboard.welcome}
      </div>

      {/* گرید کارت‌ها */}
      <section className="dash-grid">
        {localizedItems.map((it) => (
          <Tile key={it.href} {...it} />
        ))}
      </section>

      <style jsx>{`
        /* ===== دسکتاپ (استایل اصلی تو) ===== */
        .dash-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
          width: min(920px, 92vw);
        }

        /* ===== موبایل / تبلت ===== */
        @media (max-width: 768px) {
          main {
            padding: 18px 0 32px;
          }

          .dash-logo-wrap img {
            width: 200px !important;
            height: auto !important;
          }

          .dash-title {
            font-size: 18px !important;
            margin-bottom: 14px !important;
          }

          .dash-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            width: 100%;
            max-width: 360px;
            margin: 0 auto 16px;
            padding: 0 10px;
          }

          .dash-card {
            padding: 8px !important;
          }

          /* آیکون بالا، متن زیرش، وسط‌چین */
          .dash-card-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            min-height: 92px !important;
          }

          .dash-icon {
            width: 28px !important;
            height: 28px !important;
          }

          .dash-card-title {
            font-size: 13px !important; /* یک سایز ریزتر از قبل */
            text-align: center !important;
            line-height: 1.25 !important;
          }
        }
      `}</style>
    </main>
  );
}
