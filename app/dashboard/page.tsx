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

export default function DashboardPage() {
  const { locale, setLocale, messages } = useLang();

  const toggleLang = () => {
    setLocale(locale === "en" ? "fa" : "en");
  };

  const items = [
    { href: "/guide", label: messages.dashboard.cards.uploadGuide, icon: ICONS.upload },
    { href: "/generate-image", label: messages.dashboard.cards.generateImage, icon: ICONS.image },
    { href: "/generate-video", label: messages.dashboard.cards.generateVideo, icon: ICONS.video },
    { href: "/avatar", label: messages.dashboard.cards.createAvatar, icon: ICONS.avatar },
    {
      href: "/hashtags",
      label: messages.dashboard.cards.captionsHashtags,
      icon: ICONS.captions,
    },
    {
      href: "/advisory-consultation",
      label: messages.dashboard.cards.advisoryAnalysis,
      icon: ICONS.advisory,
    },
    { href: "/upgrade-plan", label: messages.dashboard.cards.upgradePlan, icon: ICONS.upgrade },
    { href: "/settings", label: messages.dashboard.cards.settings, icon: ICONS.settings },
    {
      href: "/brand-overlay",
      label: messages.dashboard.cards.brandOverlay,
      icon: ICONS.brandOverlay,
    },
    {
      href: "/promo-slides",
      label: messages.dashboard.cards.promoSlides,
      icon: ICONS.slides,
    },
    {
      href: "/guide-center",
      label: messages.dashboard.cards.sellovaGuide,
      icon: ICONS.guideCenter,
    },
    {
      href: "/academy-insight",
      label: messages.dashboard.cards.academyInsight,
      icon: ICONS.academyInsight,
    },
  ];

  return (
    <main className="page" dir={locale === "fa" ? "rtl" : "ltr"}>
      {/* دکمه زبان */}
      <div className="lang-bar">
        <button className="lang-btn" onClick={toggleLang}>
          {locale === "en" ? "🇮🇷 فارسی" : "🇬🇧 English"}
        </button>
      </div>

      {/* لوگو */}
      <div className="logo-wrap">
        <img src="/logo.png" alt="Sellova" className="logo" />
      </div>

      {/* متن خوش آمد */}
      <h1 className="welcome">{messages.dashboard.welcome}</h1>

      {/* گرید ۳ ستونه – هم در دسکتاپ هم موبایل */}
      <section className="dash-grid">
        {items.map((item) => (
          <Link href={item.href} key={item.href} className="tile">
            <div className="icon-box">
              <img src={item.icon} alt={item.label} className="icon" />
            </div>
            <div className="tile-label">{item.label}</div>
          </Link>
        ))}
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 24px 12px 40px;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .lang-bar {
          position: fixed;
          top: 14px;
          right: 16px;
          z-index: 10;
        }

        .lang-btn {
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          padding: 5px 14px;
          font-size: 13px;
          cursor: pointer;
          backdrop-filter: blur(4px);
        }

        .logo-wrap {
          margin-top: 40px;
          margin-bottom: 10px;
        }

        .logo {
          width: 260px;
          height: auto;
        }

        .welcome {
          color: #ffffff;
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 22px;
          text-align: center;
        }

        .dash-grid {
          width: min(920px, 100%);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .tile {
          background: #ffffff;
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.9);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
          padding: 14px 8px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }

        .tile:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.3);
        }

        .icon-box {
          width: 78px;
          height: 78px;
          border-radius: 22px;
          background: #f7fafc;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .tile-label {
          text-align: center;
          color: #0b1e3d;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.3;
          padding: 0 4px;
          word-break: break-word;
        }

        /* موبایل – هنوز ۳ ستونه، فقط همه‌چیز کوچک‌تر و مرتب‌تر */
        @media (max-width: 768px) {
          .logo {
            width: 210px;
          }
          .welcome {
            font-size: 22px;
          }
          .dash-grid {
            gap: 10px;
          }
          .tile {
            padding: 10px 4px 8px;
            border-radius: 16px;
          }
          .icon-box {
            width: 68px;
            height: 68px;
            border-radius: 18px;
          }
          .icon {
            width: 32px;
            height: 32px;
          }
          .tile-label {
            font-size: 11px;
          }
        }

        /* خیلی گوشی کوچک (مثلاً عرض 360) باز هم ۳ ستونه ولی فشرده */
        @media (max-width: 400px) {
          .page {
            padding: 18px 6px 30px;
          }
          .welcome {
            font-size: 20px;
          }
          .dash-grid {
            gap: 8px;
          }
          .icon-box {
            width: 60px;
            height: 60px;
          }
          .icon {
            width: 28px;
            height: 28px;
          }
          .tile-label {
            font-size: 10px;
          }
        }
      `}</style>
    </main>
  );
}
