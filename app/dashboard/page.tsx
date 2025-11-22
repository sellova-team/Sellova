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

type ItemKey =
  | "uploadGuide"
  | "generateImage"
  | "generateVideo"
  | "createAvatar"
  | "captionsHashtags"
  | "advisoryAnalysis"
  | "upgradePlan"
  | "settings"
  | "brandOverlay"
  | "promoSlides"
  | "sellovaGuide"
  | "academyInsight";

const ITEMS: { href: string; key: ItemKey; icon: string }[] = [
  { href: "/guide", key: "uploadGuide", icon: ICONS.upload },
  { href: "/generate-image", key: "generateImage", icon: ICONS.image },
  { href: "/generate-video", key: "generateVideo", icon: ICONS.video },
  { href: "/avatar", key: "createAvatar", icon: ICONS.avatar },
  { href: "/hashtags", key: "captionsHashtags", icon: ICONS.captions },
  {
    href: "/advisory-consultation",
    key: "advisoryAnalysis",
    icon: ICONS.advisory,
  },
  { href: "/upgrade-plan", key: "upgradePlan", icon: ICONS.upgrade },
  { href: "/settings", key: "settings", icon: ICONS.settings },
  { href: "/brand-overlay", key: "brandOverlay", icon: ICONS.brandOverlay },
  { href: "/promo-slides", key: "promoSlides", icon: ICONS.slides },
  { href: "/guide-center", key: "sellovaGuide", icon: ICONS.guideCenter },
  {
    href: "/academy-insight",
    key: "academyInsight",
    icon: ICONS.academyInsight,
  },
];

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang();
  const t = messages.dashboard;

  const toggleLang = () => setLocale(locale === "en" ? "fa" : "en");

  return (
    <main
      className="dash-page"
      dir={locale === "fa" ? "rtl" : "ltr"}
    >
      {/* دکمه زبان */}
      <button className="dash-lang" onClick={toggleLang}>
        {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
      </button>

      {/* لوگو و تیتر */}
      <header className="dash-header">
        <img src="/logo.png" alt="Sellova" className="dash-logo" />
        <h1 className="dash-title">{t.welcome}</h1>
      </header>

      {/* گرید کارت‌ها */}
      <section className="dash-grid">
        {ITEMS.map((item) => {
          const label =
            (messages.dashboard.cards as any)[item.key] ?? item.key;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="dash-link"
            >
              <div className="dash-tile">
                <div className="dash-icon-wrap">
                  <img
                    src={item.icon}
                    alt={String(label)}
                    className="dash-icon"
                  />
                </div>
                <div className="dash-label">{label}</div>
              </div>
            </Link>
          );
        })}
      </section>

      <style jsx>{`
        .dash-page {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 16px 56px;
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Arial, sans-serif;
          position: relative;
        }

        .dash-lang {
          position: absolute;
          top: 18px;
          right: 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
          font-size: 16px;
          padding: 6px 14px;
          cursor: pointer;
          backdrop-filter: blur(4px);
        }

        .dash-header {
          margin-top: 32px;
          text-align: center;
        }

        .dash-logo {
          width: 250px;
          height: auto;
        }

        .dash-title {
          margin-top: 16px;
          font-size: 26px;
          font-weight: 800;
        }

        .dash-grid {
          margin-top: 28px;
          width: min(920px, 92vw);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .dash-link {
          text-decoration: none;
        }

        .dash-tile {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.85);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.28);
          padding: 10px 8px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 110px;
        }

        .dash-icon-wrap {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dash-icon {
          width: 42px;
          height: 42px;
          object-fit: contain;
        }

        .dash-label {
          font-size: 16px;
          font-weight: 700;
          color: #0b1e3d;
          text-align: center;
          line-height: 1.3;
        }

        /* تبلت و موبایل: گرید دو ستونه، کارت‌ها کمی جمع‌وجورتر */
        @media (max-width: 900px) {
          .dash-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            width: min(640px, 94vw);
          }
        }

        @media (max-width: 480px) {
          .dash-page {
            padding-top: 24px;
          }

          .dash-logo {
            width: 190px;
          }

          .dash-title {
            font-size: 20px;
          }

          .dash-grid {
            margin-top: 22px;
            grid-template-columns: repeat(2, minmax(140px, 1fr));
            gap: 10px;
          }

          .dash-tile {
            min-height: 96px;
            padding: 8px 6px 10px;
            border-radius: 16px;
          }

          .dash-icon-wrap {
            width: 38px;
            height: 38px;
          }

          .dash-icon {
            width: 36px;
            height: 36px;
          }

          .dash-label {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
