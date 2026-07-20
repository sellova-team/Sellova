"use client";

import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import React, { CSSProperties, useEffect, useState } from "react";
import Link from "next/link";
import { useLang, Locale } from "../../../lib/lang";

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
  golden: "/assets/icons/crown.png",
  sellerHelp: "/assets/icons/seller-help.png",

};

const LANGS = [
   { code: "en", label: "English", flag: "/flags/en.jpg" },
  { code: "fa", label: "فارسی", flag: "/flags/fa.jpg" },
  { code: "tr", label: "Türkçe", flag: "/flags/tr.jpg" },
  { code: "ur", label: "Urdu", flag: "/flags/ur.jpg" },
  { code: "ar", label: "Arabic", flag: "/flags/sa.jpg" },
  { code: "az", label: "Azerbaijani", flag: "/flags/az.jpg" },
  { code: "ar-eg", label: "Egypt", flag: "/flags/eg.jpg" },
  { code: "uz", label: "Uzbek", flag: "/flags/uz.jpg" },
  { code: "kk", label: "Kazakh", flag: "/flags/kz.jpg" },
];
const styles: { [k: string]: CSSProperties } = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "28px 16px 60px",
    background:
      "radial-gradient(circle at top, #142850 0%, #0b1020 40%, #070a12 100%)",
  },

  logoWrap: {
    marginTop: 30,
    marginBottom: 6,
    display: "flex",
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 18,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  grid: {
    display: "grid",
    gap: 14,
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "min(980px, 92vw)",
  },

  card: {
    background: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    padding: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(14px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
    transition: "all .25s ease",
    cursor: "pointer",
  },

  cardInner: {
    display: "grid",
    gridTemplateColumns: "60px 1fr",
    alignItems: "center",
    gap: 12,
    minHeight: 70,
  },

  icon: { width: 34, height: 34, objectFit: "contain" },

  cardTitle: {
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
  },

  iconWrap: {
    display: "grid",
    placeItems: "center",
  },

  langBar: {
    position: "absolute",
    top: 20,
    right: 20,
  },

  langButton: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,.15)",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    fontSize: 13,
    padding: "8px 14px",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
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
    <div
 style={
  href === "/golden-plan"
    ? {
        ...cardStyle,
        background:
          "linear-gradient(135deg, #FFD700 0%, #FFB300 50%, #FF8F00 100%)",
        transform: "scale(1.12)",
        boxShadow: "0 0 35px rgba(255, 193, 7, 0.55)",
        border: "1px solid rgba(255, 215, 0, 0.8)",
        position: "relative",
        zIndex: 10,
      }
    : cardStyle
}
>
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

  const [openLang, setOpenLang] = useState(false);

  const [role, setRole] = useState("");
const [credit, setCredit] = useState<number | null>(null);
const [loadingUser, setLoadingUser] = useState(true);
const [plan, setPlan] = useState("");

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

  useEffect(() => {
  const uid = localStorage.getItem("uid");
  if (!uid) return;

  async function loadUser() {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();
      setRole(data.role);
      setCredit(data.creditBalance);
       setPlan(data.planType || "Free");
    }

    setLoadingUser(false);
  }

  loadUser();
}, []);

  const localizedItems = [
  { href: "/guide", title: messages.dashboard.cards.uploadGuide, iconSrc: ICONS.upload },
  { href: "/generate-image", title: messages.dashboard.cards.generateImage, iconSrc: ICONS.image },
  { href: "/generate-video", title: messages.dashboard.cards.generateVideo, iconSrc: ICONS.video },

  // ⭐ طلایی وسط
  { href: "/golden-plan", title: messages.dashboard.cards.goldenPlan, iconSrc: ICONS.golden },

  { href: "/avatar", title: messages.dashboard.cards.createAvatar, iconSrc: ICONS.avatar },

  { href: "/upgrade-plan", title: messages.dashboard.cards.upgradePlan, iconSrc: ICONS.upgrade },
  { href: "/settings", title: messages.dashboard.cards.settings, iconSrc: ICONS.settings },
];

  return (
    <main
      style={styles.page}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className="dash-page"
    >
      <div style={styles.langBar} className="dash-lang-bar">
  <div style={{ position: "relative" }}>

    <button
      style={styles.langButton}
      onClick={() => setOpenLang(!openLang)}
    >
      🌍 {LANGS.find(l => l.code === locale)?.label || "Language"}
    </button>

    {openLang && (
  <div
    style={{
      position: "absolute",
      top: 45,
      right: 0,
      background: "#fff",
      borderRadius: 10,
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      zIndex: 999,
      width: 200,
    }}
  >
    {LANGS.map((l) => (
      <div
        key={l.code}
        onClick={() => {
          setLocale(l.code as Locale);
          setOpenLang(false);
        }}
        style={{
          padding: "10px 12px",
          cursor: "pointer",
          fontSize: 14,
          display: "flex",
          alignItems: "center",
          gap: 10,
          borderBottom: "1px solid #eee",
          background: locale === l.code ? "#eef2ff" : "#fff",
          fontWeight: locale === l.code ? 700 : 500,
        }}
      >
       <img
  src={l.flag}
  width={20}
  height={20}
  style={{ borderRadius: 3 }}
/>

        <span>{l.label}</span>
      </div>
    ))}
  </div>
)}

  </div>
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

{!loadingUser && (
  <div
    style={{
      color: "white",
      marginBottom: 20,
      fontSize: 18,
      fontWeight: 700,
    }}
  >
    <div>Plan: {plan}</div>
    <div>Role: {role}</div>

    {role === "owner" ? (
      <div>Credits: Unlimited</div>
    ) : (
      <div>Credits: {credit}</div>
    )}
  </div>
)}


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
 
        .grid div:hover {
         transfrom: translateY(-4px) scale(1.02);
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

  /* دکمه زبان – بره بالاتر و کوچیک‌تر بشه */
  .dash-lang-bar {
    top: 8px !important; /* کاملاً بالا */
    right: 10px !important; /* کاملاً سمت راست */
  }

  .dash-lang-btn {
    font-size: 11px !important;
    padding: 3px 8px !important;
    border-radius: 999px !important;
  }

  /* لوگو همون بمونه، فقط کمی فاصله */
  .dash-logo-wrap {
    margin-top: 24px !important;
    margin-bottom: 6px !important;
  }

  .dash-logo {
    width: 160px !important;
    height: auto !important;
  }

  /* عنوان از کارت‌ها فاصله بگیره */
  .dash-title {
    font-size: 16px !important;
    margin-bottom: 18px !important;
  }

  /* گرید کارت‌ها – کمی پایین‌تر بیاد و دو ستونه بماند */
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    width: 100%;
    max-width: 340px;
    padding: 0 12px;
    margin: 0 auto;
    box-sizing: border-box;
    transform: none !important; /* اون translateY(-10px) برای موبایل خنثی شود */
  }
}
      `}</style>
    </main>
  );
}
