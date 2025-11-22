"use client";

import Link from "next/link";
import { CSSProperties } from "react";
import { useLang } from "../../lib/lang";

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
    width: "100%",
    background: "#0b1e3d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 16px 56px",
  },

  logoWrap: {
    marginTop: 32,
    marginBottom: 12,
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

  langBar: {
    position: "absolute",
    top: 40,
    right: 40,
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
      <div style={styles.card} className="dash-card">
        <div style={styles.cardInner} className="dash-card-inner">
          <div style={styles.iconWrap} className="dash-icon-wrap">
            <img src={iconSrc} alt={title} style={styles.icon} className="dash-icon" />
          </div>
          <div style={styles.cardTitle} className="dash-card-title">
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
    { href: "/guide-center", title: messages.dashboard.cards.sellovaGuide, iconSrc: ICONS.guideCenter },
    {
      href: "/academy-insight",
      title: messages.dashboard.cards.academyInsight,
      iconSrc: ICONS.academyInsight,
    },
  ];

  return (
    <main style={{ ...styles.page }} dir={locale === "fa" ? "rtl" : "ltr"}>
      <div style={styles.langBar} className="lang-bar">
        <button style={styles.langButton} className="lang-btn" onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      <div style={styles.logoWrap} className="logo-wrap">
        <img src="/logo.png" alt="Sellova" width={280} height={200} className="dash-logo" />
      </div>

      <div style={styles.title} className="dash-title">
        {messages.dashboard.welcome}
      </div>

      <section className="grid">
        {localizedItems.map((it) => (
          <Tile key={it.href} {...it} />
        ))}
      </section>

      <style jsx>{`
        .grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
          width: min(920px, 92vw);
        }

        /* ========= موبایل و تبلت ========= */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: min(420px, 90vw); /* حاشیه سورمه‌ای چپ/راست */
            margin-top: 8px;
            gap: 12px;
          }

          .dash-card {
            border-radius: 12px;
            padding: 10px;
          }

          .dash-card-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center;
            gap: 6px !important;
            min-height: 90px;
          }

          .dash-icon-wrap {
            margin-bottom: 2px;
          }

          .dash-icon {
            width: 30px !important;
            height: 30px !important;
          }

          .dash-card-title {
            font-size: 13px !important; /* نوشته‌ها ۲–۳ سایز کوچکتر */
            text-align: center;
            line-height: 1.25;
          }

          .dash-logo {
            width: 170px;
            height: auto;
          }

          .logo-wrap {
            margin-top: 18px !important; /* لوگو بالاتر */
            margin-bottom: 8px !important;
          }

          .dash-title {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .lang-bar {
            top: 18px !important; /* از بالا کمی فاصله */
            right: 14px !important;
          }

          .lang-btn {
            font-size: 11px !important; /* دکمه کوچک‌تر */
            padding: 3px 9px !important;
            border-width: 1px;
          }
        }

        /* موبایل خیلی کوچک */
        @media (max-width: 480px) {
          .grid {
            width: min(380px, 90vw);
            gap: 10px;
          }

          .dash-card-inner {
            min-height: 82px;
          }

          .dash-card-title {
            font-size: 12px !important;
          }

          .dash-logo {
            width: 150px;
          }
        }
      `}</style>
    </main>
  );
}
