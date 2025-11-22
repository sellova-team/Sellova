"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { useLang } from "../../lib/lang"; // ✅ استفاده از سیستم زبان

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
  },

  logoWrap: {
    marginTop: 36,
    marginBottom: 10,
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
    transform: "translateY(-10px)",
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

  cardTitle: { color: "#0b1e3d", fontWeight: 700, fontSize: 20, lineHeight: 1.18 },

  // ✅ استایل دکمه زبان
  langBar: {
    position: "absolute",
    top: 50,
    right: 60,
  },
  langButton: {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.6)",
    background: "rgba(255,255,255,.15)",
    color: "#fff",
    fontSize: 18,
    padding: "6px 16px",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
  },
};

function Tile({ href, title, iconSrc }: { href: string; title: string; iconSrc: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div className="dash-card" style={styles.card}>
        <div className="dash-cardInner" style={styles.cardInner}>
          <div className="dash-iconWrap" style={styles.iconWrap}>
            <img className="dash-icon" src={iconSrc} alt={title} style={styles.icon} />
          </div>
          <div className="dash-cardTitle" style={styles.cardTitle}>
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang(); // ✅ گرفتن زبان و ترجمه‌ها از Context

  const toggleLang = () => {
    setLocale(locale === "en" ? "fa" : "en");
  };

  // ✅ درست کردن آیتم‌ها بر اساس زبان انتخابی
  const localizedItems = [
    { href: "/guide", title: messages.dashboard.cards.uploadGuide, iconSrc: ICONS.upload },
    { href: "/generate-image", title: messages.dashboard.cards.generateImage, iconSrc: ICONS.image },
    { href: "/generate-video", title: messages.dashboard.cards.generateVideo, iconSrc: ICONS.video },
    { href: "/avatar", title: messages.dashboard.cards.createAvatar, iconSrc: ICONS.avatar },
    { href: "/hashtags", title: messages.dashboard.cards.captionsHashtags, iconSrc: ICONS.captions },
    {
      href: "/advisory-consultation",
      title: messages.dashboard.cards.advisoryAnalysis,
      iconSrc: ICONS.advisory,
    },
    { href: "/upgrade-plan", title: messages.dashboard.cards.upgradePlan, iconSrc: ICONS.upgrade },
    { href: "/settings", title: messages.dashboard.cards.settings, iconSrc: ICONS.settings },
    {
      href: "/brand-overlay",
      title: messages.dashboard.cards.brandOverlay,
      iconSrc: ICONS.brandOverlay,
    },
    { href: "/promo-slides", title: messages.dashboard.cards.promoSlides, iconSrc: ICONS.slides },
    {
      href: "/guide-center",
      title: messages.dashboard.cards.sellovaGuide,
      iconSrc: ICONS.guideCenter,
    },
    {
      href: "/academy-insight",
      title: messages.dashboard.cards.academyInsight,
      iconSrc: ICONS.academyInsight,
    },
  ];

  return (
    <main
      className="dash-main"
      style={{ ...styles.page }}
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      {/* ✅ دکمه تغییر زبان بالا */}
      <div className="dash-langBar" style={styles.langBar}>
        <button className="dash-langButton" style={styles.langButton} onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      <div style={styles.logoWrap}>
        <img src="/logo.png" alt="Sellova" width={280} height={200} className="dash-logo" />
      </div>

      {/* ✅ متن خوش‌آمدگویی از ترجمه‌ها */}
      <div className="dash-title" style={styles.title}>
        {messages.dashboard.welcome}
      </div>

      {/* ✅ شبکه کارت‌ها با ترجمه داینامیک */}
      <section className="dash-grid">
        {localizedItems.map((it) => (
          <Tile key={it.href} {...it} />
        ))}
      </section>

      <style jsx>{`
        /* دسکتاپ: همون استایل قبلی */
        .dash-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
          width: min(920px, 92vw);
        }

        .dash-title {
          text-align: center;
        }

        /* ===== موبایل و تبلت کوچک ===== */
        @media (max-width: 768px) {
          .dash-main {
            padding: 16px 10px 32px;
          }

          .dash-logo {
            width: 170px;
          }

          .dash-langBar {
            top: 16px;
            right: 16px;
          }

          .dash-langButton {
            font-size: 14px;
            padding: 4px 10px;
          }

          .dash-title {
            font-size: 18px;
            margin-bottom: 16px;
          }

          /* دو ستونه و پر کردن عرض صفحه */
          .dash-grid {
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 12px;
            width: 100%;
          }

          /* آیکون بالا، متن زیرش، همه وسط‌چین */
          .dash-cardInner {
            grid-template-columns: 1fr !important;
            row-gap: 6px;
            justify-items: center;
            text-align: center;
            min-height: 90px;
          }

          .dash-icon {
            width: 32px;
            height: 32px;
          }

          .dash-cardTitle {
            font-size: 15px !important;
            line-height: 1.3;
          }
        }
      `}</style>
    </main>
  );
}
