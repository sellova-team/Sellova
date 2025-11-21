"use client";

import { useState } from "react";
import NextImage from "next/image";
import { useLang } from "../../lib/lang";

export default function BrandOverlayPage() {
  const { messages } = useLang();
  const t = messages.brandOverlay;

  const [productSrc, setProductSrc] = useState<string>("/sample-product.png");
  const [logo, setLogo] = useState("");
  const [position, setPosition] = useState("bottom-right");
  const [size, setSize] = useState(25);
  const [opacity, setOpacity] = useState(90);
  const [padding, setPadding] = useState(10);

  // --- سازنده و دانلود خروجی ---
  const downloadComposed = async () => {
    const load = (src: string) =>
      new Promise<HTMLImageElement>((res, rej) => {
        const img = document.createElement("img");
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => res(img);
        img.onerror = rej;
      });

    try {
      const prod = await load(productSrc);
      const hasLogo = !!logo;
      const lg = hasLogo ? await load(logo) : null;

      const cw = prod.naturalWidth || prod.width;
      const ch = prod.naturalHeight || prod.height;

      const canvas = document.createElement("canvas");
      canvas.width = cw;
      canvas.height = ch;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(prod, 0, 0, cw, ch);

      if (lg) {
        const w = Math.max(1, Math.round((size / 100) * cw));
        const h = Math.round(
          (lg.naturalHeight || lg.height) *
            (w / (lg.naturalWidth || lg.width))
        );

        const pad = Math.max(0, padding);
        let x = pad;
        let y = pad;

        if (position === "top-right") {
          x = cw - w - pad;
          y = pad;
        } else if (position === "bottom-left") {
          x = pad;
          y = ch - h - pad;
        } else if (position === "bottom-right") {
          x = cw - w - pad;
          y = ch - h - pad;
        } else if (position === "center") {
          x = Math.round((cw - w) / 2);
          y = Math.round((ch - h) / 2);
        }

        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0, opacity / 100));
        ctx.drawImage(lg, x, y, w, h);
        ctx.restore();
      }

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "sellova_brand_overlay.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }, "image/png");
    } catch {
      alert("Download failed. Please try again.");
    }
  };
  // --- END ---

  return (
    <main className="pg">
      <header className="hdr">
        <NextImage
          src="/logo.png"
          alt="Sellova"
          width={300}
          height={150}
          className="logo"
          priority
        />
      </header>

      <h1 className="title">{t.title}</h1>

      <section className="grid">
        {/* ----- Left (controls) ----- */}
        <article className="card">
          {/* آپلود عکس محصول */}
          <div className="field">
            <label className="label">{t.productUploadLabel}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setProductSrc(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </div>

          {/* آپلود لوگو */}
          <div className="field">
            <label className="label">{t.logoUploadLabel}</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setLogo(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
          </div>

          <div className="field">
            <label className="label">{t.positionLabel}</label>
            <select
              className="select"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="top-left">{t.positionTopLeft}</option>
              <option value="top-right">{t.positionTopRight}</option>
              <option value="bottom-left">{t.positionBottomLeft}</option>
              <option value="bottom-right">{t.positionBottomRight}</option>
              <option value="center">{t.positionCenter}</option>
            </select>
          </div>

          <div className="field">
            <label className="label">{t.sizeLabel}</label>
            <input
              type="range"
              min={10}
              max={60}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label className="label">{t.opacityLabel}</label>
            <input
              type="range"
              min={20}
              max={100}
              value={opacity}
              onChange={(e) => setOpacity(Number(e.target.value))}
            />
          </div>

          <div className="field">
            <label className="label">{t.paddingLabel}</label>
            <input
              type="range"
              min={0}
              max={40}
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
            />
          </div>

          {/* دکمه دانلود */}
          <button
            className="btn btnPrimary btnBlock"
            onClick={downloadComposed}
          >
            {t.downloadButton}
          </button>
        </article>

        {/* ----- Right (preview) ----- */}
        <aside className="card previewCard">
          <div className="previewFrame">
            {/* محصول */}
            <NextImage
              src={productSrc}
              width={350}
              height={350}
              className="previewProduct"
              alt={t.productAlt}
            />

            {/* لوگو روی محصول */}
            {logo && (
              <NextImage
                src={logo}
                alt={t.logoAlt}
                width={500}
                height={500}
                className="brandLogo"
                style={{
                  opacity: opacity / 100,
                  width: `${size}%`,
                  position: "absolute",
                  padding: `${padding}px`,
                }}
              />
            )}
          </div>

          {/* دکمه‌ی دانلود دوم زیر پیش‌نمایش */}
          <button
            className="btn btnPrimary btnBlock"
            onClick={downloadComposed}
            style={{ marginTop: 12 }}
          >
            {t.downloadButton}
          </button>
        </aside>
      </section>

      <style jsx>{`
        .pg {
          min-height: 100vh;
          background: #0b1e3d;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
          color: #000;
        }
        .hdr {
          margin-bottom: 5px;
        }
        .logo {
          width: 300px;
          height: auto;
        }
        .title {
          color: #fff;
          margin: 30px 0;
          font-size: 28px;
          font-weight: 700;
          text-align: center;
        }
        .grid {
          width: 100%;
          max-width: 1160px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }
        .card {
          background: #fff;
          border-radius: 14px;
          padding: 16px;
          border: 1px solid #111;
        }
        .field {
          margin-top: 14px;
          color: #111;
        }
        .label {
          font-weight: 700;
          margin-bottom: 6px;
          display: block;
        }
        .select {
          width: 100%;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #111;
        }
        .btn {
          margin-top: 18px;
          height: 42px;
          border-radius: 10px;
          background: #1483ff;
          color: #fff;
          border: 1px solid #0b57d0;
          font-weight: 700;
          cursor: pointer;
        }
        .btnBlock {
          width: 100%;
        }
        .previewCard {
          background: #fff;
          border-radius: 14px;
        }
        .previewFrame {
          border: 1px solid #111;
          border-radius: 12px;
          background: #fff;
          min-height: 420px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .previewProduct {
          width: 70%;
          height: auto;
        }
        .brandLogo {
          pointer-events: none;
        }

        /* فقط موبایل – استایل دسکتاپ دست نمی‌خوره */
        @media (max-width: 900px) {
          .pg {
            padding: 12px 0 24px;
          }
          .logo {
            width: 190px;
          }
          .title {
            font-size: 22px;
            margin: 18px 0 16px;
          }
          .grid {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 0 10px;
          }
          .card {
            max-width: 95%;
            margin: 0 auto;
          }
          .previewFrame {
            min-height: 300px;
          }
          .previewProduct {
            width: 82%;
          }
        }
      `}</style>
    </main>
  );
}