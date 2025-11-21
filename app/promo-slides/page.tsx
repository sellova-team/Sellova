"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "../../lib/lang";

const LOGO_SRC = "/logo.png";
const SLIDES = ["/atr1.png", "/atr2.png", "/atr3.png"];

type Platform =
  | "instagram"
  | "tiktok"
  | "youtube"
  | "facebook"
  | "pinterest"
  | "shopify"
  | "other";

/* Arrow keys navigation */
function useKeyNav(next: () => void, prev: () => void) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [next, prev]);
}

export default function PromoSlidesPage() {
  const { messages } = useLang();
  const t = messages.promo;

  /* ===== Left form states (UI-only for now) ===== */
  const [platform, setPlatform] = useState<Platform>("instagram");
  const [productType, setProductType] = useState("");
  const [specs, setSpecs] = useState("");
  const [price, setPrice] = useState("");
  const [notes, setNotes] = useState("");
  const [productFile, setProductFile] = useState<File | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  /* ===== Carousel ===== */
  const [idx, setIdx] = useState(0);
  const n = SLIDES.length;
  const next = useCallback(() => setIdx((i) => (i + 1) % n), [n]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + n) % n), [n]);
  useKeyNav(next, prev);

  /* Keep image ratio for precise frame */
  const [nat, setNat] = useState({ w: 1, h: 1 });
  const onLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const im = e.currentTarget;
    setNat({ w: im.naturalWidth || 1, h: im.naturalHeight || 1 });
  };
  const aspect = `${nat.w} / ${nat.h}`;

  /* Mobile swipe */
  const start = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) =>
    (start.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (start.current == null) return;
    const dx = e.changedTouches[0].clientX - start.current;
    if (dx < -40) next();
    else if (dx > 40) prev();
    start.current = null;
  };

  /* Download current slide (original file) */
  const download = () => {
    const href = SLIDES[idx];
    const a = document.createElement("a");
    a.href = href;
    a.download = `promo_slide_${idx + 1}.png`;
    a.click();
  };

  return (
    <main className="page">
      <header className="top">
        <img src={LOGO_SRC} alt="Sellova" className="logo" />
      </header>

      <section className="grid">
        {/* ============ LEFT: FORM ============ */}
        <aside className="panel form">
          <h2 className="h">{t.projectInputs}</h2>

          <label className="label">{t.uploadProduct}</label>
          <input
            type="file"
            accept="image/*"
            className="input white"
            onChange={(e) => setProductFile(e.target.files?.[0] ?? null)}
          />

          <label className="label">{t.uploadLogo}</label>
          <input
            type="file"
            accept="image/*"
            className="input white"
            onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)}
          />

          <div className="cols2">
            <div>
              <label className="label">{t.productTypeLabel}</label>
              <input
                className="input white big"
                placeholder={t.productTypePlaceholder}
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              />
            </div>
            <div>
              <label className="label">{t.priceLabel}</label>
              <input
                className="input white big"
                placeholder={t.pricePlaceholder}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <label className="label">{t.specsLabel}</label>
          <input
            className="input white big"
            placeholder={t.specsPlaceholder}
            value={specs}
            onChange={(e) => setSpecs(e.target.value)}
          />

          <label className="label">{t.platformLabel}</label>
          <select
            className="input white big"
            value={platform}
            onChange={(e) => setPlatform(e.target.value as Platform)}
          >
            <option value="instagram">Instagram</option>
            <option value="tiktok">TikTok</option>
            <option value="youtube">YouTube</option>
            <option value="facebook">Facebook</option>
            <option value="pinterest">Pinterest</option>
            <option value="shopify">Shopify</option>
            <option value="other">{t.otherOption}</option>
          </select>

          <label className="label">{t.notesLabel}</label>
          <textarea
            className="input white big"
            rows={3}
            placeholder={t.notesPlaceholder}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="hint">
            {t.creditsLabel}: <b>17</b> {t.creditsText}
          </div>

          <div className="row">
            <button className="btn primary">{t.generateButton}</button>
            <button className="btn ghost" onClick={download}>
              {t.downloadButton}
            </button>
          </div>
        </aside>

        {/* ============ RIGHT: PREVIEW ============ */}
        <article className="panel preview">
          <div
            className="viewer"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="frame" style={{ aspectRatio: aspect }}>
              <img
                src={SLIDES[idx]}
                alt=""
                className="img"
                onLoad={onLoad}
                draggable={false}
              />
            </div>

            <div className="controls">
              <button className="btn ghost" onClick={prev}>
                {t.prevButton}
              </button>
              <button className="btn primary" onClick={next}>
                {t.nextButton}
              </button>
            </div>

            <p className="counter">
              {t.slideLabel} <b>{idx + 1}</b> / {SLIDES.length}
            </p>
          </div>
        </article>
      </section>

      <style jsx>{`
        /* ===== Base (دسکتاپ همون می‌مونه) ===== */
        .page {
          min-height: 100vh;
          background:
            radial-gradient(900px 520px at 18% -8%, rgba(35, 68, 140, 0.22), rgba(9, 19, 38, 1) 55%),
            linear-gradient(180deg, #0b1326 0%, #0a1124 70%);
          padding: 18px 14px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
        }
        .top {
          margin: 6px 0 16px;
        }
        .logo {
          width: 210px;
          height: auto;
          display: block;
        }

        .grid {
          width: min(98vw, 1280px);
          display: grid;
          grid-template-columns: 520px 1fr; /* فرم بزرگ‌تر از عکس */
          gap: 22px;
        }
        @media (min-width: 1100px) {
          .grid {
            align-items: flex-start;
          }
        }
        @media (max-width: 1100px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        .panel {
          background: linear-gradient(180deg, #0f1534, #0b1226 60%);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 18px;
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
          padding: 18px;
        }

        /* ===== Form ===== */
        .form .h {
          margin: 0 0 12px;
          font-weight: 800;
          font-size: 22px;
        }
        .label {
          display: block;
          margin: 12px 2px 6px;
          font-size: 16px;
          opacity: 0.95;
        }
        .input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.18);
          padding: 12px 14px;
          font-size: 16px;
          outline: none;
        }
        .white {
          background: #ffffff;
          color: #111;
        }
        .big {
          font-size: 16px;
        }
        .input:focus {
          border-color: #1483ff;
          box-shadow: 0 0 0 3px rgba(20, 131, 255, 0.22);
        }
        .cols2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 560px) {
          .cols2 {
            grid-template-columns: 1fr;
          }
        }
        .hint {
          margin-top: 12px;
          font-size: 13px;
          opacity: 0.9;
        }
        .row {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        /* ===== Preview ===== */
        .preview {
          display: grid;
          place-items: center;
        }
        .viewer {
          width: min(96%, 920px);
          display: grid;
          gap: 16px;
          justify-items: center;
        }

        .frame {
          display: inline-block;
          padding: 14px;
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-radius: 16px;
          background: rgba(0, 0, 0, 0.2);
          max-width: 420px;
          max-height: 78vh;
          aspect-ratio: auto;
        }
        .img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          user-select: none;
          -webkit-user-drag: none;
        }

        .controls {
          width: 100%;
          max-width: 420px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .btn {
          height: 46px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 800;
          cursor: pointer;
          border: 1px solid transparent;
          font-size: 15px;
        }
        .primary {
          background: #1483ff;
          color: #fff;
          border-color: #0b57d0;
        }
        .ghost {
          background: #ffffff;
          color: #0b57d0;
          border-color: #0b57d0;
        }

        .counter {
          font-size: 13px;
          opacity: 0.9;
        }

        /* ===== فقط برای موبایل: کوچیک و مرتب کردن ===== */
        @media (max-width: 768px) {
          .page {
            padding: 12px 10px 28px;
          }
          .logo {
            width: 170px;
          }
          .grid {
            gap: 16px;
          }
          .panel {
            padding: 14px 12px;
            border-radius: 14px;
          }
          .form .h {
            font-size: 18px;
          }
          .label {
            margin: 8px 1px 4px;
            font-size: 14px;
          }
          .input {
            padding: 9px 10px;
            font-size: 14px;
            border-radius: 10px;
          }
          .hint {
            font-size: 12px;
          }
          .btn {
            height: 40px;
            padding: 0 14px;
            font-size: 14px;
          }
          .viewer {
            width: 100%;
            gap: 12px;
          }
          .frame {
            max-width: 320px;
            padding: 10px;
            border-radius: 12px;
          }
          .controls {
            max-width: 320px;
          }
          .counter {
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}
