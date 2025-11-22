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

type TileDef = {
  href: string;
  key: string;
  iconSrc: string;
};

const TILES: TileDef[] = [
  { href: "/guide", key: "uploadGuide", iconSrc: ICONS.upload },
  { href: "/generate-image", key: "generateImage", iconSrc: ICONS.image },
  { href: "/generate-video", key: "generateVideo", iconSrc: ICONS.video },
  { href: "/avatar", key: "createAvatar", iconSrc: ICONS.avatar },
  { href: "/hashtags", key: "captionsHashtags", iconSrc: ICONS.captions },
  {
    href: "/advisory-consultation",
    key: "advisoryAnalysis",
    iconSrc: ICONS.advisory,
  },
  { href: "/upgrade-plan", key: "upgradePlan", iconSrc: ICONS.upgrade },
  { href: "/settings", key: "settings", iconSrc: ICONS.settings },
  {
    href: "/brand-overlay",
    key: "brandOverlay",
    iconSrc: ICONS.brandOverlay,
  },
  { href: "/promo-slides", key: "promoSlides", iconSrc: ICONS.slides },
  {
    href: "/guide-center",
    key: "sellovaGuide",
    iconSrc: ICONS.guideCenter,
  },
  {
    href: "/academy-insight",
    key: "academyInsight",
    iconSrc: ICONS.academyInsight,
  },
];

function DashboardTile({
  href,
  iconSrc,
  title,
}: {
  href: string;
  iconSrc: string;
  title: string;
}) {
  return (
    <Link href={href} className="dash-link">
      <div className="dash-card">
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

  const toggleLang = () => setLocale(locale === "en" ? "fa" : "en");

  return (
    <main className="dash-page" dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* دکمه زبان */}
      <div className="dash-lang-bar">
        <button className="dash-lang-btn" onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      {/* لوگو */}
      <header className="dash-header">
        <img src="/logo.png" alt="Sellova" className="dash-logo" />
      </header>

      {/* عنوان خوش آمد */}
      <h1 className="dash-title">{t.welcome}</h1>

      {/* گرید کارت‌ها */}
      <section className="dash-grid">
        {TILES.map((tile) => (
          <DashboardTile
            key={tile.href}
            href={tile.href}
            iconSrc={tile.iconSrc}
            title={t.cards[tile.key as keyof typeof t.cards]}
          />
        ))}
      </section>

      <style jsx>{`
        .dash-page {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 12px 56px;
          font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial,
            sans-serif;
          position: relative;
        }

        .dash-lang-bar {
          position: absolute;
          top: 24px;
          right: 16px;
        }

        .dash-lang-btn {
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          font-size: 14px;
          padding: 6px 14px;
          cursor: pointer;
          backdrop-filter: blur(4px);
        }

        .dash-header {
          margin-top: 40px;
          margin-bottom: 10px;
        }

        .dash-logo {
          width: 240px;
          max-width: 70vw;
          height: auto;
        }

        .dash-title {
          margin: 0 0 22px;
          color: #fff;
          font-size: 24px;
          font-weight: 800;
          text-align: center;
        }

        .dash-grid {
          width: min(960px, 94vw);
          display: grid;
          grid-template-columns: repeat(3, minmax(180px, 1fr));
          gap: 18px;
        }

        .dash-link {
          text-decoration: none;
        }

        .dash-card {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.85);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
          padding: 14px 10px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .dash-icon-wrap {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dash-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .dash-card-title {
          font-size: 14px;
          font-weight: 700;
          color: #0b1e3d;
          text-align: center;
          line-height: 1.3;
          word-break: break-word;
        }

        /* تبلت و موبایل: دو ستونه، فونت و آیکون ریزتر */
        @media (max-width: 900px) {
          .dash-title {
            font-size: 20px;
          }

          .dash-grid {
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 14px;
          }

          .dash-card {
            padding: 12px 8px 10px;
            border-radius: 16px;
          }

          .dash-icon-wrap {
            width: 46px;
            height: 46px;
          }

          .dash-icon {
            width: 34px;
            height: 34px;
          }

          .dash-card-title {
            font-size: 13px;
          }
        }

        /* موبایل خیلی کوچک */
        @media (max-width: 480px) {
          .dash-page {
            padding: 20px 8px 40px;
          }

          .dash-lang-bar {
            top: 16px;
            right: 10px;
          }

          .dash-logo {
            width: 200px;
          }

          .dash-title {
            font-size: 18px;
          }

          .dash-grid {
            grid-template-columns: repeat(2, minmax(120px, 1fr));
            gap: 10px;
          }

          .dash-card {
            padding: 10px 6px 8px;
          }

          .dash-icon-wrap {
            width: 40px;
            height: 40px;
          }

          .dash-icon {
            width: 30px;
            height: 30px;
          }

          .dash-card-title {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
