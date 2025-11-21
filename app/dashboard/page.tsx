"use client";

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

type TileItem = {
  href: string;
  title: string;
  iconSrc: string;
};

function Tile({ href, title, iconSrc }: TileItem) {
  return (
    <Link href={href} className="dash-card">
      <div className="dash-card-inner">
        <div className="dash-icon-wrap">
          <img src={iconSrc} alt={title} className="dash-icon" />
        </div>
        <div className="dash-card-title">{title}</div>
      </div>
    </Link>
  );
}

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang();
  const t = messages.dashboard;

  const items: TileItem[] = [
    { href: "/guide", title: t.cards.uploadGuide, iconSrc: ICONS.upload },
    { href: "/generate-image", title: t.cards.generateImage, iconSrc: ICONS.image },
    { href: "/generate-video", title: t.cards.generateVideo, iconSrc: ICONS.video },
    { href: "/avatar", title: t.cards.createAvatar, iconSrc: ICONS.avatar },
    { href: "/hashtags", title: t.cards.captionsHashtags, iconSrc: ICONS.captions },
    {
      href: "/advisory-consultation",
      title: t.cards.advisoryAnalysis,
      iconSrc: ICONS.advisory,
    },
    { href: "/upgrade-plan", title: t.cards.upgradePlan, iconSrc: ICONS.upgrade },
    { href: "/settings", title: t.cards.settings, iconSrc: ICONS.settings },
    { href: "/brand-overlay", title: t.cards.brandOverlay, iconSrc: ICONS.brandOverlay },
    { href: "/promo-slides", title: t.cards.promoSlides, iconSrc: ICONS.slides },
    { href: "/guide-center", title: t.cards.sellovaGuide, iconSrc: ICONS.guideCenter },
    { href: "/academy-insight", title: t.cards.academyInsight, iconSrc: ICONS.academyInsight },
  ];

  const toggleLang = () => setLocale(locale === "en" ? "fa" : "en");

  return (
    <main className="dash-page" dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* دکمه زبان */}
      <div className="dash-langBar">
        <button className="dash-langBtn" onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      {/* لوگو */}
      <div className="dash-logoWrap">
        <img src="/logo.png" alt="Sellova" className="dash-logo" />
      </div>

      {/* متن خوشامدگویی */}
      <h1 className="dash-title">{t.welcome}</h1>

      {/* گرید ۳ ستونه */}
      <section className="dash-grid">
        {items.map((it) => (
          <Tile key={it.href} {...it} />
        ))}
      </section>

      <style jsx>{`
        .dash-page {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px 56px;
          position: relative;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        }

        .dash-logoWrap {
          margin-top: 32px;
          margin-bottom: 8px;
        }

        .dash-logo {
          width: 260px;
          height: auto;
          display: block;
        }

        .dash-title {
          color: #ffffff;
          font-size: 24px;
          font-weight: 800;
          margin: 12px 0 24px;
          text-align: center;
        }

        .dash-grid {
          width: min(920px, 92vw);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .dash-card {
          text-decoration: none;
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.85);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
          padding: 10px;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }

        .dash-card-inner {
          display: grid;
          grid-template-rows: auto auto;
          justify-items: center;
          align-items: center;
          gap: 6px;
          min-height: 110px;
        }

        .dash-icon-wrap {
          display: grid;
          place-items: center;
        }

        .dash-icon {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }

        .dash-card-title {
          color: #0b1e3d;
          font-weight: 700;
          font-size: 16px;
          text-align: center;
          line-height: 1.25;
        }

        .dash-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.25);
        }

        .dash-langBar {
          position: absolute;
          top: 16px;
          right: 16px;
        }

        .dash-langBtn {
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 16px;
          padding: 6px 14px;
          cursor: pointer;
          backdrop-filter: blur(4px);
        }

        /* ===== موبایل: همچنان ۳ ستون، فقط همه چیز ریزتر و جمع‌وجور ===== */
        @media (max-width: 768px) {
          .dash-logo {
            width: 210px;
          }

          .dash-title {
            font-size: 20px;
            margin-bottom: 18px;
          }

          .dash-grid {
            gap: 10px;
          }

          .dash-card-inner {
            min-height: 96px;
            gap: 4px;
          }

          .dash-icon {
            width: 32px;
            height: 32px;
          }

          .dash-card-title {
            font-size: 13px;
          }

          .dash-langBtn {
            font-size: 14px;
            padding: 5px 12px;
          }
        }

        /* خیلی خیلی کوچک (گوشی‌های قدیمی) → اگر لازم شد دو ستونه می‌شود */
        @media (max-width: 380px) {
          .dash-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </main>
  );
}
