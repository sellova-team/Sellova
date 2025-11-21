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
    background: "#0b1e3d",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "24px 16px 56px",
    position: "relative",
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
    gridTemplateColumns: "60px 1fr",
    alignItems: "center",
    gap: 10,
    minHeight: 72,
  },
  iconWrap: {
    height: "auto",
    width: "auto",
    display: "grid",
    placeItems: "center",
    overflow: "visible",
  },
  icon: { width: 32, height: 32, objectFit: "contain" },
  cardTitle: {
    color: "#0b1e3d",
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.2,
  },
  langBar: {
    position: "absolute",
    top: 20,
    right: 24,
  },
  langButton: {
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.6)",
    background: "rgba(255,255,255,.15)",
    color: "#fff",
    fontSize: 14,
    padding: "6px 14px",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
  },
};

function Tile({ href, title, iconSrc }: { href: string; title: string; iconSrc: string }) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div style={styles.card}>
        <div style={styles.cardInner}>
          <div style={styles.iconWrap}>
            <img src={iconSrc} alt={title} style={styles.icon} />
          </div>
          <div style={styles.cardTitle}>{title}</div>
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
    <main style={{ ...styles.page }} dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* دکمه زبان */}
      <div style={styles.langBar}>
        <button style={styles.langButton} onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      {/* لوگو */}
      <div style={styles.logoWrap}>
        <img src="/logo.png" alt="Sellova" width={260} height={180} />
      </div>

      {/* متن خوش‌آمد */}
      <div style={styles.title}>{messages.dashboard.welcome}</div>

      {/* گرید دکمه‌ها */}
      <section className="dash-grid">
        {localizedItems.map((it) => (
          <Tile key={it.href} {...it} />
        ))}
      </section>

      <style jsx>{`
        .dash-grid {
          display: grid;
          gap: 14px;
          width: min(920px, 94vw);
          margin-top: 8px;
          grid-template-columns: repeat(3, minmax(0, 1fr)); /* لپ‌تاپ: ۳ ستونه */
        }

        /* تبلت و موبایل افقی: دو ستونه */
        @media (max-width: 900px) {
          .dash-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* موبایل کوچک هم دو ستونه می‌ماند، فقط کمی جمع و جورتر */
        @media (max-width: 480px) {
          .dash-grid {
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}
