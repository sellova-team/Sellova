"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
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
  cardTitle: {
    color: "#0b1e3d",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 1.18,
  },
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

type TileProps = {
  href: string;
  title: string;
  iconSrc: string;
  isMobile: boolean;
};

function Tile({ href, title, iconSrc, isMobile }: TileProps) {
  // استایل مخصوص موبایل برای کارت
  const cardStyle: CSSProperties = isMobile
    ? {
        ...styles.card,
        padding: 6,
        borderRadius: 10,
      }
    : styles.card;

  const cardInnerStyle: CSSProperties = isMobile
    ? {
        ...styles.cardInner,
        gridTemplateColumns: "30px 1fr",
        gap: 6,
        minHeight: 46, // مستطیل باریک‌تر
      }
    : styles.cardInner;

  const iconStyle: CSSProperties = isMobile
    ? { ...styles.icon, width: 20, height: 20 }
    : styles.icon;

  const titleStyle: CSSProperties = isMobile
    ? { ...styles.cardTitle, fontSize: 12, lineHeight: 1.25 } // دو سایز کوچیک‌تر
    : styles.cardTitle;

  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div style={cardStyle}>
        <div style={cardInnerStyle}>
          <div style={styles.iconWrap}>
            <img src={iconSrc} alt={title} style={iconStyle} />
          </div>
          <div style={titleStyle}>{title}</div>
        </div>
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang();

  const [isMobile, setIsMobile] = useState(false);

  // تشخیص موبایل برای تغییر سایز کارت و فونت
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <main
      style={styles.page}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="dash-page"
    >
      <div style={styles.langBar} className="dash-lang-bar">
        <button
          style={styles.langButton}
          className="dash-lang-btn"
          onClick={toggleLang}
        >
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      <div style={styles.logoWrap} className="dash-logo-wrap">
        <img
          src="/logo.png"
          alt="Sellova"
          width={280}
          height={200}
          className="dash-logo"
        />
      </div>

      <div style={styles.title} className="dash-title">
        {messages.dashboard.welcome}
      </div>

      <section className="grid">
        {localizedItems.map((it) => (
          <Tile key={it.href} {...it} isMobile={isMobile} />
        ))}
      </section>

      <style jsx>{`
        /* دسکتاپ – همون استایل لپ‌تاپ */
        .dash-page {
          background: #0b1e3d;
          min-height: 100vh;
          width: 100%;
        }

        .grid {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(3, 1fr);
          width: min(920px, 92vw);
          transform: translateY(-10px);
        }

        :global(html),
        :global(body) {
          margin: 0;
          padding: 0;
          background: #0b1e3d;
        }

        /* موبایل */
        @media (max-width: 768px) {
          .dash-page {
            background: #0b1e3d !important;
            width: 100% !important;
            min-height: 100vh !important;
            padding: 12px 0 28px !important;
            margin: 0 !important;
            overflow-x: hidden !important;
          }

          /* دو ستون، با نوار سورمه‌ای دو طرف (باریک) */
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            width: 100%;
            max-width: 340px;
            padding: 0 12px;
            margin: 0 auto;
            box-sizing: border-box;
          }

          .dash-logo-wrap {
            margin-top: 16px !important;
            margin-bottom: 6px !important;
          }

          .dash-logo {
            width: 160px !important;
            height: auto !important;
          }

          .dash-title {
            font-size: 16px !important;
            margin-bottom: 10px !important;
          }

          .dash-lang-btn {
            font-size: 12px !important;
            padding: 4px 10px !important;
          }
        }
      `}</style>
    </main>
  );
}
