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
  key: keyof typeof ICONS;
  title: string;
};

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang();

  const items: TileItem[] = [
    { href: "/guide", key: "upload", title: messages.dashboard.cards.uploadGuide },
    { href: "/generate-image", key: "image", title: messages.dashboard.cards.generateImage },
    { href: "/generate-video", key: "video", title: messages.dashboard.cards.generateVideo },
    { href: "/avatar", key: "avatar", title: messages.dashboard.cards.createAvatar },
    { href: "/hashtags", key: "captions", title: messages.dashboard.cards.captionsHashtags },
    {
      href: "/advisory-consultation",
      key: "advisory",
      title: messages.dashboard.cards.advisoryAnalysis,
    },
    { href: "/upgrade-plan", key: "upgrade", title: messages.dashboard.cards.upgradePlan },
    { href: "/settings", key: "settings", title: messages.dashboard.cards.settings },
    {
      href: "/brand-overlay",
      key: "brandOverlay",
      title: messages.dashboard.cards.brandOverlay,
    },
    { href: "/promo-slides", key: "slides", title: messages.dashboard.cards.promoSlides },
    {
      href: "/guide-center",
      key: "guideCenter",
      title: messages.dashboard.cards.sellovaGuide,
    },
    {
      href: "/academy-insight",
      key: "academyInsight",
      title: messages.dashboard.cards.academyInsight,
    },
  ];

  const toggleLang = () => {
    setLocale(locale === "en" ? "fa" : "en");
  };

  return (
    <main className="dash-page" dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* زبان */}
      <div className="dash-lang">
        <button className="dash-lang-btn" onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      {/* لوگو */}
      <div className="dash-logo-wrap">
        <img src="/logo.png" alt="Sellova" className="dash-logo" />
      </div>

      {/* تیتر */}
      <h1 className="dash-title">{messages.dashboard.welcome}</h1>

      {/* گرید آیکون + متن (۳ ستونه در همه‌جا) */}
      <section className="dash-grid">
        {items.map((item) => (
          <Link href={item.href} key={item.href} className="dash-link">
            <div className="dash-tile">
              <img
                src={ICONS[item.key]}
                alt={item.title}
                className="dash-icon"
              />
              <span className="dash-label">{item.title}</span>
            </div>
          </Link>
        ))}
      </section>

      <style jsx>{`
        .dash-page {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 12px 40px;
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .dash-lang {
          position: absolute;
          top: 24px;
          right: 24px;
        }

        .dash-lang-btn {
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          padding: 6px 16px;
          font-size: 14px;
          cursor: pointer;
          backdrop-filter: blur(4px);
        }

        .dash-logo-wrap {
          margin-top: 40px;
          margin-bottom: 8px;
        }

        .dash-logo {
          width: 220px;
          height: auto;
        }

        .dash-title {
          margin: 0 0 18px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
        }

        /* گرید ۳ ستونه، هم برای لپ‌تاپ هم موبایل */
        .dash-grid {
          width: min(420px, 100%);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .dash-link {
          text-decoration: none;
        }

        .dash-tile {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.9);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
          padding: 10px 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-height: 90px;
          text-align: center;
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }

        .dash-tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
        }

        .dash-icon {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        .dash-label {
          font-size: 11px;
          font-weight: 600;
          color: #0b1e3d;
          line-height: 1.3;
        }

        /* لپ‌تاپ و مانیتور بزرگ: کمی بزرگ‌تر و شبیه دسکتاپی که دوست داری */
        @media (min-width: 900px) {
          .dash-grid {
            width: min(900px, 100%);
            gap: 16px;
          }
          .dash-tile {
            min-height: 120px;
            padding: 14px 8px;
          }
          .dash-icon {
            width: 40px;
            height: 40px;
          }
          .dash-label {
            font-size: 14px;
          }
          .dash-title {
            font-size: 24px;
          }
        }
      `}</style>
    </main>
  );
}
